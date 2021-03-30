import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


function searchtable (props) {
    

    
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search by Country</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Enter Country"
                    aria-label="Country Search"
                    aria-describedby="Search bar"
                    onChange= {e => props.countrySearched(e.target.value)}
                />
            </InputGroup>
        )
    }   



export default searchtable;