import Web3 from "web3";
import { useState, useEffect } from "react";
import supplychain from "./contracts/SupplyChain.json";
import './App.css';
import './styles.css';


import Enter from './component/enter';
import Address from "./component/address";
import Search from "./component/Search";
import AllProducts from './component/AllProducts';
import ProductsId from './component/ProductsId';
import Navbar from "./Navbar";

import Zero from './component/Zero';
import One from "./component/One";
import Two from "./component/Two";
import Three from "./component/Three";
import Four from "./component/Four";

import Test from "./test";
function App() {



  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  // 連線至ganache區塊鏈

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


  // 各種分頁
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
    case "/component/Zero":
      component = <Zero state={state} />
      break
    case "/component/One":
      component = <One state={state} />
      break
    case "/component/Two":
      component = <Two state={state} />
      break

    case "/component/Three":
      component = <Three state={state} />
      break
    case "/component/Four":
      component = <Four state={state} />
      break
    case "/test":
      component = <Test state={state} />
      break
    default: // Do nothing

  }


  return (

    <div style={{ zIndex: 2 }}>
      <Navbar></Navbar>
      {component}

    </div>



  );



}

export default App;
