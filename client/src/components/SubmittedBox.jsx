import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import App2 from '../App2';
import { Link } from "react-router-dom";

function SubmittedBox() {
  const [showApp2, setShowApp2] = useState(false);

  const handleClick = () => {
    setShowApp2(true);
  };
      
  const handleClose = () => {
    setShowApp2(false);
  };




  return (
    <>
      <Box textAlign="center" mt={4}>
        <Typography variant="h3" color="primary">
          Submission Successful
        </Typography>
        <Typography variant="body1">
          Thank you for your submission!
        </Typography>
      </Box>
      {showApp2 && <App2 />}
      {!showApp2 && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={handleClick}>
            Review Form
          </Button>
        </Box>
      )}
      {showApp2 && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      )}
      <Button variant='contained' component={Link} to='/'>Return</Button>
    </>
  );
}

export default SubmittedBox;
