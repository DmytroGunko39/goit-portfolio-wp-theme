/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block.js"
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n;\n\n\n\n\n\n// Styles\n\n\n// Block name\nvar className = \"skill-section\";\nvar TEMPLATE = [[\"core/group\", {}, [[\"core/image\", {}], [\"core/heading\", {\n  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(\"Skill Name\", \"goit\"),\n  level: 5\n}], [\"core/paragraph\", {\n  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(\"Skill Description\", \"goit\")\n}]]]];\nvar CustomAppender = function CustomAppender(_ref) {\n  var clientId = _ref.clientId;\n  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(\"core/block-editor\"),\n    insertBlocks = _useDispatch.insertBlocks;\n  var addTemplateBlock = function addTemplateBlock() {\n    var groupBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"core/group\", {}, TEMPLATE[0][2].map(function (_ref2) {\n      var _ref3 = _slicedToArray(_ref2, 2),\n        blockName = _ref3[0],\n        blockAttributes = _ref3[1];\n      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)(blockName, blockAttributes);\n    }));\n    insertBlocks([groupBlock], undefined, clientId);\n  };\n  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n    variant: \"secondary\",\n    onClick: addTemplateBlock\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(\"Add Template Blocks\", \"goit\"));\n};\n// Register block\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(\"goit/\".concat(className), {\n  apiVersion: 3,\n  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(\"Skill Section\", \"goit\"),\n  category: \"goit\",\n  icon: \"welcome-write-blog\",\n  attributes: {\n    heading: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"h3\"\n    },\n    description: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"p\"\n    }\n  },\n  // Edit function\n  edit: function edit(_ref4) {\n    var clientId = _ref4.clientId,\n      attributes = _ref4.attributes,\n      setAttributes = _ref4.setAttributes;\n    var heading = attributes.heading,\n      description = attributes.description;\n    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({\n      className: className\n    });\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {\n      tagName: \"h3\",\n      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(\"Your text here...\", \"goit\"),\n      value: heading,\n      onChange: function onChange(value) {\n        return setAttributes({\n          heading: value\n        });\n      },\n      className: \"\".concat(className, \"__title\")\n    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {\n      tagName: \"p\",\n      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(\"I will help you with finding a solution...\", \"goit\"),\n      value: description,\n      onChange: function onChange(value) {\n        return setAttributes({\n          description: value\n        });\n      },\n      className: \"\".concat(className, \"__description\")\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"\".concat(className, \"__skills\")\n    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {\n      templateLock: false,\n      renderAppender: function renderAppender() {\n        return /*#__PURE__*/React.createElement(CustomAppender, {\n          clientId: clientId\n        });\n      }\n    })));\n  },\n  // Save function\n  save: function save(_ref5) {\n    var attributes = _ref5.attributes;\n    var heading = attributes.heading,\n      description = attributes.description;\n    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({\n      className: \"\".concat(className, \"__block container\")\n    });\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {\n      tagName: \"h3\",\n      value: heading,\n      className: \"\".concat(className, \"__title\")\n    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {\n      tagName: \"p\",\n      value: description,\n      className: \"\".concat(className, \"__description\")\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"\".concat(className, \"__skills\")\n    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));\n  },\n  // Deprecated apiVersion 1 entry: keeps the old, bare <div> save() around\n  // so posts saved before the apiVersion 3 / useBlockProps migration still\n  // pass block validation instead of showing \"invalid content\".\n  deprecated: [{\n    apiVersion: 1,\n    attributes: {\n      heading: {\n        type: \"string\",\n        source: \"html\",\n        selector: \"h3\"\n      },\n      description: {\n        type: \"string\",\n        source: \"html\",\n        selector: \"p\"\n      }\n    },\n    save: function save(_ref6) {\n      var attributes = _ref6.attributes;\n      var heading = attributes.heading,\n        description = attributes.description;\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"\".concat(className, \"__block container\")\n      }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {\n        tagName: \"h3\",\n        value: heading,\n        className: \"\".concat(className, \"__title\")\n      }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {\n        tagName: \"p\",\n        value: description,\n        className: \"\".concat(className, \"__description\")\n      }), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"\".concat(className, \"__skills\")\n      }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));\n    }\n  }]\n});\n\n//# sourceURL=webpack://skill-section/./src/block.js?\n}");

/***/ },

/***/ "./src/style.scss"
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://skill-section/./src/style.scss?\n}");

/***/ },

/***/ "@wordpress/block-editor"
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
(module) {

module.exports = wp.blockEditor;

/***/ },

/***/ "@wordpress/blocks"
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
(module) {

module.exports = wp.blocks;

/***/ },

/***/ "@wordpress/components"
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
(module) {

module.exports = wp.components;

/***/ },

/***/ "@wordpress/data"
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
(module) {

module.exports = wp.data;

/***/ },

/***/ "@wordpress/i18n"
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
(module) {

module.exports = wp.i18n;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/block.js");
/******/ 	
/******/ })()
;