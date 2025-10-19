export const getDiaryEntry = (args) => {
    const { day, month, year } = args;
    return `
  ### ${day} ${month} ${year}
`;
};
