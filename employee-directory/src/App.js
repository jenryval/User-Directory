import React, { Component } from "react";
import './App.css';
import Wrapper from './Components/Wrapper'
import Table from './Components/Table'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Table />
        </Wrapper>
      </header>
    </div>
  );
}
export default App;