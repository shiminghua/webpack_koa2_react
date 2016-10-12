webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(138);


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * TodoActions
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _dispatcher = __webpack_require__(97);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _TodoConstants = __webpack_require__(96);

	var _TodoConstants2 = _interopRequireDefault(_TodoConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TodoActions = function () {
	  function TodoActions() {
	    _classCallCheck(this, TodoActions);
	  }

	  _createClass(TodoActions, [{
	    key: 'create',


	    /**
	     * @param {string} text
	     */
	    value: function create(text) {
	      _dispatcher2.default.dispatch({
	        actionType: _TodoConstants2.default.TODO_CREATE,
	        text: text
	      });
	    }

	    /**
	     * @param {string} id The ID of the TODO item
	     * @param {string} text
	     */

	  }, {
	    key: 'updateText',
	    value: function updateText(id, text) {
	      _dispatcher2.default.dispatch({
	        actionType: _TodoConstants2.default.TODO_UPDATE_TEXT,
	        id: id,
	        text: text
	      });
	    }

	    /**
	     * Toggle whether a single TODO is complete
	     * @param {object} todo
	     */

	  }, {
	    key: 'toggleComplete',
	    value: function toggleComplete(todo) {
	      var id = todo.id;
	      var actionType = todo.complete ? _TodoConstants2.default.TODO_UNDO_COMPLETE : _TodoConstants2.default.TODO_COMPLETE;
	      _dispatcher2.default.dispatch({
	        actionType: actionType,
	        id: id
	      });
	    }

	    /**
	     * Mark all TODOs as complete
	     */

	  }, {
	    key: 'toggleCompleteAll',
	    value: function toggleCompleteAll() {
	      _dispatcher2.default.dispatch({
	        actionType: _TodoConstants2.default.TODO_TOGGLE_COMPLETE_ALL
	      });
	    }

	    /**
	     * @param {string} id
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy(id) {
	      _dispatcher2.default.dispatch({
	        actionType: _TodoConstants2.default.TODO_DESTROY,
	        id: id
	      });
	    }

	    /**
	     * Delete all the completed TODOs
	     */

	  }, {
	    key: 'destroyCompleted',
	    value: function destroyCompleted() {
	      _dispatcher2.default.dispatch({
	        actionType: _TodoConstants2.default.TODO_DESTROY_COMPLETED
	      });
	    }
	  }]);

	  return TodoActions;
	}();

	exports.default = new TodoActions();

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

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * TodoConstants
	 */

	var TodoConstants = {
	    TODO_CREATE: 'TODO_CREATE',
	    TODO_UPDATE_TEXT: 'TODO_UPDATE_TEXT',
	    TODO_UNDO_COMPLETE: 'TODO_UNDO_COMPLETE',
	    TODO_COMPLETE: 'TODO_COMPLETE',
	    TODO_TOGGLE_COMPLETE_ALL: 'TODO_TOGGLE_COMPLETE_ALL',
	    TODO_DESTROY: 'TODO_DESTROY',
	    TODO_DESTROY_COMPLETED: 'TODO_DESTROY_COMPLETED'
	};

	exports.default = TodoConstants;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _flux = __webpack_require__(59);

	exports.default = new _flux.Dispatcher(); /**
	                                           * dispatcher
	                                           */

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "dispatcher.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TextInput
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/**
	 * es2016+规范的写法
	 * 生命周期函数
	 */
	var TextInput = function (_Component) {
	  _inherits(TextInput, _Component);

	  /**
	   * 构造函数
	   */
	  function TextInput(props) {
	    _classCallCheck(this, TextInput);

	    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

	    _this.state = {
	      inputValue: ''
	    };

	    _this.handleInputValueChange = function (event) {
	      var newInputValue = event.target.value;
	      _this.setState({
	        inputValue: newInputValue
	      });
	    };

	    _this.handleFormSubmit = function (event) {
	      event.preventDefault();
	      console.log('Form is submited.', _this.state.inputValue);
	      _this.props.onSubmit(_this.state.inputValue);
	      console.log(_this.props.num);
	    };

	    return _this;
	  }

	  /**
	   * mixins 在组件规范中是个数组
	   * 在es2016+语法中不推荐使用，使用高阶组件包裹本组件，或者使用装饰器
	   */
	  // static mixins = [SetIntervalMixin];

	  /**
	   * 静态属性的新写法
	   * 为属性添加类型检查，= propTypes
	   */


	  /**
	   * 设置组件默认状态，this.props
	   * 等同于函数 getDefaultProps
	   */


	  /**
	   * 实例属性的新写法
	   * 设置组件状态，= getInitialState
	   */


	  /**
	   * 使用属性函数可以在调用时省掉bind(this)，目前只支持 => 函数
	   * 输入框change事件
	   */


	  /**
	   * 使用属性函数可以在调用时省掉bind(this)，目前只支持 => 函数
	   * 表单提交事件
	   */


	  _createClass(TextInput, [{
	    key: 'componentWillMount',


	    /**
	     * 在初始渲染前执行
	     */
	    value: function componentWillMount() {
	      console.log('componentWillMount');
	    }

	    /**
	     * 在组件被渲染成DOM后调用
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('componentDidMount');
	      // this.setInterval(this.tick, 1000);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      console.log(1);
	    }

	    /**
	     * 每次有属性改变时执行，但第一次渲染时不会执行
	     * 参数是新属性的对象
	     */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // 通过this.props访问当前的属性
	      // 可以为this.props 和 nextProps 做任意逻辑比较
	      console.log('componentWillReceiveProps');
	    }

	    /**
	     * 该函数在组件渲染前被调用，每次属性改变或者状态被回复都会调用。
	     * 在初始渲染前或者是使用forceUpdate时不会被调用
	     * 必须返回true或false;返回false会跳过渲染函数render,并且会跳到生命周期的下一步，即：componentWillUpdate 和 componentDidUpdate
	     */

	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      console.log('shouldComponentUpdate');
	      return true;
	    }

	    /**
	     * 组件更新渲染时就调用，无法使用 setState
	     * 组件初次渲染时不会调用
	     */

	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      console.log('componentWillUpdate');
	    }

	    /**
	     * DOM的所有渲染更新被处理完后执行
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      console.log('componentDidUpdate');
	    }

	    /**
	     * 组件卸载时调用
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      console.log('componentWillUnmount');
	    }

	    /**
	     * 必须，渲染函数
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        null,
	        _react2.default.createElement('input', { type: 'text', value: this.state.inputValue, onChange: this.handleInputValueChange, placeholder: this.props.placeholder }),
	        _react2.default.createElement('input', { type: 'submit', value: '提交', onClick: this.handleFormSubmit })
	      );
	    }
	  }]);

	  return TextInput;
	}(_react.Component);

	TextInput.propTypes = {
	  onSubmit: _react.PropTypes.func.isRequired
	};
	TextInput.defaultProps = {
	  num: 0
	};
	exports.default = TextInput;

	/**
	 * mixins 的使用 - 定时器例子
	 */

	var SetIntervalMixin = {
	  componentWillMount: function componentWillMount() {
	    this.intervals = [];
	  },
	  setInterval: function (_setInterval) {
	    function setInterval() {
	      return _setInterval.apply(this, arguments);
	    }

	    setInterval.toString = function () {
	      return _setInterval.toString();
	    };

	    return setInterval;
	  }(function () {
	    this.intervals.push(setInterval.apply(null, arguments));
	  }),
	  componentWillUnmount: function componentWillUnmount() {
	    this.intervals.map(clearInterval);
	  }
	};

	var TickTock = _react2.default.createClass({
	  displayName: 'TickTock',

	  mixins: [SetIntervalMixin],
	  componentDidMount: function componentDidMount() {
	    this.setInterval(this.tick, 1000);
	  },
	  tick: function tick() {
	    console.log(1111);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'mixins test'
	    );
	  }
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TextInput.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(140);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// function arr() {
	//   let args = Array.prototype.slice.call(arguments, 1);
	//   console.log(args);
	// }
	// arr('a', 1, 2, 3, 'b');

	// let id = (Date.now() + Math.floor(Math.random() * 999999)).toString(36);
	// console.log(id);

	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('todoMVC')); /**
	                                                                                                                    * index
	                                                                                                                    */

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dispatcher = __webpack_require__(97);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _TodoConstants = __webpack_require__(96);

	var _TodoConstants2 = _interopRequireDefault(_TodoConstants);

	var _events = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CHANGE_EVENT = 'change'; /**
	                              * TodoStore
	                              */


	var todos = {};

	/**
	 * Create a TODO item
	 * @param {string} text The content of the TODO
	 *  */
	function create(text) {
	  var id = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
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
	  for (var id in todos) {
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
	  for (var id in todos) {
	    if (todos[id].complete) {
	      destroy(id);
	    }
	  }
	}

	var TodoStore = Object.assign({}, _events.EventEmitter.prototype, {
	  /**
	   * Tests whether all the remaining TODO items are marked as completed.
	   */
	  areAllComplete: function areAllComplete() {
	    for (var id in todos) {
	      if (!todos[id].complete) {
	        return false;
	      }
	    }
	    return true;
	  },

	  /**
	   * Get the entire collection of TODOs.
	   */
	  getAll: function getAll() {
	    return todos;
	  },

	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },

	  /**
	   * @param {function} callback
	   */
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },

	  /**
	   * @param {function} callback
	   */
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  }
	});

	function handleAction(action) {

	  var text = void 0;

	  switch (action.actionType) {

	    case _TodoConstants2.default.TODO_CREATE:
	      text = action.text.trim();
	      if (text !== '') {
	        create(text);
	        TodoStore.emitChange();
	      }
	      break;
	    case _TodoConstants2.default.TODO_TOGGLE_COMPLETE_ALL:
	      if (TodoStore.areAllComplete()) {
	        updateAll({ complete: false });
	      } else {
	        updateAll({ complete: true });
	      }
	      TodoStore.emitChange();
	      break;
	    case _TodoConstants2.default.TODO_UNDO_COMPLETE:
	      update(action.id, { complete: false });
	      TodoStore.emitChange();
	      break;
	    case _TodoConstants2.default.TODO_COMPLETE:
	      update(action.id, { complete: true });
	      TodoStore.emitChange();
	      break;
	    case _TodoConstants2.default.TODO_UPDATE_TEXT:
	      text = action.text.trim();
	      if (text !== '') {
	        update(action.id, { text: text });
	        TodoStore.emitChange();
	      }
	      break;
	    case _TodoConstants2.default.TODO_DESTROY:
	      destroy(action.id);
	      TodoStore.emitChange();
	      break;
	    case _TodoConstants2.default.TODO_DESTROY_COMPLETED:
	      destroyCompleted();
	      TodoStore.emitChange();
	      break;
	    default:
	      break;

	  }
	}

	/**
	 * Register callback to handle all updates
	 */
	TodoStore.dispatchToken = _dispatcher2.default.register(handleAction);

	exports.default = TodoStore;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Header = __webpack_require__(142);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(141);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _MainSection = __webpack_require__(144);

	var _MainSection2 = _interopRequireDefault(_MainSection);

	var _TodoStore = __webpack_require__(139);

	var _TodoStore2 = _interopRequireDefault(_TodoStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * App
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/**
	 * Retrieve the current TODO data from the TodoStore.
	 */
	function getTodoState() {
	  return {
	    allTodos: _TodoStore2.default.getAll(),
	    areAllComplete: _TodoStore2.default.areAllComplete()
	  };
	  // return {
	  //   allTodos: {},
	  //   areAllComplete: false
	  // };
	}

	/**
	 * App class
	 */

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, App);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = getTodoState(), _this.handleChange = function () {
	      _this.setState(getTodoState());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  // Set default state


	  _createClass(App, [{
	    key: 'componentDidMount',


	    // Component rendering complete
	    value: function componentDidMount() {
	      _TodoStore2.default.addChangeListener(this.handleChange);
	    }

	    // Component will unmount

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _TodoStore2.default.removeChangeListener(this.handleChange);
	    }

	    // render

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, null),
	        _react2.default.createElement(_MainSection2.default, { allTodos: this.state.allTodos, areAllComplete: this.state.areAllComplete }),
	        _react2.default.createElement(_Footer2.default, { allTodos: this.state.allTodos })
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TodoActions = __webpack_require__(47);

	var _TodoActions2 = _interopRequireDefault(_TodoActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Footer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Footer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.handleCompletedClick = function (event) {
	      _TodoActions2.default.destroyCompleted();
	      console.log('handleCompletedClick');
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {

	      var allTodos = this.props.allTodos;
	      var total = Object.keys(allTodos).length;

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
	      var itemsLeftPhrase = itemsLeft === 1 ? ' item' : ' items';
	      itemsLeftPhrase += 'left';

	      // Undefined and thus not rendered if no completed items are left.
	      var clearCompletedButton = void 0;
	      if (completed) {
	        clearCompletedButton = _react2.default.createElement(
	          'button',
	          { id: 'clear-completed', onClick: this.handleCompletedClick },
	          'Clear completed (',
	          completed,
	          ')'
	        );
	      }

	      return _react2.default.createElement(
	        'footer',
	        { id: 'footer' },
	        _react2.default.createElement(
	          'span',
	          { id: 'todo-count' },
	          _react2.default.createElement(
	            'strong',
	            null,
	            itemsLeft
	          ),
	          itemsLeftPhrase
	        ),
	        clearCompletedButton
	      );
	    }
	  }]);

	  return Footer;
	}(_react.Component);

	Footer.propTypes = {
	  allTodos: _react.PropTypes.object.isRequired
	};
	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextInput = __webpack_require__(98);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	var _TodoActions = __webpack_require__(47);

	var _TodoActions2 = _interopRequireDefault(_TodoActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * todo Header
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Header = function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    var _ref;

	    var _temp, _this2, _ret;

	    _classCallCheck(this, Header);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
	      num: 0
	    }, _this2.handleSubmit = function (text) {
	      console.log('----->', text);
	      if (text.trim()) {
	        _TodoActions2.default.create(text);
	      }
	      console.log('button is clicked');
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'todos'
	        ),
	        _react2.default.createElement(_TextInput2.default, { id: 'id', placeholder: 'What needs to be done?', onSubmit: this.handleSubmit, num: this.state.num })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;
	      setTimeout(function () {
	        _this.setState({
	          num: 1
	        });
	      }, 3000);
	    }

	    /**
	     * 表单提交事件
	     */

	  }]);

	  return Header;
	}(_react.Component);

	exports.default = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TextInput = __webpack_require__(98);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	var _TodoActions = __webpack_require__(47);

	var _TodoActions2 = _interopRequireDefault(_TodoActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Item 列表中的一项
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// import cx from 'react/lib/cx';

	var Item = function (_Component) {
	  _inherits(Item, _Component);

	  function Item() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Item);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isEditing: false
	    }, _this.handleSubmit = function (text) {
	      console.log('handleSubmit');
	      //event.target.value
	      _TodoActions2.default.updateText(_this.props.todo.id, text);
	      _this.setState({
	        isEditing: false
	      });
	    }, _this.handleInputCheckChange = function (event) {
	      console.log('handleInputCheckChange');
	      _TodoActions2.default.toggleComplete(_this.props.todo);
	    }, _this.handleDoubleClick = function () {
	      console.log('handleDoubleClick');
	      _this.setState({
	        isEditing: true
	      });
	    }, _this.handleDistoryClick = function (event) {
	      console.log('handleDistoryClick');
	      _TodoActions2.default.destroy(_this.props.todo.id);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Item, [{
	    key: 'render',
	    value: function render() {

	      var todo = this.props.todo,
	          input = void 0;

	      if (this.state.isEditing) {
	        input = _react2.default.createElement(_TextInput2.default, { className: 'edit', onSubmit: this.handleSubmit, value: todo.text });
	      }

	      return _react2.default.createElement(
	        'li',
	        { key: todo.id, className: todo.complete ? 'completed' :  false ? ' editing' : '' },
	        _react2.default.createElement(
	          'div',
	          { className: 'view' },
	          _react2.default.createElement('input', { type: 'checkbox', checked: todo.complete, onChange: this.handleInputCheckChange, className: 'toggle' }),
	          _react2.default.createElement(
	            'lable',
	            { onDoubleClick: this.handleDoubleClick },
	            todo.text
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'destroy', onClick: this.handleDistoryClick },
	            'delete'
	          )
	        ),
	        input
	      );
	    }
	  }]);

	  return Item;
	}(_react.Component);

	Item.propTypes = {
	  todo: _react.PropTypes.object.isRequired
	};
	exports.default = Item;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Item.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(143);

	var _Item2 = _interopRequireDefault(_Item);

	var _TodoActions = __webpack_require__(47);

	var _TodoActions2 = _interopRequireDefault(_TodoActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MainSection
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var MainSection = function (_Component) {
	  _inherits(MainSection, _Component);

	  function MainSection() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MainSection);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainSection.__proto__ || Object.getPrototypeOf(MainSection)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggleCompleteAll = function () {
	      console.log('handleToggleCompleteAll');
	      _TodoActions2.default.toggleCompleteAll();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  // 


	  _createClass(MainSection, [{
	    key: 'render',


	    // render
	    value: function render() {

	      // This section should be hidden by default
	      // and shown when there are TODOs.
	      if (Object.keys(this.props.allTodos).length < 1) {
	        return null;
	      }

	      var allTodos = this.props.allTodos;
	      var todos = [];

	      for (var key in allTodos) {
	        todos.push(_react2.default.createElement(_Item2.default, { key: key, todo: allTodos[key] }));
	      }

	      return _react2.default.createElement(
	        'section',
	        { id: 'main' },
	        _react2.default.createElement('input', { id: 'toggle-all', type: 'checkbox', onChange: this.handleToggleCompleteAll, checked: this.props.areAllComplete ? 'checked' : '' }),
	        _react2.default.createElement(
	          'label',
	          { htmlFor: 'toggle-all' },
	          'Mark all as complete'
	        ),
	        _react2.default.createElement(
	          'ul',
	          { id: 'todo-list' },
	          todos
	        )
	      );
	    }
	  }]);

	  return MainSection;
	}(_react.Component);

	MainSection.propTypes = {
	  allTodos: _react.PropTypes.object.isRequired,
	  areAllComplete: _react.PropTypes.bool.isRequired
	};
	exports.default = MainSection;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MainSection.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});