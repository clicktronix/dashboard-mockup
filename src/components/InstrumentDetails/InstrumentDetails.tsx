import { Box, Typography } from '@mui/material';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import { Trade } from 'services/api/types/responses';
import { d } from 'utils/dateTime';

type InstrumentDetailsProps = {
  data?: Details;
};

type Details = {
  comment: string;
  config: Record<string, string | number>;
  description: string;
  fromTime: string;
  id: string;
  sumLotsValue: number;
  symbol: string;
  timeEmitted: string;
  toTime: string;
  trades: Trade[];
  tradesCount: number;
  typeOperation: string;
};

// This is a temporary component
// We are waiting for a backend comparable with profitability to appear
export function InstrumentDetails({ data }: InstrumentDetailsProps) {
  if (!data) {
    return (
      <Box>
        <Typography sx={{ display: 'flex', margin: '50px auto' }}>
          Data is empty
        </Typography>
      </Box>
    );
  }

  return (
    <MuiTable size="small">
      <MuiTableHead>
        <MuiTableRow>
          <MuiTableCell>ID</MuiTableCell>
          <MuiTableCell>Symbol</MuiTableCell>
          <MuiTableCell>Operation</MuiTableCell>
          <MuiTableCell>Trades count</MuiTableCell>
          <MuiTableCell>Lots value</MuiTableCell>
          <MuiTableCell>Comment</MuiTableCell>
          <MuiTableCell>Time Emitted</MuiTableCell>
          <MuiTableCell>Description</MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        <MuiTableRow>
          <MuiTableCell>{data.id}</MuiTableCell>
          <MuiTableCell>{data.symbol}</MuiTableCell>
          <MuiTableCell>{data.typeOperation}</MuiTableCell>
          <MuiTableCell>{data.tradesCount}</MuiTableCell>
          <MuiTableCell>{data.sumLotsValue}</MuiTableCell>
          <MuiTableCell>{data.comment}</MuiTableCell>
          <MuiTableCell>{d(data.timeEmitted).format('DD/MM/YYYY')}</MuiTableCell>
          <MuiTableCell>{data.description}</MuiTableCell>
        </MuiTableRow>
      </MuiTableBody>
    </MuiTable>
  );
}
