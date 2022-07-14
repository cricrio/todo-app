import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TodoCard from '../components/TodoCard';

const GET_TODO_QUERY = gql`
  query getTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      createdAt
      isDone
      title
    }
  }
`;

const TodoDetail = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_TODO_QUERY, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  const todo = data.getTodoById;
  return (
    <>
      <Link to='/'>Back</Link>
      <TodoCard {...todo} />
    </>
  );
};

export default TodoDetail;
