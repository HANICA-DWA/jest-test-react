import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem'
import AddTodoItem from './AddTodoItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoAmount: 0
    }
  }

  addTodoItem (todo) {
    todo.id = this.state.todoAmount
    console.log(todo)
    this.setState({
      todos: this.state.todos.concat(todo),
      todoAmount: this.state.todoAmount + 1
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodoItem addTodo={(e) => this.addTodoItem(e)} />
        {this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    );
  }
}

export default App;
