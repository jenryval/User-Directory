import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'



function searchBar(props) {
    return (
        <InputGroup className="mb-3 searchBar">
        
        <FormControl
            className="formControl"
            placeholder="Filter By Country"
            aria-label="Country Search"
            aria-describedby="basic-addon1"
            onChange={e => props.countrySearched(e.target.value)}
        />
        </InputGroup>
    )
}

export default  searchBar;