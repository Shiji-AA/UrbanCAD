function WhoweAre() {
    return (
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Title */}
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
            The Heart of Our Journey
          </h1>
  
          {/* Vision Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Vision</h2>
            <p className="text-gray-700 text-lg">
              ‘To be a leading catalyst in transforming lives by making high-quality education and skill development accessible, affordable, and impactful for individuals in every corner of the world.’
            </p>
          </div>
  
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Mission</h2>
            <p className="text-gray-700 text-lg">
              ‘To expand globally through a network of franchises, delivering affordable, high-quality education and skill development tailored to empower individuals locally, fostering lifelong learning and sustainable growth.’
            </p>
          </div>
  
          {/* Empowerment Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Educational Empowerment */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-xl p-6 hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Educational Empowerment</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Breaking barriers to skill acquisition
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Providing accessible, affordable learning paths
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Bridging industry skill gaps
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Democratizing professional development
                </li>
              </ul>
            </div>
  
            {/* Entrepreneurial Enablement */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Entrepreneurial Enablement</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Low-investment franchise model
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Turnkey business opportunity
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Support for aspiring education entrepreneurs
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">▶</span> Pathway to create meaningful local impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhoweAre;
  