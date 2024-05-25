import { Route, Routes } from "react-router-dom";

import Analytics from "../pages/Dashboard";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export const AllRoute=()=>{
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
}