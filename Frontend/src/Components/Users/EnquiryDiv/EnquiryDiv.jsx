function EnquiryDiv({ bgColor = 'bg-navy', textColor = 'text-white', buttonBgColor = 'bg-aqua', buttonTextColor = 'text-navy', buttonHoverBgColor = 'hover:bg-yellow-500', buttonHoverTextColor = 'hover:text-white', justifyContent = 'justify-between' }) {
    return (
        <>
            <div className={`${bgColor} ${textColor} py-10 px-4 flex ${justifyContent} items-center`}>
                <div>
                    <h1 className="text-3xl font-semibold">Ready to make an Impact?</h1>
                    <p className="text-lg mt-2">Join the CADD Centre family and lead the way in skill training.</p>
                </div>
                <button className={`${buttonBgColor} ${buttonTextColor} py-2 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out ${buttonHoverBgColor} ${buttonHoverTextColor}`}>
                    Enquire Now
                </button>
            </div>
        </>
    )
}

export default EnquiryDiv;
