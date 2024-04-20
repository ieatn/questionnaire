import React, { createContext, useContext, useState } from 'react';

// Create a single context for managing all form data
const FormContext = createContext();

// Define a custom hook to use the form context
export const useForm = () => useContext(FormContext);

// Form context provider component
export const FormProvider = ({ children }) => {
  const [concerns, setConcerns] = useState(['']);
  const [goals, setGoals] = useState(['']);


  const [personalIncome, setPersonalIncome] = useState(false);
  const [lastTwoYearsTaxReturn, setLastTwoYearsTaxReturn] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [business, setBusiness] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  const [personalFinancialStatements, setPersonalFinancialStatements] = useState(false);
  const [k401, set401k] = useState(false);
  const [brokerage, setBrokerage] = useState(false);
  const [llc, setLLC] = useState(false);

  const [wills, setWills] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [life, setLife] = useState(false)
  const [property, setProperty] = useState(false)
  const [showLife, setShowLife] = useState(true);
  const [showProperty, setShowProperty] = useState(true);


  const [accountants, setAccountants] = useState(false);
  const [attorneys, setAttorneys] = useState(false);
  const [bankers, setBankers] = useState(false);
  const [otherAdvisors, setOtherAdvisors] = useState(false);
  const [favoriteCharities, setFavoriteCharities] = useState(false);
  const [keyPersonnel, setKeyPersonnel] = useState(false);

  // Consolidate all state values into an object
  const formState = {
    concerns, setConcerns,
    goals, setGoals,
    personalIncome, setPersonalIncome,
    lastTwoYearsTaxReturn, setLastTwoYearsTaxReturn,
    showPersonal, setShowPersonal,
    showBusiness, setShowBusiness,
    personal, setPersonal,
    business, setBusiness,
    personalFinancialStatements, setPersonalFinancialStatements,
    k401, set401k,
    brokerage, setBrokerage,
    llc, setLLC,
    wills, setWills,
    insurance, setInsurance,
    life, setLife,
    property, setProperty,  
    showLife, setShowLife,
    showProperty, setShowProperty,
    accountants, setAccountants,
    attorneys, setAttorneys,
    bankers, setBankers,
    otherAdvisors, setOtherAdvisors,
    favoriteCharities, setFavoriteCharities,
    keyPersonnel, setKeyPersonnel
  };

  return (
    <FormContext.Provider value={formState}>
      {children}
    </FormContext.Provider>
  );
};
