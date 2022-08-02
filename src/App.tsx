import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { StartupPage } from "./pages/Startup.page";
import { FfcPage } from "./pages/Ffc.page";

function App() {
  return (
    <div className="App">
      <div id="header" style={{ backgroundImage: `url("header.png")` }}>
      </div>
      <div id="content" style={{ backgroundImage: `url("bg.jpeg")` }}>
        <Routes>
          <Route path="/" element={<StartupPage />} />
          <Route path="/ffc/:id" element={<FfcPage />} />        
        {/*   <Route path="/Maintenance" element={<Maintenance />} />         */}
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
