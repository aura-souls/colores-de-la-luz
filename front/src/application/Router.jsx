import { createBrowserRouter } from "react-router-dom";
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Treatment from '../pages/Treatment';



const routes = [
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "About",
        element: <AboutMe />,
    },

    {
        path: "/contact",
        element: <Contact />,
    },


    {
        path: "/treatment",
        element: <Treatment />,
    },
]

const router = createBrowserRouter(routes);

export default router;


/* import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx';
import Main from '../pages/Main.jsx';

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

*/