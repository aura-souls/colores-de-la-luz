import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import Main from '../pages/Main.jsx';
import Treatment from '../pages/Treatment.jsx';

function Router() {
    return (
       <>      
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/treatment' element={<Treatment/>}/>
          </Routes>
       </>
    );
  }
  
  export default Router;