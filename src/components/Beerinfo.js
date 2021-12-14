
import Beerpopup from './Beerpopup';

export default function Beerinfo(props) {

  if (!props.beerData || !props.tapData) {
    return null;
  }

  const beerFilter = props.beerData.filter(b => b.name === props.theDeets);

  return (
    <div>
      <Beerpopup data={beerFilter} taps={props.tapData.taps}  details={props.details}/>
    </div>
  );
}

