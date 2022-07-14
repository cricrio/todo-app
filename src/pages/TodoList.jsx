import { gql, useQuery } from '@apollo/client';
import TodoCard from '../components/TodoCard';

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

const TodoList = () => {
  const { loading, error, data } = useQuery(TODO_LIST_QUERY, {});

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return data?.getTodoList?.map((todo) => <TodoCard {...todo} key={todo.id} />);
};

export default TodoList;
