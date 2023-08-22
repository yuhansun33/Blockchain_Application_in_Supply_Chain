import React from 'react'
import { useState, useEffect } from "react";
// const Modal_style = {
//     position: 'fixed',
//     top: '13%',
//     left: '32%',
//     // transform: 'translate(-50%,-50%)',
//     backgroundColor: 'white',
//     padding: '50px',
//     zIndex: 1000


// }

// const OverStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     zIndex: 1

// }

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
