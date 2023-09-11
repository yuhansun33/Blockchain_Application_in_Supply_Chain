//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract SupplyChain {
    // 產品記錄結構
    struct Product {
        uint Serial;
        address Manufacturer;
        address ProductID;
        address Receiver;
        string ProductName;
        string ProductType;
        uint ProductPrice;
        mapping(uint => StateTime) State;
    }
    //狀態
    struct StateTime {
        uint TimeStamp;
        string State;
    }
    // 上游原料
    struct Supplier {
        address _product;
        string Supply;
    }
    // 玩整產品細項
    struct ProductDetail {
        uint Serial;
        address Manufacturer;
        address ProductID;
        address Receiver;
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
    ProductDetail[] N_Products;
    Supplier[] suppliers;

    // 加入上游原料
    function AddSupplier(address _addr, string memory _supplier) public {
        suppliers.push(Supplier(_addr, _supplier));
    }

    // 取得上游原料
    function getSupplier() public view returns (Supplier[] memory) {
        return suppliers;
    }

    // 輸入製造商Address
    function enterAddress(string memory _Manufacturer_Address) public {
        Manufacturer_Address = _Manufacturer_Address;
    }

    // 取得製造商Address
    function getManufacturerAddress() public view returns (string memory) {
        return Manufacturer_Address;
    }

    // 創建產品，且初始化狀態預設剩下的狀態階段時間戳記為0，以及複製產品紀錄至products、N_Products
    function createProduct(
        string memory _ProductName,
        string memory _ProductType,
        uint _ProductPrice,
        address _Receiver
    ) public {
        address addr = address(
            bytes20(sha256(abi.encodePacked(msg.sender, block.timestamp)))
        );
        myproduct[addr].Serial = 0;

        myproduct[addr].Manufacturer = msg.sender;
        myproduct[addr].ProductID = addr;
        myproduct[addr].ProductName = _ProductName;
        myproduct[addr].Receiver = _Receiver;
        // Supplier memory _supply = Supplier(msg.sender);
        // myproduct[addr].Supply[0] = _supply;

        myproduct[addr].ProductType = _ProductType;
        myproduct[addr].ProductPrice = _ProductPrice;
        StateTime memory _state = StateTime(block.timestamp, "SEETING");
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
                _Receiver,
                _ProductName,
                _ProductType,
                _ProductPrice,
                block.timestamp,
                "SEETING"
            )
        );

        N_Products.push(
            ProductDetail(
                myproduct[addr].Serial,
                myproduct[addr].Manufacturer,
                myproduct[addr].ProductID,
                myproduct[addr].Receiver,
                myproduct[addr].ProductName,
                myproduct[addr].ProductType,
                myproduct[addr].ProductPrice,
                myproduct[addr].State[0].TimeStamp,
                myproduct[addr].State[0].State
            )
        );
    }

    // 改變狀態時一併更新時間，複製產品紀錄至products、N_Products
    function ChangeState(address addr) public {
        myproduct[addr].Serial++;
        if (myproduct[addr].Serial == 1) {
            StateTime memory _state = StateTime(block.timestamp, "PROCESS");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[1].TimeStamp = block.timestamp;
            Delete(addr);

            products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "PROCESS"
                )
            );

            N_Products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "PROCESS"
                )
            );
        }
        if (myproduct[addr].Serial == 2) {
            StateTime memory _state = StateTime(block.timestamp, "FINISH");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[2].TimeStamp = block.timestamp;
            Delete(addr);

            products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "FINISH"
                )
            );

            N_Products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "FINISH"
                )
            );
        }
        if (myproduct[addr].Serial == 3) {
            StateTime memory _state = StateTime(block.timestamp, "IN_TRANSIT");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[3].TimeStamp = block.timestamp;
            Delete(addr);

            products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "IN_TRANSIT"
                )
            );

            N_Products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "IN_TRANSIT"
                )
            );
        }
        if (myproduct[addr].Serial == 4) {
            StateTime memory _state = StateTime(block.timestamp, "ARRIVED");
            myproduct[addr].State[myproduct[addr].Serial] = _state;
            myproduct[addr].State[4].TimeStamp = block.timestamp;
            Delete(addr);

            products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "ARRIVED"
                )
            );

            N_Products.push(
                ProductDetail(
                    myproduct[addr].Serial,
                    msg.sender,
                    addr,
                    myproduct[addr].Receiver,
                    myproduct[addr].ProductName,
                    myproduct[addr].ProductType,
                    myproduct[addr].ProductPrice,
                    block.timestamp,
                    "ARRIVED"
                )
            );
        }
    }

    // 取得所有產品編號
    function getAllProductAddr() external view returns (address[] memory) {
        return ProductAddresses;
    }

    // 取得所有產品細項
    function getAllProduct() public view returns (ProductDetail[] memory) {
        return products;
    }

    // 取得特定產品歷史狀態
    function getProductState(
        address id
    ) public view returns (uint, uint, uint, uint, uint) {
        return (
            myproduct[id].State[0].TimeStamp,
            myproduct[id].State[1].TimeStamp,
            myproduct[id].State[2].TimeStamp,
            myproduct[id].State[3].TimeStamp,
            myproduct[id].State[4].TimeStamp
        );
    }

    // 取得特定產品細項
    function getProduct(
        address id
    )
        public
        view
        returns (
            uint,
            address,
            address,
            address,
            string memory,
            string memory,
            uint,
            uint,
            string memory
        )
    {
        uint _serial = myproduct[id].Serial;
        address _id = id;
        return (
            myproduct[id].Serial,
            myproduct[id].Manufacturer,
            myproduct[id].ProductID,
            myproduct[_id].Receiver,
            myproduct[_id].ProductName,
            myproduct[_id].ProductType,
            myproduct[_id].ProductPrice,
            myproduct[_id].State[_serial].TimeStamp,
            myproduct[_id].State[_serial].State
        );
    }

    // 刪除改變狀態後N_Products的產品紀錄
    function Delete(address id) public {
        for (uint i = 0; i < N_Products.length; i++) {
            if (N_Products[i].ProductID == id) {
                for (uint j = i; j < N_Products.length - 1; j++) {
                    N_Products[j] = N_Products[j + 1];
                }
                N_Products.pop();
            }
        }
    }

    // 取得N_Products的產品紀錄
    function N_Product() public view returns (ProductDetail[] memory) {
        return N_Products;
    }
}
