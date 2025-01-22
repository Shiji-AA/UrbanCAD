function RulesRegulation() {
  return (
    <>
      {/* Background Section with Opacity on Image */}
      <div
        className="relative w-full bg-cover bg-center py-22 pt-10"
        style={{
            
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        {/* Background Image Opacity using Pseudo-element */}
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Only the background image will have opacity */}
        {/* Heading Inside the Background */}
        <h1 className="text-4xl font-bold text-center text-white mb-8 relative z-10">
          Join the CADD Centre Franchise League Today
        </h1>
        {/* Parent Div for Two Columns */}
        <div className="container mx-auto px-12 py-10 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-12 space-y-6 md:space-y-0">
            {/* Left Div */}
            <div className="bg-aqua rounded-lg p-6 md:w-1/2 shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                {" "}
                What do you get started?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  1200 - 1500 sq.ft. of commercial property.
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Expect a strong return on investment, between 50-70%, <br />
                  depending on your city and operational  on your city and operational efficiency.
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Recoup your investment within 12-18 months.
                </li>
              </ul>
            </div>

            {/* Right Div */}
            <div className=" rounded-lg pt-2 md:w-1/2 shadow-md">
              <h2 className="text-aqua text-3xl font-semibold mb-4">
                {" "}
                Franchise Training
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">➜</span>
                  <h3 className="text-lg font-semibold">
                    Kickstart with a 3-Day Induction:
                  </h3>
                </li>
                <li className="ml-8 text-sm mt-1 text-aqua">
                  Join us in Chennai, India, for an
                   immersive franchise training  <br />experience.
                </li>

                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">➜</span>
                  <h3 className="text-lg font-semibold">
                    Kickstart with a 3-Day Induction:
                  </h3>
                </li>
                <li className="ml-8 text-sm mt-1 text-aqua">
                  Join us in Chennai, India, for an
                  immersive franchise training  <br />experience.
                </li>

                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">➜</span>
                  <h3 className="text-lg font-semibold">
                    Kickstart with a 3-Day Induction:
                  </h3>
                </li>
                <li className="ml-8 text-sm mt-1 text-aqua">
                  Join us in Chennai, India, for an
                   immersive franchise training <br/>experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RulesRegulation;
