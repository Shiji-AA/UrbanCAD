import autodesk from '../../../assets/certificates/autodesk.png';
import bentley from '../../../assets/certificates/bentley.png';
import sketchup from '../../../assets/certificates/sketchup.png';
import lightpink from '../../../assets/certificates/lightpinkbg1.avif';
import '../../../index.css';

function Accreditations() {
  return (
    <div 
      data-aos="fade-up"
      className="bg-gradient-to-r from-red-100 via-gray-100 to-gray-200 p-4 md:p-16 text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${lightpink})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Heading Section */}
      <div className="w-full text-left md:text-center">
  <h3 className="font-heading text-lg md:text-2xl font-semibold mb-4 text-aqua">
    YOUR TRUSTED SOURCE FOR EDUCATION
  </h3>
  <h1 className="font-body text-navy text-2xl md:text-4xl font-bold mb-8">
    Authorized Training From <span className="text-aqua">Industry Leaders</span>
  </h1>
</div>

      {/* Sliding Image Container */}
      <div className="font-body overflow-hidden w-full">
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
  <button className="font-body bg-gradient-to-r from-aqua to-navy text-white py-2 px-6 md:py-2.5 md:px-10 rounded-full hover:from-navy hover:to-aqua transition duration-300 mt-8 text-lg md:text-2xl">
    Contact Us
  </button>
</a>

    </div>
  );
}

export default Accreditations;
