import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import { Chart } from 'components/Chart';
import { useParams } from 'react-router-dom';

const CustomizedPaper = styled(Paper)(() => ({
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  height: 300,
}));

export function SpecificDashboard() {
  const params = useParams();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5">{params.id}</Typography>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
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
                <MuiTableCell>Apply profit in BO</MuiTableCell>
              </MuiTableRow>
            </MuiTableHead>
          </MuiTable>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <CustomizedPaper>
          <Chart />
        </CustomizedPaper>
      </Grid>
      <Grid item xs={6}>
        <CustomizedPaper>
          <Chart />
        </CustomizedPaper>
      </Grid>
      <Grid item xs={6}>
        <CustomizedPaper>
          <Chart />
        </CustomizedPaper>
      </Grid>
    </Grid>
  );
}
