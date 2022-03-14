export const getSize = (count: number) => {
  if (count < 2) {
    return 0.85;
  } else if (count < 5) {
    return 1;
  } else {
    return 1.15;
  }
};
