import { Link } from "react-router-dom";
import { Eye, Calendar } from "lucide-react"; // Importing icons

// Static imports for images
import civil1 from "../../../assets/civil/civil11.jpg";
import civil2 from "../../../assets/civil/civil22.jpg";
import civil3 from "../../../assets/civil/civil33.jpg";
import civil4 from "../../../assets/civil/civil44.jpg";
import civil5 from "../../../assets/civil/civil55.jpg";
import civil6 from "../../../assets/civil/civil66.jpg";
import civil7 from "../../../assets/civil/civil77.jpg";
import civil8 from "../../../assets/civil/civil88.jpg";
import civil9 from "../../../assets/civil/civil99.jpg";

import Hero2 from "../Hero/Hero2civil";
import Footer from "../Footer/Footer1";
import Navbar from "../Navbar/Navbar";

// Define the courseDetails as an array of objects with correct fields
const courseDetails = [
  {
    _id: 1,
    department: "Civil Engineering",
    courseName: "Certified Construction Site Engineer",
    mode: "Online/Offline",
    duration: "6 Months",
    photo: civil1,
  },
  {
    _id: 2,
    department: "Civil Engineering",
    courseName: "Construction Technology",
    mode: "Online/Offline",
    duration: "6 Months",
    photo: civil2,
  },
  {
    _id: 3,
    department: "Civil Engineering",
    courseName: "QA/QC in Civil Engineering + NDT",
    mode: "Online/Offline",
    duration: "2 Months",
    photo: civil3,
  },
  {
    _id: 4,
    department: "Civil Engineering",
    courseName: "Professional Course on Quantity Surveying and Estimation",
    mode: "Online/Offline",
    duration: "2 Months",
    photo: civil4,
  },
  {
    _id: 5,
    department: "Civil Engineering",
    courseName: "Architectural BIM",
    mode: "Online/Offline",
    duration: "6 Months",
    photo: civil5,
  },
  {
    _id: 6,
    department: "Civil Engineering",
    courseName: "Structural BIM",
    mode: "Online/Offline",
    duration: "3 Months",
    photo: civil6,
  },
  {
    _id: 7,
    department: "Civil Engineering",
    courseName: "Professional BIM",
    mode: "Online/Offline",
    duration: "1 Year",
    photo: civil7,
  },
  {
    _id: 8,
    department: "Civil Engineering",
    courseName: "Certificate Course on Project Management for Engineers",
    mode: "Online/Offline",
    duration: "6 Months",
    photo: civil8,
  },
  {
    _id: 9,
    department: "Civil Engineering",
    courseName: "Certificate Course on Public Infrastructure Design and Management",
    mode: "Online/Offline",
    duration: "6 Months",
    photo: civil9,
  },
];

function Civil() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <div className="bg-white py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full">
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courseDetails.map((course) => (
              <div
                key={course._id}
                className="bg-gray-100 overflow-hidden p-6 "
              >
                <Link to={""}>
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      src={course.photo}
                      alt="Course Thumbnail"
                    />
                  </div>
                </Link>
                <div className=" font-body text-start mt-4">
                  <div className="bg-gray-200 text-aqua font-medium py-1 px-4 inline-block rounded-md">
                    {course.department}
                  </div>
                  <h4 className="text-lg font-bold text-aqua mt-2">
                    {course.courseName}
                  </h4>

                  {/* Mode and Duration Section */}

                  <div className=" font-body flex justify-start gap-0 mt-4 ">
                    <p className="border border-gray-300  rounded-3xl px-10 py-3 text-sm bg-gray-100 shadow-sm flex flex-col">
                      {/* Icon and Label in the same line */}
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">Mode:</span>
                      </div>

                      {/* Course Mode in the next line */}
                      <span>{course.mode || "Not available"}</span>
                    </p>
                    <p className="border border-gray-300 rounded-3xl px-6 py-3 text-sm bg-gray-100 shadow-sm flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <span className="font-medium"></span>
                      <span>{course.duration || "Not available"}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Civil;
