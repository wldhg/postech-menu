webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/API.tsx":
/*!****************************!*\
  !*** ./components/API.tsx ***!
  \****************************/
/*! exports provided: APIEnabled, useAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIEnabled", function() { return APIEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAPI", function() { return useAPI; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/wldh/MoNet/menu/src/components/API.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


;
var initialAPIContext = {
  locale: 'ko',
  places: {
    jigok: {
      loaded: false,
      meals: {}
    },
    rist: {
      loaded: false,
      meals: {}
    }
  }
};
var APIContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["createContext"])(initialAPIContext);

var apiReducer = function apiReducer(state, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      {
        return _objectSpread({}, initialAPIContext, {
          locale: action.locale
        });
      }

    case 'FETCH_JIGOK':
      {
        getJigokMenu(state.locale, action.dispatch);
        return state;
      }

    case 'FETCH_RIST':
      {
        getRISTMenu(state.locale, action.dispatch);
        return state;
      }

    case 'UPDATE_MENU':
      {
        var ustate = _objectSpread({}, state);

        ustate.places[action.place].meals.breakfast = parallelizeMenu(action.rawMenu.breakfast, state.locale);
        ustate.places[action.place].meals.lunch = parallelizeMenu(action.rawMenu.lunch, state.locale);
        ustate.places[action.place].meals.dinner = parallelizeMenu(action.rawMenu.dinner, state.locale);
        ustate.places[action.place].loaded = true;
        return ustate;
      }

    default:
      {
        return state;
      }
  }
};

var APIDispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["createContext"])(undefined);
var APIEnabled = function APIEnabled(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(apiReducer, initialAPIContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(APIDispatchContext.Provider, {
    value: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(APIContext.Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, children));
};
var useAPI = function useAPI() {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(APIContext);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(APIDispatchContext); // API Locale Setter

  var setAPILocale = function setAPILocale(locale) {
    dispatch({
      type: 'SET_LOCALE',
      locale: locale
    });
  }; // API Locale Getter


  var getAPILocale = function getAPILocale() {
    return state.locale;
  }; // Menu Fetcher


  var fetchMenu = function fetchMenu() {
    if (!state.places.jigok.loaded) {
      dispatch({
        type: 'FETCH_JIGOK',
        dispatch: dispatch
      });
    }

    if (!state.places.rist.loaded) {
      dispatch({
        type: 'FETCH_RIST',
        dispatch: dispatch
      });
    }
  }; // Menu Loaded Info Getter


  var isMenuLoaded = function isMenuLoaded(place) {
    return state.places[place].loaded;
  }; // Menu Getter


  var getMenu = function getMenu(place, type) {
    var menu = null;

    if (state.places[place].loaded) {
      menu = state.places[place].meals[type];
    }

    return menu;
  };

  return {
    setAPILocale: setAPILocale,
    getAPILocale: getAPILocale,
    fetchMenu: fetchMenu,
    getMenu: getMenu,
    isMenuLoaded: isMenuLoaded
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useAPI);
/* Real API Handlers */

;
var ParseFailedMessage = {
  en: 'Failed to parse the API response.',
  ko: 'API 응답을 해석할 수 없습니다.'
};
var APIFailedMessage = {
  en: 'Invalid API request.',
  ko: 'API 요청이 잘못되었습니다.'
};
var APIFailedObject = {
  en: {
    breakfast: [APIFailedMessage.en],
    lunch: [APIFailedMessage.en],
    dinner: [APIFailedMessage.en]
  },
  ko: {
    breakfast: [APIFailedMessage.ko],
    lunch: [APIFailedMessage.ko],
    dinner: [APIFailedMessage.ko]
  }
};
var APIServer = 'https://monet.haze.dog:8282/api';

var parallelizeMenu = function parallelizeMenu(menu, locale) {
  var cache = [];

  if (menu.length > 0) {
    if (menu[0].indexOf('== ') === 0) {
      cache = {};
      var cacheKey = null;

      for (var idx = 0; idx < menu.length; idx += 1) {
        var item = menu[idx];

        if (item.indexOf('== ') === 0) {
          var key = item.substring(3);
          cache[key] = [];
          cacheKey = key;
        } else if (cacheKey && cache[cacheKey]) {
          cache[cacheKey].push(item);
        } else {
          cache = [ParseFailedMessage[locale]];
          break;
        }
      }
    } else {
      cache = menu;
    }
  }

  return cache;
};

var getJigokMenu = function getJigokMenu(locale, dispatch) {
  var jigokFailed = {
    type: 'UPDATE_MENU',
    place: 'jigok',
    rawMenu: APIFailedObject[locale]
  };
  fetch("".concat(APIServer, "/v1/getJigokMenu?locale=").concat(locale), {
    method: 'GET'
  }).then(function (response) {
    if (response.status === 200) {
      response.json().then(function (data) {
        dispatch({
          type: 'UPDATE_MENU',
          place: 'jigok',
          rawMenu: data
        });
      })["catch"](function () {
        dispatch(jigokFailed);
      });
    } else {
      dispatch(jigokFailed);
    }
  }, function () {
    dispatch(jigokFailed);
  });
};

var getRISTMenu = function getRISTMenu(locale, dispatch) {
  var ristFailed = {
    type: 'UPDATE_MENU',
    place: 'rist',
    rawMenu: APIFailedObject[locale]
  };
  fetch("".concat(APIServer, "/v1/getRISTMenu?locale=").concat(locale), {
    method: 'GET'
  }).then(function (response) {
    if (response.status === 200) {
      response.json().then(function (data) {
        dispatch({
          type: 'UPDATE_MENU',
          place: 'rist',
          rawMenu: data
        });
      })["catch"](function () {
        dispatch(ristFailed);
      });
    } else {
      dispatch(ristFailed);
    }
  }, function () {
    dispatch(ristFailed);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.52fc01905708f251957c.hot-update.js.map