function EnquiryDiv({ bgColor = 'bg-navy', textColor = 'text-white', buttonBgColor = 'bg-aqua', buttonTextColor = 'text-navy', buttonHoverBgColor = 'hover:bg-yellow-500', buttonHoverTextColor = 'hover:text-white', justifyContent = 'justify-between' }) {
    return (
        <>
            <div className={`${bgColor} ${textColor} py-10 px-4 flex ${justifyContent} items-center`}>
                <div>
                    <h1 className="text-3xl font-semibold">Let's make a Difference?</h1>
                   
                </div>
                <a
                  href="https://wa.me/918129244883?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer">
                      <button className={`${buttonBgColor} ${buttonTextColor} py-2 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out ${buttonHoverBgColor} ${buttonHoverTextColor}`}>
                    Enquire Now
                </button>
                </a>
              
            </div>
        </>
    )
}

export default EnquiryDiv;
