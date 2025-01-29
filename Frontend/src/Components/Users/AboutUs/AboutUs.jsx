import Footer1 from "../Footer/Footer1";
import Navbar from "../Navbar/Navbar";
import vision from '../../../assets/certificates/vision2.png';
import mission from '../../../assets/certificates/mission.jpg';


function AboutUs() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="text-navy py-10 bg-gradient-to-r from-blue-50 via-teal-100 to-navy-500">
                <div className="max-w-screen-xl mx-auto text-center px-6">
                    <h2 className="font-heading text-4xl font-extrabold mb-6">
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-aqua to-navy animate-fade-left"
                            style={{ animationDelay: "400ms" }}
                        >
                            {`DREAM. `}
                        </span>
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-aqua to-navy animate-fade-left"
                            style={{ animationDelay: "800ms" }}
                        >
                            {`ACHIEVE. `}
                        </span>
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-aqua to-navy animate-fade-left"
                            style={{ animationDelay: "1200ms" }}
                        >
                            {`LEAD`}
                        </span>
                    </h2>
                    <p data-aos="zoom-in"
                        className="font-body text-xl font-bold max-w-3xl mx-auto opacity-0 animate-fade-in"
                        style={{ animationDelay: "800ms", backgroundImage: "linear-gradient(to right, #00bcd4, #001f3d)", WebkitBackgroundClip: "text", color: "transparent" }}
                    >
                        Inspiring minds, transforming lives, and building a future driven by knowledge and innovation.
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
            <div data-aos="fade-left"
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-4">
                <div className="max-w-screen-xl mx-auto text-center px-6">
                    <h2 className="font-heading text-3xl font-bold text-white mb-6">Be Part of Our Vision</h2>
                    <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                        Join hands with us to redefine the future of education and skill development worldwide.
                    </p>
                    <button className="font-body bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-700 transition-all">
                        Get Involved
                    </button>
                </div>
            </div>

            <Footer1 />
        </>
    );
}

export default AboutUs;
