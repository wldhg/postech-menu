webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/DispLocale.tsx":
/*!***************************************************!*\
  !*** ./components/MenuMain/Footer/DispLocale.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/DispLocale.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var DispLocale = function DispLocale() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_3__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_5___default.a),
      getLocale = _useI18n.getLocale,
      setLocale = _useI18n.setLocale;

  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      setAPILocale = _useAPI.setAPILocale,
      fetchMenu = _useAPI.fetchMenu;
  /* Locale Change */
  // Cookie manager


  var setEnglishFlag = function setEnglishFlag(data) {
    if (typeof data !== 'boolean') {
      document.cookie = 'EnglishFlag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = "EnglishFlag=".concat(data.toString(), ";expires=").concat(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 2592000).toUTCString() // 30 days
      , ";");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (document.cookie.indexOf('EnglishFlag=true') > -1) {
      document.cookie = "EnglishFlag=true;expires=".concat(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 2592000).toUTCString() // 30 days
      , ";");
    } else if (document.cookie.indexOf('EnglishFlag=false') > -1) {
      document.cookie = "EnglishFlag=false;expires=".concat(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 2592000).toUTCString() // 30 days
      , ";");
    }
  }, []); // Button click action for toggle

  var toggleDispLocale = function toggleDispLocale() {
    if (getLocale() === 'ko') {
      setLocale('en');
      setAPILocale('en');
      fetchMenu('en');

      if (window.navigator.language.indexOf('ko') >= 0) {
        setEnglishFlag(true);
      } else {
        setEnglishFlag();
      }
    } else {
      setLocale('ko');
      setAPILocale('ko');
      fetchMenu('ko');

      if (window.navigator.language.indexOf('ko') >= 0) {
        setEnglishFlag();
      } else {
        setEnglishFlag(false);
      }
    }
  };

  return __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: toggleDispLocale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, getLocale() === 'ko' ? 'English' : '한국어');
};

/* harmony default export */ __webpack_exports__["default"] = (DispLocale);

/***/ })

})
//# sourceMappingURL=index.js.a462d1deda35fc1c535d.hot-update.js.map