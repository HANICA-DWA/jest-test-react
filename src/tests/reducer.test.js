import { myFakeReducer, increment, addTodo, store } from '../fakereducer'


test('test increment', () => {
  const initial = myFakeReducer()
  const expected = 1

  const result = myFakeReducer(initial, increment())
  expect(result.todoCount).toEqual(expected)
})

test('test add todo', () => {
  const initial = myFakeReducer()
  const todo = {name: "Auto wassen", id: initial.todoCount}
  const expected = [
    todo
  ]

  store.dispatch(addTodo(todo))
  const result = store.getState()
  
  expect(result.todos).toEqual(expected)
  expect(result.todos[0]).toEqual(todo)
  expect(result.todoCount).toEqual(1)
})