(window["webpackJsonp_ultimate_query_builder"] = window["webpackJsonp_ultimate_query_builder"] || []).push([["style-index"],{

/***/ "./src/components/Repeater/style.scss":
/*!********************************************!*\
  !*** ./src/components/Repeater/style.scss ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_ultimate_query_builder"] = window["webpackJsonp_ultimate_query_builder"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/multiselect-react-dropdown/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/multiselect-react-dropdown/dist/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./multiselect-react-dropdown.cjs.development.js */ "./node_modules/multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.development.js")
}


/***/ }),

/***/ "./node_modules/multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.development.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.development.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*,:after,:before{box-sizing:border-box}.multiSelectContainer{position:relative;text-align:left;width:100%}.disable_ms{pointer-events:none;opacity:.5}.searchWrapper{border:1px solid #ccc;border-radius:4px;padding:5px;min-height:22px;position:relative}.multiSelectContainer input{border:none;margin-top:3px;background:transparent}.multiSelectContainer input:focus{outline:none}.chip{padding:4px 10px;background:#0096fb;margin-right:5px;margin-bottom:5px;border-radius:11px;display:inline-flex;align-items:center;font-size:13px;line-height:19px;color:#fff}.chip,.singleChip{white-space:nowrap}.singleChip{background:none;border-radius:none;color:inherit}.singleChip i{display:none}.closeIcon{height:13px;width:13px;float:right;margin-left:5px;cursor:pointer}.optionListContainer{position:absolute;width:100%;background:#fff;border-radius:4px;margin-top:1px;z-index:2}.multiSelectContainer ul{display:block;padding:0;margin:0;border:1px solid #ccc;border-radius:4px;max-height:250px;overflow-y:auto}.multiSelectContainer li{padding:10px}.multiSelectContainer li:hover{background:#0096fb;color:#fff;cursor:pointer}.checkbox{margin-right:10px}.disableSelection{pointer-events:none;opacity:.5}.highlightOption{background:#0096fb;color:#fff}.displayBlock{display:block}.displayNone{display:none}.notFound{padding:10px;display:block}.singleSelect{padding-right:20px}li.groupHeading{color:#908e8e;pointer-events:none;padding:5px 15px}li.groupChildEle{padding-left:30px}.icon_down_dir{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:14px}.icon_down_dir:before{content:\"\\e803\"}.custom-close{display:flex}";
styleInject(css_248z);

var CloseCircle = "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2096%2096%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M48%2C0A48%2C48%2C0%2C1%2C0%2C96%2C48%2C48.0512%2C48.0512%2C0%2C0%2C0%2C48%2C0Zm0%2C84A36%2C36%2C0%2C1%2C1%2C84%2C48%2C36.0393%2C36.0393%2C0%2C0%2C1%2C48%2C84Z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M64.2422%2C31.7578a5.9979%2C5.9979%2C0%2C0%2C0-8.4844%2C0L48%2C39.5156l-7.7578-7.7578a5.9994%2C5.9994%2C0%2C0%2C0-8.4844%2C8.4844L39.5156%2C48l-7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C1%2C0%2C8.4844%2C8.4844L48%2C56.4844l7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C0%2C0%2C8.4844-8.4844L56.4844%2C48l7.7578-7.7578A5.9979%2C5.9979%2C0%2C0%2C0%2C64.2422%2C31.7578Z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var CloseCircleDark = "data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M256%2C33C132.3%2C33%2C32%2C133.3%2C32%2C257c0%2C123.7%2C100.3%2C224%2C224%2C224c123.7%2C0%2C224-100.3%2C224-224C480%2C133.3%2C379.7%2C33%2C256%2C33z%20%20%20%20M364.3%2C332.5c1.5%2C1.5%2C2.3%2C3.5%2C2.3%2C5.6c0%2C2.1-0.8%2C4.2-2.3%2C5.6l-21.6%2C21.7c-1.6%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3L256%2C289.8%20%20%20l-75.4%2C75.7c-1.5%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1%2C0.8-4.2%2C2.3-5.6l75.7-76%20%20%20l-75.9-75c-3.1-3.1-3.1-8.2%2C0-11.3l21.6-21.7c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l75.7%2C74.7l75.7-74.7%20%20%20c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l21.6%2C21.7c3.1%2C3.1%2C3.1%2C8.2%2C0%2C11.3l-75.9%2C75L364.3%2C332.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var CloseLine = "data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M443.6%2C387.1L312.4%2C255.4l131.5-130c5.4-5.4%2C5.4-14.2%2C0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4%20%20L256%2C197.8L124.9%2C68.3c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4L68%2C105.9c-5.4%2C5.4-5.4%2C14.2%2C0%2C19.6l131.5%2C130L68.4%2C387.1%20%20c-2.6%2C2.6-4.1%2C6.1-4.1%2C9.8c0%2C3.7%2C1.4%2C7.2%2C4.1%2C9.8l37.4%2C37.6c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1L256%2C313.1l130.7%2C131.1%20%20c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1l37.4-37.6c2.6-2.6%2C4.1-6.1%2C4.1-9.8C447.7%2C393.2%2C446.2%2C389.7%2C443.6%2C387.1z%22%2F%3E%3C%2Fsvg%3E";

