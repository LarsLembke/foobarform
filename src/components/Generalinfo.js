

export default function Generalinfo(props) {

    if (!props.name) {
        console.log('bleh')
        return null;
    }

    console.log(props)

  return (
    <div>
    <h1>{props.name}</h1>
    <h2>{props.cat}</h2>
    <p className="alc">{props.alc}% alc</p>
    </div>
  );
}

