import React from 'react'

const TodoItem = (props) => (
  <div>
    <span className="title">{props.todo.name}</span> - <span>{props.todo.id}</span>
  </div>
)

export default TodoItem