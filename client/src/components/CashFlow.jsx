import React, { useState, useEffect } from 'react';
import { Typography, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useForm } from '../contexts/FormContext'; // Assuming FormContext is in the same directory

function CashFlow() {
  const { personalIncome, setPersonalIncome, lastTwoYearsTaxReturn, setLastTwoYearsTaxReturn, showPersonal, setShowPersonal, business, setBusiness, showBusiness, setShowBusiness } = useForm(); // Consume the FormContext
  // const [personalIncome, setPersonalIncome] = useState(false);
  // const [lastTwoYearsTaxReturn, setLastTwoYearsTaxReturn] = useState(false);
  // const [showPersonal, setShowPersonal] = useState(false);
  // const [showBusiness, setShowBusiness] = useState(false);
  // const [personal, setPersonal] = useState(false);
  // const [business, setBusiness] = useState(false);

  const handlePersonalIncomeChange = (event) => {
    setPersonalIncome(event.target.checked);
  };

  const handleBusinessChange = (event) => {
    setBusiness(event.target.checked);
  };

  const handlePersonalChange = (event) => {
    setPersonal(event.target.checked);
  };

  const handleLastTwoYearsTaxReturnChange = (event) => {
    // setLastTwoYearsTaxReturn(!lastTwoYearsTaxReturn);
    setLastTwoYearsTaxReturn(event.target.checked);
  };

  useEffect(() => {
    if (lastTwoYearsTaxReturn) {
      setShowPersonal(true);
      setShowBusiness(true);
    } else {
      setShowPersonal(false);
      setShowBusiness(false);
    }
  }, [lastTwoYearsTaxReturn]);

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3" color="primary" align="center" style={{ marginTop: '20px' }}>
        Cash Flow
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={personalIncome} onChange={handlePersonalIncomeChange} />}
        label="Personal Income"
      />
      <FormControlLabel
        control={<Checkbox checked={lastTwoYearsTaxReturn} onChange={handleLastTwoYearsTaxReturnChange} />}
        label="Last 2 Years Tax Return"
      />
      {showPersonal && (
        <FormControlLabel
          control={<Checkbox onChange={handlePersonalChange}/>}
          label="Personal"
        />
      )}
      {showBusiness && (
        <FormControlLabel
          control={<Checkbox onChange={handleBusinessChange}/>}
          label="Business"
        />
      )}
    </div>
  );
}

export default CashFlow;
