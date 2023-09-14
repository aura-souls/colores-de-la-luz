import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx';

function Router() {
    return (
  
          <>      
          <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </>
          
    );
  }
  
  export default Router;