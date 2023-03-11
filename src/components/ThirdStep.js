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

export default function ThirdStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <FormControl fullWidth="true" sx={{ m: 2 }}>
            <InputLabel id="demo-multiple-name-label">
              Тип населенного пункта
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={userData['type']}
              onChange={(e) =>
                setUserData({ ...userData, type: e.target.value })
              }
              input={<OutlinedInput label="Тип населенного пункта" />}
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
              Название населенного пункта
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={userData['locality']}
              onChange={(e) =>
                setUserData({ ...userData, locality: e.target.value })
              }
              input={<OutlinedInput label="Название населенного пункта" />}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth="true" sx={{ mt: 2 }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Адрес места жительства
            </InputLabel>
          </FormControl>
          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Улица"
            variant="outlined"
            value={userData['street']}
            onChange={(e) =>
              setUserData({ ...userData, street: e.target.value })
            }
          />
          <Box sx={{ m: 2 }} display="flex">
            <TextField
              id="outlined-basic"
              label="Дом"
              variant="outlined"
              sx={{ width: 100 }}
              value={userData['house']}
              onChange={(e) =>
                setUserData({ ...userData, house: e.target.value })
              }
            />

            <TextField
              id="outlined-basic"
              label="Квартира"
              variant="outlined"
              sx={{ width: 100, ml: 2 }}
              value={userData['apartment']}
              onChange={(e) =>
                setUserData({ ...userData, apartment: e.target.value })
              }
            />
          </Box>

          <FormControlLabel
            sx={{ m: 1 }}
            control={<Checkbox defaultChecked />}
            label="Являюсь жителем сельской местности"
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(2)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(4)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
