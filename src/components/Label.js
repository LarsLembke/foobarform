

export default function Label(props) {

  if (!props.url) {
    return null
  }

    const url = `images/${props.url}`

    function clickLabel() {

      if (!props.name) {
        return null
      }

      console.log(props.name)
      props.details(props.name)
    }

  return (
    <div>
    <img src={url} className="beer_image" onClick={clickLabel}/>
    </div>
  );
}

