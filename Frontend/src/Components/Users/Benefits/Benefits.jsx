import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Heading */}
                <div className="flex justify-center items-center mb-12">
                    <h1 className="text-4xl font-semibold text-aqua mr-2">
                        Experience the
                    </h1>
                    <h1 className="text-4xl font-semibold text-navy">
                        CADDvantage
                    </h1>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="bg-gradient-to-r from-blue-500 to-aqua p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center mb-4">
                            <FontAwesomeIcon icon={faAward} size="3x" color="#fff" />
                            <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                            <p className="text-white mt-2">
                                Backed by 38 years of strength and experience, 
                                the CADD Centre Group takes pride in a rich history of 
                                empowering countless learners to achieve their aspirations.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center mb-4">
                            <FontAwesomeIcon icon={faAward} size="3x" color="#fff" />
                            <h4 className="text-aqua text-lg font-medium mt-4">Innovative Learning</h4>
                            <p className="text-white mt-2">
                                We integrate modern techniques and technologies to ensure our learners stay ahead in their fields.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center mb-4">
                            <FontAwesomeIcon icon={faAward} size="3x" color="#fff" />
                            <h4 className="text-aqua text-lg font-medium mt-4">Expert Trainers</h4>
                            <p className="text-white mt-2">
                                Our trainers are industry experts with years of experience, ensuring top-notch guidance for all learners.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center mb-4">
                            <FontAwesomeIcon icon={faAward} size="3x" color="#fff" />
                            <h4 className="text-aqua text-lg font-medium mt-4">Global Network</h4>
                            <p className="text-white mt-2">
                                With a strong network of partners across the globe, we provide opportunities to grow internationally.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 5 */}
                    <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center mb-4">
                            <FontAwesomeIcon icon={faAward} size="3x" color="#fff" />
                            <h4 className="text-aqua text-lg font-medium mt-4">Cutting-Edge Tools</h4>
                            <p className="text-white mt-2">
                                We provide access to the latest tools and software to help learners stay competitive in their careers.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 6 */}
                    <div className="bg-gradient-to-r from-teal-500 to-green-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                        <div className="flex flex-col items-center mb-4">
                            <FontAwesomeIcon icon={faAward} size="3x" color="#fff" />
                            <h4 className="text-aqua text-lg font-medium mt-4">Industry Recognition</h4>
                            <p className="text-white mt-2">
                                Our programs are recognized by top industry leaders, ensuring credibility and value for your learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
