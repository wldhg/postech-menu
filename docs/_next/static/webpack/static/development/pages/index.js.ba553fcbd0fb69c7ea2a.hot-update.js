webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./components/MenuMain/index.tsx":
/*!***************************************!*\
  !*** ./components/MenuMain/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Wrapper */ "./components/Wrapper/index.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuList */ "./components/MenuMain/MenuList/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/MenuMain/Footer/index.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MenuMain = function MenuMain() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t;

  return __jsx(_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, t('오늘의 교내 식단')), __jsx(_MenuList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuMain);

/***/ }),

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

  var localeInit = "\n    if (\n      ((document.cookie.indexOf('EnglishFlag=true') >= 0) ".concat("\n      || (navigator.language.indexOf('ko') === -1)) ", "\n      && !(document.cookie.indexOf('EnglishFlag=false') >= 0) ", "\n    ) {\n      document.documentElement.lang = 'en';\n    } else {\n      document.documentElement.lang = 'ko';\n    }\n  ");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (document.documentElement.lang === 'ko') {
      setLocale('ko');
    } else {
      setLocale('en');
    }
  }, [
    /* Run Only Once */
  ]); // Render

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: dispModeInit
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: localeInit
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffc206",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=360, user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: realTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: "favicon.ico",
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx(_IENotification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, children));
};



/***/ }),

/***/ "./components/Wrapper/IENotification.tsx":
/*!***********************************************!*\
  !*** ./components/Wrapper/IENotification.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../I18n */ "./components/I18n.tsx");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en.d.yml */ "./components/Wrapper/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/Wrapper/IENotification.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var IENotification = function IENotification() {
  // States
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_2__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_3___default.a),
      t = _useI18n.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showIENoti = _useState[0],
      setShowIENoti = _useState[1]; // IE Detection


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.navigator.userAgent.indexOf('Trident/') >= 0 && document.cookie.indexOf('IEGirl=true') < 0) {
      setShowIENoti(true);
    }
  }, []);

  var closeNoti = function closeNoti() {
    setShowIENoti(false);
    document.cookie = 'IEGirl=true';
  };

  return showIENoti && __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], {
    messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].warning,
    isMultiline: false,
    dismissButtonAriaLabel: t('닫기'),
    onDismiss: closeNoti,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, t('Internet Explorer에서는 화면이 제대로 보이지 않을 수 있습니다.'));
};

/* harmony default export */ __webpack_exports__["default"] = (IENotification);

/***/ }),

/***/ "./components/Wrapper/en.d.yml":
/*!*************************************!*\
  !*** ./components/Wrapper/en.d.yml ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"en":({"오늘의 교내 식단":"Today's Campus Menu", "당신의 꿀벌은 밥을 잘 먹습니까?":"Does your honeybee feed well?", "닫기":"Close", "Internet Explorer에서는 화면이 제대로 보이지 않을 수 있습니다.":"The page will not be rendered normaly in Internet Explorer."})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./components/Wrapper/index.tsx":
/*!**************************************!*\
  !*** ./components/Wrapper/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../I18n */ "./components/I18n.tsx");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API */ "./components/API.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Theme */ "./components/Theme.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./components/Wrapper/Content.tsx");

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/Wrapper/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* eslint-disable react/jsx-props-no-spreading */

var Wrapper = function Wrapper(props) {
  return __jsx(_I18n__WEBPACK_IMPORTED_MODULE_2__["I18nEnabled"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_API__WEBPACK_IMPORTED_MODULE_3__["APIEnabled"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_Theme__WEBPACK_IMPORTED_MODULE_4__["ThemeEnabled"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_Content__WEBPACK_IMPORTED_MODULE_5__["Content"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=index.js.ba553fcbd0fb69c7ea2a.hot-update.js.map