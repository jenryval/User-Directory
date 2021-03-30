import React, { Component } from "react";
import './App.css';
import Wrapper from './Components/Wrapper'
import Table from './Components/Table'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
        <div className='table-responsive'>
          <Table />
          </div>
        </Wrapper>
      </header>
    </div>
  );
}
export default App;