import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Navbar from "./layouts/Navbar";
import TechList from './techs/TechList';
import AddTech from './techs/AddTech';
import LogList from "./logs/LogList";
import AddBtn from './layouts/AddBtn';
import AddLog from './logs/AddLog';
import EditLog from './logs/EditLog';


function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return <div className='App'>
    <Navbar />
    <div className="container">
      <AddBtn />
      <LogList />
      <AddLog/>
      <EditLog />
      <TechList />
      <AddTech/>
    </div>
  </div>;
}

export default App;
