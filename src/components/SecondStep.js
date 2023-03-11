import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

export default function SecondStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <FormControl fullWidth="true" sx={{ m: 2 }}>
            <InputLabel id="demo-multiple-name-label">Страна</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Страна" />}
              value={userData['country']}
              onChange={(e) =>
                setUserData({ ...userData, country: e.target.value })
              }
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth="true" sx={{ m: 2 }}>
            <InputLabel id="demo-multiple-name-label">
              Федеральный округ
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={userData['district']}
              onChange={(e) =>
                setUserData({ ...userData, district: e.target.value })
              }
              input={<OutlinedInput label="Федеральный округ" />}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth="true" sx={{ m: 2 }}>
            <InputLabel id="demo-multiple-name-label">Субъект РФ</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={userData['subject']}
              onChange={(e) =>
                setUserData({ ...userData, subject: e.target.value })
              }
              input={<OutlinedInput label="Субъект РФ" />}
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
            label="Почтовый индекс"
            variant="outlined"
            value={userData['postcode']}
            onChange={(e) =>
              setUserData({ ...userData, postcode: e.target.value })
            }
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(1)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(3)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
