webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137);


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	// 'use strict';
	var React = __webpack_require__(1);
	// var ReactDOM = require('react-dom');


	var HelloWorld = React.createClass({
	    displayName: 'HelloWorld',


	    render: function render() {

	        // this.props.name

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h1',
	                null,
	                'hello ',
	                this.props.name
	            ),
	            this.props.children
	        );
	    }

	});

	module.exports = HelloWorld;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "helloworld.react.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	// 'use strict';
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(22);
	var HelloWorld = __webpack_require__(136);

	ReactDOM.render(React.createElement(
	    HelloWorld,
	    { name: 'world!' },
	    React.createElement(
	        'p',
	        null,
	        '222222222222222'
	    )
	), document.getElementById('content'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\git\\webpack_koa2_react\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});