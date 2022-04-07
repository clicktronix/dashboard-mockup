import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import { averageSelect } from 'components/Manipulator/redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getColor } from 'utils/getColor';

function createData(uuid: string, date: string, count: number) {
  return { uuid, date, count };
}

const rows = [
  createData('9351f696-962c-11ec-b909-0242ac120002', '16 Mar, 2022', 1),
  createData('9351fbdc-962c-11ec-b909-0242ac120002', '16 Mar, 2022', 3),
  createData('9351fe52-962c-11ec-b909-0242ac120002', '16 Mar, 2022', 6),
];

type TableRowProps = {
  rowColor: ReturnType<typeof getColor>;
} & MuiTableRowProps;

const CustomizedRow = styled(MuiTableRow, {
  shouldForwardProp: (prop) => prop !== 'rowColor',
})<TableRowProps>(({ theme, rowColor }) => ({
  margin: theme.spacing(1),
  backgroundColor: rowColor,
}));

export function UidsTable() {
  const average = useSelector(averageSelect);

  return (
    <MuiTable size="small">
      <MuiTableHead>
        <MuiTableRow>
          <MuiTableCell>UUID</MuiTableCell>
          <MuiTableCell>Date</MuiTableCell>
          <MuiTableCell>Count</MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        {rows
          .sort((a, b) => b.count - a.count)
          .map((row) => (
            <CustomizedRow key={row.uuid} rowColor={getColor(row.count, average)}>
              <MuiTableCell>
                <Link to={`/uuids/${row.uuid}`}>{row.uuid}</Link>
              </MuiTableCell>
              <MuiTableCell>{row.date}</MuiTableCell>
              <MuiTableCell>{row.count}</MuiTableCell>
            </CustomizedRow>
          ))}
      </MuiTableBody>
    </MuiTable>
  );
}
