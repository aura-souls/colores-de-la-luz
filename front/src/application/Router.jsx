import { createBrowserRouter } from "react-router-dom";
import AbautMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses';
import Home from '../pages/Home';
import Treatment from '../pages/Treatment';



const routes = [
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/card/:id",
        element: <AbautMe />,
    },

    {
        path: "/create",
        element: <Contact />,
    },

    {
        path: "/edit/:id",
        element: <Courses />,
    },

    {
        path: "/signin",
        element: <Home />,
    },

    {
        path: "/login",
        element: <Treatment />,
    },
]

const router = createBrowserRouter(routes);

export default router;


/* import React from 'react';
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

*/