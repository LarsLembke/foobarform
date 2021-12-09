

export default function Description (props) {

  console.log(props.desc)

    return (
      <div className="popup_description">
        <p>{props.desc.overAllImpression}</p>
        <h3>Description:</h3>
        <p className="aroma">Aroma:</p>
        <p>{props.desc.aroma}</p>
        <p className="appearance">Appearance:</p>
        <p>{props.desc.appearance}</p>
        <p className="flavor">Flavor:</p>
        <p>{props.desc.flavor}</p>
        <p className="mouthfeel">Mouthfeel:</p>
        <p>{props.desc.mouthfeel}</p>
      </div>
    );
  }
  
  