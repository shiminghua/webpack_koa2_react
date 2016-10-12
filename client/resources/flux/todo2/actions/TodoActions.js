/**
 * TodoActions
 */
import Dispatcher from '../dispatchers/dispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodoActions {

  /**
   * @param {string} text
   */
  create(text) {
    Dispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  }

  /**
   * @param {string} id The ID of the TODO item
   * @param {string} text
   */
  updateText(id, text) {
    Dispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  }

  /**
   * Toggle whether a single TODO is complete
   * @param {object} todo
   */
  toggleComplete(todo) {
    let id = todo.id;
    let actionType = todo.complete ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE;
    Dispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  }

  /**
   * Mark all TODOs as complete
   */
  toggleCompleteAll() {
    Dispatcher.dispatch({
      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  }

  /**
   * @param {string} id
   */
  destroy(id) {
    Dispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    });
  }

  /**
   * Delete all the completed TODOs
   */
  destroyCompleted() {
    Dispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY_COMPLETED
    });
  }

}

export default new TodoActions();