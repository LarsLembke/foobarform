import Beer from './Beer';
import Next from './Next';

export default function Form(props) {

    if (!props.beer || !props.taps) {
        return null;
    }

    console.log(props.beer, props.taps)


    const beerMap = props.beer.map((b) => beerOnTap(b))

    function beerOnTap(p) {
    const tapsMap = props.taps.map((t) => t.beer)


    if (tapsMap.includes(p.name)) {
        console.log('includes')
   return <Beer name={p.name} label={p.label} orderData={orderData} details={props.details}/>
     
    } 

    }


    function preDe (e) {
      e.preventDefault()
    }

    function orderData(data, name) {
      console.log(data, name)

      localStorage.setItem(name, data)
    }

    function nextClick() {

      const filterBO = props.beer.filter(b => localStorage.getItem(b.name))

      console.log(filterBO)

      const orderMap = filterBO.map((b) => {

        if (!localStorage.getItem(b.name)) {
          return;
        }
        const amount = localStorage.getItem(b.name)

        return {
          name: b.name,
          amount: amount
        }
      })

      console.log(orderMap);

      props.sendDataToPayment(orderMap);
    }

  return (
    <div className="order_container">
      <img src="/images/foobar_logo.png" alt="foobar logo" className="foobar_logo_mobile" />
    <form onSubmit={preDe}>
        {beerMap}
    </form>
    <Next  clicked={nextClick}/>
    </div>
  );
}

