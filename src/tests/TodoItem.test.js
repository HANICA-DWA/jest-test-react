import React from 'react'
import TodoItem from '../TodoItem'
import { renderer, shallow } from './testhelpers'

test('TodoItem should render', () => {
  // create a mock
  const todo = {name: 'Auto wassen', id: 1}

  // render the component with the mock
  const comp = renderer.create(<TodoItem todo={todo} />)
  expect(comp.toJSON()).toMatchSnapshot()

  // grab the root to compare the todos
  const root = comp.root
  expect(root.props.todo.name).toEqual(todo.name)
})