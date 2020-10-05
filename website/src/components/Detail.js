import React, { Component } from 'react';

class Detail extends Component {

  render() {
    if(!this.props.show) {
      //console.log("Detail: false");
      return null;
    } else {
      console.log("Detail: true");
      return (
        <div className="modal-backdrop">
          <div className="mymodal">
            <div className="modal-content">
              <img className="modal-image" src={this.props.data.images?.sizes?.s?.src} alt="404 no picture available"/>
              <div className="modal-info">
                <h2 className="modal-info-title" >{this.props.data.title}</h2>
                <p className="modal-info-descr ">{this.props.data.description}</p>
                <button className="modal-info-button" onClick={this.props.handleClose}> X </button>
              </div>
            </div>
          </div>
        </div>
      )
    }}
}

export default Detail;