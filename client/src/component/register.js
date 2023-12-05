import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [CompanyName, setCompanyName] = useState('');
    const [CompanyId, setCompanyId] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    async function handleRegister() {
        //檢查密碼輸入一致
        if (Password === ConfirmPassword) {
            try {
                //發到後端
                const response = await axios.post('http://localhost:5000/register', {
                    CompanyName,
                    CompanyId,
                    Password
                });
                //成功註冊
                alert("Registration successful");
            } catch (error) {
                //錯誤訊息
                alert("Registration failed");
            }
        }else{
            alert("Passwords don't match");
            return;
        }

    }

    return (
        <div>
            <div style={{ position: 'fixed', top: '15%', left: '38%' }} class='animate'>
                
                <input type="text" value={CompanyName} onChange={e => setCompanyName(e.target.value)} placeholder="Company Name" required style={{ width: '400px' }}/>
                <br/>
                <input type="text" value={CompanyId} onChange={e => setCompanyId(e.target.value)} placeholder="Company ID" required style={{ width: '400px' }}/>
                <br/>
                <input type="password" value={Password} onChange={e => setPassword(e.target.value)} placeholder="Password" required style={{ width: '400px' }}/>
                <br/>
                <input type="password" value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required style={{ width: '400px' }}/>
                <br/>
                <button onClick={handleRegister} className="button button2" style={{ width: '400px' }}>
                    Register
                </button>
                
            </div>

        </div>
    );
}
