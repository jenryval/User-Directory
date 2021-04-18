import React, {Component} from 'react'
import API from '../../utils/API.js'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'


function Table (props) {
    return (
        <table className="table tableStyle">
        <TableHeader sortByFirst={props.sortByFirst}/>
        <tbody>
            {props.shownEmployees.map((employee,index) => {
                return(
                    <TableRow
                        key={index}
                        employeeKey={index + 1}
                        image={employee.picture.thumbnail}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        email={employee.email}
                        phone={employee.phone}
                        location={employee.location.country}
                    />
                )
            })}
        </tbody>
        </table>
    );
}

export default Table 