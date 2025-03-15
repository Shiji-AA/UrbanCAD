import bgImage from "../../../assets/certificates/bgimage.jpg";

function EnquiryDiv() {
  return (
    <section
      className="w-full min-h-[250px] sm:min-h-[250px] md:min-h-[450px] flex items-center justify-center bg-cover bg-center relative p-6 sm:p-8 md:p-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay with Opacity */}
      <div className="absolute inset-0 bg-[#162726] opacity-90"></div>

      {/* Content Box - Align Left on Mobile, Center on Larger Screens */}
      <div className="w-full relative max-w-3xl p-6 sm:p-8 md:p-10 text-left sm:text-center flex flex-col items-start sm:items-center">
        <h1 className="font-syn text-2xl sm:text-4xl md:text-5xl font-normal text-white leading-tight">
          Let us make a difference 
        </h1>

        <p className="font-syn font-normal text-white leading-relaxed mt-4 text-base sm:text-lg md:text-xl max-w-3xl">
          Partner with Urbancad and redefine spaces with innovation, quality,
          and expertise. Expand your vision, grow your business, and be a part
          of our trusted network.
        </p>

        <a
          href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Button */}
          <div className="mt-6">
            <button className="font-syn px-4 py-2 md:px-6 sm:py-4 bg-teal-600 text-white text-lg sm:text-xl font-normal hover:bg-teal-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}

export default EnquiryDiv;
