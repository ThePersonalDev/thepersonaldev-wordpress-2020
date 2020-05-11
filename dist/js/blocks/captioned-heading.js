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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/blocks/captioned-heading.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/blocks/captioned-heading.js":
/*!***********************************************!*\
  !*** ./assets/js/blocks/captioned-heading.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('svg', {
  viewBox: '0 0 512 512'
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('path', {
  d: 'M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'
}));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('tpd/captioned-heading', {
  title: 'Captioned Heading',
  category: 'theme_blocks',
  icon: icon,
  attributes: {
    subtitle: {
      type: 'array',
      source: 'children',
      selector: 'p.tpd-captioned-heading-subtitle'
    },
    heading: {
      type: 'array',
      source: 'children',
      selector: 'h2.tpd-captioned-heading'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'div.tpd-captioned-heading-content'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        subtitle = _props$attributes.subtitle,
        heading = _props$attributes.heading,
        content = _props$attributes.content,
        setAttributes = props.setAttributes;

    var onChangeHeading = function onChangeHeading(val) {
      setAttributes({
        heading: val
      });
    };

    var onChangeSubtitle = function onChangeSubtitle(val) {
      setAttributes({
        subtitle: val
      });
    };

    var onChangeContent = function onChangeContent(val) {
      setAttributes({
        content: val
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "p",
      className: "tpd-captioned-heading-subtitle",
      placeholder: "Subtitle text",
      label: "Subtitle",
      onChange: onChangeSubtitle,
      value: subtitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "h2",
      className: "tpd-captioned-heading",
      placeholder: "Heading text",
      label: "Heading",
      onChange: onChangeHeading,
      value: heading
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "div",
      className: "tpd-captioned-heading-content",
      placeholder: "Heading content",
      label: "Heading",
      onChange: onChangeContent,
      value: content
    }));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        subtitle = _props$attributes2.subtitle,
        heading = _props$attributes2.heading,
        content = _props$attributes2.content;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      className: "tpd-captioned-heading-subtitle",
      tagName: "p",
      value: subtitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      className: "tpd-captioned-heading",
      tagName: "h2",
      value: heading
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      className: "tpd-captioned-heading-content",
      tagName: "div",
      value: content
    }));
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

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=captioned-heading.js.map