import { useState, useEffect } from "react";
import State from './State';
import Supplier from './Supplier';
export default function AllProducts({ state }) {

    const [product, setProduct] = useState([]);
    const [record, setRecord] = useState([]);

    // 取得所有區塊鏈上產品的所有紀錄
    useEffect(() => {
        const { contract } = state;
        async function getproduct() {
            const address = await contract.methods.getAllProduct().call();
            setProduct(address);

        }
        contract && getproduct();
    }, [state]);


    // 控制彈出視窗的開關
    const [isOpen, setOpen] = useState(false);
    const [open, setopen] = useState(false);
    // 取得特定產品的狀態
    async function getProductState(address) {
        const { contract } = state;
        const record = await contract.methods.getProductState(address).call();
        setRecord(record)
        setOpen(true)

    }
    // modal打開
    function openModal() {
        setopen(true);
    }



    return (
        // 顯示所有產品的紀錄
        <div style={{ position: 'initial', top: '15%', left: '2.5%' }} class='animate'>
            <table>
                <thead>
                    <tr>

                        <th>商品ID</th>
                        <th>製造商ID</th>
                        <th>商品</th>
                        <th >材質</th>
                        <th >價格</th>
                        <th >時間</th>
                        <th >狀態</th>
                        <th>階段</th>
                    </tr>
                </thead>
                <tbody >

                    {product.map((pd) => {
                        return (
                            <tr>


                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {/* 可以觸發modal且去呼叫getProductState */}
                                    <button onClick={() => getProductState(pd.ProductID)} style={{ position: 'relative', width: '100%', backgroundColor: "#C2C287" }}>{pd.ProductID}</button>
                                    <State open={isOpen} isClose={() => setOpen(false)} record={record} Id={pd.ProductID}>
                                    </State>

                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.Manufacturer}
                                </td>
                                {/* <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.Receiver}
                                </td> */}


                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.ProductName}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.ProductType}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.ProductPrice}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "150px",
                                        color: "black",

                                    }}
                                >
                                    {new Date(pd.TimeStamp * 1000).toLocaleString()}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.State}
                                </td>

                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {pd.Serial}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#dcdc9e",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "50px",
                                        color: "black",

                                    }}
                                >
                                    {/* 可以觸發modal且去呼叫Supplier輸入頁面 */}
                                    <button onClick={openModal} style={{ position: 'relative', width: '100%', backgroundColor: "#C2C287" }}>Supplier</button>
                                    <Supplier state={state} open={open} Close={() => setopen(false)} Id={pd.ProductID} Ad={pd.Manufacturer}>
                                    </Supplier>

                                </td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>

        </div>
    );
}
