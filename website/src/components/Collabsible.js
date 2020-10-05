import React, { useEffect, useState } from "react";
import Painting from "./Painting";
import {ImImage} from "react-icons/im"

function onCollapsible(e) {
  e.persist();
  e.target.classList.toggle("active");
  const content = e.target.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function Collapsible(props) {
  const [amount, setAmount] = React.useState([])

  //create new array with unique datings of paintings
  const dateList = [...new Set(props.items.map(data => data.dating.begin))]

  //set amount received from Painting
  const changeAmount = (amount) => {
    console.log("cA: " + amount);
    setAmount(prevAmount => [...prevAmount, amount])
  }

  //return a collapsible for each dating in dateList array and fill it with paintings
  return dateList.map((year, index) => (
    <div key={year} className="collapsible">
      <div className="collapsible-header" onClick={e => onCollapsible(e)}> 
        <h1 className="collapsible-title">{year}</h1>
        <div className="collapsible-divider-1"/>
        <div className="collapsible-img-div">
          <ImImage className = "collapsible-image"/>
          <p className="collapsible-number">{amount[index]}</p>
        </div>
        <div className="collapsible-divider-2"/>
      </div>
      <div className="collapsible-content">
        <Painting paintings = {props.items} year = {year} onChangeAmount = {changeAmount} />
      </div>
    </div>
  ));
}

export default Collapsible;