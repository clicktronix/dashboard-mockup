import { Location } from 'react-router-dom';

type ExtendedLocation = Location & {
  state: {
    sensor: 'profitability' | 'close_volume';
  };
};

export function isLocationWithState(location: Location): location is ExtendedLocation {
  return (
    typeof location.state === 'object' &&
    location.state !== null &&
    'sensor' in location.state
  );
}
