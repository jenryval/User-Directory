import React, {Component} from 'react'
import Employee from '../Employee/employee'
import API from '../../utils/API'
import './Table.css'


class Table extends Component {
    state = {
      employees: [],
      shownEmployees: []
    }

    componentDidMount () {
      API.RandomEmployee()
      .then(response => {
          // console.log(this.props.search)
          // this.updateEmployees(response.data.results)
          this.setState({ "employees": response.data.results, "shownEmployees": response.data.results} )
          // console.log(this.state.employees)
      })
      .catch(err => console.error(err))
  }

  updateEmployees() {
    const filteredResults = this.state.employees.filter(employee => employee.location.country === this.props.search)
    console.log(filteredResults)
}

      
    render() {
      return (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">AVI</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">location</th>
              </tr>
            </thead>
          {this.state.shownEmployees.map((employee, index) => {
            return (
              <Employee 
              key={index}
              employeeKey = {index + 1}
              image={employee.picture.thumbnail}
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              phone={employee.phone}
              location={employee.location.country}
              />
            )
          })}
            <tbody>
            </tbody>
          </table>
        );
    }
}
export default Table 