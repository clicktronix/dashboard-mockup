import { Box, Link, Typography } from '@mui/material';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import { CONFIG } from 'core/config';
import { ProfitabilityAlertResponse } from 'services/api/types/responses';

type MetricsTableProps = {
  sensor: string;
  data?: ProfitabilityAlertResponse;
};

export function MetricsTable({ data, sensor }: MetricsTableProps) {
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
          <MuiTableCell>UUID</MuiTableCell>
          <MuiTableCell>REG Date</MuiTableCell>
          <MuiTableCell>Logins</MuiTableCell>
          <MuiTableCell>Country</MuiTableCell>
          <MuiTableCell>Con. search link</MuiTableCell>
          <MuiTableCell>Toxicity score</MuiTableCell>
          <MuiTableCell>Total profit</MuiTableCell>
          <MuiTableCell>Profitability score</MuiTableCell>
          <MuiTableCell>Deposit</MuiTableCell>
          <MuiTableCell>INT Transfers</MuiTableCell>
          <MuiTableCell>Trade stats</MuiTableCell>
          <MuiTableCell>Status</MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        <MuiTableRow>
          <MuiTableCell>{data.userUUID}</MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
          <MuiTableCell>
            <Link href="https://client-search.afc.exness.io/">search</Link>
          </MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
          <MuiTableCell>{data.fullProfitValue?.toFixed(2)}</MuiTableCell>
          <MuiTableCell>{data.profitabilityValue}</MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
          <MuiTableCell>
            <Link href={`${CONFIG.baseUrl}/v1/sensors/${sensor}/alert/${data.id}/report`}>
              status
            </Link>
          </MuiTableCell>
          <MuiTableCell>-</MuiTableCell>
        </MuiTableRow>
      </MuiTableBody>
    </MuiTable>
  );
}
