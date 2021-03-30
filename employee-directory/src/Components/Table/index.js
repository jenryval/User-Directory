import React, {Component} from 'react'
import Employee from '../Employee/employee'
import API from '../../utils/API'


class Table extends Component {
    state = {
      employees: []
    }

    componentDidMount (){
      API.RandomEmployee()
      .then( Response => this.setState({'employees': Response.data.results}))
      .catch(err => console.log(err))
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
          {this.state.employees.map((employee, index) => {
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