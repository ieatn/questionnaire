import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid
} from "@mui/material";

function App2() {
  const [goals, setGoals] = useState([""]);

  const handleAddInput = () => {
    setGoals([...goals, ""]);
  };

  const handleInputChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  const [concerns, setConcerns] = useState([""]);

  const handleAddConcernInput = () => {
    setConcerns([...concerns, ""]);
  };

  const handleInputConcernChange = (index, value) => {
    const newConcerns = [...concerns];
    newConcerns[index] = value;
    setConcerns(newConcerns);
  };

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

  const [personalFinancialStatements, setPersonalFinancialStatements] = useState(false);
  const [k401, set401k] = useState(false);
  const [brokerage, setBrokerage] = useState(false);
  const [llc, setLLC] = useState(false);
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
  const [accountants, setAccountants] = useState(false);
  const [attorneys, setAttorneys] = useState(false);
  const [bankers, setBankers] = useState(false);
  const [otherAdvisors, setOtherAdvisors] = useState(false);
  const [favoriteCharities, setFavoriteCharities] = useState(false);
  const [keyPersonnel, setKeyPersonnel] = useState(false);

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
    <div style={{ width: "50%", margin: "auto" }}>
      <Container maxWidth="md">
        <Typography variant="h2" color="primary" align="center" mt={4}>
          The Superplan Program
        </Typography>
        <Typography variant="h4" color="textPrimary" align="center" mt={2}>
          Present Situation Check List
        </Typography>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box
            width={400}
          >
            {goals.map((goal, index) => (
              <TextField
                key={index}
                label={`Goal ${index + 1}`}
                value={goal}
                onChange={(e) => handleInputChange(index, e.target.value)}
                fullWidth
                margin="normal"
              />
            ))}
            <Button
              onClick={handleAddInput}
              variant="contained"
              color="primary"
            >
              +
            </Button>
          </Box>
          <Box

            width={400}
          >
            {concerns.map((concern, index) => (
              <TextField
                key={index}
                label={`Primary Concern ${index + 1}`}
                value={concern}
                onChange={(e) =>
                  handleInputConcernChange(index, e.target.value)
                }
                fullWidth
                margin="normal"
              />
            ))}
            <Button
              onClick={handleAddConcernInput}
              variant="contained"
              color="primary"
            >
              +
            </Button>
          </Box>
        </Box>
        <Box textAlign="left" mt={4}>
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Cash Flow
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={personalIncome}
                  onChange={handlePersonalIncomeChange}
                />
              }
              label="Personal Income"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={lastTwoYearsTaxReturn}
                  onChange={handleLastTwoYearsTaxReturnChange}
                />
              }
              label="Last 2 Years Tax Return"
            />
            {showPersonal && (
              <FormControlLabel
                control={<Checkbox />}
                label="Personal"
                style={{ marginLeft: "10px" }}
              />
            )}
            {showBusiness && (
              <FormControlLabel
                control={<Checkbox />}
                label="Business"
                style={{ marginLeft: "10px" }}
              />
            )}
          </div>
        </Box>

        <Typography variant="h5" style={{ marginTop: "20px" }}>
            Portfolio
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
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


      <Box>

      <Typography variant="h5" style={{ marginTop: "20px" }}>
            Legacy
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
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
          style={{ marginLeft: "10px" }}

        />
      )}
      {showProperty && (
        <FormControlLabel
          control={<Checkbox />}
          label="Property"
          style={{ marginLeft: "10px" }}

        />
      )}
      </div>
      </Box>
      <Box>

      <Typography variant="h5"  align="left" style={{ marginTop: '20px' }}>
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



      </Box>
      </Container>
    </div>
  );
}

export default App2;
