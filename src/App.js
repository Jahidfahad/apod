

import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {fetchData} from './Components/Home/api'
import Footer from './Components/Footer/Footer';

class App extends Component {

  state={
    data:{}
  }

  async componentDidMount(){
    const callData = await fetchData();
    console.log(callData)
    this.setState({data:callData});
  }
  render() {
    const {data} = this.state;
    return (
      <div>
         <Home data={data}></Home>
         <Footer></Footer>
      </div>
    );
  }
}

export default App;