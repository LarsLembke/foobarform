import {useState} from "react";


export default function Amount(props) {

    const [counter, setCounter] = useState(props.start)


    function plus(e) {
        e.preventDefault()
        setCounter((prevCounter) => prevCounter + 1)
        props.orderData(counter + 1, props.name)
    }

    function minus(e) {
        e.preventDefault()
        setCounter((prevCounter) => prevCounter ? prevCounter - 1 : 0)

        props.orderData(counter - 1, props.name)
    }

    function input(e) {
      e.preventDefault()
      // console.log(e)

      const integer = parseInt(e.target.value)
      setCounter(integer)
      props.orderData(integer, props.name)
    }

  return (
      <div className="amount_buttons">

        <button onClick={minus}>
        <img src="/images/minus.png" alt="minus" className="minus"/>
        </button>
        <input type="number" value={counter} className="beerInput" onInput={input}/>
        <button onClick={plus}>
        <img src="/images/plus.png" alt="plus" className="plus"/>
        </button>
    </div>
  );
}
