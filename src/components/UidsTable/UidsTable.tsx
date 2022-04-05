import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import { ProfitabilityAlert } from 'components/Dashboard/redux';
import { Link } from 'react-router-dom';
import { getColor } from 'utils/getColor';

type UidsTableProps = {
  isLoading: boolean;
  alerts?: ProfitabilityAlert[];
};

type TableRowProps = {
  rowColor: ReturnType<typeof getColor>;
} & MuiTableRowProps;

const CustomizedRow = styled(MuiTableRow, {
  shouldForwardProp: (prop) => prop !== 'rowColor',
})<TableRowProps>(({ theme, rowColor }) => ({
  margin: theme.spacing(1),
  backgroundColor: rowColor,
}));

export function UidsTable({ alerts = [], isLoading }: UidsTableProps) {
  return (
    <MuiTable size="small">
      <MuiTableHead>
        <MuiTableRow>
          <MuiTableCell>UUID</MuiTableCell>
          <MuiTableCell>Trades Count</MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        {isLoading ? (
          <CircularProgress sx={{ display: 'flex', margin: '20px auto' }} />
        ) : (
          alerts
            .slice()
            .sort((a, b) => b.tradesCount - a.tradesCount)
            .map((alert) => (
              <CustomizedRow key={alert.userUUID} rowColor={getColor(alert.tradesCount)}>
                <MuiTableCell>
                  <Link to={`/uuids/${alert.userUUID}`}>{alert.userUUID}</Link>
                </MuiTableCell>
                <MuiTableCell>{alert.tradesCount}</MuiTableCell>
              </CustomizedRow>
            ))
        )}
      </MuiTableBody>
    </MuiTable>
  );
}
