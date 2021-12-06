

export default function Label(props) {

    const url = `images/${props.url}`

    function clickLabel() {
      console.log(props.name)
      props.details(props.name, true)
    }

  return (
    <div>
    <img src={url} className="beer_image" onClick={clickLabel}/>
    </div>
  );
}

