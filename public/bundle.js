/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//var React = require('react');

	"use strict";

	var Timer = React.createClass({
	  displayName: "Timer",

	  getInitalState: function getInitalState() {
	    //when object is created, elapsed time is 0;
	    //this.setState({elapsedTime: 0});
	    return { elapsed: 0 };
	  },
	  componentDidMount: function componentDidMount() {
	    this.timer = setInterval(this.tick, 50);
	  },
	  componenetWillUnmount: function componenetWillUnmount() {
	    clearInterval(this.timer);
	  },
	  tick: function tick() {
	    this.setState({ elapsed: new Date() - this.props.start });
	  },

	  render: function render() {

	    var elapsed = Math.round(this.state.elapsed / 100);
	    var seconds = (elapsed / 10).toFixed(1);

	    return React.createElement(
	      "p",
	      null,
	      "This timer was started ",
	      React.createElement(
	        "b",
	        null,
	        seconds,
	        " seconds"
	      ),
	      " ago"
	    );
	  }
	});

	React.render(React.createElement(Timer, { start: Date.now() }), document.body);

/***/ }
/******/ ]);