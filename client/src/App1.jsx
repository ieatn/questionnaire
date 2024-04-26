import React, { useState, useEffect } from "react";
import PrimaryConcerns from "./components/PrimaryConcerns";
import PrimaryGoals from "./components/PrimaryGoals";
import CashFlow from "./components/CashFlow";
import Portfolio from "./components/Portfolio";
import Legacy from "./components/Legacy";
import NamesOf from "./components/NamesOf";
import SubmittedBox from "./components/SubmittedBox";
import { Button, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import axios from "axios";
import { useForm } from "./contexts/FormContext"; // Import the useForm hook
import { Link } from "react-router-dom";
import App2 from "./App2";
import LogoutButton from "./auth/LogoutButton";
import Profile from "./auth/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App1() {
  const { user, isAuthenticated } = useAuth0();

  const [step, setStep] = useState(1); // Track the current step, start from step 1 (concerns)
  const steps = [
    "PrimaryConcerns",
    "PrimaryGoals",
    "CashFlow",
    "Portfolio",
    "Legacy",
    "NamesOf",
    "Review",
    "Finished!",
  ];

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

  // useEffect(() => {
  //   // Update cashFlow whenever any of its dependencies change
  //   setCashFlow({
  //     "personalIncome": personalIncome,
  //     "lastTwoYearsTaxReturn": lastTwoYearsTaxReturn,
  //     "personal": personal,
  //     "business": business,
  //     "showPersonal": personal,
  //     "showBusiness": business
  //   });
  // }, [personalIncome, lastTwoYearsTaxReturn, personal, business]);

  // useEffect(() => {
  //   console.log(cashFlow);
  // }, [cashFlow]);

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

  const handleNext = () => {
    setStep(step + 1); // Move to the next step
  };
  const handleBack = () => {
    setStep(step - 1); // Move to the previous step
  };
  const handleReset = () => {
    setStep(0);
  };

  const handleSelect = (selectedStep) => {
    if (selectedStep === steps.length - 1) {
      return;
    }

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
      content = <App2 />;
      break;
    case 8:
      content = <SubmittedBox />;
    default:
      content = null;
  }


















































  useEffect(() => {
    // Make an HTTP GET request to the Flask server
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log(response.data); // Log the response data (the "hello world" message)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run only once when the component mounts


  useEffect(() => {
    axios
      .get("http://localhost:5000/submit_data")
      .then((response) => {
        const data = response.data;
        if (data.concerns.length === 0) {
          // If no data is returned, set default values for states
          setConcerns(['']);
          setGoals(['']);
          setPersonalIncome(false);
          setLastTwoYearsTaxReturn(false);
        } else {
          setConcerns(data.concerns);
          setGoals(data.goals);

          const cashFlowJson = JSON.parse(data.cash_flow[0].replace(/True/g, 'true').replace(/False/g, 'false').replace(/'/g, '"'))
          setPersonalIncome(cashFlowJson.personalIncome)
          setLastTwoYearsTaxReturn(cashFlowJson.lastTwoYearsTaxReturn)
          setPersonal(cashFlowJson.personal)
          setBusiness(cashFlowJson.business)
          setShowPersonal(cashFlowJson.showPersonal)
          setShowBusiness(cashFlowJson.showBusiness)

          const portfolioJson = JSON.parse(data.portfolio[0].replace(/True/g, 'true').replace(/False/g, 'false').replace(/'/g, '"'))
          setPersonalFinancialStatements(portfolioJson.personalFinancialStatements)
          set401k(portfolioJson.k401)
          setBrokerage(portfolioJson.brokerage)
          setLLC(portfolioJson.llc)

          const legacyJson = JSON.parse(data.legacy[0].replace(/True/g, 'true').replace(/False/g, 'false').replace(/'/g, '"'))
          setWills(legacyJson.wills)
          setInsurance(legacyJson.insurance)
          setLife(legacyJson.life)
          setShowLife(legacyJson.showLife)
          setProperty(legacyJson.property)
          setShowProperty(legacyJson.showProperty)

          const namesOfJson = JSON.parse(data.names_of[0].replace(/True/g, 'true').replace(/False/g, 'false').replace(/'/g, '"'))
          setAccountants(namesOfJson.accountants)
          setAttorneys(namesOfJson.attorneys)
          setBankers(namesOfJson.bankers)
          setOtherAdvisors(namesOfJson.otherAdvisors)
          setFavoriteCharities(namesOfJson.favoriteCharities)
          setKeyPersonnel(namesOfJson.keyPersonnel)

        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



























  







  const handleSubmit = () => {
    // Send a POST request to the server to save the form data
    axios
      .post("http://localhost:5000/submit_data", {
        concerns,
        goals,
        cash_flow: cashFlow,
        portfolio: portfolio,
        legacy: legacy,
        names_of: namesOf,
      })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        // If submission is successful, move to the next step
        handleNext();
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        // Handle error, show an error message to the user, etc.
      });
  };

  return (
    <>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            onClick={() => handleSelect(index)}
            style={{ cursor: "pointer" }}
          >
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {step < 8 ? (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
            {step === 7 ? (
              <Link to="/submitted" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Link>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </>
        ) : null}

        <div style={{ position: "fixed", top: "10px", right: "10px" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            {isAuthenticated ? (
              <div className="profile-img">
                <img src={user.picture} alt={user.name} />
              </div>
            ) : null}
            <button>Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App1;
