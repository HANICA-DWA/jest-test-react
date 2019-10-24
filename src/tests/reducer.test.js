import {
  myFakeReducer,
  increment,
  initialState,
  addTodo,
  asyncTodo
} from '../fakereducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const storeCreator = () => createStore(
  myFakeReducer,
  applyMiddleware(thunk)
);
 
test('test increment', () => {
  const initial = myFakeReducer()
  const expected = 1

  const result = myFakeReducer(initial, increment())
  expect(result.todoCount).toEqual(expected)
})

test('test add todo', () => {
  const store = storeCreator()
  const initial = store.getState()
  const todo = {
    name: "Auto wassen",
    id: initial.todoCount
  }
  const expected = [
    todo
  ]

  store.dispatch(addTodo(todo))
  const result = store.getState()
  
  expect(result.todos).toEqual(expected)
  expect(result.todos[0]).toEqual(todo)
  expect(result.todoCount).toEqual(1)
})

test('test async todo', async () => {
  expect.assertions(3) //
  const store = storeCreator()
  const initial = store.getState()
  const todo = {
    name: "Auto wassen",
    id: initial.todoCount
  }

  const expected = [
    todo
  ]

  await store.dispatch(asyncTodo(todo))
  const result = store.getState()

  expect(result.todos).toEqual(expected)
  expect(result.todos[0]).toEqual(todo)
  expect(result.todoCount).toEqual(1)
})
