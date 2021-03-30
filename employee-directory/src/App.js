import React, { Component } from "react";
import './App.css';
import Wrapper from './Components/Wrapper'
import Table from './Components/Table'
import Search from './Components/Search/Search'

class App extends Component {
  state = {
    countrySearched: ''
  }

  countrySearched = (country) => {

    this.setState({"countrySearched": country})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Search 
         countrySearched= {this.countrySearched} />
          <Wrapper>
          <div className='table-responsive'>
          <Table countrySearched={this.countrySearched} />
          </div>
          </Wrapper>
        </header>
      </div>
  );
}}



export default App;