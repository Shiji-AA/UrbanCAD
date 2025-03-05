

import Accreditations from '../../Components/Users/Accreditations/Accreditations'
 import ContactForm from '../../Components/Users/ContactForm/ContactForm'
 import EnquiryDiv from '../../Components/Users/EnquiryDiv/EnquiryDiv';
 import Footer1 from '../../Components/Users/Footer/Footer1'
import OurPrograms from '../../Components/Users/OurPrograms/OurPrograms'
import Benefits from '../../Components/Users/Benefits/Benefits'
import Home from '../../Components/Users/Home/Home'
import Navbar from '../../Components/Users/Navbar/Navbar'
import OurGoals from '../../Components/Users/AboutUs/OurGoals';
//import Hero from '../../Components/Users/Hero/Hero';


function HomePage() {
    return (
        <div>
             <Navbar/>
             <Home/>              
             <OurGoals/>   
             <OurPrograms/>
             <ContactForm/>  
             <EnquiryDiv bgColor="bg-white" textColor="text-navy" buttonBgColor="bg-navy" buttonTextColor="text-white" buttonHoverBgColor="hover:bg-aqua" buttonHoverTextColor="hover:text-white" justifyContent="justify-between" /> 
             <Benefits/> 
            <Accreditations/>
              <EnquiryDiv bgColor="bg-navy" textColor="text-white" buttonBgColor="bg-aqua" buttonTextColor="text-navy" buttonHoverBgColor="hover:bg-white" buttonHoverTextColor="hover:text-navy" justifyContent="justify-between" />  
            <Footer1/>              
        </div>
    )
}

export default HomePage
