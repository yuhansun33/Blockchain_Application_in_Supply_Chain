import React from 'react'
// import { useState } from "react";

const Modal_style = {
    position: 'fixed',
    top: '13%',
    left: '40%',
    // transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '60px',
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

export default function State({ open, isClose, record }) {

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

    function Check(day) {
        if (day === '0') {
            return 0
        }
        else {
            return new Date(day * 1000).toLocaleString()
        }
    }



    return (
        <>
            <div style={OverStyle} />


            <div style={Modal_style} class='animate'>
                <td>SETTING : </td><td>{Check(record[0])}</td><br></br>


                <td>PROCESS : </td><td>{Check(record[1])}</td><br></br>

                <td>FINISH : </td><td>{Check(record[2])}</td><br></br>
                <td>IN_TRANSIT : </td><td>{Check(record[3])}</td><br></br>
                <td>ARRIVED : </td><td>{Check(record[4])}</td><br></br>
                <button onClick={isClose} >Close</button>




            </div>
        </>
    );
}
