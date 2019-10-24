export const initialState = {
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
        todos: state.todos.concat({...action.payload, id: state.todoCount + 1})
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

const promiseTimeout = (cb, delay) => new Promise((resolve)=> {
  setTimeout(() => {
    resolve(cb())
  }, delay)
})

export const asyncTodo = todo => dispatch => {
  return promiseTimeout(() => dispatch(addTodo(todo)), 2000)
}
