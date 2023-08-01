import Web3 from "web3";
import { useState,  useEffect} from "react";
import supplychain from "./contracts/SupplyChain.json";
import './App.css';

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [count, setCount] = useState(0);
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
  useEffect(() => 
  {
    const { contract } = state;
    async function readData() {
      const data = await contract.methods.get().call();
      setCount(data);
    }
    contract && readData();
  }, [state]);



  return (
    <div>
    <p>Show number {count} </p>
    <button onClick={() => setCount(count)}>
        Click me
      </button>
  </div>
  );
}

export default App;
