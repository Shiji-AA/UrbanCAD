import { Link } from "react-router-dom";
import { Eye, Calendar } from "lucide-react"; // Importing icons
// Static imports for images
import mech1 from "../../../assets/mechanical/mech1.jpg";
import mech2 from "../../../assets/mechanical/mech2.jpg";
import mech3 from '../../../assets/mechanical/mech3.jpg';
import mech4 from '../../../assets/mechanical/mech4.jpg';
import mech5 from '../../../assets/mechanical/mech5.jpg';

import Footer from "../Footer/Footer1";
import Hero4 from "../Hero/Hero4Mechanical";
import Navbar from "../Navbar/Navbar";

// Define the courseDetails as an array of objects with correct fields
const courseDetails = [
  {
     _id: 1,
     department: "Mechanical Engineering",
     courseName: "MEP Design and Operations",
     mode: "Online/Offline",
     duration: "6 Months",
     photo: mech1,
   },
  {
    _id: 2,
    department: "Mechanical Engineering",
    courseName: "Certified Mechanical Design Engineer",
    mode: "Online/Offline",
    duration: "6 Months",
    photo:mech2,
  },
  {
    _id: 3,
    department: "Mechanical Engineering",
    courseName: "QA/QC in Mechanical Engineering + NDT",
    mode: "Online/Offline",
    duration: "2 Months",
    photo:mech3,
  },
  {
    _id: 4,
    department: "Mechanical Engineering",
    courseName: "Oil and Gas Engineering",
    mode: "Online/Offline",
    duration: "3 Months",
    photo:mech4,
  },
  {
    _id: 5,
    department: "Mechanical Engineering",
    courseName: "Construction Technology",
    mode: "Online/Offline",
    duration: "3 Months",
    photo:mech5,
  },
 

 

];

function Mechanical() {
  return (
    <>
    <Navbar/>
    <Hero4/>
    <div data-aos="fade-up" 
    className="bg-white py-24 px-6 flex justify-center">
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
    <Footer/>
    </>
  
  );
}

export default Mechanical;
