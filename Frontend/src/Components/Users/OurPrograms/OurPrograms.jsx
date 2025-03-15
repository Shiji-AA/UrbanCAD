import { useState } from 'react';
//import bluegray3 from '../../../assets/certificates/bluegray4.jpg';

function OurPrograms() {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (index) => {
    setExpandedCategories((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const categories = [
    {
      title: 'Engineering',
      programs: [
        'AutoCAD', 'Revit Architecture', '3DS Max', 'SketchUp', 'STAAD Pro', 'ETABS', 'Primavera', 'Navisworks Manage', 'Autodesk Insight',
        'BIM 360', 'Revit Structure', 'Civil 3D', 'Rhino 3D', 'Grasshopper', 'Lumion', 'VRay', 'Enscape', 'PV Syst', 'DIALux', 'AutoCAD Electrical',
        'SolidWorks', 'Revit MEP', 'HAP', 'Fusion 360', 'CATIA', 'ANSYS', 'InfraWorks', 'Inventor', 'CREO', 'ReCap', 'Formit', 'Pro Structures',
        'Open Bridge Modeller', 'Dynamo Studio', 'Tekla', 'MicroStation'
      ]
    },
    {
      title: 'Multimedia',
      programs: [
        'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe InDesign', 'Adobe Lightroom', 'Adobe Animate',
        'Adobe XD', 'Autodesk Maya', 'Autodesk 3DS Max', 'Trimble SketchUp', 'Corel Draw', 'Blender', 'DaVinci Resolve', 'Lumion', 'Microsoft Office'
      ]
    },
    {
      title: 'Information Technology',
      programs: [
        'Data Science and ML Masterclass with Python', 'Certificate Program in Generative AI', 'Certificate Course on Cyber Security Analytics', 'Certificate Course on Software Testing'
      ]
    },
    {
      title: 'Project Management',
      programs: [
        'Certificate Course on Project Management for Engineers', 'Certificate Course on Public Infrastructure Design and Management'
      ]
    }
  ];

  return (
    <div
      className=" bg-opacity-90 border-2 border-gray-50  py-12 px-6  rounded-lg"
      style={{
        backgroundImage: ``,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto bg-opacity-70 pt-4 pb-4 pl-8 pr-8 rounded-lg">
        {/* Heading */}
        <div className="font-syn text-center mb-12">
  <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-2">Explore</h1>
  <h2 className="text-2xl sm:text-3xl font-bold text-aqua">Our Programs</h2>
</div>


        {/* Full-Width Accordion */}
        <div className="space-y-4 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Card Header */}
              <div
                className="bg-white p-5 cursor-pointer flex justify-between items-center hover:bg-[#484848] hover:text-white"
                onClick={() => toggleCategory(index)}
              >
                <h2 className="font-syn text-xl font-semibold flex-1">
                  {category.title}
                </h2>
                <span className="font-bold text-3xl  rounded-full  flex items-center justify-center">
                  {expandedCategories.includes(index) ? '-' : '+'}
                </span>
              </div>

              {/* Programs List (Collapsible) */}
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  expandedCategories.includes(index)
                    ? 'max-h-screen'
                    : 'max-h-0'
                }`}
              >
                <div className="p-5">
                  <ul className="space-y-3">
                    {category.programs.map((program, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 text-sm hover:text-teal-500 transition-all duration-200"
                      >
                        <span className="text-teal-600 mr-2">▶</span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
