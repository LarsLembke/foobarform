
import Beerpopup from './Beerpopup';

export default function Beerinfo(props) {

  if (!props.beerData || !props.tapData) {
    return null;
  }

  if (props.theDeets) {
    console.log('THEDEEEEEEEEETZZZZ')
  }

  console.log(props.beerData)

  const beerMap = props.beerData.map((b) => <Beerpopup data={b} taps={props.tapData.taps}/>)


  return (
    <div>
      {beerMap}
    </div>
  );
}

