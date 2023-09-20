import {React} from 'react'
import NavBar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/form/contactform/ContactForm'


function Home() {
  return (
    <div>
        <NavBar />
        <ContactForm/>
        <Footer />
    </div>
  )
}

export default Home
