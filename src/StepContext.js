import React, { useState } from 'react';
import App from './App';
import Box from '@mui/material/Box';

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

    function submitData() {
        setFinalData(finalData => [...finalData, userData])
      setUserData('')
      console.log(userData)
        setCurrentStep(1)
  }
  return (
    <Box>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </Box>
  );
};

export default StepContext;
