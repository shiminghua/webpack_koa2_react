webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(157);


/***/ },

/***/ 49:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputPassword = function (_Component) {
	    _inherits(InputPassword, _Component);

	    function InputPassword(props) {
	        _classCallCheck(this, InputPassword);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputPassword).call(this, props));

	        _this.state = {
	            value: props.defaultValue
	        };
	        return _this;
	    }

	    _createClass(InputPassword, [{
	        key: 'handleChange',
	        value: function handleChange(event) {
	            if (this.props.onChange) {
	                this.props.onChange(event);
	            }
	            this.setState({
	                value: event.target.value.trim()
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.value) {
	                this.setState({
	                    value: this.props.value
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var value = this.state.value;

	            return _react2.default.createElement('input', { type: 'password',
	                className: this.props.className,
	                name: this.props.name,
	                value: value,
	                placeholder: this.props.placeholder,
	                onChange: this.handleChange.bind(this) });
	        }
	    }]);

	    return InputPassword;
	}(_react.Component);

	InputPassword.defaultProps = {
	    defaultValue: ''
	};
	InputPassword.propTypes = {
	    onChange: _react2.default.PropTypes.func
	};

	exports.default = InputPassword;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "InputPassword.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 50:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputText = function (_React$Component) {
	    _inherits(InputText, _React$Component);

	    function InputText(props) {
	        _classCallCheck(this, InputText);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputText).call(this, props));

	        _this.state = {
	            value: props.defaultValue
	        };
	        return _this;
	    }

	    _createClass(InputText, [{
	        key: 'handleChange',
	        value: function handleChange(event) {
	            if (this.props.onChange) {
	                this.props.onChange(event);
	            }
	            this.setState({
	                value: event.target.value.trim()
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.value) {
	                this.setState({
	                    value: this.props.value
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var value = this.state.value;

	            return _react2.default.createElement('input', { type: 'text',
	                className: this.props.className,
	                name: this.props.name,
	                value: value,
	                placeholder: this.props.placeholder,
	                onChange: this.handleChange.bind(this) });
	        }
	    }]);

	    return InputText;
	}(_react2.default.Component);

	InputText.defaultProps = {
	    defaultValue: ''
	};
	InputText.propTypes = {
	    onChange: _react2.default.PropTypes.func
	};

	exports.default = InputText;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "InputText.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 116:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckBox = function (_Component) {
	    _inherits(CheckBox, _Component);

	    function CheckBox(props) {
	        _classCallCheck(this, CheckBox);

	        // let defaultValue = [];
	        // if(typeof props.defaultValue === 'string') {
	        //     defaultValue.push(props.defaultValue)
	        // }
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBox).call(this, props));

	        _this.state = {
	            // value: defaultValue
	            value: props.defaultValue
	        };
	        return _this;
	    }

	    _createClass(CheckBox, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.value) {
	                this.setState({
	                    value: this.props.value
	                });
	            }
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(event) {

	            var sel = event.target;
	            var values = this.state.value;
	            // 选中时
	            if (sel.checked) {
	                values = this.addValue(event.target.value);
	            }
	            // 未选中时
	            else {
	                    values = this.delValue(event.target.value);
	                }

	            if (this.props.onChange) {
	                this.props.onChange(event, values);
	            }

	            this.setState({
	                value: values
	            });
	        }

	        // 在数组中添加值

	    }, {
	        key: 'addValue',
	        value: function addValue(value) {
	            var values = this.state.value;
	            values.push(value);
	            return values;
	        }

	        // 在数组中删除值

	    }, {
	        key: 'delValue',
	        value: function delValue(value) {
	            var values = this.state.value;
	            var i = 0,
	                len = values.length;
	            for (; i < len; i++) {
	                if (values[i] === value) {
	                    values.splice(i, 1);
	                }
	            }
	            return values;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var children = {};
	            var value = this.state.value;
	            var className = '';
	            if (this.props.className) {
	                className = this.props.className;
	            }

	            _react2.default.Children.forEach(this.props.children, function (child, i) {

	                var classNameChild = '';
	                if (child.props.className) {
	                    classNameChild = ' ' + child.props.className;
	                }

	                var checked = false;
	                var x = 0,
	                    len = value.length;
	                for (; x < len; x++) {
	                    if (value[x] == child.props.value) {
	                        checked = true;
	                    }
	                }

	                var label = _react2.default.createElement(
	                    'div',
	                    { key: 'label' + i, className: className + classNameChild },
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        _react2.default.createElement('input', { type: 'checkbox',
	                            className: '',
	                            name: this.props.name,
	                            value: child.props.value,
	                            checked: checked,
	                            onChange: this.handleChange.bind(this) }),
	                        child.props.children
	                    )
	                );

	                children['label' + i] = label;
	            }.bind(this));

	            var arrChildren = [];
	            for (var key in children) {
	                arrChildren.push(children[key]);
	            }

	            return _react2.default.createElement(
	                'span',
	                null,
	                arrChildren
	            );
	        }
	    }]);

	    return CheckBox;
	}(_react.Component);

	CheckBox.propTypes = {
	    onChange: _react2.default.PropTypes.func,
	    value: _react2.default.PropTypes.array,
	    defaultValue: _react2.default.PropTypes.array
	};
	CheckBox.defaultProps = {
	    defaultValue: []
	};

	exports.default = CheckBox;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CheckBox.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 117:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************
	 * 单选按钮公共插件
	*/
	var Radio = function (_React$Component) {
	    _inherits(Radio, _React$Component);

	    // 构造函数
	    function Radio(props) {
	        _classCallCheck(this, Radio);

	        // 设置默认状态
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).call(this, props));

	        _this.state = {
	            value: props.defaultValue
	        };
	        return _this;
	    }

	    // change事件


	    _createClass(Radio, [{
	        key: 'handleChange',
	        value: function handleChange(event) {

	            if (this.props.onChange) {
	                this.props.onChange(event);
	            }
	            // 设置默认状态
	            this.setState({
	                value: event.target.value
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.value) {
	                this.setState({
	                    value: this.props.value
	                });
	            }
	        }

	        // render

	    }, {
	        key: 'render',
	        value: function render() {

	            var children = {};
	            var value = this.state.value;
	            var className = '';
	            if (this.props.className) {
	                className = this.props.className;
	            }

	            _react2.default.Children.forEach(this.props.children, function (child, i) {

	                var classNameChild = '';
	                if (child.props.className) {
	                    classNameChild = ' ' + child.props.className;
	                }
	                var label = _react2.default.createElement(
	                    'div',
	                    { key: 'label' + i, className: className + classNameChild },
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        _react2.default.createElement('input', { type: 'radio',
	                            className: '',
	                            name: this.props.name,
	                            value: child.props.value,
	                            checked: child.props.value == value,
	                            onChange: this.handleChange.bind(this) }),
	                        child.props.children
	                    )
	                );

	                children['label' + i] = label;
	            }.bind(this));

	            var arrChildren = [];
	            for (var key in children) {
	                arrChildren.push(children[key]);
	            }

	            return _react2.default.createElement(
	                'span',
	                null,
	                arrChildren
	            );
	        }
	    }]);

	    return Radio;
	}(_react2.default.Component);

	// 属性验证


	Radio.propTypes = {
	    onChange: _react2.default.PropTypes.func
	};
	// 设置默认属性
	Radio.defaultProps = {
	    defaultValue: ''
	};

	exports.default = Radio;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Radio.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 118:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_Component) {
	    _inherits(Select, _Component);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

	        _this.state = {
	            value: props.defaultValue
	        };
	        return _this;
	    }

	    _createClass(Select, [{
	        key: 'handleChange',
	        value: function handleChange(event) {
	            if (this.props.onChange) {
	                this.props.onChange(event);
	            }
	            console.log(event.target.value);
	            this.setState({
	                value: event.target.value
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.value) {
	                this.setState({
	                    value: this.props.value
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var value = this.state.value;

	            return _react2.default.createElement(
	                'select',
	                {
	                    className: this.props.className,
	                    value: value,
	                    name: this.props.name,
	                    onChange: this.handleChange.bind(this) },
	                this.props.children
	            );
	        }
	    }]);

	    return Select;
	}(_react.Component);

	Select.propTypes = {
	    onChange: _react2.default.PropTypes.func
	};
	Select.defaultProps = {
	    defaultValue: ''
	};

	exports.default = Select;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Select.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 119:
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextArea = function (_Component) {
	    _inherits(TextArea, _Component);

	    function TextArea(props) {
	        _classCallCheck(this, TextArea);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, props));

	        _this.state = {
	            value: props.defaultValue
	        };
	        return _this;
	    }

	    _createClass(TextArea, [{
	        key: 'handleChange',
	        value: function handleChange(event) {
	            if (this.props.onChange) {
	                this.props.onChange(event);
	            }
	            this.setState({
	                value: event.target.value
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.value) {
	                this.setState({
	                    value: this.props.value
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var value = this.state.value;

	            return _react2.default.createElement('textarea', {
	                className: this.props.className,
	                value: value,
	                placeholder: this.props.placeholder,
	                name: this.props.name,
	                onChange: this.handleChange.bind(this) });
	        }
	    }]);

	    return TextArea;
	}(_react.Component);

	TextArea.propTypes = {
	    onChange: _react2.default.PropTypes.func
	};
	TextArea.defaultProps = {
	    defaultValue: ''
	};

	exports.default = TextArea;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TextArea.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(22);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _MyForm = __webpack_require__(158);

	var _MyForm2 = _interopRequireDefault(_MyForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_MyForm2.default, null), document.getElementById('content'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Radio = __webpack_require__(117);

	var _Radio2 = _interopRequireDefault(_Radio);

	var _CheckBox = __webpack_require__(116);

	var _CheckBox2 = _interopRequireDefault(_CheckBox);

	var _InputText = __webpack_require__(50);

	var _InputText2 = _interopRequireDefault(_InputText);

	var _TextArea = __webpack_require__(119);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Select = __webpack_require__(118);

	var _Select2 = _interopRequireDefault(_Select);

	var _InputPassword = __webpack_require__(49);

	var _InputPassword2 = _interopRequireDefault(_InputPassword);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var divStyle = {
	    paddingTop: '20px'
	};

	var MyForm = function (_React$Component) {
	    _inherits(MyForm, _React$Component);

	    function MyForm(props) {
	        _classCallCheck(this, MyForm);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyForm).call(this, props));

	        _this.state = {
	            my_radio: 'radio3', // key 值对应组件的name值
	            my_name: 'name',
	            my_company: 'company',
	            my_textarea: 'textarea',
	            my_checkbox: ['checkbox2', 'checkbox3'],
	            my_select: 'select2',
	            my_pass: 'pass'
	        };
	        return _this;
	    }

	    // 提交函数


	    _createClass(MyForm, [{
	        key: 'submitHandler',
	        value: function submitHandler(event) {
	            event.preventDefault();
	            // console.log(this);
	            var values = [];
	            for (var key in this.state) {
	                values += key + ':' + this.state[key] + '\n\r';
	            }
	            alert(values);
	        }

	        // change事件

	    }, {
	        key: 'handleChange',
	        value: function handleChange(event, values) {
	            // console.log(values)
	            var newState = {};
	            if (values) {
	                newState[event.target.name] = values;
	            } else {
	                newState[event.target.name] = event.target.value;
	            }
	            this.setState(newState);
	        }

	        // checkbox change 事件

	    }, {
	        key: 'handleChangeCheckbox',
	        value: function handleChangeCheckbox(event, values) {
	            var newState = {};
	            newState[event.target.name] = values;
	            this.setState(newState);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'form',
	                { onSubmit: this.submitHandler.bind(this) },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'my form'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: divStyle },
	                    '单选按钮：',
	                    _react2.default.createElement(
	                        _Radio2.default,
	                        { ref: 'radio', className: 'mui-input-row mui-radio', name: 'my_radio', onChange: this.handleChange.bind(this), value: this.state.my_radio },
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'radio1' },
	                            'first option'
	                        ),
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'radio2' },
	                            'second option'
	                        ),
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'radio3' },
	                            'third option'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: divStyle },
	                    '复选按钮：',
	                    _react2.default.createElement(
	                        _CheckBox2.default,
	                        { ref: 'radio', className: 'mui-input-row mui-checkbox', name: 'my_checkbox', onChange: this.handleChange.bind(this), value: this.state.my_checkbox },
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'checkbox1' },
	                            'first checkbox'
	                        ),
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'checkbox2' },
	                            'second checkbox'
	                        ),
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'checkbox3' },
	                            'third checkbox'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: divStyle },
	                    '下拉菜单：',
	                    _react2.default.createElement(
	                        _Select2.default,
	                        { name: 'my_select', onChange: this.handleChange.bind(this), value: this.state.my_select },
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'select1' },
	                            'first select'
	                        ),
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'select2' },
	                            'second select'
	                        ),
	                        _react2.default.createElement(
	                            'option',
	                            { value: 'select3' },
	                            'third select'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '文本框：',
	                    _react2.default.createElement(_InputText2.default, { name: 'my_name', className: 'my-name', onChange: this.handleChange.bind(this), placeholder: 'my name', value: this.state.my_name })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '文本框：',
	                    _react2.default.createElement(_InputText2.default, { name: 'my_company', className: 'my-company', onChange: this.handleChange.bind(this), placeholder: 'my company', value: this.state.my_company })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '密码框：',
	                    _react2.default.createElement(_InputPassword2.default, { name: 'my_pass', className: 'my-pass', onChange: this.handleChange.bind(this), placeholder: 'my pass', value: this.state.my_pass })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '文本域：',
	                    _react2.default.createElement(_TextArea2.default, { name: 'my_textarea', className: 'my-textarea', onChange: this.handleChange.bind(this), placeholder: 'my textarea', value: this.state.my_textarea })
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'submit', className: 'mui-btn mui-btn-primary mui-btn-outlined' },
	                    '提交'
	                )
	            );
	        }
	    }]);

	    return MyForm;
	}(_react2.default.Component);

	exports.default = MyForm;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MyForm.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});