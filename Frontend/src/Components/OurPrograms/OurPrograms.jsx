import { useState } from 'react';

function OurPrograms() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
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
        'Program 1', 'Program 2', 'Program 3' // Replace with actual IT programs
      ]
    },
    {
      title: 'Project Management',
      programs: [
        'Program 1', 'Program 2', 'Program 3' // Replace with actual Project Management programs
      ]
    }
  ];

  return (
    <div className="bg-white py-10 px-4 flex items-center justify-center min-h-screen">
      <div className="max-w-screen-xl w-full">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-aqua inline-block mr-2">
            Our
          </h1>
          <h1 className="text-3xl font-semibold text-navy inline-block">
            Programs
          </h1>
        </div>

        {/* Category List (Accordion) */}
        <div className="space-y-5">
          {categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(index)}
              >
                <h2 className="text-white text-2xl font-semibold">{category.title}</h2>
                <span className="text-white text-3xl">
                  {openCategory === index ? '-' : '+'}
                </span>
              </div>

              {/* Category Programs (Collapsible) */}
              {openCategory === index && (
                <ul className="mt-4 space-y-2 text-white">
                  {category.programs.map((program, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-500 mr-2">▶</span>{program}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
