webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/MenuList/en.d.yml":
/*!***********************************************!*\
  !*** ./components/MenuMain/MenuList/en.d.yml ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"en":({"아침":"Breakfast", "점심":"Lunch", "저녁":"Dinner"})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./components/MenuMain/MenuList/index.tsx":
/*!************************************************!*\
  !*** ./components/MenuMain/MenuList/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _DoubleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DoubleList */ "./components/MenuMain/MenuList/DoubleList.tsx");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/MenuList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/MenuList/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* eslint-disable react-hooks/exhaustive-deps */

var MenuList = function MenuList() {
  // States
  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      setAPILocale = _useAPI.setAPILocale,
      fetchMenu = _useAPI.fetchMenu;

  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t,
      getLocale = _useI18n.getLocale; // Fetch Menu Data


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setAPILocale(getLocale());
    fetchMenu();
  }, []); // Set default menu pivot item by time

  var hour = new Date().getHours();
  var showWhat = 'breakfast';

  if (hour >= 14) {
    showWhat = 'dinner';
  } else if (hour >= 10) {
    showWhat = 'lunch';
  }

  return __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Pivot"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.menuContainer,
    defaultSelectedKey: showWhat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PivotItem"], {
    headerText: t('아침'),
    itemKey: "breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_DoubleList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PivotItem"], {
    headerText: t('점심'),
    itemKey: "lunch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_DoubleList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "lunch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PivotItem"], {
    headerText: t('저녁'),
    itemKey: "dinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_DoubleList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "dinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ })

})
//# sourceMappingURL=index.js.4e23aab877b58cce1f3d.hot-update.js.map