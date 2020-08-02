import React from 'react';
import './App.css';
import Navbar from './shared/navbar'
import Container from './container';
import Quotes from './quotes'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container/>
      <Quotes/>
    </div>
  );
}

export default App;
