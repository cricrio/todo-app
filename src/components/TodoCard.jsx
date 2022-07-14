import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import DateTime from './DateTime';

const Card = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: white;
  margin-bottom: 0.5rem; //should be done by the list
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoCard = ({ title, type, createdAt, isDone, id }) => (
  <Card>
    <Flex>
      <Link to={`/todo/${id}`}>{title}</Link>
      {type}
      <DateTime date={createdAt} />
      {isDone ? 'Done' : 'Not Done'}
    </Flex>
  </Card>
);

export default TodoCard;
