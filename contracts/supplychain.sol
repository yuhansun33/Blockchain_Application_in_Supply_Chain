// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

enum ProductState{
    SETTING,
    PROCESSING,
    FINISH,
    IN_TRANSIT,
    ARRIVED
}

contract SupplyChain{
    uint test = 10;
    struct Product{
        address ProductID;
        string ProductName;
        string ProductType;
        uint ProductPrice;
        ProductState state;
        
}
mapping (address => Product) myproduct;
address[] public ProductAddresses;

function createProduct(string memory _ProductName,string memory _ProductType, uint _ProductPrice) public {
    address addr = address(bytes20(sha256(abi.encodePacked(msg.sender,block.timestamp))));
    myproduct[addr].ProductID = addr;
    myproduct[addr].ProductName = _ProductName;
    myproduct[addr].ProductType = _ProductType;
    myproduct[addr].ProductPrice = _ProductPrice;
    myproduct[addr].state = ProductState.SETTING;

    ProductAddresses.push(addr);
}

function getAllProductAddr() external view returns (address[] memory) {
    return ProductAddresses;
}


function getProduct(address id) public view returns (address adrr,string memory _ProductName,string memory _ProductType, uint _ProductPrice,ProductState _state)
    {
       
        Product memory p = myproduct[id];
        
        
        return (p.ProductID, p.ProductName, p.ProductType, p.ProductPrice,p.state);
    }
function get() public view returns (uint256) {
        return test;
}

}