webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(145);


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var AppDispatcher = __webpack_require__(100);
	var TodoConstants = __webpack_require__(99);

	var TodoActions = {

	    create: function create(text) {
	        var action = {
	            actionType: TodoConstants.TODO_CREATE,
	            text: text
	        };
	        AppDispatcher.dispatch(action);
	    },

	    updateText: function updateText(id, text) {
	        var action = {
	            actionType: TodoConstants.TODO_UPDATE_TEXT,
	            id: id,
	            text: text
	        };
	        AppDispatcher.dispatch(action);
	    },

	    toggleComplete: function toggleComplete(todo) {
	        var id = todo.id;
	        var action = {
	            actionType: todo.complete ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE,
	            id: id
	        };
	        AppDispatcher.dispatch(action);
	    },

	    toggleCompleteAll: function toggleCompleteAll() {
	        var action = {
	            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
	        };
	        AppDispatcher.dispatch(action);
	    },

	    destroy: function destroy(id) {
	        var action = {
	            actionType: TodoConstants.TODO_DESTROY,
	            id: id
	        };
	        AppDispatcher.dispatch(action);
	    },

	    destroyCompleted: function destroyCompleted() {
	        var action = {
	            actionType: TodoConstants.TODO_DESTROY_COMPLETED
	        };
	        AppDispatcher.dispatch(action);
	    }

	};

	module.exports = TodoActions;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 57:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(60);


