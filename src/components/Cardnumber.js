import { useState } from "react";



export default function Cardnumber(props) {

  const [ccNumber, setCcNumber] = useState("");
  const [ccValid, setCcValid] = useState(false);


  const formatAndSetCcNumber = e => {
    const inputVal = e.target.value.replace(/ /g, ""); //remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits

    if (inputNumbersOnly.length > 16) {
        //If entered value has a length greater than 16 then take only the first 16 digits
        inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

   // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
        spacedNumber = splits.join(" "); // Join all the splits with an empty space
    }

    setCcNumber(spacedNumber); // Set the new CC number

    console.log(ccNumber)
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
     alert("Please enter a valid credit card number.");
     return false;
     }
}

function mmInput (e) {
  const month = e.target.value;
  
  if (month > 12) {
    alert("Please enter a valid month.")
  }
}
 
function yyInput (e) {
  const year = e.target.value;
  const currentYear = new Date().getFullYear()

  console.log()
  
  if ( year.length === 2 && year < currentYear.toString().slice(2,4)) {
    alert("Please enter a valid year.")
    
  }
}

  return (
    <>
      <label>Cardnumber</label>
      <input type="text" value={ccNumber} onChange={formatAndSetCcNumber} onBlur={creditCardValidation} placeholder="Fx.: 1234 5678 9012 3456"/>
      <div>
        <label>Expiration date</label>
        <input type="text" placeholder="MM" maxLength="2" onChange={mmInput}/>
        <input type="text" placeholder="YY" maxLength="2" onChange={yyInput}/>
      </div>
    </>
  );
}

