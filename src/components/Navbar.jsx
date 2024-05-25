import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Button, CircularProgress } from "@mui/material";
import axiosInstance from "../api/axiosConfig";

export default function Navbar({ userId }) {
  const [loading, setLoading] = React.useState(false); // State for loading

  const handleRevoke = async () => {
    setLoading(true); // Set loading to true when the revoke action starts
    try {
      const response = await axiosInstance.post("/auth/google/revoke", {
        userId,
      });
      console.log(response.data.message); // Handle response (e.g., show a notification)
      // Redirect or update the UI as needed
      window.location.href = "/";
    } catch (error) {
      console.error("Error revoking access", error);
    } finally {
      setLoading(false); // Set loading to false when the action is complete (whether successful or not)
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        border: "1px solid red",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Image src="/" alt="ddf" />
      <Stack
        flexDirection={"row"}
        sx={{
          borderRadius: "10px",
          background: "#322e4a",
        }}
      >
        <Button
          sx={{
            color: "white",
          }}
        >
          Platform
        </Button>
        <Button
          sx={{
            color: "white",
          }}
        >
          Resource center
        </Button>
        <Button
          sx={{
            color: "white",
          }}
        >
          Company
        </Button>
        <Button
          sx={{
            color: "white",
          }}
        >
          Case Studies
        </Button>
        <Button
          sx={{
            color: "white",
          }}
        >
          Partners
        </Button>
      </Stack>
      <Stack>
        <Button
          sx={{
            color: "white",
          }}
          disabled={loading} // Disable button when loading
          onClick={
            userId ? handleRevoke : () => (window.location.href = "/book-demo")
          }
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : userId ? (
            "Revoke"
          ) : (
            "Book demo"
          )}
        </Button>
      </Stack>
    </Box>
  );
}
