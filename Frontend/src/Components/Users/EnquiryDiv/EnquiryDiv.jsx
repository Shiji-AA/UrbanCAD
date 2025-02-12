function EnquiryDiv({ 
    bgColor = 'bg-navy', 
    textColor = 'text-white', 
    buttonBgColor = 'bg-aqua', 
    buttonTextColor = 'text-navy', 
    buttonHoverBgColor = 'hover:bg-yellow-500', 
    buttonHoverTextColor = 'hover:text-white', 
    justifyContent = 'justify-between' 
}) {
    return (
        <>
            <div className="border border-gray-100">
                <div className={`font-body ${bgColor} ${textColor} py-10 px-4 flex ${justifyContent} items-center`}>
                    <div>
                        <h1 className="text-2xl font-semibold">Let's make a Difference?</h1>
                    </div>
                    <a
                        href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button 
                            className={`${buttonBgColor} ${buttonTextColor} py-1 px-4 sm:py-3 sm:px-6 font-semibold transition-all duration-300 ease-in-out ${buttonHoverBgColor} ${buttonHoverTextColor}`}
                        > Enquire Now
                        </button>
                    </a>
                </div>    
            </div>
        </>
    );
}

export default EnquiryDiv;
