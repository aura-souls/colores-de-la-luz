import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import Therapy from '../pages/Therapy.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import AdminArea from '../pages/adminPages/AdminArea.jsx';
import PrivateRegister from '../pages/adminPages/PrivateRegister.jsx';
import AdminProfile from '../pages/adminPages/AdminProfile.jsx';
import { ProtectedRoute } from '../utils/ProtectedRoutes.jsx';

function Router() {
    return (
       <>      
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/therapy' element={<Therapy/>}/>
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/area-de-administrador' element={<AdminArea/>}/>
            <Route element={<ProtectedRoute isAllowed={!!localStorage.getItem('auth_token')}/>}>
                  <Route path='/registro-privado' element={<PrivateRegister/>}/>
                  <Route path='/perfil-del-administrador' element={<AdminProfile/>}/>
            </Route> 
          </Routes>
       </>
    );
  }
  
  export default Router;