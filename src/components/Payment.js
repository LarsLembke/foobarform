import Name from './Name';
import Cardnumber from './Cardnumber';
import Submit from './Submit';

export default function Payment(props) {

  if (!props.orderData) {
    return null;
  }



  

  const beerOrderMap = props.orderData.map(b => <li>{b.amount} x {b.name}</li>)

  return (
    <div className="payment">
      <div className="payment_border">
  
        <img src="/images/back_arrow.png" alt="back arrow" className="back_arrow" />
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