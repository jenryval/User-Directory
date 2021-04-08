import React, { Component } from "react";
import './App.css';
import Wrapper from './Components/Wrapper'
import Table from './Components/Table'
import Search from './Components/Search/Search'
import Header from './Components/Header/Header'

class App extends Component {
  state = {
    search: ''
  }

  countrySearched = (country) => {

    this.setState({"search": country})
  }

  render() {
    return (
      <div className="App">
       <Header />
        <Search 
         countrySearched= {this.countrySearched} />
          <Wrapper>
          <div className='table-responsive'>
          <Table search={this.state.search} />
          </div>
          </Wrapper>
      </div>
  );
}}



export default App;