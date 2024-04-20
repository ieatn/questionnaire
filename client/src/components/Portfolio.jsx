import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useForm } from '../contexts/FormContext'; // Assuming FormContext is in the same directory

function Portfolio({ onNext }) {
  const { personalFinancialStatements, setPersonalFinancialStatements, k401, set401k, brokerage, setBrokerage, llc, setLLC } = useForm(); // Consume the FormContext
  // const [personalFinancialStatements, setPersonalFinancialStatements] = useState(false);
  // const [k401, set401k] = useState(false);
  // const [brokerage, setBrokerage] = useState(false);
  // const [llc, setLLC] = useState(false);


  const handlePersonalFinancialStatementsChange = (event) => {
    setPersonalFinancialStatements(event.target.checked);
  };

  const handle401kChange = (event) => {
    set401k(event.target.checked);
  };

  const handleBrokerageChange = (event) => {
    setBrokerage(event.target.checked);
  };

  const handleLLCChange = (event) => {
    setLLC(event.target.checked);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3" color="primary" align="center" style={{ marginTop: '20px' }}>
        Portfolio
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={personalFinancialStatements} onChange={handlePersonalFinancialStatementsChange} />}
        label="Personal Financial Statements"
      />
      <FormControlLabel
        control={<Checkbox checked={k401} onChange={handle401kChange} />}
        label="401k"
      />
      <FormControlLabel
        control={<Checkbox checked={brokerage} onChange={handleBrokerageChange} />}
        label="Brokerage"
      />
      <FormControlLabel
        control={<Checkbox checked={llc} onChange={handleLLCChange} />}
        label="LLC"
      />
    </div>
  );
}

export default Portfolio;
