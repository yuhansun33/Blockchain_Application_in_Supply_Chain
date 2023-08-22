import React from 'react'
// import { useState } from "react";

const Modal_style = {
    position: 'fixed',
    top: '13%',
    left: '32%',
    // transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000


}

const OverStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1

}

export default function Product({ open, isClose, record }) {

    if (!open) return null

    // useEffect(() => {
    // const { contract } = state;
    //     async function readData() {
    //         const data = await contract.methods.getManufacturerAddress().call();
    //         setAdress(data);
    //     }
    //     contract && readData();
    // }, [state]);


    // async function productAddress() {
    //     const { contract } = state;
    //     const Product_Address = document.querySelector("#product").value;
    //     const record = await contract.methods.getProduct(Product_Address).call();
    //     setRecord(record)

    // }


    return (
        <>
            <div style={OverStyle} />


            <div style={Modal_style} class='animate'>
                <td>產品ID : </td><td>{record[2]}</td><br></br>


                <td>製造商 : </td><td>{record[1]}</td><br></br>

                <td>商品名稱 : </td><td>{record[3]}</td><br></br>
                <td>商品材質 : </td><td>{record[4]}</td><br></br>
                <td>價格 : </td><td>{record[5]}</td><br></br>
                <td>紀錄時間 : </td><td>{new Date(record[6] * 1000).toLocaleString()}</td><br></br>
                <td>狀態 : </td><td>{record[7]}</td><br></br>
                <td>階段 : </td><td>{record[0]}</td><br></br>
                <button onClick={isClose} >Close</button>




            </div>
        </>
    );
}
