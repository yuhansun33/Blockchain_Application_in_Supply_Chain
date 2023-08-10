//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
enum ProductState {
    SETTING,
    PROCESSING,
    FINISH,
    IN_TRANSIT,
    ARRIVED
}

contract SupplyChain {
    struct Product {
        address Manufacturer;
        address ProductID;
        string ProductName;
        string ProductType;
        uint ProductPrice;
        uint TimeStamp;
        ProductState state;
    }
    mapping(address => Product) myproduct;
    address[] ProductAddresses;
    Product[] products;
    string Manufacturer_Address;

    function createProduct(
        string memory _ProductName,
        string memory _ProductType,
        uint _ProductPrice
    ) public {
        address addr = address(
            bytes20(sha256(abi.encodePacked(msg.sender, block.timestamp)))
        );
        myproduct[addr].Manufacturer = msg.sender;
        myproduct[addr].ProductID = addr;
        myproduct[addr].ProductName = _ProductName;
        myproduct[addr].ProductType = _ProductType;
        myproduct[addr].ProductPrice = _ProductPrice;
        myproduct[addr].TimeStamp = block.timestamp;
        myproduct[addr].state = ProductState.SETTING;

        ProductAddresses.push(addr);
        products.push(
            Product(
                msg.sender,
                addr,
                _ProductName,
                _ProductType,
                _ProductPrice,
                block.timestamp,
                ProductState.SETTING
            )
        );
    }

    function enterAddress(string memory _Manufacturer_Address) public {
        Manufacturer_Address = _Manufacturer_Address;
    }

    function getManufacturerAddress() public view returns (string memory) {
        return Manufacturer_Address;
    }

    function getAllProductAddr() external view returns (address[] memory) {
        return ProductAddresses;
    }

    function getAllProduct() public view returns (Product[] memory) {
        return products;
    }

    function getProduct(
        address id
    )
        public
        view
        returns (
            address _Manufacturer,
            address adrr,
            string memory _ProductName,
            string memory _ProductType,
            uint _ProductPrice,
            uint _TimeStamp,
            ProductState _state
        )
    {
        Product memory p = myproduct[id];

        return (
            p.Manufacturer,
            p.ProductID,
            p.ProductName,
            p.ProductType,
            p.ProductPrice,
            p.TimeStamp,
            p.state
        );
    }
}
