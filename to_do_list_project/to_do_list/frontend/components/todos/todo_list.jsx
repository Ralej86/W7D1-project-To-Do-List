import React from 'react';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render () {
    const todoItems = this.props.todos.map(todo => (
      <li key={todo.id}> {todo.title}</li>
    ));
    return (
      <div>
        <h3>Todo List goes here!</h3>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
