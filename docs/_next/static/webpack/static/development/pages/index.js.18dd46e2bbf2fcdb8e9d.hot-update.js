webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/3rdPartyLicense.tsx":
/*!********************************************************!*\
  !*** ./components/MenuMain/Footer/3rdPartyLicense.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/3rdPartyLicense.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* eslint-disable no-console */

var ThirdPartyLicense = function ThirdPartyLicense() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      hideDialog = _useState[0],
      setHideDialog = _useState[1];
  /* 3rd Party License Info */
  // Info Dialog Hide


  var closeDialog = function closeDialog() {
    setHideDialog(true);
  }; // Info Dialog Show


  var openDialog = function openDialog() {
    setHideDialog(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], {
    onClick: openDialog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "OSL Notice"), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    hidden: hideDialog,
    dialogContentProps: {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogType"].normal,
      title: 'Open Source License Notice',
      showCloseButton: false
    },
    modalProps: {
      className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.oslDialog
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u201CGoogle Translate\u201D icon in this page was made by\xA0", __jsx("a", {
    href: "https://www.flaticon.com/authors/freepik",
    title: "Freepik",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Freepik"), "\xA0from\xA0", __jsx("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "www.flaticon.com"), "."), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PrimaryButton"], {
    onClick: closeDialog,
    text: "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ThirdPartyLicense);

/***/ })

})
//# sourceMappingURL=index.js.18dd46e2bbf2fcdb8e9d.hot-update.js.map