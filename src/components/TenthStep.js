import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function TenthStep() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth="sm">
        <Typography textAlign="center" variant="h3">
          Вы успешно прошли регистрацию в системе!
        </Typography>
        <Box sx={{ mt: 4 }} display="flex" justifyContent="center">
          <Button variant="contained" color="primary">
            На главную
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
