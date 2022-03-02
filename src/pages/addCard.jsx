import "../App.css";
import { useDispatch } from "react-redux";
import { addCards } from "../redux/walletSlice";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Card from "../components/MyCards";


const AddCard = () => {
  let dispatch = useDispatch();
  const history = useHistory();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [ bank,setBank ] = useState("");

  const addCard = () => {
    let newCard = {
      number: number,
      name: name,
      expiry: expiry,
      cvc: cvc
    };
    dispatch(addCards(newCard));
    history.push("/");
  };

  const selectBank = (element) => {
    alert(element.options[element.selectedIndex].value);
    alert(element.options[element.selectedIndex].text);
    
    const a = element.options[element.selectedIndex].value;
    
    if(a == "saab") {
        document.body.style.backgroundColor = "red";
    }
 }

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  return (
    <div className="App">
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />

      {/* kortet renderas med hjälp av useEffect*/}

      <form onSubmit={addCard}>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          ref={ref}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />


  <select required onChange={(e) => {
  const selectedBank= e.target.value;
  setBank(selectedBank)
  }}>
    <option value="" disabled selected hidden>Vendor</option>
    <option value="handelsbanken">Handelsbanken</option>
    <option value="sparbanken">Sparbanken</option>
    <option value="seb">SEB</option>
  </select>


        <input type="submit" value="Add Card"/>
        {bank}
      </form>
    </div>
  );
};

export { AddCard };
