import React from "react";
import {Route, Routes} from 'react-router-dom'
import Landing from "./components/layout/Landing";
import Authentication from "./views/Authentication";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Authentication authRoute='login'/>}/>
      <Route path="/register" element={<Authentication authRoute='register'/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
