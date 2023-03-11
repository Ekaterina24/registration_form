import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { multiStepContext } from '../StepContext';

export default function EighthStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="ФИО учителя"
            value={userData['fio_teacher']}
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, fio_teacher: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Email учителя"
            value={userData['email_teacher']}
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, email_teacher: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Номер учителя"
            variant="outlined"
            value={userData['phone_teacher']}
            onChange={(e) =>
              setUserData({ ...userData, phone_teacher: e.target.value })
            }
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(7)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(9)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
