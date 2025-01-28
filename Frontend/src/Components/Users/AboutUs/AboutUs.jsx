import Footer1 from "../Footer/Footer1";
import Navbar from "../Navbar/Navbar";
import cat5 from '../../../assets/civil/cat5.jpg';

function AboutUs() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-10">
                <div className="max-w-screen-xl mx-auto text-center px-4">
                    <h1 className="font-heading text-5xl font-extrabold mb-4">About Us</h1>
                    <p className="font-body text-xl font-light">Empowering lives through accessible, high-quality education and skill development.</p>
                </div>
            </div>

            {/* Journey Section */}
            <div className="bg-gray-100 px-4">
                <div className="max-w-screen-xl mx-auto">
                 

                    {/* Vision Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-8 mb-12 hover:shadow-2xl transition-transform transform hover:scale-105">
                        <div className="lg:w-1/2">
                            <img 
                                src={cat5} 
                                alt="Vision" 
                                className="w-full h-auto object-cover rounded-lg shadow-md" 
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                            <h3 className="font-heading text-3xl font-semibold text-blue-600 mb-4">Our Vision</h3>
                            <p className="font-body text-gray-700 text-lg leading-relaxed">
                                ‘To be a leading catalyst in transforming lives by making high-quality education and skill development accessible, affordable, and impactful for individuals in every corner of the world.’
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:scale-105">
                        <div className="lg:w-1/2">
                            <img 
                                src={cat5} 
                                alt="Mission" 
                                className="w-full h-auto object-cover rounded-lg shadow-md" 
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pr-8 mt-6 lg:mt-0">
                            <h3 className="font-heading text-3xl font-semibold text-green-600 mb-4">Our Mission</h3>
                            <p className="font-body text-gray-700 text-lg leading-relaxed">
                                ‘To expand globally through a network of franchises, delivering affordable, high-quality education and skill development tailored to empower individuals locally, fostering lifelong learning and sustainable growth.’
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-300 to-blue-400 py-5">
                <div className="max-w-screen-xl mx-auto text-center px-4">
                    <h2 className="font-heading text-4xl font-bold text-white mb-6">Join Our Mission</h2>
                    <p className="font-body text-lg text-white mb-8">
                        Be a part of a global movement to make education accessible and impactful for everyone.
                    </p>
                    <button className="font-body bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            <Footer1 />
        </>
    );
}

export default AboutUs;
