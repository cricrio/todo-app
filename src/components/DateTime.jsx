const DateTime = ({ date }) => {
  return <span>{new Intl.DateTimeFormat('en-GB').format(new Date(date))}</span>;
};

export default DateTime;
