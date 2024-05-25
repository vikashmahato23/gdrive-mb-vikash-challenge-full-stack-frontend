import React from "react";
import { Route, Switch, Link, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { AllRoute } from "./router/Router";
import { Box } from "@mui/material";


function App() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");
  return (
    <>
      <Navbar userId={userId} />
      <Box paddingLeft={4} pr={4}>
        <AllRoute></AllRoute>
      </Box>
    </>
  );
}

export default App;
