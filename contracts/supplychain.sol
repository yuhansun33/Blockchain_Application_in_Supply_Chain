//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
contract SupplyChain {
    
    struct Product {
        uint Serial;
        address Manufacturer;
        address ProductID;
        string ProductName;
        string ProductType;
        uint ProductPrice;
        mapping(uint => StateTime) State;
    }
    struct StateTime{
        uint TimeStamp;
        string State;
    }

    struct ProductDetail {
        uint Serial;
        address Manufacturer;
        address ProductID;
        string ProductName;
        string ProductType;
        uint ProductPrice;
        uint TimeStamp;
        string State;
    }

    
    mapping(address => Product) myproduct;
    ProductDetail[] products;
    address[] ProductAddresses;
    string Manufacturer_Address;

    function enterAddress(string memory _Manufacturer_Address) public {
        Manufacturer_Address = _Manufacturer_Address;
    }
    function getManufacturerAddress() public view returns (string memory) {
        return Manufacturer_Address;
    }


    function createProduct(
        string memory _ProductName,
        string memory _ProductType,
        uint _ProductPrice
    ) public {
        
        address addr = address(bytes20(sha256(abi.encodePacked(msg.sender, block.timestamp))));
        
        myproduct[addr].Manufacturer = msg.sender;
        myproduct[addr].ProductID = addr;
        myproduct[addr].ProductName = _ProductName;
        myproduct[addr].ProductType = _ProductType;
        myproduct[addr].ProductPrice = _ProductPrice;
        StateTime memory _state = StateTime(block.timestamp,"SEETING");
        myproduct[addr].State[myproduct[addr].Serial] = _state;

        
        myproduct[addr].State[1].TimeStamp = 0;
        myproduct[addr].State[2].TimeStamp = 0;
        myproduct[addr].State[3].TimeStamp = 0;
        myproduct[addr].State[4].TimeStamp = 0;
        

        ProductAddresses.push(addr);
        products.push(
            ProductDetail(
                myproduct[addr].Serial,
                msg.sender,
                addr,
                _ProductName,
                _ProductType,
                _ProductPrice,
                block.timestamp,
                "SEETING" 
            )
        );

    }
    function ChangeState(address addr) public {
        myproduct[addr].Serial++;
        if(myproduct[addr].Serial == 1){
            StateTime memory _state = StateTime(block.timestamp,"PROCESS");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
             myproduct[addr].State[1].TimeStamp = block.timestamp;
        }
        if(myproduct[addr].Serial == 2){
            StateTime memory _state = StateTime(block.timestamp,"FINISH");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[2].TimeStamp = block.timestamp;
        }
        if(myproduct[addr].Serial == 3){
            StateTime memory _state = StateTime(block.timestamp,"IN_TRANSIT");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[3].TimeStamp = block.timestamp;
        }
        if(myproduct[addr].Serial == 4){
            StateTime memory _state = StateTime(block.timestamp,"ARRIVED");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[4].TimeStamp = block.timestamp;
        }
        
        
    }

     function getAllProductAddr() external view returns (address[] memory) {
        return ProductAddresses;
    }
     function getAllProduct() public view returns (ProductDetail[] memory) {
        return products;
    }
    

    function getProductState(address id)public view returns (uint,uint,uint,uint,uint)
    {
        
        return (
            
            myproduct[id].State[0].TimeStamp,
            myproduct[id].State[1].TimeStamp,
            myproduct[id].State[2].TimeStamp,
            myproduct[id].State[3].TimeStamp,
            myproduct[id].State[4].TimeStamp

        );
    }

    function getProduct(address id)public view returns(uint,address,address,string memory,string memory,uint,uint,string memory){
        uint _serial = myproduct[id].Serial;
        address _id = id;
        return (
            
            myproduct[id].Serial,
            myproduct[id].Manufacturer,
            myproduct[id].ProductID,
            myproduct[id].ProductName,
            myproduct[_id].ProductType,
            myproduct[_id].ProductPrice,
            myproduct[_id].State[_serial].TimeStamp,
            myproduct[_id].State[_serial].State

        );
    }


}