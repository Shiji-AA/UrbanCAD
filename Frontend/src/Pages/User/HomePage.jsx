
import OurPrograms from '../../Components/OurPrograms/OurPrograms'
import Benefits from '../../Components/Users/Benefits/Benefits'
import ContactForm from '../../Components/Users/ContactForm/ContactForm'
import EnquiryDiv from '../../Components/Users/EnquiryDiv/EnquiryDiv'
//import Footer from '../../Components/Users/Footer/Footer'
import Footer1 from '../../Components/Users/Footer/Footer1'

import Home from '../../Components/Users/Home/Home'
import WhoWeAre from '../../Components/Users/Home/WhoweAre'
import Navbar from '../../Components/Users/Navbar/Navbar'
import RulesRegulation from '../../Components/Users/RulesRegulation/RulesRegulation'
//import ServicesProvided from '../../Components/Users/ServicesProvided/ServicesProvided'

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <WhoWeAre/>
            <ContactForm/>
            <br/>
            <Benefits/>
            <EnquiryDiv bgColor="bg-teal-500" textColor="text-white" buttonBgColor="bg-navy" buttonTextColor="text-white" buttonHoverBgColor="hover:bg-yellow-500" buttonHoverTextColor="hover:text-white" justifyContent="justify-between" />

            <br/>
            <RulesRegulation/>
            {/* <ServicesProvided/> */}
            <OurPrograms/>
            <EnquiryDiv bgColor="bg-navy" textColor="text-white" buttonBgColor="bg-aqua" buttonTextColor="text-navy" buttonHoverBgColor="hover:bg-yellow-500" buttonHoverTextColor="hover:text-white" justifyContent="justify-between" />
          
            <br/>
            <Footer1/>
              
        </div>
    )
}

export default HomePage
