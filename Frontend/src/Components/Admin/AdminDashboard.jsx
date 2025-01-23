import Footer from "../Users/Footer/Footer";
import AdminNavbar from "./AdminNavbar";
import { FaBriefcase, FaUserTie, FaUserFriends, FaCheckCircle } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      
      {/* Main Content Section */}
      <div className="bg-gray-100 p-10 flex-grow">
        {/* Dashboard Header */}
        <h1 className="text-3xl font-bold text-center text-navy mb-10">
          Admin Dashboard
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Jobs Card */}
          <div className="bg-gradient-to-r from-aqua to-blue-400 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy">Total Jobs</h2>
                <p className="text-4xl font-semibold text-white">1,000</p>
              </div>
              <FaBriefcase className="text-6xl text-white" />
            </div>
          </div>

          {/* Total Employers Card */}
          <div className="bg-gradient-to-r from-blue-500 to-aqua p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy">Total Employers</h2>
                <p className="text-4xl font-semibold text-white">1,000</p>
              </div>
              <FaUserTie className="text-6xl text-white" />
            </div>
          </div>

          {/* Total Applicants Card */}
          <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy">Total Applicants</h2>
                <p className="text-4xl font-semibold text-white">1,000</p>
              </div>
              <FaUserFriends className="text-6xl text-white" />
            </div>
          </div>

          {/* Total Hires Card */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy">Total Hires</h2>
                <p className="text-4xl font-semibold text-white">1,000</p>
              </div>
              <FaCheckCircle className="text-6xl text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default AdminDashboard;
