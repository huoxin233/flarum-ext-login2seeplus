/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);


flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('jslirola-login2seeplus', function () {
  flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().extensionData["for"]('jslirola-login2seeplus').registerSetting(function () {
    return m("legend", {
      "class": "login2seeplus-lenght"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.post.title'));
  }).registerSetting({
    setting: 'jslirola.login2seeplus.post',
    type: 'number',
    min: -1
  }).registerSetting(createSeparator).registerSetting({
    setting: 'jslirola.login2seeplus.sensitive.input',
    type: 'textarea',
    rows: 10,
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.sensitive.input.label'),
    help: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.sensitive.input.help')
  }).registerSetting({
    setting: 'jslirola.login2seeplus.sensitive.replacewith',
    type: 'text',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.sensitive.replacewith.label'),
    help: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.sensitive.replacewith.help')
  }).registerSetting(createSeparator).registerSetting(function () {
    return m("legend", {
      "class": "login2seeplus-hide"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.hide'));
  }).registerSetting({
    setting: 'jslirola.login2seeplus.link',
    type: 'switch',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.link.title')
  }).registerSetting({
    setting: 'jslirola.login2seeplus.image',
    type: 'switch',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.image.title')
  }).registerSetting({
    setting: 'jslirola.login2seeplus.code',
    type: 'switch',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.code.title')
  }).registerSetting({
    setting: 'jslirola.login2seeplus.sensitive.switch',
    type: 'switch',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.sensitive.title')
  }).registerPermission({
    icon: 'fas fa-eye',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.post.permission.nohide.label'),
    permission: 'jslirola-login2seeplus.post.nohide',
    allowGuest: true
  }, 'view').registerPermission({
    icon: 'fas fa-eye',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.link.permission.nohide.label'),
    permission: 'jslirola-login2seeplus.link.nohide',
    allowGuest: true
  }, 'view').registerPermission({
    icon: 'fas fa-eye',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.image.permission.nohide.label'),
    permission: 'jslirola-login2seeplus.image.nohide',
    allowGuest: true
  }, 'view').registerPermission({
    icon: 'fas fa-eye',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.code.permission.nohide.label'),
    permission: 'jslirola-login2seeplus.code.nohide',
    allowGuest: true
  }, 'view').registerPermission({
    icon: 'fas fa-eye',
    label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.admin.sensitive.permission.nohide.label'),
    permission: 'jslirola-login2seeplus.sensitive.nohide',
    allowGuest: true
  }, 'view');
});
function createSeparator() {
  return m("div", {
    "class": "Separator"
  }, m("hr", null));
}

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map