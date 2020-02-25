webpackHotUpdate("static/development/pages/index.js",{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "../node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "../node_modules/core-js/library/fn/date/now.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/library/fn/date/now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "../node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.date.now.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.date.now.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./components/MenuMain/Footer/en.d.yml":
/*!*********************************************!*\
  !*** ./components/MenuMain/Footer/en.d.yml ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"en":({"배달 음식":"Delivery Menu 🇰🇷", "Polivery 바로가기":"Go To Polivery", "밝기 모드 변경":"Chane Brightness Mode", "밝게 보기":"Light Mode", "어둡게 보기":"Dark Mode", "데이터: 포스텍 복지회, 신세계푸드.":"Data: POSTECH Food Service, Shinsegae Food.", "시스템: 아지래견.":"System: Haze Dog."})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./components/MenuMain/Footer/index.tsx":
/*!**********************************************!*\
  !*** ./components/MenuMain/Footer/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react */ "../node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Theme */ "./components/Theme.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../I18n */ "./components/I18n.tsx");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../API */ "./components/API.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/Footer/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/Footer/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Footer = function Footer() {
  /* States */
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_4__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_7___default.a),
      t = _useI18n.t,
      setLocale = _useI18n.setLocale,
      getLocale = _useI18n.getLocale;

  var _useTheme = Object(_Theme__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      setTheme = _useTheme.setTheme,
      getTheme = _useTheme.getTheme;

  var _useAPI = Object(_API__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      setAPILocale = _useAPI.setAPILocale,
      fetchMenu = _useAPI.fetchMenu;
  /* Brightness Mode */
  // Cookie manager


  var setNightBoy = function setNightBoy(data) {
    if (typeof data !== 'boolean') {
      document.cookie = 'NightBoy=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = "NightBoy=".concat(data.toString(), ";expires=").concat(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 5184000).toUTCString() // 60 days
      , ";");
    }
  }; // Button click action for toggle


  var toggleDispBrightnessMode = function toggleDispBrightnessMode() {
    var _document$documentEle;

    if (((_document$documentEle = document.documentElement.dataset) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.theme) === 'dark') {
      setTheme('light');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy(false);
      } else {
        setNightBoy();
      }
    } else {
      setTheme('dark');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy();
      } else {
        setNightBoy(true);
      }
    }
  };
  /* Delivery Menu */


  var movePolivery = function movePolivery() {
    window.location.href = 'http://polivery.ml/?search';
  };
  /* Locale Change */
  // Cookie manager


  var setEnglishFlag = function setEnglishFlag(data) {
    if (typeof data !== 'boolean') {
      document.cookie = 'EnglishFlag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = "EnglishFlag=".concat(data.toString(), ";expires=").concat(new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 5184000).toUTCString() // 60 days
      , ";");
    }
  }; // Button click action for toggle


  var toggleDispLocale = function toggleDispLocale() {
    if (getLocale() === 'ko') {
      setLocale('en');
      setAPILocale('en');
      fetchMenu('en');

      if (window.navigator.language.indexOf('ko') >= 0) {
        setEnglishFlag(true);
      } else {
        setEnglishFlag();
      }
    } else {
      setLocale('ko');
      setAPILocale('ko');
      fetchMenu('ko');

      if (window.navigator.language.indexOf('ko') >= 0) {
        setEnglishFlag();
      } else {
        setEnglishFlag(false);
      }
    }
  };
  /* Render */


  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: movePolivery,
    title: t('Polivery 바로가기'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, t('배달 음식')), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: toggleDispBrightnessMode,
    title: t('밝기 모드 변경'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, getTheme() === 'dark' ? t('밝게 보기') : t('어둡게 보기')), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["ActionButton"], {
    onClick: toggleDispLocale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, getLocale() === 'ko' ? 'English' : '한국어')), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, t('데이터: 포스텍 복지회, 신세계푸드.'), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), t('시스템: 아지래견.')), __jsx("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_6___default.a.version,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "20200225.1"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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





;

var ListByMeal = function ListByMeal(props) {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_2__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_4___default.a),
      t = _useI18n.t;

  var type = props.type;
  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuBLD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, t('학생 식당')), __jsx(_MealByPlace__WEBPACK_IMPORTED_MODULE_1__["default"], {
    place: "jigok",
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, t('RIST 식당')), __jsx(_MealByPlace__WEBPACK_IMPORTED_MODULE_1__["default"], {
    place: "rist",
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      t = _useI18n.t;

  var place = props.place,
      type = props.type;
  var menu = getMenu(place, type);
  var menuLists = [__jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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
          lineNumber: 24
        },
        __self: this
      }, menu.map(function (m) {
        return __jsx("p", {
          key: "".concat(place, "-").concat(type, "-i").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, m);
      }))];
    } else {
      var menuTitles = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(menu);

      menuLists = [];

      for (var idx = 0; idx < menuTitles.length; idx += 1) {
        menuLists.push(__jsx("div", {
          "data-list": true,
          key: "".concat(place, "-").concat(type, "-").concat(Math.random()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, menuTitles[idx]), menu[menuTitles[idx]].map(function (m) {
          return __jsx("p", {
            key: "".concat(place, "-").concat(type, "-i").concat(Math.random()),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, m);
        })));
      }
    }
  }

  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.menuList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, isMenuLoaded(place) ? menuLists : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "95%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "75%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_2__["Shimmer"], {
    width: "40%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MealByPlace);

/***/ }),

/***/ "./components/MenuMain/MenuList/en.d.yml":
/*!***********************************************!*\
  !*** ./components/MenuMain/MenuList/en.d.yml ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"en":({"아침":"Breakfast", "점심":"Lunch", "저녁":"Dinner", "학생 식당":"Student Cafeteria", "RIST 식당":"RIST Cafeteria", "DOM 생성 중 오류가 발생했습니다.":"An error occured while generating DOM."})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

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

/***/ }),

/***/ "./components/MenuMain/en.d.yml":
/*!**************************************!*\
  !*** ./components/MenuMain/en.d.yml ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"en":({"오늘의 교내 식단":"Today's Campus Menu"})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

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
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuList */ "./components/MenuMain/MenuList/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/MenuMain/Footer/index.tsx");
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../I18n */ "./components/I18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/MenuMain/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.d.yml */ "./components/MenuMain/en.d.yml");
/* harmony import */ var _en_d_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_en_d_yml__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/wldh/MoNet/menu/src/components/MenuMain/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var MenuMain = function MenuMain() {
  var _useI18n = Object(_I18n__WEBPACK_IMPORTED_MODULE_3__["default"])(_en_d_yml__WEBPACK_IMPORTED_MODULE_5___default.a),
      t = _useI18n.t;

  return __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, t('오늘의 교내 식단')), __jsx(_MenuList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuMain);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper/index.tsx");
/* harmony import */ var _components_MenuMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MenuMain */ "./components/MenuMain/index.tsx");
var _jsxFileName = "/home/wldh/MoNet/menu/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Index = function Index() {
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    main: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_MenuMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c6c4d078dfee004fdc30.hot-update.js.map