export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) => {
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  return formatter.format(date);
};
