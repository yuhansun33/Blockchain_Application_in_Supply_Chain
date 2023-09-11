import React from 'react'
// import { useState } from "react";

const Modal_style = {
    position: 'fixed',
    top: '13%',
    left: '40%',
    // transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '62px',
    zIndex: 1000


}

const OverStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.03)',
    zIndex: 1

}
export default function Supplier({ state, open, Close, Id, Ad }) {

    if (!open) return null;



    // 可以輸入上游原料產品編碼
    const enterSupplier = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const Supplier = document.querySelector("#Supplier").value;
        await contract.methods.AddSupplier(Id, Supplier).send({ from: Ad, gas: '1000000' });

        alert("Adding is successul");
        window.location.reload();

    }





    return (
        <>
            <div style={OverStyle} />


            <div style={Modal_style} class='animate' >
                {/* 顯示輸入表格 */}



                <form onSubmit={enterSupplier} style={{ position: 'relative', left: '-20px' }}>

                    <div >
                        <input type="text" required="required" id="Supplier" placeholder='Components' />
                    </div>
                    <div>
                        <input type="submit" value="Enter" disabled={!state.contract} />
                    </div>
                    <div>
                        <button class="cancelbtn" onClick={Close}>cancle</button>
                    </div>
                </form>
            </div>






        </>
    );
}
