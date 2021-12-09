

export default function Cardnumber(props) {

  function focusfun(e) {
    console.log(e.target.value.length)



    if (e.target.value.length == e.target.getAttribute("maxlength")) {

        console.log(e.target.nextElementSibling);

        e.target.nextElementSibling.focus();

        
    }


}


  
  return (
    <>
      <p>Cardnumber</p>
      <input type="text" pattern="[0-9]*" inputmode="numeric" maxLength="16" onInput={focusfun}/>
      <div>
        <p>Expiration date</p>
        <input type="text" pattern="[0-9]*" inputmode="numeric"/>
      </div>
    </>
  );
}

