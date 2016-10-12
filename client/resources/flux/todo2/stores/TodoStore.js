/**
 * TodoStore
 */
import Dispatcher from '../dispatchers/dispatcher';
import TodoConstants from '../constants/TodoConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let todos = {};

/**
 * Create a TODO item
 * @param {string} text The content of the TODO
 *  */ 
function create(text) {
  let id = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
  todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Update a TODO item
 * @param {string} id
 * @param {object} updates An object literal containing only the data to be updated.
 */
function update(id, updates) {
  todos[id] = Object.assign({}, todos[id], updates);
}

/**
 * Update all of the TODO items with the same object.
 * the data to be updated. Used to mark all TODOs as completed.
 * @param {object} updates An object literal containing only the data to be updated.
 */
function updateAll(updates) {
  for (let id in todos) {
    update(id, updates);
  }
} 

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
  delete todos[id];
}

/**
 * Delete all the completed TODO items.
 */
function destroyCompleted() {
  for (let id in todos) {
    if (todos[id].complete) {
      destroy(id);
    }
  }
}

let TodoStore = Object.assign({}, EventEmitter.prototype, {
  /**
   * Tests whether all the remaining TODO items are marked as completed.
   */
  areAllComplete: function() {
    for (let id in todos) {
      if (!todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of TODOs.
   */
  getAll: function() {
    return todos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

function handleAction(action) {

  let text;

  switch (action.actionType) {

    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        TodoStore.emitChange();
      }
      break;
    case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
      if (TodoStore.areAllComplete()) {
        updateAll({ complete: false });
      }
      else {
        updateAll({ complete: true });
      }
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_COMPLETE:
      update(action.id, {complete: true});
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
        TodoStore.emitChange();
      }
      break;
    case TodoConstants.TODO_DESTROY:
      destroy(action.id);
      TodoStore.emitChange();
      break;
    case TodoConstants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      TodoStore.emitChange();
      break;
    default :
      break;

  }

}

/**
 * Register callback to handle all updates
 */
TodoStore.dispatchToken = Dispatcher.register(handleAction);

export default TodoStore;