import image1 from '../../../assets/certificates/image25.jpeg';//girls
import image2 from '../../../assets/certificates/image24.jpeg';//Big image
import image3 from '../../../assets/certificates/image21.jpeg';

function OurGoals() {
  return (
    <div data-aos="fade-up" className="flex flex-col md:flex-row w-full bg-gray-100 pt-20 pb-20 px-0 overflow-hidden">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
  {/* Main Image (Big Circle) */}
  <img
    src={image2}
    alt="Educational Empowerment"
    className="rounded-full shadow-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] border-8 border-white object-cover"
  />

  {/* Top Right Small Image */}
  <img
    src={image3}
    alt="Image 2"
    className="absolute top-0 right-12 sm:right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-[180px] md:h-[180px] border-8 border-white rounded-full object-cover"
  />

  {/* Bottom Left Small Image */}
  <img
    src={image1}
    alt="Image 3"
    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-[250px] md:h-[250px] border-8 border-white rounded-full object-cover"
  />
</div>


      {/* Right Column: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 pl-20">
        <h2 className="font-heading text-3xl font-bold text-aqua mb-4">
          Educational Empowerment
        </h2>
        <ul className="font-body list-disc ml-5 text-gray-800 text-lg mb-8">
          <li>Breaking barriers to skill acquisition</li><hr/>
          <li>Providing accessible, affordable learning paths</li><hr/>
          <li>Bridging industry skill gaps</li><hr/>
          <li>Democratizing professional development</li><hr/>
        </ul>

        <h2 className="font-heading text-3xl font-bold text-aqua mb-4">
          Entrepreneurial Enablement
        </h2>
        <ul className="font-body list-disc ml-5 text-gray-800 text-lg">
          <li>Low-investment franchise model</li><hr/>
          <li>Turnkey business opportunity</li><hr/>
          <li>Support for aspiring education entrepreneurs</li><hr/>
          <li>Pathway to create meaningful local impact</li><hr/>
        </ul>
      </div>
    </div>
  );
}

export default OurGoals;
