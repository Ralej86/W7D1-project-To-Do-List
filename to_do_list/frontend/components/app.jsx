import React from 'react';
import ToDoListContainer from './todos/todo_list_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Getterdun</h1>
      <ToDoListContainer />
    </div>
    );
  }
}

export default App;
