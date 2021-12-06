import Generalinfo from './Generalinfo';
import Label from './Label';
import Description from './Description';

export default function Beerpopup(props) {


    if (!props.data || !props.taps) {
        return null;
    }
    console.log(props.data.label)

    const tapsMap = props.taps.map((t) => t.beer)

    function beerOnTap() {


    if (tapsMap.includes(props.data.name)) {
        console.log('includes')
   return (
        <>
        <Generalinfo name={props.data.name} alc={props.data.alc} cat={props.data.category}/>
    <Label url={props.data.label}/>
    <Description desc={props.data.description}/>
        </>)
     
    } 

    }



  return (
    <div>
    <figure></figure>
    {beerOnTap()}
    </div>
  );
}

