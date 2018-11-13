import React from 'react'

const AddTodoItem = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
    props.addTodo({name: e.target.todo.value})
    e.target.todo.value = ""
  }

  return <form onSubmit={onSubmit}>
    <input name="todo" />
  </form>
}

export default AddTodoItem 