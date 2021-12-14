

export default function Submit(props) {

  function handler(e) {
    e.preventDefault()
    props.setTheOrder()
  }

  return (
    <div className="sub_and_pay">
    <button onClick={handler} className="sub_and_pay_button">SUBMIT & PAY</button>
    </div>
  );
}

