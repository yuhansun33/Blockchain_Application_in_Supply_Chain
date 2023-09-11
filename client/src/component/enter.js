import { useState, useEffect } from "react";
import './enter.css';



const Enter = ({ state }) => {
    const [Manufacturer_Address, setAdress] = useState('');

    // 取得製造商address
    useEffect(() => {
        const { contract } = state;
        async function readData() {
            const data = await contract.methods.getManufacturerAddress().call();
            setAdress(data);
        }
        contract && readData();
    }, [state]);

    // 新增產品紀錄
    const enterProduct = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const ProductName = document.querySelector("#ProductName").value;
        const ProductType = document.querySelector("#ProductType").value;
        const ProductPrice = document.querySelector("#ProductPrice").value;
        const Receiver = document.querySelector("#Receiver").value;
        await contract.methods.createProduct(ProductName, ProductType, ProductPrice, Receiver).send({ from: Manufacturer_Address, gas: '1000000' });

        alert("Tracking is successul");
        window.location.reload();

    }



    return (


        <div style={{ position: 'fixed', top: '20%', left: '40%' }} class='animate'>

            <div>Enter Data</div>


            {/* 產品表單 */}
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
                    <input type="text" required="required" id="Receiver" placeholder='Receiver' />
                </div>
                <div>
                    <input type="submit" value="Enter" disabled={!state.contract} />
                </div>
            </form>


        </div>
    );
}
export default Enter;