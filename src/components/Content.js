import React from 'react';
import Collapsible from './Collabsible';

const baseUrl = "https://project-bpo3-wechsler-backend.herokuapp.com/api/";
const apiVersion = "v2/"

class Content extends React.Component{

  state = {
    items: [],
    isLoaded: false,
    isOpen: false
  };


  render() {
    var {isLoaded, items, isOpen} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      if(Array.isArray(items)) {
        console.log("DATA IS ARRAY");
        return (
          <div>
            <Collapsible items = {items}/>
          </div>
        );
      }else{
        console.log("DATA IS OBJECT");
        console.log(isOpen);
        return(
          <Collapsible items = {new Array(items)}/>
        )
      }
    }
  }

  toggleModal = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  componentDidMount() {
    this.fetchData(baseUrl + apiVersion + this.props.language + "/paintings" + this.props.location.search)
  }

  componentDidUpdate(prevProps) {
    if(this.props.language !== prevProps.language) {
      console.log("fetching new data by language");
      this.fetchData(baseUrl + apiVersion + this.props.language + "/paintings/" + this.props.location.search)
    }

    if(this.props.id > 0 && this.props.id !== prevProps.id) {
      console.log("fetching new data by id")
      this.fetchData(baseUrl + apiVersion + this.props.language + "/paintings/" + this.props.id)
    }
  }
  
  fetchData(url) {
    console.log("fetching data");
    fetch(url)
      .then(res => res.json())
      .then((data) => this.setState({
        isLoaded: true,
        items: data}))
      .catch(console.log)
  }
}

export default Content;