import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props) {
  const useStyles = {
    card: {
      borderRadius: 15,
      boxShadow: "0px 5px 35px -10px"
    },
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={useStyles.card}>
        <CardMedia
          component="img"
          height="150"
          image="https://i.ytimg.com/vi/WsQQvHm4lSw/maxresdefault.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
