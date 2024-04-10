import React from 'react';
import PrimaryConcerns from './components/PrimaryConcerns';
import PrimaryGoals from './components/PrimaryGoals';
import CashFlow from './components/CashFlow';
import Portfolio from './components/Portfolio';
import Legacy from './components/Legacy';
import NamesOf from './components/NamesOf';
import { Container, Typography, Box } from '@mui/material';

function App2() {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Container maxWidth="md">
        <Typography variant="h1" color="primary" align="center" mt={4}>
          The Superplan Program
        </Typography>
        <Typography variant="h2" color="textPrimary" align="center" mt={2}>
          Present Situation Check List
        </Typography>
        <Box mt={4}>
          <PrimaryConcerns />
          <PrimaryGoals />
          <CashFlow />
          <Portfolio />
          <Legacy />
          <NamesOf />
        </Box>
      </Container>
    </div>
  );
}

export default App2;
