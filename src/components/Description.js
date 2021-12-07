

export default function Description (props) {

  console.log(props.desc)

    return (
      <div>
        <p>{props.desc.overAllImpression}</p>
        <h3>Description</h3>
        <p>Aroma:</p>
        <p>{props.desc.aroma}</p>
        <p>Appearance:</p>
        <p>{props.desc.appearance}</p>
        <p>Flavor:</p>
        <p>{props.desc.flavor}</p>
        <p>Mouthfeel</p>
        <p>{props.desc.mouthFeel}</p>
      </div>
    );
  }
  
  