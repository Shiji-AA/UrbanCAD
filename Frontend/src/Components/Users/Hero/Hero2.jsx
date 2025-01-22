import cat2 from '../../../assets/civil/cat2.jpg';

function Hero2() {
  return (
    <>
      <section className="grid grid-cols-1 gap-0 bg-gray-200 md:grid-cols h-100">
        <div>
          <img
            src={cat2}
            alt="tutor"
            className="object-cover w-full h-[400px] md:h-[400px] bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Hero2;