var CloseSquare = "data:image/svg+xml,%3Csvg%20height%3D%22135.467mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2013547%2013547%22%20width%3D%22135.467mm%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Ebene_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%220%2C0%2013547%2C0%2013547%2C13547%200%2C13547%20%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil1%22%20d%3D%22M714%2012832l12118%200%200%20-12117%20-12118%200%200%2012117zm4188%20-2990l1871%20-1871%201871%201871%201197%20-1197%20-1871%20-1871%201871%20-1871%20-1197%20-1197%20-1871%201871%20-1871%20-1871%20-1197%201197%201871%201871%20-1871%201871%201197%201197z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var DownArrow = "data:image/svg+xml,%3Csvg%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cg%20id%3D%22background%22%3E%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22none%22%20height%3D%2232%22%20width%3D%2232%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%20%3Cg%20id%3D%22arrow_x5F_down%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%222.002%2C10%2016.001%2C24%2030.002%2C10%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var closeIconTypes = {
  circle: CloseCircleDark,
  circle2: CloseCircle,
  close: CloseSquare,
  cancel: CloseLine
};
var Multiselect = /*#__PURE__*/function (_React$Component) {
  _inherits(Multiselect, _React$Component);

  function Multiselect(props) {
    var _this;

    _classCallCheck(this, Multiselect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Multiselect).call(this, props));
    _this.state = {
      inputValue: "",
      options: props.options,
      filteredOptions: props.options,
      unfilteredOptions: props.options,
      selectedValues: Object.assign([], props.selectedValues),
      preSelectedValues: Object.assign([], props.selectedValues),
      toggleOptionsList: false,
      highlightOption: props.avoidHighlightFirstOption ? -1 : 0,
      showCheckbox: props.showCheckbox,
      keepSearchTerm: props.keepSearchTerm,
      groupedObject: [],
      closeIconType: closeIconTypes[props.closeIcon] || closeIconTypes['circle']
    }; // @ts-ignore

    _this.optionTimeout = null; // @ts-ignore

    _this.searchWrapper = React__default.createRef(); // @ts-ignore

    _this.searchBox = React__default.createRef();
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.renderMultiselectContainer = _this.renderMultiselectContainer.bind(_assertThisInitialized(_this));
    _this.renderSelectedList = _this.renderSelectedList.bind(_assertThisInitialized(_this));
    _this.onRemoveSelectedItem = _this.onRemoveSelectedItem.bind(_assertThisInitialized(_this));
    _this.toggelOptionList = _this.toggelOptionList.bind(_assertThisInitialized(_this));
    _this.onArrowKeyNavigation = _this.onArrowKeyNavigation.bind(_assertThisInitialized(_this));
    _this.onSelectItem = _this.onSelectItem.bind(_assertThisInitialized(_this));
    _this.filterOptionsByInput = _this.filterOptionsByInput.bind(_assertThisInitialized(_this));
    _this.removeSelectedValuesFromOptions = _this.removeSelectedValuesFromOptions.bind(_assertThisInitialized(_this));
    _this.isSelectedValue = _this.isSelectedValue.bind(_assertThisInitialized(_this));
    _this.fadeOutSelection = _this.fadeOutSelection.bind(_assertThisInitialized(_this));
    _this.isDisablePreSelectedValues = _this.isDisablePreSelectedValues.bind(_assertThisInitialized(_this));
    _this.renderGroupByOptions = _this.renderGroupByOptions.bind(_assertThisInitialized(_this));
    _this.renderNormalOption = _this.renderNormalOption.bind(_assertThisInitialized(_this));
    _this.listenerCallback = _this.listenerCallback.bind(_assertThisInitialized(_this));
    _this.resetSelectedValues = _this.resetSelectedValues.bind(_assertThisInitialized(_this));
    _this.getSelectedItems = _this.getSelectedItems.bind(_assertThisInitialized(_this));
    _this.getSelectedItemsCount = _this.getSelectedItemsCount.bind(_assertThisInitialized(_this));
    _this.hideOnClickOutside = _this.hideOnClickOutside.bind(_assertThisInitialized(_this));
    _this.isVisible = _this.isVisible.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Multiselect, [{
    key: "initialSetValue",
    value: function initialSetValue() {
      var _this$props = this.props,
          showCheckbox = _this$props.showCheckbox,
          groupBy = _this$props.groupBy,
          singleSelect = _this$props.singleSelect;
      var options = this.state.options;

      if (!showCheckbox && !singleSelect) {
        this.removeSelectedValuesFromOptions(false);
      } // if (singleSelect) {
      //   this.hideOnClickOutside();
      // }


      if (groupBy && showCheckbox) {
        this.groupByOptions(options);
      }
    }
  }, {
    key: "resetSelectedValues",
    value: function resetSelectedValues() {
      var _this2 = this;

      var unfilteredOptions = this.state.unfilteredOptions;
      return new Promise(function (resolve) {
        _this2.setState({
          selectedValues: [],
          preSelectedValues: [],
          options: unfilteredOptions,
          filteredOptions: unfilteredOptions
        }, function () {
          // @ts-ignore
          resolve();

          _this2.initialSetValue();
        });
      });
    }
  }, {
    key: "getSelectedItems",
    value: function getSelectedItems() {
      return this.state.selectedValues;
    }
  }, {
    key: "getSelectedItemsCount",
    value: function getSelectedItemsCount() {
      return this.state.selectedValues.length;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialSetValue(); // @ts-ignore

      this.searchWrapper.current.addEventListener("click", this.listenerCallback);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          options = _this$props2.options,
          selectedValues = _this$props2.selectedValues;
      var prevOptions = prevProps.options,
          prevSelectedvalues = prevProps.selectedValues;

      if (JSON.stringify(prevOptions) !== JSON.stringify(options)) {
        this.setState({
          options: options,
          filteredOptions: options,
          unfilteredOptions: options
        }, this.initialSetValue);
      }

      if (JSON.stringify(prevSelectedvalues) !== JSON.stringify(selectedValues)) {
        this.setState({
          selectedValues: Object.assign([], selectedValues),
          preSelectedValues: Object.assign([], selectedValues)
        }, this.initialSetValue);
      }
    }
  }, {
    key: "listenerCallback",
    value: function listenerCallback() {
      // @ts-ignore
      this.searchBox.current.focus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // @ts-ignore
      if (this.optionTimeout) {
        // @ts-ignore
        clearTimeout(this.optionTimeout);
      } // @ts-ignore


      this.searchWrapper.current.removeEventListener('click', this.listenerCallback);
    } // Skipcheck flag - value will be true when the func called from on deselect anything.

  }, {
    key: "removeSelectedValuesFromOptions",
    value: function removeSelectedValuesFromOptions(skipCheck) {
      var _this$props3 = this.props,
          isObject = _this$props3.isObject,
          displayValue = _this$props3.displayValue,
          groupBy = _this$props3.groupBy;
      var _this$state = this.state,
          _this$state$selectedV = _this$state.selectedValues,
          selectedValues = _this$state$selectedV === void 0 ? [] : _this$state$selectedV,
          unfilteredOptions = _this$state.unfilteredOptions,
          options = _this$state.options;

      if (!skipCheck && groupBy) {
        this.groupByOptions(options);
      }

      if (!selectedValues.length && !skipCheck) {
        return;
      }

      if (isObject) {
        var _optionList = unfilteredOptions.filter(function (item) {
          return selectedValues.findIndex(function (v) {
            return v[displayValue] === item[displayValue];
          }) === -1 ? true : false;
        });

        if (groupBy) {
          this.groupByOptions(_optionList);
        }

        this.setState({
          options: _optionList,
          filteredOptions: _optionList
        }, this.filterOptionsByInput);
        return;
      }

      var optionList = unfilteredOptions.filter(function (item) {
        return selectedValues.indexOf(item) === -1;
      });
      this.setState({
        options: optionList,
        filteredOptions: optionList
      }, this.filterOptionsByInput);
    }
  }, {
    key: "groupByOptions",
    value: function groupByOptions(options) {
      var groupBy = this.props.groupBy;
      var groupedObject = options.reduce(function (r, a) {
        var key = a[groupBy] || "Others";
        r[key] = r[key] || [];
        r[key].push(a);
        return r;
      }, Object.create({}));
      this.setState({
        groupedObject: groupedObject
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var onSearch = this.props.onSearch;
      this.setState({
        inputValue: event.target.value
      }, this.filterOptionsByInput);

      if (onSearch) {
        onSearch(event.target.value);
      }
    }
  }, {
    key: "filterOptionsByInput",
    value: function filterOptionsByInput() {
      var _this3 = this;

      var _this$state2 = this.state,
          options = _this$state2.options,
          filteredOptions = _this$state2.filteredOptions,
          inputValue = _this$state2.inputValue;
      var _this$props4 = this.props,
          isObject = _this$props4.isObject,
          displayValue = _this$props4.displayValue;

      if (isObject) {
        options = filteredOptions.filter(function (i) {
          return _this3.matchValues(i[displayValue], inputValue);
        });
      } else {
        options = filteredOptions.filter(function (i) {
          return _this3.matchValues(i, inputValue);
        });
      }

      this.groupByOptions(options);
      this.setState({
        options: options
      });
    }
  }, {
    key: "matchValues",
    value: function matchValues(value, search) {
      if (this.props.caseSensitiveSearch) {
        return value.indexOf(search) > -1;
      }

      if (value.toLowerCase) {
        return value.toLowerCase().indexOf(search.toLowerCase()) > -1;
      }

      return value.toString().indexOf(search) > -1;
    }
  }, {
    key: "onArrowKeyNavigation",
    value: function onArrowKeyNavigation(e) {
      var _this$state3 = this.state,
          options = _this$state3.options,
          highlightOption = _this$state3.highlightOption,
          toggleOptionsList = _this$state3.toggleOptionsList,
          inputValue = _this$state3.inputValue,
          selectedValues = _this$state3.selectedValues;
      var disablePreSelectedValues = this.props.disablePreSelectedValues;

      if (e.keyCode === 8 && !inputValue && !disablePreSelectedValues && selectedValues.length) {
        this.onRemoveSelectedItem(selectedValues.length - 1);
      }

      if (!options.length) {
        return;
      }

      if (e.keyCode === 38) {
        if (highlightOption > 0) {
          this.setState(function (previousState) {
            return {
              highlightOption: previousState.highlightOption - 1
            };
          });
        } else {
          this.setState({
            highlightOption: options.length - 1
          });
        }
      } else if (e.keyCode === 40) {
        if (highlightOption < options.length - 1) {
          this.setState(function (previousState) {
            return {
              highlightOption: previousState.highlightOption + 1
            };
          });
        } else {
          this.setState({
            highlightOption: 0
          });
        }
      } else if (e.key === "Enter" && options.length && toggleOptionsList) {
        if (highlightOption === -1) {
          return;
        }

        this.onSelectItem(options[highlightOption]);
      } // TODO: Instead of scrollIntoView need to find better soln for scroll the dropwdown container.
      // setTimeout(() => {
      //   const element = document.querySelector("ul.optionContainer .highlight");
      //   if (element) {
      //     element.scrollIntoView();
      //   }
      // });

    }
  }, {
    key: "onRemoveSelectedItem",
    value: function onRemoveSelectedItem(item) {
      var _this4 = this;

      var _this$state4 = this.state,
          selectedValues = _this$state4.selectedValues,
          _this$state4$index = _this$state4.index,
          index = _this$state4$index === void 0 ? 0 : _this$state4$index;
      var _this$props5 = this.props,
          onRemove = _this$props5.onRemove,
          showCheckbox = _this$props5.showCheckbox,
          displayValue = _this$props5.displayValue,
          isObject = _this$props5.isObject;

      if (isObject) {
        index = selectedValues.findIndex(function (i) {
          return i[displayValue] === item[displayValue];
        });
      } else {
        index = selectedValues.indexOf(item);
      }

      selectedValues.splice(index, 1);
      onRemove(selectedValues, item);
      this.setState({
        selectedValues: selectedValues
      }, function () {
        if (!showCheckbox) {
          _this4.removeSelectedValuesFromOptions(true);
        }
      });

      if (!this.props.closeOnSelect) {
        // @ts-ignore
        this.searchBox.current.focus();
      }
    }
  }, {
    key: "onSelectItem",
    value: function onSelectItem(item) {
      var _this5 = this;

      var selectedValues = this.state.selectedValues;
      var _this$props6 = this.props,
          selectionLimit = _this$props6.selectionLimit,
          onSelect = _this$props6.onSelect,
          singleSelect = _this$props6.singleSelect,
          showCheckbox = _this$props6.showCheckbox;

      if (!this.state.keepSearchTerm) {
        this.setState({
          inputValue: ''
        });
      }

      if (singleSelect) {
        this.onSingleSelect(item);
        onSelect([item], item);
        return;
      }

      if (this.isSelectedValue(item)) {
        this.onRemoveSelectedItem(item);
        return;
      }

      if (selectionLimit == selectedValues.length) {
        return;
      }

      selectedValues.push(item);
      onSelect(selectedValues, item);
      this.setState({
        selectedValues: selectedValues
      }, function () {
        if (!showCheckbox) {
          _this5.removeSelectedValuesFromOptions(true);
        } else {
          _this5.filterOptionsByInput();
        }
      });

      if (!this.props.closeOnSelect) {
        // @ts-ignore
        this.searchBox.current.focus();
      }
    }
  }, {
    key: "onSingleSelect",
    value: function onSingleSelect(item) {
      this.setState({
        selectedValues: [item],
        toggleOptionsList: false
      });
    }
  }, {
    key: "isSelectedValue",
    value: function isSelectedValue(item) {
      var _this$props7 = this.props,
          isObject = _this$props7.isObject,
          displayValue = _this$props7.displayValue;
      var selectedValues = this.state.selectedValues;

      if (isObject) {
        return selectedValues.filter(function (i) {
          return i[displayValue] === item[displayValue];
        }).length > 0;
      }

      return selectedValues.filter(function (i) {
        return i === item;
      }).length > 0;
    }
  }, {
    key: "renderOptionList",
    value: function renderOptionList() {
      var _this$props8 = this.props,
          groupBy = _this$props8.groupBy,
          style = _this$props8.style,
          emptyRecordMsg = _this$props8.emptyRecordMsg,
          loading = _this$props8.loading,
          _this$props8$loadingM = _this$props8.loadingMessage,
          loadingMessage = _this$props8$loadingM === void 0 ? 'loading...' : _this$props8$loadingM;
      var options = this.state.options;

      if (loading) {
        return React__default.createElement("ul", {
          className: "optionContainer",
          style: style['optionContainer']
        }, typeof loadingMessage === 'string' && React__default.createElement("span", {
          style: style['loadingMessage'],
          className: "notFound"
        }, loadingMessage), typeof loadingMessage !== 'string' && loadingMessage);
      }

      return React__default.createElement("ul", {
        className: "optionContainer",
        style: style['optionContainer']
      }, options.length === 0 && React__default.createElement("span", {
        style: style['notFound'],
        className: "notFound"
      }, emptyRecordMsg), !groupBy ? this.renderNormalOption() : this.renderGroupByOptions());
    }
  }, {
    key: "renderGroupByOptions",
    value: function renderGroupByOptions() {
      var _this6 = this;

      var _this$props9 = this.props,
          _this$props9$isObject = _this$props9.isObject,
          isObject = _this$props9$isObject === void 0 ? false : _this$props9$isObject,
          displayValue = _this$props9.displayValue,
          showCheckbox = _this$props9.showCheckbox,
          style = _this$props9.style,
          singleSelect = _this$props9.singleSelect;
      var groupedObject = this.state.groupedObject;
      return Object.keys(groupedObject).map(function (obj) {
        return React__default.createElement(React__default.Fragment, {
          key: obj
        }, React__default.createElement("li", {
          className: "groupHeading",
          style: style['groupHeading']
        }, obj), groupedObject[obj].map(function (option, i) {
          return React__default.createElement("li", {
            key: "option".concat(i),
            style: style['option'],
            className: "\n               groupChildEle ".concat(_this6.fadeOutSelection(option) && 'disableSelection', "\n                ").concat(_this6.isDisablePreSelectedValues(option) && 'disableSelection', " option\n              "),
            onClick: function onClick() {
              return _this6.onSelectItem(option);
            }
          }, showCheckbox && !singleSelect && React__default.createElement("input", {
            type: "checkbox",
            className: 'checkbox',
            readOnly: true,
            checked: _this6.isSelectedValue(option)
          }), isObject ? option[displayValue] : (option || '').toString());
        }));
      });
    }
  }, {
    key: "renderNormalOption",
    value: function renderNormalOption() {
      var _this7 = this;

      var _this$props10 = this.props,
          _this$props10$isObjec = _this$props10.isObject,
          isObject = _this$props10$isObjec === void 0 ? false : _this$props10$isObjec,
          displayValue = _this$props10.displayValue,
          showCheckbox = _this$props10.showCheckbox,
          style = _this$props10.style,
          singleSelect = _this$props10.singleSelect;
      var highlightOption = this.state.highlightOption;
      return this.state.options.map(function (option, i) {
        return React__default.createElement("li", {
          key: "option".concat(i),
          style: style['option'],
          className: "\n              ".concat(highlightOption === i ? "highlightOption highlight" : "", " \n              ").concat(_this7.fadeOutSelection(option) && 'disableSelection', " \n              ").concat(_this7.isDisablePreSelectedValues(option) && 'disableSelection', " option\n            "),
          onClick: function onClick() {
            return _this7.onSelectItem(option);
          }
        }, showCheckbox && !singleSelect && React__default.createElement("input", {
          type: "checkbox",
          readOnly: true,
          className: "checkbox",
          checked: _this7.isSelectedValue(option)
        }), isObject ? option[displayValue] : (option || '').toString());
      });
    }
  }, {
    key: "renderSelectedList",
    value: function renderSelectedList() {
      var _this8 = this;

      var _this$props11 = this.props,
          _this$props11$isObjec = _this$props11.isObject,
          isObject = _this$props11$isObjec === void 0 ? false : _this$props11$isObjec,
          displayValue = _this$props11.displayValue,
          style = _this$props11.style,
          singleSelect = _this$props11.singleSelect,
          customCloseIcon = _this$props11.customCloseIcon;
      var _this$state5 = this.state,
          selectedValues = _this$state5.selectedValues,
          closeIconType = _this$state5.closeIconType;
      return selectedValues.map(function (value, index) {
        return React__default.createElement("span", {
          className: "chip  ".concat(singleSelect && 'singleChip', " ").concat(_this8.isDisablePreSelectedValues(value) && 'disableSelection'),
          key: index,
          style: style['chips']
        }, !isObject ? (value || '').toString() : value[displayValue], !_this8.isDisablePreSelectedValues(value) && (!customCloseIcon ? React__default.createElement("img", {
          className: "icon_cancel closeIcon",
          src: closeIconType,
          onClick: function onClick() {
            return _this8.onRemoveSelectedItem(value);
          }
        }) : React__default.createElement("i", {
          className: "custom-close",
          onClick: function onClick() {
            return _this8.onRemoveSelectedItem(value);
          }
        }, customCloseIcon)));
      });
    }
  }, {
    key: "isDisablePreSelectedValues",
    value: function isDisablePreSelectedValues(value) {
      var _this$props12 = this.props,
          isObject = _this$props12.isObject,
          disablePreSelectedValues = _this$props12.disablePreSelectedValues,
          displayValue = _this$props12.displayValue;
      var preSelectedValues = this.state.preSelectedValues;

      if (!disablePreSelectedValues || !preSelectedValues.length) {
        return false;
      }

      if (isObject) {
        return preSelectedValues.filter(function (i) {
          return i[displayValue] === value[displayValue];
        }).length > 0;
      }

      return preSelectedValues.filter(function (i) {
        return i === value;
      }).length > 0;
    }
  }, {
    key: "fadeOutSelection",
    value: function fadeOutSelection(item) {
      var _this$props13 = this.props,
          selectionLimit = _this$props13.selectionLimit,
          showCheckbox = _this$props13.showCheckbox,
          singleSelect = _this$props13.singleSelect;

      if (singleSelect) {
        return;
      }

      var selectedValues = this.state.selectedValues;

      if (selectionLimit == -1) {
        return false;
      }

      if (selectionLimit != selectedValues.length) {
        return false;
      }

      if (selectionLimit == selectedValues.length) {
        if (!showCheckbox) {
          return true;
        } else {
          if (this.isSelectedValue(item)) {
            return false;
          }

          return true;
        }
      }
    }
  }, {
    key: "toggelOptionList",
    value: function toggelOptionList() {
      this.setState({
        toggleOptionsList: !this.state.toggleOptionsList,
        highlightOption: this.props.avoidHighlightFirstOption ? -1 : 0
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      if (this.state.toggleOptionsList) {
        // @ts-ignore
        clearTimeout(this.optionTimeout);
      } else {
        this.toggelOptionList();
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      // @ts-ignore
      this.optionTimeout = setTimeout(this.toggelOptionList, 250);
    }
  }, {
    key: "isVisible",
    value: function isVisible(elem) {
      return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    }
  }, {
    key: "hideOnClickOutside",
    value: function hideOnClickOutside() {
      var _this9 = this;

      var element = document.getElementsByClassName('multiselect-container')[0];

      var outsideClickListener = function outsideClickListener(event) {
        if (element && !element.contains(event.target) && _this9.isVisible(element)) {
          _this9.toggelOptionList();
        }
      };

      document.addEventListener('click', outsideClickListener);
    }
  }, {
    key: "renderMultiselectContainer",
    value: function renderMultiselectContainer() {
      var _this$state6 = this.state,
          inputValue = _this$state6.inputValue,
          toggleOptionsList = _this$state6.toggleOptionsList,
          selectedValues = _this$state6.selectedValues;
      var _this$props14 = this.props,
          placeholder = _this$props14.placeholder,
          style = _this$props14.style,
          singleSelect = _this$props14.singleSelect,
          id = _this$props14.id,
          hidePlaceholder = _this$props14.hidePlaceholder,
          disable = _this$props14.disable,
          showArrow = _this$props14.showArrow;
      return React__default.createElement("div", {
        className: "multiselect-container multiSelectContainer ".concat(disable ? "disable_ms" : ''),
        id: id || 'multiselectContainerReact',
        style: style['multiselectContainer']
      }, React__default.createElement("div", {
        className: "search-wrapper searchWrapper ".concat(singleSelect ? 'singleSelect' : ''),
        ref: this.searchWrapper,
        style: style['searchBox'],
        onClick: singleSelect ? this.toggelOptionList : function () {}
      }, this.renderSelectedList(), React__default.createElement("input", {
        type: "text",
        ref: this.searchBox,
        className: "searchBox",
        id: "".concat(id || 'search', "_input"),
        onChange: this.onChange,
        value: inputValue,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        placeholder: singleSelect && selectedValues.length || hidePlaceholder && selectedValues.length ? '' : placeholder,
        onKeyDown: this.onArrowKeyNavigation,
        style: style['inputField'],
        autoComplete: "off",
        disabled: singleSelect || disable
      }), (singleSelect || showArrow) && React__default.createElement("img", {
        src: DownArrow,
        className: "icon_cancel icon_down_dir"
      })), React__default.createElement("div", {
        className: "optionListContainer ".concat(toggleOptionsList ? 'displayBlock' : 'displayNone')
      }, this.renderOptionList()));
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderMultiselectContainer();
    }
  }]);

  return Multiselect;
}(React__default.Component);
Multiselect.defaultProps = {
  options: [],
  disablePreSelectedValues: false,
  selectedValues: [],
  isObject: true,
  displayValue: "model",
  showCheckbox: false,
  selectionLimit: -1,
  placeholder: "Select",
  groupBy: "",
  style: {},
  emptyRecordMsg: "No Options Available",
  onSelect: function onSelect() {},
  onRemove: function onRemove() {},
  closeIcon: 'circle2',
  singleSelect: false,
  caseSensitiveSearch: false,
  id: '',
  closeOnSelect: true,
  avoidHighlightFirstOption: false,
  hidePlaceholder: false,
  showArrow: false,
  keepSearchTerm: false,
  customCloseIcon: ''
};

exports.Multiselect = Multiselect;
exports.default = Multiselect;
//# sourceMappingURL=multiselect-react-dropdown.cjs.development.js.map


/***/ }),

/***/ "./src/components/Repeater/index.js":
/*!******************************************!*\
  !*** ./src/components/Repeater/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Repeater; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/Repeater/style.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */



const icons = {
  duplicate: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    viewBox: "-56 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "m395.980469 112.582031-108.023438-108.023437c-2.960937-2.960938-6.949219-4.558594-11.019531-4.558594h-156.339844c-8.597656 0-15.578125 6.980469-15.578125 15.578125v89.445313h-89.441406c-8.597656 0-15.578125 6.976562-15.578125 15.578124v375.820313c0 8.597656 6.980469 15.578125 15.578125 15.578125h264.359375c8.601562 0 15.582031-6.980469 15.582031-15.578125v-89.445313h89.441407c8.597656 0 15.578124-6.976562 15.578124-15.578124v-267.796876c0-3.960937-1.523437-7.984374-4.558593-11.019531zm-26.597657 263.238281h-73.863281v-147.195312c0-4.035156-1.570312-8.03125-4.5625-11.023438l-108.019531-108.019531c-2.933594-2.9375-6.914062-4.5625-11.019531-4.5625h-35.738281v-73.863281h125.179687v92.445312c0 8.597657 6.980469 15.578126 15.578125 15.578126h92.445312zm-105.023437 105.023438h-233.203125v-344.664062h125.179688v92.445312c0 8.597656 6.980468 15.578125 15.582031 15.578125h92.441406zm-76.863281-322.636719 54.835937 54.835938h-54.835937zm159.855468-50.183593h-54.835937v-54.835938c6.855469 6.851562 49.367187 49.367188 54.835937 54.835938zm0 0"
  })),
  remove: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"
  })))),
  add: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 52 52"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1 s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"
  })))
};
/**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */

