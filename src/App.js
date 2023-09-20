import React from "react";
import CleanScan360 from "./components/CleanScan360";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DetectX from "./components/DetectX";
import CrowdSense from "./components/CrowdSense";
import Videos from "./components/Videos";


const App = () => {
  return (
    <>
    <BrowserRouter>1
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/DetectX" element={<DetectX />} />
        <Route path="/CrowdSense" element={<CrowdSense />} />
        <Route path="/CleanScan360" element={<CleanScan360 />} />
        <Route path="/videos" element={<Videos/>} />
      </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
