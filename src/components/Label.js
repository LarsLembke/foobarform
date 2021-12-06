

export default function Label(props) {

    const url = `images/${props.url}`

  return (
    <div>
    <img src={url} className="beer_image"/>
    </div>
  );
}

