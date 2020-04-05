import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

// you will need a place to store your state in this component.
const toDo = [

];

// design `App` to be the parent component of your application.
class App extends React.Component {
  
  
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDo,
      newItem: ''
    }
  }    
  

  toggleItem = clickedId => {
    const newToDo = this.state.toDoList.map( item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      toDoList: newToDo
    });
  }

  // Remove completed
  removeTodo = () => {
    const newToDo = this.state.toDoList.filter( item => 
      item.completed < 1
    )

    this.setState({
      toDoList: newToDo
    })

  }

    // Adds new object to the array
    addNewItem = itemText => {
      const newItem = {
        task: itemText,
        id: Date.now(),
        completed: false
      }

      this.setState({
        toDoList: [...this.state.toDoList, newItem]
      })
    }

    handleChanges = e => {
      this.setState({
          newItem: e.target.value
      });
  };

  handleSubmit = e => {
      e.preventDefault();
      this.addNewItem(this.state.newItem);
      this.setState({ newItem: '' });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        <ToDoForm 
        addNewItem={this.addNewItem} 
        handleChanges={this.handleChanges}
        handleSubmit={this.handleSubmit}
        deleteTodo={this.removeTodo}
        />
        </div>
        <ToDoList
          toDo={this.state.toDoList}
          toggleItem={this.toggleItem}
          />
      </div>
    );
  }
}
export default App;