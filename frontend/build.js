module.exports = 
{"contracts":{"Galaxy":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"cargoType\",\"type\":\"uint8\"}],\"name\":\"cheatCargo\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"system\",\"type\":\"bytes32\"}],\"name\":\"getSystemMap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8[225]\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_system\",\"type\":\"bytes32\"},{\"name\":\"_coords\",\"type\":\"uint8\"},{\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"spawnCrane\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"system\",\"type\":\"bytes32\"}],\"name\":\"getSystemShips\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"_to\",\"type\":\"bytes32\"},{\"name\":\"_toCoords\",\"type\":\"uint8\"}],\"name\":\"createWormhole\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"}],\"name\":\"mine\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"diff\",\"type\":\"uint16\"}],\"name\":\"canMine\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferShip\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"shipRegistry\",\"outputs\":[{\"name\":\"exists\",\"type\":\"bool\"},{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"system\",\"type\":\"bytes32\"},{\"name\":\"coords\",\"type\":\"uint8\"},{\"name\":\"energy\",\"type\":\"uint256\"},{\"name\":\"lastRefreshed\",\"type\":\"uint256\"},{\"name\":\"atk\",\"type\":\"uint256\"},{\"name\":\"def\",\"type\":\"uint256\"},{\"name\":\"eng\",\"type\":\"uint256\"},{\"name\":\"damage\",\"type\":\"uint256\"},{\"name\":\"massRatio\",\"type\":\"uint256\"},{\"name\":\"name\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"cargoType\",\"type\":\"uint8\"}],\"name\":\"upgrade\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"galacticMap\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"exists\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"system\",\"type\":\"bytes32\"},{\"name\":\"coords\",\"type\":\"uint8\"}],\"name\":\"getWormhole\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"_cargoType\",\"type\":\"uint8\"}],\"name\":\"getShipCargo\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"destCoords\",\"type\":\"uint8\"}],\"name\":\"jump\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"addSystem\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"_targetID\",\"type\":\"uint256\"}],\"name\":\"attack\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"},{\"name\":\"_newCoords\",\"type\":\"uint8\"}],\"name\":\"impulse\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_shipID\",\"type\":\"uint256\"}],\"name\":\"getShipEnergy\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_systemHash\",\"type\":\"bytes32\"}],\"name\":\"systemAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"system\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"coords\",\"type\":\"uint8\"},{\"indexed\":true,\"name\":\"shipID\",\"type\":\"uint256\"}],\"name\":\"shipActivity\",\"type\":\"event\"}]\n","bin":"60606040525b60016002600050819055505b6124828061001f6000396000f3606060405236156100f8576000357c0100000000000000000000000000000000000000000000000000000000900480631f1d03fb146100fa5780632928e8081461011b57806329df493f146101625780634423ba28146101ca5780634562dbaa1461022a5780634d474898146102545780634f552f191461026c5780635e248149146102a1578063641e51e8146102c25780637dfe5b92146103d65780638458aa0f146103f7578063860ca103146104ac578063cd122aaa146104e1578063cd6171df14610516578063d3a030ff14610537578063e1fa76381461058d578063e82d8eb0146105ae578063f1fceac6146105cf576100f8565b005b6101196004808035906020019091908035906020019091905050611874565b005b6101316004808035906020019091905050610631565b604051808260e1602002808383829060006004602084601f0104600f02600301f15090500191505060405180910390f35b6101c86004808035906020019091908035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610aa4565b005b6101e06004808035906020019091905050610727565b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b6102526004808035906020019091908035906020019091908035906020019091905050611cb4565b005b61026a6004808035906020019091905050611112565b005b61028b6004808035906020019091908035906020019091905050611057565b6040518082815260200191505060405180910390f35b6102c06004808035906020019091908035906020019091905050611973565b005b6102d86004808035906020019091905050610915565b604051808d81526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a60ff168152602001898152602001888152602001878152602001868152602001858152602001848152602001838152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103bc5780601f10610391576101008083540402835291602001916103bc565b820191906000526020600020905b81548152906001019060200180831161039f57829003601f168201915b50509d505050505050505050505050505060405180910390f35b6103f560048080359060200190919080359060200190919050506114ba565b005b61040d60048080359060200190919050506105fb565b604051808060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561049c5780601f106104715761010080835404028352916020019161049c565b820191906000526020600020905b81548152906001019060200180831161047f57829003601f168201915b5050935050505060405180910390f35b6104cb60048080359060200190919080359060200190919050506106e1565b6040518082815260200191505060405180910390f35b6105006004808035906020019091908035906020019091905050610a64565b6040518082815260200191505060405180910390f35b6105356004808035906020019091908035906020019091905050610eee565b005b61058b6004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506107b8565b005b6105ac6004808035906020019091908035906020019091905050611ae6565b005b6105cd6004808035906020019091908035906020019091905050610d60565b005b6105e560048080359060200190919050506109cc565b6040518082815260200191505060405180910390f35b6000600050602052806000526040600020600091509050806009016000509080600a0160009054906101000a900460ff16905082565b611c206040519081016040528060e1905b6000815260200190600190039081610642579050506000600050600083815260200190815260200160002060005060000160005060e180602002604051908101604052809291908260e180156106d0576020028201916000905b82829054906101000a900460ff168152602001906001019060208260000104928301926001038202915080841161069c5790505b505050505090506106dc565b919050565b600060006000506000848152602001908152602001600020600050600e0160005060008360ff168152602001908152602001600020600050549050610721565b92915050565b6020604051908101604052806000815260200150600060005060008381526020019081526020016000206000506008016000508054806020026020016040519081016040528092919081815260200182805480156107a757602002820191906000526020600020905b816000505481526020019060010190808311610790575b505050505090506107b3565b919050565b6000600082604051808280519060200190808383829060006004602084601f0104600f02600301f1509050019150506040518091039020915060006000506000838152602001908152602001600020600050905082816009016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061085d57805160ff191683800117855561088e565b8280016001018555821561088e579182015b8281111561088d57825182600050559160200191906001019061086f565b5b5090506108b9919061089b565b808211156108b5576000818150600090555060010161089b565b5090565b5050600181600a0160006101000a81548160ff021916908302179055506108df82611e87565b817f9a567fb7eaad5d54b5eecfbb6cb1cf9d85f97724df5c2930c3fd4c913c31674960405180905060405180910390a25b505050565b60016000506020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160005054908060020160009054906101000a900460ff16908060030160005054908060040160005054908060050160005054908060060160005054908060070160005054908060080160005054908060090160005054908060110160005090508c565b60006001600050600083815260200190815260200160002060005073__ShipLib_______________________________639a1ba8839091604051827c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038160008760325a03f21561000257505050604051805190602001509050610a5f565b919050565b600060016000506000848152602001908152602001600020600050600a016000508260078110156100025790900160005b50549050610a9e565b92915050565b600060006000600060005060008781526020019081526020016000206000506000016000508560e1811015610002579090602091828204019190065b9054906101000a900460ff169250600b83141515610afd57610002565b60026000818150548092919060010191905055915060016000506000838152602001908152602001600020600050905060018160000160006101000a81548160ff02191690830217905550858160010160005081905550848160020160006101000a81548160ff0219169083021790555060008160030160005081905550338160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550428160040160005081905550600181600601600050819055506001816007016000508190555083816011016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c1f57805160ff1916838001178555610c50565b82800160010185558215610c50579182015b82811115610c4f578251826000505591602001919060010190610c31565b5b509050610c7b9190610c5d565b80821115610c775760008181506000905550600101610c5d565b5090565b50508073__ShipLib_______________________________63fdde00d59091604051827c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038160008760325a03f215610002575050508073__ShipLib_______________________________63cd37680d9091604051827c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038160008760325a03f21561000257505050610d57868361215f565b5b505050505050565b60006000600060006000600060006000893373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610deb5761000256610ee0565b60009850600160005060008c8152602001908152602001600020600050975060108860020160009054906101000a900460ff1660ff1604965060108a60ff16049550858703945060008560000b1215610e66577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8502945084505b60108860020160009054906101000a900460ff1660ff1604935060108a60ff16049250828403915060008260000b1215610ec2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8202915081505b81850160000b98508850610edf8b89600101600050548c8c6121eb565b5b505b50505050505050505050565b6000600060006000853373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610f71576100025661104d565b6001600050600088815260200190815260200160002060005094508460020160009054906101000a900460ff1693506000600050600086600101600050548152602001908152602001600020600050600e0160005060008560ff1681526020019081526020016000206000505492506000600102831415610ff157610002565b600060005060008481526020019081526020016000206000509150846001016000505482600e0160005060008860ff1681526020019081526020016000206000505414151561103f57610002565b61104c87848860016121eb565b5b505b505050505050565b60006000600060016000506000868152602001908152602001600020600050915060006000506000836001016000505481526020019081526020016000206000506000016000508260020160009054906101000a900460ff1660e1811015610002579090602091828204019190065b9054906101000a900460ff16905060008461ffff1686600143034060405180838152602001828152602001925050506040518091039020600190040614925061110a565b505092915050565b6000600060006000843373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561119557610002566114b1565b6001600050600087815260200190815260200160002060005094508473__ShipLib_______________________________63254c2a5e90916008604051837c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060006040518083038160008760325a03f2156100025750505060006000506000866001016000505481526020019081526020016000206000506000016000508560020160009054906101000a900460ff1660e1811015610002579090602091828204019190065b9054906101000a900460ff169350839250600083141561129257610002566112d7565b60048310156112a6576010915081506112d6565b60078310156112bb57610100915081506112d5565b60078314156112cf576020915081506112d4565b610002565b5b5b5b6112e18683611057565b156114ab5784600a016000506001840360078110156100025790900160005b818150548092919060010191905055508473__ShipLib_______________________________63fdde00d59091604051827c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038160008760325a03f21561000257505050858560020160009054906101000a900460ff1660ff1686600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a460038311156114a6576007831015611441576003830360006000506000876001016000505481526020019081526020016000206000506000016000508660020160009054906101000a900460ff1660e1811015610002579090602091828204019190065b6101000a81548160ff021916908302179055506114a5565b600060006000506000876001016000505481526020019081526020016000206000506000016000508660020160009054906101000a900460ff1660e1811015610002579090602091828204019190065b6101000a81548160ff021916908302179055505b5b6114b0565b610002565b5b505b5050505050565b600060006000843373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561153b576100025661186b565b60016000506000878152602001908152602001600020600050935060006000506000856001016000505481526020019081526020016000206000506000016000508460020160009054906101000a900460ff1660e1811015610002579090602091828204019190065b9054906101000a900460ff169250600060005060008560010160005054815260200190815260200160002060005091508373__ShipLib_______________________________63254c2a5e90916001604051837c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060006040518083038160008760325a03f21561000257505050600b8314151561165457610002565b600084600a016000508660078110156100025790900160005b5054141561167a57610002565b60058560ff16111561168f576100025661178d565b60028560ff1611156116ca5781600b016000506003860360038110156100025790900160005b8181505480929190600101919050555061178c565b60028560ff16141561170b5781600b01600050600260038110156100025790900160005b50546001018460070160008282825054019250508190555061178b565b60018560ff16141561174c5781600b01600050600160038110156100025790900160005b50546001018460060160008282825054019250508190555061178a565b60008560ff1614156117895781600b01600050600060038110156100025790900160005b5054600101846005016000828282505401925050819055505b5b5b5b5b83600a016000508560078110156100025790900160005b8181505480929190600190039190505550858460020160009054906101000a900460ff1660ff1685600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a48373__ShipLib_______________________________63fdde00d59091604051827c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038160008760325a03f215610002575050505b505b5050505050565b600060016000506000848152602001908152602001600020600050905080600a016000508260078110156100025790900160005b818150548092919060010191905055508073__ShipLib_______________________________63fdde00d59091604051827c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038160008760325a03f21561000257505050828160020160009054906101000a900460ff1660ff1682600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a45b505050565b6000823373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156119f05761000256611adf565b6001600050600085815260200190815260200160002060005091508173__ShipLib_______________________________63da61f209909185604051837c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060006040518083038160008760325a03f21561000257505050838260020160009054906101000a900460ff1660ff1683600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a45b505b505050565b60006000833373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611b655761000256611cac565b60016000506000868152602001908152602001600020600050925060016000506000858152602001908152602001600020600050915081600101600050548360010160005054148015611bdf57508160020160009054906101000a900460ff1660ff168360020160009054906101000a900460ff1660ff16145b15611ca6578273__ShipLib_______________________________63f397aa66909184604051837c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060006040518083038160008760325a03f21561000257505050848360020160009054906101000a900460ff1660ff1684600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a4611cab565b610002565b5b505b50505050565b6000833373ffffffffffffffffffffffffffffffffffffffff166001600050600083815260200190815260200160002060005060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611d315761000256611e7f565b600160005060008681526020019081526020016000206000509150600082600a01600050600660078110156100025790900160005b50541415611d7357610002565b8173__ShipLib_______________________________63254c2a5e90916010604051837c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060006040518083038160008760325a03f2156100025750505081600a01600050600660078110156100025790900160005b8181505480929190600190039190505550611e3182600101600050548360020160009054906101000a900460ff16868661204e565b848260020160009054906101000a900460ff1660ff1683600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a45b505b50505050565b600060006000600060006000600060005060008881526020019081526020016000206000509550600c86600001600050607760e1811015610002579090602091828204019190065b6101000a81548160ff0219169083021790555086600190049450600091505b60108260ff1610156120445784935083506101008504945084506010850692508250610100850494508450600060108560ff160460ff161480611f3a5750600060108560ff160660ff16145b15611f485761203756612036565b856000016000508460e1811015610002579090602091828204019190065b9054906101000a900460ff169050600081141515611f8357612037565b60028360ff16111515611f9b57600190508050612035565b60058360ff16111515611fb357600290508050612034565b60088360ff16111515611fcb57600390508050612033565b60098360ff161415611fe257600490508050612032565b600a8360ff161415611ff957600590508050612031565b600b8360ff16141561201057600690508050612030565b600d8360ff161115156120285760079050805061202f565b600b905080505b5b5b5b5b5b5b5b5b8180600101925050611eee565b5b50505050505050565b6000600060006000600060005060008981526020019081526020016000206000509350836000016000508760e1811015610002579090602091828204019190065b9054906101000a900460ff1692506000831415156120ac57610002565b600060005060008781526020019081526020016000206000509150816000016000508560e1811015610002579090602091828204019190065b9054906101000a900460ff16905060008114151561210257610002565b600d925082508584600e0160005060008960ff16815260200190815260200160002060005081905550600d905080508782600e0160005060008760ff168152602001908152602001600020600050819055505b5050505050505050565b6000600050600083815260200190815260200160002060005060080160005080548060010182818154818355818115116121cb578183600052602060002091820191016121ca91906121ac565b808211156121c657600081815060009055506001016121ac565b5090565b5b5050509190906000526020600020900160005b83909190915055505b5050565b6000600160005060008681526020019081526020016000206000509050848160020160009054906101000a900460ff1660ff1682600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a483816001016000505414151561228157612276816001016000505486612359565b612280848661215f565b5b8073__ShipLib_______________________________63a1c854bf9091868686604051857c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018481526020018360ff16815260200182815260200194505050505060006040518083038160008760325a03f21561000257505050848160020160009054906101000a900460ff1660ff1682600101600050547f2a0f9a7e3e2ad135c261ad4caf9c6925f260037dd95e815b9a148276a390117a60405180905060405180910390a45b5050505050565b60006000600060005060008581526020019081526020016000206000509150600090505b81600801600050805490508160ff16101561247757828260080160005082815481101561000257906000526020600020900160005b5054141561246957816008016000508260080160005080549050815481101561000257906000526020600020900160005b50548260080160005082815481101561000257906000526020600020900160005b50819055508160080160005080548091906001900390908154818355818115116124605781836000526020600020918201910161245f9190612441565b8082111561245b5760008181506000905550600101612441565b5090565b5b5050505061247c565b5b808060010191505061237d565b610002565b5050505056"},"ShipLib":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"}],\"name\":\"refreshEnergy\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"},{\"name\":\"effort\",\"type\":\"uint256\"}],\"name\":\"genericAction\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"}],\"name\":\"getEnergy\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"},{\"name\":\"_newSystem\",\"type\":\"bytes32\"},{\"name\":\"_newCoords\",\"type\":\"uint8\"},{\"name\":\"distance\",\"type\":\"uint256\"}],\"name\":\"move\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"}],\"name\":\"restoreHP\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"},{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"},{\"name\":\"target\",\"type\":\"ShipLib.Ship storage\"}],\"name\":\"attack\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"self\",\"type\":\"ShipLib.Ship storage\"}],\"name\":\"refreshMassRatio\",\"outputs\":[],\"type\":\"function\"}]\n","bin":"6060604052610560806100126000396000f3650201000000005060606040523615610092576000357c0100000000000000000000000000000000000000000000000000000000900480630710358814610097578063254c2a5e146100af5780639a1ba883146100d0578063a1c854bf146100fc578063cd37680d1461012f578063da61f20914610147578063f397aa6614610168578063fdde00d51461018957610092565b610007565b6100ad60048080359060200190919050506101f3565b005b6100ce60048080359060200190919080359060200190919050506104f7565b005b6100e660048080359060200190919050506101a1565b6040518082815260200191505060405180910390f35b61012d60048080359060200190919080359060200190919080359060200190919080359060200190919050506102e5565b005b61014560048080359060200190919050506104e6565b005b61016660048080359060200190919080359060200190919050506102b3565b005b6101876004808035906020019091908035906020019091905050610376565b005b61019f6004808035906020019091905050610217565b005b600060008260040160005054420383600301600050540190508260090160005054610100028111156101e45782600901600050546101000291506101ed566101ec565b8091506101ed565b5b50919050565b6101fc816101a1565b81600301600050819055504281600401600050819055505b50565b6000600082600701600050548360060160005054846005016000505401019150600090505b82600a0160005050600781101561027a5782600a016000508160078110156100075790900160005b50548201915081505b808060010191505061023c565b8260070160005054820483600901600050819055506000836009016000505414156102ad57600183600901600050819055505b5b505050565b808260000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5050565b83818160000160009054906101000a900460ff16151561030457610007565b61030d826101f3565b816003016000505481836009016000505402111561032a57610007565b8082600901600050540282600301600082828250540392505081905550848660010160005081905550838660020160006101000a81548160ff0219169083021790555050505b50505050565b8160018160000160009054906101000a900460ff16151561039657610007565b61039f826101f3565b81600301600050548183600901600050540211156103bc57610007565b80826009016000505402826003016000828282505403925050819055508260000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168460000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561045a57610007565b8260050160005054846008016000828282505401925050819055508360060160005054846008016000505410151561049157610007565b836005016000505483600801600082828250540192505081905550826006016000505483600801600050541015156104df5760008360000160006101000a81548160ff021916908302179055505b50505b5050565b600081600801600050819055505b50565b81818160000160009054906101000a900460ff16151561051657610007565b61051f826101f3565b816003016000505481836009016000505402111561053c57610007565b808260090160005054028260030160008282825054039250508190555050505b505056"}},"version":"0.2.1-0/Release-Linux/g++/int linked to libethereum-1.1.3-0/Release-Linux/g++/int"}
