import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTablePagination from '@mui/material/TablePagination';
import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import { ProfitabilityAlert } from 'components/Dashboard/redux';
import { averageSelect } from 'components/Manipulator/redux';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getColor } from 'utils/getColor';

type UidsTableProps = {
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

export function UidsTable({ alerts = [] }: UidsTableProps) {
  const average = useSelector(averageSelect);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <MuiTableContainer>
      <MuiTable size="small">
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>UUID</MuiTableCell>
            <MuiTableCell>Trades Count</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {[...alerts]
            .sort((a, b) => b.tradesCount - a.tradesCount)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((alert) => (
              <CustomizedRow
                key={alert.id}
                rowColor={getColor(alert.tradesCount, average)}
              >
                <MuiTableCell>
                  <Link to={`/profitability/${alert.id}`}>{alert.userUUID}</Link>
                </MuiTableCell>
                <MuiTableCell>{alert.tradesCount}</MuiTableCell>
              </CustomizedRow>
            ))}
        </MuiTableBody>
      </MuiTable>
      <MuiTablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={alerts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </MuiTableContainer>
  );
}
