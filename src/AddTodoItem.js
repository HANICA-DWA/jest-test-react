import React, { useState } from 'react'

const AddTodoItem = (props) => {
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    props.addTodo({name: name})
    setName('')
  }

  return <form onSubmit={onSubmit}>
    <input
      name="todo"
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Type a todo and press Enter.."
    />
  </form>
}

export default AddTodoItem 