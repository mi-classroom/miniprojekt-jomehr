import React from 'react';
import Painting from "./Painting"

class Content extends React.Component{

  state = {
    items: [],
    isLoaded: false
  };

  render() {
    var {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Painting paintings = {items}/>
        
      );
    }
  }

  componentDidMount() {
    fetch('https://project-bpo3-wechsler-backend.herokuapp.com/api/v2/de/paintings?size=5')
      .then(res => res.json())
      .then((data) => this.setState({
        isLoaded: true,
        items: data}))
      .catch(console.log)
  }  
}

export default Content;