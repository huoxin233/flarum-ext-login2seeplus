/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/CommentPost */ "flarum/common/components/CommentPost");
/* harmony import */ var flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/HeaderPrimary */ "flarum/common/components/HeaderPrimary");
/* harmony import */ var flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LogInModal */ "flarum/common/components/LogInModal");
/* harmony import */ var flarum_common_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/SignUpModal */ "flarum/common/components/SignUpModal");
/* harmony import */ var flarum_common_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5__);






flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('jslirola-login2seeplus', function () {
  var jslirolaLogin2seeplusReplaceImages;
  var jslirolaLogin2seeplusImgMin = 150;
  function get_link(trans) {
    var newlink = document.createElement('a');
    newlink.setAttribute('class', 'l2sp');
    newlink.innerHTML = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans(trans);
    return newlink.outerHTML;
  }
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'oninit', function () {
    jslirolaLogin2seeplusReplaceImages = JSON.parse(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('jslirola.login2seeplus.image') || 0);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'content', function (list) {
    if ((flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().session.user) || this.isEditing()) return;
    var oldContent = list[1].children[0].children;
    var newContent = oldContent;
    var subbedContent = false;

    // replace images
    if (jslirolaLogin2seeplusReplaceImages) {
      var imgCounter = 0;
      newContent = newContent.replace(/<img((.(?!class=))*)\/?>/g, function (html) {
        var img = $(html)[0];
        var src = img.src;
        var loader = new Image();
        loader.onload = function () {
          var imgWidth = loader.width;
          var imgHeight = loader.height;
          imgWidth = imgWidth > jslirolaLogin2seeplusImgMin ? imgWidth : jslirolaLogin2seeplusImgMin;
          imgHeight = imgHeight > jslirolaLogin2seeplusImgMin ? imgHeight : jslirolaLogin2seeplusImgMin;
          $('.wlip' + this.counter).width(imgWidth);
          $('.wlip' + this.counter).height(imgHeight);
        };
        loader.counter = imgCounter;
        loader.src = src;
        return '<div class="jslirolaLogin2seeplusImgPlaceholder wlip' + imgCounter++ + '">' + get_link('jslirola-login2seeplus.forum.image') + '</div>';
      });
    }
    if (subbedContent) newContent += '<div class="jslirolaLogin2seeplusAlert">' + flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('jslirola-login2seeplus.forum.post', {
      login: "<a class='jslirolaLogin2seeplusLogin'>" + flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.header.log_in_link') + "</a>",
      register: "<a class='jslirolaLogin2seeplusRegister'>" + flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.header.sign_up_link') + "</a>"
    }).join('') + '</div>';
    list[1].children[0] = m.trust(newContent);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    $('.Post-body a.l2sp').off('click').on('click', function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_common_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default()));
    });
    $('.jslirolaLogin2seeplusLogin').off('click').on('click', function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_common_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default()));
    });
    $('.jslirolaLogin2seeplusRegister').off('click').on('click', function () {
      return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_common_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5___default()));
    });
  });
});

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/CommentPost":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/CommentPost']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/CommentPost'];

/***/ }),

/***/ "flarum/common/components/HeaderPrimary":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/HeaderPrimary']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/common/components/LogInModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LogInModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LogInModal'];

/***/ }),

/***/ "flarum/common/components/SignUpModal":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/SignUpModal']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/SignUpModal'];

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
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map