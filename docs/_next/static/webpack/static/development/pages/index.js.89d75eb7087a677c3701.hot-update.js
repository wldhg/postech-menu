webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/MenuList/SingleList.tsx":
/*!*****************************************************!*\
  !*** ./components/MenuMain/MenuList/SingleList.tsx ***!
  \*****************************************************/
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

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/SingleList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var SingleList = function SingleList(props) {
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

/* harmony default export */ __webpack_exports__["default"] = (SingleList);

/***/ })

})
//# sourceMappingURL=index.js.89d75eb7087a677c3701.hot-update.js.map