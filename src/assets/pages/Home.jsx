import React from "react";
import TopBar from "../../components/TopBar";
import Chart from "../../components/Chart";
import TChart from "../../components/TChart";
import ThinMap from "../../components/ThinMap";
import Table from "../../components/Table";
import Compass from "../../components/Compass";
import 'leaflet/dist/leaflet.css';



const Home = () =>{
    return (
    <div>
      <TopBar/>
      <Chart/>
      <TChart/>
      <ThinMap/>
      <Table/>
      <Compass/>
      
      {/* Rest of your dashboard content */}
    </div>
    )
}

export default Home 