import React from 'react'

const TodoItem = (props) => (
  <div>
    <span className="title">{props.todo.name}</span> - <span>id: {props.todo.id}</span>
  </div>
)

export default TodoItem