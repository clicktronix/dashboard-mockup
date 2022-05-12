import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';

type SensorTableProps = {
  profitabilityAlertsCount: number;
  closeVolumeAlertsCount: number;
  instrumentsCount: number;
};

export function SensorTable({
  profitabilityAlertsCount,
  closeVolumeAlertsCount,
  instrumentsCount,
}: SensorTableProps) {
  return (
    <MuiTable size="small">
      <MuiTableHead>
        <MuiTableRow>
          <MuiTableCell>Sensor</MuiTableCell>
          <MuiTableCell>Count</MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        <>
          <MuiTableRow>
            <MuiTableCell>Profitability alerts</MuiTableCell>
            <MuiTableCell>{profitabilityAlertsCount}</MuiTableCell>
          </MuiTableRow>
          <MuiTableRow>
            <MuiTableCell>Close Volume alerts</MuiTableCell>
            <MuiTableCell>{closeVolumeAlertsCount}</MuiTableCell>
          </MuiTableRow>
          <MuiTableRow>
            <MuiTableCell>Instruments</MuiTableCell>
            <MuiTableCell>{instrumentsCount}</MuiTableCell>
          </MuiTableRow>
        </>
      </MuiTableBody>
    </MuiTable>
  );
}
