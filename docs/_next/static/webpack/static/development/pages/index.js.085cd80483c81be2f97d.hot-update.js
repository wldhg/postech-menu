webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Theme.tsx":
/*!******************************!*\
  !*** ./components/Theme.tsx ***!
  \******************************/
/*! exports provided: ThemeEnabled, useTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeEnabled", function() { return ThemeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/Theme.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var monetLight = Object(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  palette: {
    themePrimary: '#ffc206',
    themeLighterAlt: '#fffdf5',
    themeLighter: '#fff5d7',
    themeLight: '#ffecb4',
    themeTertiary: '#ffda69',
    themeSecondary: '#ffc823',
    themeDarkAlt: '#e6ad05',
    themeDark: '#c29204',
    themeDarker: '#8f6c03',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#b2b2b2',
    neutralSecondary: '#999999',
    neutralPrimaryAlt: '#808080',
    neutralPrimary: '#1b1b1b',
    neutralDark: '#4e4e4e',
    black: '#a5a5a5',
    white: '#fefefe'
  }
});
var monetDark = Object(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  palette: {
    themePrimary: '#ffc206',
    themeLighterAlt: '#fffdf5',
    themeLighter: '#fff5d7',
    themeLight: '#ffecb4',
    themeTertiary: '#ffda69',
    themeSecondary: '#ffc823',
    themeDarkAlt: '#e6ad05',
    themeDark: '#c29204',
    themeDarker: '#8f6c03',
    neutralLighterAlt: '#262626',
    neutralLighter: '#2f2f2f',
    neutralLight: '#3d3d3d',
    neutralQuaternaryAlt: '#464646',
    neutralQuaternary: '#4d4d4d',
    neutralTertiaryAlt: '#6b6b6b',
    neutralTertiary: '#ababab',
    neutralSecondary: '#8f8f8f',
    neutralPrimaryAlt: '#737373',
    neutralPrimary: '#fefefe',
    neutralDark: '#ababab',
    black: '#ababab',
    white: '#1b1b1b'
  }
});
;
var initialThemeContext = {
  theme: 'light'
};
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialThemeContext);

var themeReducer = function themeReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        theme: action.theme
      };

    default:
      return state;
  }
};

var ThemeDispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
var ThemeEnabled = function ThemeEnabled(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(themeReducer, initialThemeContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(ThemeDispatchContext.Provider, {
    value: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(ThemeContext.Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, children));
};
var useTheme = function useTheme() {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeDispatchContext); // Theme Setter

  var setTheme = function setTheme(theme) {
    if (theme === 'dark') {
      if (document) {
        document.documentElement.dataset.theme = 'dark';
      }

      office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings({
        theme: monetDark
      });
    } else {
      if (document) {
        document.documentElement.dataset.theme = 'light';
      }

      office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings({
        theme: monetLight
      });
    }

    dispatch({
      type: 'SET_THEME',
      theme: theme
    });
  }; // Theme Getter


  var getTheme = function getTheme() {
    return state.theme;
  };

  return {
    getTheme: getTheme,
    setTheme: setTheme
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useTheme);

/***/ })

})
//# sourceMappingURL=index.js.085cd80483c81be2f97d.hot-update.js.map