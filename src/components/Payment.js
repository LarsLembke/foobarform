import Name from './Name';
import Cardnumber from './Cardnumber';
import Submit from './Submit';

export default function Payment(props) {

  if (!props.beerOrder) {
    return null;
  }

  const beerOrderMap = props.beerOrder.map(b => <li>{b.amount} x {b.name}</li>)

  return (
    <div>
      <h3>Your order:</h3>
      <ul>
        {beerOrderMap}
      </ul>
      <form>
        <Name />
        <Cardnumber />
        <Submit />
      </form>
    </div>
  );
}