import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { multiStepContext } from '../StepContext';

export default function SeventhStep() {
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
            label="ФИО одного из родителей/опекуна"
            value={userData['fio_guardian']}
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, fio_guardian: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Email одного из родителей/опекуна"
            value={userData['email_guardian']}
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, email_guardian: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Номер одного из родителей/опекуна"
            variant="outlined"
            value={userData['phone_guardian']}
            onChange={(e) =>
              setUserData({ ...userData, phone_guardian: e.target.value })
            }
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(6)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(8)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
