import { useState } from 'react';
import bluegray3 from '../../../assets/certificates/bluegray3.jpg';

function OurPrograms() {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories(expandedCategories.filter(item => item !== index));
    } else {
      setExpandedCategories([...expandedCategories, index]);
    }
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
        'Program 1', 'Program 2', 'Program 3'
      ]
    },
    {
      title: 'Project Management',
      programs: [
        'Program 1', 'Program 2', 'Program 3'
      ]
    }
  ];

  return (
    <div data-aos="fade-up"
      className="bg-gray-50 py-12 px-6"
      style={{
        backgroundImage: `url(${bluegray3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto bg-white bg-opacity-70 pt-4 pb-4 pl-8 pr-8 rounded-lg">
        {/* Heading */}
        <div className="font-heading text-center mb-12">
        <div className="font-heading text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-2">Explore</h1>
          <h2 className="text-4xl font-bold text-aqua">Our Programs</h2>
        </div> 
</div>


        {/* Full-Width Accordion */}
        <div data-aos="fade-left"
        className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 shadow-lg rounded-lg overflow-hidden hover:bg-white hover:text-white transition-all duration-300"
            >
              {/* Card Header */}
              <div
                className="bg-gray-300 p-5 cursor-pointer flex justify-between items-center hover:bg-navy hover:text-white"
                onClick={() => toggleCategory(index)}
              >
                <h2 className="font-heading text-xl font-semibold flex-1">{category.title}</h2>
                <span className=" font-bold text-3xl border border-gray-900 w-6 h-6 rounded-full pb-2 flex items-center justify-center">
                  {expandedCategories.includes(index) ? '-' : '+'}
                </span>
              </div>

              

              {/* Programs List (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategories.includes(index) ? 'h-auto' : 'h-0'}`}
                style={{
                  transitionProperty: 'height',
                }}
              >
                {expandedCategories.includes(index) && (
                  <div className="p-5">
                    <ul className="space-y-3">
                      {category.programs.map((program, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-800 text-sm hover:text-teal-500   transition-all duration-200"
                        >
                          <span className="text-teal-400 mr-2">▶</span>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
