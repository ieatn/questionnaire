import React, { useState } from 'react';
import PrimaryConcerns from './components/PrimaryConcerns';
import PrimaryGoals from './components/PrimaryGoals';
import CashFlow from './components/CashFlow';
import Portfolio from './components/Portfolio';
import Legacy from './components/Legacy';
import NamesOf from './components/NamesOf';
import SubmittedBox from './components/SubmittedBox';
import { Button, Typography } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function App1() {
  const [step, setStep] = useState(1); // Track the current step, start from step 1 (concerns)
  const steps = [
    'PrimaryConcerns', 
    'PrimaryGoals', 
    'CashFlow',
    'Portfolio',
    'Legacy',
    'NamesOf',
    'Finished!'
  ];
  

  const handleNext = () => {
    setStep(step + 1); // Move to the next step
  };
  const handleBack = () => {
    setStep(step - 1); // Move to the previous step
  }
  const handleReset = () => {
    setStep(0);
  };

  const handleSelect = (selectedStep) => {
    setStep(selectedStep + 1); // Stepper indices start from 0, steps start from 1
  };

  let content = null;

  // Determine which component to render based on the current step
  switch (step) {
    case 1:
      content = <PrimaryConcerns />;
      break;
    case 2:
      content = <PrimaryGoals />;
      break;
    case 3:
      content = <CashFlow />;
      break;
    case 4:
      content = <Portfolio onNext={handleNext} />;
      break;
    case 5:
      content = <Legacy onNext={handleNext} />;
    break;
    case 6:
      content = <NamesOf onNext={handleNext} />;
    break;
    case 7:
      content = <SubmittedBox />;
    break;
    default:
      content = null;
  }

  return (
    <>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} onClick={() => handleSelect(index)} style={{ cursor: 'pointer' }}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography variant="h1" color="primary" align="center">
        The Superplan Program
      </Typography>
      <Typography variant="h2" color="textPrimary" align="center">
        Present Situation Check List
      </Typography>
      {content}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {step < 7 ? (
          <>
          <Button variant="contained" color="primary" onClick={handleBack} disabled={step === 1}> Back </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {step === 6 ? 'Submit' : 'Next'}
          </Button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default App1;
