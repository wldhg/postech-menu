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
/* harmony import */ var _uifabric_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/icons */ "../node_modules/@uifabric/icons/lib/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/Wrapper/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/Wrapper/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Fabric UI

Object(_uifabric_icons__WEBPACK_IMPORTED_MODULE_2__["initializeIcons"])(undefined, {
  disableWarnings: true
});
__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! office-ui-fabric-react/lib/Styling */ "../node_modules/office-ui-fabric-react/lib/Styling.js")).then(function (sty) {
  sty.loadTheme({
    palette: {
      themePrimary: 'var(--monet)',
      themeDarker: 'var(--monet)',
      themeDark: 'var(--monet)',
      themeDarkAlt: 'var(--monet)',
      themeLight: 'var(--monet)',
      themeLighter: 'var(--monet)',
      themeLighterAlt: 'var(--monet)'
    }
  });
})["catch"](function () {}); // React Wrapper

;

var Wrapper = function Wrapper(props) {
  var children = props.children,
      title = props.title,
      main = props.main,
      description = props.description,
      image = props.image,
      className = props.className; // Determine meta information

  var realTitle = main ? '오늘의 메뉴' : "".concat(title, " - \uC624\uB298\uC758 \uBA54\uB274");
  var metaDescription = description || '당신 꿀벌은 밥을 잘 먹습니까?';
  var metaImage = image || '/images/buzz_fly.gif'; // Render

  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=320, user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: realTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: "favicon.ico",
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=index.js.71d2654bae626240b54f.hot-update.js.map