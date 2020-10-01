import React from 'react';

function Painting (props) {

  //filter paintings by callabsible year
  var paintings = props.paintings.filter(painting => painting.dating.begin === props.year) 

  const changeAmount = (paintings) => {
    props.onChangeAmount(paintings.length);
  }

  //return a painting div for each filtered painting
  return (
    <div>
      {changeAmount(paintings)}
      {paintings.map((painting, index) => (
        <div className="card" key={index}>
          <body className="card-body">
            <a href={painting?.images?.sizes?.xl?.src}> {painting?.images?.sizes?.xl?.src || "kein Link vorhanden"}</a> 
          </body>
        </div>
      ))}
    </div>
  )
};

export default Painting