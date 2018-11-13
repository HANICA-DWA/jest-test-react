import React from 'react'
import AddTodoItem from '../AddTodoItem'
import { renderer, shallow } from './testhelpers'

test('AddTodoItem adds fires addTodo onSubmit', () => {

  // mocked todos list
  const todos = []
  // mocked call for todos
  const addTodo = (todo) => {
    todos.push(todo)
  }
  // enzyme's shallow render, only renders one level deep
  const component = shallow(
    <AddTodoItem addTodo={addTodo} />
  )
  // simulate a submit action
  // we need to pass it some extra data
  // because this is not real DOM
  // it doesn't fire a regular DOM event
  component.simulate('submit', {
    preventDefault: () => { },
    target: {todo: { value: 'Hello'}}
  })
  // check the length of the mock after "submit"
  expect(todos.length).toBe(1)
})

test('AddTodoItem is rendered', () => {
  const comp = renderer.create(<AddTodoItem />)
  expect(comp.toJSON()).toMatchSnapshot();
})