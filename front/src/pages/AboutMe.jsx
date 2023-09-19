import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Background from "../components/animation/Background";



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