
import Cards from '../../Components/Users/Cards/Cards'
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
            <Footer/>         
        </div>
    )
}

export default HomePage
