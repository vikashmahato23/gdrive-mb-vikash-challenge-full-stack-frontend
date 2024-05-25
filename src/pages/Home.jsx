import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import axiosInstance from "../api/axiosConfig";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        marginTop:"50px"
      }}
    >
      <Stack flexDirection={"row"}>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              color: "white",
            }}
          >
            Check if your Google Drive is leaking sensitive data
          </Typography>
          <AddToDriveIcon />
          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "white",
              color:"black"
            }}
            onClick={handleConnect}
          >
            Connect to Google Drive
          </Button>
          <hr />
          <Typography
             
            sx={{
              color: "white",
            }}
          >
            See How secure your Google Drive aacount is in seconds
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
          >
            Discover who still has access to your files, and who they were
            created by
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
          >
            find risky files exposed publicly to anyone on the internet
          </Typography>
        </Stack>
        <Stack width={"50%"}></Stack>
      </Stack>
    </div>
  );
};

export default Home;
