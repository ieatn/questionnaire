import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { useForm } from "./contexts/FormContext"; // Import the useForm hook
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function App2() {
  const { user, isAuthenticated } = useAuth0();

  const {
    concerns,
    setConcerns,
    goals,
    setGoals,

    // cash_flow contains info on 4 checkboxes. i need to create a json state array? called cash_flow
    personalIncome,
    setPersonalIncome,
    lastTwoYearsTaxReturn,
    setLastTwoYearsTaxReturn,
    personal,
    setPersonal,
    business,
    setBusiness,
    showPersonal,
    setShowPersonal,
    showBusiness,
    setShowBusiness,

    personalFinancialStatements,
    setPersonalFinancialStatements,
    k401,
    set401k,
    brokerage,
    setBrokerage,
    llc,
    setLLC,

    wills,
    setWills,
    insurance,
    setInsurance,
    life,
    setLife,
    property,
    setProperty,
    showLife,
    setShowLife,
    showProperty,
    setShowProperty,

    accountants,
    setAccountants,
    attorneys,
    setAttorneys,
    bankers,
    setBankers,
    otherAdvisors,
    setOtherAdvisors,
    favoriteCharities,
    setFavoriteCharities,
    keyPersonnel,
    setKeyPersonnel,
  } = useForm(); // Consume the FormContext

  const [cashFlow, setCashFlow] = useState({
    personalIncome: personalIncome,
    lastTwoYearsTaxReturn: lastTwoYearsTaxReturn,
    personal: personal,
    business: business,
    showPersonal: personal,
    showBusiness: business,
  });
  const [portfolio, setPortfolio] = useState({
    personalFinancialStatements: personalFinancialStatements,
    k401: k401,
    brokerage: brokerage,
    llc: llc,
  });
  const [legacy, setLegacy] = useState({
    wills: wills,
    insurance: insurance,
    life: life,
    property: property,
    showLife: showLife,
    showProperty: showProperty,
  });
  const [namesOf, setNamesOf] = useState({
    accountants: accountants,
    attorneys: attorneys,
    bankers: bankers,
    otherAdvisors: otherAdvisors,
    favoriteCharities: favoriteCharities,
    keyPersonnel: keyPersonnel,
  });

  useEffect(() => {
    // Update cashFlow whenever any of its dependencies change
    setCashFlow({
      personalIncome: personalIncome,
      lastTwoYearsTaxReturn: lastTwoYearsTaxReturn,
      personal: personal,
      business: business,
      showPersonal: personal,
      showBusiness: business,
    });
  }, [personalIncome, lastTwoYearsTaxReturn, personal, business]);

  useEffect(() => {
    // Update portfolio whenever any of its dependencies change
    setPortfolio({
      personalFinancialStatements: personalFinancialStatements,
      k401: k401,
      brokerage: brokerage,
      llc: llc,
    });
  }, [personalFinancialStatements, k401, brokerage, llc]);

  useEffect(() => {
    // Update legacy whenever any of its dependencies change
    setLegacy({
      wills: wills,
      insurance: insurance,
      life: life,
      property: property,
      showLife: showLife,
      showProperty: showProperty,
    });
  }, [wills, insurance, life, property, showLife, showProperty]);

  useEffect(() => {
    // Update namesOf whenever any of its dependencies change
    setNamesOf({
      accountants: accountants,
      attorneys: attorneys,
      bankers: bankers,
      otherAdvisors: otherAdvisors,
      favoriteCharities: favoriteCharities,
      keyPersonnel: keyPersonnel,
    });
  }, [
    accountants,
    attorneys,
    bankers,
    otherAdvisors,
    favoriteCharities,
    keyPersonnel,
  ]);

  // const [goals, setGoals] = useState([""]);

  const handleAddInput = () => {
    setGoals([...goals, ""]);
  };

  const handleInputChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  // const [concerns, setConcerns] = useState([""]);

  const handleAddConcernInput = () => {
    setConcerns([...concerns, ""]);
  };

  const handleInputConcernChange = (index, value) => {
    const newConcerns = [...concerns];
    newConcerns[index] = value;
    setConcerns(newConcerns);
  };

  // const [personalIncome, setPersonalIncome] = useState(false);
  // const [lastTwoYearsTaxReturn, setLastTwoYearsTaxReturn] = useState(false);
  // const [showPersonal, setShowPersonal] = useState(false);
  // const [showBusiness, setShowBusiness] = useState(false);

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

  // const [wills, setWills] = useState(false);
  // const [insurance, setInsurance] = useState(false);
  // const [showLife, setShowLife] = useState(false);
  // const [showProperty, setShowProperty] = useState(false);

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

  const handleSubmit = (id) => {
    // Send a PUT request to update existing data on the server
    axios
      .put(`http://localhost:5000/update_data/${id}`, {
        user: id,
        concerns,
        goals,
        cash_flow: cashFlow,
        portfolio: portfolio,
        legacy: legacy,
        names_of: namesOf,
      })
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        // If update is successful, handle the response as needed
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        // Handle error, show an error message to the user, etc.
      });
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Container maxWidth="md">
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box width={400}>
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
          <Box width={400}>
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
            control={
              <Checkbox
                checked={personalFinancialStatements}
                onChange={handlePersonalFinancialStatementsChange}
              />
            }
            label="Personal Financial Statements"
          />
          <FormControlLabel
            control={<Checkbox checked={k401} onChange={handle401kChange} />}
            label="401k"
          />
          <FormControlLabel
            control={
              <Checkbox checked={brokerage} onChange={handleBrokerageChange} />
            }
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
              control={
                <Checkbox checked={wills} onChange={handleWillsChange} />
              }
              label="Wills"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={insurance}
                  onChange={handleInsuranceChange}
                />
              }
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
          <Typography variant="h5" align="left" style={{ marginTop: "20px" }}>
            Names Of
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={accountants}
                    onChange={handleAccountantsChange}
                  />
                }
                label="Accountants"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={attorneys}
                    onChange={handleAttorneysChange}
                  />
                }
                label="Attorneys"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox checked={bankers} onChange={handleBankersChange} />
                }
                label="Bankers"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={otherAdvisors}
                    onChange={handleOtherAdvisorsChange}
                  />
                }
                label="Other Advisors"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={favoriteCharities}
                    onChange={handleFavoriteCharitiesChange}
                  />
                }
                label="Favorite Charities"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={keyPersonnel}
                    onChange={handleKeyPersonnelChange}
                  />
                }
                label="Key Personnel"
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit(user.nickname)}
        >
          Update
        </Button>
      </Container>
    </div>
  );
}

export default App2;
