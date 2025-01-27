/* eslint-disable react/prop-types */
const SingleTodo = ({
  id,
  isCompleted,
  todo,
  deleteTodo,
  editTodo,
  todoCompleted,
}) => {
  return (
    <div className='single-todo'>
      <section
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <input
          type='checkbox'
          name='isCompleted'
          id='isCompleted'
          checked={isCompleted}
          onChange={() => todoCompleted(id)}
        />
        <p
          style={{
            textDecoration: isCompleted ? 'line-through' : 'none',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          {todo}
        </p>
      </section>
      <section
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <p onClick={() => editTodo(id)}>📝</p>
        <p onClick={() => deleteTodo(id)}>❌</p>
      </section>
    </div>
  );
};

export default SingleTodo;
