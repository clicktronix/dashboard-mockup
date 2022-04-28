import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTablePagination from '@mui/material/TablePagination';
import MuiTableRow from '@mui/material/TableRow';
import { Tile } from 'components/shared/Tile';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseVolumeAlertResponse } from 'services/api/types/responses';

type InstrumentsTableProps = {
  data: CloseVolumeAlertResponse[];
  isFetching: boolean;
};

export function InstrumentsTable({ data, isFetching = false }: InstrumentsTableProps) {
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
    <Tile isFetching={isFetching}>
      <MuiTableContainer>
        <MuiTable>
          <MuiTableHead>
            <MuiTableRow>
              <MuiTableCell>ID</MuiTableCell>
              <MuiTableCell>Symbol</MuiTableCell>
              <MuiTableCell>Operation</MuiTableCell>
              <MuiTableCell>Trades count</MuiTableCell>
              <MuiTableCell>Lots</MuiTableCell>
              <MuiTableCell>Description</MuiTableCell>
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((alert) => (
                <MuiTableRow key={alert.id}>
                  <MuiTableCell>
                    <Link to={`/uuid/${alert.id}`} state={{ sensor: 'close_volume' }}>
                      {alert.id}
                    </Link>
                  </MuiTableCell>
                  <MuiTableCell>{alert.symbol}</MuiTableCell>
                  <MuiTableCell>{alert.typeOperation}</MuiTableCell>
                  <MuiTableCell>{alert.tradesCount}</MuiTableCell>
                  <MuiTableCell>{alert.sumLotsValue}</MuiTableCell>
                  <MuiTableCell>{alert.description}</MuiTableCell>
                </MuiTableRow>
              ))}
          </MuiTableBody>
        </MuiTable>
        <MuiTablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </MuiTableContainer>
    </Tile>
  );
}
