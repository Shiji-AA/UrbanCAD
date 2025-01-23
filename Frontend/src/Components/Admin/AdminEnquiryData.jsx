import { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { axiosInstanceAdmin } from '../../api/axiosInstance';

function AdminEnquiryData() {
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        // Fetch enquiry data from the backend
        const fetchEnquiries = async () => {
            try {
                const response = await axiosInstanceAdmin.get('/enquirydata');
                if(response.data)
                    console.log(response.data,"response enquiry")
                setEnquiries(response.data);
            } catch (error) {
                console.error('Error fetching enquiry data:', error);
            }
        };

        fetchEnquiries();
    }, []);

    return (
        <>
        <AdminNavbar/>
         <div className="bg-gray-100 py-10 px-4">
            <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg">
                <div className="p-6">
                    <h1 className="text-3xl font-semibold text-navy mb-6 ">Enquiry List</h1>
                    

                    {/* Table for displaying enquiries */}
                    <table className="min-w-full table-auto">
                        <thead className="text-left">
                            <tr>
                                <th className="px-4 py-2 bg-aqua text-white font-large">Name</th>
                                <th className="px-4 py-2 bg-aqua text-white font-large">Email</th>
                                <th className="px-4 py-2 bg-aqua text-white font-large">Phone</th>
                                <th className="px-4 py-2 bg-aqua text-white font-large">Date</th>
                                <th className="px-4 py-2 bg-aqua text-white font-large">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiries.map((enquiry) => (
                                <tr key={enquiry._id} className="border-b">
                                    <td className="px-4 py-2">{enquiry.name}</td>
                                    <td className="px-4 py-2">{enquiry.email}</td>
                                    <td className="px-4 py-2">{enquiry.phone}</td>
                                    <td className="px-4 py-2">{new Date(enquiry.date).toLocaleDateString()}</td>
                                    <td className="px-4 py-2">
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 hover:text-blue-800">View</button>
                                            <button className="text-yellow-600 hover:text-yellow-800">Edit</button>
                                            <button className="text-red-600 hover:text-red-800">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
       
    );
}

export default AdminEnquiryData;
