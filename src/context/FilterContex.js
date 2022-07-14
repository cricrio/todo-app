import { createContext, useCallback, useContext, useReducer } from 'react';

const reducerMap = {
  types: (state, action) => ({
    ...state,
    filters: { ...state.filters, types: action.payload },
  }),
  isDone: (state, action) => ({
    ...state,
    filters: { ...state.filters, isDone: action.payload },
  }),
  orderBy: (state, action) => ({
    ...state,
    orderBy: action.payload,
  }),
};

const reducer = (state = {}, action = {}) =>
  (reducerMap[action.type] || ((_, a) => console.warn(a) || state))(
    state,
    action
  );

const defaultState = {
  filters: {
    types: ['RH', 'Tech', 'Marketing', 'Communication'], // duplicated accross code => select's options
    isDone: 'ALL',
  },
  orderBy: 'DATE_DESC',
};

const FilterContext = createContext({
  ...defaultState,
  onChange: () => () => {},
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const onChange = useCallback(
    (type) => (payload) => dispatch({ type, payload }),
    [dispatch]
  );

  return (
    <FilterContext.Provider value={{ ...state, onChange }}>
      {children}
    </FilterContext.Provider>
  );
};
