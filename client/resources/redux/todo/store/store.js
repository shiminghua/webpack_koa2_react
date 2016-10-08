/**
 * store
 */
import { createStore } from 'redux';
import todoApp from './reducer/reducers';

let store = createStore(todoApp);