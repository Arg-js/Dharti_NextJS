const getComma = ({ length, index }: { length: number; index: number }) => {
  return length - 1 > index ? ',' : '';
};

export { getComma };
