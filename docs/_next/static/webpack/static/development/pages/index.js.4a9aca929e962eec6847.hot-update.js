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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Theme */ "./components/Theme.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/CaptureMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* eslint-disable no-console */

var CaptureMenu = function CaptureMenu() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_7___default.a),
      t = _useI18n.t;

  var _useTheme = Object(_Theme__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      setTheme = _useTheme.setTheme,
      lockTheme = _useTheme.lockTheme,
      unlockTheme = _useTheme.unlockTheme,
      getTheme = _useTheme.getTheme;

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

    if (document && window) {
      var prevTheme = getTheme();
      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! html2canvas */ "../node_modules/html2canvas/dist/html2canvas.js", 7)).then(function (h2c) {
        setTheme('light');
        lockTheme();
        h2c["default"](document.querySelector('main'), {
          backgroundColor: '#fefefe'
        }).then(function (canvas) {
          var dateString = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYYMMDD');
          var selectedMealButton = document.querySelector('.ms-Pivot-link[aria-selected="true"]');
          var selectedMealType = selectedMealButton.dataset.content;
          downloadjs__WEBPACK_IMPORTED_MODULE_2___default()(canvas.toDataURL('image/png'), "".concat(t('교내식단'), "-").concat(dateString, "-").concat(selectedMealType, ".png"), 'image/png');
          setIsCapturing(false);
          setTheme(prevTheme);
          unlockTheme();
        })["catch"](function (err) {
          setHideDialog(false);
          setTheme(prevTheme);
          unlockTheme();
          console.error(err);
        });
      })["catch"](function (err) {
        setHideDialog(false);
        setTheme(prevTheme);
        unlockTheme();
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
      lineNumber: 72
    },
    __self: this
  }, t('메뉴 캡처'), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    className: "".concat(_style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.actionSpinner).concat(isCapturing ? " ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeSpinner) : ''),
    size: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["SpinnerSize"].xSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 79
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DialogFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PrimaryButton"], {
    onClick: closeDialog,
    text: t('닫기'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CaptureMenu);

/***/ })

})
//# sourceMappingURL=index.js.4a9aca929e962eec6847.hot-update.js.map