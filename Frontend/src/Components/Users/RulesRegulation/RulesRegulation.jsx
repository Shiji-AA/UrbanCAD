
import { FaCheckCircle } from "react-icons/fa";  // Importing checkmark icon
import image4 from "../../../assets/certificates/image4.jpeg";

function RulesRegulation() {
  return (
    <div data-aos="fade-up"
     className="flex flex-wrap w-full p-20">
      {/* First Div: Image */}
      <div className="w-full md:w-1/2 pl-10 mb-8 md:mb-0">
        <img
          src={image4}
          alt="Certificate Image"
          className="w-full h-auto rounded-2xl shadow-md"  // Adjust image size
        />
      </div>

      {/* Second Div: Requirements and Support */}
      <div className="w-full md:w-1/2 p-4">
        <div className="rounded-lg p-6 ">
          <h6 className="font-heading text-xl font-semibold  text-aqua mb-4">
          UNLOCK THE POTENTIAL OF URBANCAD FRANCHISE
          </h6>
          <h2 className="font-heading text-4xl font-semibold text-navy mb-6">
          Step into success with an UrbanCAD franchise today
          </h2>
          <p className="font-body text-base text-gray-600 mb-6 leading-relaxed text-lg">
          Joining the UrbanCAD franchise offers a unique opportunity in a growing industry, with proven business models and strong support. As a franchisee, you'll receive training, marketing, and operational assistance to ensure success, along with the resources to grow and maximize your returns.
</p>

          {/* List of Requirements */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 border-b border-gray-300">
              <div className="flex items-center justify-center  rounded-full border-2 border-aqua">
                <FaCheckCircle className="text-navy text-4xl" />
              </div>
              <h2 className="font-body font-bold text-lg text-gray-800">
                Need 600-800 sq ft of commercial property for operations
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 border-b border-gray-300">
              <div className="flex items-center justify-center rounded-full border-2 border-aqua">
                <FaCheckCircle className="text-navy text-4xl" />
              </div>
              <h2 className="font-body font-bold text-lg text-gray-800">
                Ongoing training, marketing, and sales support provided by the central team
              </h2>
            </div>
            <div className="flex items-start space-x-4 border-b border-gray-300">
              <div className="flex items-center justify-center  rounded-full border-2 border-aqua">
                <FaCheckCircle className="text-navy text-4xl" />
              </div>
              <h2 className=" font-bold font-body text-lg text-gray-800">
                Potential Return On Investment between 70-90%, depending on operational efficiency
              </h2>
            </div>
            <div className="flex items-start space-x-4 border-b border-gray-300">
              <div className="flex items-center justify-center  rounded-full border-2 border-aqua">
                <FaCheckCircle className="text-navy text-4xl" />
              </div>
              <h2 className=" font-bold font-body text-lg text-gray-800">
                Option for a joint venture after completing one year of operation
              </h2>
            </div>
            <div className="flex items-start space-x-4 border-b border-gray-300">
              <div className="flex items-center justify-center rounded-full border-2 border-aqua">
                <FaCheckCircle className="text-navy text-4xl" />
              </div>
              <h2 className=" font-bold font-body text-lg text-gray-800">
                Investment recovery possible within 12-18 months
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesRegulation;
