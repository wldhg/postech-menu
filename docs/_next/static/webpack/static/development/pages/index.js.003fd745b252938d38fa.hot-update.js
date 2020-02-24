webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/MenuList/DoubleList.tsx":
false,

/***/ "./components/MenuMain/MenuList/ListByMeal.tsx":
/*!*****************************************************!*\
  !*** ./components/MenuMain/MenuList/ListByMeal.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MealByPlace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MealByPlace */ "./components/MenuMain/MenuList/MealByPlace.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/MenuList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/MenuList/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/ListByMeal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ListByMeal = function ListByMeal(props) {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_2__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_4___default.a),
      t = _useI18n.t;

  var type = props.type;
  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuBLD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, t('학생 식당')), __jsx(_MealByPlace__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, t('RIST 식당')), __jsx(_MealByPlace__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ListByMeal);

/***/ }),

/***/ "./components/MenuMain/MenuList/MealByPlace.tsx":
/*!******************************************************!*\
  !*** ./components/MenuMain/MenuList/MealByPlace.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/MenuList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/MealByPlace.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var MealByPlace = function MealByPlace(props) {
  var menu = props.menu,
      type = props.type;
  var menuLists = [];

  if (menu.processed) {
    if (menu[type].length > 0 && menu[type][0].indexOf('==') !== 0) {
      menuLists = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(menuLists), [__jsx("div", {
        "data-list": true,
        key: "".concat(type, "-").concat(Math.random()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, menu[type].map(function (m) {
        return __jsx("p", {
          key: "".concat(type, "-item-").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, m);
      }))]);
    } else {
      var cacheList = [];
      var cacheLabel = '';

      for (var idx = 0; idx < menu[type].length; idx += 1) {
        var item = menu[type][idx];

        if (item.indexOf('== ') === 0) {
          if (cacheList.length > 0) {
            menuLists = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(menuLists), [__jsx("div", {
              "data-list": true,
              key: "".concat(type, "-").concat(Math.random()),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }, __jsx("h6", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }, cacheLabel), cacheList.map(function (m) {
              return __jsx("p", {
                key: "".concat(type, "-item-").concat(Math.random()),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                },
                __self: this
              }, m);
            }))]);
            cacheList = [];
          }

          cacheLabel = item.substring(3);
        } else {
          cacheList.push(item);
        }
      }

      if (cacheList.length > 0) {
        menuLists = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(menuLists), [__jsx("div", {
          "data-list": true,
          key: "".concat(type, "-").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, cacheLabel), cacheList.map(function (m) {
          return __jsx("p", {
            key: "".concat(type, "-item-").concat(Math.random()),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, m);
        }))]);
      }
    }
  }

  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, menu.processed ? menuLists : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "75%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MealByPlace);

/***/ }),

/***/ "./components/MenuMain/MenuList/SingleList.tsx":
false,

/***/ "./components/MenuMain/MenuList/index.tsx":
/*!************************************************!*\
  !*** ./components/MenuMain/MenuList/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _ListByMeal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListByMeal */ "./components/MenuMain/MenuList/ListByMeal.tsx");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/MenuList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/MenuList/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* eslint-disable react-hooks/exhaustive-deps */

var MenuList = function MenuList() {
  // States
  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      setAPILocale = _useAPI.setAPILocale,
      fetchMenu = _useAPI.fetchMenu;

  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t,
      getLocale = _useI18n.getLocale; // Fetch Menu Data


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setAPILocale(getLocale());
    fetchMenu();
  }, []); // Set default menu pivot item by time

  var hour = new Date().getHours();
  var showWhat = 'breakfast';

  if (hour >= 14) {
    showWhat = 'dinner';
  } else if (hour >= 10) {
    showWhat = 'lunch';
  }

  return __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Pivot"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.menuContainer,
    defaultSelectedKey: showWhat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PivotItem"], {
    headerText: t('아침'),
    itemKey: "breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_ListByMeal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PivotItem"], {
    headerText: t('점심'),
    itemKey: "lunch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_ListByMeal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "lunch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PivotItem"], {
    headerText: t('저녁'),
    itemKey: "dinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_ListByMeal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "dinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ })

})
//# sourceMappingURL=index.js.003fd745b252938d38fa.hot-update.js.map