function Hero1() {
  return (
    <>
      <header>
        {/* Navigation Bar */}
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Links */}

            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "32rem",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                Build Your new{" "}
                <span className="underline text-blue-400">Saas</span>
              </h1>
              <a
                href="https://wa.me/918129244883?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero1;
