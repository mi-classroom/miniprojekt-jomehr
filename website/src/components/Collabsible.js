import React from "react";
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
  const[amount, setAmount] = React.useState(props.amountPictures)

  //create new array with unique datings of paintings
  const dateList = [...new Set(props.items.map(data => data.dating.begin))]

  
  const changeAmount = (amount) => {
    setAmount(amount);
  }

  //return a collapsible for each dating in dateList array and fill it with paintings
  return dateList.map((year, index) => (
    <div key={index} className="collapsible">
      
      <div className="collapsible-header" onClick={e => onCollapsible(e)}> 
        <text className="collapsible-title">{year}</text>
        <ImImage className = "collapsible-image"/>
        <text className="collapsible-number">{amount}</text>
      </div>
      <div className="collapsible-content">
        <Painting paintings = {props.items} year = {year} onChangeAmount = {changeAmount} />
      </div>
    </div>
  ));
}

export default Collapsible;