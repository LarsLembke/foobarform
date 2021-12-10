import Generalinfo from './Generalinfo';
import Label from './Label';
import Description from './Description';

export default function Beerpopup(props) {


    if (!props.data[0] || !props.taps) {
        return null;
    }
  //   console.log(props.data.label)

  //   const tapsMap = props.taps.map((t) => t.beer)

  //   function beerOnTap() {


  //   if (tapsMap.includes(props.data.name)) {
  //       console.log('includes')
  //  return (
  //       <>
  //       <Generalinfo name={props.data.name} alc={props.data.alc} cat={props.data.category}/>
  //   <Label url={props.data.label}/>
  //   <Description desc={props.data.description}/>
  //       </>)
     
  //   } 

  //   }


  const theBeer = props.data[0]

  console.log(theBeer.name)

  const name = theBeer.name
  const alc = theBeer.alc
  const cat = theBeer.category
  const url = theBeer.label
  const desc = theBeer.description

  function xClick () {
    console.log("XXXX")

    props.details(null)
  }


  return (
    <div className="beer_popup">
      <div className="foobar_logo_container">
            <img src="/images/foobar_logo.png" alt="foobar logo" className="foobar_logo_popup" />
            </div>
      <div className="beer_popup_border">
      <button onClick={xClick}>
        <img src="/images/back_arrow.png" alt="back arrow" className="back_arrow" />
      </button>
      <div className="popup_grid">
        <Generalinfo name={name} alc={alc} cat={cat}/>
        <div className="popup_image">
    <Label url={url}/>
    </div>
    </div>
    <Description desc={desc}/>
    </div>
    </div>
  );
}

