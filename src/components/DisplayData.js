import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { multiStepContext } from '../StepContext';

export default function DisplayData() {
    const { finalData } = useContext(multiStepContext);
    console.log(finalData)
  return (
    <TableContainer sx={{mt: 4}} component={Paper}>
      <Table sx={{ width: '75%', mx: 'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="right">Фамилия</TableCell>
            <TableCell align="right">Отчество</TableCell>
            <TableCell align="right">Дата рождения</TableCell>
            <TableCell align="right">Номер телефона</TableCell>
            <TableCell align="right">Страна</TableCell>
            <TableCell align="right">Федеральный округ</TableCell>
            <TableCell align="right">Субъект РФ</TableCell>
            <TableCell align="right">Почтовый индекс</TableCell>
            <TableCell align="right">Тип населенного пункта</TableCell>
            <TableCell align="right">Название населенного пункта</TableCell>
            <TableCell align="right">Улица</TableCell>
            <TableCell align="right">Дом</TableCell>
            <TableCell align="right">Квартира</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((data) => (
            <TableRow
              key={data.phone}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.firstname}
              </TableCell>
              <TableCell align="right">{data.lastname}</TableCell>
              <TableCell align="right">{data.surname}</TableCell>
              <TableCell align="right">{data.date}</TableCell>
              <TableCell align="right">{data.phone}</TableCell>
              <TableCell align="right">{data.country}</TableCell>
              <TableCell align="right">{data.district}</TableCell>
              <TableCell align="right">{data.subject}</TableCell>
              <TableCell align="right">{data.postcode}</TableCell>
              <TableCell align="right">{data.type}</TableCell>
              <TableCell align="right">{data.locality}</TableCell>
              <TableCell align="right">{data.street}</TableCell>
              <TableCell align="right">{data.house}</TableCell>
              <TableCell align="right">{data.apartment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
