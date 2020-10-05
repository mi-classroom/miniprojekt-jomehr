import React, { useState } from 'react';
import Detail from './Detail';

function Painting (props) {
  const [isOpen, setIsOpen] = useState(false)
  const [curPainting, setCurPainting] = useState() 

  //filter paintings by callabsible year
  const paintings = props.paintings.filter(painting => painting.dating.begin === props.year) 
  
  const handleChangeAmount = () => {
    const amountPaintings = paintings.length
    props.onChangeAmount(amountPaintings)
    console.log("hCA: " + amountPaintings);
  }

  const toggleModal = (index) => {
    setIsOpen(!isOpen)
    setCurPainting(index)
    console.log("isOPen: "+isOpen);
  }

  //return a painting div for each filtered painting
  //<h6>{painting?.title + " " + painting?.dating?.begin}</h6>
  //<a href={painting?.images?.sizes?.xl?.src}> {painting?.images?.sizes?.xl?.src || "kein Link vorhanden"}</a> 
  return (
    <div>
      {paintings.map((painting, index) => (
        <div className="card" key={index} onClick={()=>toggleModal(index)}>
          <img className= "painting-image" src={painting?.images?.sizes?.xs?.src} alt={painting?.title}/>
        </div>
      ))}
      <Detail show={isOpen} data = {paintings[curPainting]} handleClose = {toggleModal}/>
    </div>
  )
};

export default Painting