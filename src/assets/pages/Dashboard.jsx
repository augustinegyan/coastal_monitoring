// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Layout from "../../components/Layout";
// import Home from "./Home";
// import Buoy from "./Buoy";
// import Download from "./Download";

// const Dashboard = () => {
//   return (
//     <Layout>
//       <Routes>
//         {/* Match the routes with the paths from Sidebar */}
//         <Route path="/dashboard" element={<Home />} />
//         <Route path="buoy" element={<Buoy />} />
//         <Route path="download" element={<Download />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Layout>
//   );
// };

// export default Dashboard;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import Home from './Home';
import Buoy from './Buoy';
import Download from './Download';
import Analytics from '../../components/Analytics';


const Dashboard = () => {
  return (
    <Routes>
      <Route element={<Layout />}>  {/* This wraps all dashboard routes */}
        <Route index element={<Home />} />  {/* Use index instead of path="/" */}
        <Route path="buoy" element={<Buoy />} />
        <Route path="download" element={<Download />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="*" element={
          <div className="text-center p-4">
            Page Not Found - Please check the URL
          </div>
        } />
      </Route>
    </Routes>
  );
};

export default Dashboard;