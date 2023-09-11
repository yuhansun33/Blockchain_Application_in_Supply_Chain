import { useState, useEffect } from "react";
export default function Four({ state }) {
    const [product, setProduct] = useState([]);

    // 取得產品狀態為第四階段的產品
    useEffect(() => {
        const { contract } = state;

        async function N_Product() {
            const product = await contract.methods.N_Product().call();
            const data = await contract.methods.getManufacturerAddress().call();


            const Fliter = product.filter((pd) => pd.Serial === '4' & pd.Manufacturer === data);
            setProduct(Fliter);
        }
        contract && N_Product();


    }, [state]);


    return (
        <>


            <div style={{ position: 'initial', top: '15%', left: '2.5%' }} class='animate'>


                {/* 列出第四階段產品 */}
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
                                        {pd.ProductID}

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
                                        <button onClick={() => ChangeState(pd.ProductID)} style={{ position: 'initial', width: '100%', backgroundColor: "#C2C287" }}>NEXT</button>

                                    </td> */}

                                </tr>

                            );
                        })}
                    </tbody>
                </table>

            </div>
        </>
    );
}
