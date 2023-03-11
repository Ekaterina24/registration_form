import React, { useContext } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { Typography } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import DisplayData from './DisplayData';
import FifthStep from './FifthStep';
import SixthStep from './SixthStep';
import SeventhStep from './SeventhStep';
import EighthStep from './EighthStep';
import NinthStep from './NinthStep';
import TenthStep from './TenthStep';

import { multiStepContext } from '../StepContext';

export default function RegistrationForm() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
      case 6:
        return <SixthStep />;
      case 7:
        return <SeventhStep />;
      case 8:
        return <EighthStep />;
      case 9:
        return <NinthStep />;
      case 10:
        return <TenthStep />;
    }
  }

  return (
    <div>
      <Typography textAlign={'center'} component="h1" variant="h5">
        Регистрация
      </Typography>

      <Stepper
        sx={{ my: 6, width: '75%', mx: 'auto' }}
        activeStep={currentStep - 1}
        orientation="horizontal"
      >
        {
          
        }
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
      {finalData.length > 0 ? <DisplayData /> : ''}
    </div>
  );
}
