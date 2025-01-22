import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        Name: '',
        Mobile: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data:', formData);
    };

    return (
        <div className="bg-navy text-white py-10 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-semibold text-aqua">
                        Taking on the Arcite-World with 95% Success
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-white mt-4">
                        Apply to explore opportunities !!!!!!!
                    </h2>
                </div>

                <div className="md:w-1/2 w-full bg-white p-8 shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full mb-4">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Name
                            </label>
                            <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                <input
                                    name="Name"
                                    placeholder="Type your name here"
                                    className="p-2 appearance-none outline-none w-full text-gray-800"
                                    value={formData.Name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-full mb-4">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Mobile
                            </label>
                            <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                <input
                                    name="Mobile"
                                    placeholder="Type Mobile no Here"
                                    className="p-2 appearance-none outline-none w-full text-gray-800"
                                    value={formData.Mobile}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-full mb-6">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Email
                            </label>
                            <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                <input
                                    name="email"
                                    placeholder="Type your Email here"
                                    className="p-2 appearance-none outline-none w-full text-gray-800"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-3 bg-aqua text-navy font-bold text-lg rounded-md shadow-md hover:bg-teal-700 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
