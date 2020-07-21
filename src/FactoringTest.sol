pragma solidity ^0.5.0;

contract FactoringTest{
    address owner;
    bool state;
    string status;
    mapping(address=>FactoringInfo) FactoringInfos;
    struct FactoringInfo{
        uint256 rutEmisor;
        uint256 folio;
        uint256 fechaEmision;
        uint256 rutReceptor;
        uint256 montoFactura;
        uint256 rutCedente;
        uint256 rutCesionario;
        uint256 montoCesion;
    }
    
    constructor()  public{
        owner = msg.sender;
        state = false;
    }
    
    function addFactoring(bool _state,string memory _status,uint256 _rutEmisor,uint256 _folio,uint256 _fechaEmision,uint256 _rutReceptor,
    uint256 _montoFactura,uint256 _rutCedente,uint256 _rutCesionario,uint256 _montoCesion) public payable{

        if(msg.sender!=owner || state )return;
        state = _state;
        status= _status;
    
        FactoringInfos[msg.sender].rutEmisor= _rutEmisor;
        FactoringInfos[msg.sender].folio= _folio;
        FactoringInfos[msg.sender].fechaEmision= _fechaEmision;
        FactoringInfos[msg.sender].rutReceptor= _rutReceptor;
        FactoringInfos[msg.sender].montoFactura= _montoFactura;
    
        FactoringInfos[msg.sender].rutCedente= _rutCedente;
    
        FactoringInfos[msg.sender].rutCesionario= _rutCesionario;
        FactoringInfos[msg.sender].montoCesion= _montoCesion;
    }
    
    function setStatus(bool _state,string memory _status) public payable{
        if(msg.sender!=owner|| state) return;
        state = _state;
        status=_status;
    }
    
    function getFactoring() external view returns(address,bool,string memory,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256){
        return(owner,state,status,FactoringInfos[msg.sender].rutEmisor,FactoringInfos[msg.sender].folio,FactoringInfos[msg.sender].fechaEmision,FactoringInfos[msg.sender].rutReceptor,FactoringInfos[msg.sender].montoFactura,FactoringInfos[msg.sender].rutCedente,FactoringInfos[msg.sender].rutCesionario,FactoringInfos[msg.sender].montoCesion);
    }
}