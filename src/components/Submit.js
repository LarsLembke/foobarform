

export default function Submit(props) {


  function handler(e) {
    e.preventDefault()

    props.setTheOrder()

  }




  return (
    <button onClick={handler}>Pay and order</button>
  );
}

