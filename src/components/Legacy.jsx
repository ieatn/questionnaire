import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button } from '@mui/material';

function Legacy({ onNext }) {
  const [wills, setWills] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [showLife, setShowLife] = useState(false);
  const [showProperty, setShowProperty] = useState(false);

  const handleWillsChange = (event) => {
    setWills(event.target.checked);
  };

  const handleInsuranceChange = (event) => {
    const checked = event.target.checked;
    setInsurance(checked);
    if (checked) {
      setShowLife(true);
      setShowProperty(true);
    } else {
      setShowLife(false);
      setShowProperty(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3" color="primary" align="center" style={{ marginTop: '20px' }}>
        Legacy
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={wills} onChange={handleWillsChange} />}
        label="Wills"
      />
      <FormControlLabel
        control={<Checkbox checked={insurance} onChange={handleInsuranceChange} />}
        label="Insurance"
      />
      {showLife && (
        <FormControlLabel
          control={<Checkbox />}
          label="Life"
        />
      )}
      {showProperty && (
        <FormControlLabel
          control={<Checkbox />}
          label="Property"
        />
      )}
    </div>
  );
}

export default Legacy;
