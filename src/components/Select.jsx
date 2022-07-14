import ReactSelect from 'react-select';

const Select = ({ isMulti, defaultValue, options, onChange }) => {
  const _onChange = isMulti
    ? (value) => onChange(value.map(({ value }) => value))
    : ({ value }) => onChange(value);

  const _defaultValue = isMulti
    ? options.filter((o) => defaultValue?.includes(o.value))
    : options.find((o) => defaultValue === o.value);

  return (
    <ReactSelect
      options={options}
      onChange={_onChange}
      defaultValue={_defaultValue}
      isMulti={isMulti}
    />
  );
};

export default Select;
