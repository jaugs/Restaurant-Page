/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Tolkien.ttf */ "./src/Tolkien.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./woodHeader.jpg */ "./src/woodHeader.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./leather.jpg */ "./src/leather.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./parchment.jpg */ "./src/parchment.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n@font-face {\r\n    font-family: 'MyFont';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n  \r\nbody {\r\n    margin: 0;\r\n    padding: 0px\r\n}\r\n\r\n#wood {\r\n    width:fit-content;\r\n    height: 300px;\r\n    border: 5px solid black;\r\n}\r\n\r\n#ponyLogo {\r\n    height: 200px;\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: white;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: 60% 78%;\r\n    background-position: center center;\r\n\r\n}\r\n\r\n.linkButton {\r\n    width: 175px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: 60% 78%;\r\n    background-position: center center;\r\n    color: antiquewhite;\r\n    font-family: 'MyFont';\r\n    font-weight: 900;\r\n    font-size: 30px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.linkButton:hover {\r\n    filter: brightness(80%);\r\n    color: white;\r\n   \r\n}\r\n\r\n\r\n.linkButton:active {\r\n    color: white;\r\n    box-shadow: 0 5px rgb(0, 0, 0);\r\n    transform: translateY(4px);\r\n\r\n\r\n\r\n\r\n}\r\n#content {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: 60% 78%;\r\n    background-position: center center;\r\n    color: white;\r\n    font-size: 28px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 5px;\r\n    padding-top: 20px;\r\n}\r\n\r\n#content.menuContent, .menuContent {\r\n    background-size: 50% 25%;\r\n}\r\n\r\n.title {\r\n    font-family: 'MyFont';\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    width: 525px;\r\n    color: black;\r\n    /* border: 2px solid black; */\r\n    padding: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: 100% 100%;\r\n    background-position: center center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset\r\n  \r\n}\r\n\r\n.card {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n}\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item {\r\n    font-family: 'MyFont';\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    width: 525px;\r\n    color: black;\r\n    padding: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-size: 100% 100%;\r\n    background-position: center center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset\r\n  \r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,qBAAqB;IACrB,+DAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,SAAS;IACT;AACJ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,mDAAmC;IACnC,wBAAwB;IACxB,kCAAkC;;AAEtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mDAAgC;IAChC,wBAAwB;IACxB,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,2CAA2C;AAC/C;;AAEA;IACI,uBAAuB;IACvB,YAAY;;AAEhB;;;AAGA;IACI,YAAY;IACZ,8BAA8B;IAC9B,0BAA0B;;;;;AAK9B;AACA;IACI,mDAAmC;IACnC,wBAAwB;IACxB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,mDAAkC;IAClC,0BAA0B;IAC1B,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;;AAEJ;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mDAAkC;IAClC,0BAA0B;IAC1B,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;;AAEJ;;AAEA;IACI,YAAY;AAChB","sourcesContent":["\r\n@font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n  \r\nbody {\r\n    margin: 0;\r\n    padding: 0px\r\n}\r\n\r\n#wood {\r\n    width:fit-content;\r\n    height: 300px;\r\n    border: 5px solid black;\r\n}\r\n\r\n#ponyLogo {\r\n    height: 200px;\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: white;\r\n    background: url('./woodHeader.jpg');\r\n    background-size: 60% 78%;\r\n    background-position: center center;\r\n\r\n}\r\n\r\n.linkButton {\r\n    width: 175px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background: url('./leather.jpg');\r\n    background-size: 60% 78%;\r\n    background-position: center center;\r\n    color: antiquewhite;\r\n    font-family: 'MyFont';\r\n    font-weight: 900;\r\n    font-size: 30px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.linkButton:hover {\r\n    filter: brightness(80%);\r\n    color: white;\r\n   \r\n}\r\n\r\n\r\n.linkButton:active {\r\n    color: white;\r\n    box-shadow: 0 5px rgb(0, 0, 0);\r\n    transform: translateY(4px);\r\n\r\n\r\n\r\n\r\n}\r\n#content {\r\n    background: url('./background.jpg');\r\n    background-size: 60% 78%;\r\n    background-position: center center;\r\n    color: white;\r\n    font-size: 28px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 5px;\r\n    padding-top: 20px;\r\n}\r\n\r\n#content.menuContent, .menuContent {\r\n    background-size: 50% 25%;\r\n}\r\n\r\n.title {\r\n    font-family: 'MyFont';\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    width: 525px;\r\n    color: black;\r\n    /* border: 2px solid black; */\r\n    padding: 30px;\r\n    background: url('./parchment.jpg');\r\n    background-size: 100% 100%;\r\n    background-position: center center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset\r\n  \r\n}\r\n\r\n.card {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n}\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item {\r\n    font-family: 'MyFont';\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    width: 525px;\r\n    color: black;\r\n    padding: 30px;\r\n    background: url('./parchment.jpg');\r\n    background-size: 100% 100%;\r\n    background-position: center center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset\r\n  \r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _barliman_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barliman.jpg */ "./src/barliman.jpg");
/* harmony import */ var _nob_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nob.jpg */ "./src/nob.jpg");

