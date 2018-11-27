(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./julia_set.js":
/*!**********************!*\
  !*** ./julia_set.js ***!
  \**********************/
/*! exports provided: draw, __widl_f_put_image_data_CanvasRenderingContext2D, __widl_f_new_with_u8_clamped_array_and_sh_ImageData, __wbindgen_object_drop_ref, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_put_image_data_CanvasRenderingContext2D\", function() { return __widl_f_put_image_data_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_new_with_u8_clamped_array_and_sh_ImageData\", function() { return __widl_f_new_with_u8_clamped_array_and_sh_ImageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _julia_set_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./julia_set_bg */ \"./julia_set_bg.wasm\");\n/* tslint:disable */\n\n\nconst stack = [];\n\nfunction addBorrowedObject(obj) {\n    stack.push(obj);\n    return ((stack.length - 1) << 1) | 1;\n}\n/**\n* @param {any} arg0\n* @param {number} arg1\n* @param {number} arg2\n* @param {number} arg3\n* @param {number} arg4\n* @returns {void}\n*/\nfunction draw(arg0, arg1, arg2, arg3, arg4) {\n    try {\n        return _julia_set_bg__WEBPACK_IMPORTED_MODULE_0__[\"draw\"](addBorrowedObject(arg0), arg1, arg2, arg3, arg4);\n\n    } finally {\n        stack.pop();\n\n    }\n\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _julia_set_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_julia_set_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nconst __widl_f_put_image_data_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.putImageData || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.putImageData does not exist`);\n};\n\nfunction __widl_f_put_image_data_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, exnptr) {\n    try {\n        __widl_f_put_image_data_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1), arg2, arg3);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nlet cachegetUint8ClampedMemory = null;\nfunction getUint8ClampedMemory() {\n    if (cachegetUint8ClampedMemory === null || cachegetUint8ClampedMemory.buffer !== _julia_set_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8ClampedMemory = new Uint8ClampedArray(_julia_set_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8ClampedMemory;\n}\n\nfunction getClampedArrayU8FromWasm(ptr, len) {\n    return getUint8ClampedMemory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction __widl_f_new_with_u8_clamped_array_and_sh_ImageData(arg0, arg1, arg2, arg3, exnptr) {\n    let varg0 = getClampedArrayU8FromWasm(arg0, arg1);\n    try {\n        return addHeapObject(new ImageData(varg0, arg2, arg3));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropRef(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\n\n\n//# sourceURL=webpack:///./julia_set.js?");

/***/ }),

/***/ "./julia_set_bg.wasm":
/*!***************************!*\
  !*** ./julia_set_bg.wasm ***!
  \***************************/
/*! exports provided: memory, draw */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./julia_set */ \"./julia_set.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./julia_set_bg.wasm?");

/***/ })

}]);