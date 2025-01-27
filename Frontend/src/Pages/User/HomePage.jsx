

import Accreditations from '../../Components/Users/Accreditations/Accreditations'
import Benefits from '../../Components/Users/Benefits/Benefits'
import ContactForm from '../../Components/Users/ContactForm/ContactForm'
import EnquiryDiv from '../../Components/Users/EnquiryDiv/EnquiryDiv';
import Footer1 from '../../Components/Users/Footer/Footer1'
import OurPrograms from '../../Components/Users/OurPrograms/OurPrograms'
import Home from '../../Components/Users/Home/Home'
//import WhoWeAre from '../../Components/Users/Home/WhoweAre'
import Navbar from '../../Components/Users/Navbar/Navbar'
import RulesRegulation from '../../Components/Users/RulesRegulation/RulesRegulation'
import OurGoals from '../../Components/Users/AboutUs/OurGoals';


function HomePage() {
    return (
        <div>
            <Navbar/>
            <Home/> 
            <OurGoals/>      
            <ContactForm/>            
            <Benefits/>
            <OurPrograms/>
            <EnquiryDiv bgColor="bg-gray-200" textColor="text-navy" buttonBgColor="bg-navy" buttonTextColor="text-white" buttonHoverBgColor="hover:bg-yellow-500" buttonHoverTextColor="hover:text-white" justifyContent="justify-between" />
            <RulesRegulation/>
            <Accreditations/>
            <EnquiryDiv bgColor="bg-navy" textColor="text-white" buttonBgColor="bg-aqua" buttonTextColor="text-navy" buttonHoverBgColor="hover:bg-yellow-500" buttonHoverTextColor="hover:text-white" justifyContent="justify-between" />
          
            
            <Footer1/>
              
        </div>
    )
}

export default HomePage
