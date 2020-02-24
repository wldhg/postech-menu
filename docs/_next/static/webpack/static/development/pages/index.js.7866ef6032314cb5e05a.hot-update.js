webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Wrapper/Content.tsx":
/*!****************************************!*\
  !*** ./components/Wrapper/Content.tsx ***!
  \****************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return WrapperContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IENotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IENotification */ "./components/Wrapper/IENotification.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Theme */ "./components/Theme.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/Wrapper/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.d.yml */ "./components/Wrapper/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/Wrapper/Content.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







; // React Wrapper

/* eslint-disable react-hooks/exhaustive-deps */

var WrapperContent = function WrapperContent(props) {
  // States
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t,
      setLocale = _useI18n.setLocale;

  var _useTheme = Object(_Theme__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      setTheme = _useTheme.setTheme; // Props


  var children = props.children,
      title = props.title,
      main = props.main,
      description = props.description,
      image = props.image,
      className = props.className; // Determine meta information

  var realTitle = main ? t('오늘의 교내 식단') : "".concat(title, " - ").concat(t('오늘의 교내 식단'));
  var metaDescription = description || t('당신의 꿀벌은 밥을 잘 먹습니까?');
  var metaImage = image || '/images/buzz_fly.gif'; // Display Mode

  var dispModeInit = "\n    if (\n      ((document.cookie.indexOf('NightBoy=true') >= 0) ".concat("\n      || (window.matchMedia('(prefers-color-scheme: dark)').matches)) ", "\n      && !(document.cookie.indexOf('NightBoy=false') >= 0) ", "\n    ) {\n      document.documentElement.dataset.theme = 'dark';\n    } else {\n      document.documentElement.dataset.theme = 'light';\n    }\n  ");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _document$documentEle;

    if (((_document$documentEle = document.documentElement.dataset) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.theme) === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    document.documentElement.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.loaded);
  }, [
    /* Run Only Once */
  ]); // Locale

  var localeInit = "\n  ";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (document.documentElement.lang === 'ko') {
      setLocale('ko');
    } else {
      setLocale('en');
    }
  }); // Render

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: dispModeInit
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: localeInit
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffc206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=360, user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: realTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: "favicon.ico",
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx(_IENotification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, children));
};



/***/ })

})
//# sourceMappingURL=index.js.7866ef6032314cb5e05a.hot-update.js.map