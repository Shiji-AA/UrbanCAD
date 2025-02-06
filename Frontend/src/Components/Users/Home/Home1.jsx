import heroImage from '../../../assets/certificates/heroImage.jpg'
import heroImage1 from '../../../assets/certificates/heroImage2.jpg'
function Home1() {
  return (
    <div className="relative w-full h-[500px] sm:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-75"></div> 
      
      <div className="container mx-auto flex items-center justify-between px-6 h-full relative z-12">
     
        <div className="w-full sm:w-1/2 text-white">

  <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-aqua text-transparent bg-clip-text transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-aqua hover:to-white transform transition duration-500 ease-in-out hover:scale-105">
    {/* Start Your Journey with UrbanCAD */}
    Empower Your Future with UrbanCAD
  </h1>


  <p className="text-lg mb-6 bg-white text-transparent bg-clip-text transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-500">
    {/* Join us today and take the first step towards a successful franchise partnership! */}
    Take the leap with us, your journey to success starts here!
  </p>

<a
 href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
 target="_blank"
 rel="noopener noreferrer"
>
<button className="bg-gradient-to-r from-gray-600 to-aqua text-white py-2 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out hover:from-aqua hover:to-navy hover:scale-105">
    Get Started
  </button>
</a>
 
</div>


        {/* Second part - Image */}
        <div className="w-1/2 hidden sm:block">
          <img src={heroImage1} alt="Franchise Hero" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default Home1;
