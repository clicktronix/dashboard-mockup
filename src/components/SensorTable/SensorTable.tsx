import { Box, CircularProgress } from '@mui/material';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import { CloseVolumeAlert, ProfitabilityAlert } from 'components/Dashboard/redux';

type SensorTableProps = {
  isLoading: boolean;
  profitabilityAlerts?: ProfitabilityAlert[];
  closeVolumeAlerts?: CloseVolumeAlert[];
};

export function SensorTable({
  isLoading,
  profitabilityAlerts,
  closeVolumeAlerts,
}: SensorTableProps) {
  if (isLoading) {
    return (
      <Box>
        <CircularProgress sx={{ display: 'flex', margin: '20px auto' }} />
      </Box>
    );
  }

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
            <MuiTableCell>{profitabilityAlerts?.length}</MuiTableCell>
          </MuiTableRow>
          <MuiTableRow>
            <MuiTableCell>Close Volume alerts</MuiTableCell>
            <MuiTableCell>{closeVolumeAlerts?.length}</MuiTableCell>
          </MuiTableRow>
        </>
      </MuiTableBody>
    </MuiTable>
  );
}
