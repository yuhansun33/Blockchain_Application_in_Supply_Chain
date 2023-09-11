import React from 'react'
import { useState } from "react";
import Product from "./product";


export default function Search({ state }) {


    // 控制彈出視窗的開關
    const [isOpen, setOpen] = useState(false);
    const [record, setRecord] = useState([]);
    const [component, setCom] = useState([]);
    // 查詢特定產品編號的資料以及上游原料產品編號
    async function productAddress() {
        const { contract } = state;
        const Product_Address = document.querySelector("#product").value;
        const record = await contract.methods.getProduct(Product_Address).call();
        const com = await contract.methods.getSupplier().call();
        const Fliter = com.filter((c) => c._product === Product_Address);
        const data = Fliter.map((pd) => {
            return (pd.Supply)
        })

        setCom(data);
        setRecord(record);
        setOpen(true);

    }




    return (
        <>


            <div style={{ position: 'fixed', top: '15%', left: '38%' }} class='animate'>
                <input type="address" id="product" required="required"></input>
                <button onClick={productAddress}>
                    輸入產品ID
                </button>
                {/* 彈出視窗 */}
                <Product open={isOpen} isClose={() => setOpen(false)} record={record} com={component}>
                    fancy modal
                </Product>

            </div>
        </>



    )
}
