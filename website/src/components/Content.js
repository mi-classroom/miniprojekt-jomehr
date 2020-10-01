import React from 'react';
import Collapsible from './Collabsible';


const baseUrl = "https://project-bpo3-wechsler-backend.herokuapp.com/api/";
const apiVersion = "v2/"

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
        <div>
          <Collapsible amountPictures = {amountPictures} items = {items} />
        </div>
      );
    }
  }

  componentDidMount() {
    this.fetchData(baseUrl + apiVersion + this.props.language + "/paintings")
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if(this.props.language !== prevProps.language) {
      this.fetchData(baseUrl + apiVersion + this.props.language + "/paintings")
    }
  }
  
  fetchData(url) {
    console.log("fetching");
    fetch(url)
      .then(res => res.json())
      .then((data) => this.setState({
        isLoaded: true,
        items: data}))
      .catch(console.log)
  }
}

export default Content;