;



function createItem(string, id) {
    let title = string;
    let item = document.createElement('div');
    item.setAttribute('id', id);
    item.setAttribute('class', 'item');
    item.innerText = title;
    return item;
 }
 
 function createTitle(string) {
    let titleText = string;
    let title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerText = titleText;
    return title;
 }
 
 function createDescription(string) {
    let title = document.createElement('div');
    title.setAttribute('class', 'text');
    title.innerText = string;
    return title;
 }
 
 function createImage(string, id){
    let newImage = new Image();
    newImage.src = string;
    newImage.id = id;
    newImage.className = 'image';
    return newImage;
 }

function createContact () {
    let content = document.getElementById('content');

    let contactTitle = createTitle('Contact Us');
    content.appendChild(contactTitle);

    let barlimanCard = createItem('Barliman Butterbur', 'barliman')
    content.appendChild(barlimanCard);
    let barlimanImage = createImage(_barliman_jpg__WEBPACK_IMPORTED_MODULE_0__, 'barliman');
    barlimanCard.appendChild(barlimanImage);
    let barlimanText = createDescription('Innkeep - BBbur@breeland.net');
    barlimanCard.appendChild(barlimanText);

    let nobCard = createItem('Nob', 'nob')
    content.appendChild(nobCard);
    let nobImage = createImage(_nob_jpg__WEBPACK_IMPORTED_MODULE_1__, 'nob');
    nobCard.appendChild(nobImage);
    let nobText = createDescription('Cook - slowcoach1@breeland.net');
    nobCard.appendChild(nobText);

} 

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomepage": () => (/* binding */ createHomepage)
/* harmony export */ });


function createHeading() {
        let title = "- by Barliman Butterbur";
        let heading = document.createElement('div');
        heading.setAttribute('id', 'heading');
        heading.setAttribute('class', 'card');
        heading.innerText = title;
        return heading;
    }

function createTitle(string) {
        let titleText = string;
        let title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.innerText = titleText;
        return title;
}

function createText() {
    let infoText = "The Prancing Pony has been a Breeland staple for over 300 years. Come and stay in our most comfortable rooms (including Hobbit-Sized rooms) while enjoing the best food west of the Misty Mountains! - Barliman";
    let info1 = document.createElement('div');
    info1.setAttribute('id', 'text');
    info1.setAttribute('class', 'card');
    info1.innerText = infoText;
    return info1;
}

function createHours() {
        let list = document.createElement('ul');
        list.setAttribute('id', 'hourList');
        list.setAttribute('class', 'card');
        let data = ["Breakfast: served at Sunrise daily", "Second-Breakfast: served two hours after Sunrise", "Luncheon: served at high noon", "Supper: served at Sunset", "Stables available upon request"]
  
        data.forEach((item) => {
            let li = document.createElement("li");
            li.setAttribute('class', 'listItem')
            li.innerText = item;
            list.appendChild(li);
      });
    return list;
}

function createLocation() {
    let infoText = "Find us just past the West-Gate, in Bree, west of Chet-wood, north from the Greenway"
    let location = document.createElement('div');
    location.setAttribute('id', 'location');
    location.setAttribute('class', 'card');
    location.innerText = infoText;
    return location;
}

function createHomepage() {
   
    let title = createTitle('The Prancing Pony')
    content.appendChild(title);
    title.appendChild(createHeading());
    
    let title1 = createTitle('About')
    content.appendChild(title1);
    title1.appendChild(createText());
    
    let title2 = createTitle('Hours')
    content.appendChild(title2);
    title2.appendChild(createHours());
    
    let title3 = createTitle('Location')
    content.appendChild(title3);
    title3.appendChild(createLocation());

    let footer = createTitle('By JAUGS 2022');
    footer.setAttribute('id', 'footer');
    content.appendChild(footer);
    }

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _beer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer.jpg */ "./src/beer.jpg");
/* harmony import */ var _wine_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wine.jpg */ "./src/wine.jpg");
/* harmony import */ var _breakfast_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakfast.jpg */ "./src/breakfast.jpg");
/* harmony import */ var _chicken_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken.JPG */ "./src/chicken.JPG");
/* harmony import */ var _stew_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stew.jpg */ "./src/stew.jpg");
/* harmony import */ var _rooms_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms.jpg */ "./src/rooms.jpg");
/* harmony import */ var _stables_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stables.jpg */ "./src/stables.jpg");
 
 ;
 
 
 
 
 
 

 function createItem(string, id) {
   let title = string;
   let item = document.createElement('div');
   item.setAttribute('id', id);
   item.setAttribute('class', 'item');
   item.innerText = title;
   return item;
}

