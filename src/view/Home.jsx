import React from "react";
import { Box, Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CourseCard from "../component/Card/Course";
import Progess from "../component/Progess/Progess";
import axios from "axios";
import useSWR from "swr";

export default function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetcher = (...args) => axios(...args).then((res) => res.data);
  const { data, error } = useSWR(
    "https://backend-mathematics.herokuapp.com/course",
    fetcher
  );
  if (error) return <Box>Error</Box>;
  if (!data)
    return (
      <Grid container justifyContent="center">
        <Grid item xs={1}>
          <Progess />
        </Grid>
      </Grid>
    );
  return (
    <Box mt={3}>
      <Grid container justifyContent="center" mb={10}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={10} md={10}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                aria-label="lab API tabs example"
                onChange={handleChange}
              >
                <Tab label="Course" value="1" />
                <Tab label="My Course" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box>
                <Grid container spacing={5}>
                  {data.map((item) => (
                    <Grid item xs={12} md={4} key={item._id}>
                      <CourseCard
                        title={item.title}
                        description={item.description}
                      ></CourseCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="2"></TabPanel>
          </TabContext>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </Box>
  );
}
