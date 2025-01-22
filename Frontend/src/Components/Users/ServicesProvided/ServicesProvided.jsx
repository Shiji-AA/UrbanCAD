import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function ServicesProvided() {
    return (
        <div className="bg-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
            {/* Heading */}
            <div className="flex justify-center items-center mb-1">
                <h1 className="text-4xl font-semibold text-[#00B8D4] mr-2">
                    Comprehensive
                </h1>
                <h1 className="text-4xl font-semibold text-[#1A237E]">
                    Franchise Support
                </h1>
            </div>

            <p className="text-center mt-1 text-lg text-gray-700">
                A podcast series to dive deep into the world of franchising!
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {/* Benefit 1 */}
                <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#FFD54F" />
                        <h4 className="text-navy text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-navy mt-2">
                            Backed by 38 years of strength and experience,
                            the CADD Centre Group takes pride in a rich history of
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>
                
                {/* Benefit 2 */}
                <div className="bg-gray-100  p-3 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#FFD54F" />
                        <h4 className="text-navy text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-navy mt-2">
                            Backed by 38 years of strength and experience,
                            the CADD Centre Group takes pride in a rich history of
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="bg-gray-100  p-3 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#FFD54F" />
                        <h4 className="text-navy text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-navy mt-2">
                            Backed by 38 years of strength and experience,
                            the CADD Centre Group takes pride in a rich history of
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#FFD54F" />
                        <h4 className="text-navy text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-navy mt-2">
                            Backed by 38 years of strength and experience,
                            the CADD Centre Group takes pride in a rich history of
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#FFD54F" />
                        <h4 className="text-navy text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-navy mt-2">
                            Backed by 38 years of strength and experience,
                            the CADD Centre Group takes pride in a rich history of
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#FFD54F" />
                        <h4 className="text-navy text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-navy mt-2">
                            Backed by 38 years of strength and experience,
                            the CADD Centre Group takes pride in a rich history of
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>

                {/* Additional Benefits */}
                {/* Repeat as needed */}
            </div>
        </div>
        </div>
    );
}

export default ServicesProvided;
