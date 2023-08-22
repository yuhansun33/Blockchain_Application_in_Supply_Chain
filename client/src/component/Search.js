import React from 'react'
import { useState } from "react";
import Product from "./product";


export default function Search({ state }) {


    // const [openEnter, setEnter] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [record, setRecord] = useState([]);

    async function productAddress() {
        const { contract } = state;
        const Product_Address = document.querySelector("#product").value;
        const record = await contract.methods.getProduct(Product_Address).call();
        setRecord(record)
        setOpen(true)

    }

    // if (!open) return null




    return (
        <>




            <div style={{ position: 'fixed', top: '15%', left: '38%' }} class='animate'>
                <input type="address" id="product" required="required"></input>
                <button onClick={productAddress}>
                    輸入產品ID
                </button>
                <Product open={isOpen} isClose={() => setOpen(false)} record={record}>
                    fancy modal
                </Product>

                {/* <td>製造商 : </td><td>{record[0]}</td><br></br>
                <td>產品ID : </td><td>{record[1]}</td><br></br>
                <td>商品名稱 : </td><td>{record[2]}</td><br></br>
                <td>商品材質 : </td><td>{record[3]}</td><br></br>
                <td>價格 : </td><td>{record[4]}</td><br></br>
                <td>紀錄時間 : </td><td>{Date(record[5] * 1000).toLocaleString()}</td><br></br>
                <td>狀態 : </td><td>{record[6]}</td><br></br> */}

            </div>
        </>



    )
}
