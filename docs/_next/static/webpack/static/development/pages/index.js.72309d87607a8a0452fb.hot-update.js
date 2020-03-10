webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuMain/MenuList/MealByPlace.tsx":
/*!******************************************************!*\
  !*** ./components/MenuMain/MenuList/MealByPlace.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/MenuList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/MenuList/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/MenuList/MealByPlace.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






;

var MealByPlace = function MealByPlace(props) {
  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_3__["useAPI"])(),
      getMenu = _useAPI.getMenu,
      isMenuLoaded = _useAPI.isMenuLoaded;

  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t,
      getLocale = _useI18n.getLocale;

  var place = props.place,
      type = props.type,
      engTranslationRequired = props.engTranslationRequired;
  var menu = getMenu(place, type);
  var menuLists = [__jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, t('DOM 생성 중 오류가 발생했습니다.')))];

  if (menu) {
    if (menu instanceof Array) {
      menuLists = [__jsx("div", {
        "data-list": true,
        key: "".concat(place, "-").concat(type, "-").concat(Math.random()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, menu.map(function (m) {
        return __jsx("p", {
          key: "".concat(place, "-").concat(type, "-i").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          variant: "medium",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, m));
      }))];
    } else {
      (function () {
        var menuTitles = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(menu);

        menuLists = [];

        var _loop = function _loop(idx) {
          menuLists.push(__jsx("div", {
            "data-list": true,
            key: "".concat(place, "-").concat(type, "-").concat(Math.random()),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, __jsx("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            variant: "medium",
            className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subTitle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, menuTitles[idx]), engTranslationRequired && getLocale() === 'en' && __jsx("button", {
            type: "button",
            title: "Translate To English",
            className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.translate,
            onClick: function onClick() {
              var ntp = window.open("https://translate.google.com/?vi=c#/en/ko/".concat(window.encodeURIComponent(menu[menuTitles[idx]].join('\n'))), '_blank');
              ntp.focus();
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, __jsx("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            viewBox: "0 0 228.403 228.403",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("path", {
            d: "M215.428,73.112h-79.797l-12.998-56.41H12.977C5.821,16.701,0,22.523,0,29.678v112.637c0,7.155,5.821,12.977,12.977,12.977 h79.794l12.999,56.41h109.659c7.154,0,12.975-5.821,12.975-12.977V86.088C228.403,78.933,222.583,73.112,215.428,73.112z M15,140.291V31.701h95.696l25.022,108.59H15z M108.164,155.291h28.195l-21.134,30.643L108.164,155.291z M213.403,196.701H126.02 l16.195-23.481l2.458,4.004c9.801-6.018,17.538-13.048,23.646-20.203l18.985,19.366l7.856-7.701l-20.103-20.506 c8.455-12.449,12.418-24.163,14.078-30.381h12.897v-11h-27.322v-6.555h-11v6.555h-20.317l-4.306-18.688h74.314V196.701z M154.565,155.291h0.003l-3.705-16.078l9.689,9.883c-1.989,2.39-4.18,4.765-6.588,7.089l0.611-0.887L154.565,155.291z M154.44,127.148l-5.186,5.084l-3.326-14.433h31.73c-1.684,5.371-4.87,13.541-10.514,22.309L154.44,127.148z M67.831,78.495h37.074 v7.5c0,20.442-16.631,37.074-37.074,37.074s-37.074-16.632-37.074-37.074c0-20.442,16.631-37.073,37.074-37.073 c8.261,0,16.077,2.658,22.603,7.686l-9.155,11.883c-3.878-2.989-8.528-4.568-13.448-4.568c-12.171,0-22.074,9.902-22.074,22.073 c0,12.172,9.902,22.074,22.074,22.074c9.539,0,17.685-6.084,20.762-14.574H67.831V78.495z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          })))), menu[menuTitles[idx]].map(function (m) {
            return __jsx("p", {
              key: "".concat(place, "-").concat(type, "-i").concat(Math.random()),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              variant: "medium",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            }, m));
          })));
        };

        for (var idx = 0; idx < menuTitles.length; idx += 1) {
          _loop(idx);
        }
      })();
    }
  }

  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.menuList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, isMenuLoaded(place) ? menuLists : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "95%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "75%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "40%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MealByPlace);

/***/ })

})
//# sourceMappingURL=index.js.72309d87607a8a0452fb.hot-update.js.map