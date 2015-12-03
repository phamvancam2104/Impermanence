import "std.sol";

///@title The Impermance of Space; Galaxy Contract.
contract Galaxy is named("Galaxy") {
    enum TechTypes
    {
        Atk,
        Def,
        Eng
    }
    
    enum SectorType {
        Empty,
        AtkAsteriod,
        DefAsteriod,
        EngAsteriod,
        AtkMonolith,
        DefMonolith,
        EngMonolith,
        UnobRift,
        AtkGreatMachine,
        DefGreatMachine,
        EngGreatMachine,
        Planet,
        Sun,
        Wormhole,
        AscensionGate
    }
    
    struct Sector {
        SectorType st;
        uint[] localShips;
    }
    
    struct System {
        Sector[15][15] map;
        string name;
        uint[3] techLevels;
        bool exists;
        mapping (uint8 => bytes32) Wormholes;
    }
    
    ///@dev convert an array of uints into a single uint. 
    function compressCoords(uint8[2] coords) constant returns (uint8)
    {
        return coords[0] + (coords[1] * 16);
    }
    
    mapping (bytes32 => System) public galacticMap;
    
    // And now for a zillion helper functions. Recursive structs and 
    // getters do not mix. The good news is that calls are free.
    
    function getSectorType(bytes32 s, uint8 x, uint8 y) 
        constant 
        public 
        returns(SectorType) 
    {
        return galacticMap[s].map[x][y].st;
    }

    function Galaxy() {
        // This is a kludge to get the address of the Galaxy.
        log0("A new galaxy is born!");
    }

    event systemAdded(string indexed _name, bytes32 indexed systemHash);

    function addSystem(string _name) {
        // Hack alert!
        bytes32 systemHash = sha3(_name);
        System newSystem = galacticMap[systemHash];
        newSystem.name = _name;
        newSystem.exists = true;
        generateMap(systemHash);
        systemAdded(_name, systemHash);
        //galacticMap.push(newSystem);
    }
    
    // We want the hash, not a pointer, because we need the hash as a seed.
    function generateMap(bytes32 systemHash) internal {
        System newSystem = galacticMap[systemHash];
        newSystem.map[7][7].st = SectorType.Sun;
        uint256 seed = uint256(systemHash);
        uint8 x;
        uint8 y;
        uint8 newST;
        for(uint8 i = 0; i < 16; i++) {
            x = uint8(seed % 16);
            seed /= 16;
            y = uint8(seed % 16);
            seed /= 16;
            newST = uint8(seed % 16);
            seed /= 256;
            if((x == 15) || (y == 15)) {
                continue; // We're off the map.
            } else {
                Sector chosenSector = newSystem.map[x][y];
                if(chosenSector.st != SectorType.Empty) continue;
                if(newST <= 2) {
                    chosenSector.st = SectorType.AtkAsteriod;
                } else if (newST <= 5) {
                    chosenSector.st = SectorType.DefAsteriod;
                } else if (newST <= 8) {
                    chosenSector.st = SectorType.EngAsteriod;
                } else if (newST == 9) {
                    chosenSector.st = SectorType.AtkMonolith;
                } else if (newST == 10) {
                    chosenSector.st = SectorType.DefMonolith;
                } else if (newST == 11) {
                    chosenSector.st = SectorType.EngMonolith;
                } else if (newST <= 13) {
                    chosenSector.st = SectorType.UnobRift;
                } else {
                    chosenSector.st = SectorType.Planet;
                }
            }
        }
    }
    
    // TODO: Make internal.
    function createLink(
        bytes32 _from, 
        uint8[2] _fromCoords, 
        bytes32 _to, 
        uint8[2] _toCoords
    ) {
        System fromSystem = galacticMap[_from];
        Sector fromSector = fromSystem.map[_fromCoords[0]][_fromCoords[1]];
        if(fromSector.st != SectorType.Empty) 
            throw;
        System toSystem = galacticMap[_to];
        Sector toSector = toSystem.map[_toCoords[0]][_toCoords[1]];
        if(toSector.st != SectorType.Empty) 
            throw;
        fromSector.st = SectorType.Wormhole;
        fromSystem.Wormholes[compressCoords(_fromCoords)] = _to;
        toSector.st = SectorType.Wormhole;
        toSystem.Wormholes[compressCoords(_toCoords)] = _from;
    }
}