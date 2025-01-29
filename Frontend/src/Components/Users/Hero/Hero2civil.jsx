import cat2 from '../../../assets/civil/civilhero1.jpg';

function Hero2civil() {
  return (
    <>
      <section className="relative grid grid-cols-1 gap-0 bg-black md:grid-cols h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: `url(${cat2})` }}></div>

        {/* Content Over Image */}
        <div className="font-body relative z-10 flex flex-col items-center justify-center text-center text-white space-y-4 h-full">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
            Civil Engineering
          </h1>

          {/* Subheading */}
          <h4 className="font-body text-lg md:text-2xl font-medium drop-shadow-md">
            Home <span>&gt;</span> Department
          </h4>
        </div>
      </section>
    </>
  );
}

export default Hero2civil;
