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
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 text-center mb-8 relative z-10">
  Step into success with an UrbanCAD franchise today
</h1>

        {/* Parent Div for Two Columns */}
        <div className="container mx-auto px-12 py-10 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-12 space-y-8 md:space-y-0">
            {/* Left Div */}
            <div className="bg-aqua rounded-lg p-6 md:w-1/2 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4">
                {" "}
                Requirement and support for UrbanCAD
              </h2>
              <ul className="space-y-2 text-lg">
              <li className="flex items-start">
  <span className="text-yellow-500 mr-2 ">▶</span>
  600-800 sq ft of commercial property
</li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Ongoing training, marketing and sales support from Central
                  Team
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Return of Investment between 70 to 90% depending on
                  operational efficiency
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Joint Venture Opportunity after completing one year
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Recover your investments in 12 to 18 months
                </li>
              </ul>
            </div>

            {/* Right Div */}
            <div className=" rounded-lg pt-2 md:w-1/2 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              <h2 className="text-aqua text-3xl font-semibold mb-4">
                {" "}
                Support & Resources
              </h2>

              <ul className="space-y-2 text-lg">
                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Comprehensive Franchise Training
                </li>
                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Branding and Design
                </li>
                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Technological Infrastructure
                </li>
                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Ongoing Educational Content Updates
                </li>

                <li className="flex items-start text-aqua">
                  <span className="text-yellow-500 mr-2">▶</span>
                  Technical and Administrative Support
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
