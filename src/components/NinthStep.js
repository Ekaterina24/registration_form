import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { multiStepContext } from '../StepContext';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function NinthStep() {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

//   const handleClick= e => {
//     submitData;
//     setCurrentStep(10);
//   };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            value={userData['email']}
            variant="outlined"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <FormControl fullWidth="true" sx={{ m: 2 }}>
            <InputLabel id="demo-multiple-name-label">Роль</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={userData['role']}
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
              input={<OutlinedInput label="Роль" />}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Пароль"
            variant="outlined"
            value={userData['password']}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Повторите пароль"
            variant="outlined"
            value={userData['repeat_password']}
            onChange={(e) =>
              setUserData({ ...userData, repeat_password: e.target.value })
            }
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(8)}
            >
              Назад
            </Button>
            <Button variant="contained" color="primary" onClick={() => {submitData();setCurrentStep(10);}}>
              Отправить
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
