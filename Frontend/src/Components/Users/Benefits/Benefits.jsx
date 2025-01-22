import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
    return (
        <div className="bg-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
            {/* Heading */}
            <div className="flex justify-center items-center mb-8">
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
                <div className="bg-navy p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#7fdbff" />
                        <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-white mt-2">
                            Backed by 38 years of strength and experience, 
                            the CADD Centre Group takes pride in a rich history of 
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>
    
                {/* Benefit 2 */}
                <div className="bg-navy p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#7fdbff" />
                        <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-white mt-2">
                            Backed by 38 years of strength and experience, 
                            the CADD Centre Group takes pride in a rich history of 
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>
    
                {/* Benefit 3 */}
                <div className="bg-navy p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#7fdbff" />
                        <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-white mt-2">
                            Backed by 38 years of strength and experience, 
                            the CADD Centre Group takes pride in a rich history of 
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>
                 {/* Benefit 3 */}
                 <div className="bg-navy p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#7fdbff" />
                        <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-white mt-2">
                            Backed by 38 years of strength and experience, 
                            the CADD Centre Group takes pride in a rich history of 
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>

                 {/* Benefit 3 */}
                 <div className="bg-navy p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#7fdbff" />
                        <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-white mt-2">
                            Backed by 38 years of strength and experience, 
                            the CADD Centre Group takes pride in a rich history of 
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>

                 {/* Benefit 3 */}
                 <div className="bg-navy p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                        <FontAwesomeIcon icon={faAward} size="3x" color="#7fdbff" />
                        <h4 className="text-aqua text-lg font-medium mt-4">Proven Legacy</h4>
                        <p className="text-white mt-2">
                            Backed by 38 years of strength and experience, 
                            the CADD Centre Group takes pride in a rich history of 
                            empowering countless learners to achieve their aspirations.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    );
}

export default Benefits;
