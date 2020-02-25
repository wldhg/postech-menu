webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/CookieInfo.tsx":
/*!***************************************************!*\
  !*** ./components/MenuMain/Footer/CookieInfo.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/CookieInfo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* eslint-disable no-console */

var CaptureMenu = function CaptureMenu() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_2__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_3___default.a),
      t = _useI18n.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      hideDialog = _useState[0],
      setHideDialog = _useState[1];
  /* Cookie Info */
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
      lineNumber: 26
    },
    __self: this
  }, t('쿠키 안내')), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    hidden: hideDialog,
    dialogContentProps: {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogType"].normal,
      title: t('쿠키 이용 안내'),
      showCloseButton: false
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, t('쿠키는 웹 사이트에서 사용자의 브라우저에 데이터를 저장할 수 있게 하는 웹 기술입니다. 이 사이트는 밝기 모드 설정 저장, 언어 설정 저장만을 위해 쿠키를 사용하며, 저장한 데이터는 마지막 방문 이후 60일간 유지됩니다. 저장된 쿠키는 사용자 브라우저에서만 존재하며, 별도로 서버에 저장하지 않습니다. 아지래견은 사용자가 이 사이트를 이용하는 것으로 기술한 바 대로의 쿠키 기술 사용에 동의한 것으로 간주합니다.'), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PrimaryButton"], {
    onClick: closeDialog,
    text: t('닫기'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CaptureMenu);

/***/ })

})
//# sourceMappingURL=index.js.2b508a996696d9334bf5.hot-update.js.map