"use strict";
(self["webpackChunkassets_and_resources"] = self["webpackChunkassets_and_resources"] || []).push([["src_lib_message_store_inlang_FigmaPlugin_ts"],{

/***/ "./src/lib/message/store/inlang/FigmaPlugin.ts":
/*!*****************************************************!*\
  !*** ./src/lib/message/store/inlang/FigmaPlugin.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _inlang_sdk_test_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inlang/sdk/test-utilities */ "./node_modules/@inlang/sdk/dist/test-utilities/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { id, displayName, description } from "../marketplace-manifest.json"

// eslint-disable-next-line import/prefer-default-export
const plugin = {
    // id: id as Plugin["id"],
    id: 'plugin.organization.pluginName',
    displayName: { en: 'test' },
    description: { en: 'test' },
    // displayName,
    // description,
    loadMessages: () => __awaiter(void 0, void 0, void 0, function* () {
        const fakeMessages = [
            (0,_inlang_sdk_test_utilities__WEBPACK_IMPORTED_MODULE_0__.createMessage)('this-is-a-test-message', {
                en: 'Hello world!',
            }),
        ];
        return fakeMessages;
    }),
    saveMessages: () => {
    },
};


/***/ }),

/***/ "./node_modules/@inlang/sdk/dist/test-utilities/createMessage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@inlang/sdk/dist/test-utilities/createMessage.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMessage: () => (/* binding */ createMessage)
/* harmony export */ });
const createMessage = (id, patterns) => ({
    id,
    selectors: [],
    variants: Object.entries(patterns).map(([languageTag, patterns]) => ({
        languageTag,
        match: {},
        pattern: typeof patterns === "string"
            ? [
                {
                    type: "Text",
                    value: patterns,
                },
            ]
            : patterns,
    })),
});


/***/ }),

/***/ "./node_modules/@inlang/sdk/dist/test-utilities/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@inlang/sdk/dist/test-utilities/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMessage: () => (/* reexport safe */ _createMessage_js__WEBPACK_IMPORTED_MODULE_0__.createMessage),
/* harmony export */   createNodeishMemoryFs: () => (/* reexport safe */ _lix_js_fs__WEBPACK_IMPORTED_MODULE_1__.createNodeishMemoryFs)
/* harmony export */ });
/* harmony import */ var _createMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMessage.js */ "./node_modules/@inlang/sdk/dist/test-utilities/createMessage.js");
/* harmony import */ var _lix_js_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lix-js/fs */ "./node_modules/@lix-js/fs/dist/index.js");




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2xpYl9tZXNzYWdlX3N0b3JlX2lubGFuZ19GaWdtYVBsdWdpbl90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUE4RTtBQUNuQjtBQUUzRCx3REFBd0Q7QUFDakQsTUFBTSxNQUFNLEdBQVc7SUFDNUIsMEJBQTBCO0lBQzFCLEVBQUUsRUFBRSxnQ0FBZ0Q7SUFDcEQsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBMkI7SUFDcEQsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBMkI7SUFDcEQsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZLEVBQUUsR0FBUyxFQUFFO1FBQ3ZCLE1BQU0sWUFBWSxHQUFHO1lBQ25CLHlFQUFhLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ3RDLEVBQUUsRUFBRSxjQUFjO2FBQ25CLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNELFlBQVksRUFBRSxHQUFHLEVBQUU7SUFFbkIsQ0FBQztDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2V0cy1hbmQtcmVzb3VyY2VzLy4vc3JjL2xpYi9tZXNzYWdlL3N0b3JlL2lubGFuZy9GaWdtYVBsdWdpbi50cyIsIndlYnBhY2s6Ly9hc3NldHMtYW5kLXJlc291cmNlcy8uL25vZGVfbW9kdWxlcy9AaW5sYW5nL3Nkay9kaXN0L3Rlc3QtdXRpbGl0aWVzL2NyZWF0ZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXNzZXRzLWFuZC1yZXNvdXJjZXMvLi9ub2RlX21vZHVsZXMvQGlubGFuZy9zZGsvZGlzdC90ZXN0LXV0aWxpdGllcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tICdAaW5sYW5nL3Nkayc7XG4vLyBpbXBvcnQgeyBpZCwgZGlzcGxheU5hbWUsIGRlc2NyaXB0aW9uIH0gZnJvbSBcIi4uL21hcmtldHBsYWNlLW1hbmlmZXN0Lmpzb25cIlxuaW1wb3J0IHsgY3JlYXRlTWVzc2FnZSB9IGZyb20gJ0Bpbmxhbmcvc2RrL3Rlc3QtdXRpbGl0aWVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBwbHVnaW46IFBsdWdpbiA9IHtcbiAgLy8gaWQ6IGlkIGFzIFBsdWdpbltcImlkXCJdLFxuICBpZDogJ3BsdWdpbi5vcmdhbml6YXRpb24ucGx1Z2luTmFtZScgYXMgUGx1Z2luWydpZCddLFxuICBkaXNwbGF5TmFtZTogeyBlbjogJ3Rlc3QnwqB9IGFzIFBsdWdpblsnZGlzcGxheU5hbWUnXSxcbiAgZGVzY3JpcHRpb246IHsgZW46ICd0ZXN0JyB9IGFzIFBsdWdpblsnZGVzY3JpcHRpb24nXSxcbiAgLy8gZGlzcGxheU5hbWUsXG4gIC8vIGRlc2NyaXB0aW9uLFxuICBsb2FkTWVzc2FnZXM6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmYWtlTWVzc2FnZXMgPSBbXG4gICAgICBjcmVhdGVNZXNzYWdlKCd0aGlzLWlzLWEtdGVzdC1tZXNzYWdlJywge1xuICAgICAgICBlbjogJ0hlbGxvIHdvcmxkIScsXG4gICAgICB9KSxcbiAgICBdO1xuICAgIHJldHVybiBmYWtlTWVzc2FnZXM7XG4gIH0sXG4gIHNhdmVNZXNzYWdlczogKCkgPT4ge1xuXG4gIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoaWQsIHBhdHRlcm5zKSA9PiAoe1xuICAgIGlkLFxuICAgIHNlbGVjdG9yczogW10sXG4gICAgdmFyaWFudHM6IE9iamVjdC5lbnRyaWVzKHBhdHRlcm5zKS5tYXAoKFtsYW5ndWFnZVRhZywgcGF0dGVybnNdKSA9PiAoe1xuICAgICAgICBsYW5ndWFnZVRhZyxcbiAgICAgICAgbWF0Y2g6IHt9LFxuICAgICAgICBwYXR0ZXJuOiB0eXBlb2YgcGF0dGVybnMgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXR0ZXJucyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBwYXR0ZXJucyxcbiAgICB9KSksXG59KTtcbiIsImV4cG9ydCB7IGNyZWF0ZU1lc3NhZ2UgfSBmcm9tIFwiLi9jcmVhdGVNZXNzYWdlLmpzXCI7XG5leHBvcnQgeyBjcmVhdGVOb2RlaXNoTWVtb3J5RnMgfSBmcm9tIFwiQGxpeC1qcy9mc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9