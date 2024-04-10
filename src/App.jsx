import React, { useState } from 'react';
import PrimaryConcerns from './components/PrimaryConcerns';
import PrimaryGoals from './components/PrimaryGoals';
import { Button, Typography } from '@mui/material';

function App() {
  const [showConcerns, setShowConcerns] = useState(true);

  const handleClick = () => {
    setShowConcerns(false); // Hide concerns and show goals
  };

  return (
    <>
      <Typography variant="h1" color="primary" align="center">
        The Superplan Program
      </Typography>
      <Typography variant="h2" color="textPrimary" align="center">
        Present Situation Check List
      </Typography>
      {showConcerns ? (
        <PrimaryConcerns />
      ) : (
        <PrimaryGoals />
      )}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {showConcerns ? (
          <Button variant="contained" color="primary" onClick={handleClick}>
            Next
          </Button>
        ) : null}
      </div>
    </>
  );
}

export default App; 
