import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
      <span>{createdAt}</span>
      {isDone ? 'Done' : 'Not Done'}
    </Flex>
  </Card>
);

export default TodoCard;

TodoCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['RH', 'Tech', 'Marketing', 'Communication']),
  createdAt: PropTypes.string,
};
