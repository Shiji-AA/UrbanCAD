import { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { axiosInstanceAdmin } from '../../api/axiosInstance';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons'; // 

function AdminEnquiryData() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    // Fetch enquiry data from the backend
    const fetchEnquiries = async () => {
      try {
        const response = await axiosInstanceAdmin.get('/getenquirydata');
        if (response.data) {
          console.log(response.data, 'response enquiry');
          setEnquiries(response.data);
        }
      } catch (error) {
        console.error('Error fetching enquiry data:', error);
      }
    };

    fetchEnquiries();
  }, []);

  // Handle Disqualify
  const handleDisqualify = async (id) => {
    try {
      const response = await axiosInstanceAdmin.post(`/disqualifyuser/${id}`);
      const updatedEnquiries = enquiries.map((enquiry) =>
        enquiry._id === id ? { ...enquiry, isQualified: false } : enquiry
      );
      setEnquiries(updatedEnquiries);
      toast.success(response.data.message || 'User disqualified successfully');
    } catch (error) {
      console.error('Error disqualifying user:', error);
      toast.error('Error disqualifying user');
    }
  };

  // Handle Qualify
  const handleQualify = async (id) => {
    try {
      const response = await axiosInstanceAdmin.post(`/qualifyuser/${id}`);
      const updatedEnquiries = enquiries.map((enquiry) =>
        enquiry._id === id ? { ...enquiry, isQualified: true } : enquiry
      );
      setEnquiries(updatedEnquiries);
      toast.success(response.data.message || 'User qualified successfully');
    } catch (error) {
      console.error('Error qualifying user:', error);
      toast.error('Error qualifying user');
    }
  };

  // Print Qualified Users
  const printQualifiedUsers = () => {
    const qualifiedUsers = enquiries.filter((enquiry) => enquiry.isQualified);
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Qualified Users</title></head><body>');
    printWindow.document.write('<h1>Qualified Users</h1>');
    printWindow.document.write('<table border="1" style="width:100%;border-collapse:collapse;">');
    printWindow.document.write('<thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Date</th></tr></thead><tbody>');
    qualifiedUsers.forEach((user) => {
      printWindow.document.write(
        `<tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${new Date(user.date).toLocaleDateString()}</td>
        </tr>`
      );
    });
    printWindow.document.write('</tbody></table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gray-100 py-10 px-4">
  <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg relative">
  <button
          onClick={printQualifiedUsers}
          className="bg-blue-500 text-white px-4 py-2 rounded-md absolute top-4 right-4 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faPrint} /> {/* FontAwesome Print Icon */}
          <span>Print</span>
        </button>

    <div className="p-6">
      <h1 className="text-3xl font-semibold text-navy mb-6">Enquiry List</h1>

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
            <tr
              key={enquiry._id}
              className={`border ${enquiry.isQualified ? 'bg-green-400' : 'bg-white'}`}
            >
              <td className="px-4 py-2">{enquiry.name}</td>
              <td className="px-4 py-2">{enquiry.email}</td>
              <td className="px-4 py-2">{enquiry.phone}</td>
              <td className="px-4 py-2">{new Date(enquiry.date).toLocaleDateString()}</td>
              <td className="p-3">
                {enquiry?.isQualified ? (
                  <button
                    onClick={() => handleDisqualify(enquiry._id)}
                    className="bg-red-500 text-white rounded-md px-4 py-2"
                  >
                    Disqualify
                  </button>
                ) : (
                  <button
                    onClick={() => handleQualify(enquiry._id)}
                    className="bg-green-600 text-white rounded-md px-4 py-2"
                  >
                    Qualify
                  </button>
                )}
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
