webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/Footer/CaptureMenu.tsx":
/*!****************************************************!*\
  !*** ./components/MenuMain/Footer/CaptureMenu.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downloadjs */ "../node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/CaptureMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* eslint-disable no-console */

var CaptureMenu = function CaptureMenu() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_3__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_5___default.a),
      t = _useI18n.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      hideDialog = _useState[0],
      setHideDialog = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isCapturing = _useState2[0],
      setIsCapturing = _useState2[1];
  /* Screen Capture */
  // Failed Dialog Hide


  var closeDialog = function closeDialog() {
    setHideDialog(true);
    setIsCapturing(false);
  }; // Capture Function


  var captureMenu = function captureMenu() {
    setIsCapturing(true);

    if (document) {
      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! html2canvas */ "../node_modules/html2canvas/dist/html2canvas.js", 7)).then(function (h2c) {
        h2c["default"](document.querySelector('main')).then(function (canvas) {
          downloadjs__WEBPACK_IMPORTED_MODULE_2___default()(canvas.toDataURL(), t('POSTECH.png'), 'image/png');
          setIsCapturing(false);
        })["catch"](function (err) {
          setHideDialog(false);
          console.error(err);
        });
      })["catch"](function (err) {
        setHideDialog(false);
        console.error(err);
      });
    } else {
      setHideDialog(false);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], {
    onClick: captureMenu,
    disabled: isCapturing,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, t('메뉴 캡처'), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    className: "".concat(_style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.actionSpinner).concat(isCapturing ? " ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.activeSpinner) : ''),
    size: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["SpinnerSize"].xSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    hidden: hideDialog,
    dialogContentProps: {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogType"].normal,
      title: t('캡처 실패'),
      subText: t('메뉴 DOM을 얻을 수 없었습니다. 잠시 후 다시 시도해보세요.')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PrimaryButton"], {
    onClick: closeDialog,
    text: t('닫기'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CaptureMenu);

/***/ })

})
//# sourceMappingURL=index.js.54aa8115897b1ad3da94.hot-update.js.map