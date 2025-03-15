import { lazy, Suspense } from 'react';
import Navbar from '../../Components/Users/Navbar/Navbar';

// Lazy Loading Components
const Home = lazy(() => import('../../Components/Users/Home/Home'));
const OurGoals = lazy(() => import('../../Components/Users/AboutUs/OurGoals'));
const OurPrograms = lazy(() => import('../../Components/Users/OurPrograms/OurPrograms'));
const ContactForm = lazy(() => import('../../Components/Users/ContactForm/ContactForm'));
const Benefits = lazy(() => import('../../Components/Users/Benefits/Benefits'));
const Accreditations = lazy(() => import('../../Components/Users/Accreditations/Accreditations'));
const EnquiryDiv = lazy(() => import('../../Components/Users/EnquiryDiv/EnquiryDiv'));
const Footer1 = lazy(() => import('../../Components/Users/Footer/Footer1'));

function HomePage() {
    return (
        <div>
            <Navbar />
            
            {/* Suspense for Lazy Loaded Components */}
            <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Home />
                <OurGoals />
                <OurPrograms />
                <ContactForm />
                <Benefits />
                <Accreditations />
                <EnquiryDiv />
                <Footer1 />
            </Suspense>
        </div>
    );
}

export default HomePage;
