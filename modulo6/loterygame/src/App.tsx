import React, { useState } from "react";
import { url } from "./constants/contant";
import axios from 'axios'
import Router from "./Routes/Router";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
