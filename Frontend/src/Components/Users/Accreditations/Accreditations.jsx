import autodesk from '../../../assets/certificates/autodesk.png';
import bentley from '../../../assets/certificates/bentley.png';
import sketchup from '../../../assets/certificates/sketchup.png';
import '../../../index.css';

function Accreditations() {
  return (
    <div 
      data-aos="fade-up"
      className="bg-gray-100 py-18 px-4 md:py-28 md:px-14 text-white flex flex-col justify-center items-center min-h-[500px]"
    >
      {/* Heading Section */}
      <div className="w-full text-left md:text-center mb-10">
        <h3 className="font-syn text-lg md:text-2xl font-semibold mb-4 text-aqua">
          YOUR TRUSTED SOURCE FOR EDUCATION
        </h3>
        <h1 className="font-syn text-navy text-2xl md:text-4xl font-bold mb-16">
          Authorized Training From <span className="text-aqua">Industry Leaders</span>
        </h1>
      </div>

      {/* Sliding Image Container */}
      <div className="font-syn overflow-hidden w-full">
        <div className="flex gap-8 animate-slide">
          {[autodesk, bentley, sketchup, autodesk, bentley, sketchup, autodesk, bentley, sketchup, autodesk, bentley, sketchup].map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt="Certification Logo"
              className="h-16 md:h-24 object-contain"
            />
          ))}
        </div>
      </div>

      <a 
        href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services." 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <button className="font-syn border-4 border-transparent  bg-teal-600 text-white px-4 py-2 md:px-6 md:py-3  hover:from-navy hover:to-aqua transition duration-300 mt-16 text-lg md:text-xl">
          Contact Us
        </button>
      </a>

    </div>
  );
}


export default Accreditations;
