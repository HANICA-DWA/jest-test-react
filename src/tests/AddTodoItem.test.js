import React from 'react'
import AddTodoItem from '../AddTodoItem'
import { renderer, shallow } from './testhelpers'

test('AddTodoItem adds fires addTodo onSubmit', () => {
  const todos = []
  const addTodo = (todo) => {
    todos.push(todo)
  }
  const component = shallow(
    <AddTodoItem addTodo={addTodo} />
  )
  component.simulate('submit', {
    preventDefault: () => { },
    target: {todo: { value: 'Hello'}}
  })
  expect(todos.length).toBe(1)
})

test('AddTodoItem is rendered', () => {
  const comp = renderer.create(<AddTodoItem />)
  expect(comp.toJSON()).toMatchSnapshot();
})