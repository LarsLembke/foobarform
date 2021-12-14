import Name from './Name';
import Cardnumber from './Cardnumber';
import Submit from './Submit';

export default function Payment(props) {

  if (!props.orderData.length) {
    console.log("null")
    return null;
  }

  console.log(props.orderData)

  function backHandler(e) {
    props.setOrderData([]);
  }

  const beerOrderMap = props.orderData.map(b => <li>{b.amount} x {b.name}</li>)

  return (
    <div className="payment">
      <div className="payment_border">
        <img src="./images/back_arrow.webp" alt="back arrow" className="back_arrow" onClick={backHandler}/>
      <div className="inner_border">
      <h3>Your order:</h3>
      <ul>
        {beerOrderMap}
      </ul>
      </div>
      <form>
        <Name />
        <Cardnumber />
        <Submit setTheOrder={props.setTheOrder}/>
      </form>
    </div>
    </div>
  );
  

  
}