import image1 from '../../../assets/certificates/image1.jpeg';
import image2 from '../../../assets/certificates/image2.jpeg';
import image3 from '../../../assets/certificates/image3.jpeg';

function OurGoals() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 pt-20 px-4">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        {/* Image 1 */}
        <img
          src={image2}
          alt="Educational Empowerment"
          className="rounded-full shadow-lg w-[500px] h-[500px] border-8 border-white object-cover"
        />
        {/* Image 2 (Top Right) */}
        <img
          src={image3}
          alt="Image 2"
          className="absolute -top-5 right-6 w-[180px] h-[180px] border-8 border-white rounded-full object-cover"
        />
        {/* Image 3 (Bottom Left) */}
        <img
          src={image1}
          alt="Image 3"
          className="absolute bottom-0 right-0 w-[250px] h-[250px] border-8 border-white rounded-full object-cover"
        />
      </div>

      {/* Right Column: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
        <h2 className="text-3xl font-bold text-navy mb-4">
          Educational Empowerment
        </h2>
        <ul className="list-disc ml-5 text-gray-800 mb-8">
          <li>Breaking barriers to skill acquisition</li>
          <li>Providing accessible, affordable learning paths</li>
          <li>Bridging industry skill gaps</li>
          <li>Democratizing professional development</li>
        </ul>

        <h2 className="text-3xl font-bold text-navy mb-4">
          Entrepreneurial Enablement
        </h2>
        <ul className="list-disc ml-5 text-gray-800">
          <li>Low-investment franchise model</li>
          <li>Turnkey business opportunity</li>
          <li>Support for aspiring education entrepreneurs</li>
          <li>Pathway to create meaningful local impact</li>
        </ul>
      </div>
    </div>
  );
}

export default OurGoals;
