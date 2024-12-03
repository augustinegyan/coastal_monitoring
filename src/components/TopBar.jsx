// import React, { useEffect, useState } from "react";

// const TopBar = () => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const sensorSerialNo = "1214576"; // Example serial number, update as needed

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setDate(now.toLocaleDateString());
//       setTime(now.toLocaleTimeString());
//     };

//     updateTime(); // Initial call to set date and time
//     const timer = setInterval(updateTime, 1000); // Update time every second

//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="flex text-white p-4 space-x-0.5">
//       {/* Date Section */}
//       <div className="flex-1 text-center bg-cbase ">
//         <div className="text-sm font-semibold ">DATE</div>
//         <div className="text-xl font-bold">{date}</div>
//       </div>
      
//       {/* Time Section */}
//       <div className="flex-1 text-center bg-cbase ">
//         <div className="text-sm font-semibold">TIME</div>
//         <div className="text-xl font-bold">{time}</div>
//       </div>
      
//       {/* Sensor Serial Number Section */}
//       <div className="flex-1 text-center bg-cbase">
//         <div className="text-sm font-semibold">Sensor Serial No</div>
//         <div className="text-xl font-bold">{sensorSerialNo}</div>
//       </div>

//        {/* Sensor Serial Number Section */}
//        <div className="flex-1 text-center bg-cbase ">
//         <div className="text-sm font-semibold">Sensor Serial No</div>
//         <div className="text-xl font-bold">{sensorSerialNo}</div>
//       </div>

//       {/* Time Section */}
//       <div className="flex-1 text-center bg-cbase ">
//         <div className="text-sm font-semibold">TIME</div>
//         <div className="text-xl font-bold">{time}</div>
//       </div>


//        {/* Date Section */}
//       <div className="flex-1 text-center bg-cbase">
//         <div className="text-sm font-semibold">DATE</div>
//         <div className="text-xl font-bold">{date}</div>
//       </div>


      
//     </div>
    
//   );
// };

// export default TopBar;

// import React, { useEffect, useState } from "react";
// import '../index.css';

// const TopBar = () => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setDate(now.toLocaleDateString());
//       setTime(now.toLocaleTimeString());
//     };

//     updateTime();
//     const timer = setInterval(updateTime, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className=" shadow-lg header-font">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between h-12 px-2 md:px-4 space-x-0.5">
//           {/* Left: Time */}
//           <div className="flex-1 text-center bg-cbase h-12 flex flex-col justify-center">
//             <div className="text-white text-xs font-medium">TIME</div>
//             <div className="text-white text-sm font-bold">{time}</div>
//           </div>

//           {/* Center: Title */}
//           <div className="flex-1 md:flex-2 px-1 md:px-4 bg-cbase h-12 flex items-center justify-center">
//             <h1 className="text-sm md:text-lg font-medium text-white tracking-wide text-center">
//               COASTAL MONITORING SYSTEM
//             </h1>
//           </div>

//           {/* Right: Date */}
//           <div className="flex-1 text-center bg-cbase h-12 flex flex-col justify-center">
//             <div className="text-white text-xs font-medium">DATE</div>
//             <div className="text-white text-sm font-bold">{date}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;


import React, { useEffect, useState } from "react";
import '../index.css';

const TopBar = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="shadow-lg header-font">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 px-2 md:px-4 space-x-0.5">
          {/* Left: Time */}
          <div className="flex-1 text-center bg-cbase h-12 flex flex-col justify-center">
            <div className="text-white text-xs font-medium">TIME</div>
            <div className="text-white text-sm font-bold">{time}</div>
          </div>

          {/* Center: Serial Number */}
          <div className="flex-1 text-center bg-cbase h-12 flex flex-col justify-center">
            <div className="text-white text-xs font-medium">SERIAL NUMBER</div>
            <div className="text-white text-sm font-bold">4910023</div>
          </div>

          {/* Right: Date */}
          <div className="flex-1 text-center bg-cbase h-12 flex flex-col justify-center">
            <div className="text-white text-xs font-medium">DATE</div>
            <div className="text-white text-sm font-bold">{date}</div>
          </div>

          {/* New: Country */}
          <div className="flex-1 text-center bg-cbase h-12 flex flex-col justify-center">
            <div className="text-white text-xs font-medium">COUNTRY</div>
            <div className="text-white text-sm font-bold">Ghana</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

