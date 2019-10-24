import React from 'react';
import { connect } from 'react-redux'

import TodoItem from './TodoItem'
import AddTodoItem from './AddTodoItem'
import { addTodo } from './fakereducer'
import './App.css';

export function App (props) {
  return (
    <div className="App">
      <AddTodoItem addTodo={(e) => props.addTodo(e)} />
      {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
