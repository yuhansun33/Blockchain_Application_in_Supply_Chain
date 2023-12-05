import React from 'react'
// import { useState } from "react";

const Modal_style = {
    position: 'fixed',
    top: '13%',
    left: '25%',
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
export default function Product({ open, isClose, record }) {

    if (!open) return null



    return (
        <>
            {/* 顯示所有產品細項以及最新狀態 */}
            <div style={OverStyle} />


            <div style={Modal_style} class='animate'>




                <table>
                    <tr>
                        <td colspan="2"> 產品ID :{record[2]}</td>
                    </tr>
                    <tr>
                        <td td colspan="2">製造商 :{record[1]}</td>
                    </tr>
                    <tr>
                        <td colspan="2">下游 : {record[3]}</td>
                    </tr>
                    <tr>

                        <td>商品名稱 :{record[4]}</td>
                        <td>商品類別 :{record[5]}</td>
                    </tr>
                    <tr>

                        <td>價格 :{Number(record[6])}</td>
                        <td>紀錄時間 :{new Date(Number(record[7]) * 1000).toLocaleString()}</td>
                    </tr>
                    <tr>

                        <td>狀態 :{record[8]}</td>
                        <td>階段 :{Number(record[0])}</td>
                    </tr>

                </table>
                {/* <td>原料 :</td>

                {com.map((pd) => {
                    return (<tr><td>{pd}</td></tr>)
                })} */}

                <button onClick={isClose} >Close</button>




            </div>
        </>
    );
}
