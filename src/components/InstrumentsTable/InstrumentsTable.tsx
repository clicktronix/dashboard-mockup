import { Grid } from '@mui/material';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTablePagination from '@mui/material/TablePagination';
import MuiTableRow from '@mui/material/TableRow';
import { datePeriodParamsSelect } from 'components/Manipulator/redux';
import { Tile } from 'components/shared/Tile';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetCloseVolumeInstrumentQuery } from 'services/api';
import { useQuery } from 'utils/hooks/useQuery';

export function InstrumentsTable() {
  const { instrument = '' } = useParams();
  const query = useQuery();
  const datePeriodParams = useSelector(datePeriodParamsSelect);
  const { data = [], isFetching } = useGetCloseVolumeInstrumentQuery({
    limit: query.get('limit') || '',
    id: instrument,
    period: datePeriodParams,
  });
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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Tile isFetching={isFetching} title={instrument} withReturn />
      </Grid>
      <Grid item xs={12}>
        <Tile isFetching={isFetching}>
          <MuiTableContainer>
            <MuiTable size="small">
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
                        <Link to={`/close_volume/${alert.id}`}>{alert.id}</Link>
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
      </Grid>
    </Grid>
  );
}
