import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        <div className="mx-auto max-w-6xl p-12">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div className="md:text-4xl text-xl font-black uppercase">Awesome tool for your future team</div>
                    <div className="text-xl mt-4">Develop your workforce and make it a selling machine</div>
                </div>
                <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
                    <div className="shadow-md flex-auto max-w-sm p-10 pb-20">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full">
                                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                    <span className="text-red-400 mr-1">*</span> First Name
                                </div>
                                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                    <input
                                        name="firstName"
                                        placeholder="John"
                                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                    <span className="text-red-400 mr-1">*</span> Last Name
                                </div>
                                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                    <input
                                        name="lastName"
                                        placeholder="Doe"
                                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                    <span className="text-red-400 mr-1">*</span> Email
                                </div>
                                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                                    <input
                                        name="email"
                                        placeholder="john@doe.com"
                                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 relative">
                                <button
                                    type="submit"
                                    className="shadow-md font-medium py-2 px-4 text-green-100 cursor-pointer bg-teal-600 rounded text-lg tr-mt absolute text-center w-full"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
