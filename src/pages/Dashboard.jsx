import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";
import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import CustomizedTables from "../components/Table";
import CustomizedVideoTables from "../components/Videotable";
import CustomizedotherTables from "../components/othertable";
import CustomizedpdfTables from "../components/pdftable";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`analytics?userId=${userId}`);
        setAnalytics(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <CustomizedTables analytics={analytics} />
          <Divider />
          <CustomizedVideoTables analytics={analytics} />
          <Divider />
          <CustomizedotherTables analytics={analytics} />
          <Divider />
          <CustomizedpdfTables analytics={analytics} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
