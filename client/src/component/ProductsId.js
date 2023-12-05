import React from 'react'
import { useState, useEffect } from "react";

// 取得所有產品編號
export default function ProductsId({ state }) {

    const [address, setAdress] = useState([]);

    useEffect(() => {
        const { contract } = state;
        async function getadress() {
            const address = await contract.methods.getAllProductAddr().call();
            setAdress(address);
        }
        contract && getadress();
    }, [state]);




    return (
        <>


            <div style={{ position: 'fixed', top: '13%', left: '37%' }} class='animate'>
                {/* 列出所有產品編號 */}
                <p>Show ID<br /></p>
                <table width="20%">
                    <tbody >
                        {address.map((addr) => {
                            return (
                                <tr >
                                    <td
                                        style={{
                                            backgroundColor: "dodgerblue",
                                            border: "1px solid white",
                                            borderCollapse: "collapse",
                                            padding: "7px",
                                            width: "100%",
                                            color: "white",

                                        }}
                                    >
                                        {addr}
                                    </td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>




            </div>

        </>
    )
}
