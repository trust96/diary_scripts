export const formatDate = (date, options) => {
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    return formatter.format(date);
};
