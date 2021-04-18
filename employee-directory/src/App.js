import React, { Component } from "react";
import './App.css';
import API from './utils/API'
import Title from "./Components/Title/Title"
import SearchBar from './Components/Search/Search'
import Wrapper from './Components/Wrapper/index'
import Table from './Components/Table/Table'

class App extends Component {

  state = {
    search: "",
    employees: [],
    shownEmployees: []
  }

  componentDidMount () {
    API.RandomEmployee()
    .then(response => {
        this.setState({ "employees": response.data.results, "shownEmployees": response.data.results} )
    })
    .catch(err => console.error(err))
  }

  countrySearched = (country) => {
    this.setState({"search": country}, () => {
      this.updateEmployees()
    })
  }


  updateEmployees = () => {
      const filteredResults = this.state.employees.filter(employee => employee.location.country === this.state.search)
      if(filteredResults.length){
          this.setState({"shownEmployees": filteredResults})
      } else {
        this.setState({"shownEmployees": this.state.employees })
      }
  }

  sortByFirst = () => {
    const sortByFirstName = this.state.shownEmployees.sort((a,b) => {
      if(a.name.first < b.name.first) { return -1; }
      if(a.name.first > b.name.first) { return 1; }
      return 0;
    })
    this.setState({'shownEmployees': sortByFirstName})
  }


  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title />
          <SearchBar countrySearched={this.countrySearched} />
          <Table
            shownEmployees={this.state.shownEmployees}
            sortByFirst={this.sortByFirst}
          />
        </Wrapper>
      </div>
    );

  }
}

export default App;