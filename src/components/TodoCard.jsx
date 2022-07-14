const TodoCard = ({ title, type, createdAt, isDone }) => (
  <div>
    <div>
      {{ title }} - {{ type }} - {{ createdAt }} - {{ isDone }}
    </div>
  </div>
);
