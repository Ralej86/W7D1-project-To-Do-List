import React from 'react';
import uniqueID from '../../util/id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueID() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
      done: false
    });
  }

  render() {
    return (
      <form className = "todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className = "input"
            value={this.state.title}
            placeholder="play fortnite"
            onChange={this.update('title')}
            required
            />
        </label>
        <label>Body:
          <input
            className = "input"
            value={this.state.body}
            placeholder="on the console or pc?"
            onChange={this.update('body')}
            required
            />
        </label>
        <button className="todo-form-button">Create Todo</button>
      </form>
    );

  }
}

export default TodoForm;
