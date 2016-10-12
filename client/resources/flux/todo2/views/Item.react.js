/**
 * Item 列表中的一项
 */
import React, { Component, PropTypes } from 'react';
import TextInput from './TextInput.react';
import TodoActions from '../actions/TodoActions';

// import cx from 'react/lib/cx';

class Item extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired
  };

  state = {
    isEditing: false
  };

  handleSubmit = (text) => {
    console.log('handleSubmit');
    //event.target.value
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({
      isEditing: false
    });
  };

  handleInputCheckChange = (event) => {
    console.log('handleInputCheckChange');
    TodoActions.toggleComplete(this.props.todo);
  };

  handleDoubleClick = () => {
    console.log('handleDoubleClick');
    this.setState({
      isEditing: true
    });
  };

  handleDistoryClick = (event) => {
    console.log('handleDistoryClick');
    TodoActions.destroy(this.props.todo.id);
  };

  render() {

    let todo = this.props.todo, input;

    if (this.state.isEditing) {
      input = <TextInput className="edit" onSubmit={this.handleSubmit} value={todo.text} />
    }

    return (
      <li key={todo.id} className={
        todo.complete ? 'completed' : '' && this.state.isEditing ? ' editing' : ''
      }>
        <div className='view'>
          <input type='checkbox' checked={todo.complete} onChange={this.handleInputCheckChange} className='toggle' />
          <lable onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </lable>
          <button className="destroy" onClick={this.handleDistoryClick}>delete</button>
        </div>
        {input}
      </li>
    );

  }

}

export default Item;