import Label from './Label';
import Minus from './Minus';
import Plus from './Plus';
import Amount from './Amount';

export default function Beer(props) {

  const orderB = {
    name: "",
    amount: 0
  }

  return (
    <div className="Beer">
        <Label url={props.label}/>
        <label for={props.name}>{props.name}</label>
    
         <Amount start={orderB.amount} orderData={props.orderData} name={props.name}/>
       
    </div>
  );
}

