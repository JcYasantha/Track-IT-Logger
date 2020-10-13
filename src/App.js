import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Navbar from "./layouts/Navbar";
import LogList from "./logs/LogList"

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return <div className='App'>
    <Navbar />
    <div className="container">
      <LogList />
    </div>
  </div>;
}

export default App;
