import Beer from './Beer';
import Next from './Next';

export default function Form(props) {

    if (!props.beer || !props.taps) {
        return null;
    }

    console.log(props.beer, props.taps)


    const beerMap = props.beer.map((b) => beerOnTap(b))

    function beerOnTap(p) {
    const tapsMap = props.taps.map((t) => t.beer)


    if (tapsMap.includes(p.name)) {
        console.log('includes')
   return <Beer name={p.name} label={p.label}/>
     
    } 

    }

  return (
    <form>
        {beerMap}
        <Next />
    </form>
  );
}

