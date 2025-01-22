import { Link } from "react-router-dom";

// Static imports for images
import ccseImage from "../../../assets/civil/civil1.jpg";
import constructionTechnologyImage from "../../../assets/civil/civil2.jpg";
import architecturalBIMImage from "../../../assets/civil/civil3.jpg";

import Footer from "../Footer/Footer";
import Hero3 from "../Hero/Hero3";
import Navbar from "../Navbar/Navbar";

// Define the courseDetails as an array of objects with correct fields
const courseDetails = [
  {
    _id: 1,
    department: "Civil Engineering",
    courseName: "CCSE",
    mode: "Online/Offline",
    duration: "6 months",
    photo: ccseImage,
  },
  {
    _id: 2,
    department: "Civil Engineering",
    courseName: "Construction Technology",
    mode: "Online/Offline",
    duration: "6 months",
    photo: constructionTechnologyImage,
  },
  {
    _id: 3,
    department: "Civil Engineering",
    courseName: "Architectural BIM",
    mode: "Online/Offline",
    duration: "6 months",
    photo: architecturalBIMImage,
  },
  {
    _id: 4,
    department: "Civil Engineering",
    courseName: "CCSE",
    mode: "Online/Offline",
    duration: "6 months",
    photo: ccseImage,
  },
  {
    _id: 5,
    department: "Civil Engineering",
    courseName: "Construction Technology",
    mode: "Online/Offline",
    duration: "6 months",
    photo: constructionTechnologyImage,
  },
  {
    _id: 6,
    department: "Civil Engineering",
    courseName: "Architectural BIM",
    mode: "Online/Offline",
    duration: "6 months",
    photo: architecturalBIMImage,
  },
];

function Electrical() {
  return (
    <>
    <Navbar/>
    <Hero3/>
    <div className="bg-white  to-white py-6 px-4 sm:px-8 md:px-12 mt-24 mb-24">
      <div className="min-h-screen max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseDetails.map((course) => (
            <div
              key={course._id}
              className="bg-gray-100 border border-aqua shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <Link to={""}>
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={course.photo}
                  alt="Course Thumbnail"
                />
              </Link>

              <div className="p-4">
                {/* Department with hover effect */}
                <div
                  className="bg-aqua text-navy font-medium py-1 px-4 rounded-lg w-fit cursor-pointer transition-colors duration-300 hover:bg-navy hover:text-aqua"
                >
                  {course.department}
                </div>

                <h4 className="text-lg font-bold text-gray-900 mt-2">
                  {course.courseName}
                </h4>

                {/* Mode and Duration side-by-side */}
                <div className="flex justify-between items-center mt-4 text-gray-800">
                  <p className="border border-gray-300 rounded-3xl px-3 py-2">
                    Mode: {course.mode || "Not available"}
                  </p>
                  <p className="border border-gray-300 rounded-3xl px-3 py-2">
                    Duration: {course.duration || "Not available"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  
  );
}

export default Electrical;
