import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button, Grid } from '@mui/material';
import { useForm } from '../contexts/FormContext'; // Assuming FormContext is in the same directory

function NamesOf({ onNext }) {
  const { accountants, setAccountants, attorneys, setAttorneys, bankers, setBankers, otherAdvisors, setOtherAdvisors, favoriteCharities, setFavoriteCharities, keyPersonnel, setKeyPersonnel } = useForm(); // Consume the FormContext
  // const [accountants, setAccountants] = useState(false);
  // const [attorneys, setAttorneys] = useState(false);
  // const [bankers, setBankers] = useState(false);
  // const [otherAdvisors, setOtherAdvisors] = useState(false);
  // const [favoriteCharities, setFavoriteCharities] = useState(false);
  // const [keyPersonnel, setKeyPersonnel] = useState(false);


  const handleAccountantsChange = (event) => {
    setAccountants(event.target.checked);
  };

  const handleAttorneysChange = (event) => {
    setAttorneys(event.target.checked);
  };

  const handleBankersChange = (event) => {
    setBankers(event.target.checked);
  };

  const handleOtherAdvisorsChange = (event) => {
    setOtherAdvisors(event.target.checked);
  };

  const handleFavoriteCharitiesChange = (event) => {
    setFavoriteCharities(event.target.checked);
  };

  const handleKeyPersonnelChange = (event) => {
    setKeyPersonnel(event.target.checked);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3" color="primary" align="center" style={{ marginTop: '20px' }}>
        Names Of
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={accountants} onChange={handleAccountantsChange} />}
            label="Accountants"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={attorneys} onChange={handleAttorneysChange} />}
            label="Attorneys"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={bankers} onChange={handleBankersChange} />}
            label="Bankers"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={otherAdvisors} onChange={handleOtherAdvisorsChange} />}
            label="Other Advisors"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={favoriteCharities} onChange={handleFavoriteCharitiesChange} />}
            label="Favorite Charities"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={keyPersonnel} onChange={handleKeyPersonnelChange} />}
            label="Key Personnel"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default NamesOf;
