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


import React, { useEffect, useState } from "react";

const TopBar = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const sensorSerialNo = "1214576";

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
      {[
        { label: "DATE", value: date },
        { label: "TIME", value: time },
        { label: "Sensor Serial No", value: sensorSerialNo },
        { label: "Sensor Serial No", value: sensorSerialNo },
        { label: "TIME", value: time },
        { label: "DATE", value: date },
      ].map((item, index) => (
        <div key={index} className="bg-cbase text-white p-2 rounded">
          <div className="text-sm font-semibold">{item.label}</div>
          <div className="text-lg lg:text-xl font-bold truncate">{item.value}</div>
        </div>
      ))}
    </div>
  );
};