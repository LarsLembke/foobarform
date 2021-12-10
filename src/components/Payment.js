import Name from './Name';
import Cardnumber from './Cardnumber';
import Submit from './Submit';

export default function Payment(props) {

  if (!props.orderData) {
    return null;
  }

  const beerOrderMap = props.orderData.map(b => <li>{b.amount} x {b.name}</li>)

  return (
    <div>
      <h3>Your order:</h3>
      <ul>
        {beerOrderMap}
      </ul>
      <form>
        <Name />
        <Cardnumber />
        <Submit setTheOrder={props.setTheOrder}/>
      </form>
    </div>
  );
}