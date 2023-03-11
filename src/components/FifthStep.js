import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { multiStepContext } from '../StepContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function FifthStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <FormControlLabel
            sx={{ m: 1 }}
            control={<Checkbox />}
            label="Имею статус ребенка-сироты"
          />

          <FormControlLabel
            sx={{ m: 1 }}
            control={<Checkbox defaultChecked />}
            label="Являюсь лицом с ограниченными возможностями здоровья"
          />

          <FormControl fullWidth="true" sx={{ mt: 3 }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Членство в детско-юношеских организациях, движениях и
              пр.(наименование)
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
              onClick={() => setCurrentStep(4)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(6)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
