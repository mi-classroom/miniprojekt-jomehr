import React, { useEffect, useState } from 'react';
import Detail from './Detail';
import "../css/Painting.css";

function Painting (props) {
  const [isOpen, setIsOpen] = useState(false)
  const [curPainting, setCurPainting] = useState(0) 

  //filter paintings by callabsible year
  const paintings = props.paintings.filter(painting => painting.dating.begin === props.year) 

  //open modal when closed, othwerise open it. set index to index of painting clicked
  const toggleModal = (index) => {
    setIsOpen(!isOpen)
    setCurPainting(index)
  }

  //set index +1 to render next painting. if index reaches end of array do nothing
  const nextPainting = () => {
    if(curPainting === paintings.length-1) {
      return null
    } else {
      if(curPainting+1 === paintings.length-1) document.getElementById("arr-right").style.display="none"
      document.getElementById("arr-left").style.display="initial"
      console.log("next");
      setCurPainting(curPainting+1)
    }
  }

  //set index -1 to render previous painting. if index reaches beginning of array do nothing
  const prevPainting = () => {
    if(curPainting === 0) {
      return null
    } else {
      if(curPainting-1 === 0) document.getElementById("arr-left").style.display="none"
      document.getElementById("arr-right").style.display="initial"
      console.log("prev");
      setCurPainting(curPainting-1)
    }
  }

  //update amount of paintings in collapsible. empty array as second parameter added to avoid infinite loop
  useEffect(() => {
    props.onChangeAmount(paintings.length)
  },[])

  //return a painting preview card for each filtered painting
  return (
    <div>
      {paintings.map((painting, index) => (
        <div className="card" key={index} onClick={()=>toggleModal(index)}>
          <img className= "painting-image" src={painting?.images?.sizes?.s?.src} alt={painting?.title}/>
        </div>
      ))}
      <Detail show={isOpen} data = {paintings} index = {curPainting} next = {nextPainting} prev = {prevPainting} handleClose = {toggleModal}/>
    </div>
  )
};

export default Painting