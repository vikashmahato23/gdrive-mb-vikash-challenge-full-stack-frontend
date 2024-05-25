import React from "react";
import { Button } from "@mui/material";
import axiosInstance from "../api/axiosConfig";

const Home = () => {
  const handleConnect = async () => {
    try {
      const response = await axiosInstance.get("/auth/google");
      console.log(response,"==============>resoe")
      // Redirect to Google authentication URL
      window.location.href=response.data
    } catch (error) {
      console.error("Error connecting to Google", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Button variant="contained" color="primary" onClick={handleConnect}>
        Connect to Google Drive
      </Button>
    </div>
  );
};

export default Home;
