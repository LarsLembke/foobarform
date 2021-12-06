import {useState} from "react";


export default function Amount(props) {

    const [counter, setCounter] = useState(0)


    function plus() {
        setCounter((prevCounter) => prevCounter + 1)
    }

    function minus() {
        setCounter((prevCounter) => prevCounter ? prevCounter - 1 : 0)
    }

  return (
      <div className="amount_buttons">
        <button onClick={minus}>
        <img src="/images/minus.png" alt="minus" className="minus"/>
        </button>
        <input type="number" value={counter} className="beerInput"/>
        <button onClick={plus}>
        <img src="/images/plus.png" alt="plus" className="plus"/>
        </button>
    </div>
  );
}
