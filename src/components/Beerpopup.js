import Generalinfo from './Generalinfo';
import Label from './Label';
import Description from './Description';

export default function Beerpopup(props) {


  if (!props.data[0] || !props.taps) {
    return null;
  }

  const theBeer = props.data[0]

  const name = theBeer.name
  const alc = theBeer.alc
  const cat = theBeer.category
  const url = theBeer.label
  const desc = theBeer.description

  function xClick () {
    props.details(null)
  }

  return (
    <div className="beer_popup">
      <div className="foobar_logo_container">
            <img src="./images/foobar_logo.webp" alt="foobar logo" className="foobar_logo_popup" />
            </div>
      <div className="beer_popup_border">
      <button onClick={xClick}>
        <img src="./images/back_arrow.webp" alt="back arrow" className="back_arrow" />
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

