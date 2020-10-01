import React from 'react';
import Collapsible from './Collabsible';
import Painting from "./Painting"

class Content extends React.Component{

  state = {
    amountPictures: 0,
    items: [],
    isLoaded: false
  };

  render() {
    var {isLoaded, items, amountPictures} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Collapsible {...this.state}/>
      );
    }
  }

  componentDidMount() {
    this.fetchData('https://project-bpo3-wechsler-backend.herokuapp.com/api/v2/de/paintings')
  }
  
  fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => this.setState({
        isLoaded: true,
        items: data}))
      .catch(console.log)
  }
}

export default Content;