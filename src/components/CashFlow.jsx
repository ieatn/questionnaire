import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button } from '@mui/material';

function CashFlow() {
  const [personalIncome, setPersonalIncome] = useState(false);
  const [lastTwoYearsTaxReturn, setLastTwoYearsTaxReturn] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  const handlePersonalIncomeChange = (event) => {
    setPersonalIncome(event.target.checked);
  };

  const handleLastTwoYearsTaxReturnChange = (event) => {
    const checked = event.target.checked;
    setLastTwoYearsTaxReturn(checked);
    if (checked) {
      setShowPersonal(true);
      setShowBusiness(true);
    } else {
      setShowPersonal(false);
      setShowBusiness(false);
    }
  };

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
          control={<Checkbox />}
          label="Personal"
        />
      )}
      {showBusiness && (
        <FormControlLabel
          control={<Checkbox />}
          label="Business"
        />
      )}
    </div>
  );
}

export default CashFlow;
