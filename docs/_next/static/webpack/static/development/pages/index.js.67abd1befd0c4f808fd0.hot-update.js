webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Header/index.tsx":
/*!**********************************************!*\
  !*** ./components/MenuMain/Header/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Header/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Header/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Header = function Header() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_3__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_5___default.a),
      t = _useI18n.t;

  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "xLargePlus",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, t('오늘의 교내 식단')), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "xLarge",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()().format(t('YYYY년 M월 D일'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.67abd1befd0c4f808fd0.hot-update.js.map