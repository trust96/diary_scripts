type TDiaryEntryParams = {
  day: string;
  month: string;
  year: string;
};

export const getDiaryEntry = (args: TDiaryEntryParams) => {
  const { day, month, year } = args;
  return `
  ### ${day} ${month} ${year}
`;
};
