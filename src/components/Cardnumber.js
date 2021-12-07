

export default function Cardnumber(props) {
  return (
    <>
      <p>Cardnumber</p>
      <input type="number" pattern="[0-9]*" inputmode="numeric"/>
      <div>
        <p>Expiration date</p>
        <input type="number"/>
      </div>
    </>
  );
}

