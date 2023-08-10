import Web3 from "web3";
import { useState, useEffect } from "react";
import supplychain from "./contracts/SupplyChain.json";
import './App.css';
import Test from './component/test';
import Enter from './component/enter';

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  // const [count, setCount] = useState(0);
  const [address, setAdress] = useState([]);
  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = supplychain.networks[networkId];
      const contract = new web3.eth.Contract(
        supplychain.abi,
        deployedNetwork.address
      );
      console.log(contract);
      setState({ web3: web3, contract: contract });
    }

    provider && template();
  }, []);
  // useEffect(() => {
  //   const { contract } = state;
  //   async function readData() {
  //     const data = await contract.methods.get().call();
  //     setCount(data);
  //   }
  //   contract && readData();
  // }, [state]);

  // async function writeData() {
  // const { contract } = state;
  // const  data = document.querySelector("#value").value;
  //   await contract.methods
  //     .createProduct('cup', 'iron', 200)
  //     .send({ from: "0x83AF84662Bc10b5A519141af9163ff2E6E496ED0", gas: '1000000' });
  //   window.location.reload();

  // }
  useEffect(() => {
    const { contract } = state;
    async function getadress() {
      const address = await contract.methods.getAllProductAddr().call();
      setAdress(address);
    }
    contract && getadress();
  }, [state]);






  return (

    <div>
      <Enter state={state} />
      <Test state={state} />
      <p>Show adress<br /></p>
      <table>
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
                    width: "100px",
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

      {/* <button onClick={writeData}>
        Click me
      </button> */}


    </div>
  );
}

export default App;
