import React from "react";
import {Route, Routes} from 'react-router-dom'
import Landing from "./components/layout/Landing";
import Authentication from "./views/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Authentication authRoute='login'/>}/>
      <Route path="/register" element={<Authentication authRoute='register'/>}/>
    </Routes>
  );
}

export default App;
