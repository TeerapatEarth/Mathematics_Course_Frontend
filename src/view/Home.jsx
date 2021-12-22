import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CourseCard from "../component/Card/Course";
import axios from "axios";
import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => axios(...args).then((res) => res.data);
  const { data, error } = useSWR("https://backend-mathematics.herokuapp.com/course", fetcher);
  if (error) return <Box>Error</Box>;
  if (!data) return <Box>Loading</Box>;
  return (
    <Box>
      {data.map((item) => (
        <CourseCard key={item._id} title={item.title}></CourseCard>
      ))}
    </Box>
  );
}
