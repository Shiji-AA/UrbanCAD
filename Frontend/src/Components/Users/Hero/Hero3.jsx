import cat1 from '../../../assets/electrical/cat1.jpg'

function Hero3() {
  return (
    <>
      <section className="grid grid-cols-1 gap-0 bg-gray-200 md:grid-cols h-100">
        <div>
          <img
            src={cat1}
            alt="tutor"
            className="object-cover w-full h-[400px] md:h-[400px] bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Hero3;
