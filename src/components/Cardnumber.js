import { useState } from "react";



export default function Cardnumber(props) {

  const [ccNumber, setCcNumber] = useState("");
  const [ccValid, setCcValid] = useState(false);


  const formatAndSetCcNumber = e => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
        inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
        spacedNumber = splits.join(" ");
    }

    setCcNumber(spacedNumber);

};

function creditCardValidation(e)
{

  const cardNumber = ccNumber.replaceAll(" ", "");
  console.log(cardNumber);

  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
  const americanExpress = /^3[47][0-9]{13}$/;
  const dinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  const jcb = /^(?:2131|1800|35\d{3})\d{11}$/;
   if(cardNumber.match(visa))
     {
       console.log("visa")
      return true;
     } else if(cardNumber.match(mastercard))
     {
       console.log("mastercard")
      return true;
     } else if(cardNumber.match(americanExpress))
     {
       console.log("American Express")
      return true;
     } else if(cardNumber.match(dinersClub))
     {
       console.log("dinersClub")
      return true;
     } else if(cardNumber.match(discover))
     {
       console.log("discover")
      return true;
     } else if(cardNumber.match(jcb))
     {
       console.log("jcb")
      return true;
     } else 
     {
      e.target.style.borderColor = "red";
     return false;
     }
}

function mmInput (e) {
  const month = e.target.value;
  
  if (month > 12) {
    e.target.style.borderColor = "red";

  } else {
    e.target.style.borderColor = "#fff";

  }
}
 
function yyInput (e) {
  const year = e.target.value;
  const currentYear = new Date().getFullYear()

  console.log()
  
  if ( year.length === 2 && year < currentYear.toString().slice(2,4)) {
    e.target.style.borderColor = "red";

  } else {
    e.target.style.borderColor = "#fff";

  }
    
}

  return (
    <>
    <div className="card">
      <div className="card_number_fields">
      <p className="card_number">Card number:</p>
      <label>Card number</label>
      <input className="card_number_input" type="text" value={ccNumber} onChange={formatAndSetCcNumber} onBlur={creditCardValidation} placeholder="E.g.: 1234 5678 9012 3456"/>
      </div>
          <div className="exp_date_fields">
          <p className="exp_date">Expiration date:</p>
        <label>Expiration date</label>
        <div className="exp_date_input">
        <input type="text" placeholder="MM" maxLength="2" onBlur={mmInput}/>
        <input type="text" placeholder="YY" maxLength="2" onBlur={yyInput}/>
        </div>
      </div>
     
      </div>
    </>
  );
}

