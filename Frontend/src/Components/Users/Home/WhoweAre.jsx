import cat5 from '../../../assets/civil/cat5.jpg';

function WhoWeAre() {
    return (
        <>
            <div className="dark:bg-gradient-to-r from-aqua via-navy to-black">
                <div className="container mx-auto py-6 md:py-8 lg:py-16">
                    <div className="flex flex-col lg:flex-row justify-center items-center mx-4 space-y-6 lg:space-y-0 lg:space-x-12">
                        
                        {/* Text Section */}
                        <div className="lg:w-6/12 flex">
                            <div className="lg:text-left">
                            <h1 className="text-aqua dark:text-white text-xl md:text-2xl xl:text-3xl font-semibold leading-tight">
            World Internship and Research
            <br />
            <span className="text-navy">Programme Internship and Research</span>
          </h1>
                                <p className="dark:text-gray-300 mt-4 lg:mt-5 text-base md:text-lg text-gray-600">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution. It is a long established 
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-6/12 w-full relative">
                            {/* Heading Above the Image */}
                            <div className="text-center mb-4">
                                <h2 className="text-navy text-2xl font-bold p-2 rounded-lg">
                                    Our Mission & Vision
                                </h2>
                            </div>

                            {/* Image Section with Jumping Effect and Reduced Size */}
                            <img 
                                src={cat5}
                                alt="hero" 
                                className="w-120 h-80 object-cover rounded-lg shadow-lg mx-auto animate__animated animate__bounce" 
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default WhoWeAre;
