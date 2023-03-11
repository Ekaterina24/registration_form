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

export default function FourthStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <form display="grid" direction="column" alignItems="center">
          <FormControl fullWidth="true" sx={{ m: 2 }}>
            <InputLabel id="demo-multiple-name-label">
              Класс обучения
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Класс обучения" />}
              value={userData['class']}
              onChange={(e) =>
                setUserData({ ...userData, class: e.target.value })
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
              Название учреждения
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={userData['institution']}
              onChange={(e) =>
                setUserData({ ...userData, institution: e.target.value })
              }
              input={<OutlinedInput label="Название учреждения" />}
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
            label="Телефон учреждения"
            variant="outlined"
            value={userData['phone_institution']}
            onChange={(e) =>
              setUserData({ ...userData, phone_institution: e.target.value })
            }
          />

          <FormControl fullWidth="true" sx={{ mt: 2 }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Адрес учреждения
            </InputLabel>
          </FormControl>

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Индекс"
            variant="outlined"
            value={userData['index']}
            onChange={(e) =>
              setUserData({ ...userData, index: e.target.value })
            }
          />

          <TextField
            sx={{ m: 2 }}
            fullWidth={true}
            id="outlined-basic"
            label="Улица"
            variant="outlined"
            value={userData['street_institution']}
            onChange={(e) =>
              setUserData({ ...userData, street_institution: e.target.value })
            }
          />
          <Box sx={{ m: 2 }} display="flex">
            <TextField
              id="outlined-basic"
              label="Дом"
              variant="outlined"
              sx={{ width: 100 }}
              value={userData['house_institution']}
              onChange={(e) =>
                setUserData({ ...userData, house_institution: e.target.value })
              }
            />
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setCurrentStep(3)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(5)}
            >
              Далее
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
