import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';

function createData(sensor: string, date: string, count: number) {
  return { sensor, date, count };
}

const rows = [
  createData('Profitability', '16 Mar, 2022', 10),
  createData('Close volume', '16 Mar, 2022', 6),
];

export function SensorTable() {
  return (
    <MuiTable size="small">
      <MuiTableHead>
        <MuiTableRow>
          <MuiTableCell>Sensor</MuiTableCell>
          <MuiTableCell>Date</MuiTableCell>
          <MuiTableCell>Count</MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        {rows
          .sort((a, b) => b.count - a.count)
          .map((row) => (
            <MuiTableRow key={row.sensor}>
              <MuiTableCell>{row.sensor}</MuiTableCell>
              <MuiTableCell>{row.date}</MuiTableCell>
              <MuiTableCell>{row.count}</MuiTableCell>
            </MuiTableRow>
          ))}
      </MuiTableBody>
    </MuiTable>
  );
}
