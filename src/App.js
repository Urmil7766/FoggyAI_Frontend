import React from "react";
import "./App.css";
import Header from "./componenets/Header/header";
import Sidebar from "./componenets/Sidebar/Sidebar";
import Home from "./componenets/Home/Home";
import { Routes, Route } from "react-router-dom";
import Plag from "./componenets/Plag/Plag";

function App() {
  return (
    <div className="App">
      <Header className="head" />
      <div class ="container">
        <div className="side">
        <Routes>
          <Route>
            <Route path="/" element={<Sidebar />} />
            <Route path="plag" element={<Plag />} />
          </Route>
        </Routes>
        </div>
        <div class="main-content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

// <div class="main-content">
//           <Home />
//         </div>
