import React from 'react';
import { Typography, Box } from '@mui/material';

function SubmittedBox() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h3" color="primary">
        Submission Successful
      </Typography>
      <Typography variant="body1">
        Thank you for your submission!
      </Typography>
    </Box>
  );
}

export default SubmittedBox;
