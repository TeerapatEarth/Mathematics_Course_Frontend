import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

export default function Progess() {
  return (
    <Box sx={{ width: "100%" }}>
      <CircularProgress/>
    </Box>
  );
}