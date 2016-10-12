/**
 * App
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Footer from './Footer.react';
import MainSection from './MainSection.react';
import TodoStore from '../stores/TodoStore';

/**
 * Retrieve the current TODO data from the TodoStore.
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
  // return {
  //   allTodos: {},
  //   areAllComplete: false
  // };
}

/**
 * App class
 */
class App extends Component {

  // Set default state
  state = getTodoState();

  handleChange = () => {
    this.setState(getTodoState());
  };

  // Component rendering complete
  componentDidMount() {
    TodoStore.addChangeListener(this.handleChange);
  }

  // Component will unmount
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.handleChange);
  }
  
  // render
  render() {
    return (
      <div>
        <Header />
        <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }

}

export default App;