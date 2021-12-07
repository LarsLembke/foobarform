
import Beerpopup from './Beerpopup';

export default function Beerinfo(props) {

  if (!props.beerData || !props.tapData) {
    return null;
  }

  if (props.theDeets) {
    console.log(props.theDeets)
  }

  console.log(props.beerData)

  const beerFilter = props.beerData.filter(b => b.name === props.theDeets);

  console.log(beerFilter);

  const beerMap = props.beerData.map((b) => <Beerpopup data={b} taps={props.tapData.taps}/>)


  return (
    <div>
      {beerFilter}
      <Beerpopup data={beerFilter[0]} taps={props.tapData.taps}/>
    </div>
  );
}

