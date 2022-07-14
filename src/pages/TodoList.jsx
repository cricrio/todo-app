import { gql, useQuery } from '@apollo/client';
import Select from '../components/Select';
import TodoCard from '../components/TodoCard';
import { useFilterContext } from '../context/FilterContex';

const TODO_LIST_QUERY = gql`
  query getTodoList($filters: TodoFiltersInput, $orderBy: Ordering) {
    getTodoList(filters: $filters, orderBy: $orderBy) {
      id
      createdAt
      isDone
      title
      type
    }
  }
`;

const typeOptions = [
  { label: 'RH', value: 'RH' },
  { label: 'Tech', value: 'Tech' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Communication', value: 'Communication' },
];

const orderOptions = [
  { label: 'Date ascending', value: 'DATE_ASC' },
  { label: 'Date descending', value: 'DATE_DESC' },
];

const completionOptions = [
  { label: 'Done', value: true },
  { label: 'Not done', value: false },
  { label: 'All', value: 'ALL' },
];

const TodoList = () => {
  const { filters, orderBy, onChange } = useFilterContext();
  const { loading, error, data } = useQuery(TODO_LIST_QUERY, {
    variables: {
      filters: {
        ...(filters.types?.length ? { types: filters.types } : {}),
        ...(filters.isDone !== 'ALL' ? { isDone: filters.isDone } : {}),
      },
      ...(orderBy ? { orderBy } : {}),
      orderBy,
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const todos = data?.getTodoList?.map((todo) => (
    <TodoCard {...todo} key={todo.id} />
  ));

  return (
    <>
      <Select
        defaultValue={filters.types || typeOptions.map((t) => t.value)}
        options={typeOptions}
        onChange={onChange('types')}
        isMulti
      />
      <Select
        defaultValue={filters.isDone}
        options={completionOptions}
        onChange={onChange('isDone')}
      />
      <Select
        defaultValue={orderBy}
        options={orderOptions}
        onChange={onChange('orderBy')}
      />
      <button onClick={() => onChange('types')(['Marketing', 'Communication'])}>
        Only business
      </button>
      {todos}
    </>
  );
};

export default TodoList;
