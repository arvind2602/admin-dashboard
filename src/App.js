import React from "react";
import CleanScan360 from "./components/CleanScan360";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetectX from "./components/DetectX";
import CrowdSense from "./components/CrowdSense";
import Videos from "./components/Videos";
import Login from "./components/Login";



const App = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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
