// import React, { useState } from "react";

// //Icons
// import {LuBox, LuAccessibility, LuUser, LuCalendar, LuMessageSquare, LuCalculator, LuMap, LuGlobe, LuGlobe2, LuSatellite, LuBarChart3, LuDownload, LuWaves, } from "react-icons/lu";
// import {FaSuitcase, FaWaveSquare } from "react-icons/fa";
// import {TbUsers, TbWavesElectricity } from "react-icons/tb";
// import { Link } from "react-router-dom";

// const Sidebar = () =>{

//      const[activeLink,setActiveLink]=useState(0);
//      const handleLinkClick= (index)=>{
//         setActiveLink(index)
//      }
//     const SIDEBAR_LINKS=[
//         {id:1, path:"/", name:"Dashboard", icon: LuBox},
//         {id:2, path:"/buoy", name:"Buoy Network", icon: LuWaves},
//         {id:3, path:"/map", name:"GeoData", icon: LuSatellite},
//         {id:4, path:"/analytics", name:"Analytics", icon: LuBarChart3},
//         {id:5, path:"/download", name:"Downloads", icon: LuDownload},
//         {id:6, path:"/work", name:"Work Plan", icon: LuCalendar},
//     ];
    
//     return (
//      <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white"> 
//         {/*Logo here */}
//         <div className="mb-8">
//             <img src="/GaiaLogo.jpg" alt="logo" className=" hidden md:flex"/> 
//             <img src="/GaiaLogo.jpg" alt="logo" className="flex md:hidden"/> 
//         </div>
//         {/*Logo here */}


//         {/*Navigation Links*/}
//            <ul className="mt-6 space-y-6">
//                 {SIDEBAR_LINKS.map((link, index) => (
//                         <li key={index} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500":""}`}>
//                             <Link to={link.path} className="flex justify-center md:justify-start items-center md:space-x-5" onClick={()=>handleLinkClick(index)}>
//                                 <span>{link.icon()}</span>
//                                 <span className="text-sm text-gray-500 hidden md:flex">{link.name}</span>
//                             </Link>
//                         </li>
//                     ))}
//            </ul>
//         {/*Navigation Links*/}

//        {/* <div>
//             <p>
//                 <span>
//                     <span>?</span><span>Need Help?</span>
//                 </span>
//             </p>        
//         </div>        */}
//     </div>
//     );  
// };
 
// export default Sidebar



import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LuBox,
  LuWaves,
  LuSatellite,
  LuBarChart3,
  LuDownload,
  LuCalendar,
} from "react-icons/lu"; // Import only relevant icons

const Sidebar = () => {
  const location = useLocation();
  
  // Navigation links configuration
  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/dashboard/buoy", name: "Buoy Network", icon: LuWaves },
    { id: 3, path: "/dashboard/map", name: "GeoData", icon: LuSatellite },
    { id: 4, path: "/dashboard/analytics", name: "Analytics", icon: LuBarChart3 },
    { id: 5, path: "/dashboard/download", name: "Downloads", icon: LuDownload },
    { id: 6, path: "/dashboard/work", name: "Work Plan", icon: LuCalendar },
  ];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* Logo */}
      <div className="mb-8">
        <img src="/GaiaLogo.jpg" alt="logo" className="hidden md:flex" />
        <img src="/GaiaLogo.jpg" alt="logo" className="flex md:hidden" />
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link) => (
          <li
            key={link.id}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              location.pathname === link.path ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