function createTitle(string) {
   let titleText = string;
   let title = document.createElement('div');
   title.setAttribute('class', 'title');
   title.innerText = titleText;
   return title;
}

function createDescription(string) {
   let title = document.createElement('div');
   title.setAttribute('class', 'text');
   title.innerText = string;
   return title;
}

function createImage(string, id){
   let newImage = new Image();
   newImage.src = string;
   newImage.id = id;
   newImage.className = 'image';
   return newImage;
}

 function createMenu() {
   let content = document.getElementById('content');
   content.setAttribute('class', 'menuContent');

   let drinkTitle = createTitle('Beverages');
   content.appendChild(drinkTitle);

   let beerCard = createItem('Beer', 'beer')
   content.appendChild(beerCard);
   let beerImage = createImage(_beer_jpg__WEBPACK_IMPORTED_MODULE_0__, 'beer');
   beerCard.appendChild(beerImage);
   let beerText = createDescription('Best beer west of the Misty Mountains, enchanted by the great Wizard Gandalf himself! Comes in pints or Hobbit sized mugs.');
   beerCard.appendChild(beerText);

   let wineCard = createItem('Wine', 'wine')
   content.appendChild(wineCard);
   let wineImage = createImage(_wine_jpg__WEBPACK_IMPORTED_MODULE_1__, 'wine');
   wineCard.appendChild(wineImage);
   let wineText = createDescription('Imported white wine from the Old Winyards in the Southfarthing.');
   wineCard.appendChild(wineText);

   let foodTitle = createTitle('Food');
   content.appendChild(foodTitle);

   let breakfastCard = createItem('Full Breeland Breakfast', 'breakfast')
   content.appendChild(breakfastCard);
   let breakfastImage = createImage(_breakfast_jpg__WEBPACK_IMPORTED_MODULE_2__, 'breakfast');
   breakfastCard.appendChild(breakfastImage);
   let breakfastText = createDescription('Toast, fried egg, tomatos, beans, sausage and nice crispy bacon.');
   breakfastCard.appendChild(breakfastText);

   let chickenCard = createItem('Roast Chicken Dinner', 'chicken')
   content.appendChild(chickenCard);
   let chickenImage = createImage(_chicken_JPG__WEBPACK_IMPORTED_MODULE_3__, 'chicken');
   chickenCard.appendChild(chickenImage);
   let chickenText = createDescription('Hand-carved roast chicken, gravy drippings, golden mashed taters with mushy peas.');
   chickenCard.appendChild(chickenText);

   let stewCard = createItem('Beef and Tater Stew', 'stew')
   content.appendChild(stewCard);
   let stewImage = createImage(_stew_jpg__WEBPACK_IMPORTED_MODULE_4__, 'stew');
   stewCard.appendChild(stewImage);
   let stewText = createDescription('Rich and hearty beef stew, with potatoes, carrots, peas and celery. Served with hunks of fresh baked bread.');
   stewCard.appendChild(stewText);

   let serviceTitle = createTitle('Services');
   content.appendChild(serviceTitle);

   let roomsCard = createItem('Accomodations', 'rooms')
   content.appendChild(roomsCard);
   let roomsImage = createImage(_rooms_jpg__WEBPACK_IMPORTED_MODULE_5__, 'rooms');
   roomsCard.appendChild(roomsImage);
   let roomsText = createDescription('Big People sized and even some lower-level Hobbit sized rooms available, each with personal fireplace to drive out the cold.');
   roomsCard.appendChild(roomsText);

   let stablesCard = createItem('Stables', 'stables')
   content.appendChild(stablesCard);
   let stablesImage = createImage(_stables_jpg__WEBPACK_IMPORTED_MODULE_6__, 'stables');
   stablesCard.appendChild(stablesImage);
   let stablesText = createDescription('If you require a stall, let the innkeep know. We take the greatest care of all beasts of burden.');
   stablesCard.appendChild(stablesText);
 }


/***/ }),

/***/ "./src/Tolkien.ttf":
/*!*************************!*\
  !*** ./src/Tolkien.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af7bed3b469bcf226b75.ttf";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6198ec3d2694fd866ee7.jpg";

/***/ }),

/***/ "./src/barliman.jpg":
/*!**************************!*\
  !*** ./src/barliman.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8de675a4209dc40bb318.jpg";

/***/ }),

/***/ "./src/beer.jpg":
/*!**********************!*\
  !*** ./src/beer.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09625d9048db52642faa.jpg";

/***/ }),

/***/ "./src/breakfast.jpg":
/*!***************************!*\
  !*** ./src/breakfast.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d65ab61af6ee722568c.jpg";

/***/ }),

/***/ "./src/chicken.JPG":
/*!*************************!*\
  !*** ./src/chicken.JPG ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f260528f4dc077194f91.JPG";

/***/ }),

