/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/blocks/labeled-progress-bar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/blocks/labeled-progress-bar.js":
/*!**************************************************!*\
  !*** ./assets/js/blocks/labeled-progress-bar.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('svg', {
  viewBox: '0 0 512 512'
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('g', {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('path', {
  style: {
    opacity: 0.5
  },
  d: 'M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z'
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('path', {
  d: 'M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z'
})));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('tpd/labeled-progress-bar', {
  title: 'Labeled Progress Bar',
  category: 'theme_blocks',
  icon: icon,
  attributes: {
    label: {
      type: 'array',
      source: 'children',
      selector: '.tpd-labeled-progress-bar-label'
    },
    percent: {
      type: 'string',
      default: 0
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        label = _props$attributes.label,
        percent = _props$attributes.percent,
        setAttributes = props.setAttributes;

    var onChangeLabel = function onChangeLabel(val) {
      setAttributes({
        label: val
      });
    };

    var onChangePercent = function onChangePercent(val) {
      setAttributes({
        percent: val
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "tpd-control-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "div",
      className: "tpd-labeled-progress-bar-label",
      placeholder: "Label text",
      label: "Label",
      onChange: onChangeLabel,
      value: label
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      label: "Percent",
      type: "number",
      className: "tpd-labeled-progress-bar-percent",
      onChange: onChangePercent,
      value: percent
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "tpd-labeled-progress-bar"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      style: {
        width: "".concat(percent, "%")
      }
    })));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        label = _props$attributes2.label,
        percent = _props$attributes2.percent;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "tpd-control-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "tpd-labeled-progress-bar-label",
      tagName: "div",
      value: label
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "tpd-labeled-progress-bar-percent"
    }, percent)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "tpd-labeled-progress-bar"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      style: {
        width: "".concat(percent, "%")
      }
    })));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=labeled-progress-bar.js.map