import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import CourseService from "../service/CourseService";
import { useNavigate } from "react-router-dom";
export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const createCourse = async () => {
      try {
          if(title === ""){
              alert("จำเป็นต้องมี Title")
              return 0
          }
          const fd = new FormData()
          fd.append("title", title)
          fd.append("description", description)
          fd.append("password", password)
          await CourseService.createCourse(fd)
          navigate("/")
      } catch (err){
          console.log(err)
      }
  }
  const useStyles = {
    form: {
      backgroundColor: "#d2dff7",
      padding: 3,
      borderRadius: 40,
    },
  };
  return (
    <Box>
      <Grid container justifyContent="center" mt={3}>
        <Grid item xs={12} md={5} lg={3} textAlign="center">
          <Typography variant="h3">Create Course</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={3}>
        <Grid item xs={11} md={6} style={useStyles.form}>
          <Grid container justifyContent="center" mt={2}>
            <Grid item xs={10}>
              <TextField
                label="Title"
                variant="standard"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={3}>
            <Grid item xs={10}>
              <TextField
                label="Description"
                variant="standard"
                fullWidth
                multiline
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={3}>
            <Grid item xs={10}>
              <TextField
                label="Password"
                variant="standard"
                fullWidth
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={3} mb={4}>
            <Grid item xs={5} md={2}>
              <Button fullWidth variant="contained" onClick={createCourse}>
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
