import { FaCheckCircle } from "react-icons/fa"; // Importing checkmark icon
import image4 from "../../../assets/certificates/image16.jpeg";
import ani2 from "../../../assets/certificates/ani2.png";
import { useEffect, useState } from "react";

function RulesRegulation() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
    }, 50); // Adjust speed by changing the interval time
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div data-aos="fade-up" className="flex flex-wrap w-full p-20 relative">
      {/* First Div: Image */}
      <div className="w-full md:w-1/2 pl-10 mb-8 md:mb-0 relative">
        <img
          data-aos="fade-right"
          src={ani2}
          alt="animation"
          className="absolute -top-6 left-0 w-34 h-34 animate-bounce"
        />
        <img
          src={image4}
          alt="Certificate Image"
          className="w-full h-auto rounded-2xl shadow-md relative z-10"
        />

        {/* Years of Excellence Badge */}
       
      {/* Years of Excellence Badge */}
<div className="absolute bottom-4 left-2 md:bottom-8 md:-left-4 border-l-4 border-purple-400 text-white rounded-lg bg-navy shadow-lg animate-bounce z-20 w-fit px-4 py-4 md:px-6 md:py-5">
  <div className="flex items-center justify-center space-x-2">
    <div className="text-white text-xl md:text-3xl font-bold">{count}+</div>
    <p className="text-xs md:text-sm lg:text-base font-medium">Years of Excellence</p>
  </div>
</div>




      </div>

      {/* Second Div: Requirements and Support */}
      <div className="w-full md:w-1/2 p-4">
        <div className="rounded-lg p-6">
          <h6 className="font-heading text-xl font-semibold text-aqua mb-4">
            UNLOCK THE POTENTIAL OF URBANCAD FRANCHISE
          </h6>
          <h2 className="font-heading text-4xl font-semibold text-navy mb-6">
            Step into success with an UrbanCAD franchise today
          </h2>
          <p className="font-body text-base text-gray-600 mb-6 leading-relaxed text-lg">
            Joining the UrbanCAD franchise offers a unique opportunity in a
            growing industry, with proven business models and strong support. As
            a franchisee, you will receive training, marketing, and operational
            assistance to ensure success, along with the resources to grow and
            maximize your returns.
          </p>

          {/* List of Requirements */}
          <div className="space-y-8">
            {["Need 600-800 sq ft of commercial property for operations",
              "Ongoing training, marketing, and sales support provided by the central team",
              "Potential Return On Investment between 70-90%, depending on operational efficiency",
              "Option for a joint venture after completing one year of operation",
              "Investment recovery possible within 12-18 months",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 border-b border-gray-300"
              >
                <div className="flex items-center justify-center rounded-full border-2 border-aqua">
                  <FaCheckCircle className="text-navy text-4xl" />
                </div>
                <h2 className="font-body font-bold text-lg text-gray-800">
                  {text}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesRegulation;