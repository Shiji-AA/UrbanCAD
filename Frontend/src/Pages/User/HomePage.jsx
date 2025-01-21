
import Cards from '../../Components/Users/Cards/Cards'
import ContactForm from '../../Components/Users/ContactForm/ContactForm'
import Footer from '../../Components/Users/Footer/Footer'
import Hero1 from '../../Components/Users/Hero/Hero1'
import Home from '../../Components/Users/Home/Home'
import Navbar from '../../Components/Users/Navbar/Navbar'

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Cards/>
            <Hero1/>
            <ContactForm/>
            <Footer/>         
        </div>
    )
}

export default HomePage
