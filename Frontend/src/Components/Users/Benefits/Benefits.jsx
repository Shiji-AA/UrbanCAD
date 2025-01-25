import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faChalkboardTeacher, faGlobeAmericas, faTools, faHandshake, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
    return (
        <div className="bg-gray-50 py-20 px-6">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl font-semibold text-gray-800 mb-12">Why Choose Us?</h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Benefit 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="flex flex-col items-center mb-6">
                            <FontAwesomeIcon icon={faAward} size="4x" className="text-teal-500 group-hover:text-teal-700 transition-colors duration-300" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-6">A Decade of Excellence</h4>
                            <p className="text-gray-600 mt-4 text-sm">
                                10 years of expertise in delivering high-quality education. We're recognized as leaders in the field.
                            </p>
                        </div>
                        {/* Gradient Outline */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#000080] to-[#00FFFF] opacity-40 z-[-1]"></div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="flex flex-col items-center mb-6">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="4x" className="text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-6">Cutting-Edge Training</h4>
                            <p className="text-gray-600 mt-4 text-sm">
                                Stay ahead in your career with our up-to-date training, incorporating the latest trends and tools.
                            </p>
                        </div>
                        {/* Gradient Outline */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#000080] to-[#00FFFF] opacity-40 z-[-1]"></div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="flex flex-col items-center mb-6">
                            <FontAwesomeIcon icon={faGlobeAmericas} size="4x" className="text-blue-500 group-hover:text-blue-700 transition-colors duration-300" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-6">Global Networking</h4>
                            <p className="text-gray-600 mt-4 text-sm">
                                Leverage a vast network of professionals and expand your opportunities worldwide.
                            </p>
                        </div>
                        {/* Gradient Outline */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#000080] to-[#00FFFF] opacity-40 z-[-1]"></div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="flex flex-col items-center mb-6">
                            <FontAwesomeIcon icon={faTools} size="4x" className="text-green-500 group-hover:text-green-700 transition-colors duration-300" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-6">Comprehensive Tools</h4>
                            <p className="text-gray-600 mt-4 text-sm">
                                Access the latest tools and technologies to excel in your field.
                            </p>
                        </div>
                        {/* Gradient Outline */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#000080] to-[#00FFFF] opacity-40 z-[-1]"></div>
                    </div>

                    {/* Benefit 5 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="flex flex-col items-center mb-6">
                            <FontAwesomeIcon icon={faHandshake} size="4x" className="text-purple-500 group-hover:text-purple-700 transition-colors duration-300" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-6">Sustainable Partnerships</h4>
                            <p className="text-gray-600 mt-4 text-sm">
                                Foster long-term partnerships with experts and industry leaders.
                            </p>
                        </div>
                        {/* Gradient Outline */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#000080] to-[#00FFFF] opacity-40 z-[-1]"></div>
                    </div>

                    {/* Benefit 6 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="flex flex-col items-center mb-6">
                            <FontAwesomeIcon icon={faSignInAlt} size="4x" className="text-pink-500 group-hover:text-pink-700 transition-colors duration-300" />
                            <h4 className="text-xl font-semibold text-gray-800 mt-6">Easy Entry Opportunities</h4>
                            <p className="text-gray-600 mt-4 text-sm">
                                Low entry barriers and recognized programs to easily step into your career.
                            </p>
                        </div>
                        {/* Gradient Outline */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#000080] to-[#00FFFF] opacity-40 z-[-1]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
