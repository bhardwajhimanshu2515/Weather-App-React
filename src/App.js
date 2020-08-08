import React from 'react';
import './App.css';
import Navbar from './shared/navbar'
import Container from './components/container'
import Quotes from './components/quotes'

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
