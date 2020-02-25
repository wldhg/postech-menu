webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/BrightnessMode.tsx":
/*!*******************************************************!*\
  !*** ./components/MenuMain/Footer/BrightnessMode.tsx ***!
  \*******************************************************/
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
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Theme */ "./components/Theme.tsx");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/BrightnessMode.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var BrightnessMode = function BrightnessMode() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_3__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_5___default.a),
      t = _useI18n.t;

  var _useTheme = Object(_Theme__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      setTheme = _useTheme.setTheme,
      getTheme = _useTheme.getTheme,
      isThemeLocked = _useTheme.isThemeLocked;
  /* Brightness Mode */
  // Cookie manager


  var setNightBoy = function setNightBoy(data) {
    if (typeof data !== 'boolean') {
      document.cookie = 'NightBoy=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = "NightBoy=".concat(data.toString(), ";expires=").concat(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 5184000).toUTCString() // 60 days
      , ";");
    }
  }; // Button click action for toggle


  var toggleBrightnessMode = function toggleBrightnessMode() {
    var _document$documentEle;

    if (((_document$documentEle = document.documentElement.dataset) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.theme) === 'dark') {
      setTheme('light');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy(false);
      } else {
        setNightBoy();
      }
    } else {
      setTheme('dark');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy();
      } else {
        setNightBoy(true);
      }
    }
  };

  return __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: toggleBrightnessMode,
    title: t('밝기 모드 변경'),
    disabled: isThemeLocked(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, getTheme() === 'dark' ? t('밝게 보기') : t('어둡게 보기'));
};

/* harmony default export */ __webpack_exports__["default"] = (BrightnessMode);

/***/ })

})
//# sourceMappingURL=index.js.d4e6afc12296b45d6b75.hot-update.js.map