/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(58);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	module.exports = {
	    TODO_CREATE: 'TODO_CREATE',
	    TODO_UPDATE_TEXT: 'TODO_UPDATE_TEXT',
	    TODO_UNDO_COMPLETE: 'TODO_UNDO_COMPLETE',
	    TODO_COMPLETE: 'TODO_COMPLETE',
	    TODO_TOGGLE_COMPLETE_ALL: 'TODO_TOGGLE_COMPLETE_ALL',
	    TODO_DESTROY: 'TODO_DESTROY',
	    TODO_DESTROY_COMPLETED: 'TODO_DESTROY_COMPLETED'
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var Dispatcher = __webpack_require__(59).Dispatcher;

	module.exports = new Dispatcher();

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppDispatcher.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	// let TodoStore = require('../stores/TodoStore');
	var TodoActions = __webpack_require__(31);

	var TodoTextInput = React.createClass({
	    displayName: 'TodoTextInput',


	    getInitialState: function getInitialState() {
	        return {
	            inputValue: ''
	        };
	    },

	    handleInputValueChange: function handleInputValueChange(event) {
	        var inputValue = event.target.value;
	        this.setState({
	            inputValue: inputValue
	        });
	    },

	    handleFormSubmit: function handleFormSubmit(event) {
	        event.preventDefault();
	        TodoActions.create(this.state.inputValue);
	    },

	    render: function render() {

	        return React.createElement(
	            'form',
	            null,
	            React.createElement('input', { type: 'text', value: this.state.inputValue, onChange: this.handleInputValueChange }),
	            React.createElement('input', { type: 'submit', value: '提交', onClick: this.handleFormSubmit })
	        );
	    }

	});

	module.exports = TodoTextInput;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInput.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(13);
	var TodoApp = __webpack_require__(150);

	ReactDom.render(React.createElement(TodoApp, null), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var AppDispatcher = __webpack_require__(100);
	var EventEmitter = __webpack_require__(57).EventEmitter;
	var TodoConstants = __webpack_require__(99);
	var assign = __webpack_require__(5);

	var CHANGE_EVENT = 'change';
	var todos = {};

	function create(text) {
	    var id = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
	    todos[id] = {
	        id: id,
	        complete: false,
	        text: text
	    };
	}

	function update(id, updates) {
	    todos[id] = assign({}, todos[id], updates);
	}

	function updateAll(updates) {
	    for (var id in todos) {
	        update(id, updates);
	    }
	}

	function destroy(id) {
	    delete todos[id];
	}

	function destroyCompleted() {
	    for (var id in todos) {
	        if (todos[id].complete) {
	            destroy(id);
	        }
	    }
	}

	var TodoStore = assign({}, EventEmitter.prototype, {

	    areAllComplete: function areAllComplete() {
	        for (var id in todos) {
	            if (!todos[id].complete) {
	                return false;
	            }
	        }
	        return true;
	    },

	    getAll: function getAll() {
	        return todos;
	    },

	    // emitChange: function() {
	    //     this.emit(CHANGE_EVENT);
	    // },

	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    }

	});

	function emitChange() {
	    TodoStore.emit(CHANGE_EVENT);
	}

	function handleAction(action) {

	    var text = void 0;

	    switch (action.actionType) {
	        case TodoConstants.TODO_CREATE:
	            text = action.text.trim();
	            if (text !== '') {
	                create(text);
	                emitChange();
	            }
	            break;
	        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
	            if (TodoStore.areAllComplete()) {
	                updateAll({ complete: false });
	            } else {
	                updateAll({ complete: true });
	            }
	            emitChange();
	            break;
	        case TodoConstants.TODO_UNDO_COMPLETE:
	            update(action.id, { complete: false });
	            emitChange();
	            break;
	        case TodoConstants.TODO_COMPLETE:
	            update(action.id, { complete: true });
	            emitChange();
	            break;
	        case TodoConstants.TODO_UPDATE_TEXT:
	            text = action.text.trim();
	            if (text !== '') {
	                update(action.id, { text: text });
	                emitChange();
	            }
	            break;
	        case TodoConstants.TODO_DESTROY:
	            destroy(action.id);
	            emitChange();
	            break;
	        case TodoConstants.TODO_DESTROY_COMPLETED:
	            destroyCompleted();
	            emitChange();
	            break;
	        default:
	            break;
	    }
	}

	TodoStore.dispatchToken = AppDispatcher.register(handleAction);

	module.exports = TodoStore;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var TodoActions = __webpack_require__(31);

	var Footer = React.createClass({
	    displayName: 'Footer',


	    propTypes: {
	        allTodos: React.PropTypes.object.isRequired
	    },

	    render: function render() {

	        var allTodos = this.props.allTodos;
	        var total = 0;
	        if (allTodos) {
	            total = Object.keys(allTodos).length;
	        }

	        if (total === 0) {
	            return null;
	        }

	        var completed = 0;
	        for (var key in allTodos) {
	            if (allTodos[key].complete) {
	                completed++;
	            }
	        }

	        var itemsLeft = total - completed;
	        var itemsLeftPhrase = itemsLeft === 1 ? 'item ' : 'items ';
	        itemsLeftPhrase += 'left';

	        var clearCompletedButton = void 0;
	        if (completed) {
	            clearCompletedButton = React.createElement(
	                'button',
	                { id: 'clear-completed', onClick: this._onClearCompletedClick },
	                'Clear completed (',
	                completed,
	                ')'
	            );
	        }

	        return React.createElement(
	            'footer',
	            { id: 'footer' },
	            React.createElement(
	                'span',
	                { id: 'todo-count' },
	                React.createElement(
	                    'strong',
	                    null,
	                    itemsLeft
	                ),
	                ' ',
	                itemsLeftPhrase
	            ),
	            clearCompletedButton
	        );
	    },

	    _onClearCompletedClick: function _onClearCompletedClick() {
	        TodoActions.destroyCompleted();
	    }

	});

	module.exports = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var TodoActions = __webpack_require__(31);
	var TodoTextInput = __webpack_require__(101);

	var Header = React.createClass({
	    displayName: 'Header',

	    render: function render() {
	        return React.createElement(
	            'header',
	            { id: 'header' },
	            React.createElement(
	                'h1',
	                null,
	                'todos'
	            ),
	            React.createElement(TodoTextInput, { id: 'new-todo', placeholder: 'What needs to be done?', onSave: this._onSave })
	        );
	    },

	    _onSave: function _onSave(text) {
	        if (text.trim()) {
	            TodoActions.create(text);
	        }
	    }
	});

	module.exports = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var ReactPropTypes = React.PropTypes;
	var TodoActions = __webpack_require__(31);
	var TodoItem = __webpack_require__(151);

	var MainSection = React.createClass({
	    displayName: 'MainSection',


	    propTypes: {
	        allTodos: React.PropTypes.object.isRequired,
	        areAllComplete: ReactPropTypes.bool.isRequired
	    },

	    render: function render() {

	        if (Object.keys(this.props.allTodos).length < 1) {
	            return null;
	        }

	        var allTodos = this.props.allTodos;
	        var todos = [];

	        for (var key in allTodos) {
	            todos.push(React.createElement(TodoItem, { key: key, todo: allTodos[key] }));
	        }

	        return React.createElement(
	            'section',
	            { id: 'main' },
	            React.createElement('input', { id: 'toggle-all', type: 'checkbox',
	                onChange: this._onToggleCompleteAll,
	                checked: this.props.areAllComplete ? 'checked' : '' }),
	            React.createElement(
	                'label',
	                { htmlFor: 'toggle-all' },
	                'Mark all as complete'
	            ),
	            React.createElement(
	                'ul',
	                { id: 'todo-list' },
	                todos
	            )
	        );
	    },

	    _onToggleCompleteAll: function _onToggleCompleteAll() {
	        TodoActions.toggleCompleteAll();
	    }

	});

	module.exports = MainSection;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MainSection.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var Header = __webpack_require__(148);
	var Footer = __webpack_require__(147);
	var MainSection = __webpack_require__(149);
	var TodoStore = __webpack_require__(146);

	function getTodoState() {
	    return {
	        allTodos: TodoStore.getAll(),
	        areAllComplete: TodoStore.areAllComplete()
	    };
	}

	var TodoApp = React.createClass({
	    displayName: 'TodoApp',


	    getInitialState: function getInitialState() {
	        return getTodoState();
	    },

	    componentDidMount: function componentDidMount() {
	        TodoStore.addChangeListener(this._onChange);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        TodoStore.removeChangeListener(this._onChange);
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(Header, null),
	            React.createElement(MainSection, {
	                allTodos: this.state.allTodos,
	                areAllComplete: this.state.areAllComplete }),
	            React.createElement(Footer, { allTodos: this.state.allTodos })
	        );
	    },

	    _onChange: function _onChange() {
	        this.setState(getTodoState);
	    }

	});

	module.exports = TodoApp;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoApp.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(1);
	var ReactPropTypes = React.PropTypes;
	var TodoActions = __webpack_require__(31);
	var TodoTextInput = __webpack_require__(101);

	// let cx = require('react/lib/cx');

	var TodoItem = React.createClass({
	    displayName: 'TodoItem',


	    propTypes: {
	        todo: ReactPropTypes.object.isRequired
	    },

	    getInitialState: function getInitialState() {
	        return {
	            isEditing: false
	        };
	    },

	    render: function render() {

	        var todo = this.props.todo;
	        var input = void 0;

	        if (this.state.isEditing) {
	            input = React.createElement(TodoTextInput, { className: 'edit',
	                onSave: this._onSave,
	                value: todo.text });
	        }

	        return React.createElement(
	            'li',
	            { className: 'aaa',
	                key: todo.id },
	            React.createElement(
	                'div',
	                { className: 'view' },
	                React.createElement('input', { className: 'toggle', type: 'checkbox', checked: todo.complete, onChange: this._onToggleComplete }),
	                React.createElement(
	                    'label',
	                    { onDoubleClick: this._onDoubleClick },
	                    todo.text
	                ),
	                React.createElement(
	                    'button',
	                    { className: 'destroy', onClick: this._onDestroyClick },
	                    'delete'
	                )
	            ),
	            input
	        );
	    },

	    _onToggleComplete: function _onToggleComplete() {
	        TodoActions.toggleComplete(this.props.todo);
	    },

	    _onDoubleClick: function _onDoubleClick() {
	        this.setState({
	            isEditing: true
	        });
	    },

	    _onSave: function _onSave() {

	        TodoActions.updateText(this.props.todo.id, text);
	        this.setState({
	            isEditing: false
	        });
	    },

	    _onDestroyClick: function _onDestroyClick() {
	        TodoActions.destroy(this.props.todo.id);
	    }

	});

	module.exports = TodoItem;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});