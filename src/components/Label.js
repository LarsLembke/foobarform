

export default function Label(props) {

  if (!props.url) {
    return null
  }

  const imgUrl = props.url.split(".")

    const url = `images/${imgUrl[0]}.webp`

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

