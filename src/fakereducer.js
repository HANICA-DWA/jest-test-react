import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  todos: [],
  todoCount: 0
}

const defaultAction = {
  type: "NOT_IMPLEMENTED"
}

export function myFakeReducer (state = initialState, action = defaultAction) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      }
    case "INCREMENT":
      return {
        ...state,
        todoCount: (state.todoCount + 1)
      }
    default:
      return { ...state }
  }
}


export const increment = () => ({
  type: "INCREMENT"
})

export const todoAdder = (todo) => ({
  type: "ADD_TODO",
  payload: todo
})

export const addTodo = todo => 
  dispatch => {
    dispatch(todoAdder(todo))
    dispatch(increment())
  }

export const store = createStore(
  myFakeReducer,
  applyMiddleware(thunk)
);