/**
 * configureStore
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware( thunk )(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  //
  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
