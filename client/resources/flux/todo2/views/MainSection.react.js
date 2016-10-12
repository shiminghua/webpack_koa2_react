/**
 * MainSection
 */
import React, { Component, PropTypes } from 'react';
import Item from './Item.react';
import TodoActions from '../actions/TodoActions';


class MainSection extends Component {

  // 
  static propTypes = {
    allTodos: PropTypes.object.isRequired,
    areAllComplete: PropTypes.bool.isRequired
  };

  handleToggleCompleteAll = () => {
    console.log('handleToggleCompleteAll');
    TodoActions.toggleCompleteAll();
  };

  // render
  render() {

    // This section should be hidden by default
    // and shown when there are TODOs.
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    let allTodos = this.props.allTodos;
    let todos = [];

    for (let key in allTodos) {
      todos.push(<Item key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="main">
        <input id="toggle-all" type="checkbox" onChange={this.handleToggleCompleteAll} checked={this.props.areAllComplete ? 'checked': ''} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );

  }

}

export default MainSection;