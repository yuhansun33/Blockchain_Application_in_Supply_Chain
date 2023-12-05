import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Login({ state }) {
    const [Manufacturer_Address, setAdress] = useState('');
    const [Password, setPassword] = useState('');

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
        // const Manufacturer_Address = document.querySelector("#addr_input").value;
        // const Password = document.querySelector("#password_input").value;
        
        const response = await axios.post('http://localhost:5000/verify', { Manufacturer_Address, Password });
        if(response.data.isValid){
            const { contract } = state;
            await contract.methods.enterAddress(Manufacturer_Address).send({ from: Manufacturer_Address, gas: '1000000' });
            alert("Login is successul");
            window.location.reload();
        }else{
            alert("Login is failed");
        }

    }



    return (

        <div>
            {/* <h1>Thanks</h1> */}
            <div style={{ position: 'fixed', top: '15%', left: '38%' }} class='animate'>
                {/* 輸入製造商名稱 */}
                <input type="text" value={Manufacturer_Address} onChange={e => setAdress(e.target.value)} placeholder="Address" required="required" style={{ width: '400px' }}/>
                <br/>
                {/*輸入密碼*/}
                <input type="password" value={Password} onChange={e => setPassword(e.target.value)} placeholder="password" required="required" style={{ width: '400px' }}/>
                <br/>
                <button onClick={enterAddress} className="button button2" style={{ width: '400px' }}>
                    Enter
                </button>
                {/* 顯示製造商address */}
                {/* <div style={{ position: 'relative', left: '-1px', top: '2px' }}>{Manufacturer_Address}</div> */}
                {/* 註冊頁面 */}
                <div style={{ marginTop: '10px' }}>
                    <Link to="/register">Go to Register Page</Link>
                </div>
            </div>


        </div>
    );
}
