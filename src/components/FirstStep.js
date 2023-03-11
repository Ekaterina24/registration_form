import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { multiStepContext } from '../StepContext';

export default function FirstStep() {
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
            label="Имя"
            variant="outlined"
            value={userData['firstname']}
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Фамилия"
            variant="outlined"
            value={userData['lastname']}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Отчество"
            variant="outlined"
            value={userData['surname']}
            onChange={(e) =>
              setUserData({ ...userData, surname: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Дата рождения"
            variant="outlined"
            value={userData['date']}
            onChange={(e) => setUserData({ ...userData, date: e.target.value })}
          />
          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Номер телефона"
            variant="outlined"
            value={userData['phone']}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(2)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
