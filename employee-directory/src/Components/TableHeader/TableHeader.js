import React from 'react'


function TableHeader(props) {
    return (
      <thead>
        <tr className="tableHeader">
          <th scope="col">#</th>
          <th scope="col">Picture</th>
          <th className="hoverHand" scope="col" onClick={() => props.sortByFirst()}>First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
    );
}

export default TableHeader