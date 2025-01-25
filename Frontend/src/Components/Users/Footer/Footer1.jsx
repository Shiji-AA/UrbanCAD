

import logoArcite2 from "../../../assets/logoArcite2.png";



function Footer1() {
    return (
        <>
            <footer className=" text-white py-8">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">

                    {/* About Us Section */}
                    <div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#about" className="text-sm text-gray-900 hover:text-white">About Us</a></li>
                            <li><a href="#services" className="text-sm text-gray-900 hover:text-white">Services</a></li>
                            <li><a href="#contact" className="text-sm text-gray-900 hover:text-white">Contact</a></li>
                            <li><a href="#faq" className="text-sm text-gray-900 hover:text-white">FAQs</a></li>
                        </ul>
                    </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#about" className="text-sm text-gray-900 hover:text-white">About Us</a></li>
                            <li><a href="#services" className="text-sm text-gray-900 hover:text-white">Services</a></li>
                            <li><a href="#contact" className="text-sm text-gray-900 hover:text-white">Contact</a></li>
                            <li><a href="#faq" className="text-sm text-gray-900 hover:text-white">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm text-gray-900">
                            📍 Location: XYZ Street, City <br />
                            📞 Phone: <a href="tel:+1234567890" className="text-gray-900 hover:text-white">+123 456 7890</a><br />
                            ✉️ Email: <a href="mailto:info@example.com" className="text-gray-900 hover:text-white">info@example.com</a>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-900 my-6"></div>

                {/* Footer Bottom */}
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-900">
                    <p>&copy; 2025 An ARCITE Innovation.</p>
                      <img src={logoArcite2} className="h-7 w-15 mr-3" alt="ARCITE" />
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer1;
