import Web3 from "web3";
import { useState, useEffect } from "react";
import supplychain from "./contracts/SupplyChain.json";
import './App.css';
import './styles.css';


import Enter from './component/enter';
import Address from "./component/address";
import Search from "./component/Search";
import AllProducts from './component/AllProducts';
// import Modal from './component/ProductsId';
import ProductsId from './component/ProductsId';
import Navbar from "./Navbar";

function App() {



  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  // const [count, setCount] = useState(0);

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



  let component

  switch (window.location.pathname) {
    case "/":
      component = <Enter state={state} />
      break
    case "/component/ProductsId":
      component = <ProductsId state={state} />
      break

    case "/component/AllProducts":
      component = <AllProducts state={state} />
      break
    case "/component/address":
      component = <Address state={state} />
      break

    case "/component/Search":
      component = <Search state={state} />
      break
    default: // Do nothing

  }













  return (







    <div style={{ zIndex: 2 }}>
      <Navbar></Navbar>
      {component}


      {/* <button onClick={() => { setEnter(true); }} style={{ width: 'auto' }}>Enter</button>
      {openEnter && <Enter closeEnter={setEnter} state={state} />} */}
      {/* <Test state={state} />
      <Product state={state} /> */}




    </div>



  );



}

export default App;