/***/ "./src/leather.jpg":
/*!*************************!*\
  !*** ./src/leather.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92c71e7ef99a774e7b44.jpg";

/***/ }),

/***/ "./src/nob.jpg":
/*!*********************!*\
  !*** ./src/nob.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dea5b74c7f160b22d75.jpg";

/***/ }),

/***/ "./src/parchment.jpg":
/*!***************************!*\
  !*** ./src/parchment.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5259287ef7e4e4384873.jpg";

/***/ }),

/***/ "./src/prancingPony.png":
/*!******************************!*\
  !*** ./src/prancingPony.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c7dd9d44a4f817b02d.png";

/***/ }),

/***/ "./src/rooms.jpg":
/*!***********************!*\
  !*** ./src/rooms.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e489135e1395c278ee6.jpg";

/***/ }),

/***/ "./src/stables.jpg":
/*!*************************!*\
  !*** ./src/stables.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea60bdb6a5374e972d83.jpg";

/***/ }),

/***/ "./src/stew.jpg":
/*!**********************!*\
  !*** ./src/stew.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "691b3d1cdf75b83ad7f0.jpg";

/***/ }),

/***/ "./src/wine.jpg":
/*!**********************!*\
  !*** ./src/wine.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "344b98a8570bf8deffd6.jpg";

/***/ }),

/***/ "./src/woodHeader.jpg":
/*!****************************!*\
  !*** ./src/woodHeader.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "607aa5bd91285c3e1bdd.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _prancingPony_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prancingPony.png */ "./src/prancingPony.png");







let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let heading = document.createElement('div');
heading.setAttribute('id', 'header');

const prancingPony = new Image();
prancingPony.src = _prancingPony_png__WEBPACK_IMPORTED_MODULE_4__;
prancingPony.id="ponyLogo";


container.appendChild(heading);
heading.appendChild(prancingPony);

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);


function removeElements() {
    let element = document.getElementById('content');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


let homepageButton = document.createElement('button');
homepageButton.innerText = "Home";
homepageButton.setAttribute('id', 'homebutton');
homepageButton.setAttribute('class', 'linkButton');
heading.appendChild(homepageButton);
homepageButton.addEventListener('click', removeElements);
homepageButton.addEventListener('click', _homepage_js__WEBPACK_IMPORTED_MODULE_0__.createHomepage);

let menuButton = document.createElement('button');
menuButton.innerText = "Menu";
menuButton.setAttribute('id', 'menubutton');
menuButton.setAttribute('class', 'linkButton');
heading.appendChild(menuButton);
menuButton.addEventListener('click', removeElements);
menuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu);

let contactButton = document.createElement('button');
contactButton.innerText = "Contact";
contactButton.setAttribute('id', 'contactbutton');
contactButton.setAttribute('class', 'linkButton');
heading.appendChild(contactButton);
contactButton.addEventListener('click', removeElements);
contactButton.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContact);

