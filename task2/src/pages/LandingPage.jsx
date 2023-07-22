import React from 'react';
import Card from '@mui/material/Card';
import { Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export const LandingPage=()=>{

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       textAlign: 'center',
    //       marginTop: theme.spacing(8),
    //     },
    //     title: {
    //       marginBottom: theme.spacing(2),
    //     },
    //     description: {
    //       marginBottom: theme.spacing(4),
    //     },
    //     button: {
    //       margin: theme.spacing(2),
    //     },
    //   }));
    // return(<>
    // <h1>Train Booking System

    // </h1>
    // const classes = useStyles();

return (
    <>
    <h1></h1>
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <h1 class='text-center'>Train Management System</h1>
        </Typography>
     </CardContent>


  <Container className="">
    <Typography variant="h3" component="h1" className='form-control' >
      Welcome to the Railway System
    </Typography>
    <Typography variant="body1" >
      Experience the best railway journey with us.
    </Typography>
    <Button variant="contained" color="primary">
      Book Tickets
    </Button>
    <Button variant="outlined" color="primary">
      Learn More
    </Button>
  </Container>
);
    
    
    </>)
}