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
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-2">Explore</h1>
          <h2 className="text-4xl font-bold text-aqua">Our Programs</h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-5 cursor-pointer flex justify-between items-center"
                onClick={() => toggleCategory(index)}
              >
                <h2 className="text-xl font-semibold">{category.title}</h2>
                <span className="text-2xl">
                  {openCategory === index ? '-' : '+'}
                </span>
              </div>

              {/* Programs List (Collapsible) */}
              {openCategory === index && (
                <div className="p-5">
                  <ul className="space-y-3">
                    {category.programs.map((program, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-800 text-sm hover:text-teal-500 transition-all duration-200"
                      >
                        <span className="text-teal-400 mr-2">▶</span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
