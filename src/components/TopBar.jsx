import React, { useEffect, useState } from "react";

const TopBar = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const sensorSerialNo = "1214576"; // Example serial number, update as needed

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    };

    updateTime(); // Initial call to set date and time
    const timer = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex text-white p-4 space-x-0.5">
      {/* Date Section */}
      <div className="flex-1 text-center bg-cbase ">
        <div className="text-sm font-semibold ">DATE</div>
        <div className="text-xl font-bold">{date}</div>
      </div>
      
      {/* Time Section */}
      <div className="flex-1 text-center bg-cbase ">
        <div className="text-sm font-semibold">TIME</div>
        <div className="text-xl font-bold">{time}</div>
      </div>
      
      {/* Sensor Serial Number Section */}
      <div className="flex-1 text-center bg-cbase">
        <div className="text-sm font-semibold">Sensor Serial No</div>
        <div className="text-xl font-bold">{sensorSerialNo}</div>
      </div>

       {/* Sensor Serial Number Section */}
       <div className="flex-1 text-center bg-cbase ">
        <div className="text-sm font-semibold">Sensor Serial No</div>
        <div className="text-xl font-bold">{sensorSerialNo}</div>
      </div>

      {/* Time Section */}
      <div className="flex-1 text-center bg-cbase ">
        <div className="text-sm font-semibold">TIME</div>
        <div className="text-xl font-bold">{time}</div>
      </div>


       {/* Date Section */}
      <div className="flex-1 text-center bg-cbase">
        <div className="text-sm font-semibold">DATE</div>
        <div className="text-xl font-bold">{date}</div>
      </div>


      
    </div>
    
  );
};

export default TopBar;
