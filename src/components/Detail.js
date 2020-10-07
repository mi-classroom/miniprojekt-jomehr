import React, { Component } from 'react';
import {FiArrowRight, FiArrowLeft} from "react-icons/fi";
import "../css/Detail.css";

class Detail extends Component {

  render() {
    console.log(this.props.show);
    if(!this.props.show) {
      //make body scrollable again
      document.body.style.overflow = ""
      return null;
    } else {
      //prevent scrollable background
      //console.log(this.props.data);
      
      var curPainting 
      if (Array.isArray(this.props.data)) {
        console.log(this.props.index);
        curPainting = this.props.data[this.props.index]
      }else {
        curPainting = this.props.data
      }
      document.body.style.overflow = "hidden"
      return (
        <div className="modal-backdrop">
          <div className="mymodal">
            <div className="modal-content">
              <img className="modal-image" src={curPainting.images?.sizes?.s?.src} alt="no picture available"/>
              <div className="modal-info">
                <h2 className="modal-info-title" >{curPainting.title}</h2>
                <p className="modal-info-descr">{curPainting.description}</p>
                <h6 className="modal-info-repo">{curPainting.repository}</h6>
                <h6 className="modal-info-owner">
                  {(curPainting.repository === curPainting.owner) ? "" : curPainting.owner}
                </h6>
                <h6 className="modal-info-dim">
                  {curPainting.structuredDimension?.height + " x " + curPainting.structuredDimension?.width + " cm"}
                </h6>
                <h6 className="modal-info-id">{curPainting.objectId} </h6>
                <button className="modal-info-button" onClick={this.props.handleClose}> X </button>
                <button id="arr-left" className="modal-info-prev"> 
                  <FiArrowLeft  className="modal-info-arrows" onClick={this.props.prev}/>
                </button>
                <button id="arr-right" className="modal-info-next"> 
                  <FiArrowRight className="modal-info-arrows" onClick={this.props.next}/> 
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }}
}

export default Detail;