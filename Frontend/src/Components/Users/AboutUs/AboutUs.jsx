import Footer1 from "../Footer/Footer1";
import Navbar from "../Navbar/Navbar";
import vision from '../../../assets/certificates/vision2.jpeg';
import mission from '../../../assets/certificates/mission.jpg';
import heroimage3 from '../../../assets/certificates/IMAGE1.jpeg'



function AboutUs() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
         {/* Hero Section */}
<div className="relative text-navy py-16 bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: `url(${heroimage3})` }}>
    <div className="max-w-screen-xl mx-auto text-center px-6 py-16 rounded-lg">
        <h2 className="font-heading text-4xl font-extrabold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-white  animate-fade-left"
                style={{ animationDelay: "400ms" }}>
                {`Imagine. `}
            </span>
            
            <span className="bg-clip-text text-transparent bg-white animate-fade-left"
                style={{ animationDelay: "800ms" }}>
                {`Excel. `}
            </span>
            <span className="bg-clip-text text-transparent bg-white animate-fade-left"
                style={{ animationDelay: "1200ms" }}>
                {`Inspire`}
            </span>
        </h2>
        <p data-aos="zoom-in"
            className="font-body text-xl font-bold max-w-3xl mx-auto opacity-0 animate-fade-in text-white"
            style={{ animationDelay: "800ms" }}>
            Igniting Creativity Pursuing Brilliance , and Shaping Future Innovators 
        </p>
    </div>
</div>


            {/* Content Section */}
            <div data-aos="fade-up" className="bg-blue-50 px-6 py-12 shadow-lg rounded-lg">
                <div className="max-w-screen-xl mx-auto space-y-16">
                    {/* Vision Section */}
                    <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl p-8 hover:shadow-xl transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-50 to-aqua-300">
                        <div className="lg:w-1/2">
                            <img src={vision} alt="Vision" className="w-full h-auto object-cover rounded-xl shadow-md" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="font-heading text-4xl font-semibold text-navy mb-4">Our Vision</h3>
                            <p className="font-body text-aqua text-lg leading-relaxed">
                                “To be the driving force behind accessible, affordable, and impactful education and skill development, shaping a brighter future for individuals worldwide.”
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div data-aos="fade-up" className="flex flex-col lg:flex-row-reverse items-center bg-white rounded-2xl p-8 hover:shadow-xl transition-transform transform hover:scale-105 bg-gradient-to-r from-aqua-400 to-blue-300">
                        <div className="lg:w-1/2">
                            <img src={mission} alt="Mission" className="w-full h-auto object-cover rounded-xl shadow-md" />
                        </div>
                        <div className="lg:w-1/2 lg:pr-12 mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="font-heading text-4xl font-semibold text-aqua mb-4">Our Mission</h3>
                            <p className="font-body text-navy text-lg leading-relaxed">
                                “To empower individuals globally through a strong network of franchises, offering accessible and top-tier education and skill-building opportunities that drive lifelong success.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div data-aos="fade-left" className="bg-navy py-8">
    <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="font-heading text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-500 mb-6 shadow-md transition-all duration-500 hover:scale-105 hover:from-purple-500 hover:to-blue-400">
            {/* Embark on Excellence Together */}
            Shape Tomorrow with Us
        </h2>
        <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-6 shadow-sm transition-all duration-500 hover:scale-105 hover:text-white hover:bg-clip-text hover:bg-gradient-to-r from-blue-300 to-purple-400">
            {/* Join hands with us to redefine the future of education and skill development worldwide. */}

            Together , we can Revolutionize Global Education
        </p>
        <a
            href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
        >                    
            <button className="font-body bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-500 hover:from-purple-600 hover:to-blue-500 hover:shadow-xl">
                Contact Us
            </button>
        </a>    
    </div>
</div>


            <Footer1 />
        </>
    );
}

export default AboutUs;
