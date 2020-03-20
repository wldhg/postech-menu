webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/index.tsx":
/*!**********************************************!*\
  !*** ./components/MenuMain/Footer/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _BrightnessMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrightnessMode */ "./components/MenuMain/Footer/BrightnessMode.tsx");
/* harmony import */ var _CaptureMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CaptureMenu */ "./components/MenuMain/Footer/CaptureMenu.tsx");
/* harmony import */ var _DispLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DispLocale */ "./components/MenuMain/Footer/DispLocale.tsx");
/* harmony import */ var _CookieInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieInfo */ "./components/MenuMain/Footer/CookieInfo.tsx");
/* harmony import */ var _3rdPartyLicense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./3rdPartyLicense */ "./components/MenuMain/Footer/3rdPartyLicense.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Footer = function Footer() {
  /* States */
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_7__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_9___default.a),
      t = _useI18n.t,
      getLocale = _useI18n.getLocale;
  /* Delivery Menu */


  var movePolivery = function movePolivery() {
    window.open('http://polivery.ml/?search', '_blank');
  };
  /* Error Report */


  var moveErrorReport = function moveErrorReport() {
    window.location.href = 'mailto:menu-error@haze.dog';
  };
  /* GitHub */


  var moveGitHub = function moveGitHub() {
    window.location.href = 'https://github.com/wldh-g/postech-menu';
  };
  /* Render */


  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], {
    onClick: movePolivery,
    title: t('Polivery 바로가기'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, t('배달 음식')), __jsx(_CaptureMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_BrightnessMode__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], {
    onClick: moveGitHub,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "GitHub"), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], {
    onClick: moveErrorReport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, t('오류 신고')), __jsx(_CookieInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), getLocale() === 'en' && __jsx(_3rdPartyLicense__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_DispLocale__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "smallPlus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, t('데이터: 포스텍 복지회, 신세계푸드.')), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "smallPlus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, t('시스템: '), __jsx("a", {
    href: "mailto:dev@haze.dog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "HazeDog"), ".")), __jsx("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_8___default.a.version,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "smallPlus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "20200320.1")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.7ed5e0d1d25d244d59ce.hot-update.js.map