(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.createHomepage)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx3REFBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnREFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzREFBYTtBQUNyRDtBQUNBLDREQUFjO0FBQ2Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Ub2xraWVuLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vd29vZEhlYWRlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2xlYXRoZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcGFyY2htZW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHhcXHJcXG59XFxyXFxuXFxyXFxuI3dvb2Qge1xcclxcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNwb255TG9nbyB7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlIDc4JTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtCdXR0b24ge1xcclxcbiAgICB3aWR0aDogMTc1cHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJSA3OCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua0J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5saW5rQnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA1cHggcmdiKDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJSA3OCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC5tZW51Q29udGVudCwgLm1lbnVDb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDUyNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCwgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldFxcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogNTI1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDIwcHggNXB4IDEwcHgsIHJnYigwIDAgMCAvIDMwJSkgNXB4IDEwcHggMHB4IC0xMHB4LCByZ2IoMCAwIDAgLyAyMCUpIDZweCAtNXB4IDE4cHggaW5zZXRcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLCtEQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixtREFBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtREFBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMEJBQTBCOzs7OztBQUs5QjtBQUNBO0lBQ0ksbURBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbURBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25COztBQUVKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbURBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25COztBQUVKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4XFxyXFxufVxcclxcblxcclxcbiN3b29kIHtcXHJcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ueUxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vd29vZEhlYWRlci5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MCUgNzglO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubGlua0J1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNzVweDtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9sZWF0aGVyLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJSA3OCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua0J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5saW5rQnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA1cHggcmdiKDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MCUgNzglO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQubWVudUNvbnRlbnQsIC5tZW51Q29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHdpZHRoOiA1MjVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL3BhcmNobWVudC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDIwcHggNXB4IDEwcHgsIHJnYigwIDAgMCAvIDMwJSkgNXB4IDEwcHggMHB4IC0xMHB4LCByZ2IoMCAwIDAgLyAyMCUpIDZweCAtNXB4IDE4cHggaW5zZXRcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDUyNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9wYXJjaG1lbnQuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LCByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHtjcmVhdGVDb250YWN0fVxyXG5pbXBvcnQgYmFybGltYW4gZnJvbSAnLi9iYXJsaW1hbi5qcGcnO1xyXG5pbXBvcnQgbm9iIGZyb20gJy4vbm9iLmpwZyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSXRlbShzdHJpbmcsIGlkKSB7XHJcbiAgICBsZXQgdGl0bGUgPSBzdHJpbmc7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuIH1cclxuIFxyXG4gZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XHJcbiAgICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiB9XHJcbiBcclxuIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHN0cmluZykge1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHN0cmluZztcclxuICAgIHJldHVybiB0aXRsZTtcclxuIH1cclxuIFxyXG4gZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3RyaW5nLCBpZCl7XHJcbiAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5ld0ltYWdlLnNyYyA9IHN0cmluZztcclxuICAgIG5ld0ltYWdlLmlkID0gaWQ7XHJcbiAgICBuZXdJbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xyXG4gICAgcmV0dXJuIG5ld0ltYWdlO1xyXG4gfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCAoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZVRpdGxlKCdDb250YWN0IFVzJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XHJcblxyXG4gICAgbGV0IGJhcmxpbWFuQ2FyZCA9IGNyZWF0ZUl0ZW0oJ0JhcmxpbWFuIEJ1dHRlcmJ1cicsICdiYXJsaW1hbicpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhcmxpbWFuQ2FyZCk7XHJcbiAgICBsZXQgYmFybGltYW5JbWFnZSA9IGNyZWF0ZUltYWdlKGJhcmxpbWFuLCAnYmFybGltYW4nKTtcclxuICAgIGJhcmxpbWFuQ2FyZC5hcHBlbmRDaGlsZChiYXJsaW1hbkltYWdlKTtcclxuICAgIGxldCBiYXJsaW1hblRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignSW5ua2VlcCAtIEJCYnVyQGJyZWVsYW5kLm5ldCcpO1xyXG4gICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuVGV4dCk7XHJcblxyXG4gICAgbGV0IG5vYkNhcmQgPSBjcmVhdGVJdGVtKCdOb2InLCAnbm9iJylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9iQ2FyZCk7XHJcbiAgICBsZXQgbm9iSW1hZ2UgPSBjcmVhdGVJbWFnZShub2IsICdub2InKTtcclxuICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iSW1hZ2UpO1xyXG4gICAgbGV0IG5vYlRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignQ29vayAtIHNsb3djb2FjaDFAYnJlZWxhbmQubmV0Jyk7XHJcbiAgICBub2JDYXJkLmFwcGVuZENoaWxkKG5vYlRleHQpO1xyXG5cclxufSAiLCJleHBvcnQge2NyZWF0ZUhvbWVwYWdlfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGluZygpIHtcclxuICAgICAgICBsZXQgdGl0bGUgPSBcIi0gYnkgQmFybGltYW4gQnV0dGVyYnVyXCI7XHJcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGluZycpO1xyXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgICAgICByZXR1cm4gaGVhZGluZztcclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cmluZykge1xyXG4gICAgICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHQoKSB7XHJcbiAgICBsZXQgaW5mb1RleHQgPSBcIlRoZSBQcmFuY2luZyBQb255IGhhcyBiZWVuIGEgQnJlZWxhbmQgc3RhcGxlIGZvciBvdmVyIDMwMCB5ZWFycy4gQ29tZSBhbmQgc3RheSBpbiBvdXIgbW9zdCBjb21mb3J0YWJsZSByb29tcyAoaW5jbHVkaW5nIEhvYmJpdC1TaXplZCByb29tcykgd2hpbGUgZW5qb2luZyB0aGUgYmVzdCBmb29kIHdlc3Qgb2YgdGhlIE1pc3R5IE1vdW50YWlucyEgLSBCYXJsaW1hblwiO1xyXG4gICAgbGV0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmZvMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHQnKTtcclxuICAgIGluZm8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4gICAgaW5mbzEuaW5uZXJUZXh0ID0gaW5mb1RleHQ7XHJcbiAgICByZXR1cm4gaW5mbzE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91ckxpc3QnKTtcclxuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4gICAgICAgIGxldCBkYXRhID0gW1wiQnJlYWtmYXN0OiBzZXJ2ZWQgYXQgU3VucmlzZSBkYWlseVwiLCBcIlNlY29uZC1CcmVha2Zhc3Q6IHNlcnZlZCB0d28gaG91cnMgYWZ0ZXIgU3VucmlzZVwiLCBcIkx1bmNoZW9uOiBzZXJ2ZWQgYXQgaGlnaCBub29uXCIsIFwiU3VwcGVyOiBzZXJ2ZWQgYXQgU3Vuc2V0XCIsIFwiU3RhYmxlcyBhdmFpbGFibGUgdXBvbiByZXF1ZXN0XCJdXHJcbiAgXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0SXRlbScpXHJcbiAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGl0ZW07XHJcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcclxuICAgIGxldCBpbmZvVGV4dCA9IFwiRmluZCB1cyBqdXN0IHBhc3QgdGhlIFdlc3QtR2F0ZSwgaW4gQnJlZSwgd2VzdCBvZiBDaGV0LXdvb2QsIG5vcnRoIGZyb20gdGhlIEdyZWVud2F5XCJcclxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbicpO1xyXG4gICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbiAgICBsb2NhdGlvbi5pbm5lclRleHQgPSBpbmZvVGV4dDtcclxuICAgIHJldHVybiBsb2NhdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9tZXBhZ2UoKSB7XHJcbiAgIFxyXG4gICAgbGV0IHRpdGxlID0gY3JlYXRlVGl0bGUoJ1RoZSBQcmFuY2luZyBQb255JylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZygpKTtcclxuICAgIFxyXG4gICAgbGV0IHRpdGxlMSA9IGNyZWF0ZVRpdGxlKCdBYm91dCcpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMSk7XHJcbiAgICB0aXRsZTEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgpKTtcclxuICAgIFxyXG4gICAgbGV0IHRpdGxlMiA9IGNyZWF0ZVRpdGxlKCdIb3VycycpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMik7XHJcbiAgICB0aXRsZTIuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcbiAgICBcclxuICAgIGxldCB0aXRsZTMgPSBjcmVhdGVUaXRsZSgnTG9jYXRpb24nKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZTMpO1xyXG4gICAgdGl0bGUzLmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xyXG5cclxuICAgIGxldCBmb290ZXIgPSBjcmVhdGVUaXRsZSgnQnkgSkFVR1MgMjAyMicpO1xyXG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICB9IiwiIGV4cG9ydCB7Y3JlYXRlTWVudX1cclxuIGltcG9ydCBiZWVyIGZyb20gJy4vYmVlci5qcGcnO1xyXG4gaW1wb3J0IHdpbmUgZnJvbSAnLi93aW5lLmpwZyc7XHJcbiBpbXBvcnQgYnJlYWtmYXN0IGZyb20gJy4vYnJlYWtmYXN0LmpwZyc7XHJcbiBpbXBvcnQgY2hpY2tlbiBmcm9tICcuL2NoaWNrZW4uSlBHJztcclxuIGltcG9ydCBzdGV3IGZyb20gJy4vc3Rldy5qcGcnO1xyXG4gaW1wb3J0IHJvb21zIGZyb20gJy4vcm9vbXMuanBnJztcclxuIGltcG9ydCBzdGFibGVzIGZyb20gJy4vc3RhYmxlcy5qcGcnO1xyXG5cclxuIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oc3RyaW5nLCBpZCkge1xyXG4gICBsZXQgdGl0bGUgPSBzdHJpbmc7XHJcbiAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuICAgaXRlbS5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cmluZykge1xyXG4gICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xyXG4gICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xyXG4gICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XHJcbiAgIHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oc3RyaW5nKSB7XHJcbiAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcclxuICAgdGl0bGUuaW5uZXJUZXh0ID0gc3RyaW5nO1xyXG4gICByZXR1cm4gdGl0bGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKHN0cmluZywgaWQpe1xyXG4gICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgbmV3SW1hZ2Uuc3JjID0gc3RyaW5nO1xyXG4gICBuZXdJbWFnZS5pZCA9IGlkO1xyXG4gICBuZXdJbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xyXG4gICByZXR1cm4gbmV3SW1hZ2U7XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Q29udGVudCcpO1xyXG5cclxuICAgbGV0IGRyaW5rVGl0bGUgPSBjcmVhdGVUaXRsZSgnQmV2ZXJhZ2VzJyk7XHJcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtUaXRsZSk7XHJcblxyXG4gICBsZXQgYmVlckNhcmQgPSBjcmVhdGVJdGVtKCdCZWVyJywgJ2JlZXInKVxyXG4gICBjb250ZW50LmFwcGVuZENoaWxkKGJlZXJDYXJkKTtcclxuICAgbGV0IGJlZXJJbWFnZSA9IGNyZWF0ZUltYWdlKGJlZXIsICdiZWVyJyk7XHJcbiAgIGJlZXJDYXJkLmFwcGVuZENoaWxkKGJlZXJJbWFnZSk7XHJcbiAgIGxldCBiZWVyVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdCZXN0IGJlZXIgd2VzdCBvZiB0aGUgTWlzdHkgTW91bnRhaW5zLCBlbmNoYW50ZWQgYnkgdGhlIGdyZWF0IFdpemFyZCBHYW5kYWxmIGhpbXNlbGYhIENvbWVzIGluIHBpbnRzIG9yIEhvYmJpdCBzaXplZCBtdWdzLicpO1xyXG4gICBiZWVyQ2FyZC5hcHBlbmRDaGlsZChiZWVyVGV4dCk7XHJcblxyXG4gICBsZXQgd2luZUNhcmQgPSBjcmVhdGVJdGVtKCdXaW5lJywgJ3dpbmUnKVxyXG4gICBjb250ZW50LmFwcGVuZENoaWxkKHdpbmVDYXJkKTtcclxuICAgbGV0IHdpbmVJbWFnZSA9IGNyZWF0ZUltYWdlKHdpbmUsICd3aW5lJyk7XHJcbiAgIHdpbmVDYXJkLmFwcGVuZENoaWxkKHdpbmVJbWFnZSk7XHJcbiAgIGxldCB3aW5lVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdJbXBvcnRlZCB3aGl0ZSB3aW5lIGZyb20gdGhlIE9sZCBXaW55YXJkcyBpbiB0aGUgU291dGhmYXJ0aGluZy4nKTtcclxuICAgd2luZUNhcmQuYXBwZW5kQ2hpbGQod2luZVRleHQpO1xyXG5cclxuICAgbGV0IGZvb2RUaXRsZSA9IGNyZWF0ZVRpdGxlKCdGb29kJyk7XHJcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZFRpdGxlKTtcclxuXHJcbiAgIGxldCBicmVha2Zhc3RDYXJkID0gY3JlYXRlSXRlbSgnRnVsbCBCcmVlbGFuZCBCcmVha2Zhc3QnLCAnYnJlYWtmYXN0JylcclxuICAgY29udGVudC5hcHBlbmRDaGlsZChicmVha2Zhc3RDYXJkKTtcclxuICAgbGV0IGJyZWFrZmFzdEltYWdlID0gY3JlYXRlSW1hZ2UoYnJlYWtmYXN0LCAnYnJlYWtmYXN0Jyk7XHJcbiAgIGJyZWFrZmFzdENhcmQuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0SW1hZ2UpO1xyXG4gICBsZXQgYnJlYWtmYXN0VGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdUb2FzdCwgZnJpZWQgZWdnLCB0b21hdG9zLCBiZWFucywgc2F1c2FnZSBhbmQgbmljZSBjcmlzcHkgYmFjb24uJyk7XHJcbiAgIGJyZWFrZmFzdENhcmQuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0VGV4dCk7XHJcblxyXG4gICBsZXQgY2hpY2tlbkNhcmQgPSBjcmVhdGVJdGVtKCdSb2FzdCBDaGlja2VuIERpbm5lcicsICdjaGlja2VuJylcclxuICAgY29udGVudC5hcHBlbmRDaGlsZChjaGlja2VuQ2FyZCk7XHJcbiAgIGxldCBjaGlja2VuSW1hZ2UgPSBjcmVhdGVJbWFnZShjaGlja2VuLCAnY2hpY2tlbicpO1xyXG4gICBjaGlja2VuQ2FyZC5hcHBlbmRDaGlsZChjaGlja2VuSW1hZ2UpO1xyXG4gICBsZXQgY2hpY2tlblRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignSGFuZC1jYXJ2ZWQgcm9hc3QgY2hpY2tlbiwgZ3JhdnkgZHJpcHBpbmdzLCBnb2xkZW4gbWFzaGVkIHRhdGVycyB3aXRoIG11c2h5IHBlYXMuJyk7XHJcbiAgIGNoaWNrZW5DYXJkLmFwcGVuZENoaWxkKGNoaWNrZW5UZXh0KTtcclxuXHJcbiAgIGxldCBzdGV3Q2FyZCA9IGNyZWF0ZUl0ZW0oJ0JlZWYgYW5kIFRhdGVyIFN0ZXcnLCAnc3RldycpXHJcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3Rld0NhcmQpO1xyXG4gICBsZXQgc3Rld0ltYWdlID0gY3JlYXRlSW1hZ2Uoc3RldywgJ3N0ZXcnKTtcclxuICAgc3Rld0NhcmQuYXBwZW5kQ2hpbGQoc3Rld0ltYWdlKTtcclxuICAgbGV0IHN0ZXdUZXh0ID0gY3JlYXRlRGVzY3JpcHRpb24oJ1JpY2ggYW5kIGhlYXJ0eSBiZWVmIHN0ZXcsIHdpdGggcG90YXRvZXMsIGNhcnJvdHMsIHBlYXMgYW5kIGNlbGVyeS4gU2VydmVkIHdpdGggaHVua3Mgb2YgZnJlc2ggYmFrZWQgYnJlYWQuJyk7XHJcbiAgIHN0ZXdDYXJkLmFwcGVuZENoaWxkKHN0ZXdUZXh0KTtcclxuXHJcbiAgIGxldCBzZXJ2aWNlVGl0bGUgPSBjcmVhdGVUaXRsZSgnU2VydmljZXMnKTtcclxuICAgY29udGVudC5hcHBlbmRDaGlsZChzZXJ2aWNlVGl0bGUpO1xyXG5cclxuICAgbGV0IHJvb21zQ2FyZCA9IGNyZWF0ZUl0ZW0oJ0FjY29tb2RhdGlvbnMnLCAncm9vbXMnKVxyXG4gICBjb250ZW50LmFwcGVuZENoaWxkKHJvb21zQ2FyZCk7XHJcbiAgIGxldCByb29tc0ltYWdlID0gY3JlYXRlSW1hZ2Uocm9vbXMsICdyb29tcycpO1xyXG4gICByb29tc0NhcmQuYXBwZW5kQ2hpbGQocm9vbXNJbWFnZSk7XHJcbiAgIGxldCByb29tc1RleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignQmlnIFBlb3BsZSBzaXplZCBhbmQgZXZlbiBzb21lIGxvd2VyLWxldmVsIEhvYmJpdCBzaXplZCByb29tcyBhdmFpbGFibGUsIGVhY2ggd2l0aCBwZXJzb25hbCBmaXJlcGxhY2UgdG8gZHJpdmUgb3V0IHRoZSBjb2xkLicpO1xyXG4gICByb29tc0NhcmQuYXBwZW5kQ2hpbGQocm9vbXNUZXh0KTtcclxuXHJcbiAgIGxldCBzdGFibGVzQ2FyZCA9IGNyZWF0ZUl0ZW0oJ1N0YWJsZXMnLCAnc3RhYmxlcycpXHJcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3RhYmxlc0NhcmQpO1xyXG4gICBsZXQgc3RhYmxlc0ltYWdlID0gY3JlYXRlSW1hZ2Uoc3RhYmxlcywgJ3N0YWJsZXMnKTtcclxuICAgc3RhYmxlc0NhcmQuYXBwZW5kQ2hpbGQoc3RhYmxlc0ltYWdlKTtcclxuICAgbGV0IHN0YWJsZXNUZXh0ID0gY3JlYXRlRGVzY3JpcHRpb24oJ0lmIHlvdSByZXF1aXJlIGEgc3RhbGwsIGxldCB0aGUgaW5ua2VlcCBrbm93LiBXZSB0YWtlIHRoZSBncmVhdGVzdCBjYXJlIG9mIGFsbCBiZWFzdHMgb2YgYnVyZGVuLicpO1xyXG4gICBzdGFibGVzQ2FyZC5hcHBlbmRDaGlsZChzdGFibGVzVGV4dCk7XHJcbiB9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXHJcbmltcG9ydCB7Y3JlYXRlSG9tZXBhZ2V9IGZyb20gJy4vaG9tZXBhZ2UuanMnO1xyXG5pbXBvcnQge2NyZWF0ZU1lbnV9IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCB7Y3JlYXRlQ29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwcmFuY2luZ1BvbnkyIGZyb20gJy4vcHJhbmNpbmdQb255LnBuZyc7XHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5sZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5oZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XHJcblxyXG5jb25zdCBwcmFuY2luZ1BvbnkgPSBuZXcgSW1hZ2UoKTtcclxucHJhbmNpbmdQb255LnNyYyA9IHByYW5jaW5nUG9ueTI7XHJcbnByYW5jaW5nUG9ueS5pZD1cInBvbnlMb2dvXCI7XHJcblxyXG5cclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5oZWFkaW5nLmFwcGVuZENoaWxkKHByYW5jaW5nUG9ueSk7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHMoKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IGhvbWVwYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmhvbWVwYWdlQnV0dG9uLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xyXG5ob21lcGFnZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVidXR0b24nKTtcclxuaG9tZXBhZ2VCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaW5rQnV0dG9uJyk7XHJcbmhlYWRpbmcuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VCdXR0b24pO1xyXG5ob21lcGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUVsZW1lbnRzKTtcclxuaG9tZXBhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVIb21lcGFnZSk7XHJcblxyXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5tZW51QnV0dG9uLmlubmVyVGV4dCA9IFwiTWVudVwiO1xyXG5tZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudWJ1dHRvbicpO1xyXG5tZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlua0J1dHRvbicpO1xyXG5oZWFkaW5nLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudHMpO1xyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudSk7XHJcblxyXG5sZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5jb250YWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xyXG5jb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdGJ1dHRvbicpO1xyXG5jb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlua0J1dHRvbicpO1xyXG5oZWFkaW5nLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudHMpO1xyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQ29udGFjdCk7XHJcblxyXG5jcmVhdGVIb21lcGFnZSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==