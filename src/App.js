import React from 'react';
import './App.css';
import Navbar from './shared/navbar'
import Container from './components/container'
import Quotes from './components/quotes'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ToastContainer autoClose={1000}/>
      <Container/>
      <Quotes/>
    </div>
  );
}

export default App;
