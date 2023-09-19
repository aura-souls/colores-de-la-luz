import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Background from "../components/animation/Background";
import Button from '../components/button/Button'


function Home() {
  return (
    <div>
        <Navbar />
        <Background />
        <Footer />
    </div>
  )
}

export default Home