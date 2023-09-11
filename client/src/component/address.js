import { useState, useEffect } from "react";


export default function Address({ state }) {
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
    // 輸入製造商address
    async function enterAddress() {
        const { contract } = state;
        const Manufacturer_Address = document.querySelector("#value").value;
        await contract.methods.enterAddress(Manufacturer_Address).send({ from: Manufacturer_Address, gas: '1000000' });
        alert("Login is successul");
        window.location.reload();

    }



    return (

        <div>
            {/* <h1>Thanks</h1> */}
            <div style={{ position: 'fixed', top: '15%', left: '38%' }} class='animate'>
                {/* 輸入製造商address */}
                <input type="address" id="value" required="required"></input>
                <button onClick={enterAddress} className="button button2">
                    Enter Address
                </button>
                {/* 顯示製造商address */}
                <div style={{ position: 'relative', left: '-1px', top: '2px' }}>{Manufacturer_Address}</div>
            </div>


        </div>
    );
}
