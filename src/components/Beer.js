import Label from './Label';
import Minus from './Minus';
import Plus from './Plus';
import Amount from './Amount';

export default function Beer(props) {
  return (
    <div className="beer">
        <Label url={props.label}/>
        <label className="beer_name" for={props.name}>{props.name}</label>
    
         <Amount />
       
    </div>
  );
}

