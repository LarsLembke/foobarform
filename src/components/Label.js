

export default function Label(props) {

    const url = `images/${props.url}`

  return (
    <div>
    <img src={url}/>
    </div>
  );
}

