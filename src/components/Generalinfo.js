

export default function Generalinfo(props) {

    if (!props.name) {
        console.log('bleh')
        return null;
    }

    console.log(props)

  return (
    <div>
    <h2>{props.name}</h2>
    <h4>{props.cat}</h4>
    <p>{props.alc}% alc</p>
    </div>
  );
}

