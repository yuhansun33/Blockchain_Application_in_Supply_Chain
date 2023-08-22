import { useState, useEffect } from "react";
import './enter.css';





const Enter = ({ state }) => {
    const [Manufacturer_Address, setAdress] = useState('');
    // const [record, setRecord] = useState([]);

    useEffect(() => {
        const { contract } = state;
        async function readData() {
            const data = await contract.methods.getManufacturerAddress().call();
            setAdress(data);
        }
        contract && readData();
    }, [state]);

    // async function enterAddress() {
    //     const { contract } = state;
    //     const Manufacturer_Address = document.querySelector("#value").value;
    //     await contract.methods.enterAddress(Manufacturer_Address).send({ from: Manufacturer_Address, gas: '1000000' });
    //     alert("Login is successul");
    //     window.location.reload();

    // }
    // async function productAddress() {
    //     const { contract } = state;
    //     const Product_Address = document.querySelector("#product").value;
    //     const record = await contract.methods.getProduct(Product_Address).call();
    //     setRecord(record)

    // }


    const enterProduct = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const ProductName = document.querySelector("#ProductName").value;
        const ProductType = document.querySelector("#ProductType").value;
        const ProductPrice = document.querySelector("#ProductPrice").value;
        await contract.methods.createProduct(ProductName, ProductType, ProductPrice).send({ from: Manufacturer_Address, gas: '1000000' });

        alert("Tracking is successul");
        window.location.reload();

    }



    return (


        <div style={{ position: 'fixed', top: '20%', left: '40%' }} class='animate'>
            {/* <h1>Thanks</h1> */}
            <div>Enter Data</div>
            {/* <div class='search_input_bar' style={{ position: 'relative', left: '950px', top: '2px' }}>
                <input type="text" id="value" required="required"></input>
                <button onClick={enterAddress} className="button button2">
                    Enter Address
                </button>
                <div style={{ position: 'relative', left: '-100px', top: '2px' }}>{Manufacturer_Address}</div>
            </div> */}



            <form class="animate" onSubmit={enterProduct}>
                <div>
                    <input type="text" required="required" id="ProductName" placeholder='ProductName' />
                </div>
                <div>
                    <input type="text" required="required" id="ProductType" placeholder='ProductType' />
                </div>
                <div>
                    <input type="number" required="required" id="ProductPrice" placeholder='ProductPrice' />
                </div>
                <div>
                    <input type="submit" value="Enter" disabled={!state.contract} />
                </div>
                {/* <div>
                    <button class="cancelbtn" onClick={() => closeEnter(false)}>cancle</button>
                </div> */}
            </form>
            {/* 
            <div class='search_input_bar'>
                <input type="text" id="product" required="required"></input>
                <button onClick={productAddress} className="button button2">
                    輸入產品ID
                </button>

                <td>製造商 : </td><td>{record[0]}</td><br></br>
                <td>產品ID : </td><td>{record[1]}</td><br></br>
                <td>商品名稱 : </td><td>{record[2]}</td><br></br>
                <td>商品材質 : </td><td>{record[3]}</td><br></br>
                <td>價格 : </td><td>{record[4]}</td><br></br>
                <td>紀錄時間 : </td><td>{Date(record[5] * 1000).toLocaleString()}</td><br></br>
                <td>狀態 : </td><td>{record[6]}</td><br></br>

            </div> */}


        </div>
    );
}
export default Enter;