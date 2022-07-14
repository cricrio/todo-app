export const transformDate = (format) => (date) =>
  new Intl.DateTimeFormat(format).format(new Date(date));