function Repeater({
  attributes,
  setAttributes
}) {
  const {
    customFields
  } = attributes;
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(customFields || [{
    id: 1,
    meta_key: 'Title',
    value: '',
    operator: ''
  }]);
  const [collapsedId, setCollapsedId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const handleItemRemove = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const handleItemDuplicate = id => {
    let duplicate = items.find(item => item.id === id);
    let newItems = [...items];
    duplicate = { ...duplicate,
      id: items.length + 1
    };
    newItems.splice(id, 0, duplicate);
    setItems(newItems);
  };

  const handleAddItem = () => {
    const newItem = [{
      id: items.length + 1,
      meta_key: 'Title',
      value: '',
      operator: ''
    }];
    setItems([...items, ...newItem]);
  };

  const handleMetaKeyChange = (ev, index) => {
    const newItems = [...items];
    const name = ev.target.name;
    newItems[index][name] = ev.target.value;
    setItems(newItems);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setAttributes({
      customFields: items
    });
  }, [items]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "uqb-control-title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Custom Fields key/value', 'uqb')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-repeater-fields-wrapper"
  }, items.map((item, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-repeater-fields",
    key: index
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-repeater-row-tools"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-repeater-row-item-title",
    onClick: () => setCollapsedId(item.id)
  }, item.meta_key), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-repeater-row-tool uqb-repeater-tool-duplicate",
    onClick: () => handleItemDuplicate(item.id)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "uqb-repeater-icon"
  }, icons.duplicate)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-repeater-row-tool uqb-repeater-tool-remove",
    onClick: () => handleItemRemove(item.id)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "uqb-repeater-icon"
  }, icons.remove))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `uqb-repeater-row-controls${item.id === collapsedId ? ' editable' : ''}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "meta_key"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Name/Key', 'uqb'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    name: "meta_key",
    value: item.meta_key,
    onChange: e => handleMetaKeyChange(e, index)
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "meta_value"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Value', 'uqb'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    name: "meta_value",
    value: item.meta_value,
    onChange: e => handleMetaKeyChange(e, index)
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "compare_operator"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Compare Operator', 'uqb'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    name: "operator",
    value: item.operator,
    onChange: e => handleMetaKeyChange(e, index)
  })))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-control-button-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    class: "uqb-repeater-add",
    type: "button",
    onClick: handleAddItem
  }, icons.add, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Item', 'uqb'))));
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

const {
  serverSideRender: ServerSideRender
} = wp;
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  isSelected,
  attributes,
  setAttributes
}) {
  return [isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
    block: "uqb/query-builder"
  })];
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const {
  serverSideRender: ServerSideRender
} = wp;
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('uqb/query-builder', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Ultimate Query Builder", "create-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Display posts pages and build your own query", "create-block"),
  category: "widgets",
  attributes: {
    postType: {
      type: 'array'
    },
    taxonomy: {
      type: 'array'
    },
    terms: {
      type: 'array'
    },
    customFields: {
      type: 'array'
    }
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multiselect-react-dropdown */ "./node_modules/multiselect-react-dropdown/dist/index.js");
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Repeater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Repeater */ "./src/components/Repeater/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");








function Inspector({
  attributes,
  setAttributes
}) {
  const {
    postType,
    taxonomy,
    terms
  } = attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], {
    key: "controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-select-post-type-control-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Post Type')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "uqb_post_type",
    displayValue: "label",
    singleSelect: true,
    selectedValues: postType,
    options: window.uqbPlugins.publicPostTypes,
    onSelect: value => setAttributes({
      postType: value,
      taxonomy: null,
      terms: null
    }),
    onRemove: value => setAttributes({
      postType: value,
      taxonomy: null,
      terms: null
    })
  })), postType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-select-taxonomy-control-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Post Taxonomy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "uqb_post_taxonomy",
    displayValue: "label",
    singleSelect: true,
    selectedValues: taxonomy,
    options: window.uqbPlugins.taxonomies[postType[0].value],
    onSelect: value => setAttributes({
      taxonomy: value,
      terms: null
    }),
    onRemove: value => setAttributes({
      taxonomy: value,
      terms: null
    })
  })), taxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uqb-select-terms-control-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Terms')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "uqb_post_terms",
    displayValue: "label",
    selectedValues: terms,
    options: window.uqbPlugins.terms[taxonomy[0].name],
    onSelect: value => setAttributes({
      terms: value
    }),
    onRemove: value => setAttributes({
      terms: value
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Repeater__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ultimate Query Builder – hello from the saved content!', 'ultimate-query-builder'));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map