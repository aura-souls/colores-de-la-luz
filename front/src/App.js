import React from 'react'
import './App.css';
import Router from './application/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
         <Navbar />
         <Router/>
         <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App;