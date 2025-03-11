import image1 from '../../../assets/certificates/image25.jpeg'; // TOP RIGHT
import image2 from '../../../assets/certificates/image24.jpg'; // center BIG
import image3 from '../../../assets/certificates/image21.jpg'; // Bottom Right Image

function OurGoals() {
  return (
    <div data-aos="fade-up" className="flex flex-col md:flex-row w-full bg-white pt-20 pb-20 px-0 overflow-hidden">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        {/* Main Image (Big Circle) */}
        <img
          src={image2}
          alt="Educational Empowerment"
          className="rounded-full shadow-lg w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] border-8 border-gray-700 object-cover"
        />

        {/* Top Right Small Image (Overlap on Big Image) */}
        <img
          src={image1}
          alt="Image 2"
          className="absolute -top-5 right-5 sm:right-10 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] border-8 border-gray-600 rounded-full object-cover"
        />

        {/* Bottom Right Small Image (Overlap on Big Image) */}
        <img
          src={image3}
          alt="Image 3"
          className="absolute bottom-0 right-0 sm:bottom-4 sm:right-6 w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] border-8 border-gray-500 rounded-full object-cover"
        />
      </div>
{/* Right Column: Text Content */}
<div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-4 md:pl-20 pt-5">
  <h2 className="font-body text-3xl font-bold text-navy mb-4 hover:text-aqua">
    Educational Empowerment
  </h2>
  <ul className="font-heading list-disc ml-5 text-gray-800 text-lg mb-8">
    <li>Breaking barriers to skill acquisition</li>
    <hr />
    <li>Providing accessible, affordable learning paths</li>
    <hr />
    <li>Bridging industry skill gaps</li>
    <hr />
    <li>Democratizing professional development</li>
    <hr />
  </ul>

  <h2 className="font-body text-3xl font-bold text-navy mb-4 hover:text-aqua">
    Entrepreneurial Enablement
  </h2>
  <ul className="font-heading list-disc ml-5 text-gray-800 text-lg">
    <li>Low-investment franchise model</li>
    <hr />
    <li>Turnkey business opportunity</li>
    <hr />
    <li>Support for aspiring education entrepreneurs</li>
    <hr />
    <li>Pathway to create meaningful local impact</li>
    <hr />
  </ul>
</div>

    </div>
  );
}

export default OurGoals;
