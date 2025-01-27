/* eslint-disable react/prop-types */
import React from 'react';
import SingleTodo from './SingleTodo';

const TodoList = ({ list, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div>
      {list.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleTodo
              {...item}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              todoCompleted={toggleComplete}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default TodoList;
