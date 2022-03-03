import { Chip, ChipProps as MuiChipProps } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { getColor } from 'utils/getColor';

const instrumentsMock = [
  { name: 'EURUSD', count: 1 },
  { name: 'USDBTC', count: 2 },
  { name: 'USDJPY', count: 1 },
  { name: 'GBPUSD', count: 6 },
  { name: 'AUDUSD', count: 1 },
  { name: 'USDCHF', count: 3 },
  { name: 'USDCAD', count: 2 },
];

type ChipProps = {
  chipColor: ReturnType<typeof getColor>;
} & MuiChipProps;

const CustomizedChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'chipColor',
})<ChipProps>(({ theme, chipColor }) => ({
  margin: theme.spacing(1),
  backgroundColor: chipColor,
}));

export function InstrumentsHeatmap() {
  const navigate = useNavigate();
  const onClickHandler = (instrument: string) => () => {
    navigate(`/instruments/${instrument}`);
  };

  return (
    <Box>
      {instrumentsMock
        .sort((a, b) => b.count - a.count)
        .map((instrument) => (
          <CustomizedChip
            label={`${instrument.name} (${instrument.count})`}
            key={instrument.name}
            onClick={onClickHandler(instrument.name)}
            chipColor={getColor(instrument.count)}
          />
        ))}
    </Box>
  );
}
