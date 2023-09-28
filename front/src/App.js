import React from 'react'
import './App.css';
import Router from './application/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import theme from './theme';


function App() {
  return (
    <>
  <ThemeProvider theme={theme}>
      <BrowserRouter>
         <Navbar />
         <Router/>
         <Footer/>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}


export default App;
