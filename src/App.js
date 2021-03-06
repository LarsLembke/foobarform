import { useState, useEffect } from "react";
import './index.scss';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Payment from './components/Payment';
import Beerinfo from "./components/Beerinfo";

function App() {

  const [beerData, setBeerData] = useState([]);
  const [beerOrder, setBeerOrder] = useState();
  const [tapData, setTapData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [theDeets, setTheDeets] = useState("", false)

  useEffect(() => {

    fetch("https://foobarspacemonkeys.herokuapp.com/beertypes")
    .then(res => res.json())
    .then(bData => setBeerData(bData))
    .then(console.log(beerData))

    fetch("https://foobarspacemonkeys.herokuapp.com/")
    .then(res => res.json())
    .then(tapData => setTapData(tapData))
    .then(console.log(tapData))

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(beerOrder)
    };
    fetch('https://foobarspacemonkeys.herokuapp.com/order', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();

          console.log(data);

          // check for error response
          if (data.status > 299) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              console.log(error)
          } else {
            console.log("!!!!!!!!!!!!!!!!!!succes!!!!!!!!!!!!!!!!!!", response.status)
            localStorage.clear()
          }  
      })
      
  },[beerOrder]);

  if (!beerData) {
    console.log('njah')
    return null;
  }

  function clicked (pr) {
    console.log("clicked", pr)
  }

  function setTheOrder() {
    setBeerOrder(orderData)
  }

  function sendDataToPayment(data) {
    setOrderData(data)
  }

  function details(d) {
    console.log(d)
    setTheDeets(d) 
  }

  return (
    <>
      <Form beer={beerData} taps={tapData.taps} clicked={clicked} setTheOrder={setTheOrder} details={details} sendDataToPayment={sendDataToPayment}/>
      <Beerinfo beerData={beerData} tapData={tapData} theDeets={theDeets}  details={details}/>
      <Payment beerOrder={beerOrder} setTheOrder={setTheOrder}  orderData={orderData} setOrderData={setOrderData}/>
    </>
  );
}

export default App;
