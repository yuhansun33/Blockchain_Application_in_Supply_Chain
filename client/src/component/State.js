import React from 'react'

const Modal_style = {
    position: 'fixed',
    top: '13%',
    left: '30%',
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
    backgroundColor: 'rgba(0,0,0,0.03)',
    zIndex: 1000

}

export default function State({ open, isClose, record, Id }) {

    if (!open) return null


    // 確認各個階段的時間戳記是否不為預設值，不是0則進行日期轉換
    function Check(day) {
        if (Number(day) === 0) {
            return 0
        }
        else {
            return new Date(Number(day) * 1000).toLocaleString()
        }
    }



    return (
        <>
            {/* 顯示該產品的個階段狀態改變時間 */}
            <div style={OverStyle} />


            <div style={Modal_style} class='animate'>
                <td>ID: </td><td style={{ color: 'red' }}>{Id}</td><br></br>
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
