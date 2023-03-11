import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { multiStepContext } from '../StepContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function SixthStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <FormControl fullWidth="true" sx={{ mt: 3 }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Чем вызвано мое решение принять участие в олимпиаде?
            </InputLabel>
          </FormControl>

          <TextField
            sx={{ my: 3, ml: 2 }}
            id="outlined-multiline-static"
            multiline
            fullWidth={true}
            rows={4}
            defaultValue=""
          />

          <FormControl fullWidth="true" sx={{ mt: 3 }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Почему меня интересует сфера финансов?
            </InputLabel>
          </FormControl>

          <TextField
            sx={{ my: 3, ml: 2 }}
            id="outlined-multiline-static"
            multiline
            fullWidth={true}
            rows={4}
            defaultValue=""
          />

          <FormControl fullWidth="true" sx={{ mt: 3 }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Источник информации об олимпиаде
            </InputLabel>
          </FormControl>

          <TextField
            sx={{ my: 3, ml: 2 }}
            id="outlined-multiline-static"
            multiline
            fullWidth={true}
            rows={4}
            defaultValue=""
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(5)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(7)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
