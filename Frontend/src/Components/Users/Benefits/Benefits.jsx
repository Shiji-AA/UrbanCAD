import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faChalkboardTeacher, faGlobeAmericas, faTools, faHandshake, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
    return (
        <div className="bg-gray-50 py-20 px-6">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row justify-center items-center mb-16">
                    <h1 className="text-4xl font-semibold text-aqua mr-2 mb-4 sm:mb-0">
                        Beyond Education
                    </h1>
                    <h1 className="text-4xl font-semibold text-gray-900">
                        Beyond Boundaries
                    </h1>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="bg-white border  border-gray-300 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faAward} size="3x" className="text-aqua" />
                            <h4 className="text-gray-800 text-xl font-semibold mt-4">A Decade of Excellence</h4>
                            <p className="text-gray-600 mt-3 text-sm">
                                10 years of expertise driving quality education. Our brand is recognized as a leader in the field.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white border border-gray-300 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" className="text-teal-500" />
                            <h4 className="text-gray-800 text-xl font-semibold mt-4">Cutting-Edge Training</h4>
                            <p className="text-gray-600 mt-3 text-sm">
                                Our training incorporates the latest trends and tools, ensuring learners stay ahead in their careers.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white border border-gray-300 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faGlobeAmericas} size="3x" className="text-blue-500" />
                            <h4 className="text-gray-800 text-xl font-semibold mt-4">Global Networking</h4>
                            <p className="text-gray-600 mt-3 text-sm">
                                Leverage our vast global network, opening doors to international opportunities and collaborations.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="bg-white border border-gray-300 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faTools} size="3x" className="text-indigo-500" />
                            <h4 className="text-gray-800 text-xl font-semibold mt-4">Comprehensive Tools</h4>
                            <p className="text-gray-600 mt-3 text-sm">
                                Gain access to state-of-the-art tools, ensuring you are equipped with the latest technology in your industry.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 5 */}
                    <div className="bg-white border border-gray-300 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faHandshake} size="3x" className="text-purple-500" />
                            <h4 className="text-gray-800 text-xl font-semibold mt-4">Sustainable Partnerships</h4>
                            <p className="text-gray-600 mt-3 text-sm">
                                We foster long-term partnerships with both learners and industry experts, ensuring sustainable success.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 6 */}
                    <div className="bg-white border border-gray-300 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faSignInAlt} size="3x" className="text-pink-500" />
                            <h4 className="text-gray-800 text-xl font-semibold mt-4">Easy Entry Opportunities</h4>
                            <p className="text-gray-600 mt-3 text-sm">
                                With low entry barriers and industry-recognized programs, we make it easy to enter your chosen career path.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
