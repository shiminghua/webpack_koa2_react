/**
 * Footer
 */
import React, { Component, PropTypes } from 'react';
import TodoActions from '../actions/TodoActions';

class Footer extends Component {

  static propTypes = {
    allTodos: PropTypes.object.isRequired
  };

  handleCompletedClick = (event) => {
    TodoActions.destroyCompleted();
    console.log('handleCompletedClick');
  };

  render() {

    let allTodos = this.props.allTodos;
    let total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;

    for (let key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    let itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item' : ' items';
    itemsLeftPhrase += 'left';

    // Undefined and thus not rendered if no completed items are left.
    let clearCompletedButton;
    if (completed) {
      clearCompletedButton = <button id='clear-completed' onClick={this.handleCompletedClick}>Clear completed ({completed})</button>;
    }

    return (
      <footer id='footer'>
        <span id='todo-count'><strong>{itemsLeft}</strong>{itemsLeftPhrase}</span>
        {clearCompletedButton}
      </footer>
    );

  }

}

export default Footer;