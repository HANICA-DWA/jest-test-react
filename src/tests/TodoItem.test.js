import React from 'react'
import TodoItem from '../TodoItem'
import { renderer, shallow } from './testhelpers'

test('TodoItem should render', () => {
  const todo = {name: 'Auto wassen', id: 1}
  const comp = renderer.create(<TodoItem todo={todo} />)
  expect(comp.toJSON()).toMatchSnapshot()
  const instance = comp.root
  expect(instance.props.todo.name).toEqual(todo.name)
})
