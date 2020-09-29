import React from 'react';

const Painting = ({ paintings }) => {
  return (
    <div>
          <center><h1>Painting List</h1></center>
          {paintings.map((painting) => (
            <div className="card" key={painting.objectId}>
              <div className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <a className="card-subtitle mb-2 text-muted" href={painting.images.sizes.xl.src}> {painting.images.sizes.xl.src}</a>                
                <p className="card-text">{painting.description}</p>
              </div>
            </div>
          ))}
        </div>
  )
};

export default Painting