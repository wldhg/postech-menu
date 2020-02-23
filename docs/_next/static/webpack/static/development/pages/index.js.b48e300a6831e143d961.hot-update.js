webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Wrapper/index.tsx":
/*!**************************************!*\
  !*** ./components/Wrapper/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./components/Wrapper/theme.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/Wrapper/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/Wrapper/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // React Wrapper

;
;

var Wrapper = function Wrapper(props) {
  var children = props.children,
      title = props.title,
      main = props.main,
      description = props.description,
      image = props.image,
      className = props.className,
      dispModeClasses = props.dispModeClasses;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showIENoti = _useState[0],
      setShowIENoti = _useState[1]; // Determine meta information


  var realTitle = main ? '오늘의 메뉴' : "".concat(title, " - \uC624\uB298\uC758 \uBA54\uB274");
  var metaDescription = description || '당신 꿀벌은 밥을 잘 먹습니까?';
  var metaImage = image || '/images/buzz_fly.gif'; // Display Mode

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _document$documentEle;

    if (((_document$documentEle = document.documentElement.dataset) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.theme) === 'dark') {
      office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Customizations"].applySettings({
        theme: _theme__WEBPACK_IMPORTED_MODULE_3__["monetDark"]
      });
    } else {
      office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Customizations"].applySettings({
        theme: _theme__WEBPACK_IMPORTED_MODULE_3__["monetLight"]
      });
    }

    document.documentElement.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.loaded);
  }, []);
  var dispModeInit = "\n    const hour = (new Date()).getHours();\n    if (\n      (document.cookie.indexOf('NightBoy=true') >= 0) // Manually Set To Dark\n      || (window.matchMedia('(prefers-color-scheme: dark)').matches) // Dark By Default\n      || (hour < 7 && hour > 18) // Time To Dark\n    ) {\n      document.documentElement.dataset.theme = 'dark';\n    } else {\n      document.documentElement.dataset.theme = 'light';\n    }\n  "; // IE Detection

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.navigator.userAgent.indexOf('Trident/') >= 0 && document.cookie.indexOf('IEGirl=true') < 0) {
      setShowIENoti(true);
    }
  }, []);

  var closeNoti = function closeNoti() {
    setShowIENoti(false);
    document.cookie = 'IEGirl=true';
  }; // Render


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: dispModeInit
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffc206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=320, user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: realTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: "favicon.ico",
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), showIENoti && __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["MessageBar"], {
    messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["MessageBarType"].warning,
    isMultiline: false,
    dismissButtonAriaLabel: "\uB2EB\uAE30",
    overflowButtonAriaLabel: "\uB354 \uC54C\uC544\uBCF4\uAE30",
    onDismiss: closeNoti,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Internet Explorer\uC5D0\uC11C\uB294 \uD654\uBA74\uC774 \uC81C\uB300\uB85C \uBCF4\uC774\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, children), __jsx("div", {
    id: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.blocker,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=index.js.b48e300a6831e143d961.hot-update.js.map