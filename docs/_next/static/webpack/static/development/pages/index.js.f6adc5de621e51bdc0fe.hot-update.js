webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/index.tsx":
/*!**********************************************!*\
  !*** ./components/MenuMain/Footer/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Theme */ "./components/Theme.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Footer = function Footer() {
  /* States */
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_7___default.a),
      t = _useI18n.t,
      setLocale = _useI18n.setLocale,
      getLocale = _useI18n.getLocale;

  var _useTheme = Object(_Theme__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      setTheme = _useTheme.setTheme,
      getTheme = _useTheme.getTheme;

  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      setAPILocale = _useAPI.setAPILocale,
      fetchMenu = _useAPI.fetchMenu;
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


  var toggleDispBrightnessMode = function toggleDispBrightnessMode() {
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
  /* Delivery Menu */


  var movePolivery = function movePolivery() {
    window.location.href = 'http://polivery.ml/?search';
  };
  /* Locale Change */


  var toggleDispLocale = function toggleDispLocale() {
    if (getLocale() === 'ko') {
      setLocale('en');
      setAPILocale('en');
      fetchMenu();
    } else {
      setLocale('ko');
      setAPILocale('en');
      fetchMenu();
    }
  };
  /* Render */


  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: movePolivery,
    title: t('Polivery 바로가기'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, t('배달 음식')), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\uAD50\uC9C1\uC6D0 \uC2DD\uB2F9 \uBCF4\uAE30"), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: toggleDispBrightnessMode,
    title: t('밝기 모드 변경'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, getTheme() === 'dark' ? t('밝게 보기') : t('어둡게 보기')), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: toggleDispLocale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, getLocale() === 'ko' ? 'English' : '한국어'), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "API")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, t('데이터: 포스텍 복지회, 신세계푸드.'), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), t('시스템: 아지래견.')), __jsx("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.version,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "20200224.4"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.f6adc5de621e51bdc0fe.hot-update.js.map