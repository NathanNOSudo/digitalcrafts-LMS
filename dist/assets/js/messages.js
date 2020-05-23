/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/jsrender/jsrender.js":
/*!*******************************************!*\
  !*** ./node_modules/jsrender/jsrender.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/*! JsRender v1.0.6: http://jsviews.com/#jsrender */

/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */

/*
 * Best-of-breed templating in browser or on Node.js.
 * Does not require jQuery, or HTML DOM
 * Integrates with JsViews (http://jsviews.com/#jsviews)
 *
 * Copyright 2020, Boris Moore
 * Released under the MIT License.
 */
//jshint -W018, -W041, -W120
(function (factory, global) {
  // global var is the this object, which is window when running in the usual browser environment
  var $ = global.jQuery;

  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS e.g. Browserify
    module.exports = $ ? factory(global, $) : function ($) {
      // If no global jQuery, take optional jQuery passed as parameter: require('jsrender')(jQuery)
      if ($ && !$.fn) {
        throw "Provide jQuery or null";
      }

      return factory(global, $);
    };
  } else if (true) {
    // AMD script loader, e.g. RequireJS
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return factory(global);
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})( // factory (for jsrender.js)
function (global, $) {
  "use strict"; //========================== Top-level vars ==========================
  // global var is the this object, which is window when running in the usual browser environment

  var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

  $ = $ && $.fn ? $ : global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

  var versionNumber = "v1.0.6",
      jsvStoreName,
      rTag,
      rTmplString,
      topView,
      $views,
      $expando,
      _ocp = "_ocp",
      // Observable contextual parameter
  //TODO	tmplFnsCache = {},
  $isFunction,
      $isArray,
      $templates,
      $converters,
      $helpers,
      $tags,
      $sub,
      $subSettings,
      $subSettingsAdvanced,
      $viewsSettings,
      delimOpenChar0,
      delimOpenChar1,
      delimCloseChar0,
      delimCloseChar1,
      linkChar,
      setting,
      baseOnError,
      isRenderCall,
      rNewLine = /[ \t]*(\r\n|\n|\r)/g,
      rUnescapeQuotes = /\\(['"])/g,
      rEscapeQuotes = /['"\\]/g,
      // Escape quotes and \ character
  rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
      rTestElseIf = /^if\s/,
      rFirstElem = /<(\w+)[>\s]/,
      rAttrEncode = /[\x00`><"'&=]/g,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
  rIsHtml = /[\x00`><\"'&=]/,
      rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
      rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/,
      rHtmlEncode = rAttrEncode,
      rDataEncode = /[&<>]/g,
      rDataUnencode = /&(amp|gt|lt);/g,
      rBracketQuote = /\[['"]?|['"]?\]/g,
      viewId = 0,
      charEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\x00": "&#0;",
    "'": "&#39;",
    '"': "&#34;",
    "`": "&#96;",
    "=": "&#61;"
  },
      charsFromEntities = {
    amp: "&",
    gt: ">",
    lt: "<"
  },
      HTML = "html",
      OBJECT = "object",
      tmplAttr = "data-jsv-tmpl",
      jsvTmpl = "jsvTmpl",
      indexStr = "For #index in nested block use #getIndex().",
      $render = {},
      jsr = global.jsrender,
      jsrToJq = jsr && $ && !$.render,
      // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery
  jsvStores = {
    template: {
      compile: compileTmpl
    },
    tag: {
      compile: compileTag
    },
    viewModel: {
      compile: compileViewModel
    },
    helper: {},
    converter: {}
  }; // views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)

  $views = {
    jsviews: versionNumber,
    sub: {
      // subscription, e.g. JsViews integration
      rPath: /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
      //        not                               object     helper    view  viewProperty pathTokens      leafToken
      rPrm: /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      //   lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2   apos quot        rtPrn  rtPrnDot                  prn2     space
      View: View,
      Err: JsViewsError,
      tmplFn: tmplFn,
      parse: parseParams,
      extend: $extend,
      extendCtx: extendCtx,
      syntaxErr: syntaxError,
      onStore: {
        template: function template(name, item) {
          if (item === null) {
            delete $render[name];
          } else if (name) {
            $render[name] = item;
          }
        }
      },
      addSetting: addSetting,
      settings: {
        allowCode: false
      },
      advSet: noop,
      // Update advanced settings
      _thp: tagHandlersFromProps,
      _gm: getMethod,
      _tg: function _tg() {},
      // Constructor for tagDef
      _cnvt: convertVal,
      _tag: renderTag,
      _er: error,
      _err: onRenderError,
      _cp: retVal,
      // Get observable contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
      _sq: function _sq(token) {
        if (token === "constructor") {
          syntaxError("");
        }

        return token;
      }
    },
    settings: {
      delimiters: $viewsDelimiters,
      advanced: function advanced(value) {
        return value ? ($extend($subSettingsAdvanced, value), $sub.advSet(), $viewsSettings) : $subSettingsAdvanced;
      }
    },
    map: dataMap // If jsObservable loaded first, use that definition of dataMap

  };

  function getDerivedMethod(baseMethod, method) {
    return function () {
      var ret,
          tag = this,
          prevBase = tag.base;
      tag.base = baseMethod; // Within method call, calling this.base will call the base method

      ret = method.apply(tag, arguments); // Call the method

      tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls

      return ret;
    };
  }

  function getMethod(baseMethod, method) {
    // For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
    // or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
    if ($isFunction(method)) {
      method = getDerivedMethod(!baseMethod ? noop // no base method implementation, so use noop as base method
      : baseMethod._d ? baseMethod // baseMethod is a derived method, so use it
      : getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
      method);
      method._d = (baseMethod && baseMethod._d || 0) + 1; // Add flag for derived method (incremented for derived of derived...)
    }

    return method;
  }

  function tagHandlersFromProps(tag, tagCtx) {
    var prop,
        props = tagCtx.props;

    for (prop in props) {
      if (rHasHandlers.test(prop) && !(tag[prop] && tag[prop].fix)) {
        // Don't override handlers with fix expando (used in datepicker and spinner)
        tag[prop] = prop !== "convert" ? getMethod(tag.constructor.prototype[prop], props[prop]) : props[prop]; // Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
        // Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
      }
    }
  }

  function retVal(val) {
    return val;
  }

  function noop() {
    return "";
  }

  function dbgBreak(val) {
    // Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
    try {
      console.log("JsRender dbg breakpoint: " + val);
      throw "dbg breakpoint"; // To break here, stop on caught exceptions.
    } catch (e) {}

    return this.base ? this.baseApply(arguments) : val;
  }

  function JsViewsError(message) {
    // Error exception type for JsViews/JsRender
    // Override of $.views.sub.Error is possible
    this.name = ($.link ? "JsViews" : "JsRender") + " Error";
    this.message = message || this.name;
  }

  function $extend(target, source) {
    if (target) {
      for (var name in source) {
        target[name] = source[name];
      }

      return target;
    }
  }

  (JsViewsError.prototype = new Error()).constructor = JsViewsError; //========================== Top-level functions ==========================
  //===================
  // views.delimiters
  //===================

  /**
  * Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
  * openChars, closeChars: opening and closing strings, each with two characters
  * $.views.settings.delimiters(...)
  *
  * @param {string}   openChars
  * @param {string}   [closeChars]
  * @param {string}   [link]
  * @returns {Settings}
  *
  * Get delimiters
  * delimsArray = $.views.settings.delimiters()
  *
  * @returns {string[]}
  */

  function $viewsDelimiters(openChars, closeChars, link) {
    if (!openChars) {
      return $subSettings.delimiters;
    }

    if ($isArray(openChars)) {
      return $viewsDelimiters.apply($views, openChars);
    }

    linkChar = link ? link[0] : linkChar;

    if (!/^(\W|_){5}$/.test(openChars + closeChars + linkChar)) {
      error("Invalid delimiters"); // Must be non-word characters, and openChars and closeChars must each be length 2
    }

    delimOpenChar0 = openChars[0];
    delimOpenChar1 = openChars[1];
    delimCloseChar0 = closeChars[0];
    delimCloseChar1 = closeChars[1];
    $subSettings.delimiters = [delimOpenChar0 + delimOpenChar1, delimCloseChar0 + delimCloseChar1, linkChar]; // Escape the characters - since they could be regex special characters

    openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"

    closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1; // Default is "}}"
    // Build regex with new delimiters
    //          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?

    rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)"; // Make rTag available to JsViews (or other components) for parsing binding expressions

    $sub.rTag = "(?:" + rTag + ")"; //                        { ^? {   tag+params slash?  or closingTag                                                   or comment

    rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g"); // Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
    //      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

    $sub.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars); // $sub.rTmpl looks for initial or final white space, html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}.
    // Each of these strings are considered NOT to be jQuery selectors

    return $viewsSettings;
  } //=========
  // View.get
  //=========


  function getView(inner, type) {
    //view.get(inner, type)
    if (!type && inner !== true) {
      // view.get(type)
      type = inner;
      inner = undefined;
    }

    var views,
        i,
        l,
        found,
        view = this,
        root = type === "root"; // view.get("root") returns view.root, view.get() returns view.parent, view.get(true) returns view.views[0].

    if (inner) {
      // Go through views - this one, and all nested ones, depth-first - and return first one with given type.
      // If type is undefined, i.e. view.get(true), return first child view.
      found = type && view.type === type && view;

      if (!found) {
        views = view.views;

        if (view._.useKey) {
          for (i in views) {
            if (found = type ? views[i].get(inner, type) : views[i]) {
              break;
            }
          }
        } else {
          for (i = 0, l = views.length; !found && i < l; i++) {
            found = type ? views[i].get(inner, type) : views[i];
          }
        }
      }
    } else if (root) {
      // Find root view. (view whose parent is top view)
      found = view.root;
    } else if (type) {
      while (view && !found) {
        // Go through views - this one, and all parent ones - and return first one with given type.
        found = view.type === type ? view : undefined;
        view = view.parent;
      }
    } else {
      found = view.parent;
    }

    return found || undefined;
  }

  function getNestedIndex() {
    var view = this.get("item");
    return view ? view.index : undefined;
  }

  getNestedIndex.depends = function () {
    return [this.get("item"), "index"];
  };

  function getIndex() {
    return this.index;
  }

  getIndex.depends = "index"; //==================
  // View.ctxPrm, etc.
  //==================

  /* Internal private: view._getOb() */

  function getPathObject(ob, path, ltOb, fn) {
    // Iterate through path to late paths: @a.b.c paths
    // Return "" (or noop if leaf is a function @a.b.c(...) ) if intermediate object not yet available
    var prevOb,
        tokens,
        l,
        i = 0;

    if (ltOb === 1) {
      fn = 1;
      ltOb = undefined;
    } // Paths like ^a^b^c or ~^a^b^c will not throw if an object in path is undefined.


    if (path) {
      tokens = path.split(".");
      l = tokens.length;

      for (; ob && i < l; i++) {
        prevOb = ob;
        ob = tokens[i] ? ob[tokens[i]] : ob;
      }
    }

    if (ltOb) {
      ltOb.lt = ltOb.lt || i < l; // If i < l there was an object in the path not yet available
    }

    return ob === undefined ? fn ? noop : "" : fn ? function () {
      return ob.apply(prevOb, arguments);
    } : ob;
  }

  function contextParameter(key, value, get) {
    // Helper method called as view.ctxPrm(key) for helpers or template parameters ~foo - from compiled template or from context callback
    var wrapped,
        deps,
        res,
        obsCtxPrm,
        tagElse,
        callView,
        newRes,
        storeView = this,
        isUpdate = !isRenderCall && arguments.length > 1,
        store = storeView.ctx;

    if (key) {
      if (!storeView._) {
        // tagCtx.ctxPrm() call
        tagElse = storeView.index;
        storeView = storeView.tag;
      }

      callView = storeView;

      if (store && store.hasOwnProperty(key) || (store = $helpers).hasOwnProperty(key)) {
        res = store[key];

        if (key === "tag" || key === "tagCtx" || key === "root" || key === "parentTags") {
          return res;
        }
      } else {
        store = undefined;
      }

      if (!isRenderCall && storeView.tagCtx || storeView.linked) {
        // Data-linked view, or tag instance
        if (!res || !res._cxp) {
          // Not a contextual parameter
          // Set storeView to tag (if this is a tag.ctxPrm() call) or to root view ("data" view of linked template)
          storeView = storeView.tagCtx || $isFunction(res) ? storeView // Is a tag, not a view, or is a computed contextual parameter, so scope to the callView, no the 'scope view'
          : (storeView = storeView.scope || storeView, !storeView.isTop && storeView.ctx.tag // If this view is in a tag, set storeView to the tag
          || storeView);

          if (res !== undefined && storeView.tagCtx) {
            // If storeView is a tag, but the contextual parameter has been set at at higher level (e.g. helpers)...
            storeView = storeView.tagCtx.view.scope; //  then move storeView to the outer level (scope of tag container view)
          }

          store = storeView._ocps;
          res = store && store.hasOwnProperty(key) && store[key] || res;

          if (!(res && res._cxp) && (get || isUpdate)) {
            // Create observable contextual parameter
            (store || (storeView._ocps = storeView._ocps || {}))[key] = res = [{
              _ocp: res,
              // The observable contextual parameter value
              _vw: callView,
              _key: key
            }];
            res._cxp = {
              path: _ocp,
              ind: 0,
              updateValue: function updateValue(val, path) {
                $.observable(res[0]).setProperty(_ocp, val); // Set the value (res[0]._ocp)

                return this;
              }
            };
          }
        }

        if (obsCtxPrm = res && res._cxp) {
          // If this helper resource is an observable contextual parameter
          if (arguments.length > 2) {
            deps = res[1] ? $sub._ceo(res[1].deps) : [_ocp]; // fn deps (with any exprObs cloned using $sub._ceo)

            deps.unshift(res[0]); // view

            deps._cxp = obsCtxPrm; // In a context callback for a contextual param, we set get = true, to get ctxPrm  [view, dependencies...] array - needed for observe call

            return deps;
          }

          tagElse = obsCtxPrm.tagElse;
          newRes = res[1] // linkFn for compiled expression
          ? obsCtxPrm.tag && obsCtxPrm.tag.cvtArgs ? obsCtxPrm.tag.cvtArgs(tagElse, 1)[obsCtxPrm.ind] // = tag.bndArgs() - for tag contextual parameter
          : res[1](res[0].data, res[0], $sub) // = fn(data, view, $sub) for compiled binding expression
          : res[0]._ocp; // Observable contextual parameter (uninitialized, or initialized as static expression, so no path dependencies)

          if (isUpdate) {
            $sub._ucp(key, value, storeView, obsCtxPrm); // Update observable contextual parameter


            return storeView;
          }

          res = newRes;
        }
      }

      if (res && $isFunction(res)) {
        // If a helper is of type function we will wrap it, so if called with no this pointer it will be called with the
        // view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
        // Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
        // For example, ~util.foo() will have the ~util object as 'this' pointer
        wrapped = function wrapped() {
          return res.apply(!this || this === global ? callView : this, arguments);
        };

        $extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
      }

      return wrapped || res;
    }
  }
  /* Internal private: view._getTmpl() */


  function getTemplate(tmpl) {
    return tmpl && (tmpl.fn ? tmpl : this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
  } //==============
  // views._cnvt
  //==============


  function convertVal(converter, view, tagCtx, onError) {
    // Called from compiled template code for {{:}}
    // self is template object or linkCtx object
    var tag,
        linkCtx,
        value,
        argsLen,
        bindTo,
        // If tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
    boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx - 1];

    if (onError === undefined && boundTag && boundTag._lr) {
      // lateRender
      onError = "";
    }

    if (onError !== undefined) {
      tagCtx = onError = {
        props: {},
        args: [onError]
      };
    } else if (boundTag) {
      tagCtx = boundTag(view.data, view, $sub);
    }

    boundTag = boundTag._bd && boundTag;

    if (converter || boundTag) {
      linkCtx = view._lc; // For data-link="{cvt:...}"... See onDataLinkedTagChange

      tag = linkCtx && linkCtx.tag;
      tagCtx.view = view;

      if (!tag) {
        tag = $extend(new $sub._tg(), {
          _: {
            bnd: boundTag,
            unlinked: true,
            lt: tagCtx.lt // If a late path @some.path has not returned @some object, mark tag as late

          },
          inline: !linkCtx,
          tagName: ":",
          convert: converter,
          onArrayChange: true,
          flow: true,
          tagCtx: tagCtx,
          tagCtxs: [tagCtx],
          _is: "tag"
        });
        argsLen = tagCtx.args.length;

        if (argsLen > 1) {
          bindTo = tag.bindTo = [];

          while (argsLen--) {
            bindTo.unshift(argsLen); // Bind to all the arguments - generate bindTo array: [0,1,2...]
          }
        }

        if (linkCtx) {
          linkCtx.tag = tag;
          tag.linkCtx = linkCtx;
        }

        tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
        tagHandlersFromProps(tag, tagCtx);
      }

      tag._er = onError && value;
      tag.ctx = tagCtx.ctx || tag.ctx || {};
      tagCtx.ctx = undefined;
      value = tag.cvtArgs()[0]; // If there is a convertBack but no convert, converter will be "true"

      tag._er = onError && value;
    } else {
      value = tagCtx.args[0];
    } // Call onRender (used by JsViews if present, to add binding annotations around rendered content)


    value = boundTag && view._.onRender ? view._.onRender(value, view, tag) : value;
    return value != undefined ? value : "";
  }

  function convertArgs(tagElse, bound) {
    // tag.cvtArgs() or tag.cvtArgs(tagElse?, true?)
    var l,
        key,
        boundArgs,
        args,
        bindFrom,
        tag,
        converter,
        tagCtx = this;

    if (tagCtx.tagName) {
      tag = tagCtx;
      tagCtx = (tag.tagCtxs || [tagCtx])[tagElse || 0];

      if (!tagCtx) {
        return;
      }
    } else {
      tag = tagCtx.tag;
    }

    bindFrom = tag.bindFrom;
    args = tagCtx.args;

    if ((converter = tag.convert) && "" + converter === converter) {
      converter = converter === "true" ? undefined : tagCtx.view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'");
    }

    if (converter && !bound) {
      // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
      args = args.slice(); // the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
    }

    if (bindFrom) {
      // Get the values of the boundArgs
      boundArgs = [];
      l = bindFrom.length;

      while (l--) {
        key = bindFrom[l];
        boundArgs.unshift(argOrProp(tagCtx, key));
      }

      if (bound) {
        args = boundArgs; // Call to bndArgs() - returns the boundArgs
      }
    }

    if (converter) {
      converter = converter.apply(tag, boundArgs || args);

      if (converter === undefined) {
        return args; // Returning undefined from a converter is equivalent to not having a converter.
      }

      bindFrom = bindFrom || [0];
      l = bindFrom.length;

      if (!$isArray(converter) || converter.length !== l) {
        converter = [converter];
        bindFrom = [0];
        l = 1;
      }

      if (bound) {
        // Call to bndArgs() - so apply converter to all boundArgs
        args = converter; // The array of values returned from the converter
      } else {
        // Call to cvtArgs()
        while (l--) {
          key = bindFrom[l];

          if (+key === key) {
            args[key] = converter[l];
          }
        }
      }
    }

    return args;
  }

  function argOrProp(context, key) {
    context = context[+key === key ? "args" : "props"];
    return context && context[key];
  }

  function convertBoundArgs(tagElse) {
    // tag.bndArgs()
    return this.cvtArgs(tagElse, 1);
  } //=============
  // views.tag
  //=============

  /* view.getRsc() */


  function getResource(resourceType, itemName) {
    var res,
        store,
        view = this;

    if ("" + itemName === itemName) {
      while (res === undefined && view) {
        store = view.tmpl && view.tmpl[resourceType];
        res = store && store[itemName];
        view = view.parent;
      }

      return res || $views[resourceType][itemName];
    }
  }

  function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
    function bindToOrBindFrom(type) {
      var bindArray = tag[type];

      if (bindArray !== undefined) {
        bindArray = $isArray(bindArray) ? bindArray : [bindArray];
        m = bindArray.length;

        while (m--) {
          key = bindArray[m];

          if (!isNaN(parseInt(key))) {
            bindArray[m] = parseInt(key); // Convert "0" to 0,  etc.
          }
        }
      }

      return bindArray || [0];
    }

    parentView = parentView || topView;
    var tag,
        tagDef,
        template,
        tags,
        attr,
        parentTag,
        l,
        m,
        n,
        itemRet,
        tagCtx,
        tagCtxCtx,
        ctxPrm,
        bindTo,
        bindFrom,
        initVal,
        content,
        callInit,
        mapDef,
        thisMap,
        args,
        bdArgs,
        props,
        tagDataMap,
        contentCtx,
        key,
        bindFromLength,
        bindToLength,
        linkedElement,
        defaultCtx,
        i = 0,
        ret = "",
        linkCtx = parentView._lc || false,
        // For data-link="{myTag...}"... See onDataLinkedTagChange
    ctx = parentView.ctx,
        parentTmpl = tmpl || parentView.tmpl,
        // If tagCtxs is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
    boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs - 1];

    if (tagName._is === "tag") {
      tag = tagName;
      tagName = tag.tagName;
      tagCtxs = tag.tagCtxs;
      template = tag.template;
    } else {
      tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
      template = tagDef.template;
    }

    if (onError === undefined && boundTag && (boundTag._lr = tagDef.lateRender && boundTag._lr !== false || boundTag._lr)) {
      onError = ""; // If lateRender, set temporary onError, to skip initial rendering (and render just "")
    }

    if (onError !== undefined) {
      ret += onError;
      tagCtxs = onError = [{
        props: {},
        args: [],
        params: {
          props: {}
        }
      }];
    } else if (boundTag) {
      tagCtxs = boundTag(parentView.data, parentView, $sub);
    }

    l = tagCtxs.length;

    for (; i < l; i++) {
      tagCtx = tagCtxs[i];
      content = tagCtx.tmpl;

      if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag.inline || tag._er || content && +content === content) {
        // Initialize tagCtx
        // For block tags, tagCtx.tmpl is an integer > 0
        if (content && parentTmpl.tmpls) {
          tagCtx.tmpl = tagCtx.content = parentTmpl.tmpls[content - 1]; // Set the tmpl property to the content of the block tag
        }

        tagCtx.index = i;
        tagCtx.ctxPrm = contextParameter;
        tagCtx.render = renderContent;
        tagCtx.cvtArgs = convertArgs;
        tagCtx.bndArgs = convertBoundArgs;
        tagCtx.view = parentView;
        tagCtx.ctx = extendCtx(extendCtx(tagCtx.ctx, tagDef && tagDef.ctx), ctx); // Clone and extend parentView.ctx
      }

      if (tmpl = tagCtx.props.tmpl) {
        // If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
        tagCtx.tmpl = parentView._getTmpl(tmpl);
        tagCtx.content = tagCtx.content || tagCtx.tmpl;
      }

      if (!tag) {
        // This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
        // If the tag has not already been instantiated, we will create a new instance.
        // ~tag will access the tag, even within the rendering of the template content of this tag.
        // From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
        tag = new tagDef._ctr();
        callInit = !!tag.init;
        tag.parent = parentTag = ctx && ctx.tag;
        tag.tagCtxs = tagCtxs;

        if (linkCtx) {
          tag.inline = false;
          linkCtx.tag = tag;
        }

        tag.linkCtx = linkCtx;

        if (tag._.bnd = boundTag || linkCtx.fn) {
          // Bound if {^{tag...}} or data-link="{tag...}"
          tag._.ths = tagCtx.params.props.this; // Tag has a this=expr binding, to get javascript reference to tag instance

          tag._.lt = tagCtxs.lt; // If a late path @some.path has not returned @some object, mark tag as late

          tag._.arrVws = {};
        } else if (tag.dataBoundOnly) {
          error(tagName + " must be data-bound:\n{^{" + tagName + "}}");
        } //TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
        // tag.tags = [];

      } else if (linkCtx && linkCtx.fn._lr) {
        callInit = !!tag.init;
      }

      tagDataMap = tag.dataMap;
      tagCtx.tag = tag;

      if (tagDataMap && tagCtxs) {
        tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
      }

      if (!tag.flow) {
        tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {}; // tags hash: tag.ctx.tags, merged with parentView.ctx.tags,

        tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};

        if (parentTag) {
          tags[parentTag.tagName] = parentTag; //TODO better perf for childTags: parentTag.tags.push(tag);
        }

        tags[tag.tagName] = tagCtxCtx.tag = tag;
        tagCtxCtx.tagCtx = tagCtx;
      }
    }

    if (!(tag._er = onError)) {
      tagHandlersFromProps(tag, tagCtxs[0]);
      tag.rendering = {
        rndr: tag.rendering
      }; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)

      for (i = 0; i < l; i++) {
        // Iterate tagCtx for each {{else}} block
        tagCtx = tag.tagCtx = tagCtxs[i];
        props = tagCtx.props;
        tag.ctx = tagCtx.ctx;

        if (!i) {
          if (callInit) {
            tag.init(tagCtx, linkCtx, tag.ctx);
            callInit = undefined;
          }

          if (!tagCtx.args.length && tagCtx.argDefault !== false && tag.argDefault !== false) {
            tagCtx.args = args = [tagCtx.view.data]; // Missing first arg defaults to the current data context

            tagCtx.params.args = ["#data"];
          }

          bindTo = bindToOrBindFrom("bindTo");

          if (tag.bindTo !== undefined) {
            tag.bindTo = bindTo;
          }

          if (tag.bindFrom !== undefined) {
            tag.bindFrom = bindToOrBindFrom("bindFrom");
          } else if (tag.bindTo) {
            tag.bindFrom = tag.bindTo = bindTo;
          }

          bindFrom = tag.bindFrom || bindTo;
          bindToLength = bindTo.length;
          bindFromLength = bindFrom.length;

          if (tag._.bnd && (linkedElement = tag.linkedElement)) {
            tag.linkedElement = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];

            if (bindToLength !== linkedElement.length) {
              error("linkedElement not same length as bindTo");
            }
          }

          if (linkedElement = tag.linkedCtxParam) {
            tag.linkedCtxParam = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];

            if (bindFromLength !== linkedElement.length) {
              error("linkedCtxParam not same length as bindFrom/bindTo");
            }
          }

          if (bindFrom) {
            tag._.fromIndex = {}; // Hash of bindFrom index which has same path value as bindTo index. fromIndex = tag._.fromIndex[toIndex]

            tag._.toIndex = {}; // Hash of bindFrom index which has same path value as bindTo index. fromIndex = tag._.fromIndex[toIndex]

            n = bindFromLength;

            while (n--) {
              key = bindFrom[n];
              m = bindToLength;

              while (m--) {
                if (key === bindTo[m]) {
                  tag._.fromIndex[m] = n;
                  tag._.toIndex[n] = m;
                }
              }
            }
          }

          if (linkCtx) {
            // Set attr on linkCtx to ensure outputting to the correct target attribute.
            // Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
            linkCtx.attr = tag.attr = linkCtx.attr || tag.attr || linkCtx._dfAt;
          }

          attr = tag.attr;
          tag._.noVws = attr && attr !== HTML;
        }

        args = tag.cvtArgs(i);

        if (tag.linkedCtxParam) {
          bdArgs = tag.cvtArgs(i, 1);
          m = bindFromLength;
          defaultCtx = tag.constructor.prototype.ctx;

          while (m--) {
            if (ctxPrm = tag.linkedCtxParam[m]) {
              key = bindFrom[m];
              initVal = bdArgs[m]; // Create tag contextual parameter

              tagCtx.ctx[ctxPrm] = $sub._cp(defaultCtx && initVal === undefined ? defaultCtx[ctxPrm] : initVal, initVal !== undefined && argOrProp(tagCtx.params, key), tagCtx.view, tag._.bnd && {
                tag: tag,
                cvt: tag.convert,
                ind: m,
                tagElse: i
              });
            }
          }
        }

        if ((mapDef = props.dataMap || tagDataMap) && (args.length || props.dataMap)) {
          thisMap = tagCtx.map;

          if (!thisMap || thisMap.src !== args[0] || isUpdate) {
            if (thisMap && thisMap.src) {
              thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
            }

            mapDef.map(args[0], tagCtx, thisMap, !tag._.bnd);
            thisMap = tagCtx.map;
          }

          args = [thisMap.tgt];
        }

        itemRet = undefined;

        if (tag.render) {
          itemRet = tag.render.apply(tag, args);

          if (parentView.linked && itemRet && !rWrappedInViewMarker.test(itemRet)) {
            // When a tag renders content from the render method, with data linking then we need to wrap with view markers, if absent,
            // to provide a contentView for the tag, which will correctly dispose bindings if deleted. The 'tmpl' for this view will
            // be a dumbed-down template which will always return the  itemRet string (no matter what the data is). The itemRet string
            // is not compiled as template markup, so can include "{{" or "}}" without triggering syntax errors
            tmpl = {
              // 'Dumbed-down' template which always renders 'static' itemRet string
              links: []
            };

            tmpl.render = tmpl.fn = function () {
              return itemRet;
            };

            itemRet = renderWithViews(tmpl, parentView.data, undefined, true, parentView, undefined, undefined, tag);
          }
        }

        if (!args.length) {
          args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
        }

        if (itemRet === undefined) {
          contentCtx = args[0]; // Default data context for wrapped block content is the first argument

          if (tag.contentCtx) {
            // Set tag.contentCtx to true, to inherit parent context, or to a function to provide alternate context.
            contentCtx = tag.contentCtx === true ? parentView : tag.contentCtx(contentCtx);
          }

          itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? undefined : "");
        }

        ret = ret ? ret + (itemRet || "") : itemRet !== undefined ? "" + itemRet : undefined; // If no return value from render, and no template/content tagCtx.render(...), return undefined
      }

      tag.rendering = tag.rendering.rndr; // Remove tag.rendering object (if this is outermost render call. (In case of nested calls)
    }

    tag.tagCtx = tagCtxs[0];
    tag.ctx = tag.tagCtx.ctx;

    if (tag._.noVws && tag.inline) {
      // inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
      ret = attr === "text" ? $converters.html(ret) : "";
    }

    return boundTag && parentView._.onRender // Call onRender (used by JsViews if present, to add binding annotations around rendered content)
    ? parentView._.onRender(ret, parentView, tag) : ret;
  } //=================
  // View constructor
  //=================


  function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
    // Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
    var views,
        parentView_,
        tag,
        self_,
        self = this,
        isArray = type === "array"; // If the data is an array, this is an 'array view' with a views array for each child 'item view'
    // If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views

    self.content = contentTmpl;
    self.views = isArray ? [] : {};
    self.data = data;
    self.tmpl = template;
    self_ = self._ = {
      key: 0,
      // ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
      useKey: isArray ? 0 : 1,
      id: "" + viewId++,
      onRender: onRender,
      bnds: {}
    };
    self.linked = !!onRender;
    self.type = type || "top";

    if (!parentView || parentView.type === "top") {
      (self.ctx = context || {}).root = self.data;
    }

    if (self.parent = parentView) {
      self.root = parentView.root || self; // view whose parent is top view

      views = parentView.views;
      parentView_ = parentView._;
      self.isTop = parentView_.scp; // Is top content view of a link("#container", ...) call

      self.scope = (!context.tag || context.tag === parentView.ctx.tag) && !self.isTop && parentView.scope || self; // Scope for contextParams - closest non flow tag ancestor or root view

      if (parentView_.useKey) {
        // Parent is not an 'array view'. Add this view to its views object
        // self._key = is the key in the parent view hash
        views[self_.key = "_" + parentView_.useKey++] = self;
        self.index = indexStr;
        self.getIndex = getNestedIndex;
      } else if (views.length === (self_.key = self.index = key)) {
        // Parent is an 'array view'. Add this view to its views array
        views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
      } else {
        views.splice(key, 0, self); // Inserting in views array
      } // If no context was passed in, use parent context
      // If context was passed in, it should have been merged already with parent context


      self.ctx = context || parentView.ctx;
    } else if (type) {
      self.root = self; // view whose parent is top view
    }
  }

  View.prototype = {
    get: getView,
    getIndex: getIndex,
    ctxPrm: contextParameter,
    getRsc: getResource,
    _getTmpl: getTemplate,
    _getOb: getPathObject,
    _is: "view"
  }; //====================================================
  // Registration
  //====================================================

  function compileChildResources(parentTmpl) {
    var storeName, storeNames, resources;

    for (storeName in jsvStores) {
      storeNames = storeName + "s";

      if (parentTmpl[storeNames]) {
        resources = parentTmpl[storeNames]; // Resources not yet compiled

        parentTmpl[storeNames] = {}; // Remove uncompiled resources

        $views[storeNames](resources, parentTmpl); // Add back in the compiled resources
      }
    }
  } //===============
  // compileTag
  //===============


  function compileTag(name, tagDef, parentTmpl) {
    var tmpl,
        baseTag,
        prop,
        compiledDef = new $sub._tg();

    function Tag() {
      var tag = this;
      tag._ = {
        unlinked: true
      };
      tag.inline = true;
      tag.tagName = name;
    }

    if ($isFunction(tagDef)) {
      // Simple tag declared as function. No presenter instantation.
      tagDef = {
        depends: tagDef.depends,
        render: tagDef
      };
    } else if ("" + tagDef === tagDef) {
      tagDef = {
        template: tagDef
      };
    }

    if (baseTag = tagDef.baseTag) {
      tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true

      baseTag = "" + baseTag === baseTag ? parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag] : baseTag;

      if (!baseTag) {
        error('baseTag: "' + tagDef.baseTag + '" not found');
      }

      compiledDef = $extend(compiledDef, baseTag);

      for (prop in tagDef) {
        compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
      }
    } else {
      compiledDef = $extend(compiledDef, tagDef);
    } // Tag declared as object, used as the prototype for tag instantiation (control/presenter)


    if ((tmpl = compiledDef.template) !== undefined) {
      compiledDef.template = "" + tmpl === tmpl ? $templates[tmpl] || $templates(tmpl) : tmpl;
    }

    (Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;

    if (parentTmpl) {
      compiledDef._parentTmpl = parentTmpl;
    }

    return compiledDef;
  }

  function baseApply(args) {
    // In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
    // using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
    return this.base.apply(this, args);
  } //===============
  // compileTmpl
  //===============


  function compileTmpl(name, tmpl, parentTmpl, options) {
    // tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object
    //==== nested functions ====
    function lookupTemplate(value) {
      // If value is of type string - treat as selector, or name of compiled template
      // Return the template object, if already compiled, or the markup string
      var currentName, tmpl;

      if ("" + value === value || value.nodeType > 0 && (elem = value)) {
        if (!elem) {
          if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
            // tmpl="./some/file.html"
            // If the template is not named, use "./some/file.html" as name.
            if (tmpl = $templates[name = name || value]) {
              value = tmpl;
            } else {
              // BROWSER-SPECIFIC CODE (not on Node.js):
              // Look for server-generated script block with id "./some/file.html"
              elem = document.getElementById(value);
            }
          } else if ($.fn && !$sub.rTmpl.test(value)) {
            try {
              elem = $(value, document)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
            } catch (e) {}
          } // END BROWSER-SPECIFIC CODE

        } //BROWSER-SPECIFIC CODE


        if (elem) {
          if (elem.tagName !== "SCRIPT") {
            error(value + ": Use script block, not " + elem.tagName);
          }

          if (options) {
            // We will compile a new template using the markup in the script element
            value = elem.innerHTML;
          } else {
            // We will cache a single copy of the compiled template, and associate it with the name
            // (renaming from a previous name if there was one).
            currentName = elem.getAttribute(tmplAttr);

            if (currentName) {
              if (currentName !== jsvTmpl) {
                value = $templates[currentName];
                delete $templates[currentName];
              } else if ($.fn) {
                value = $.data(elem)[jsvTmpl]; // Get cached compiled template
              }
            }

            if (!currentName || !value) {
              // Not yet compiled, or cached version lost
              name = name || ($.fn ? jsvTmpl : value);
              value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
            }

            value.tmplName = name = name || currentName;

            if (name !== jsvTmpl) {
              $templates[name] = value;
            }

            elem.setAttribute(tmplAttr, name);

            if ($.fn) {
              $.data(elem, jsvTmpl, value);
            }
          }
        } // END BROWSER-SPECIFIC CODE


        elem = undefined;
      } else if (!value.fn) {
        value = undefined; // If value is not a string. HTML element, or compiled template, return undefined
      }

      return value;
    }

    var elem,
        compiledTmpl,
        tmplOrMarkup = tmpl = tmpl || "";
    $sub._html = $converters.html; //==== Compile the template ====

    if (options === 0) {
      options = undefined;
      tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
    } // If options, then this was already compiled from a (script) element template declaration.
    // If not, then if tmpl is a template object, use it for options


    options = options || (tmpl.markup ? tmpl.bnds ? $extend({}, tmpl) : tmpl : {});
    options.tmplName = options.tmplName || name || "unnamed";

    if (parentTmpl) {
      options._parentTmpl = parentTmpl;
    } // If tmpl is not a markup string or a selector string, then it must be a template object
    // In that case, get it from the markup property of the object


    if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup)) && tmplOrMarkup.fn) {
      // If the string references a compiled template object, need to recompile to merge any modified options
      tmplOrMarkup = tmplOrMarkup.markup;
    }

    if (tmplOrMarkup !== undefined) {
      if (tmplOrMarkup.render || tmpl.render) {
        // tmpl is already compiled, so use it
        if (tmplOrMarkup.tmpls) {
          compiledTmpl = tmplOrMarkup;
        }
      } else {
        // tmplOrMarkup is a markup string, not a compiled template
        // Create template object
        tmpl = tmplObject(tmplOrMarkup, options); // Compile to AST and then to compiled function

        tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
      }

      if (!compiledTmpl) {
        compiledTmpl = $extend(function () {
          return compiledTmpl.render.apply(compiledTmpl, arguments);
        }, tmpl);
        compileChildResources(compiledTmpl);
      }

      return compiledTmpl;
    }
  } //==== /end of function compileTmpl ====
  //=================
  // compileViewModel
  //=================


  function getDefaultVal(defaultVal, data) {
    return $isFunction(defaultVal) ? defaultVal.call(data) : defaultVal;
  }

  function addParentRef(ob, ref, parent) {
    Object.defineProperty(ob, ref, {
      value: parent,
      configurable: true
    });
  }

  function compileViewModel(name, type) {
    var i,
        constructor,
        parent,
        viewModels = this,
        getters = type.getters,
        extend = type.extend,
        id = type.id,
        proto = $.extend({
      _is: name || "unnamed",
      unmap: unmap,
      merge: merge
    }, extend),
        args = "",
        cnstr = "",
        getterCount = getters ? getters.length : 0,
        $observable = $.observable,
        getterNames = {};

    function JsvVm(args) {
      constructor.apply(this, args);
    }

    function vm() {
      return new JsvVm(arguments);
    }

    function iterate(data, action) {
      var getterType,
          defaultVal,
          prop,
          ob,
          parentRef,
          j = 0;

      for (; j < getterCount; j++) {
        prop = getters[j];
        getterType = undefined;

        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
          parentRef = getterType.parentRef;
        }

        if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
          ob = getDefaultVal(defaultVal, data);
        }

        action(ob, getterType && viewModels[getterType.type], prop, parentRef);
      }
    }

    function map(data) {
      data = data + "" === data ? JSON.parse(data) // Accept JSON string
      : data; // or object/array

      var l,
          prop,
          childOb,
          parentRef,
          j = 0,
          ob = data,
          arr = [];

      if ($isArray(data)) {
        data = data || [];
        l = data.length;

        for (; j < l; j++) {
          arr.push(this.map(data[j]));
        }

        arr._is = name;
        arr.unmap = unmap;
        arr.merge = merge;
        return arr;
      }

      if (data) {
        iterate(data, function (ob, viewModel) {
          if (viewModel) {
            // Iterate to build getters arg array (value, or mapped value)
            ob = viewModel.map(ob);
          }

          arr.push(ob);
        });
        ob = this.apply(this, arr); // Instantiate this View Model, passing getters args array to constructor

        j = getterCount;

        while (j--) {
          childOb = arr[j];
          parentRef = getters[j].parentRef;

          if (parentRef && childOb && childOb.unmap) {
            if ($isArray(childOb)) {
              l = childOb.length;

              while (l--) {
                addParentRef(childOb[l], parentRef, ob);
              }
            } else {
              addParentRef(childOb, parentRef, ob);
            }
          }
        }

        for (prop in data) {
          // Copy over any other properties. that are not get/set properties
          if (prop !== $expando && !getterNames[prop]) {
            ob[prop] = data[prop];
          }
        }
      }

      return ob;
    }

    function merge(data, parent, parentRef) {
      data = data + "" === data ? JSON.parse(data) // Accept JSON string
      : data; // or object/array

      var j,
          l,
          m,
          prop,
          mod,
          found,
          assigned,
          ob,
          newModArr,
          childOb,
          k = 0,
          model = this;

      if ($isArray(model)) {
        assigned = {};
        newModArr = [];
        l = data.length;
        m = model.length;

        for (; k < l; k++) {
          ob = data[k];
          found = false;

          for (j = 0; j < m && !found; j++) {
            if (assigned[j]) {
              continue;
            }

            mod = model[j];

            if (id) {
              assigned[j] = found = id + "" === id ? ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id] : id(mod, ob);
            }
          }

          if (found) {
            mod.merge(ob);
            newModArr.push(mod);
          } else {
            newModArr.push(childOb = vm.map(ob));

            if (parentRef) {
              addParentRef(childOb, parentRef, parent);
            }
          }
        }

        if ($observable) {
          $observable(model).refresh(newModArr, true);
        } else {
          model.splice.apply(model, [0, model.length].concat(newModArr));
        }

        return;
      }

      iterate(data, function (ob, viewModel, getter, parentRef) {
        if (viewModel) {
          model[getter]().merge(ob, model, parentRef); // Update typed property
        } else if (model[getter]() !== ob) {
          model[getter](ob); // Update non-typed property
        }
      });

      for (prop in data) {
        if (prop !== $expando && !getterNames[prop]) {
          model[prop] = data[prop];
        }
      }
    }

    function unmap() {
      var ob,
          prop,
          getterType,
          arr,
          value,
          k = 0,
          model = this;

      function unmapArray(modelArr) {
        var arr = [],
            i = 0,
            l = modelArr.length;

        for (; i < l; i++) {
          arr.push(modelArr[i].unmap());
        }

        return arr;
      }

      if ($isArray(model)) {
        return unmapArray(model);
      }

      ob = {};

      for (; k < getterCount; k++) {
        prop = getters[k];
        getterType = undefined;

        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
        }

        value = model[prop]();
        ob[prop] = getterType && value && viewModels[getterType.type] ? $isArray(value) ? unmapArray(value) : value.unmap() : value;
      }

      for (prop in model) {
        if (model.hasOwnProperty(prop) && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && prop !== $expando && !$isFunction(model[prop])) {
          ob[prop] = model[prop];
        }
      }

      return ob;
    }

    JsvVm.prototype = proto;

    for (i = 0; i < getterCount; i++) {
      (function (getter) {
        getter = getter.getter || getter;
        getterNames[getter] = i + 1;
        var privField = "_" + getter;
        args += (args ? "," : "") + getter;
        cnstr += "this." + privField + " = " + getter + ";\n";

        proto[getter] = proto[getter] || function (val) {
          if (!arguments.length) {
            return this[privField]; // If there is no argument, use as a getter
          }

          if ($observable) {
            $observable(this).setProperty(getter, val);
          } else {
            this[privField] = val;
          }
        };

        if ($observable) {
          proto[getter].set = proto[getter].set || function (val) {
            this[privField] = val; // Setter called by observable property change
          };
        }
      })(getters[i]);
    } // Constructor for new viewModel instance.


    cnstr = new Function(args, cnstr);

    constructor = function constructor() {
      cnstr.apply(this, arguments); // Pass additional parentRef str and parent obj to have a parentRef pointer on instance

      if (parent = arguments[getterCount + 1]) {
        addParentRef(this, arguments[getterCount], parent);
      }
    };

    constructor.prototype = proto;
    proto.constructor = constructor;
    vm.map = map;
    vm.getters = getters;
    vm.extend = extend;
    vm.id = id;
    return vm;
  }

  function tmplObject(markup, options) {
    // Template object constructor
    var htmlTag,
        wrapMap = $subSettingsAdvanced._wm || {},
        // Only used in JsViews. Otherwise empty: {}
    tmpl = {
      tmpls: [],
      links: {},
      // Compiled functions for link expressions
      bnds: [],
      _is: "template",
      render: renderContent
    };

    if (options) {
      tmpl = $extend(tmpl, options);
    }

    tmpl.markup = markup;

    if (!tmpl.htmlTag) {
      // Set tmpl.tag to the top-level HTML tag used in the template, if any...
      htmlTag = rFirstElem.exec(markup);
      tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
    }

    htmlTag = wrapMap[tmpl.htmlTag];

    if (htmlTag && htmlTag !== wrapMap.div) {
      // When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
      // Currently not trimmed for <li> tag. (Not worth adding perf cost)
      tmpl.markup = $.trim(tmpl.markup);
    }

    return tmpl;
  } //==============
  // registerStore
  //==============

  /**
  * Internal. Register a store type (used for template, tags, helpers, converters)
  */


  function registerStore(storeName, storeSettings) {
    /**
    * Generic store() function to register item, named item, or hash of items
    * Also used as hash to store the registered items
    * Used as implementation of $.templates(), $.views.templates(), $.views.tags(), $.views.helpers() and $.views.converters()
    *
    * @param {string|hash} name         name - or selector, in case of $.templates(). Or hash of items
    * @param {any}         [item]       (e.g. markup for named template)
    * @param {template}    [parentTmpl] For item being registered as private resource of template
    * @returns {any|$.views} item, e.g. compiled template - or $.views in case of registering hash of items
    */
    function theStore(name, item, parentTmpl) {
      // The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags
      // For store of name 'thing', Call as:
      //    $.views.things(items[, parentTmpl]),
      // or $.views.things(name[, item, parentTmpl])
      var compile,
          itemName,
          thisStore,
          cnt,
          onStore = $sub.onStore[storeName];

      if (name && _typeof(name) === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
        // Call to $.views.things(items[, parentTmpl]),
        // Adding items to the store
        // If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
        for (itemName in name) {
          theStore(itemName, name[itemName], item);
        }

        return item || $views;
      } // Adding a single unnamed item to the store


      if (name && "" + name !== name) {
        // name must be a string
        parentTmpl = item;
        item = name;
        name = undefined;
      }

      thisStore = parentTmpl ? storeName === "viewModel" ? parentTmpl : parentTmpl[storeNames] = parentTmpl[storeNames] || {} : theStore;
      compile = storeSettings.compile;

      if (item === undefined) {
        item = compile ? name : thisStore[name];
        name = undefined;
      }

      if (item === null) {
        // If item is null, delete this entry
        if (name) {
          delete thisStore[name];
        }
      } else {
        if (compile) {
          item = compile.call(thisStore, name, item, parentTmpl, 0) || {};
          item._is = storeName; // Only do this for compiled objects (tags, templates...)
        }

        if (name) {
          thisStore[name] = item;
        }
      }

      if (onStore) {
        // e.g. JsViews integration
        onStore(name, item, parentTmpl, compile);
      }

      return item;
    }

    var storeNames = storeName + "s";
    $views[storeNames] = theStore;
  }
  /**
  * Add settings such as:
  * $.views.settings.allowCode(true)
  * @param {boolean}  value
  * @returns {Settings}
  *
  * allowCode = $.views.settings.allowCode()
  * @returns {boolean}
  */


  function addSetting(st) {
    $viewsSettings[st] = $viewsSettings[st] || function (value) {
      return arguments.length ? ($subSettings[st] = value, $viewsSettings) : $subSettings[st];
    };
  } //========================
  // dataMap for render only
  //========================


  function dataMap(mapDef) {
    function Map(source, options) {
      this.tgt = mapDef.getTgt(source, options);
      options.map = this;
    }

    if ($isFunction(mapDef)) {
      // Simple map declared as function
      mapDef = {
        getTgt: mapDef
      };
    }

    if (mapDef.baseMap) {
      mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
    }

    mapDef.map = function (source, options) {
      return new Map(source, options);
    };

    return mapDef;
  } //==============
  // renderContent
  //==============

  /** Render the template as a string, using the specified data and helpers/context
  * $("#tmpl").render(), tmpl.render(), tagCtx.render(), $.render.namedTmpl()
  *
  * @param {any}        data
  * @param {hash}       [context]           helpers or context
  * @param {boolean}    [noIteration]
  * @param {View}       [parentView]        internal
  * @param {string}     [key]               internal
  * @param {function}   [onRender]          internal
  * @returns {string}   rendered template   internal
  */


  function renderContent(data, context, noIteration, parentView, key, onRender) {
    var i,
        l,
        tag,
        tmpl,
        tagCtx,
        isTopRenderCall,
        prevData,
        prevIndex,
        view = parentView,
        result = "";

    if (context === true) {
      noIteration = context; // passing boolean as second param - noIteration

      context = undefined;
    } else if (_typeof(context) !== OBJECT) {
      context = undefined; // context must be a boolean (noIteration) or a plain object
    }

    if (tag = this.tag) {
      // This is a call from renderTag or tagCtx.render(...)
      tagCtx = this;
      view = view || tagCtx.view;
      tmpl = view._getTmpl(tag.template || tagCtx.tmpl);

      if (!arguments.length) {
        data = tag.contentCtx && $isFunction(tag.contentCtx) ? data = tag.contentCtx(data) : view; // Default data context for wrapped block content is the first argument
      }
    } else {
      // This is a template.render(...) call
      tmpl = this;
    }

    if (tmpl) {
      if (!parentView && data && data._is === "view") {
        view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
      }

      if (view && data === view) {
        // Inherit the data from the parent view.
        data = view.data;
      }

      isTopRenderCall = !view;
      isRenderCall = isRenderCall || isTopRenderCall;

      if (!view) {
        (context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
      }

      if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
        result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
      } else {
        if (view) {
          // In a block
          prevData = view.data;
          prevIndex = view.index;
          view.index = indexStr;
        } else {
          view = topView;
          prevData = view.data;
          view.data = data;
          view.ctx = context;
        }

        if ($isArray(data) && !noIteration) {
          // Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
          // along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
          for (i = 0, l = data.length; i < l; i++) {
            view.index = i;
            view.data = data[i];
            result += tmpl.fn(data[i], view, $sub);
          }
        } else {
          view.data = data;
          result += tmpl.fn(data, view, $sub);
        }

        view.data = prevData;
        view.index = prevIndex;
      }

      if (isTopRenderCall) {
        isRenderCall = undefined;
      }
    }

    return result;
  }

  function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
    // Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
    // If the data is the parent view, treat as noIteration, re-render with the same data context.
    // tmpl can be a string (e.g. rendered by a tag.render() method), or a compiled template.
    var i,
        l,
        newView,
        childView,
        itemResult,
        swapContent,
        contentTmpl,
        outerOnRender,
        tmplName,
        itemVar,
        newCtx,
        tagCtx,
        noLinking,
        result = "";

    if (tag) {
      // This is a call from renderTag or tagCtx.render(...)
      tmplName = tag.tagName;
      tagCtx = tag.tagCtx;
      context = context ? extendCtx(context, tag.ctx) : tag.ctx;

      if (tmpl === view.content) {
        // {{xxx tmpl=#content}}
        contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
        ? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
        : undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
      } else if (tmpl !== tagCtx.content) {
        if (tmpl === tag.template) {
          // Rendering {{tag}} tag.template, replacing block content.
          contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)

          context._wrp = tagCtx.content; // Pass wrapped block content to nested views
        } else {
          // Rendering tagCtx.props.tmpl wrapper
          contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
        }
      } else {
        contentTmpl = view.content; // Nested views inherit same wrapped #content property
      }

      if (tagCtx.props.link === false) {
        // link=false setting on block tag
        // We will override inherited value of link by the explicit setting link=false taken from props
        // The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
        context = context || {};
        context.link = false;
      }
    }

    if (view) {
      onRender = onRender || view._.onRender;
      noLinking = context && context.link === false;

      if (noLinking && view._.nl) {
        onRender = undefined;
      }

      context = extendCtx(context, view.ctx);
      tagCtx = !tag && view.tag ? view.tag.tagCtxs[view.tagElse] : tagCtx;
    }

    if (itemVar = tagCtx && tagCtx.props.itemVar) {
      if (itemVar[0] !== "~") {
        syntaxError("Use itemVar='~myItem'");
      }

      itemVar = itemVar.slice(1);
    }

    if (key === true) {
      swapContent = true;
      key = 0;
    } // If link===false, do not call onRender, so no data-linking marker nodes


    if (onRender && tag && tag._.noVws) {
      onRender = undefined;
    }

    outerOnRender = onRender;

    if (onRender === true) {
      // Used by view.refresh(). Don't create a new wrapper view.
      outerOnRender = undefined;
      onRender = view._.onRender;
    } // Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)


    context = tmpl.helpers ? extendCtx(tmpl.helpers, context) : context;
    newCtx = context;

    if ($isArray(data) && !noIteration) {
      // Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
      // along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
      newView = swapContent ? view : key !== undefined && view || new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
      newView._.nl = noLinking;

      if (view && view._.useKey) {
        // Parent is not an 'array view'
        newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
        // view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}

        newView.tag = tag;
      }

      for (i = 0, l = data.length; i < l; i++) {
        // Create a view for each data item.
        childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);

        if (itemVar) {
          (childView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data[i], "#data", childView);
        }

        itemResult = tmpl.fn(data[i], childView, $sub);
        result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
      }
    } else {
      // Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "mytag" except for
      // "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
      newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);

      if (itemVar) {
        (newView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data, "#data", newView);
      }

      newView.tag = tag;
      newView._.nl = noLinking;
      result += tmpl.fn(data, newView, $sub);
    }

    if (tag) {
      newView.tagElse = tagCtx.index;
      tagCtx.contentView = newView;
    }

    return outerOnRender ? outerOnRender(result, newView) : result;
  } //===========================
  // Build and compile template
  //===========================
  // Generate a reusable function that will serve to render a template against data
  // (Compile AST then build template function)


  function onRenderError(e, view, fallback) {
    var message = fallback !== undefined ? $isFunction(fallback) ? fallback.call(view.data, e, view) : fallback || "" : "{Error: " + (e.message || e) + "}";

    if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
      message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
    }

    return view && !view._lc ? $converters.html(message) : message; // For data-link=\"{... onError=...}"... See onDataLinkedTagChange
  }

  function error(message) {
    throw new $sub.Err(message);
  }

  function syntaxError(message) {
    error("Syntax error\n" + message);
  }

  function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
    // Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
    // Used for compiling templates, and also by JsViews to build functions for data link expressions
    //==== nested functions ====
    function pushprecedingContent(shift) {
      shift -= loc;

      if (shift) {
        content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
      }
    }

    function blockTagCheck(tagName, block) {
      if (tagName) {
        tagName += '}}'; //			'{{include}} block has {{/for}} with no open {{for}}'

        syntaxError((block ? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName : 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
      }
    }

    function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
      /*
      
           bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g
      
      (?:
        {(\^)?{            bind
        (?:
          (\w+             tagName
            (?=[\/\s}])
          )
          |
          (\w+)?(:)        converter colon
          |
          (>)              html
          |
          (\*)             codeTag
        )
        \s*
        (                  params
          (?:[^}]|}(?!}))*?
        )
        (\/)?              slash
        |
        {(\^)?{            bind2
        (?:
          (?:\/(\w+))\s*   closeBlock
          |
          !--[\s\S]*?--    comment
        )
      )
      }}/g
      
      */
      if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
        syntaxError(all);
      } // Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]


      if (html) {
        colon = ":";
        converter = HTML;
      }

      slash = slash || isLinkExpr && !hasElse;
      var late,
          openTagName,
          isLateOb,
          pathBindings = (bind || isLinkExpr) && [[]],
          // pathBindings is an array of arrays for arg bindings and a hash of arrays for prop bindings
      props = "",
          args = "",
          ctxProps = "",
          paramsArgs = "",
          paramsProps = "",
          paramsCtxProps = "",
          onError = "",
          useTrigger = "",
          // Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
      block = !slash && !colon; //==== nested helper function ====

      tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}

      pushprecedingContent(index);
      loc = index + all.length; // location marker - parsed up to here

      if (codeTag) {
        if (allowCode) {
          content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
        }
      } else if (tagName) {
        if (tagName === "else") {
          if (rTestElseIf.test(params)) {
            syntaxError('For "{{else if expr}}" use "{{else expr}}"');
          }

          pathBindings = current[9] && [[]];
          current[10] = markup.substring(current[10], index); // contentMarkup for block tag

          openTagName = current[11] || current[0] || syntaxError("Mismatched: " + all); // current[0] is tagName, but for {{else}} nodes, current[11] is tagName of preceding open tag

          current = stack.pop();
          content = current[2];
          block = true;
        }

        if (params) {
          // remove newlines from the params string, to avoid compiled code errors for unterminated strings
          parseParams(params.replace(rNewLine, " "), pathBindings, tmpl, isLinkExpr).replace(rBuildHash, function (all, onerror, isCtxPrm, key, keyToken, keyValue, arg, param) {
            if (key === "this:") {
              keyValue = "undefined"; // this=some.path is always a to parameter (one-way), so don't need to compile/evaluate some.path initialization
            }

            if (param) {
              isLateOb = isLateOb || param[0] === "@";
            }

            key = "'" + keyToken + "':";

            if (arg) {
              args += isCtxPrm + keyValue + ",";
              paramsArgs += "'" + param + "',";
            } else if (isCtxPrm) {
              // Contextual parameter, ~foo=expr
              ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),'; // Compiled code for evaluating tagCtx on a tag will have: ctx:{'foo':j._cp(compiledExpr, "expr", view)}

              paramsCtxProps += key + "'" + param + "',";
            } else if (onerror) {
              onError += keyValue;
            } else {
              if (keyToken === "trigger") {
                useTrigger += keyValue;
              }

              if (keyToken === "lateRender") {
                late = param !== "false"; // Render after first pass
              }

              props += key + keyValue + ",";
              paramsProps += key + "'" + param + "',";
              hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
            }

            return "";
          }).slice(0, -1);
        }

        if (pathBindings && pathBindings[0]) {
          pathBindings.pop(); // Remove the binding that was prepared for next arg. (There is always an extra one ready).
        }

        newNode = [tagName, converter || !!convertBack || hasHandlers || "", block && [], parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
        parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps), onError, useTrigger, late, isLateOb, pathBindings || 0];
        content.push(newNode);

        if (block) {
          stack.push(current);
          current = newNode;
          current[10] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag

          current[11] = openTagName; // Used for checking syntax (matching close tag)
        }
      } else if (closeBlock) {
        blockTagCheck(closeBlock !== current[0] && closeBlock !== current[11] && closeBlock, current[0]); // Check matching close tag name

        current[10] = markup.substring(current[10], index); // contentMarkup for block tag

        current = stack.pop();
      }

      blockTagCheck(!current && closeBlock);
      content = current[2];
    } //==== /end of nested functions ====


    var i,
        result,
        newNode,
        hasHandlers,
        bindings,
        allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode || $viewsSettings.allowCode === true,
        // include direct setting of settings.allowCode true for backward compat only
    astTop = [],
        loc = 0,
        stack = [],
        content = astTop,
        current = [,, astTop];

    if (allowCode && tmpl._is) {
      tmpl.allowCode = allowCode;
    } //TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
    //and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
    //		if (result) {
    //			tmpl.fn = result;
    //		} else {
    //		result = markup;


    if (isLinkExpr) {
      if (convertBack !== undefined) {
        markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
      }

      markup = delimOpenChar0 + markup + delimCloseChar1;
    }

    blockTagCheck(stack[0] && stack[0][2].pop()[0]); // Build the AST (abstract syntax tree) under astTop

    markup.replace(rTag, parseTag);
    pushprecedingContent(markup.length);

    if (loc = astTop[astTop.length - 1]) {
      blockTagCheck("" + loc !== loc && +loc[10] === loc[10] && loc[0]);
    } //			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
    //		}


    if (isLinkExpr) {
      result = buildCode(astTop, markup, isLinkExpr);
      bindings = [];
      i = astTop.length;

      while (i--) {
        bindings.unshift(astTop[i][9]); // With data-link expressions, pathBindings array for tagCtx[i] is astTop[i][9]
      }

      setPaths(result, bindings);
    } else {
      result = buildCode(astTop, tmpl);
    }

    return result;
  }

  function setPaths(fn, pathsArr) {
    var key,
        paths,
        i = 0,
        l = pathsArr.length;
    fn.deps = [];
    fn.paths = []; // The array of path binding (array/dictionary)s for each tag/else block's args and props

    for (; i < l; i++) {
      fn.paths.push(paths = pathsArr[i]);

      for (key in paths) {
        if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length && !paths[key].skp) {
          fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
        }
      }
    }
  }

  function parsedParam(args, props, ctx) {
    return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
  }

  function paramStructure(parts, type) {
    return '\n\t' + (type ? type + ':{' : '') + 'args:[' + parts[0] + '],\n\tprops:{' + parts[1] + '}' + (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
  }

  function parseParams(params, pathBindings, tmpl, isLinkExpr) {
    function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, late, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
      // /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      //lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2   apos quot        rtPrn  rtPrnDot                  prn2     space
      // (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
      function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
        // /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        //    not                               object     helper    view  viewProperty pathTokens      leafToken
        var subPath = object === ".";

        if (object) {
          path = path.slice(not.length);

          if (/^\.?constructor$/.test(leafToken || path)) {
            syntaxError(allPath);
          }

          if (!subPath) {
            allPath = (late // late path @a.b.c: not throw on 'property of undefined' if a undefined, and will use _getOb() after linking to resolve late.
            ? (isLinkExpr ? '' : '(ltOb.lt=ltOb.lt||') + '(ob=' : "") + (helper ? 'view.ctxPrm("' + helper + '")' : view ? "view" : "data") + (late ? ')===undefined' + (isLinkExpr ? '' : ')') + '?"":view._getOb(ob,"' : "") + (leafToken ? (viewProperty ? "." + viewProperty : helper ? "" : view ? "" : "." + object) + (pathTokens || "") : (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));
            allPath = allPath + (leafToken ? "." + leafToken : "");
            allPath = not + (allPath.slice(0, 9) === "view.data" ? allPath.slice(5) // convert #view.data... to data...
            : allPath) + (late ? (isLinkExpr ? '"' : '",ltOb') + (prn ? ',1)' : ')') : "");
          }

          if (bindings) {
            binds = named === "_linkTo" ? bindto = pathBindings._jsvto = pathBindings._jsvto || [] : bndCtx.bd;

            if (theOb = subPath && binds[binds.length - 1]) {
              if (theOb._cpfn) {
                // Computed property exprOb
                while (theOb.sb) {
                  theOb = theOb.sb;
                }

                if (theOb.bnd) {
                  path = "^" + path.slice(1);
                }

                theOb.sb = path;
                theOb.bnd = theOb.bnd || path[0] === "^";
              }
            } else {
              binds.push(path);
            }

            pathStart[parenDepth] = index + (subPath ? 1 : 0);
          }
        }

        return allPath;
      } //bound = bindings && bound;


      if (bound && !eq) {
        path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
      }

      operator = operator || "";
      lftPrn = lftPrn || lftPrn0 || lftPrn2;
      path = path || path2;

      if (late && (late = !/\)|]/.test(full[index - 1]))) {
        path = path.slice(1).split(".").join("^"); // Late path @z.b.c. Use "^" rather than "." to ensure that deep binding will be used
      } // Could do this - but not worth perf cost?? :-
      // if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.


      prn = prn || prn2 || "";
      var expr,
          exprFn,
          binds,
          theOb,
          newOb,
          rtSq = ")";

      if (prn === "[") {
        prn = "[j._sq(";
        rtSq = ")]";
      }

      if (err && !aposed && !quoted) {
        syntaxError(params);
      } else {
        if (bindings && rtPrnDot && !aposed && !quoted) {
          // This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
          // We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
          if (parenDepth) {
            expr = pathStart[parenDepth - 1];

            if (full.length - 1 > index - (expr || 0)) {
              // We need to compile a subexpression
              expr = full.slice(expr, index + all.length);

              if (exprFn !== true) {
                // If not reentrant call during compilation
                binds = bindto || bndStack[parenDepth - 1].bd; // Insert exprOb object, to be used during binding to return the computed object

                theOb = binds[binds.length - 1];

                if (theOb && theOb.prm) {
                  while (theOb.sb && theOb.sb.prm) {
                    theOb = theOb.sb;
                  }

                  newOb = theOb.sb = {
                    path: theOb.sb,
                    bnd: theOb.bnd
                  };
                } else {
                  binds.push(newOb = {
                    path: binds.pop()
                  }); // Insert exprOb object, to be used during binding to return the computed object
                } // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")

              }

              rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
              + " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
              + delimCloseChar0;
              exprFn = tmplLinks[rtPrnDot];

              if (!exprFn) {
                tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled

                tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
              }

              if (exprFn !== true && newOb) {
                // If not reentrant call during compilation
                newOb._cpfn = exprFn;
                newOb.prm = bndCtx.bd;
                newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
              }
            }
          }
        }

        return aposed // within single-quoted string
        ? (aposed = !apos, aposed ? all : lftPrn2 + '"') : quoted // within double-quoted string
        ? (quoted = !quot, quoted ? all : lftPrn2 + '"') : (lftPrn ? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {
          bd: []
        }, lftPrn) : "") + (space ? parenDepth ? "" // New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
        : (paramIndex = full.slice(paramIndex, index), named ? (named = boundName = bindto = false, "\b") : "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b") : eq // named param. Remove bindings for arg and create instead bindings array for prop
        ? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = "_" + path, boundName = bound, paramIndex = index + all.length, bindings && (bindings = bndCtx.bd = pathBindings[named] = [], bindings.skp = !bound), path + ':') : path // path
        ? path.split("^").join(".").replace($sub.rPath, parsePath) + (prn // some.fncall(
        ? (bndCtx = bndStack[++parenDepth] = {
          bd: []
        }, fnCall[parenDepth] = rtSq, prn) : operator) : operator // operator
        ? operator : rtPrn // function
        ? (rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn) + (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
        ? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn) : "") : comma ? (fnCall[parenDepth] || syntaxError(params), "," // We don't allow top-level literal arrays or objects
        ) : lftPrn0 ? "" : (aposed = apos, quoted = quot, '"'));
      }
    }

    var named,
        bindto,
        boundName,
        quoted,
        // boolean for string content in double quotes
    aposed,
        // or in single quotes
    bindings = pathBindings && pathBindings[0],
        // bindings array for the first arg
    bndCtx = {
      bd: bindings
    },
        bndStack = {
      0: bndCtx
    },
        paramIndex = 0,
        // list,
    tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
        // The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
    // "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
    parenDepth = 0,
        fnCall = {},
        // We are in a function call
    pathStart = {},
        // tracks the start of the current path such as c^d() in the above example
    result;

    if (params[0] === "@") {
      params = params.replace(rBracketQuote, ".");
    }

    result = (params + (tmpl ? " " : "")).replace($sub.rPrm, parseTokens);
    return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
  }

  function buildCode(ast, tmpl, isLinkExpr) {
    // Build the template function code from the AST nodes, and set as property on the passed-in template object
    // Used for compiling templates, and also by JsViews to build functions for data link expressions
    var i,
        node,
        tagName,
        converter,
        tagCtx,
        hasTag,
        hasEncoder,
        getsVal,
        hasCnvt,
        useCnvt,
        tmplBindings,
        pathBindings,
        params,
        boundOnErrStart,
        boundOnErrEnd,
        tagRender,
        nestedTmpls,
        tmplName,
        nestedTmpl,
        tagAndElses,
        content,
        markup,
        nextIsElse,
        oldCode,
        isElse,
        isGetVal,
        tagCtxFn,
        onError,
        tagStart,
        trigger,
        lateRender,
        retStrOpen,
        retStrClose,
        tmplBindingKey = 0,
        useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
        code = "",
        tmplOptions = {},
        l = ast.length;

    if ("" + tmpl === tmpl) {
      tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
      tmpl = 0;
    } else {
      tmplName = tmpl.tmplName || "unnamed";

      if (tmpl.allowCode) {
        tmplOptions.allowCode = true;
      }

      if (tmpl.debug) {
        tmplOptions.debug = true;
      }

      tmplBindings = tmpl.bnds;
      nestedTmpls = tmpl.tmpls;
    }

    for (i = 0; i < l; i++) {
      // AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
      node = ast[i]; // Add newline for each callout to t() c() etc. and each markup string

      if ("" + node === node) {
        // a markup string to be inserted
        code += '\n+"' + node + '"';
      } else {
        // a compiled tag expression to be inserted
        tagName = node[0];

        if (tagName === "*") {
          // Code tag: {{* }}
          code += ";\n" + node[1] + "\nret=ret";
        } else {
          converter = node[1];
          content = !isLinkExpr && node[2];
          tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
          trigger = node[6];
          lateRender = node[7];

          if (node[8]) {
            // latePath @a.b.c or @~a.b.c
            retStrOpen = "\nvar ob,ltOb={},ctxs=";
            retStrClose = ";\nctxs.lt=ltOb.lt;\nreturn ctxs;";
          } else {
            retStrOpen = "\nreturn ";
            retStrClose = "";
          }

          markup = node[10] && node[10].replace(rUnescapeQuotes, "$1");

          if (isElse = tagName === "else") {
            if (pathBindings) {
              pathBindings.push(node[9]);
            }
          } else {
            onError = node[5] || $subSettings.debugMode !== false && "undefined"; // If debugMode not false, set default onError handler on tag to "undefined" (see onRenderError)

            if (tmplBindings && (pathBindings = node[9])) {
              // Array of paths, or false if not data-bound
              pathBindings = [pathBindings];
              tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
            }
          }

          useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]); // useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
          // We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
          // using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...

          if (isGetVal = tagName === ":") {
            if (converter) {
              tagName = converter === HTML ? ">" : converter + tagName;
            }
          } else {
            if (content) {
              // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
              // Create template object for nested template
              nestedTmpl = tmplObject(markup, tmplOptions);
              nestedTmpl.tmplName = tmplName + "/" + tagName; // Compile to AST and then to compiled function

              nestedTmpl.useViews = nestedTmpl.useViews || useViews;
              buildCode(content, nestedTmpl);
              useViews = nestedTmpl.useViews;
              nestedTmpls.push(nestedTmpl);
            }

            if (!isElse) {
              // This is not an else tag.
              tagAndElses = tagName;
              useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow); // Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array

              oldCode = code;
              code = "";
            }

            nextIsElse = ast[i + 1];
            nextIsElse = nextIsElse && nextIsElse[0] === "else";
          }

          tagStart = onError ? ";\ntry{\nret+=" : "\n+";
          boundOnErrStart = "";
          boundOnErrEnd = "";

          if (isGetVal && (pathBindings || trigger || converter && converter !== HTML || lateRender)) {
            // For convertVal we need a compiled function to return the new tagCtx(s)
            tagCtxFn = new Function("data,view,j,u", "// " + tmplName + " " + ++tmplBindingKey + " " + tagName + retStrOpen + "{" + tagCtx + "};" + retStrClose);
            tagCtxFn._er = onError;
            tagCtxFn._tag = tagName;
            tagCtxFn._bd = !!pathBindings; // data-linked tag {^{.../}}

            tagCtxFn._lr = lateRender;

            if (isLinkExpr) {
              return tagCtxFn;
            }

            setPaths(tagCtxFn, pathBindings);
            tagRender = 'c("' + converter + '",view,';
            useCnvt = true;
            boundOnErrStart = tagRender + tmplBindingKey + ",";
            boundOnErrEnd = ")";
          }

          code += isGetVal ? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
          ? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (tagCtxFn ? (tmplBindings[tmplBindingKey - 1] = tagCtxFn, tmplBindingKey // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
          ) : "{" + tagCtx + "}") + ")") : tagName === ">" ? (hasEncoder = true, "h(" + params[0] + ")") : (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")')) // Non strict equality so data-link="title{:expr}" with expr=null/undefined removes title attribute
          ) : (hasTag = true, "\n{view:view,content:false,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
          + (content ? nestedTmpls.length : "false") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
          + tagCtx + "},");

          if (tagAndElses && !nextIsElse) {
            // This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
            // We complete the code for returning the tagCtxs array
            code = "[" + code.slice(0, -1) + "]";
            tagRender = 't("' + tagAndElses + '",view,this,';

            if (isLinkExpr || pathBindings) {
              // This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
              code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + retStrOpen + code + retStrClose);
              code._er = onError;
              code._tag = tagAndElses;

              if (pathBindings) {
                setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
              }

              code._lr = lateRender;

              if (isLinkExpr) {
                return code; // For a data-link expression we return the compiled tagCtxs function
              }

              boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
              boundOnErrEnd = ")";
            } // This is the last {{else}} for an inline tag.
            // For a bound tag, pass the tagCtxs fn lookup key to renderTag.
            // For an unbound tag, include the code directly for evaluating tagCtxs array


            code = oldCode + tagStart + tagRender + (pathBindings && tmplBindingKey || code) + ")";
            pathBindings = 0;
            tagAndElses = 0;
          }

          if (onError && !nextIsElse) {
            useViews = true;
            code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
          }
        }
      }
    } // Include only the var references that are needed in the code


    code = "// " + tmplName + (tmplOptions.debug ? "\ndebugger;" : "") + "\nvar v" + (hasTag ? ",t=j._tag" : "") // has tag
    + (hasCnvt ? ",c=j._cnvt" : "") // converter
    + (hasEncoder ? ",h=j._html" : "") // html converter
    + (isLinkExpr ? (node[8] // late @... path?
    ? ", ob" : "") + ";\n" : ',ret=""') + code + (isLinkExpr ? "\n" : ";\nreturn ret;");

    try {
      code = new Function("data,view,j,u", code);
    } catch (e) {
      syntaxError("Compiled template code:\n\n" + code + '\n: "' + (e.message || e) + '"');
    }

    if (tmpl) {
      tmpl.fn = code;
      tmpl.useViews = !!useViews;
    }

    return code;
  } //==========
  // Utilities
  //==========
  // Merge objects, in particular contexts which inherit from parent contexts


  function extendCtx(context, parentContext) {
    // Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
    // If neither context nor parentContext are defined, return undefined
    return context && context !== parentContext ? parentContext ? $extend($extend({}, parentContext), context) : context : parentContext && $extend({}, parentContext);
  }

  function getTargetProps(source, tagCtx) {
    // this pointer is theMap - which has tagCtx.props too
    // arguments: tagCtx.args.
    var key,
        prop,
        map = tagCtx.map,
        propsArr = map && map.propsArr;

    if (!propsArr) {
      // map.propsArr is the full array of {key:..., prop:...} objects
      propsArr = [];

      if (_typeof(source) === OBJECT || $isFunction(source)) {
        for (key in source) {
          prop = source[key];

          if (key !== $expando && source.hasOwnProperty(key) && (!tagCtx.props.noFunctions || !$.isFunction(prop))) {
            propsArr.push({
              key: key,
              prop: prop
            });
          }
        }
      }

      if (map) {
        map.propsArr = map.options && propsArr; // If bound {^{props}} and not isRenderCall, store propsArr on map (map.options is defined only for bound, && !isRenderCall)
      }
    }

    return getTargetSorted(propsArr, tagCtx); // Obtains map.tgt, by filtering, sorting and splicing the full propsArr
  }

  function getTargetSorted(value, tagCtx) {
    // getTgt
    var mapped,
        start,
        end,
        tag = tagCtx.tag,
        props = tagCtx.props,
        propParams = tagCtx.params.props,
        filter = props.filter,
        sort = props.sort,
        directSort = sort === true,
        step = parseInt(props.step),
        reverse = props.reverse ? -1 : 1;

    if (!$isArray(value)) {
      return value;
    }

    if (directSort || sort && "" + sort === sort) {
      // Temporary mapped array holds objects with index and sort-value
      mapped = value.map(function (item, i) {
        item = directSort ? item : getPathObject(item, sort);
        return {
          i: i,
          v: "" + item === item ? item.toLowerCase() : item
        };
      }); // Sort mapped array

      mapped.sort(function (a, b) {
        return a.v > b.v ? reverse : a.v < b.v ? -reverse : 0;
      }); // Map to new array with resulting order

      value = mapped.map(function (item) {
        return value[item.i];
      });
    } else if ((sort || reverse < 0) && !tag.dataMap) {
      value = value.slice(); // Clone array first if not already a new array
    }

    if ($isFunction(sort)) {
      value = value.sort(function () {
        // Wrap the sort function to provide tagCtx as 'this' pointer
        return sort.apply(tagCtx, arguments);
      });
    }

    if (reverse < 0 && (!sort || $isFunction(sort))) {
      // Reverse result if not already reversed in sort
      value = value.reverse();
    }

    if (value.filter && filter) {
      // IE8 does not support filter
      value = value.filter(filter, tagCtx);

      if (tagCtx.tag.onFilter) {
        tagCtx.tag.onFilter(tagCtx);
      }
    }

    if (propParams.sorted) {
      mapped = sort || reverse < 0 ? value : value.slice();

      if (tag.sorted) {
        $.observable(tag.sorted).refresh(mapped); // Note that this might cause the start and end props to be modified - e.g. by pager tag control
      } else {
        tagCtx.map.sorted = mapped;
      }
    }

    start = props.start; // Get current value - after possible  changes triggered by tag.sorted refresh() above

    end = props.end;

    if (propParams.start && start === undefined || propParams.end && end === undefined) {
      start = end = 0;
    }

    if (!isNaN(start) || !isNaN(end)) {
      // start or end specified, but not the auto-create Number array scenario of {{for start=xxx end=yyy}}
      start = +start || 0;
      end = end === undefined || end > value.length ? value.length : +end;
      value = value.slice(start, end);
    }

    if (step > 1) {
      start = 0;
      end = value.length;
      mapped = [];

      for (; start < end; start += step) {
        mapped.push(value[start]);
      }

      value = mapped;
    }

    if (propParams.paged && tag.paged) {
      $observable(tag.paged).refresh(value);
    }

    return value;
  }
  /** Render the template as a string, using the specified data and helpers/context
  * $("#tmpl").render()
  *
  * @param {any}        data
  * @param {hash}       [helpersOrContext]
  * @param {boolean}    [noIteration]
  * @returns {string}   rendered template
  */


  function $fnRender(data, context, noIteration) {
    var tmplElem = this.jquery && (this[0] || error('Unknown template')),
        // Targeted element not found for jQuery template selector such as "#myTmpl"
    tmpl = tmplElem.getAttribute(tmplAttr);
    return renderContent.call(tmpl && $.data(tmplElem)[jsvTmpl] || $templates(tmplElem), data, context, noIteration);
  } //========================== Register converters ==========================


  function getCharEntity(ch) {
    // Get character entity for HTML, Attribute and optional data encoding
    return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
  }

  function getCharFromEntity(match, token) {
    // Get character from HTML entity, for optional data unencoding
    return charsFromEntities[token] || "";
  }

  function htmlEncode(text) {
    // HTML encode: Replace < > & ' " ` etc. by corresponding entities.
    return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
  }

  function dataEncode(text) {
    // Encode just < > and & - intended for 'safe data' along with {{:}} rather than {{>}}
    return "" + text === text ? text.replace(rDataEncode, getCharEntity) : text;
  }

  function dataUnencode(text) {
    // Unencode just < > and & - intended for 'safe data' along with {{:}} rather than {{>}}
    return "" + text === text ? text.replace(rDataUnencode, getCharFromEntity) : text;
  } //========================== Initialize ==========================


  $sub = $views.sub;
  $viewsSettings = $views.settings;

  if (!(jsr || $ && $.render)) {
    // JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
    for (jsvStoreName in jsvStores) {
      registerStore(jsvStoreName, jsvStores[jsvStoreName]);
    }

    $converters = $views.converters;
    $helpers = $views.helpers;
    $tags = $views.tags;
    $sub._tg.prototype = {
      baseApply: baseApply,
      cvtArgs: convertArgs,
      bndArgs: convertBoundArgs,
      ctxPrm: contextParameter
    };
    topView = $sub.topView = new View(); //BROWSER-SPECIFIC CODE

    if ($) {
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // jQuery (= $) is loaded
      $.fn.render = $fnRender;
      $expando = $.expando;

      if ($.observable) {
        if (versionNumber !== (versionNumber = $.views.jsviews)) {
          // Different version of jsRender was loaded
          throw "JsObservable requires JsRender " + versionNumber;
        }

        $extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js

        $views.map = $.views.map;
      }
    } else {
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // jQuery is not loaded.
      $ = {};

      if (setGlobals) {
        global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
      } // Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
      // Use jsrender-node.js instead...


      $.renderFile = $.__express = $.compile = function () {
        throw "Node.js: use npm jsrender, or jsrender-node.js";
      }; //END BROWSER-SPECIFIC CODE


      $.isFunction = function (ob) {
        return typeof ob === "function";
      };

      $.isArray = Array.isArray || function (obj) {
        return {}.toString.call(obj) === "[object Array]";
      };

      $sub._jq = function (jq) {
        // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
        if (jq !== $) {
          $extend(jq, $); // map over from jsrender namespace to jQuery namespace

          $ = jq;
          $.fn.render = $fnRender;
          delete $.jsrender;
          $expando = $.expando;
        }
      };

      $.jsrender = versionNumber;
    }

    $subSettings = $sub.settings;
    $subSettings.allowCode = false;
    $isFunction = $.isFunction;
    $.render = $render;
    $.views = $views;
    $.templates = $templates = $views.templates;

    for (setting in $subSettings) {
      addSetting(setting);
    }
    /**
    * $.views.settings.debugMode(true)
    * @param {boolean}  debugMode
    * @returns {Settings}
    *
    * debugMode = $.views.settings.debugMode()
    * @returns {boolean}
    */


    ($viewsSettings.debugMode = function (debugMode) {
      return debugMode === undefined ? $subSettings.debugMode : ($subSettings.debugMode = debugMode, $subSettings.onError = debugMode + "" === debugMode ? function () {
        return debugMode;
      } : $isFunction(debugMode) ? debugMode : undefined, $viewsSettings);
    })(false); // jshint ignore:line

    $subSettingsAdvanced = $subSettings.advanced = {
      useViews: false,
      _jsv: false // For global access to JsViews store

    }; //========================== Register tags ==========================

    $tags({
      "if": {
        render: function render(val) {
          // This function is called once for {{if}} and once for each {{else}}.
          // We will use the tag.rendering object for carrying rendering state across the calls.
          // If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
          // Otherwise return ""
          var self = this,
              tagCtx = self.tagCtx,
              ret = self.rendering.done || !val && (tagCtx.args.length || !tagCtx.index) ? "" : (self.rendering.done = true, self.selected = tagCtx.index, undefined); // Test is satisfied, so render content on current context

          return ret;
        },
        contentCtx: true,
        // Inherit parent view data context
        flow: true
      },
      "for": {
        sortDataMap: dataMap(getTargetSorted),
        init: function init(val, cloned) {
          this.setDataMap(this.tagCtxs);
        },
        render: function render(val) {
          // This function is called once for {{for}} and once for each {{else}}.
          // We will use the tag.rendering object for carrying rendering state across the calls.
          var value,
              filter,
              srtField,
              isArray,
              i,
              sorted,
              end,
              step,
              self = this,
              tagCtx = self.tagCtx,
              range = tagCtx.argDefault === false,
              props = tagCtx.props,
              iterate = range || tagCtx.args.length,
              // Not final else and not auto-create range
          result = "",
              done = 0;

          if (!self.rendering.done) {
            value = iterate ? val : tagCtx.view.data; // For the final else, defaults to current data without iteration.

            if (range) {
              range = props.reverse ? "unshift" : "push";
              end = +props.end;
              step = +props.step || 1;
              value = []; // auto-create integer array scenario of {{for start=xxx end=yyy}}

              for (i = +props.start || 0; (end - i) * step > 0; i += step) {
                value[range](i);
              }
            }

            if (value !== undefined) {
              isArray = $isArray(value);
              result += tagCtx.render(value, !iterate || props.noIteration); // Iterates if data is an array, except on final else - or if noIteration property
              // set to true. (Use {{include}} to compose templates without array iteration)

              done += isArray ? value.length : 1;
            }

            if (self.rendering.done = done) {
              self.selected = tagCtx.index;
            } // If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.

          }

          return result;
        },
        setDataMap: function setDataMap(tagCtxs) {
          var tagCtx,
              props,
              paramsProps,
              self = this,
              l = tagCtxs.length;

          while (l--) {
            tagCtx = tagCtxs[l];
            props = tagCtx.props;
            paramsProps = tagCtx.params.props;
            tagCtx.argDefault = props.end === undefined || tagCtx.args.length > 0; // Default to #data except for auto-create range scenario {{for start=xxx end=yyy step=zzz}}

            props.dataMap = tagCtx.argDefault !== false && $isArray(tagCtx.args[0]) && (paramsProps.sort || paramsProps.start || paramsProps.end || paramsProps.step || paramsProps.filter || paramsProps.reverse || props.sort || props.start || props.end || props.step || props.filter || props.reverse) && self.sortDataMap;
          }
        },
        flow: true
      },
      props: {
        baseTag: "for",
        dataMap: dataMap(getTargetProps),
        init: noop,
        // Don't execute the base init() of the "for" tag
        flow: true
      },
      include: {
        flow: true
      },
      "*": {
        // {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
        render: retVal,
        flow: true
      },
      ":*": {
        // {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
        render: retVal,
        flow: true
      },
      dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.

    });
    $converters({
      html: htmlEncode,
      attr: htmlEncode,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
      encode: dataEncode,
      unencode: dataUnencode,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
      url: function url(text) {
        // URL encoding helper.
        return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
      }
    });
  } //========================== Define default delimiters ==========================


  $subSettings = $sub.settings;
  $isArray = ($ || jsr).isArray;
  $viewsSettings.delimiters("{{", "}}", "^");

  if (jsrToJq) {
    // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
    jsr.views.sub._jq($);
  }

  return $ || jsr;
}, window);

/***/ }),

/***/ "./node_modules/ui-huma/js/messages.js":
/*!*********************************************!*\
  !*** ./node_modules/ui-huma/js/messages.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  'use strict';

  var jsrender = __webpack_require__(/*! jsrender */ "./node_modules/jsrender/jsrender.js");

  var scroll = function scroll() {
    var element = document.querySelector('.app-messages__container [data-perfect-scrollbar]');
    element.scrollTop = element.scrollHeight - element.offsetHeight - 16;
  };

  ['DOMContentLoaded', 'load'].forEach(function (e) {
    window.addEventListener(e, scroll);
  });

  var addMessage = function addMessage(message) {
    var messages = document.querySelector('#messages');
    var template = jsrender.templates('#template-message');
    var messageNodeText = template.render({
      name: 'Laza Bogdan',
      avatar: 'assets/images/people/110/guy-6.jpg',
      date: 'just now',
      message: message
    });
    var messageNode = document.createRange().createContextualFragment(messageNodeText);
    messages.appendChild(messageNode);
  };

  document.querySelector('#message-reply').addEventListener('submit', function (e) {
    e.preventDefault();
    var field = this.querySelector('input');
    addMessage(field.value);
    field.value = '';
    scroll();
  });
})();

/***/ }),

/***/ "./src/js/messages.js":
/*!****************************!*\
  !*** ./src/js/messages.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/messages */ "./node_modules/ui-huma/js/messages.js");
/* harmony import */ var ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 9:
/*!**********************************!*\
  !*** multi ./src/js/messages.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/messages.js */"./src/js/messages.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3JlbmRlci9qc3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVzc2FnZXMuanMiXSwibmFtZXMiOlsiZmFjdG9yeSIsImdsb2JhbCIsIiQiLCJqUXVlcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZm4iLCJkZWZpbmUiLCJzZXRHbG9iYWxzIiwidmVyc2lvbk51bWJlciIsImpzdlN0b3JlTmFtZSIsInJUYWciLCJyVG1wbFN0cmluZyIsInRvcFZpZXciLCIkdmlld3MiLCIkZXhwYW5kbyIsIl9vY3AiLCIkaXNGdW5jdGlvbiIsIiRpc0FycmF5IiwiJHRlbXBsYXRlcyIsIiRjb252ZXJ0ZXJzIiwiJGhlbHBlcnMiLCIkdGFncyIsIiRzdWIiLCIkc3ViU2V0dGluZ3MiLCIkc3ViU2V0dGluZ3NBZHZhbmNlZCIsIiR2aWV3c1NldHRpbmdzIiwiZGVsaW1PcGVuQ2hhcjAiLCJkZWxpbU9wZW5DaGFyMSIsImRlbGltQ2xvc2VDaGFyMCIsImRlbGltQ2xvc2VDaGFyMSIsImxpbmtDaGFyIiwic2V0dGluZyIsImJhc2VPbkVycm9yIiwiaXNSZW5kZXJDYWxsIiwick5ld0xpbmUiLCJyVW5lc2NhcGVRdW90ZXMiLCJyRXNjYXBlUXVvdGVzIiwickJ1aWxkSGFzaCIsInJUZXN0RWxzZUlmIiwickZpcnN0RWxlbSIsInJBdHRyRW5jb2RlIiwicklzSHRtbCIsInJIYXNIYW5kbGVycyIsInJXcmFwcGVkSW5WaWV3TWFya2VyIiwickh0bWxFbmNvZGUiLCJyRGF0YUVuY29kZSIsInJEYXRhVW5lbmNvZGUiLCJyQnJhY2tldFF1b3RlIiwidmlld0lkIiwiY2hhckVudGl0aWVzIiwiY2hhcnNGcm9tRW50aXRpZXMiLCJhbXAiLCJndCIsImx0IiwiSFRNTCIsIk9CSkVDVCIsInRtcGxBdHRyIiwianN2VG1wbCIsImluZGV4U3RyIiwiJHJlbmRlciIsImpzciIsImpzcmVuZGVyIiwianNyVG9KcSIsInJlbmRlciIsImpzdlN0b3JlcyIsInRlbXBsYXRlIiwiY29tcGlsZSIsImNvbXBpbGVUbXBsIiwidGFnIiwiY29tcGlsZVRhZyIsInZpZXdNb2RlbCIsImNvbXBpbGVWaWV3TW9kZWwiLCJoZWxwZXIiLCJjb252ZXJ0ZXIiLCJqc3ZpZXdzIiwic3ViIiwiclBhdGgiLCJyUHJtIiwiVmlldyIsIkVyciIsIkpzVmlld3NFcnJvciIsInRtcGxGbiIsInBhcnNlIiwicGFyc2VQYXJhbXMiLCJleHRlbmQiLCIkZXh0ZW5kIiwiZXh0ZW5kQ3R4Iiwic3ludGF4RXJyIiwic3ludGF4RXJyb3IiLCJvblN0b3JlIiwibmFtZSIsIml0ZW0iLCJhZGRTZXR0aW5nIiwic2V0dGluZ3MiLCJhbGxvd0NvZGUiLCJhZHZTZXQiLCJub29wIiwiX3RocCIsInRhZ0hhbmRsZXJzRnJvbVByb3BzIiwiX2dtIiwiZ2V0TWV0aG9kIiwiX3RnIiwiX2NudnQiLCJjb252ZXJ0VmFsIiwiX3RhZyIsInJlbmRlclRhZyIsIl9lciIsImVycm9yIiwiX2VyciIsIm9uUmVuZGVyRXJyb3IiLCJfY3AiLCJyZXRWYWwiLCJfc3EiLCJ0b2tlbiIsImRlbGltaXRlcnMiLCIkdmlld3NEZWxpbWl0ZXJzIiwiYWR2YW5jZWQiLCJ2YWx1ZSIsIm1hcCIsImRhdGFNYXAiLCJnZXREZXJpdmVkTWV0aG9kIiwiYmFzZU1ldGhvZCIsIm1ldGhvZCIsInJldCIsInByZXZCYXNlIiwiYmFzZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2QiLCJ0YWdDdHgiLCJwcm9wIiwicHJvcHMiLCJ0ZXN0IiwiZml4IiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJ2YWwiLCJkYmdCcmVhayIsImNvbnNvbGUiLCJsb2ciLCJlIiwiYmFzZUFwcGx5IiwibWVzc2FnZSIsImxpbmsiLCJ0YXJnZXQiLCJzb3VyY2UiLCJFcnJvciIsIm9wZW5DaGFycyIsImNsb3NlQ2hhcnMiLCJSZWdFeHAiLCJyVG1wbCIsImdldFZpZXciLCJpbm5lciIsInR5cGUiLCJ1bmRlZmluZWQiLCJ2aWV3cyIsImkiLCJsIiwiZm91bmQiLCJ2aWV3Iiwicm9vdCIsIl8iLCJ1c2VLZXkiLCJnZXQiLCJsZW5ndGgiLCJwYXJlbnQiLCJnZXROZXN0ZWRJbmRleCIsImluZGV4IiwiZGVwZW5kcyIsImdldEluZGV4IiwiZ2V0UGF0aE9iamVjdCIsIm9iIiwicGF0aCIsImx0T2IiLCJwcmV2T2IiLCJ0b2tlbnMiLCJzcGxpdCIsImNvbnRleHRQYXJhbWV0ZXIiLCJrZXkiLCJ3cmFwcGVkIiwiZGVwcyIsInJlcyIsIm9ic0N0eFBybSIsInRhZ0Vsc2UiLCJjYWxsVmlldyIsIm5ld1JlcyIsInN0b3JlVmlldyIsImlzVXBkYXRlIiwic3RvcmUiLCJjdHgiLCJoYXNPd25Qcm9wZXJ0eSIsImxpbmtlZCIsIl9jeHAiLCJzY29wZSIsImlzVG9wIiwiX29jcHMiLCJfdnciLCJfa2V5IiwiaW5kIiwidXBkYXRlVmFsdWUiLCJvYnNlcnZhYmxlIiwic2V0UHJvcGVydHkiLCJfY2VvIiwidW5zaGlmdCIsImN2dEFyZ3MiLCJkYXRhIiwiX3VjcCIsImdldFRlbXBsYXRlIiwidG1wbCIsImdldFJzYyIsIm9uRXJyb3IiLCJsaW5rQ3R4IiwiYXJnc0xlbiIsImJpbmRUbyIsImJvdW5kVGFnIiwiYm5kcyIsIl9sciIsImFyZ3MiLCJfYmQiLCJfbGMiLCJibmQiLCJ1bmxpbmtlZCIsImlubGluZSIsInRhZ05hbWUiLCJjb252ZXJ0Iiwib25BcnJheUNoYW5nZSIsImZsb3ciLCJ0YWdDdHhzIiwiX2lzIiwib25SZW5kZXIiLCJjb252ZXJ0QXJncyIsImJvdW5kIiwiYm91bmRBcmdzIiwiYmluZEZyb20iLCJzbGljZSIsImFyZ09yUHJvcCIsImNvbnRleHQiLCJjb252ZXJ0Qm91bmRBcmdzIiwiZ2V0UmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJpdGVtTmFtZSIsInBhcmVudFZpZXciLCJiaW5kVG9PckJpbmRGcm9tIiwiYmluZEFycmF5IiwibSIsImlzTmFOIiwicGFyc2VJbnQiLCJ0YWdEZWYiLCJ0YWdzIiwiYXR0ciIsInBhcmVudFRhZyIsIm4iLCJpdGVtUmV0IiwidGFnQ3R4Q3R4IiwiY3R4UHJtIiwiaW5pdFZhbCIsImNvbnRlbnQiLCJjYWxsSW5pdCIsIm1hcERlZiIsInRoaXNNYXAiLCJiZEFyZ3MiLCJ0YWdEYXRhTWFwIiwiY29udGVudEN0eCIsImJpbmRGcm9tTGVuZ3RoIiwiYmluZFRvTGVuZ3RoIiwibGlua2VkRWxlbWVudCIsImRlZmF1bHRDdHgiLCJwYXJlbnRUbXBsIiwibGF0ZVJlbmRlciIsInBhcmFtcyIsInRtcGxzIiwicmVuZGVyQ29udGVudCIsImJuZEFyZ3MiLCJfZ2V0VG1wbCIsIl9jdHIiLCJpbml0IiwidGhzIiwidGhpcyIsImFyclZ3cyIsImRhdGFCb3VuZE9ubHkiLCJwYXJlbnRzIiwicGFyZW50VGFncyIsInJlbmRlcmluZyIsInJuZHIiLCJhcmdEZWZhdWx0IiwibGlua2VkQ3R4UGFyYW0iLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwiX2RmQXQiLCJub1Z3cyIsImN2dCIsInNyYyIsInVubWFwIiwidGd0IiwibGlua3MiLCJyZW5kZXJXaXRoVmlld3MiLCJodG1sIiwiY29udGVudFRtcGwiLCJwYXJlbnRWaWV3XyIsInNlbGZfIiwic2VsZiIsImlzQXJyYXkiLCJpZCIsInNjcCIsInB1c2giLCJzcGxpY2UiLCJfZ2V0T2IiLCJjb21waWxlQ2hpbGRSZXNvdXJjZXMiLCJzdG9yZU5hbWUiLCJzdG9yZU5hbWVzIiwicmVzb3VyY2VzIiwiYmFzZVRhZyIsImNvbXBpbGVkRGVmIiwiVGFnIiwiX3BhcmVudFRtcGwiLCJvcHRpb25zIiwibG9va3VwVGVtcGxhdGUiLCJjdXJyZW50TmFtZSIsIm5vZGVUeXBlIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZXRBdHRyaWJ1dGUiLCJ0bXBsTmFtZSIsInNldEF0dHJpYnV0ZSIsImNvbXBpbGVkVG1wbCIsInRtcGxPck1hcmt1cCIsIl9odG1sIiwibWFya3VwIiwidG1wbE9iamVjdCIsInJlcGxhY2UiLCJnZXREZWZhdWx0VmFsIiwiZGVmYXVsdFZhbCIsImNhbGwiLCJhZGRQYXJlbnRSZWYiLCJyZWYiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsInZpZXdNb2RlbHMiLCJnZXR0ZXJzIiwicHJvdG8iLCJtZXJnZSIsImNuc3RyIiwiZ2V0dGVyQ291bnQiLCIkb2JzZXJ2YWJsZSIsImdldHRlck5hbWVzIiwiSnN2Vm0iLCJ2bSIsIml0ZXJhdGUiLCJhY3Rpb24iLCJnZXR0ZXJUeXBlIiwicGFyZW50UmVmIiwiaiIsImdldHRlciIsIkpTT04iLCJjaGlsZE9iIiwiYXJyIiwibW9kIiwiYXNzaWduZWQiLCJuZXdNb2RBcnIiLCJrIiwibW9kZWwiLCJyZWZyZXNoIiwiY29uY2F0IiwidW5tYXBBcnJheSIsIm1vZGVsQXJyIiwiY2hhckF0IiwicHJpdkZpZWxkIiwic2V0IiwiRnVuY3Rpb24iLCJodG1sVGFnIiwid3JhcE1hcCIsIl93bSIsImV4ZWMiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsInRyaW0iLCJyZWdpc3RlclN0b3JlIiwic3RvcmVTZXR0aW5ncyIsInRoZVN0b3JlIiwidGhpc1N0b3JlIiwiY250IiwiZ2V0VGd0Iiwic3QiLCJNYXAiLCJiYXNlTWFwIiwibm9JdGVyYXRpb24iLCJpc1RvcFJlbmRlckNhbGwiLCJwcmV2RGF0YSIsInByZXZJbmRleCIsInJlc3VsdCIsInVzZVZpZXdzIiwibmV3VmlldyIsImNoaWxkVmlldyIsIml0ZW1SZXN1bHQiLCJzd2FwQ29udGVudCIsIm91dGVyT25SZW5kZXIiLCJpdGVtVmFyIiwibmV3Q3R4Iiwibm9MaW5raW5nIiwiX3dycCIsIm5sIiwiaGVscGVycyIsImNvbnRlbnRWaWV3IiwiZmFsbGJhY2siLCJpc0xpbmtFeHByIiwiY29udmVydEJhY2siLCJoYXNFbHNlIiwicHVzaHByZWNlZGluZ0NvbnRlbnQiLCJzaGlmdCIsImxvYyIsInN1YnN0ciIsImJsb2NrVGFnQ2hlY2siLCJibG9jayIsInBhcnNlVGFnIiwiYWxsIiwiYmluZCIsImNvbG9uIiwiY29kZVRhZyIsInNsYXNoIiwiYmluZDIiLCJjbG9zZUJsb2NrIiwibGF0ZSIsIm9wZW5UYWdOYW1lIiwiaXNMYXRlT2IiLCJwYXRoQmluZGluZ3MiLCJjdHhQcm9wcyIsInBhcmFtc0FyZ3MiLCJwYXJhbXNQcm9wcyIsInBhcmFtc0N0eFByb3BzIiwidXNlVHJpZ2dlciIsImN1cnJlbnQiLCJzdWJzdHJpbmciLCJzdGFjayIsInBvcCIsIm9uZXJyb3IiLCJpc0N0eFBybSIsImtleVRva2VuIiwia2V5VmFsdWUiLCJhcmciLCJwYXJhbSIsImhhc0hhbmRsZXJzIiwibmV3Tm9kZSIsInBhcnNlZFBhcmFtIiwiYmluZGluZ3MiLCJhc3RUb3AiLCJidWlsZENvZGUiLCJzZXRQYXRocyIsInBhdGhzQXJyIiwicGF0aHMiLCJza3AiLCJwYXJhbVN0cnVjdHVyZSIsInBhcnRzIiwicGFyc2VUb2tlbnMiLCJsZnRQcm4wIiwibGZ0UHJuIiwib3BlcmF0b3IiLCJlcnIiLCJlcSIsInBhdGgyIiwicHJuIiwiY29tbWEiLCJsZnRQcm4yIiwiYXBvcyIsInF1b3QiLCJydFBybiIsInJ0UHJuRG90IiwicHJuMiIsInNwYWNlIiwiZnVsbCIsInBhcnNlUGF0aCIsImFsbFBhdGgiLCJub3QiLCJvYmplY3QiLCJ2aWV3UHJvcGVydHkiLCJwYXRoVG9rZW5zIiwibGVhZlRva2VuIiwic3ViUGF0aCIsImJpbmRzIiwibmFtZWQiLCJiaW5kdG8iLCJfanN2dG8iLCJibmRDdHgiLCJiZCIsInRoZU9iIiwiX2NwZm4iLCJzYiIsInBhdGhTdGFydCIsInBhcmVuRGVwdGgiLCJqb2luIiwiZXhwciIsImV4cHJGbiIsIm5ld09iIiwicnRTcSIsImFwb3NlZCIsInF1b3RlZCIsImJuZFN0YWNrIiwicHJtIiwidG1wbExpbmtzIiwiaW5kZXhPZiIsInBhcmFtSW5kZXgiLCJib3VuZE5hbWUiLCJmbkNhbGwiLCJhc3QiLCJub2RlIiwiaGFzVGFnIiwiaGFzRW5jb2RlciIsImdldHNWYWwiLCJoYXNDbnZ0IiwidXNlQ252dCIsInRtcGxCaW5kaW5ncyIsImJvdW5kT25FcnJTdGFydCIsImJvdW5kT25FcnJFbmQiLCJ0YWdSZW5kZXIiLCJuZXN0ZWRUbXBscyIsIm5lc3RlZFRtcGwiLCJ0YWdBbmRFbHNlcyIsIm5leHRJc0Vsc2UiLCJvbGRDb2RlIiwiaXNFbHNlIiwiaXNHZXRWYWwiLCJ0YWdDdHhGbiIsInRhZ1N0YXJ0IiwidHJpZ2dlciIsInJldFN0ck9wZW4iLCJyZXRTdHJDbG9zZSIsInRtcGxCaW5kaW5nS2V5IiwidGVtcGxhdGVzIiwiY29udmVydGVycyIsImNvZGUiLCJ0bXBsT3B0aW9ucyIsImRlYnVnIiwiZGVidWdNb2RlIiwicGFyZW50Q29udGV4dCIsImdldFRhcmdldFByb3BzIiwicHJvcHNBcnIiLCJub0Z1bmN0aW9ucyIsImlzRnVuY3Rpb24iLCJnZXRUYXJnZXRTb3J0ZWQiLCJtYXBwZWQiLCJzdGFydCIsImVuZCIsInByb3BQYXJhbXMiLCJmaWx0ZXIiLCJzb3J0IiwiZGlyZWN0U29ydCIsInN0ZXAiLCJyZXZlcnNlIiwidiIsImEiLCJiIiwib25GaWx0ZXIiLCJzb3J0ZWQiLCJwYWdlZCIsIiRmblJlbmRlciIsInRtcGxFbGVtIiwianF1ZXJ5IiwiZ2V0Q2hhckVudGl0eSIsImNoIiwiY2hhckNvZGVBdCIsImdldENoYXJGcm9tRW50aXR5IiwibWF0Y2giLCJodG1sRW5jb2RlIiwidGV4dCIsImRhdGFFbmNvZGUiLCJkYXRhVW5lbmNvZGUiLCJleHBhbmRvIiwicmVuZGVyRmlsZSIsIl9fZXhwcmVzcyIsIkFycmF5Iiwib2JqIiwidG9TdHJpbmciLCJfanEiLCJqcSIsIl9qc3YiLCJkb25lIiwic2VsZWN0ZWQiLCJzb3J0RGF0YU1hcCIsImNsb25lZCIsInNldERhdGFNYXAiLCJzcnRGaWVsZCIsInJhbmdlIiwiaW5jbHVkZSIsImRiZyIsImVuY29kZSIsInVuZW5jb2RlIiwidXJsIiwiZW5jb2RlVVJJIiwid2luZG93IiwicmVxdWlyZSIsInNjcm9sbCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRNZXNzYWdlIiwibWVzc2FnZXMiLCJtZXNzYWdlTm9kZVRleHQiLCJhdmF0YXIiLCJkYXRlIiwibWVzc2FnZU5vZGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImFwcGVuZENoaWxkIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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eUNLLGdCQUF6QyxDQUEwRCxRQUExRCxFQUFvRSxVQUFTM2MsQ0FBVCxFQUFZO0FBQzlFQSxLQUFDLENBQUNxZCxjQUFGO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLEtBQUtoQixhQUFMLENBQW1CLE9BQW5CLENBQWQ7QUFFQU0sY0FBVSxDQUFDVSxLQUFLLENBQUM3ZSxLQUFQLENBQVY7QUFDQTZlLFNBQUssQ0FBQzdlLEtBQU4sR0FBYyxFQUFkO0FBRUEyZCxVQUFNO0FBQ1AsR0FSRDtBQVVELENBdENELEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4gLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi45JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGJ1aWx0aW5FeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuXG4gLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuICByZXR1cm4gYnVpbHRpbkV4ZWMuY2FsbChSLCBTKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLyxcbiAgICAgIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxW0xBU1RfSU5ERVhdICE9PSAwIHx8IHJlMltMQVNUX0lOREVYXSAhPT0gMDtcbn0pKCk7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHJlLnNvdXJjZSArICckKD8hXFxcXHMpJywgcmVnZXhwRmxhZ3MuY2FsbChyZSkpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZVtMQVNUX0lOREVYXTtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmVbTEFTVF9JTkRFWF0gPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgcXVvdCA9IC9cIi9nO1xuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG52YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCBleGVjKSB7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KSwgJ1N0cmluZycsIE8pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG52YXIgQmFzZSA9ICRSZWdFeHA7XG52YXIgcHJvdG8gPSAkUmVnRXhwLnByb3RvdHlwZTtcbnZhciByZTEgPSAvYS9nO1xudmFyIHJlMiA9IC9hL2c7XG4vLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcbnZhciBDT1JSRUNUX05FVyA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgKCFDT1JSRUNUX05FVyB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmUyW3JlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSkge1xuICAkUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHAsIGYpIHtcbiAgICB2YXIgdGlSRSA9IHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwO1xuICAgIHZhciBwaVJFID0gaXNSZWdFeHAocCk7XG4gICAgdmFyIGZpVSA9IGYgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gIXRpUkUgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHBcbiAgICAgIDogaW5oZXJpdElmUmVxdWlyZWQoQ09SUkVDVF9ORVdcbiAgICAgICAgPyBuZXcgQmFzZShwaVJFICYmICFmaVUgPyBwLnNvdXJjZSA6IHAsIGYpXG4gICAgICAgIDogQmFzZSgocGlSRSA9IHAgaW5zdGFuY2VvZiAkUmVnRXhwKSA/IHAuc291cmNlIDogcCwgcGlSRSAmJiBmaVUgPyAkZmxhZ3MuY2FsbChwKSA6IGYpXG4gICAgICAsIHRpUkUgPyB0aGlzIDogcHJvdG8sICRSZWdFeHApO1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5IGluICRSZWdFeHAgfHwgZFAoJFJlZ0V4cCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJhc2Vba2V5XTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKGl0KSB7IEJhc2Vba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBnT1BOKEJhc2UpLCBpID0gMDsga2V5cy5sZW5ndGggPiBpOykgcHJveHkoa2V5c1tpKytdKTtcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xufVxuXG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKCdSZWdFeHAnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmYCddfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgIH1cbiAgICByZXR1cm4gJHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xudmFyIE1BWF9VSU5UMzIgPSAweGZmZmZmZmZmO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyBSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnbGluaycsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdWInLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3ViKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIvKiEgSnNSZW5kZXIgdjEuMC42OiBodHRwOi8vanN2aWV3cy5jb20vI2pzcmVuZGVyICovXG4vKiEgKipWRVJTSU9OIEZPUiBXRUIqKiAoRm9yIE5PREUuSlMgc2VlIGh0dHA6Ly9qc3ZpZXdzLmNvbS9kb3dubG9hZC9qc3JlbmRlci1ub2RlLmpzKSAqL1xuLypcbiAqIEJlc3Qtb2YtYnJlZWQgdGVtcGxhdGluZyBpbiBicm93c2VyIG9yIG9uIE5vZGUuanMuXG4gKiBEb2VzIG5vdCByZXF1aXJlIGpRdWVyeSwgb3IgSFRNTCBET01cbiAqIEludGVncmF0ZXMgd2l0aCBKc1ZpZXdzIChodHRwOi8vanN2aWV3cy5jb20vI2pzdmlld3MpXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIEJvcmlzIE1vb3JlXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLy9qc2hpbnQgLVcwMTgsIC1XMDQxLCAtVzEyMFxuXG4oZnVuY3Rpb24oZmFjdG9yeSwgZ2xvYmFsKSB7XG5cdC8vIGdsb2JhbCB2YXIgaXMgdGhlIHRoaXMgb2JqZWN0LCB3aGljaCBpcyB3aW5kb3cgd2hlbiBydW5uaW5nIGluIHRoZSB1c3VhbCBicm93c2VyIGVudmlyb25tZW50XG5cdHZhciAkID0gZ2xvYmFsLmpRdWVyeTtcblxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHsgLy8gQ29tbW9uSlMgZS5nLiBCcm93c2VyaWZ5XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSAkXG5cdFx0XHQ/IGZhY3RvcnkoZ2xvYmFsLCAkKVxuXHRcdFx0OiBmdW5jdGlvbigkKSB7IC8vIElmIG5vIGdsb2JhbCBqUXVlcnksIHRha2Ugb3B0aW9uYWwgalF1ZXJ5IHBhc3NlZCBhcyBwYXJhbWV0ZXI6IHJlcXVpcmUoJ2pzcmVuZGVyJykoalF1ZXJ5KVxuXHRcdFx0XHRpZiAoJCAmJiAhJC5mbikge1xuXHRcdFx0XHRcdHRocm93IFwiUHJvdmlkZSBqUXVlcnkgb3IgbnVsbFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWN0b3J5KGdsb2JhbCwgJCk7XG5cdFx0XHR9O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7IC8vIEFNRCBzY3JpcHQgbG9hZGVyLCBlLmcuIFJlcXVpcmVKU1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBmYWN0b3J5KGdsb2JhbCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7IC8vIEJyb3dzZXIgdXNpbmcgcGxhaW4gPHNjcmlwdD4gdGFnXG5cdFx0ZmFjdG9yeShnbG9iYWwsIGZhbHNlKTtcblx0fVxufSAoXG5cbi8vIGZhY3RvcnkgKGZvciBqc3JlbmRlci5qcylcbmZ1bmN0aW9uKGdsb2JhbCwgJCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gVG9wLWxldmVsIHZhcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gZ2xvYmFsIHZhciBpcyB0aGUgdGhpcyBvYmplY3QsIHdoaWNoIGlzIHdpbmRvdyB3aGVuIHJ1bm5pbmcgaW4gdGhlIHVzdWFsIGJyb3dzZXIgZW52aXJvbm1lbnRcbnZhciBzZXRHbG9iYWxzID0gJCA9PT0gZmFsc2U7IC8vIE9ubHkgc2V0IGdsb2JhbHMgaWYgc2NyaXB0IGJsb2NrIGluIGJyb3dzZXIgKG5vdCBBTUQgYW5kIG5vdCBDb21tb25KUylcblxuJCA9ICQgJiYgJC5mbiA/ICQgOiBnbG9iYWwualF1ZXJ5OyAvLyAkIGlzIGpRdWVyeSBwYXNzZWQgaW4gYnkgQ29tbW9uSlMgbG9hZGVyIChCcm93c2VyaWZ5KSwgb3IgZ2xvYmFsIGpRdWVyeS5cblxudmFyIHZlcnNpb25OdW1iZXIgPSBcInYxLjAuNlwiLFxuXHRqc3ZTdG9yZU5hbWUsIHJUYWcsIHJUbXBsU3RyaW5nLCB0b3BWaWV3LCAkdmlld3MsICRleHBhbmRvLFxuXHRfb2NwID0gXCJfb2NwXCIsIC8vIE9ic2VydmFibGUgY29udGV4dHVhbCBwYXJhbWV0ZXJcblxuLy9UT0RPXHR0bXBsRm5zQ2FjaGUgPSB7fSxcblx0JGlzRnVuY3Rpb24sICRpc0FycmF5LCAkdGVtcGxhdGVzLCAkY29udmVydGVycywgJGhlbHBlcnMsICR0YWdzLCAkc3ViLCAkc3ViU2V0dGluZ3MsICRzdWJTZXR0aW5nc0FkdmFuY2VkLCAkdmlld3NTZXR0aW5ncyxcblx0ZGVsaW1PcGVuQ2hhcjAsIGRlbGltT3BlbkNoYXIxLCBkZWxpbUNsb3NlQ2hhcjAsIGRlbGltQ2xvc2VDaGFyMSwgbGlua0NoYXIsIHNldHRpbmcsIGJhc2VPbkVycm9yLFxuXG5cdGlzUmVuZGVyQ2FsbCxcblx0ck5ld0xpbmUgPSAvWyBcXHRdKihcXHJcXG58XFxufFxccikvZyxcblx0clVuZXNjYXBlUXVvdGVzID0gL1xcXFwoWydcIl0pL2csXG5cdHJFc2NhcGVRdW90ZXMgPSAvWydcIlxcXFxdL2csIC8vIEVzY2FwZSBxdW90ZXMgYW5kIFxcIGNoYXJhY3RlclxuXHRyQnVpbGRIYXNoID0gLyg/OlxceDA4fF4pKG9uZXJyb3I6KT8oPzoofj8pKChbXFx3JC5dKyk6KT8oW15cXHgwOF0rKSlcXHgwOCgsKT8oW15cXHgwOF0rKS9naSxcblx0clRlc3RFbHNlSWYgPSAvXmlmXFxzLyxcblx0ckZpcnN0RWxlbSA9IC88KFxcdyspWz5cXHNdLyxcblx0ckF0dHJFbmNvZGUgPSAvW1xceDAwYD48XCInJj1dL2csIC8vIEluY2x1ZGVzID4gZW5jb2Rpbmcgc2luY2UgckNvbnZlcnRNYXJrZXJzIGluIEpzVmlld3MgZG9lcyBub3Qgc2tpcCA+IGNoYXJhY3RlcnMgaW4gYXR0cmlidXRlIHN0cmluZ3Ncblx0cklzSHRtbCA9IC9bXFx4MDBgPjxcXFwiJyY9XS8sXG5cdHJIYXNIYW5kbGVycyA9IC9eb25bQS1aXXxeY29udmVydChCYWNrKT8kLyxcblx0cldyYXBwZWRJblZpZXdNYXJrZXIgPSAvXlxcI1xcZCtfYFtcXHNcXFNdKlxcL1xcZCtfYCQvLFxuXHRySHRtbEVuY29kZSA9IHJBdHRyRW5jb2RlLFxuXHRyRGF0YUVuY29kZSA9IC9bJjw+XS9nLFxuXHRyRGF0YVVuZW5jb2RlID0gLyYoYW1wfGd0fGx0KTsvZyxcblx0ckJyYWNrZXRRdW90ZSA9IC9cXFtbJ1wiXT98WydcIl0/XFxdL2csXG5cdHZpZXdJZCA9IDAsXG5cdGNoYXJFbnRpdGllcyA9IHtcblx0XHRcIiZcIjogXCImYW1wO1wiLFxuXHRcdFwiPFwiOiBcIiZsdDtcIixcblx0XHRcIj5cIjogXCImZ3Q7XCIsXG5cdFx0XCJcXHgwMFwiOiBcIiYjMDtcIixcblx0XHRcIidcIjogXCImIzM5O1wiLFxuXHRcdCdcIic6IFwiJiMzNDtcIixcblx0XHRcImBcIjogXCImIzk2O1wiLFxuXHRcdFwiPVwiOiBcIiYjNjE7XCJcblx0fSxcblx0Y2hhcnNGcm9tRW50aXRpZXMgID0ge1xuXHRcdGFtcDogXCImXCIsXG5cdFx0Z3Q6IFwiPlwiLFxuXHRcdGx0OiBcIjxcIlxuXHR9LFxuXHRIVE1MID0gXCJodG1sXCIsXG5cdE9CSkVDVCA9IFwib2JqZWN0XCIsXG5cdHRtcGxBdHRyID0gXCJkYXRhLWpzdi10bXBsXCIsXG5cdGpzdlRtcGwgPSBcImpzdlRtcGxcIixcblx0aW5kZXhTdHIgPSBcIkZvciAjaW5kZXggaW4gbmVzdGVkIGJsb2NrIHVzZSAjZ2V0SW5kZXgoKS5cIixcblx0JHJlbmRlciA9IHt9LFxuXG5cdGpzciA9IGdsb2JhbC5qc3JlbmRlcixcblx0anNyVG9KcSA9IGpzciAmJiAkICYmICEkLnJlbmRlciwgLy8gSnNSZW5kZXIgYWxyZWFkeSBsb2FkZWQsIHdpdGhvdXQgalF1ZXJ5LiBidXQgd2Ugd2lsbCByZS1sb2FkIGl0IG5vdyB0byBhdHRhY2ggdG8galF1ZXJ5XG5cblx0anN2U3RvcmVzID0ge1xuXHRcdHRlbXBsYXRlOiB7XG5cdFx0XHRjb21waWxlOiBjb21waWxlVG1wbFxuXHRcdH0sXG5cdFx0dGFnOiB7XG5cdFx0XHRjb21waWxlOiBjb21waWxlVGFnXG5cdFx0fSxcblx0XHR2aWV3TW9kZWw6IHtcblx0XHRcdGNvbXBpbGU6IGNvbXBpbGVWaWV3TW9kZWxcblx0XHR9LFxuXHRcdGhlbHBlcjoge30sXG5cdFx0Y29udmVydGVyOiB7fVxuXHR9O1xuXG5cdC8vIHZpZXdzIG9iamVjdCAoJC52aWV3cyBpZiBqUXVlcnkgaXMgbG9hZGVkLCBqc3JlbmRlci52aWV3cyBpZiBubyBqUXVlcnksIGUuZy4gaW4gTm9kZS5qcylcblx0JHZpZXdzID0ge1xuXHRcdGpzdmlld3M6IHZlcnNpb25OdW1iZXIsXG5cdFx0c3ViOiB7XG5cdFx0XHQvLyBzdWJzY3JpcHRpb24sIGUuZy4gSnNWaWV3cyBpbnRlZ3JhdGlvblxuXHRcdFx0clBhdGg6IC9eKCEqPykoPzpudWxsfHRydWV8ZmFsc2V8XFxkW1xcZC5dKnwoW1xcdyRdK3xcXC58fihbXFx3JF0rKXwjKHZpZXd8KFtcXHckXSspKT8pKFtcXHckLl5dKj8pKD86Wy5bXl0oW1xcdyRdKylcXF0/KT8pJC9nLFxuXHRcdFx0Ly8gICAgICAgIG5vdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgICAgIGhlbHBlciAgICB2aWV3ICB2aWV3UHJvcGVydHkgcGF0aFRva2VucyAgICAgIGxlYWZUb2tlblxuXG5cdFx0XHRyUHJtOiAvKFxcKCkoPz1cXHMqXFwoKXwoPzooWyhbXSlcXHMqKT8oPzooXFxePykofj9bXFx3JC5eXSspP1xccyooKFxcK1xcK3wtLSl8XFwrfC18fig/IVtcXHckXSl8JiZ8XFx8XFx8fD09PXwhPT18PT18IT18PD18Pj18Wzw+JSo6P1xcL118KD0pKVxccyp8KCEqPyhAKT9bI35dP1tcXHckLl5dKykoWyhbXSk/KXwoLFxccyopfChcXCg/KVxcXFw/KD86KCcpfChcIikpfCg/OlxccyooKFspXFxdXSkoPz1bLl5dfFxccyokfFteKFtdKXxbKVxcXV0pKFsoW10/KSl8KFxccyspL2csXG5cdFx0XHQvLyAgIGxmdFBybjAgICAgICAgICAgIGxmdFBybiAgICAgICAgIGJvdW5kICAgICBwYXRoICAgICAgICAgICAgICAgb3BlcmF0b3IgICAgIGVyciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxICAgICAgcGF0aDIgbGF0ZSAgICAgICAgICAgIHBybiAgICAgIGNvbW1hICBsZnRQcm4yICAgYXBvcyBxdW90ICAgICAgICBydFBybiAgcnRQcm5Eb3QgICAgICAgICAgICAgICAgICBwcm4yICAgICBzcGFjZVxuXG5cdFx0XHRWaWV3OiBWaWV3LFxuXHRcdFx0RXJyOiBKc1ZpZXdzRXJyb3IsXG5cdFx0XHR0bXBsRm46IHRtcGxGbixcblx0XHRcdHBhcnNlOiBwYXJzZVBhcmFtcyxcblx0XHRcdGV4dGVuZDogJGV4dGVuZCxcblx0XHRcdGV4dGVuZEN0eDogZXh0ZW5kQ3R4LFxuXHRcdFx0c3ludGF4RXJyOiBzeW50YXhFcnJvcixcblx0XHRcdG9uU3RvcmU6IHtcblx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKG5hbWUsIGl0ZW0pIHtcblx0XHRcdFx0XHRpZiAoaXRlbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlICRyZW5kZXJbbmFtZV07XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChuYW1lKSB7XG5cdFx0XHRcdFx0XHQkcmVuZGVyW25hbWVdID0gaXRlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhZGRTZXR0aW5nOiBhZGRTZXR0aW5nLFxuXHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0YWxsb3dDb2RlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGFkdlNldDogbm9vcCwgLy8gVXBkYXRlIGFkdmFuY2VkIHNldHRpbmdzXG5cdFx0XHRfdGhwOiB0YWdIYW5kbGVyc0Zyb21Qcm9wcyxcblx0XHRcdF9nbTogZ2V0TWV0aG9kLFxuXHRcdFx0X3RnOiBmdW5jdGlvbigpIHt9LCAvLyBDb25zdHJ1Y3RvciBmb3IgdGFnRGVmXG5cdFx0XHRfY252dDogY29udmVydFZhbCxcblx0XHRcdF90YWc6IHJlbmRlclRhZyxcblx0XHRcdF9lcjogZXJyb3IsXG5cdFx0XHRfZXJyOiBvblJlbmRlckVycm9yLFxuXHRcdFx0X2NwOiByZXRWYWwsIC8vIEdldCBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVycyAob3IgcHJvcGVydGllcykgfmZvbz1leHByLiBJbiBKc1JlbmRlciwgc2ltcGx5IHJldHVybnMgdmFsLlxuXHRcdFx0X3NxOiBmdW5jdGlvbih0b2tlbikge1xuXHRcdFx0XHRpZiAodG9rZW4gPT09IFwiY29uc3RydWN0b3JcIikge1xuXHRcdFx0XHRcdHN5bnRheEVycm9yKFwiXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0b2tlbjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNldHRpbmdzOiB7XG5cdFx0XHRkZWxpbWl0ZXJzOiAkdmlld3NEZWxpbWl0ZXJzLFxuXHRcdFx0YWR2YW5jZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdD8gKFxuXHRcdFx0XHRcdFx0XHQkZXh0ZW5kKCRzdWJTZXR0aW5nc0FkdmFuY2VkLCB2YWx1ZSksXG5cdFx0XHRcdFx0XHRcdCRzdWIuYWR2U2V0KCksXG5cdFx0XHRcdFx0XHRcdCR2aWV3c1NldHRpbmdzXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6ICRzdWJTZXR0aW5nc0FkdmFuY2VkO1xuXHRcdFx0XHR9XG5cdFx0fSxcblx0XHRtYXA6IGRhdGFNYXAgICAgLy8gSWYganNPYnNlcnZhYmxlIGxvYWRlZCBmaXJzdCwgdXNlIHRoYXQgZGVmaW5pdGlvbiBvZiBkYXRhTWFwXG5cdH07XG5cbmZ1bmN0aW9uIGdldERlcml2ZWRNZXRob2QoYmFzZU1ldGhvZCwgbWV0aG9kKSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmV0LFxuXHRcdFx0dGFnID0gdGhpcyxcblx0XHRcdHByZXZCYXNlID0gdGFnLmJhc2U7XG5cblx0XHR0YWcuYmFzZSA9IGJhc2VNZXRob2Q7IC8vIFdpdGhpbiBtZXRob2QgY2FsbCwgY2FsbGluZyB0aGlzLmJhc2Ugd2lsbCBjYWxsIHRoZSBiYXNlIG1ldGhvZFxuXHRcdHJldCA9IG1ldGhvZC5hcHBseSh0YWcsIGFyZ3VtZW50cyk7IC8vIENhbGwgdGhlIG1ldGhvZFxuXHRcdHRhZy5iYXNlID0gcHJldkJhc2U7IC8vIFJlcGxhY2UgdGhpcy5iYXNlIHRvIGJlIHRoZSBiYXNlIG1ldGhvZCBvZiB0aGUgcHJldmlvdXMgY2FsbCwgZm9yIGNoYWluZWQgY2FsbHNcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRNZXRob2QoYmFzZU1ldGhvZCwgbWV0aG9kKSB7XG5cdC8vIEZvciBkZXJpdmVkIG1ldGhvZHMgKG9yIGhhbmRsZXJzIGRlY2xhcmVkIGRlY2xhcmF0aXZlbHkgYXMgaW4ge3s6Zm9vIG9uQ2hhbmdlPX5mb29DaGFuZ2VkfX0gcmVwbGFjZSBieSBhIGRlcml2ZWQgbWV0aG9kLCB0byBhbGxvdyB1c2luZyB0aGlzLmJhc2UoLi4uKVxuXHQvLyBvciB0aGlzLmJhc2VBcHBseShhcmd1bWVudHMpIHRvIGNhbGwgdGhlIGJhc2UgaW1wbGVtZW50YXRpb24uIChFcXVpdmFsZW50IHRvIHRoaXMuX3N1cGVyKC4uLikgYW5kIHRoaXMuX3N1cGVyQXBwbHkoYXJndW1lbnRzKSBpbiBqUXVlcnkgVUkpXG5cdGlmICgkaXNGdW5jdGlvbihtZXRob2QpKSB7XG5cdFx0bWV0aG9kID0gZ2V0RGVyaXZlZE1ldGhvZChcblx0XHRcdFx0IWJhc2VNZXRob2Rcblx0XHRcdFx0XHQ/IG5vb3AgLy8gbm8gYmFzZSBtZXRob2QgaW1wbGVtZW50YXRpb24sIHNvIHVzZSBub29wIGFzIGJhc2UgbWV0aG9kXG5cdFx0XHRcdFx0OiBiYXNlTWV0aG9kLl9kXG5cdFx0XHRcdFx0XHQ/IGJhc2VNZXRob2QgLy8gYmFzZU1ldGhvZCBpcyBhIGRlcml2ZWQgbWV0aG9kLCBzbyB1c2UgaXRcblx0XHRcdFx0XHRcdDogZ2V0RGVyaXZlZE1ldGhvZChub29wLCBiYXNlTWV0aG9kKSwgLy8gYmFzZU1ldGhvZCBpcyBub3QgZGVyaXZlZCBzbyBtYWtlIGl0cyBiYXNlIG1ldGhvZCBiZSB0aGUgbm9vcCBtZXRob2Rcblx0XHRcdFx0bWV0aG9kXG5cdFx0XHQpO1xuXHRcdG1ldGhvZC5fZCA9IChiYXNlTWV0aG9kICYmIGJhc2VNZXRob2QuX2QgfHwgMCkgKyAxOyAvLyBBZGQgZmxhZyBmb3IgZGVyaXZlZCBtZXRob2QgKGluY3JlbWVudGVkIGZvciBkZXJpdmVkIG9mIGRlcml2ZWQuLi4pXG5cdH1cblx0cmV0dXJuIG1ldGhvZDtcbn1cblxuZnVuY3Rpb24gdGFnSGFuZGxlcnNGcm9tUHJvcHModGFnLCB0YWdDdHgpIHtcblx0dmFyIHByb3AsXG5cdFx0cHJvcHMgPSB0YWdDdHgucHJvcHM7XG5cdGZvciAocHJvcCBpbiBwcm9wcykge1xuXHRcdGlmIChySGFzSGFuZGxlcnMudGVzdChwcm9wKSAmJiAhKHRhZ1twcm9wXSAmJiB0YWdbcHJvcF0uZml4KSkgeyAvLyBEb24ndCBvdmVycmlkZSBoYW5kbGVycyB3aXRoIGZpeCBleHBhbmRvICh1c2VkIGluIGRhdGVwaWNrZXIgYW5kIHNwaW5uZXIpXG5cdFx0XHR0YWdbcHJvcF0gPSBwcm9wICE9PSBcImNvbnZlcnRcIiA/IGdldE1ldGhvZCh0YWcuY29uc3RydWN0b3IucHJvdG90eXBlW3Byb3BdLCBwcm9wc1twcm9wXSkgOiBwcm9wc1twcm9wXTtcblx0XHRcdC8vIENvcHkgb3ZlciB0aGUgb25Gb28gcHJvcHMsIGNvbnZlcnQgYW5kIGNvbnZlcnRCYWNrIGZyb20gdGFnQ3R4LnByb3BzIHRvIHRhZyAob3ZlcnJpZGVzIHZhbHVlcyBpbiB0YWdEZWYpLlxuXHRcdFx0Ly8gTm90ZTogdW5zdXBwb3J0ZWQgc2NlbmFyaW86IGlmIGhhbmRsZXJzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBeb25Gb289ZXhwcmVzc2lvbiB0aGlzIHdpbGwgd29yaywgYnV0IGR5bmFtaWNhbGx5IHJlbW92aW5nIHdpbGwgbm90IHdvcmsuXG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJldFZhbCh2YWwpIHtcblx0cmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHtcblx0cmV0dXJuIFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRiZ0JyZWFrKHZhbCkge1xuXHQvLyBVc2FnZSBleGFtcGxlczoge3tkYmc6Li4ufX0sIHt7On5kYmcoLi4uKX19LCB7e2RiZyAuLi4vfX0sIHtee2ZvciAuLi4gb25BZnRlckxpbms9fmRiZ319IGV0Yy5cblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZyhcIkpzUmVuZGVyIGRiZyBicmVha3BvaW50OiBcIiArIHZhbCk7XG5cdFx0dGhyb3cgXCJkYmcgYnJlYWtwb2ludFwiOyAvLyBUbyBicmVhayBoZXJlLCBzdG9wIG9uIGNhdWdodCBleGNlcHRpb25zLlxuXHR9XG5cdGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gdGhpcy5iYXNlID8gdGhpcy5iYXNlQXBwbHkoYXJndW1lbnRzKSA6IHZhbDtcbn1cblxuZnVuY3Rpb24gSnNWaWV3c0Vycm9yKG1lc3NhZ2UpIHtcblx0Ly8gRXJyb3IgZXhjZXB0aW9uIHR5cGUgZm9yIEpzVmlld3MvSnNSZW5kZXJcblx0Ly8gT3ZlcnJpZGUgb2YgJC52aWV3cy5zdWIuRXJyb3IgaXMgcG9zc2libGVcblx0dGhpcy5uYW1lID0gKCQubGluayA/IFwiSnNWaWV3c1wiIDogXCJKc1JlbmRlclwiKSArIFwiIEVycm9yXCI7XG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgdGhpcy5uYW1lO1xufVxuXG5mdW5jdGlvbiAkZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICh0YXJnZXQpIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIHNvdXJjZSkge1xuXHRcdFx0dGFyZ2V0W25hbWVdID0gc291cmNlW25hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG59XG5cbihKc1ZpZXdzRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCkpLmNvbnN0cnVjdG9yID0gSnNWaWV3c0Vycm9yO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09IFRvcC1sZXZlbCBmdW5jdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09XG4vLyB2aWV3cy5kZWxpbWl0ZXJzXG4vLz09PT09PT09PT09PT09PT09PT1cblxuXHQvKipcblx0KiBTZXQgdGhlIHRhZyBvcGVuaW5nIGFuZCBjbG9zaW5nIGRlbGltaXRlcnMgYW5kICdsaW5rJyBjaGFyYWN0ZXIuIERlZmF1bHQgaXMgXCJ7e1wiLCBcIn19XCIgYW5kIFwiXlwiXG5cdCogb3BlbkNoYXJzLCBjbG9zZUNoYXJzOiBvcGVuaW5nIGFuZCBjbG9zaW5nIHN0cmluZ3MsIGVhY2ggd2l0aCB0d28gY2hhcmFjdGVyc1xuXHQqICQudmlld3Muc2V0dGluZ3MuZGVsaW1pdGVycyguLi4pXG5cdCpcblx0KiBAcGFyYW0ge3N0cmluZ30gICBvcGVuQ2hhcnNcblx0KiBAcGFyYW0ge3N0cmluZ30gICBbY2xvc2VDaGFyc11cblx0KiBAcGFyYW0ge3N0cmluZ30gICBbbGlua11cblx0KiBAcmV0dXJucyB7U2V0dGluZ3N9XG5cdCpcblx0KiBHZXQgZGVsaW1pdGVyc1xuXHQqIGRlbGltc0FycmF5ID0gJC52aWV3cy5zZXR0aW5ncy5kZWxpbWl0ZXJzKClcblx0KlxuXHQqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0Ki9cbmZ1bmN0aW9uICR2aWV3c0RlbGltaXRlcnMob3BlbkNoYXJzLCBjbG9zZUNoYXJzLCBsaW5rKSB7XG5cdGlmICghb3BlbkNoYXJzKSB7XG5cdFx0cmV0dXJuICRzdWJTZXR0aW5ncy5kZWxpbWl0ZXJzO1xuXHR9XG5cdGlmICgkaXNBcnJheShvcGVuQ2hhcnMpKSB7XG5cdFx0cmV0dXJuICR2aWV3c0RlbGltaXRlcnMuYXBwbHkoJHZpZXdzLCBvcGVuQ2hhcnMpO1xuXHR9XG5cdGxpbmtDaGFyID0gbGluayA/IGxpbmtbMF0gOiBsaW5rQ2hhcjtcblx0aWYgKCEvXihcXFd8Xyl7NX0kLy50ZXN0KG9wZW5DaGFycyArIGNsb3NlQ2hhcnMgKyBsaW5rQ2hhcikpIHtcblx0XHRlcnJvcihcIkludmFsaWQgZGVsaW1pdGVyc1wiKTsgLy8gTXVzdCBiZSBub24td29yZCBjaGFyYWN0ZXJzLCBhbmQgb3BlbkNoYXJzIGFuZCBjbG9zZUNoYXJzIG11c3QgZWFjaCBiZSBsZW5ndGggMlxuXHR9XG5cdGRlbGltT3BlbkNoYXIwID0gb3BlbkNoYXJzWzBdO1xuXHRkZWxpbU9wZW5DaGFyMSA9IG9wZW5DaGFyc1sxXTtcblx0ZGVsaW1DbG9zZUNoYXIwID0gY2xvc2VDaGFyc1swXTtcblx0ZGVsaW1DbG9zZUNoYXIxID0gY2xvc2VDaGFyc1sxXTtcblxuXHQkc3ViU2V0dGluZ3MuZGVsaW1pdGVycyA9IFtkZWxpbU9wZW5DaGFyMCArIGRlbGltT3BlbkNoYXIxLCBkZWxpbUNsb3NlQ2hhcjAgKyBkZWxpbUNsb3NlQ2hhcjEsIGxpbmtDaGFyXTtcblxuXHQvLyBFc2NhcGUgdGhlIGNoYXJhY3RlcnMgLSBzaW5jZSB0aGV5IGNvdWxkIGJlIHJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyc1xuXHRvcGVuQ2hhcnMgPSBcIlxcXFxcIiArIGRlbGltT3BlbkNoYXIwICsgXCIoXFxcXFwiICsgbGlua0NoYXIgKyBcIik/XFxcXFwiICsgZGVsaW1PcGVuQ2hhcjE7IC8vIERlZmF1bHQgaXMgXCJ7XntcIlxuXHRjbG9zZUNoYXJzID0gXCJcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjAgKyBcIlxcXFxcIiArIGRlbGltQ2xvc2VDaGFyMTsgICAgICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBpcyBcIn19XCJcblx0Ly8gQnVpbGQgcmVnZXggd2l0aCBuZXcgZGVsaW1pdGVyc1xuXHQvLyAgICAgICAgICBbdGFnICAgIChmb2xsb3dlZCBieSAvIHNwYWNlIG9yIH0pICBvciBjdnRyK2NvbG9uIG9yIGh0bWwgb3IgY29kZV0gZm9sbG93ZWQgYnkgc3BhY2UrcGFyYW1zIHRoZW4gY29udmVydEJhY2s/XG5cdHJUYWcgPSBcIig/OihcXFxcdysoPz1bXFxcXC9cXFxcc1xcXFxcIiArIGRlbGltQ2xvc2VDaGFyMCArIFwiXSkpfChcXFxcdyspPyg6KXwoPil8KFxcXFwqKSlcXFxccyooKD86W15cXFxcXCJcblx0XHQrIGRlbGltQ2xvc2VDaGFyMCArIFwiXXxcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjAgKyBcIig/IVxcXFxcIiArIGRlbGltQ2xvc2VDaGFyMSArIFwiKSkqPylcIjtcblxuXHQvLyBNYWtlIHJUYWcgYXZhaWxhYmxlIHRvIEpzVmlld3MgKG9yIG90aGVyIGNvbXBvbmVudHMpIGZvciBwYXJzaW5nIGJpbmRpbmcgZXhwcmVzc2lvbnNcblx0JHN1Yi5yVGFnID0gXCIoPzpcIiArIHJUYWcgKyBcIilcIjtcblx0Ly8gICAgICAgICAgICAgICAgICAgICAgICB7IF4/IHsgICB0YWcrcGFyYW1zIHNsYXNoPyAgb3IgY2xvc2luZ1RhZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGNvbW1lbnRcblx0clRhZyA9IG5ldyBSZWdFeHAoXCIoPzpcIiArIG9wZW5DaGFycyArIHJUYWcgKyBcIihcXFxcLyk/fFxcXFxcIiArIGRlbGltT3BlbkNoYXIwICsgXCIoXFxcXFwiICsgbGlua0NoYXIgKyBcIik/XFxcXFwiICsgZGVsaW1PcGVuQ2hhcjEgKyBcIig/Oig/OlxcXFwvKFxcXFx3KykpXFxcXHMqfCEtLVtcXFxcc1xcXFxTXSo/LS0pKVwiICsgY2xvc2VDaGFycywgXCJnXCIpO1xuXG5cdC8vIERlZmF1bHQ6ICBiaW5kICAgICB0YWdOYW1lICAgICAgICAgY3Z0ICAgY2xuIGh0bWwgY29kZSAgICBwYXJhbXMgICAgICAgICAgICBzbGFzaCAgIGJpbmQyICAgICAgICAgY2xvc2VCbGsgIGNvbW1lbnRcblx0Ly8gICAgICAvKD86eyhcXF4pP3soPzooXFx3Kyg/PVtcXC9cXHN9XSkpfChcXHcrKT8oOil8KD4pfChcXCopKVxccyooKD86W159XXx9KD8hfSkpKj8pKFxcLyk/fHsoXFxeKT97KD86KD86XFwvKFxcdyspKVxccyp8IS0tW1xcc1xcU10qPy0tKSl9fVxuXG5cdCRzdWIuclRtcGwgPSBuZXcgUmVnRXhwKFwiXlxcXFxzfFxcXFxzJHw8Lio+fChbXlxcXFxcXFxcXXxeKVt7fV18XCIgKyBvcGVuQ2hhcnMgKyBcIi4qXCIgKyBjbG9zZUNoYXJzKTtcblx0Ly8gJHN1Yi5yVG1wbCBsb29rcyBmb3IgaW5pdGlhbCBvciBmaW5hbCB3aGl0ZSBzcGFjZSwgaHRtbCB0YWdzIG9yIHsgb3IgfSBjaGFyIG5vdCBwcmVjZWRlZCBieSBcXFxcLCBvciBKc1JlbmRlciB0YWdzIHt7eHh4fX0uXG5cdC8vIEVhY2ggb2YgdGhlc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBOT1QgdG8gYmUgalF1ZXJ5IHNlbGVjdG9yc1xuXHRyZXR1cm4gJHZpZXdzU2V0dGluZ3M7XG59XG5cbi8vPT09PT09PT09XG4vLyBWaWV3LmdldFxuLy89PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0Vmlldyhpbm5lciwgdHlwZSkgeyAvL3ZpZXcuZ2V0KGlubmVyLCB0eXBlKVxuXHRpZiAoIXR5cGUgJiYgaW5uZXIgIT09IHRydWUpIHtcblx0XHQvLyB2aWV3LmdldCh0eXBlKVxuXHRcdHR5cGUgPSBpbm5lcjtcblx0XHRpbm5lciA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHZhciB2aWV3cywgaSwgbCwgZm91bmQsXG5cdFx0dmlldyA9IHRoaXMsXG5cdFx0cm9vdCA9IHR5cGUgPT09IFwicm9vdFwiO1xuXHRcdC8vIHZpZXcuZ2V0KFwicm9vdFwiKSByZXR1cm5zIHZpZXcucm9vdCwgdmlldy5nZXQoKSByZXR1cm5zIHZpZXcucGFyZW50LCB2aWV3LmdldCh0cnVlKSByZXR1cm5zIHZpZXcudmlld3NbMF0uXG5cblx0aWYgKGlubmVyKSB7XG5cdFx0Ly8gR28gdGhyb3VnaCB2aWV3cyAtIHRoaXMgb25lLCBhbmQgYWxsIG5lc3RlZCBvbmVzLCBkZXB0aC1maXJzdCAtIGFuZCByZXR1cm4gZmlyc3Qgb25lIHdpdGggZ2l2ZW4gdHlwZS5cblx0XHQvLyBJZiB0eXBlIGlzIHVuZGVmaW5lZCwgaS5lLiB2aWV3LmdldCh0cnVlKSwgcmV0dXJuIGZpcnN0IGNoaWxkIHZpZXcuXG5cdFx0Zm91bmQgPSB0eXBlICYmIHZpZXcudHlwZSA9PT0gdHlwZSAmJiB2aWV3O1xuXHRcdGlmICghZm91bmQpIHtcblx0XHRcdHZpZXdzID0gdmlldy52aWV3cztcblx0XHRcdGlmICh2aWV3Ll8udXNlS2V5KSB7XG5cdFx0XHRcdGZvciAoaSBpbiB2aWV3cykge1xuXHRcdFx0XHRcdGlmIChmb3VuZCA9IHR5cGUgPyB2aWV3c1tpXS5nZXQoaW5uZXIsIHR5cGUpIDogdmlld3NbaV0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpID0gMCwgbCA9IHZpZXdzLmxlbmd0aDsgIWZvdW5kICYmIGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRmb3VuZCA9IHR5cGUgPyB2aWV3c1tpXS5nZXQoaW5uZXIsIHR5cGUpIDogdmlld3NbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAocm9vdCkge1xuXHRcdC8vIEZpbmQgcm9vdCB2aWV3LiAodmlldyB3aG9zZSBwYXJlbnQgaXMgdG9wIHZpZXcpXG5cdFx0Zm91bmQgPSB2aWV3LnJvb3Q7XG5cdH0gZWxzZSBpZiAodHlwZSkge1xuXHRcdHdoaWxlICh2aWV3ICYmICFmb3VuZCkge1xuXHRcdFx0Ly8gR28gdGhyb3VnaCB2aWV3cyAtIHRoaXMgb25lLCBhbmQgYWxsIHBhcmVudCBvbmVzIC0gYW5kIHJldHVybiBmaXJzdCBvbmUgd2l0aCBnaXZlbiB0eXBlLlxuXHRcdFx0Zm91bmQgPSB2aWV3LnR5cGUgPT09IHR5cGUgPyB2aWV3IDogdW5kZWZpbmVkO1xuXHRcdFx0dmlldyA9IHZpZXcucGFyZW50O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3VuZCA9IHZpZXcucGFyZW50O1xuXHR9XG5cdHJldHVybiBmb3VuZCB8fCB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZEluZGV4KCkge1xuXHR2YXIgdmlldyA9IHRoaXMuZ2V0KFwiaXRlbVwiKTtcblx0cmV0dXJuIHZpZXcgPyB2aWV3LmluZGV4IDogdW5kZWZpbmVkO1xufVxuXG5nZXROZXN0ZWRJbmRleC5kZXBlbmRzID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBbdGhpcy5nZXQoXCJpdGVtXCIpLCBcImluZGV4XCJdO1xufTtcblxuZnVuY3Rpb24gZ2V0SW5kZXgoKSB7XG5cdHJldHVybiB0aGlzLmluZGV4O1xufVxuXG5nZXRJbmRleC5kZXBlbmRzID0gXCJpbmRleFwiO1xuXG4vLz09PT09PT09PT09PT09PT09PVxuLy8gVmlldy5jdHhQcm0sIGV0Yy5cbi8vPT09PT09PT09PT09PT09PT09XG5cbi8qIEludGVybmFsIHByaXZhdGU6IHZpZXcuX2dldE9iKCkgKi9cbmZ1bmN0aW9uIGdldFBhdGhPYmplY3Qob2IsIHBhdGgsIGx0T2IsIGZuKSB7XG5cdC8vIEl0ZXJhdGUgdGhyb3VnaCBwYXRoIHRvIGxhdGUgcGF0aHM6IEBhLmIuYyBwYXRoc1xuXHQvLyBSZXR1cm4gXCJcIiAob3Igbm9vcCBpZiBsZWFmIGlzIGEgZnVuY3Rpb24gQGEuYi5jKC4uLikgKSBpZiBpbnRlcm1lZGlhdGUgb2JqZWN0IG5vdCB5ZXQgYXZhaWxhYmxlXG5cdHZhciBwcmV2T2IsIHRva2VucywgbCxcblx0XHRpID0gMDtcblx0aWYgKGx0T2IgPT09IDEpIHtcblx0XHRmbiA9IDE7XG5cdFx0bHRPYiA9IHVuZGVmaW5lZDtcblx0fVxuXHQvLyBQYXRocyBsaWtlIF5hXmJeYyBvciB+XmFeYl5jIHdpbGwgbm90IHRocm93IGlmIGFuIG9iamVjdCBpbiBwYXRoIGlzIHVuZGVmaW5lZC5cblx0aWYgKHBhdGgpIHtcblx0XHR0b2tlbnMgPSBwYXRoLnNwbGl0KFwiLlwiKTtcblx0XHRsID0gdG9rZW5zLmxlbmd0aDtcblxuXHRcdGZvciAoOyBvYiAmJiBpIDwgbDsgaSsrKSB7XG5cdFx0XHRwcmV2T2IgPSBvYjtcblx0XHRcdG9iID0gdG9rZW5zW2ldID8gb2JbdG9rZW5zW2ldXSA6IG9iO1xuXHRcdH1cblx0fVxuXHRpZiAobHRPYikge1xuXHRcdGx0T2IubHQgPSBsdE9iLmx0IHx8IGk8bDsgLy8gSWYgaSA8IGwgdGhlcmUgd2FzIGFuIG9iamVjdCBpbiB0aGUgcGF0aCBub3QgeWV0IGF2YWlsYWJsZVxuXHR9XG5cdHJldHVybiBvYiA9PT0gdW5kZWZpbmVkXG5cdFx0PyBmbiA/IG5vb3AgOiBcIlwiXG5cdFx0OiBmbiA/IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG9iLmFwcGx5KHByZXZPYiwgYXJndW1lbnRzKTtcblx0XHR9IDogb2I7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRQYXJhbWV0ZXIoa2V5LCB2YWx1ZSwgZ2V0KSB7XG5cdC8vIEhlbHBlciBtZXRob2QgY2FsbGVkIGFzIHZpZXcuY3R4UHJtKGtleSkgZm9yIGhlbHBlcnMgb3IgdGVtcGxhdGUgcGFyYW1ldGVycyB+Zm9vIC0gZnJvbSBjb21waWxlZCB0ZW1wbGF0ZSBvciBmcm9tIGNvbnRleHQgY2FsbGJhY2tcblx0dmFyIHdyYXBwZWQsIGRlcHMsIHJlcywgb2JzQ3R4UHJtLCB0YWdFbHNlLCBjYWxsVmlldywgbmV3UmVzLFxuXHRcdHN0b3JlVmlldyA9IHRoaXMsXG5cdFx0aXNVcGRhdGUgPSAhaXNSZW5kZXJDYWxsICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxLFxuXHRcdHN0b3JlID0gc3RvcmVWaWV3LmN0eDtcblx0aWYgKGtleSkge1xuXHRcdGlmICghc3RvcmVWaWV3Ll8pIHsgLy8gdGFnQ3R4LmN0eFBybSgpIGNhbGxcblx0XHRcdHRhZ0Vsc2UgPSBzdG9yZVZpZXcuaW5kZXg7XG5cdFx0XHRzdG9yZVZpZXcgPSBzdG9yZVZpZXcudGFnO1xuXHRcdH1cblx0XHRjYWxsVmlldyA9IHN0b3JlVmlldztcblx0XHRpZiAoc3RvcmUgJiYgc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAoc3RvcmUgPSAkaGVscGVycykuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmVzID0gc3RvcmVba2V5XTtcblx0XHRcdGlmIChrZXkgPT09IFwidGFnXCIgfHwga2V5ID09PSBcInRhZ0N0eFwiIHx8IGtleSA9PT0gXCJyb290XCIgfHwga2V5ID09PSBcInBhcmVudFRhZ3NcIikge1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdG9yZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCFpc1JlbmRlckNhbGwgJiYgc3RvcmVWaWV3LnRhZ0N0eCB8fCBzdG9yZVZpZXcubGlua2VkKSB7IC8vIERhdGEtbGlua2VkIHZpZXcsIG9yIHRhZyBpbnN0YW5jZVxuXHRcdFx0aWYgKCFyZXMgfHwgIXJlcy5fY3hwKSB7XG5cdFx0XHRcdC8vIE5vdCBhIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdC8vIFNldCBzdG9yZVZpZXcgdG8gdGFnIChpZiB0aGlzIGlzIGEgdGFnLmN0eFBybSgpIGNhbGwpIG9yIHRvIHJvb3QgdmlldyAoXCJkYXRhXCIgdmlldyBvZiBsaW5rZWQgdGVtcGxhdGUpXG5cdFx0XHRcdHN0b3JlVmlldyA9IHN0b3JlVmlldy50YWdDdHggfHwgJGlzRnVuY3Rpb24ocmVzKVxuXHRcdFx0XHRcdD8gc3RvcmVWaWV3IC8vIElzIGEgdGFnLCBub3QgYSB2aWV3LCBvciBpcyBhIGNvbXB1dGVkIGNvbnRleHR1YWwgcGFyYW1ldGVyLCBzbyBzY29wZSB0byB0aGUgY2FsbFZpZXcsIG5vIHRoZSAnc2NvcGUgdmlldydcblx0XHRcdFx0XHQ6IChzdG9yZVZpZXcgPSBzdG9yZVZpZXcuc2NvcGUgfHwgc3RvcmVWaWV3LFxuXHRcdFx0XHRcdFx0IXN0b3JlVmlldy5pc1RvcCAmJiBzdG9yZVZpZXcuY3R4LnRhZyAvLyBJZiB0aGlzIHZpZXcgaXMgaW4gYSB0YWcsIHNldCBzdG9yZVZpZXcgdG8gdGhlIHRhZ1xuXHRcdFx0XHRcdFx0XHR8fCBzdG9yZVZpZXcpO1xuXHRcdFx0XHRpZiAocmVzICE9PSB1bmRlZmluZWQgJiYgc3RvcmVWaWV3LnRhZ0N0eCkge1xuXHRcdFx0XHRcdC8vIElmIHN0b3JlVmlldyBpcyBhIHRhZywgYnV0IHRoZSBjb250ZXh0dWFsIHBhcmFtZXRlciBoYXMgYmVlbiBzZXQgYXQgYXQgaGlnaGVyIGxldmVsIChlLmcuIGhlbHBlcnMpLi4uXG5cdFx0XHRcdFx0c3RvcmVWaWV3ID0gc3RvcmVWaWV3LnRhZ0N0eC52aWV3LnNjb3BlOyAvLyAgdGhlbiBtb3ZlIHN0b3JlVmlldyB0byB0aGUgb3V0ZXIgbGV2ZWwgKHNjb3BlIG9mIHRhZyBjb250YWluZXIgdmlldylcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9yZSA9IHN0b3JlVmlldy5fb2Nwcztcblx0XHRcdFx0cmVzID0gc3RvcmUgJiYgc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdG9yZVtrZXldIHx8IHJlcztcblx0XHRcdFx0aWYgKCEocmVzICYmIHJlcy5fY3hwKSAmJiAoZ2V0IHx8IGlzVXBkYXRlKSkge1xuXHRcdFx0XHRcdC8vIENyZWF0ZSBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdFx0KHN0b3JlIHx8IChzdG9yZVZpZXcuX29jcHMgPSBzdG9yZVZpZXcuX29jcHMgfHwge30pKVtrZXldXG5cdFx0XHRcdFx0XHQ9IHJlc1xuXHRcdFx0XHRcdFx0PSBbe1xuXHRcdFx0XHRcdFx0XHRfb2NwOiByZXMsIC8vIFRoZSBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyIHZhbHVlXG5cdFx0XHRcdFx0XHRcdF92dzogY2FsbFZpZXcsXG5cdFx0XHRcdFx0XHRcdF9rZXk6IGtleVxuXHRcdFx0XHRcdFx0fV07XG5cdFx0XHRcdFx0cmVzLl9jeHAgPSB7XG5cdFx0XHRcdFx0XHRwYXRoOiBfb2NwLFxuXHRcdFx0XHRcdFx0aW5kOiAwLFxuXHRcdFx0XHRcdFx0dXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbCwgcGF0aCkge1xuXHRcdFx0XHRcdFx0XHQkLm9ic2VydmFibGUocmVzWzBdKS5zZXRQcm9wZXJ0eShfb2NwLCB2YWwpOyAvLyBTZXQgdGhlIHZhbHVlIChyZXNbMF0uX29jcClcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKG9ic0N0eFBybSA9IHJlcyAmJiByZXMuX2N4cCkge1xuXHRcdFx0XHQvLyBJZiB0aGlzIGhlbHBlciByZXNvdXJjZSBpcyBhbiBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdFx0XHRcdGRlcHMgPSByZXNbMV0gPyAkc3ViLl9jZW8ocmVzWzFdLmRlcHMpIDogW19vY3BdOyAvLyBmbiBkZXBzICh3aXRoIGFueSBleHByT2JzIGNsb25lZCB1c2luZyAkc3ViLl9jZW8pXG5cdFx0XHRcdFx0ZGVwcy51bnNoaWZ0KHJlc1swXSk7IC8vIHZpZXdcblx0XHRcdFx0XHRkZXBzLl9jeHAgPSBvYnNDdHhQcm07XG5cdFx0XHRcdFx0Ly8gSW4gYSBjb250ZXh0IGNhbGxiYWNrIGZvciBhIGNvbnRleHR1YWwgcGFyYW0sIHdlIHNldCBnZXQgPSB0cnVlLCB0byBnZXQgY3R4UHJtICBbdmlldywgZGVwZW5kZW5jaWVzLi4uXSBhcnJheSAtIG5lZWRlZCBmb3Igb2JzZXJ2ZSBjYWxsXG5cdFx0XHRcdFx0cmV0dXJuIGRlcHM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFnRWxzZSA9IG9ic0N0eFBybS50YWdFbHNlO1xuXHRcdFx0XHRuZXdSZXMgPSByZXNbMV0gLy8gbGlua0ZuIGZvciBjb21waWxlZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0PyBvYnNDdHhQcm0udGFnICYmIG9ic0N0eFBybS50YWcuY3Z0QXJnc1xuXHRcdFx0XHRcdFx0PyBvYnNDdHhQcm0udGFnLmN2dEFyZ3ModGFnRWxzZSwgMSlbb2JzQ3R4UHJtLmluZF0gLy8gPSB0YWcuYm5kQXJncygpIC0gZm9yIHRhZyBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHRcdFx0OiByZXNbMV0ocmVzWzBdLmRhdGEsIHJlc1swXSwgJHN1YikgICAgLy8gPSBmbihkYXRhLCB2aWV3LCAkc3ViKSBmb3IgY29tcGlsZWQgYmluZGluZyBleHByZXNzaW9uXG5cdFx0XHRcdFx0OiByZXNbMF0uX29jcDsgLy8gT2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlciAodW5pbml0aWFsaXplZCwgb3IgaW5pdGlhbGl6ZWQgYXMgc3RhdGljIGV4cHJlc3Npb24sIHNvIG5vIHBhdGggZGVwZW5kZW5jaWVzKVxuXHRcdFx0XHRpZiAoaXNVcGRhdGUpIHtcblx0XHRcdFx0XHQkc3ViLl91Y3Aoa2V5LCB2YWx1ZSwgc3RvcmVWaWV3LCBvYnNDdHhQcm0pOyAvLyBVcGRhdGUgb2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHRcdHJldHVybiBzdG9yZVZpZXc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzID0gbmV3UmVzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocmVzICYmICRpc0Z1bmN0aW9uKHJlcykpIHtcblx0XHRcdC8vIElmIGEgaGVscGVyIGlzIG9mIHR5cGUgZnVuY3Rpb24gd2Ugd2lsbCB3cmFwIGl0LCBzbyBpZiBjYWxsZWQgd2l0aCBubyB0aGlzIHBvaW50ZXIgaXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcblx0XHRcdC8vIHZpZXcgYXMgJ3RoaXMnIGNvbnRleHQuIElmIHRoZSBoZWxwZXIgfmZvbygpIHdhcyBpbiBhIGRhdGEtbGluayBleHByZXNzaW9uLCB0aGUgdmlldyB3aWxsIGhhdmUgYSAndGVtcG9yYXJ5JyBsaW5rQ3R4IHByb3BlcnR5IHRvby5cblx0XHRcdC8vIE5vdGUgdGhhdCBoZWxwZXIgZnVuY3Rpb25zIG9uIGRlZXBlciBwYXRocyB3aWxsIGhhdmUgc3BlY2lmaWMgdGhpcyBwb2ludGVycywgZnJvbSB0aGUgcHJlY2VkaW5nIHBhdGguXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgfnV0aWwuZm9vKCkgd2lsbCBoYXZlIHRoZSB+dXRpbCBvYmplY3QgYXMgJ3RoaXMnIHBvaW50ZXJcblx0XHRcdHdyYXBwZWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5hcHBseSgoIXRoaXMgfHwgdGhpcyA9PT0gZ2xvYmFsKSA/IGNhbGxWaWV3IDogdGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cdFx0XHQkZXh0ZW5kKHdyYXBwZWQsIHJlcyk7IC8vIEF0dGFjaCBzYW1lIGV4cGFuZG9zIChpZiBhbnkpIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uXG5cdFx0fVxuXHRcdHJldHVybiB3cmFwcGVkIHx8IHJlcztcblx0fVxufVxuXG4vKiBJbnRlcm5hbCBwcml2YXRlOiB2aWV3Ll9nZXRUbXBsKCkgKi9cbmZ1bmN0aW9uIGdldFRlbXBsYXRlKHRtcGwpIHtcblx0cmV0dXJuIHRtcGwgJiYgKHRtcGwuZm5cblx0XHQ/IHRtcGxcblx0XHQ6IHRoaXMuZ2V0UnNjKFwidGVtcGxhdGVzXCIsIHRtcGwpIHx8ICR0ZW1wbGF0ZXModG1wbCkpOyAvLyBub3QgeWV0IGNvbXBpbGVkXG59XG5cbi8vPT09PT09PT09PT09PT1cbi8vIHZpZXdzLl9jbnZ0XG4vLz09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbnZlcnRWYWwoY29udmVydGVyLCB2aWV3LCB0YWdDdHgsIG9uRXJyb3IpIHtcblx0Ly8gQ2FsbGVkIGZyb20gY29tcGlsZWQgdGVtcGxhdGUgY29kZSBmb3Ige3s6fX1cblx0Ly8gc2VsZiBpcyB0ZW1wbGF0ZSBvYmplY3Qgb3IgbGlua0N0eCBvYmplY3Rcblx0dmFyIHRhZywgbGlua0N0eCwgdmFsdWUsIGFyZ3NMZW4sIGJpbmRUbyxcblx0XHQvLyBJZiB0YWdDdHggaXMgYW4gaW50ZWdlciwgdGhlbiBpdCBpcyB0aGUga2V5IGZvciB0aGUgY29tcGlsZWQgZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSBib3VuZFRhZyB0YWdDdHhcblx0XHRib3VuZFRhZyA9IHR5cGVvZiB0YWdDdHggPT09IFwibnVtYmVyXCIgJiYgdmlldy50bXBsLmJuZHNbdGFnQ3R4LTFdO1xuXG5cdGlmIChvbkVycm9yID09PSB1bmRlZmluZWQgJiYgYm91bmRUYWcgJiYgYm91bmRUYWcuX2xyKSB7IC8vIGxhdGVSZW5kZXJcblx0XHRvbkVycm9yID0gXCJcIjtcblx0fVxuXHRpZiAob25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGFnQ3R4ID0gb25FcnJvciA9IHtwcm9wczoge30sIGFyZ3M6IFtvbkVycm9yXX07XG5cdH0gZWxzZSBpZiAoYm91bmRUYWcpIHtcblx0XHR0YWdDdHggPSBib3VuZFRhZyh2aWV3LmRhdGEsIHZpZXcsICRzdWIpO1xuXHR9XG5cdGJvdW5kVGFnID0gYm91bmRUYWcuX2JkICYmIGJvdW5kVGFnO1xuXHRpZiAoY29udmVydGVyIHx8IGJvdW5kVGFnKSB7XG5cdFx0bGlua0N0eCA9IHZpZXcuX2xjOyAvLyBGb3IgZGF0YS1saW5rPVwie2N2dDouLi59XCIuLi4gU2VlIG9uRGF0YUxpbmtlZFRhZ0NoYW5nZVxuXHRcdHRhZyA9IGxpbmtDdHggJiYgbGlua0N0eC50YWc7XG5cdFx0dGFnQ3R4LnZpZXcgPSB2aWV3O1xuXHRcdGlmICghdGFnKSB7XG5cdFx0XHR0YWcgPSAkZXh0ZW5kKG5ldyAkc3ViLl90ZygpLCB7XG5cdFx0XHRcdF86IHtcblx0XHRcdFx0XHRibmQ6IGJvdW5kVGFnLFxuXHRcdFx0XHRcdHVubGlua2VkOiB0cnVlLFxuXHRcdFx0XHRcdGx0OiB0YWdDdHgubHQgLy8gSWYgYSBsYXRlIHBhdGggQHNvbWUucGF0aCBoYXMgbm90IHJldHVybmVkIEBzb21lIG9iamVjdCwgbWFyayB0YWcgYXMgbGF0ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbmxpbmU6ICFsaW5rQ3R4LFxuXHRcdFx0XHR0YWdOYW1lOiBcIjpcIixcblx0XHRcdFx0Y29udmVydDogY29udmVydGVyLFxuXHRcdFx0XHRvbkFycmF5Q2hhbmdlOiB0cnVlLFxuXHRcdFx0XHRmbG93OiB0cnVlLFxuXHRcdFx0XHR0YWdDdHg6IHRhZ0N0eCxcblx0XHRcdFx0dGFnQ3R4czogW3RhZ0N0eF0sXG5cdFx0XHRcdF9pczogXCJ0YWdcIlxuXHRcdFx0fSk7XG5cdFx0XHRhcmdzTGVuID0gdGFnQ3R4LmFyZ3MubGVuZ3RoO1xuXHRcdFx0aWYgKGFyZ3NMZW4+MSkge1xuXHRcdFx0XHRiaW5kVG8gPSB0YWcuYmluZFRvID0gW107XG5cdFx0XHRcdHdoaWxlIChhcmdzTGVuLS0pIHtcblx0XHRcdFx0XHRiaW5kVG8udW5zaGlmdChhcmdzTGVuKTsgLy8gQmluZCB0byBhbGwgdGhlIGFyZ3VtZW50cyAtIGdlbmVyYXRlIGJpbmRUbyBhcnJheTogWzAsMSwyLi4uXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobGlua0N0eCkge1xuXHRcdFx0XHRsaW5rQ3R4LnRhZyA9IHRhZztcblx0XHRcdFx0dGFnLmxpbmtDdHggPSBsaW5rQ3R4O1xuXHRcdFx0fVxuXHRcdFx0dGFnQ3R4LmN0eCA9IGV4dGVuZEN0eCh0YWdDdHguY3R4LCAobGlua0N0eCA/IGxpbmtDdHgudmlldyA6IHZpZXcpLmN0eCk7XG5cdFx0XHR0YWdIYW5kbGVyc0Zyb21Qcm9wcyh0YWcsIHRhZ0N0eCk7XG5cdFx0fVxuXHRcdHRhZy5fZXIgPSBvbkVycm9yICYmIHZhbHVlO1xuXHRcdHRhZy5jdHggPSB0YWdDdHguY3R4IHx8IHRhZy5jdHggfHwge307XG5cdFx0dGFnQ3R4LmN0eCA9IHVuZGVmaW5lZDtcblx0XHR2YWx1ZSA9IHRhZy5jdnRBcmdzKClbMF07IC8vIElmIHRoZXJlIGlzIGEgY29udmVydEJhY2sgYnV0IG5vIGNvbnZlcnQsIGNvbnZlcnRlciB3aWxsIGJlIFwidHJ1ZVwiXG5cdFx0dGFnLl9lciA9IG9uRXJyb3IgJiYgdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0dmFsdWUgPSB0YWdDdHguYXJnc1swXTtcblx0fVxuXG5cdC8vIENhbGwgb25SZW5kZXIgKHVzZWQgYnkgSnNWaWV3cyBpZiBwcmVzZW50LCB0byBhZGQgYmluZGluZyBhbm5vdGF0aW9ucyBhcm91bmQgcmVuZGVyZWQgY29udGVudClcblx0dmFsdWUgPSBib3VuZFRhZyAmJiB2aWV3Ll8ub25SZW5kZXJcblx0XHQ/IHZpZXcuXy5vblJlbmRlcih2YWx1ZSwgdmlldywgdGFnKVxuXHRcdDogdmFsdWU7XG5cdHJldHVybiB2YWx1ZSAhPSB1bmRlZmluZWQgPyB2YWx1ZSA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRBcmdzKHRhZ0Vsc2UsIGJvdW5kKSB7IC8vIHRhZy5jdnRBcmdzKCkgb3IgdGFnLmN2dEFyZ3ModGFnRWxzZT8sIHRydWU/KVxuXHR2YXIgbCwga2V5LCBib3VuZEFyZ3MsIGFyZ3MsIGJpbmRGcm9tLCB0YWcsIGNvbnZlcnRlcixcblx0XHR0YWdDdHggPSB0aGlzO1xuXG5cdGlmICh0YWdDdHgudGFnTmFtZSkge1xuXHRcdHRhZyA9IHRhZ0N0eDtcblx0XHR0YWdDdHggPSAodGFnLnRhZ0N0eHMgfHwgW3RhZ0N0eF0pW3RhZ0Vsc2V8fDBdO1xuXHRcdGlmICghdGFnQ3R4KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHRhZyA9IHRhZ0N0eC50YWc7XG5cdH1cblxuXHRiaW5kRnJvbSA9IHRhZy5iaW5kRnJvbTtcblx0YXJncyA9IHRhZ0N0eC5hcmdzO1xuXG5cdGlmICgoY29udmVydGVyID0gdGFnLmNvbnZlcnQpICYmIFwiXCIgKyBjb252ZXJ0ZXIgPT09IGNvbnZlcnRlcikge1xuXHRcdGNvbnZlcnRlciA9IGNvbnZlcnRlciA9PT0gXCJ0cnVlXCJcblx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHQ6ICh0YWdDdHgudmlldy5nZXRSc2MoXCJjb252ZXJ0ZXJzXCIsIGNvbnZlcnRlcikgfHwgZXJyb3IoXCJVbmtub3duIGNvbnZlcnRlcjogJ1wiICsgY29udmVydGVyICsgXCInXCIpKTtcblx0fVxuXG5cdGlmIChjb252ZXJ0ZXIgJiYgIWJvdW5kKSB7IC8vIElmIHRoZXJlIGlzIGEgY29udmVydGVyLCB1c2UgYSBjb3B5IG9mIHRoZSB0YWdDdHguYXJncyBhcnJheSBmb3IgcmVuZGVyaW5nLCBhbmQgcmVwbGFjZSB0aGUgYXJnc1swXSBpblxuXHRcdGFyZ3MgPSBhcmdzLnNsaWNlKCk7IC8vIHRoZSBjb3BpZWQgYXJyYXkgd2l0aCB0aGUgY29udmVydGVkIHZhbHVlLiBCdXQgd2UgZG8gbm90IG1vZGlmeSB0aGUgdmFsdWUgb2YgdGFnLnRhZ0N0eC5hcmdzWzBdICh0aGUgb3JpZ2luYWwgYXJncyBhcnJheSlcblx0fVxuXHRpZiAoYmluZEZyb20pIHsgLy8gR2V0IHRoZSB2YWx1ZXMgb2YgdGhlIGJvdW5kQXJnc1xuXHRcdGJvdW5kQXJncyA9IFtdO1xuXHRcdGwgPSBiaW5kRnJvbS5sZW5ndGg7XG5cdFx0d2hpbGUgKGwtLSkge1xuXHRcdFx0a2V5ID0gYmluZEZyb21bbF07XG5cdFx0XHRib3VuZEFyZ3MudW5zaGlmdChhcmdPclByb3AodGFnQ3R4LCBrZXkpKTtcblx0XHR9XG5cdFx0aWYgKGJvdW5kKSB7XG5cdFx0XHRhcmdzID0gYm91bmRBcmdzOyAvLyBDYWxsIHRvIGJuZEFyZ3MoKSAtIHJldHVybnMgdGhlIGJvdW5kQXJnc1xuXHRcdH1cblx0fVxuXHRpZiAoY29udmVydGVyKSB7XG5cdFx0Y29udmVydGVyID0gY29udmVydGVyLmFwcGx5KHRhZywgYm91bmRBcmdzIHx8IGFyZ3MpO1xuXHRcdGlmIChjb252ZXJ0ZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7IC8vIFJldHVybmluZyB1bmRlZmluZWQgZnJvbSBhIGNvbnZlcnRlciBpcyBlcXVpdmFsZW50IHRvIG5vdCBoYXZpbmcgYSBjb252ZXJ0ZXIuXG5cdFx0fVxuXHRcdGJpbmRGcm9tID0gYmluZEZyb20gfHwgWzBdO1xuXHRcdGwgPSBiaW5kRnJvbS5sZW5ndGg7XG5cdFx0aWYgKCEkaXNBcnJheShjb252ZXJ0ZXIpIHx8IGNvbnZlcnRlci5sZW5ndGggIT09IGwpIHtcblx0XHRcdGNvbnZlcnRlciA9IFtjb252ZXJ0ZXJdO1xuXHRcdFx0YmluZEZyb20gPSBbMF07XG5cdFx0XHRsID0gMTtcblx0XHR9XG5cdFx0aWYgKGJvdW5kKSB7ICAgICAgICAvLyBDYWxsIHRvIGJuZEFyZ3MoKSAtIHNvIGFwcGx5IGNvbnZlcnRlciB0byBhbGwgYm91bmRBcmdzXG5cdFx0XHRhcmdzID0gY29udmVydGVyOyAvLyBUaGUgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGZyb20gdGhlIGNvbnZlcnRlclxuXHRcdH0gZWxzZSB7ICAgICAgICAgICAgLy8gQ2FsbCB0byBjdnRBcmdzKClcblx0XHRcdHdoaWxlIChsLS0pIHtcblx0XHRcdFx0a2V5ID0gYmluZEZyb21bbF07XG5cdFx0XHRcdGlmICgra2V5ID09PSBrZXkpIHtcblx0XHRcdFx0XHRhcmdzW2tleV0gPSBjb252ZXJ0ZXJbbF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGFyZ3M7XG59XG5cbmZ1bmN0aW9uIGFyZ09yUHJvcChjb250ZXh0LCBrZXkpIHtcblx0Y29udGV4dCA9IGNvbnRleHRbK2tleSA9PT0ga2V5ID8gXCJhcmdzXCIgOiBcInByb3BzXCJdO1xuXHRyZXR1cm4gY29udGV4dCAmJiBjb250ZXh0W2tleV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRCb3VuZEFyZ3ModGFnRWxzZSkgeyAvLyB0YWcuYm5kQXJncygpXG5cdHJldHVybiB0aGlzLmN2dEFyZ3ModGFnRWxzZSwgMSk7XG59XG5cbi8vPT09PT09PT09PT09PVxuLy8gdmlld3MudGFnXG4vLz09PT09PT09PT09PT1cblxuLyogdmlldy5nZXRSc2MoKSAqL1xuZnVuY3Rpb24gZ2V0UmVzb3VyY2UocmVzb3VyY2VUeXBlLCBpdGVtTmFtZSkge1xuXHR2YXIgcmVzLCBzdG9yZSxcblx0XHR2aWV3ID0gdGhpcztcblx0aWYgKFwiXCIgKyBpdGVtTmFtZSA9PT0gaXRlbU5hbWUpIHtcblx0XHR3aGlsZSAoKHJlcyA9PT0gdW5kZWZpbmVkKSAmJiB2aWV3KSB7XG5cdFx0XHRzdG9yZSA9IHZpZXcudG1wbCAmJiB2aWV3LnRtcGxbcmVzb3VyY2VUeXBlXTtcblx0XHRcdHJlcyA9IHN0b3JlICYmIHN0b3JlW2l0ZW1OYW1lXTtcblx0XHRcdHZpZXcgPSB2aWV3LnBhcmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcyB8fCAkdmlld3NbcmVzb3VyY2VUeXBlXVtpdGVtTmFtZV07XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFnKHRhZ05hbWUsIHBhcmVudFZpZXcsIHRtcGwsIHRhZ0N0eHMsIGlzVXBkYXRlLCBvbkVycm9yKSB7XG5cdGZ1bmN0aW9uIGJpbmRUb09yQmluZEZyb20odHlwZSkge1xuXHRcdHZhciBiaW5kQXJyYXkgPSB0YWdbdHlwZV07XG5cblx0XHRpZiAoYmluZEFycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGJpbmRBcnJheSA9ICRpc0FycmF5KGJpbmRBcnJheSkgPyBiaW5kQXJyYXkgOiBbYmluZEFycmF5XTtcblx0XHRcdG0gPSBiaW5kQXJyYXkubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKG0tLSkge1xuXHRcdFx0XHRrZXkgPSBiaW5kQXJyYXlbbV07XG5cdFx0XHRcdGlmICghaXNOYU4ocGFyc2VJbnQoa2V5KSkpIHtcblx0XHRcdFx0XHRiaW5kQXJyYXlbbV0gPSBwYXJzZUludChrZXkpOyAvLyBDb252ZXJ0IFwiMFwiIHRvIDAsICBldGMuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYmluZEFycmF5IHx8IFswXTtcblx0fVxuXG5cdHBhcmVudFZpZXcgPSBwYXJlbnRWaWV3IHx8IHRvcFZpZXc7XG5cdHZhciB0YWcsIHRhZ0RlZiwgdGVtcGxhdGUsIHRhZ3MsIGF0dHIsIHBhcmVudFRhZywgbCwgbSwgbiwgaXRlbVJldCwgdGFnQ3R4LCB0YWdDdHhDdHgsIGN0eFBybSwgYmluZFRvLCBiaW5kRnJvbSwgaW5pdFZhbCxcblx0XHRjb250ZW50LCBjYWxsSW5pdCwgbWFwRGVmLCB0aGlzTWFwLCBhcmdzLCBiZEFyZ3MsIHByb3BzLCB0YWdEYXRhTWFwLCBjb250ZW50Q3R4LCBrZXksIGJpbmRGcm9tTGVuZ3RoLCBiaW5kVG9MZW5ndGgsIGxpbmtlZEVsZW1lbnQsIGRlZmF1bHRDdHgsXG5cdFx0aSA9IDAsXG5cdFx0cmV0ID0gXCJcIixcblx0XHRsaW5rQ3R4ID0gcGFyZW50Vmlldy5fbGMgfHwgZmFsc2UsIC8vIEZvciBkYXRhLWxpbms9XCJ7bXlUYWcuLi59XCIuLi4gU2VlIG9uRGF0YUxpbmtlZFRhZ0NoYW5nZVxuXHRcdGN0eCA9IHBhcmVudFZpZXcuY3R4LFxuXHRcdHBhcmVudFRtcGwgPSB0bXBsIHx8IHBhcmVudFZpZXcudG1wbCxcblx0XHQvLyBJZiB0YWdDdHhzIGlzIGFuIGludGVnZXIsIHRoZW4gaXQgaXMgdGhlIGtleSBmb3IgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgYm91bmRUYWcgdGFnQ3R4c1xuXHRcdGJvdW5kVGFnID0gdHlwZW9mIHRhZ0N0eHMgPT09IFwibnVtYmVyXCIgJiYgcGFyZW50Vmlldy50bXBsLmJuZHNbdGFnQ3R4cy0xXTtcblxuXHRpZiAodGFnTmFtZS5faXMgPT09IFwidGFnXCIpIHtcblx0XHR0YWcgPSB0YWdOYW1lO1xuXHRcdHRhZ05hbWUgPSB0YWcudGFnTmFtZTtcblx0XHR0YWdDdHhzID0gdGFnLnRhZ0N0eHM7XG5cdFx0dGVtcGxhdGUgPSB0YWcudGVtcGxhdGU7XG5cdH0gZWxzZSB7XG5cdFx0dGFnRGVmID0gcGFyZW50Vmlldy5nZXRSc2MoXCJ0YWdzXCIsIHRhZ05hbWUpIHx8IGVycm9yKFwiVW5rbm93biB0YWc6IHt7XCIgKyB0YWdOYW1lICsgXCJ9fSBcIik7XG5cdFx0dGVtcGxhdGUgPSB0YWdEZWYudGVtcGxhdGU7XG5cdH1cblx0aWYgKG9uRXJyb3IgPT09IHVuZGVmaW5lZCAmJiBib3VuZFRhZyAmJiAoYm91bmRUYWcuX2xyID0gKHRhZ0RlZi5sYXRlUmVuZGVyICYmIGJvdW5kVGFnLl9sciE9PSBmYWxzZSB8fCBib3VuZFRhZy5fbHIpKSkge1xuXHRcdG9uRXJyb3IgPSBcIlwiOyAvLyBJZiBsYXRlUmVuZGVyLCBzZXQgdGVtcG9yYXJ5IG9uRXJyb3IsIHRvIHNraXAgaW5pdGlhbCByZW5kZXJpbmcgKGFuZCByZW5kZXIganVzdCBcIlwiKVxuXHR9XG5cdGlmIChvbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXQgKz0gb25FcnJvcjtcblx0XHR0YWdDdHhzID0gb25FcnJvciA9IFt7cHJvcHM6IHt9LCBhcmdzOiBbXSwgcGFyYW1zOiB7cHJvcHM6e319fV07XG5cdH0gZWxzZSBpZiAoYm91bmRUYWcpIHtcblx0XHR0YWdDdHhzID0gYm91bmRUYWcocGFyZW50Vmlldy5kYXRhLCBwYXJlbnRWaWV3LCAkc3ViKTtcblx0fVxuXG5cdGwgPSB0YWdDdHhzLmxlbmd0aDtcblx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHR0YWdDdHggPSB0YWdDdHhzW2ldO1xuXHRcdGNvbnRlbnQgPSB0YWdDdHgudG1wbDtcblx0XHRpZiAoIWxpbmtDdHggfHwgIWxpbmtDdHgudGFnIHx8IGkgJiYgIWxpbmtDdHgudGFnLmlubGluZSB8fCB0YWcuX2VyIHx8IGNvbnRlbnQgJiYgK2NvbnRlbnQ9PT1jb250ZW50KSB7XG5cdFx0XHQvLyBJbml0aWFsaXplIHRhZ0N0eFxuXHRcdFx0Ly8gRm9yIGJsb2NrIHRhZ3MsIHRhZ0N0eC50bXBsIGlzIGFuIGludGVnZXIgPiAwXG5cdFx0XHRpZiAoY29udGVudCAmJiBwYXJlbnRUbXBsLnRtcGxzKSB7XG5cdFx0XHRcdHRhZ0N0eC50bXBsID0gdGFnQ3R4LmNvbnRlbnQgPSBwYXJlbnRUbXBsLnRtcGxzW2NvbnRlbnQgLSAxXTsgLy8gU2V0IHRoZSB0bXBsIHByb3BlcnR5IHRvIHRoZSBjb250ZW50IG9mIHRoZSBibG9jayB0YWdcblx0XHRcdH1cblx0XHRcdHRhZ0N0eC5pbmRleCA9IGk7XG5cdFx0XHR0YWdDdHguY3R4UHJtID0gY29udGV4dFBhcmFtZXRlcjtcblx0XHRcdHRhZ0N0eC5yZW5kZXIgPSByZW5kZXJDb250ZW50O1xuXHRcdFx0dGFnQ3R4LmN2dEFyZ3MgPSBjb252ZXJ0QXJncztcblx0XHRcdHRhZ0N0eC5ibmRBcmdzID0gY29udmVydEJvdW5kQXJncztcblx0XHRcdHRhZ0N0eC52aWV3ID0gcGFyZW50Vmlldztcblx0XHRcdHRhZ0N0eC5jdHggPSBleHRlbmRDdHgoZXh0ZW5kQ3R4KHRhZ0N0eC5jdHgsIHRhZ0RlZiAmJiB0YWdEZWYuY3R4KSwgY3R4KTsgLy8gQ2xvbmUgYW5kIGV4dGVuZCBwYXJlbnRWaWV3LmN0eFxuXHRcdH1cblx0XHRpZiAodG1wbCA9IHRhZ0N0eC5wcm9wcy50bXBsKSB7XG5cdFx0XHQvLyBJZiB0aGUgdG1wbCBwcm9wZXJ0eSBpcyBvdmVycmlkZGVuLCBzZXQgdGhlIHZhbHVlICh3aGVuIGluaXRpYWxpemluZywgb3IsIGluIGNhc2Ugb2YgYmluZGluZzogXnRtcGw9Li4uLCB3aGVuIHVwZGF0aW5nKVxuXHRcdFx0dGFnQ3R4LnRtcGwgPSBwYXJlbnRWaWV3Ll9nZXRUbXBsKHRtcGwpO1xuXHRcdFx0dGFnQ3R4LmNvbnRlbnQgPSB0YWdDdHguY29udGVudCB8fCB0YWdDdHgudG1wbDtcblx0XHR9XG5cblx0XHRpZiAoIXRhZykge1xuXHRcdFx0Ly8gVGhpcyB3aWxsIG9ubHkgYmUgaGl0IGZvciBpbml0aWFsIHRhZ0N0eCAobm90IGZvciB7e2Vsc2V9fSkgLSBpZiB0aGUgdGFnIGluc3RhbmNlIGRvZXMgbm90IGV4aXN0IHlldFxuXHRcdFx0Ly8gSWYgdGhlIHRhZyBoYXMgbm90IGFscmVhZHkgYmVlbiBpbnN0YW50aWF0ZWQsIHdlIHdpbGwgY3JlYXRlIGEgbmV3IGluc3RhbmNlLlxuXHRcdFx0Ly8gfnRhZyB3aWxsIGFjY2VzcyB0aGUgdGFnLCBldmVuIHdpdGhpbiB0aGUgcmVuZGVyaW5nIG9mIHRoZSB0ZW1wbGF0ZSBjb250ZW50IG9mIHRoaXMgdGFnLlxuXHRcdFx0Ly8gRnJvbSBjaGlsZC9kZXNjZW5kYW50IHRhZ3MsIGNhbiBhY2Nlc3MgdXNpbmcgfnRhZy5wYXJlbnQsIG9yIH5wYXJlbnRUYWdzLnRhZ05hbWVcblx0XHRcdHRhZyA9IG5ldyB0YWdEZWYuX2N0cigpO1xuXHRcdFx0Y2FsbEluaXQgPSAhIXRhZy5pbml0O1xuXG5cdFx0XHR0YWcucGFyZW50ID0gcGFyZW50VGFnID0gY3R4ICYmIGN0eC50YWc7XG5cdFx0XHR0YWcudGFnQ3R4cyA9IHRhZ0N0eHM7XG5cblx0XHRcdGlmIChsaW5rQ3R4KSB7XG5cdFx0XHRcdHRhZy5pbmxpbmUgPSBmYWxzZTtcblx0XHRcdFx0bGlua0N0eC50YWcgPSB0YWc7XG5cdFx0XHR9XG5cdFx0XHR0YWcubGlua0N0eCA9IGxpbmtDdHg7XG5cdFx0XHRpZiAodGFnLl8uYm5kID0gYm91bmRUYWcgfHwgbGlua0N0eC5mbikge1xuXHRcdFx0XHQvLyBCb3VuZCBpZiB7Xnt0YWcuLi59fSBvciBkYXRhLWxpbms9XCJ7dGFnLi4ufVwiXG5cdFx0XHRcdHRhZy5fLnRocyA9IHRhZ0N0eC5wYXJhbXMucHJvcHMudGhpczsgLy8gVGFnIGhhcyBhIHRoaXM9ZXhwciBiaW5kaW5nLCB0byBnZXQgamF2YXNjcmlwdCByZWZlcmVuY2UgdG8gdGFnIGluc3RhbmNlXG5cdFx0XHRcdHRhZy5fLmx0ID0gdGFnQ3R4cy5sdDsgLy8gSWYgYSBsYXRlIHBhdGggQHNvbWUucGF0aCBoYXMgbm90IHJldHVybmVkIEBzb21lIG9iamVjdCwgbWFyayB0YWcgYXMgbGF0ZVxuXHRcdFx0XHR0YWcuXy5hcnJWd3MgPSB7fTtcblx0XHRcdH0gZWxzZSBpZiAodGFnLmRhdGFCb3VuZE9ubHkpIHtcblx0XHRcdFx0ZXJyb3IodGFnTmFtZSArIFwiIG11c3QgYmUgZGF0YS1ib3VuZDpcXG57XntcIiArIHRhZ05hbWUgKyBcIn19XCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly9UT0RPIGJldHRlciBwZXJmIGZvciBjaGlsZFRhZ3MoKSAtIGtlZXAgY2hpbGQgdGFnLnRhZ3MgYXJyYXksIChhbmQgcmVtb3ZlIGNoaWxkLCB3aGVuIGRpc3Bvc2VkKVxuXHRcdFx0Ly8gdGFnLnRhZ3MgPSBbXTtcblx0XHR9IGVsc2UgaWYgKGxpbmtDdHggJiYgbGlua0N0eC5mbi5fbHIpIHtcblx0XHRcdGNhbGxJbml0ID0gISF0YWcuaW5pdDtcblx0XHR9XG5cdFx0dGFnRGF0YU1hcCA9IHRhZy5kYXRhTWFwO1xuXG5cdFx0dGFnQ3R4LnRhZyA9IHRhZztcblx0XHRpZiAodGFnRGF0YU1hcCAmJiB0YWdDdHhzKSB7XG5cdFx0XHR0YWdDdHgubWFwID0gdGFnQ3R4c1tpXS5tYXA7IC8vIENvcHkgb3ZlciB0aGUgY29tcGlsZWQgbWFwIGluc3RhbmNlIGZyb20gdGhlIHByZXZpb3VzIHRhZ0N0eHMgdG8gdGhlIHJlZnJlc2hlZCBvbmVzXG5cdFx0fVxuXHRcdGlmICghdGFnLmZsb3cpIHtcblx0XHRcdHRhZ0N0eEN0eCA9IHRhZ0N0eC5jdHggPSB0YWdDdHguY3R4IHx8IHt9O1xuXG5cdFx0XHQvLyB0YWdzIGhhc2g6IHRhZy5jdHgudGFncywgbWVyZ2VkIHdpdGggcGFyZW50Vmlldy5jdHgudGFncyxcblx0XHRcdHRhZ3MgPSB0YWcucGFyZW50cyA9IHRhZ0N0eEN0eC5wYXJlbnRUYWdzID0gY3R4ICYmIGV4dGVuZEN0eCh0YWdDdHhDdHgucGFyZW50VGFncywgY3R4LnBhcmVudFRhZ3MpIHx8IHt9O1xuXHRcdFx0aWYgKHBhcmVudFRhZykge1xuXHRcdFx0XHR0YWdzW3BhcmVudFRhZy50YWdOYW1lXSA9IHBhcmVudFRhZztcblx0XHRcdFx0Ly9UT0RPIGJldHRlciBwZXJmIGZvciBjaGlsZFRhZ3M6IHBhcmVudFRhZy50YWdzLnB1c2godGFnKTtcblx0XHRcdH1cblx0XHRcdHRhZ3NbdGFnLnRhZ05hbWVdID0gdGFnQ3R4Q3R4LnRhZyA9IHRhZztcblx0XHRcdHRhZ0N0eEN0eC50YWdDdHggPSB0YWdDdHg7XG5cdFx0fVxuXHR9XG5cdGlmICghKHRhZy5fZXIgPSBvbkVycm9yKSkge1xuXHRcdHRhZ0hhbmRsZXJzRnJvbVByb3BzKHRhZywgdGFnQ3R4c1swXSk7XG5cdFx0dGFnLnJlbmRlcmluZyA9IHtybmRyOiB0YWcucmVuZGVyaW5nfTsgLy8gUHJvdmlkZSBvYmplY3QgZm9yIHN0YXRlIGR1cmluZyByZW5kZXIgY2FsbHMgdG8gdGFnIGFuZCBlbHNlcy4gKFVzZWQgYnkge3tpZn19IGFuZCB7e2Zvcn19Li4uKVxuXHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHsgLy8gSXRlcmF0ZSB0YWdDdHggZm9yIGVhY2gge3tlbHNlfX0gYmxvY2tcblx0XHRcdHRhZ0N0eCA9IHRhZy50YWdDdHggPSB0YWdDdHhzW2ldO1xuXHRcdFx0cHJvcHMgPSB0YWdDdHgucHJvcHM7XG5cdFx0XHR0YWcuY3R4ID0gdGFnQ3R4LmN0eDtcblxuXHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdGlmIChjYWxsSW5pdCkge1xuXHRcdFx0XHRcdHRhZy5pbml0KHRhZ0N0eCwgbGlua0N0eCwgdGFnLmN0eCk7XG5cdFx0XHRcdFx0Y2FsbEluaXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0YWdDdHguYXJncy5sZW5ndGggJiYgdGFnQ3R4LmFyZ0RlZmF1bHQgIT09IGZhbHNlICYmIHRhZy5hcmdEZWZhdWx0ICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRhZ0N0eC5hcmdzID0gYXJncyA9IFt0YWdDdHgudmlldy5kYXRhXTsgLy8gTWlzc2luZyBmaXJzdCBhcmcgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZGF0YSBjb250ZXh0XG5cdFx0XHRcdFx0dGFnQ3R4LnBhcmFtcy5hcmdzID0gW1wiI2RhdGFcIl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiaW5kVG8gPSBiaW5kVG9PckJpbmRGcm9tKFwiYmluZFRvXCIpO1xuXG5cdFx0XHRcdGlmICh0YWcuYmluZFRvICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0YWcuYmluZFRvID0gYmluZFRvO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRhZy5iaW5kRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGFnLmJpbmRGcm9tID0gYmluZFRvT3JCaW5kRnJvbShcImJpbmRGcm9tXCIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRhZy5iaW5kVG8pIHtcblx0XHRcdFx0XHR0YWcuYmluZEZyb20gPSB0YWcuYmluZFRvID0gYmluZFRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJpbmRGcm9tID0gdGFnLmJpbmRGcm9tIHx8IGJpbmRUbztcblxuXHRcdFx0XHRiaW5kVG9MZW5ndGggPSBiaW5kVG8ubGVuZ3RoO1xuXHRcdFx0XHRiaW5kRnJvbUxlbmd0aCA9IGJpbmRGcm9tLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAodGFnLl8uYm5kICYmIChsaW5rZWRFbGVtZW50ID0gdGFnLmxpbmtlZEVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0dGFnLmxpbmtlZEVsZW1lbnQgPSBsaW5rZWRFbGVtZW50ID0gJGlzQXJyYXkobGlua2VkRWxlbWVudCkgPyBsaW5rZWRFbGVtZW50OiBbbGlua2VkRWxlbWVudF07XG5cblx0XHRcdFx0XHRpZiAoYmluZFRvTGVuZ3RoICE9PSBsaW5rZWRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IoXCJsaW5rZWRFbGVtZW50IG5vdCBzYW1lIGxlbmd0aCBhcyBiaW5kVG9cIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaW5rZWRFbGVtZW50ID0gdGFnLmxpbmtlZEN0eFBhcmFtKSB7XG5cdFx0XHRcdFx0dGFnLmxpbmtlZEN0eFBhcmFtID0gbGlua2VkRWxlbWVudCA9ICRpc0FycmF5KGxpbmtlZEVsZW1lbnQpID8gbGlua2VkRWxlbWVudDogW2xpbmtlZEVsZW1lbnRdO1xuXG5cdFx0XHRcdFx0aWYgKGJpbmRGcm9tTGVuZ3RoICE9PSBsaW5rZWRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IoXCJsaW5rZWRDdHhQYXJhbSBub3Qgc2FtZSBsZW5ndGggYXMgYmluZEZyb20vYmluZFRvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChiaW5kRnJvbSkge1xuXHRcdFx0XHRcdHRhZy5fLmZyb21JbmRleCA9IHt9OyAvLyBIYXNoIG9mIGJpbmRGcm9tIGluZGV4IHdoaWNoIGhhcyBzYW1lIHBhdGggdmFsdWUgYXMgYmluZFRvIGluZGV4LiBmcm9tSW5kZXggPSB0YWcuXy5mcm9tSW5kZXhbdG9JbmRleF1cblx0XHRcdFx0XHR0YWcuXy50b0luZGV4ID0ge307IC8vIEhhc2ggb2YgYmluZEZyb20gaW5kZXggd2hpY2ggaGFzIHNhbWUgcGF0aCB2YWx1ZSBhcyBiaW5kVG8gaW5kZXguIGZyb21JbmRleCA9IHRhZy5fLmZyb21JbmRleFt0b0luZGV4XVxuXHRcdFx0XHRcdG4gPSBiaW5kRnJvbUxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAobi0tKSB7XG5cdFx0XHRcdFx0XHRrZXkgPSBiaW5kRnJvbVtuXTtcblx0XHRcdFx0XHRcdG0gPSBiaW5kVG9MZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAobS0tKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IGJpbmRUb1ttXSkge1xuXHRcdFx0XHRcdFx0XHRcdHRhZy5fLmZyb21JbmRleFttXSA9IG47XG5cdFx0XHRcdFx0XHRcdFx0dGFnLl8udG9JbmRleFtuXSA9IG07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobGlua0N0eCkge1xuXHRcdFx0XHRcdC8vIFNldCBhdHRyIG9uIGxpbmtDdHggdG8gZW5zdXJlIG91dHB1dHRpbmcgdG8gdGhlIGNvcnJlY3QgdGFyZ2V0IGF0dHJpYnV0ZS5cblx0XHRcdFx0XHQvLyBTZXR0aW5nIGVpdGhlciBsaW5rQ3R4LmF0dHIgb3IgdGhpcy5hdHRyIGluIHRoZSBpbml0KCkgYWxsb3dzIHBlci1pbnN0YW5jZSBjaG9pY2Ugb2YgdGFyZ2V0IGF0dHJpYi5cblx0XHRcdFx0XHRsaW5rQ3R4LmF0dHIgPSB0YWcuYXR0ciA9IGxpbmtDdHguYXR0ciB8fCB0YWcuYXR0ciB8fCBsaW5rQ3R4Ll9kZkF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHIgPSB0YWcuYXR0cjtcblx0XHRcdFx0dGFnLl8ubm9Wd3MgPSBhdHRyICYmIGF0dHIgIT09IEhUTUw7XG5cdFx0XHR9XG5cdFx0XHRhcmdzID0gdGFnLmN2dEFyZ3MoaSk7XG5cdFx0XHRpZiAodGFnLmxpbmtlZEN0eFBhcmFtKSB7XG5cdFx0XHRcdGJkQXJncyA9IHRhZy5jdnRBcmdzKGksIDEpO1xuXHRcdFx0XHRtID0gYmluZEZyb21MZW5ndGg7XG5cdFx0XHRcdGRlZmF1bHRDdHggPSB0YWcuY29uc3RydWN0b3IucHJvdG90eXBlLmN0eDtcblx0XHRcdFx0d2hpbGUgKG0tLSkge1xuXHRcdFx0XHRcdGlmIChjdHhQcm0gPSB0YWcubGlua2VkQ3R4UGFyYW1bbV0pIHtcblx0XHRcdFx0XHRcdGtleSA9IGJpbmRGcm9tW21dO1xuXHRcdFx0XHRcdFx0aW5pdFZhbCA9IGJkQXJnc1ttXTtcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0YWcgY29udGV4dHVhbCBwYXJhbWV0ZXJcblx0XHRcdFx0XHRcdHRhZ0N0eC5jdHhbY3R4UHJtXSA9ICRzdWIuX2NwKFxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0Q3R4ICYmIGluaXRWYWwgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRDdHhbY3R4UHJtXTogaW5pdFZhbCxcblx0XHRcdFx0XHRcdFx0aW5pdFZhbCAhPT0gdW5kZWZpbmVkICYmIGFyZ09yUHJvcCh0YWdDdHgucGFyYW1zLCBrZXkpLFxuXHRcdFx0XHRcdFx0XHR0YWdDdHgudmlldyxcblx0XHRcdFx0XHRcdFx0dGFnLl8uYm5kICYmIHt0YWc6IHRhZywgY3Z0OiB0YWcuY29udmVydCwgaW5kOiBtLCB0YWdFbHNlOiBpfVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICgobWFwRGVmID0gcHJvcHMuZGF0YU1hcCB8fCB0YWdEYXRhTWFwKSAmJiAoYXJncy5sZW5ndGggfHwgcHJvcHMuZGF0YU1hcCkpIHtcblx0XHRcdFx0dGhpc01hcCA9IHRhZ0N0eC5tYXA7XG5cdFx0XHRcdGlmICghdGhpc01hcCB8fCB0aGlzTWFwLnNyYyAhPT0gYXJnc1swXSB8fCBpc1VwZGF0ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzTWFwICYmIHRoaXNNYXAuc3JjKSB7XG5cdFx0XHRcdFx0XHR0aGlzTWFwLnVubWFwKCk7IC8vIG9ubHkgY2FsbGVkIGlmIG9ic2VydmFibGUgbWFwIC0gbm90IHdoZW4gb25seSB1c2VkIGluIEpzUmVuZGVyLCBlLmcuIGJ5IHt7cHJvcHN9fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtYXBEZWYubWFwKGFyZ3NbMF0sIHRhZ0N0eCwgdGhpc01hcCwgIXRhZy5fLmJuZCk7XG5cdFx0XHRcdFx0dGhpc01hcCA9IHRhZ0N0eC5tYXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXJncyA9IFt0aGlzTWFwLnRndF07XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW1SZXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAodGFnLnJlbmRlcikge1xuXHRcdFx0XHRpdGVtUmV0ID0gdGFnLnJlbmRlci5hcHBseSh0YWcsIGFyZ3MpO1xuXHRcdFx0XHRpZiAocGFyZW50Vmlldy5saW5rZWQgJiYgaXRlbVJldCAmJiAhcldyYXBwZWRJblZpZXdNYXJrZXIudGVzdChpdGVtUmV0KSkge1xuXHRcdFx0XHRcdC8vIFdoZW4gYSB0YWcgcmVuZGVycyBjb250ZW50IGZyb20gdGhlIHJlbmRlciBtZXRob2QsIHdpdGggZGF0YSBsaW5raW5nIHRoZW4gd2UgbmVlZCB0byB3cmFwIHdpdGggdmlldyBtYXJrZXJzLCBpZiBhYnNlbnQsXG5cdFx0XHRcdFx0Ly8gdG8gcHJvdmlkZSBhIGNvbnRlbnRWaWV3IGZvciB0aGUgdGFnLCB3aGljaCB3aWxsIGNvcnJlY3RseSBkaXNwb3NlIGJpbmRpbmdzIGlmIGRlbGV0ZWQuIFRoZSAndG1wbCcgZm9yIHRoaXMgdmlldyB3aWxsXG5cdFx0XHRcdFx0Ly8gYmUgYSBkdW1iZWQtZG93biB0ZW1wbGF0ZSB3aGljaCB3aWxsIGFsd2F5cyByZXR1cm4gdGhlICBpdGVtUmV0IHN0cmluZyAobm8gbWF0dGVyIHdoYXQgdGhlIGRhdGEgaXMpLiBUaGUgaXRlbVJldCBzdHJpbmdcblx0XHRcdFx0XHQvLyBpcyBub3QgY29tcGlsZWQgYXMgdGVtcGxhdGUgbWFya3VwLCBzbyBjYW4gaW5jbHVkZSBcInt7XCIgb3IgXCJ9fVwiIHdpdGhvdXQgdHJpZ2dlcmluZyBzeW50YXggZXJyb3JzXG5cdFx0XHRcdFx0dG1wbCA9IHsgLy8gJ0R1bWJlZC1kb3duJyB0ZW1wbGF0ZSB3aGljaCBhbHdheXMgcmVuZGVycyAnc3RhdGljJyBpdGVtUmV0IHN0cmluZ1xuXHRcdFx0XHRcdFx0bGlua3M6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0bXBsLnJlbmRlciA9IHRtcGwuZm4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtUmV0O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0aXRlbVJldCA9IHJlbmRlcldpdGhWaWV3cyh0bXBsLCBwYXJlbnRWaWV3LmRhdGEsIHVuZGVmaW5lZCwgdHJ1ZSwgcGFyZW50VmlldywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghYXJncy5sZW5ndGgpIHtcblx0XHRcdFx0YXJncyA9IFtwYXJlbnRWaWV3XTsgLy8gbm8gYXJndW1lbnRzIC0gKGUuZy4ge3tlbHNlfX0pIGdldCBkYXRhIGNvbnRleHQgZnJvbSB2aWV3LlxuXHRcdFx0fVxuXHRcdFx0aWYgKGl0ZW1SZXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250ZW50Q3R4ID0gYXJnc1swXTsgLy8gRGVmYXVsdCBkYXRhIGNvbnRleHQgZm9yIHdyYXBwZWQgYmxvY2sgY29udGVudCBpcyB0aGUgZmlyc3QgYXJndW1lbnRcblx0XHRcdFx0aWYgKHRhZy5jb250ZW50Q3R4KSB7IC8vIFNldCB0YWcuY29udGVudEN0eCB0byB0cnVlLCB0byBpbmhlcml0IHBhcmVudCBjb250ZXh0LCBvciB0byBhIGZ1bmN0aW9uIHRvIHByb3ZpZGUgYWx0ZXJuYXRlIGNvbnRleHQuXG5cdFx0XHRcdFx0Y29udGVudEN0eCA9IHRhZy5jb250ZW50Q3R4ID09PSB0cnVlID8gcGFyZW50VmlldyA6IHRhZy5jb250ZW50Q3R4KGNvbnRlbnRDdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1SZXQgPSB0YWdDdHgucmVuZGVyKGNvbnRlbnRDdHgsIHRydWUpIHx8IChpc1VwZGF0ZSA/IHVuZGVmaW5lZCA6IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0ID0gcmV0XG5cdFx0XHRcdD8gcmV0ICsgKGl0ZW1SZXQgfHwgXCJcIilcblx0XHRcdFx0OiBpdGVtUmV0ICE9PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IFwiXCIgKyBpdGVtUmV0XG5cdFx0XHRcdFx0OiB1bmRlZmluZWQ7IC8vIElmIG5vIHJldHVybiB2YWx1ZSBmcm9tIHJlbmRlciwgYW5kIG5vIHRlbXBsYXRlL2NvbnRlbnQgdGFnQ3R4LnJlbmRlciguLi4pLCByZXR1cm4gdW5kZWZpbmVkXG5cdFx0fVxuXHRcdHRhZy5yZW5kZXJpbmcgPSB0YWcucmVuZGVyaW5nLnJuZHI7IC8vIFJlbW92ZSB0YWcucmVuZGVyaW5nIG9iamVjdCAoaWYgdGhpcyBpcyBvdXRlcm1vc3QgcmVuZGVyIGNhbGwuIChJbiBjYXNlIG9mIG5lc3RlZCBjYWxscylcblx0fVxuXHR0YWcudGFnQ3R4ID0gdGFnQ3R4c1swXTtcblx0dGFnLmN0eCA9IHRhZy50YWdDdHguY3R4O1xuXG5cdGlmICh0YWcuXy5ub1Z3cyAmJiB0YWcuaW5saW5lKSB7XG5cdFx0Ly8gaW5saW5lIHRhZyB3aXRoIGF0dHIgc2V0IHRvIFwidGV4dFwiIHdpbGwgaW5zZXJ0IEhUTUwtZW5jb2RlZCBjb250ZW50IC0gYXMgaWYgaXQgd2FzIGVsZW1lbnQtYmFzZWQgaW5uZXJUZXh0XG5cdFx0cmV0ID0gYXR0ciA9PT0gXCJ0ZXh0XCJcblx0XHRcdD8gJGNvbnZlcnRlcnMuaHRtbChyZXQpXG5cdFx0XHQ6IFwiXCI7XG5cdH1cblx0cmV0dXJuIGJvdW5kVGFnICYmIHBhcmVudFZpZXcuXy5vblJlbmRlclxuXHRcdC8vIENhbGwgb25SZW5kZXIgKHVzZWQgYnkgSnNWaWV3cyBpZiBwcmVzZW50LCB0byBhZGQgYmluZGluZyBhbm5vdGF0aW9ucyBhcm91bmQgcmVuZGVyZWQgY29udGVudClcblx0XHQ/IHBhcmVudFZpZXcuXy5vblJlbmRlcihyZXQsIHBhcmVudFZpZXcsIHRhZylcblx0XHQ6IHJldDtcbn1cblxuLy89PT09PT09PT09PT09PT09PVxuLy8gVmlldyBjb25zdHJ1Y3RvclxuLy89PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBWaWV3KGNvbnRleHQsIHR5cGUsIHBhcmVudFZpZXcsIGRhdGEsIHRlbXBsYXRlLCBrZXksIG9uUmVuZGVyLCBjb250ZW50VG1wbCkge1xuXHQvLyBDb25zdHJ1Y3RvciBmb3IgdmlldyBvYmplY3QgaW4gdmlldyBoaWVyYXJjaHkuIChBdWdtZW50ZWQgYnkgSnNWaWV3cyBpZiBKc1ZpZXdzIGlzIGxvYWRlZClcblx0dmFyIHZpZXdzLCBwYXJlbnRWaWV3XywgdGFnLCBzZWxmXyxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRpc0FycmF5ID0gdHlwZSA9PT0gXCJhcnJheVwiO1xuXHRcdC8vIElmIHRoZSBkYXRhIGlzIGFuIGFycmF5LCB0aGlzIGlzIGFuICdhcnJheSB2aWV3JyB3aXRoIGEgdmlld3MgYXJyYXkgZm9yIGVhY2ggY2hpbGQgJ2l0ZW0gdmlldydcblx0XHQvLyBJZiB0aGUgZGF0YSBpcyBub3QgYW4gYXJyYXksIHRoaXMgaXMgYW4gJ2l0ZW0gdmlldycgd2l0aCBhIHZpZXdzICdoYXNoJyBvYmplY3QgZm9yIGFueSBjaGlsZCBuZXN0ZWQgdmlld3NcblxuXHRzZWxmLmNvbnRlbnQgPSBjb250ZW50VG1wbDtcblx0c2VsZi52aWV3cyA9IGlzQXJyYXkgPyBbXSA6IHt9O1xuXHRzZWxmLmRhdGEgPSBkYXRhO1xuXHRzZWxmLnRtcGwgPSB0ZW1wbGF0ZTtcblx0c2VsZl8gPSBzZWxmLl8gPSB7XG5cdFx0a2V5OiAwLFxuXHRcdC8vIC5fLnVzZUtleSBpcyBub24gemVybyBpZiBpcyBub3QgYW4gJ2FycmF5IHZpZXcnIChvd25pbmcgYSBkYXRhIGFycmF5KS4gVXNlIHRoaXMgYXMgbmV4dCBrZXkgZm9yIGFkZGluZyB0byBjaGlsZCB2aWV3cyBoYXNoXG5cdFx0dXNlS2V5OiBpc0FycmF5ID8gMCA6IDEsXG5cdFx0aWQ6IFwiXCIgKyB2aWV3SWQrKyxcblx0XHRvblJlbmRlcjogb25SZW5kZXIsXG5cdFx0Ym5kczoge31cblx0fTtcblx0c2VsZi5saW5rZWQgPSAhIW9uUmVuZGVyO1xuXHRzZWxmLnR5cGUgPSB0eXBlIHx8IFwidG9wXCI7XG5cblx0aWYgKCFwYXJlbnRWaWV3IHx8IHBhcmVudFZpZXcudHlwZSA9PT0gXCJ0b3BcIikge1xuXHRcdChzZWxmLmN0eCA9IGNvbnRleHQgfHwge30pLnJvb3QgPSBzZWxmLmRhdGE7XG5cdH1cblxuXHRpZiAoc2VsZi5wYXJlbnQgPSBwYXJlbnRWaWV3KSB7XG5cdFx0c2VsZi5yb290ID0gcGFyZW50Vmlldy5yb290IHx8IHNlbGY7IC8vIHZpZXcgd2hvc2UgcGFyZW50IGlzIHRvcCB2aWV3XG5cdFx0dmlld3MgPSBwYXJlbnRWaWV3LnZpZXdzO1xuXHRcdHBhcmVudFZpZXdfID0gcGFyZW50Vmlldy5fO1xuXHRcdHNlbGYuaXNUb3AgPSBwYXJlbnRWaWV3Xy5zY3A7IC8vIElzIHRvcCBjb250ZW50IHZpZXcgb2YgYSBsaW5rKFwiI2NvbnRhaW5lclwiLCAuLi4pIGNhbGxcblx0XHRzZWxmLnNjb3BlID0gKCFjb250ZXh0LnRhZyB8fCBjb250ZXh0LnRhZyA9PT0gcGFyZW50Vmlldy5jdHgudGFnKSAmJiAhc2VsZi5pc1RvcCAmJiBwYXJlbnRWaWV3LnNjb3BlIHx8IHNlbGY7XG5cdFx0Ly8gU2NvcGUgZm9yIGNvbnRleHRQYXJhbXMgLSBjbG9zZXN0IG5vbiBmbG93IHRhZyBhbmNlc3RvciBvciByb290IHZpZXdcblx0XHRpZiAocGFyZW50Vmlld18udXNlS2V5KSB7XG5cdFx0XHQvLyBQYXJlbnQgaXMgbm90IGFuICdhcnJheSB2aWV3Jy4gQWRkIHRoaXMgdmlldyB0byBpdHMgdmlld3Mgb2JqZWN0XG5cdFx0XHQvLyBzZWxmLl9rZXkgPSBpcyB0aGUga2V5IGluIHRoZSBwYXJlbnQgdmlldyBoYXNoXG5cdFx0XHR2aWV3c1tzZWxmXy5rZXkgPSBcIl9cIiArIHBhcmVudFZpZXdfLnVzZUtleSsrXSA9IHNlbGY7XG5cdFx0XHRzZWxmLmluZGV4ID0gaW5kZXhTdHI7XG5cdFx0XHRzZWxmLmdldEluZGV4ID0gZ2V0TmVzdGVkSW5kZXg7XG5cdFx0fSBlbHNlIGlmICh2aWV3cy5sZW5ndGggPT09IChzZWxmXy5rZXkgPSBzZWxmLmluZGV4ID0ga2V5KSkgeyAvLyBQYXJlbnQgaXMgYW4gJ2FycmF5IHZpZXcnLiBBZGQgdGhpcyB2aWV3IHRvIGl0cyB2aWV3cyBhcnJheVxuXHRcdFx0dmlld3MucHVzaChzZWxmKTsgLy8gQWRkaW5nIHRvIGVuZCBvZiB2aWV3cyBhcnJheS4gKFVzaW5nIHB1c2ggd2hlbiBwb3NzaWJsZSAtIGJldHRlciBwZXJmIHRoYW4gc3BsaWNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aWV3cy5zcGxpY2Uoa2V5LCAwLCBzZWxmKTsgLy8gSW5zZXJ0aW5nIGluIHZpZXdzIGFycmF5XG5cdFx0fVxuXHRcdC8vIElmIG5vIGNvbnRleHQgd2FzIHBhc3NlZCBpbiwgdXNlIHBhcmVudCBjb250ZXh0XG5cdFx0Ly8gSWYgY29udGV4dCB3YXMgcGFzc2VkIGluLCBpdCBzaG91bGQgaGF2ZSBiZWVuIG1lcmdlZCBhbHJlYWR5IHdpdGggcGFyZW50IGNvbnRleHRcblx0XHRzZWxmLmN0eCA9IGNvbnRleHQgfHwgcGFyZW50Vmlldy5jdHg7XG5cdH0gZWxzZSBpZiAodHlwZSkge1xuXHRcdHNlbGYucm9vdCA9IHNlbGY7IC8vIHZpZXcgd2hvc2UgcGFyZW50IGlzIHRvcCB2aWV3XG5cdH1cbn1cblxuVmlldy5wcm90b3R5cGUgPSB7XG5cdGdldDogZ2V0Vmlldyxcblx0Z2V0SW5kZXg6IGdldEluZGV4LFxuXHRjdHhQcm06IGNvbnRleHRQYXJhbWV0ZXIsXG5cdGdldFJzYzogZ2V0UmVzb3VyY2UsXG5cdF9nZXRUbXBsOiBnZXRUZW1wbGF0ZSxcblx0X2dldE9iOiBnZXRQYXRoT2JqZWN0LFxuXHRfaXM6IFwidmlld1wiXG59O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJlZ2lzdHJhdGlvblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbXBpbGVDaGlsZFJlc291cmNlcyhwYXJlbnRUbXBsKSB7XG5cdHZhciBzdG9yZU5hbWUsIHN0b3JlTmFtZXMsIHJlc291cmNlcztcblx0Zm9yIChzdG9yZU5hbWUgaW4ganN2U3RvcmVzKSB7XG5cdFx0c3RvcmVOYW1lcyA9IHN0b3JlTmFtZSArIFwic1wiO1xuXHRcdGlmIChwYXJlbnRUbXBsW3N0b3JlTmFtZXNdKSB7XG5cdFx0XHRyZXNvdXJjZXMgPSBwYXJlbnRUbXBsW3N0b3JlTmFtZXNdOyAgICAvLyBSZXNvdXJjZXMgbm90IHlldCBjb21waWxlZFxuXHRcdFx0cGFyZW50VG1wbFtzdG9yZU5hbWVzXSA9IHt9OyAgICAgICAgICAgICAgIC8vIFJlbW92ZSB1bmNvbXBpbGVkIHJlc291cmNlc1xuXHRcdFx0JHZpZXdzW3N0b3JlTmFtZXNdKHJlc291cmNlcywgcGFyZW50VG1wbCk7IC8vIEFkZCBiYWNrIGluIHRoZSBjb21waWxlZCByZXNvdXJjZXNcblx0XHR9XG5cdH1cbn1cblxuLy89PT09PT09PT09PT09PT1cbi8vIGNvbXBpbGVUYWdcbi8vPT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbXBpbGVUYWcobmFtZSwgdGFnRGVmLCBwYXJlbnRUbXBsKSB7XG5cdHZhciB0bXBsLCBiYXNlVGFnLCBwcm9wLFxuXHRcdGNvbXBpbGVkRGVmID0gbmV3ICRzdWIuX3RnKCk7XG5cblx0ZnVuY3Rpb24gVGFnKCkge1xuXHRcdHZhciB0YWcgPSB0aGlzO1xuXHRcdHRhZy5fID0ge1xuXHRcdFx0dW5saW5rZWQ6IHRydWVcblx0XHR9O1xuXHRcdHRhZy5pbmxpbmUgPSB0cnVlO1xuXHRcdHRhZy50YWdOYW1lID0gbmFtZTtcblx0fVxuXG5cdGlmICgkaXNGdW5jdGlvbih0YWdEZWYpKSB7XG5cdFx0Ly8gU2ltcGxlIHRhZyBkZWNsYXJlZCBhcyBmdW5jdGlvbi4gTm8gcHJlc2VudGVyIGluc3RhbnRhdGlvbi5cblx0XHR0YWdEZWYgPSB7XG5cdFx0XHRkZXBlbmRzOiB0YWdEZWYuZGVwZW5kcyxcblx0XHRcdHJlbmRlcjogdGFnRGVmXG5cdFx0fTtcblx0fSBlbHNlIGlmIChcIlwiICsgdGFnRGVmID09PSB0YWdEZWYpIHtcblx0XHR0YWdEZWYgPSB7dGVtcGxhdGU6IHRhZ0RlZn07XG5cdH1cblxuXHRpZiAoYmFzZVRhZyA9IHRhZ0RlZi5iYXNlVGFnKSB7XG5cdFx0dGFnRGVmLmZsb3cgPSAhIXRhZ0RlZi5mbG93OyAvLyBTZXQgZmxvdyBwcm9wZXJ0eSwgc28gZGVmYXVsdHMgdG8gZmFsc2UgZXZlbiBpZiBiYXNlVGFnIGhhcyBmbG93PXRydWVcblx0XHRiYXNlVGFnID0gXCJcIiArIGJhc2VUYWcgPT09IGJhc2VUYWdcblx0XHRcdD8gKHBhcmVudFRtcGwgJiYgcGFyZW50VG1wbC50YWdzW2Jhc2VUYWddIHx8ICR0YWdzW2Jhc2VUYWddKVxuXHRcdFx0OiBiYXNlVGFnO1xuXHRcdGlmICghYmFzZVRhZykge1xuXHRcdFx0ZXJyb3IoJ2Jhc2VUYWc6IFwiJyArIHRhZ0RlZi5iYXNlVGFnICsgJ1wiIG5vdCBmb3VuZCcpO1xuXHRcdH1cblx0XHRjb21waWxlZERlZiA9ICRleHRlbmQoY29tcGlsZWREZWYsIGJhc2VUYWcpO1xuXG5cdFx0Zm9yIChwcm9wIGluIHRhZ0RlZikge1xuXHRcdFx0Y29tcGlsZWREZWZbcHJvcF0gPSBnZXRNZXRob2QoYmFzZVRhZ1twcm9wXSwgdGFnRGVmW3Byb3BdKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29tcGlsZWREZWYgPSAkZXh0ZW5kKGNvbXBpbGVkRGVmLCB0YWdEZWYpO1xuXHR9XG5cblx0Ly8gVGFnIGRlY2xhcmVkIGFzIG9iamVjdCwgdXNlZCBhcyB0aGUgcHJvdG90eXBlIGZvciB0YWcgaW5zdGFudGlhdGlvbiAoY29udHJvbC9wcmVzZW50ZXIpXG5cdGlmICgodG1wbCA9IGNvbXBpbGVkRGVmLnRlbXBsYXRlKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29tcGlsZWREZWYudGVtcGxhdGUgPSBcIlwiICsgdG1wbCA9PT0gdG1wbCA/ICgkdGVtcGxhdGVzW3RtcGxdIHx8ICR0ZW1wbGF0ZXModG1wbCkpIDogdG1wbDtcblx0fVxuXHQoVGFnLnByb3RvdHlwZSA9IGNvbXBpbGVkRGVmKS5jb25zdHJ1Y3RvciA9IGNvbXBpbGVkRGVmLl9jdHIgPSBUYWc7XG5cblx0aWYgKHBhcmVudFRtcGwpIHtcblx0XHRjb21waWxlZERlZi5fcGFyZW50VG1wbCA9IHBhcmVudFRtcGw7XG5cdH1cblx0cmV0dXJuIGNvbXBpbGVkRGVmO1xufVxuXG5mdW5jdGlvbiBiYXNlQXBwbHkoYXJncykge1xuXHQvLyBJbiBkZXJpdmVkIG1ldGhvZCAob3IgaGFuZGxlciBkZWNsYXJlZCBkZWNsYXJhdGl2ZWx5IGFzIGluIHt7OmZvbyBvbkNoYW5nZT1+Zm9vQ2hhbmdlZH19IGNhbiBjYWxsIGJhc2UgbWV0aG9kLFxuXHQvLyB1c2luZyB0aGlzLmJhc2VBcHBseShhcmd1bWVudHMpIChFcXVpdmFsZW50IHRvIHRoaXMuX3N1cGVyQXBwbHkoYXJndW1lbnRzKSBpbiBqUXVlcnkgVUkpXG5cdHJldHVybiB0aGlzLmJhc2UuYXBwbHkodGhpcywgYXJncyk7XG59XG5cbi8vPT09PT09PT09PT09PT09XG4vLyBjb21waWxlVG1wbFxuLy89PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gY29tcGlsZVRtcGwobmFtZSwgdG1wbCwgcGFyZW50VG1wbCwgb3B0aW9ucykge1xuXHQvLyB0bXBsIGlzIGVpdGhlciBhIHRlbXBsYXRlIG9iamVjdCwgYSBzZWxlY3RvciBmb3IgYSB0ZW1wbGF0ZSBzY3JpcHQgYmxvY2ssIHRoZSBuYW1lIG9mIGEgY29tcGlsZWQgdGVtcGxhdGUsIG9yIGEgdGVtcGxhdGUgb2JqZWN0XG5cblx0Ly89PT09IG5lc3RlZCBmdW5jdGlvbnMgPT09PVxuXHRmdW5jdGlvbiBsb29rdXBUZW1wbGF0ZSh2YWx1ZSkge1xuXHRcdC8vIElmIHZhbHVlIGlzIG9mIHR5cGUgc3RyaW5nIC0gdHJlYXQgYXMgc2VsZWN0b3IsIG9yIG5hbWUgb2YgY29tcGlsZWQgdGVtcGxhdGVcblx0XHQvLyBSZXR1cm4gdGhlIHRlbXBsYXRlIG9iamVjdCwgaWYgYWxyZWFkeSBjb21waWxlZCwgb3IgdGhlIG1hcmt1cCBzdHJpbmdcblx0XHR2YXIgY3VycmVudE5hbWUsIHRtcGw7XG5cdFx0aWYgKChcIlwiICsgdmFsdWUgPT09IHZhbHVlKSB8fCB2YWx1ZS5ub2RlVHlwZSA+IDAgJiYgKGVsZW0gPSB2YWx1ZSkpIHtcblx0XHRcdGlmICghZWxlbSkge1xuXHRcdFx0XHRpZiAoL15cXC5cXC9bXlxcXFw6Kj9cIjw+XSokLy50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRcdC8vIHRtcGw9XCIuL3NvbWUvZmlsZS5odG1sXCJcblx0XHRcdFx0XHQvLyBJZiB0aGUgdGVtcGxhdGUgaXMgbm90IG5hbWVkLCB1c2UgXCIuL3NvbWUvZmlsZS5odG1sXCIgYXMgbmFtZS5cblx0XHRcdFx0XHRpZiAodG1wbCA9ICR0ZW1wbGF0ZXNbbmFtZSA9IG5hbWUgfHwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHRtcGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEJST1dTRVItU1BFQ0lGSUMgQ09ERSAobm90IG9uIE5vZGUuanMpOlxuXHRcdFx0XHRcdFx0Ly8gTG9vayBmb3Igc2VydmVyLWdlbmVyYXRlZCBzY3JpcHQgYmxvY2sgd2l0aCBpZCBcIi4vc29tZS9maWxlLmh0bWxcIlxuXHRcdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoJC5mbiAmJiAhJHN1Yi5yVG1wbC50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gJCAodmFsdWUsIGRvY3VtZW50KVswXTsgLy8gaWYgalF1ZXJ5IGlzIGxvYWRlZCwgdGVzdCBmb3Igc2VsZWN0b3IgcmV0dXJuaW5nIGVsZW1lbnRzLCBhbmQgZ2V0IGZpcnN0IGVsZW1lbnRcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHR9Ly8gRU5EIEJST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRcdFx0fSAvL0JST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRcdFx0aWYgKGVsZW0pIHtcblx0XHRcdFx0aWYgKGVsZW0udGFnTmFtZSAhPT0gXCJTQ1JJUFRcIikge1xuXHRcdFx0XHRcdGVycm9yKHZhbHVlICsgXCI6IFVzZSBzY3JpcHQgYmxvY2ssIG5vdCBcIiArIGVsZW0udGFnTmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdFx0XHQvLyBXZSB3aWxsIGNvbXBpbGUgYSBuZXcgdGVtcGxhdGUgdXNpbmcgdGhlIG1hcmt1cCBpbiB0aGUgc2NyaXB0IGVsZW1lbnRcblx0XHRcdFx0XHR2YWx1ZSA9IGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFdlIHdpbGwgY2FjaGUgYSBzaW5nbGUgY29weSBvZiB0aGUgY29tcGlsZWQgdGVtcGxhdGUsIGFuZCBhc3NvY2lhdGUgaXQgd2l0aCB0aGUgbmFtZVxuXHRcdFx0XHRcdC8vIChyZW5hbWluZyBmcm9tIGEgcHJldmlvdXMgbmFtZSBpZiB0aGVyZSB3YXMgb25lKS5cblx0XHRcdFx0XHRjdXJyZW50TmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKHRtcGxBdHRyKTtcblx0XHRcdFx0XHRpZiAoY3VycmVudE5hbWUpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50TmFtZSAhPT0ganN2VG1wbCkge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9ICR0ZW1wbGF0ZXNbY3VycmVudE5hbWVdO1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgJHRlbXBsYXRlc1tjdXJyZW50TmFtZV07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQuZm4pIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSAkLmRhdGEoZWxlbSlbanN2VG1wbF07IC8vIEdldCBjYWNoZWQgY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFjdXJyZW50TmFtZSB8fCAhdmFsdWUpIHsgLy8gTm90IHlldCBjb21waWxlZCwgb3IgY2FjaGVkIHZlcnNpb24gbG9zdFxuXHRcdFx0XHRcdFx0bmFtZSA9IG5hbWUgfHwgKCQuZm4gPyBqc3ZUbXBsIDogdmFsdWUpO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBjb21waWxlVG1wbChuYW1lLCBlbGVtLmlubmVySFRNTCwgcGFyZW50VG1wbCwgb3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhbHVlLnRtcGxOYW1lID0gbmFtZSA9IG5hbWUgfHwgY3VycmVudE5hbWU7XG5cdFx0XHRcdFx0aWYgKG5hbWUgIT09IGpzdlRtcGwpIHtcblx0XHRcdFx0XHRcdCR0ZW1wbGF0ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUodG1wbEF0dHIsIG5hbWUpO1xuXHRcdFx0XHRcdGlmICgkLmZuKSB7XG5cdFx0XHRcdFx0XHQkLmRhdGEoZWxlbSwganN2VG1wbCwgdmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSAvLyBFTkQgQlJPV1NFUi1TUEVDSUZJQyBDT0RFXG5cdFx0XHRlbGVtID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAoIXZhbHVlLmZuKSB7XG5cdFx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdC8vIElmIHZhbHVlIGlzIG5vdCBhIHN0cmluZy4gSFRNTCBlbGVtZW50LCBvciBjb21waWxlZCB0ZW1wbGF0ZSwgcmV0dXJuIHVuZGVmaW5lZFxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHR2YXIgZWxlbSwgY29tcGlsZWRUbXBsLFxuXHRcdHRtcGxPck1hcmt1cCA9IHRtcGwgPSB0bXBsIHx8IFwiXCI7XG5cdCRzdWIuX2h0bWwgPSAkY29udmVydGVycy5odG1sO1xuXG5cdC8vPT09PSBDb21waWxlIHRoZSB0ZW1wbGF0ZSA9PT09XG5cdGlmIChvcHRpb25zID09PSAwKSB7XG5cdFx0b3B0aW9ucyA9IHVuZGVmaW5lZDtcblx0XHR0bXBsT3JNYXJrdXAgPSBsb29rdXBUZW1wbGF0ZSh0bXBsT3JNYXJrdXApOyAvLyBUb3AtbGV2ZWwgY29tcGlsZSBzbyBkbyBhIHRlbXBsYXRlIGxvb2t1cFxuXHR9XG5cblx0Ly8gSWYgb3B0aW9ucywgdGhlbiB0aGlzIHdhcyBhbHJlYWR5IGNvbXBpbGVkIGZyb20gYSAoc2NyaXB0KSBlbGVtZW50IHRlbXBsYXRlIGRlY2xhcmF0aW9uLlxuXHQvLyBJZiBub3QsIHRoZW4gaWYgdG1wbCBpcyBhIHRlbXBsYXRlIG9iamVjdCwgdXNlIGl0IGZvciBvcHRpb25zXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8ICh0bXBsLm1hcmt1cFxuXHRcdD8gdG1wbC5ibmRzXG5cdFx0XHQ/ICRleHRlbmQoe30sIHRtcGwpXG5cdFx0XHQ6IHRtcGxcblx0XHQ6IHt9XG5cdCk7XG5cblx0b3B0aW9ucy50bXBsTmFtZSA9IG9wdGlvbnMudG1wbE5hbWUgfHwgbmFtZSB8fCBcInVubmFtZWRcIjtcblx0aWYgKHBhcmVudFRtcGwpIHtcblx0XHRvcHRpb25zLl9wYXJlbnRUbXBsID0gcGFyZW50VG1wbDtcblx0fVxuXHQvLyBJZiB0bXBsIGlzIG5vdCBhIG1hcmt1cCBzdHJpbmcgb3IgYSBzZWxlY3RvciBzdHJpbmcsIHRoZW4gaXQgbXVzdCBiZSBhIHRlbXBsYXRlIG9iamVjdFxuXHQvLyBJbiB0aGF0IGNhc2UsIGdldCBpdCBmcm9tIHRoZSBtYXJrdXAgcHJvcGVydHkgb2YgdGhlIG9iamVjdFxuXHRpZiAoIXRtcGxPck1hcmt1cCAmJiB0bXBsLm1hcmt1cCAmJiAodG1wbE9yTWFya3VwID0gbG9va3VwVGVtcGxhdGUodG1wbC5tYXJrdXApKSAmJiB0bXBsT3JNYXJrdXAuZm4pIHtcblx0XHQvLyBJZiB0aGUgc3RyaW5nIHJlZmVyZW5jZXMgYSBjb21waWxlZCB0ZW1wbGF0ZSBvYmplY3QsIG5lZWQgdG8gcmVjb21waWxlIHRvIG1lcmdlIGFueSBtb2RpZmllZCBvcHRpb25zXG5cdFx0dG1wbE9yTWFya3VwID0gdG1wbE9yTWFya3VwLm1hcmt1cDtcblx0fVxuXHRpZiAodG1wbE9yTWFya3VwICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAodG1wbE9yTWFya3VwLnJlbmRlciB8fCB0bXBsLnJlbmRlcikge1xuXHRcdFx0Ly8gdG1wbCBpcyBhbHJlYWR5IGNvbXBpbGVkLCBzbyB1c2UgaXRcblx0XHRcdGlmICh0bXBsT3JNYXJrdXAudG1wbHMpIHtcblx0XHRcdFx0Y29tcGlsZWRUbXBsID0gdG1wbE9yTWFya3VwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0bXBsT3JNYXJrdXAgaXMgYSBtYXJrdXAgc3RyaW5nLCBub3QgYSBjb21waWxlZCB0ZW1wbGF0ZVxuXHRcdFx0Ly8gQ3JlYXRlIHRlbXBsYXRlIG9iamVjdFxuXHRcdFx0dG1wbCA9IHRtcGxPYmplY3QodG1wbE9yTWFya3VwLCBvcHRpb25zKTtcblx0XHRcdC8vIENvbXBpbGUgdG8gQVNUIGFuZCB0aGVuIHRvIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0XHR0bXBsRm4odG1wbE9yTWFya3VwLnJlcGxhY2UockVzY2FwZVF1b3RlcywgXCJcXFxcJCZcIiksIHRtcGwpO1xuXHRcdH1cblx0XHRpZiAoIWNvbXBpbGVkVG1wbCkge1xuXHRcdFx0Y29tcGlsZWRUbXBsID0gJGV4dGVuZChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBpbGVkVG1wbC5yZW5kZXIuYXBwbHkoY29tcGlsZWRUbXBsLCBhcmd1bWVudHMpO1xuXHRcdFx0fSwgdG1wbCk7XG5cblx0XHRcdGNvbXBpbGVDaGlsZFJlc291cmNlcyhjb21waWxlZFRtcGwpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcGlsZWRUbXBsO1xuXHR9XG59XG5cbi8vPT09PSAvZW5kIG9mIGZ1bmN0aW9uIGNvbXBpbGVUbXBsID09PT1cblxuLy89PT09PT09PT09PT09PT09PVxuLy8gY29tcGlsZVZpZXdNb2RlbFxuLy89PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsKGRlZmF1bHRWYWwsIGRhdGEpIHtcblx0cmV0dXJuICRpc0Z1bmN0aW9uKGRlZmF1bHRWYWwpXG5cdFx0PyBkZWZhdWx0VmFsLmNhbGwoZGF0YSlcblx0XHQ6IGRlZmF1bHRWYWw7XG59XG5cbmZ1bmN0aW9uIGFkZFBhcmVudFJlZihvYiwgcmVmLCBwYXJlbnQpIHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iLCByZWYsIHtcblx0XHR2YWx1ZTogcGFyZW50LFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVZpZXdNb2RlbChuYW1lLCB0eXBlKSB7XG5cdHZhciBpLCBjb25zdHJ1Y3RvciwgcGFyZW50LFxuXHRcdHZpZXdNb2RlbHMgPSB0aGlzLFxuXHRcdGdldHRlcnMgPSB0eXBlLmdldHRlcnMsXG5cdFx0ZXh0ZW5kID0gdHlwZS5leHRlbmQsXG5cdFx0aWQgPSB0eXBlLmlkLFxuXHRcdHByb3RvID0gJC5leHRlbmQoe1xuXHRcdFx0X2lzOiBuYW1lIHx8IFwidW5uYW1lZFwiLFxuXHRcdFx0dW5tYXA6IHVubWFwLFxuXHRcdFx0bWVyZ2U6IG1lcmdlXG5cdFx0fSwgZXh0ZW5kKSxcblx0XHRhcmdzID0gXCJcIixcblx0XHRjbnN0ciA9IFwiXCIsXG5cdFx0Z2V0dGVyQ291bnQgPSBnZXR0ZXJzID8gZ2V0dGVycy5sZW5ndGggOiAwLFxuXHRcdCRvYnNlcnZhYmxlID0gJC5vYnNlcnZhYmxlLFxuXHRcdGdldHRlck5hbWVzID0ge307XG5cblx0ZnVuY3Rpb24gSnN2Vm0oYXJncykge1xuXHRcdGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdm0oKSB7XG5cdFx0cmV0dXJuIG5ldyBKc3ZWbShhcmd1bWVudHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXRlcmF0ZShkYXRhLCBhY3Rpb24pIHtcblx0XHR2YXIgZ2V0dGVyVHlwZSwgZGVmYXVsdFZhbCwgcHJvcCwgb2IsIHBhcmVudFJlZixcblx0XHRcdGogPSAwO1xuXHRcdGZvciAoOyBqIDwgZ2V0dGVyQ291bnQ7IGorKykge1xuXHRcdFx0cHJvcCA9IGdldHRlcnNbal07XG5cdFx0XHRnZXR0ZXJUeXBlID0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHByb3AgKyBcIlwiICE9PSBwcm9wKSB7XG5cdFx0XHRcdGdldHRlclR5cGUgPSBwcm9wO1xuXHRcdFx0XHRwcm9wID0gZ2V0dGVyVHlwZS5nZXR0ZXI7XG5cdFx0XHRcdHBhcmVudFJlZiA9IGdldHRlclR5cGUucGFyZW50UmVmO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChvYiA9IGRhdGFbcHJvcF0pID09PSB1bmRlZmluZWQgJiYgZ2V0dGVyVHlwZSAmJiAoZGVmYXVsdFZhbCA9IGdldHRlclR5cGUuZGVmYXVsdFZhbCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRvYiA9IGdldERlZmF1bHRWYWwoZGVmYXVsdFZhbCwgZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRhY3Rpb24ob2IsIGdldHRlclR5cGUgJiYgdmlld01vZGVsc1tnZXR0ZXJUeXBlLnR5cGVdLCBwcm9wLCBwYXJlbnRSZWYpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1hcChkYXRhKSB7XG5cdFx0ZGF0YSA9IGRhdGEgKyBcIlwiID09PSBkYXRhXG5cdFx0XHQ/IEpTT04ucGFyc2UoZGF0YSkgLy8gQWNjZXB0IEpTT04gc3RyaW5nXG5cdFx0XHQ6IGRhdGE7ICAgICAgICAgICAgLy8gb3Igb2JqZWN0L2FycmF5XG5cdFx0dmFyIGwsIHByb3AsIGNoaWxkT2IsIHBhcmVudFJlZixcblx0XHRcdGogPSAwLFxuXHRcdFx0b2IgPSBkYXRhLFxuXHRcdFx0YXJyID0gW107XG5cblx0XHRpZiAoJGlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdGRhdGEgPSBkYXRhIHx8IFtdO1xuXHRcdFx0bCA9IGRhdGEubGVuZ3RoO1xuXHRcdFx0Zm9yICg7IGo8bDsgaisrKSB7XG5cdFx0XHRcdGFyci5wdXNoKHRoaXMubWFwKGRhdGFbal0pKTtcblx0XHRcdH1cblx0XHRcdGFyci5faXMgPSBuYW1lO1xuXHRcdFx0YXJyLnVubWFwID0gdW5tYXA7XG5cdFx0XHRhcnIubWVyZ2UgPSBtZXJnZTtcblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGl0ZXJhdGUoZGF0YSwgZnVuY3Rpb24ob2IsIHZpZXdNb2RlbCkge1xuXHRcdFx0XHRpZiAodmlld01vZGVsKSB7IC8vIEl0ZXJhdGUgdG8gYnVpbGQgZ2V0dGVycyBhcmcgYXJyYXkgKHZhbHVlLCBvciBtYXBwZWQgdmFsdWUpXG5cdFx0XHRcdFx0b2IgPSB2aWV3TW9kZWwubWFwKG9iKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhcnIucHVzaChvYik7XG5cdFx0XHR9KTtcblx0XHRcdG9iID0gdGhpcy5hcHBseSh0aGlzLCBhcnIpOyAvLyBJbnN0YW50aWF0ZSB0aGlzIFZpZXcgTW9kZWwsIHBhc3NpbmcgZ2V0dGVycyBhcmdzIGFycmF5IHRvIGNvbnN0cnVjdG9yXG5cdFx0XHRqID0gZ2V0dGVyQ291bnQ7XG5cdFx0XHR3aGlsZSAoai0tKSB7XG5cdFx0XHRcdGNoaWxkT2IgPSBhcnJbal07XG5cdFx0XHRcdHBhcmVudFJlZiA9IGdldHRlcnNbal0ucGFyZW50UmVmO1xuXHRcdFx0XHRpZiAocGFyZW50UmVmICYmIGNoaWxkT2IgJiYgY2hpbGRPYi51bm1hcCkge1xuXHRcdFx0XHRcdGlmICgkaXNBcnJheShjaGlsZE9iKSkge1xuXHRcdFx0XHRcdFx0bCA9IGNoaWxkT2IubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGwtLSkge1xuXHRcdFx0XHRcdFx0XHRhZGRQYXJlbnRSZWYoY2hpbGRPYltsXSwgcGFyZW50UmVmLCBvYik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFkZFBhcmVudFJlZihjaGlsZE9iLCBwYXJlbnRSZWYsIG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAocHJvcCBpbiBkYXRhKSB7IC8vIENvcHkgb3ZlciBhbnkgb3RoZXIgcHJvcGVydGllcy4gdGhhdCBhcmUgbm90IGdldC9zZXQgcHJvcGVydGllc1xuXHRcdFx0XHRpZiAocHJvcCAhPT0gJGV4cGFuZG8gJiYgIWdldHRlck5hbWVzW3Byb3BdKSB7XG5cdFx0XHRcdFx0b2JbcHJvcF0gPSBkYXRhW3Byb3BdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvYjtcblx0fVxuXG5cdGZ1bmN0aW9uIG1lcmdlKGRhdGEsIHBhcmVudCwgcGFyZW50UmVmKSB7XG5cdFx0ZGF0YSA9IGRhdGEgKyBcIlwiID09PSBkYXRhXG5cdFx0XHQ/IEpTT04ucGFyc2UoZGF0YSkgLy8gQWNjZXB0IEpTT04gc3RyaW5nXG5cdFx0XHQ6IGRhdGE7ICAgICAgICAgICAgLy8gb3Igb2JqZWN0L2FycmF5XG5cblx0XHR2YXIgaiwgbCwgbSwgcHJvcCwgbW9kLCBmb3VuZCwgYXNzaWduZWQsIG9iLCBuZXdNb2RBcnIsIGNoaWxkT2IsXG5cdFx0XHRrID0gMCxcblx0XHRcdG1vZGVsID0gdGhpcztcblxuXHRcdGlmICgkaXNBcnJheShtb2RlbCkpIHtcblx0XHRcdGFzc2lnbmVkID0ge307XG5cdFx0XHRuZXdNb2RBcnIgPSBbXTtcblx0XHRcdGwgPSBkYXRhLmxlbmd0aDtcblx0XHRcdG0gPSBtb2RlbC5sZW5ndGg7XG5cdFx0XHRmb3IgKDsgazxsOyBrKyspIHtcblx0XHRcdFx0b2IgPSBkYXRhW2tdO1xuXHRcdFx0XHRmb3VuZCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGo9MDsgajxtICYmICFmb3VuZDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGFzc2lnbmVkW2pdKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kID0gbW9kZWxbal07XG5cblx0XHRcdFx0XHRpZiAoaWQpIHtcblx0XHRcdFx0XHRcdGFzc2lnbmVkW2pdID0gZm91bmQgPSBpZCArIFwiXCIgPT09IGlkXG5cdFx0XHRcdFx0XHQ/IChvYltpZF0gJiYgKGdldHRlck5hbWVzW2lkXSA/IG1vZFtpZF0oKSA6IG1vZFtpZF0pID09PSBvYltpZF0pXG5cdFx0XHRcdFx0XHQ6IGlkKG1vZCwgb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZm91bmQpIHtcblx0XHRcdFx0XHRtb2QubWVyZ2Uob2IpO1xuXHRcdFx0XHRcdG5ld01vZEFyci5wdXNoKG1vZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3TW9kQXJyLnB1c2goY2hpbGRPYiA9IHZtLm1hcChvYikpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRSZWYpIHtcblx0XHRcdFx0XHRcdGFkZFBhcmVudFJlZihjaGlsZE9iLCBwYXJlbnRSZWYsIHBhcmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoJG9ic2VydmFibGUpIHtcblx0XHRcdFx0JG9ic2VydmFibGUobW9kZWwpLnJlZnJlc2gobmV3TW9kQXJyLCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vZGVsLnNwbGljZS5hcHBseShtb2RlbCwgWzAsIG1vZGVsLmxlbmd0aF0uY29uY2F0KG5ld01vZEFycikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpdGVyYXRlKGRhdGEsIGZ1bmN0aW9uKG9iLCB2aWV3TW9kZWwsIGdldHRlciwgcGFyZW50UmVmKSB7XG5cdFx0XHRpZiAodmlld01vZGVsKSB7XG5cdFx0XHRcdG1vZGVsW2dldHRlcl0oKS5tZXJnZShvYiwgbW9kZWwsIHBhcmVudFJlZik7IC8vIFVwZGF0ZSB0eXBlZCBwcm9wZXJ0eVxuXHRcdFx0fSBlbHNlIGlmIChtb2RlbFtnZXR0ZXJdKCkgIT09IG9iKSB7XG5cdFx0XHRcdG1vZGVsW2dldHRlcl0ob2IpOyAvLyBVcGRhdGUgbm9uLXR5cGVkIHByb3BlcnR5XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9yIChwcm9wIGluIGRhdGEpIHtcblx0XHRcdGlmIChwcm9wICE9PSAkZXhwYW5kbyAmJiAhZ2V0dGVyTmFtZXNbcHJvcF0pIHtcblx0XHRcdFx0bW9kZWxbcHJvcF0gPSBkYXRhW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHVubWFwKCkge1xuXHRcdHZhciBvYiwgcHJvcCwgZ2V0dGVyVHlwZSwgYXJyLCB2YWx1ZSxcblx0XHRcdGsgPSAwLFxuXHRcdFx0bW9kZWwgPSB0aGlzO1xuXG5cdFx0ZnVuY3Rpb24gdW5tYXBBcnJheShtb2RlbEFycikge1xuXHRcdFx0dmFyIGFyciA9IFtdLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IG1vZGVsQXJyLmxlbmd0aDtcblx0XHRcdGZvciAoOyBpPGw7IGkrKykge1xuXHRcdFx0XHRhcnIucHVzaChtb2RlbEFycltpXS51bm1hcCgpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0aWYgKCRpc0FycmF5KG1vZGVsKSkge1xuXHRcdFx0cmV0dXJuIHVubWFwQXJyYXkobW9kZWwpO1xuXHRcdH1cblx0XHRvYiA9IHt9O1xuXHRcdGZvciAoOyBrIDwgZ2V0dGVyQ291bnQ7IGsrKykge1xuXHRcdFx0cHJvcCA9IGdldHRlcnNba107XG5cdFx0XHRnZXR0ZXJUeXBlID0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHByb3AgKyBcIlwiICE9PSBwcm9wKSB7XG5cdFx0XHRcdGdldHRlclR5cGUgPSBwcm9wO1xuXHRcdFx0XHRwcm9wID0gZ2V0dGVyVHlwZS5nZXR0ZXI7XG5cdFx0XHR9XG5cdFx0XHR2YWx1ZSA9IG1vZGVsW3Byb3BdKCk7XG5cdFx0XHRvYltwcm9wXSA9IGdldHRlclR5cGUgJiYgdmFsdWUgJiYgdmlld01vZGVsc1tnZXR0ZXJUeXBlLnR5cGVdXG5cdFx0XHRcdD8gJGlzQXJyYXkodmFsdWUpXG5cdFx0XHRcdFx0PyB1bm1hcEFycmF5KHZhbHVlKVxuXHRcdFx0XHRcdDogdmFsdWUudW5tYXAoKVxuXHRcdFx0XHQ6IHZhbHVlO1xuXHRcdH1cblx0XHRmb3IgKHByb3AgaW4gbW9kZWwpIHtcblx0XHRcdGlmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiAocHJvcC5jaGFyQXQoMCkgIT09IFwiX1wiIHx8ICFnZXR0ZXJOYW1lc1twcm9wLnNsaWNlKDEpXSkgJiYgcHJvcCAhPT0gJGV4cGFuZG8gICYmICEkaXNGdW5jdGlvbihtb2RlbFtwcm9wXSkpIHtcblx0XHRcdFx0b2JbcHJvcF0gPSBtb2RlbFtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG9iO1xuXHR9XG5cblx0SnN2Vm0ucHJvdG90eXBlID0gcHJvdG87XG5cblx0Zm9yIChpPTA7IGkgPCBnZXR0ZXJDb3VudDsgaSsrKSB7XG5cdFx0KGZ1bmN0aW9uKGdldHRlcikge1xuXHRcdFx0Z2V0dGVyID0gZ2V0dGVyLmdldHRlciB8fCBnZXR0ZXI7XG5cdFx0XHRnZXR0ZXJOYW1lc1tnZXR0ZXJdID0gaSsxO1xuXHRcdFx0dmFyIHByaXZGaWVsZCA9IFwiX1wiICsgZ2V0dGVyO1xuXG5cdFx0XHRhcmdzICs9IChhcmdzID8gXCIsXCIgOiBcIlwiKSArIGdldHRlcjtcblx0XHRcdGNuc3RyICs9IFwidGhpcy5cIiArIHByaXZGaWVsZCArIFwiID0gXCIgKyBnZXR0ZXIgKyBcIjtcXG5cIjtcblx0XHRcdHByb3RvW2dldHRlcl0gPSBwcm90b1tnZXR0ZXJdIHx8IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpc1twcml2RmllbGRdOyAvLyBJZiB0aGVyZSBpcyBubyBhcmd1bWVudCwgdXNlIGFzIGEgZ2V0dGVyXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCRvYnNlcnZhYmxlKSB7XG5cdFx0XHRcdFx0JG9ic2VydmFibGUodGhpcykuc2V0UHJvcGVydHkoZ2V0dGVyLCB2YWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXNbcHJpdkZpZWxkXSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCRvYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHByb3RvW2dldHRlcl0uc2V0ID0gcHJvdG9bZ2V0dGVyXS5zZXQgfHwgZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdFx0dGhpc1twcml2RmllbGRdID0gdmFsOyAvLyBTZXR0ZXIgY2FsbGVkIGJ5IG9ic2VydmFibGUgcHJvcGVydHkgY2hhbmdlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSkoZ2V0dGVyc1tpXSk7XG5cdH1cblxuXHQvLyBDb25zdHJ1Y3RvciBmb3IgbmV3IHZpZXdNb2RlbCBpbnN0YW5jZS5cblx0Y25zdHIgPSBuZXcgRnVuY3Rpb24oYXJncywgY25zdHIpO1xuXG5cdGNvbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG5cdFx0Y25zdHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHQvLyBQYXNzIGFkZGl0aW9uYWwgcGFyZW50UmVmIHN0ciBhbmQgcGFyZW50IG9iaiB0byBoYXZlIGEgcGFyZW50UmVmIHBvaW50ZXIgb24gaW5zdGFuY2Vcblx0XHRpZiAocGFyZW50ID0gYXJndW1lbnRzW2dldHRlckNvdW50ICsgMV0pIHtcblx0XHRcdGFkZFBhcmVudFJlZih0aGlzLCBhcmd1bWVudHNbZ2V0dGVyQ291bnRdLCBwYXJlbnQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90bztcblx0cHJvdG8uY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcblxuXHR2bS5tYXAgPSBtYXA7XG5cdHZtLmdldHRlcnMgPSBnZXR0ZXJzO1xuXHR2bS5leHRlbmQgPSBleHRlbmQ7XG5cdHZtLmlkID0gaWQ7XG5cdHJldHVybiB2bTtcbn1cblxuZnVuY3Rpb24gdG1wbE9iamVjdChtYXJrdXAsIG9wdGlvbnMpIHtcblx0Ly8gVGVtcGxhdGUgb2JqZWN0IGNvbnN0cnVjdG9yXG5cdHZhciBodG1sVGFnLFxuXHRcdHdyYXBNYXAgPSAkc3ViU2V0dGluZ3NBZHZhbmNlZC5fd20gfHwge30sIC8vIE9ubHkgdXNlZCBpbiBKc1ZpZXdzLiBPdGhlcndpc2UgZW1wdHk6IHt9XG5cdFx0dG1wbCA9IHtcblx0XHRcdHRtcGxzOiBbXSxcblx0XHRcdGxpbmtzOiB7fSwgLy8gQ29tcGlsZWQgZnVuY3Rpb25zIGZvciBsaW5rIGV4cHJlc3Npb25zXG5cdFx0XHRibmRzOiBbXSxcblx0XHRcdF9pczogXCJ0ZW1wbGF0ZVwiLFxuXHRcdFx0cmVuZGVyOiByZW5kZXJDb250ZW50XG5cdFx0fTtcblxuXHRpZiAob3B0aW9ucykge1xuXHRcdHRtcGwgPSAkZXh0ZW5kKHRtcGwsIG9wdGlvbnMpO1xuXHR9XG5cblx0dG1wbC5tYXJrdXAgPSBtYXJrdXA7XG5cdGlmICghdG1wbC5odG1sVGFnKSB7XG5cdFx0Ly8gU2V0IHRtcGwudGFnIHRvIHRoZSB0b3AtbGV2ZWwgSFRNTCB0YWcgdXNlZCBpbiB0aGUgdGVtcGxhdGUsIGlmIGFueS4uLlxuXHRcdGh0bWxUYWcgPSByRmlyc3RFbGVtLmV4ZWMobWFya3VwKTtcblx0XHR0bXBsLmh0bWxUYWcgPSBodG1sVGFnID8gaHRtbFRhZ1sxXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcblx0fVxuXHRodG1sVGFnID0gd3JhcE1hcFt0bXBsLmh0bWxUYWddO1xuXHRpZiAoaHRtbFRhZyAmJiBodG1sVGFnICE9PSB3cmFwTWFwLmRpdikge1xuXHRcdC8vIFdoZW4gdXNpbmcgSnNWaWV3cywgd2UgdHJpbSB0ZW1wbGF0ZXMgd2hpY2ggYXJlIGluc2VydGVkIGludG8gSFRNTCBjb250ZXh0cyB3aGVyZSB0ZXh0IG5vZGVzIGFyZSBub3QgcmVuZGVyZWQgKGkuZS4gbm90ICdQaHJhc2luZyBDb250ZW50JykuXG5cdFx0Ly8gQ3VycmVudGx5IG5vdCB0cmltbWVkIGZvciA8bGk+IHRhZy4gKE5vdCB3b3J0aCBhZGRpbmcgcGVyZiBjb3N0KVxuXHRcdHRtcGwubWFya3VwID0gJC50cmltKHRtcGwubWFya3VwKTtcblx0fVxuXG5cdHJldHVybiB0bXBsO1xufVxuXG4vLz09PT09PT09PT09PT09XG4vLyByZWdpc3RlclN0b3JlXG4vLz09PT09PT09PT09PT09XG5cbi8qKlxuKiBJbnRlcm5hbC4gUmVnaXN0ZXIgYSBzdG9yZSB0eXBlICh1c2VkIGZvciB0ZW1wbGF0ZSwgdGFncywgaGVscGVycywgY29udmVydGVycylcbiovXG5mdW5jdGlvbiByZWdpc3RlclN0b3JlKHN0b3JlTmFtZSwgc3RvcmVTZXR0aW5ncykge1xuXG4vKipcbiogR2VuZXJpYyBzdG9yZSgpIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyIGl0ZW0sIG5hbWVkIGl0ZW0sIG9yIGhhc2ggb2YgaXRlbXNcbiogQWxzbyB1c2VkIGFzIGhhc2ggdG8gc3RvcmUgdGhlIHJlZ2lzdGVyZWQgaXRlbXNcbiogVXNlZCBhcyBpbXBsZW1lbnRhdGlvbiBvZiAkLnRlbXBsYXRlcygpLCAkLnZpZXdzLnRlbXBsYXRlcygpLCAkLnZpZXdzLnRhZ3MoKSwgJC52aWV3cy5oZWxwZXJzKCkgYW5kICQudmlld3MuY29udmVydGVycygpXG4qXG4qIEBwYXJhbSB7c3RyaW5nfGhhc2h9IG5hbWUgICAgICAgICBuYW1lIC0gb3Igc2VsZWN0b3IsIGluIGNhc2Ugb2YgJC50ZW1wbGF0ZXMoKS4gT3IgaGFzaCBvZiBpdGVtc1xuKiBAcGFyYW0ge2FueX0gICAgICAgICBbaXRlbV0gICAgICAgKGUuZy4gbWFya3VwIGZvciBuYW1lZCB0ZW1wbGF0ZSlcbiogQHBhcmFtIHt0ZW1wbGF0ZX0gICAgW3BhcmVudFRtcGxdIEZvciBpdGVtIGJlaW5nIHJlZ2lzdGVyZWQgYXMgcHJpdmF0ZSByZXNvdXJjZSBvZiB0ZW1wbGF0ZVxuKiBAcmV0dXJucyB7YW55fCQudmlld3N9IGl0ZW0sIGUuZy4gY29tcGlsZWQgdGVtcGxhdGUgLSBvciAkLnZpZXdzIGluIGNhc2Ugb2YgcmVnaXN0ZXJpbmcgaGFzaCBvZiBpdGVtc1xuKi9cblx0ZnVuY3Rpb24gdGhlU3RvcmUobmFtZSwgaXRlbSwgcGFyZW50VG1wbCkge1xuXHRcdC8vIFRoZSBzdG9yZSBpcyBhbHNvIHRoZSBmdW5jdGlvbiB1c2VkIHRvIGFkZCBpdGVtcyB0byB0aGUgc3RvcmUuIGUuZy4gJC50ZW1wbGF0ZXMsIG9yICQudmlld3MudGFnc1xuXG5cdFx0Ly8gRm9yIHN0b3JlIG9mIG5hbWUgJ3RoaW5nJywgQ2FsbCBhczpcblx0XHQvLyAgICAkLnZpZXdzLnRoaW5ncyhpdGVtc1ssIHBhcmVudFRtcGxdKSxcblx0XHQvLyBvciAkLnZpZXdzLnRoaW5ncyhuYW1lWywgaXRlbSwgcGFyZW50VG1wbF0pXG5cblx0XHR2YXIgY29tcGlsZSwgaXRlbU5hbWUsIHRoaXNTdG9yZSwgY250LFxuXHRcdFx0b25TdG9yZSA9ICRzdWIub25TdG9yZVtzdG9yZU5hbWVdO1xuXG5cdFx0aWYgKG5hbWUgJiYgdHlwZW9mIG5hbWUgPT09IE9CSkVDVCAmJiAhbmFtZS5ub2RlVHlwZSAmJiAhbmFtZS5tYXJrdXAgJiYgIW5hbWUuZ2V0VGd0ICYmICEoc3RvcmVOYW1lID09PSBcInZpZXdNb2RlbFwiICYmIG5hbWUuZ2V0dGVycyB8fCBuYW1lLmV4dGVuZCkpIHtcblx0XHRcdC8vIENhbGwgdG8gJC52aWV3cy50aGluZ3MoaXRlbXNbLCBwYXJlbnRUbXBsXSksXG5cblx0XHRcdC8vIEFkZGluZyBpdGVtcyB0byB0aGUgc3RvcmVcblx0XHRcdC8vIElmIG5hbWUgaXMgYSBoYXNoLCB0aGVuIGl0ZW0gaXMgcGFyZW50VG1wbC4gSXRlcmF0ZSBvdmVyIGhhc2ggYW5kIGNhbGwgc3RvcmUgZm9yIGtleS5cblx0XHRcdGZvciAoaXRlbU5hbWUgaW4gbmFtZSkge1xuXHRcdFx0XHR0aGVTdG9yZShpdGVtTmFtZSwgbmFtZVtpdGVtTmFtZV0sIGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGl0ZW0gfHwgJHZpZXdzO1xuXHRcdH1cblx0XHQvLyBBZGRpbmcgYSBzaW5nbGUgdW5uYW1lZCBpdGVtIHRvIHRoZSBzdG9yZVxuXHRcdGlmIChuYW1lICYmIFwiXCIgKyBuYW1lICE9PSBuYW1lKSB7IC8vIG5hbWUgbXVzdCBiZSBhIHN0cmluZ1xuXHRcdFx0cGFyZW50VG1wbCA9IGl0ZW07XG5cdFx0XHRpdGVtID0gbmFtZTtcblx0XHRcdG5hbWUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHRoaXNTdG9yZSA9IHBhcmVudFRtcGxcblx0XHRcdD8gc3RvcmVOYW1lID09PSBcInZpZXdNb2RlbFwiXG5cdFx0XHRcdD8gcGFyZW50VG1wbFxuXHRcdFx0XHQ6IChwYXJlbnRUbXBsW3N0b3JlTmFtZXNdID0gcGFyZW50VG1wbFtzdG9yZU5hbWVzXSB8fCB7fSlcblx0XHRcdDogdGhlU3RvcmU7XG5cdFx0Y29tcGlsZSA9IHN0b3JlU2V0dGluZ3MuY29tcGlsZTtcblxuXHRcdGlmIChpdGVtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGl0ZW0gPSBjb21waWxlID8gbmFtZSA6IHRoaXNTdG9yZVtuYW1lXTtcblx0XHRcdG5hbWUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmIChpdGVtID09PSBudWxsKSB7XG5cdFx0XHQvLyBJZiBpdGVtIGlzIG51bGwsIGRlbGV0ZSB0aGlzIGVudHJ5XG5cdFx0XHRpZiAobmFtZSkge1xuXHRcdFx0XHRkZWxldGUgdGhpc1N0b3JlW25hbWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY29tcGlsZSkge1xuXHRcdFx0XHRpdGVtID0gY29tcGlsZS5jYWxsKHRoaXNTdG9yZSwgbmFtZSwgaXRlbSwgcGFyZW50VG1wbCwgMCkgfHwge307XG5cdFx0XHRcdGl0ZW0uX2lzID0gc3RvcmVOYW1lOyAvLyBPbmx5IGRvIHRoaXMgZm9yIGNvbXBpbGVkIG9iamVjdHMgKHRhZ3MsIHRlbXBsYXRlcy4uLilcblx0XHRcdH1cblx0XHRcdGlmIChuYW1lKSB7XG5cdFx0XHRcdHRoaXNTdG9yZVtuYW1lXSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChvblN0b3JlKSB7XG5cdFx0XHQvLyBlLmcuIEpzVmlld3MgaW50ZWdyYXRpb25cblx0XHRcdG9uU3RvcmUobmFtZSwgaXRlbSwgcGFyZW50VG1wbCwgY29tcGlsZSk7XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0dmFyIHN0b3JlTmFtZXMgPSBzdG9yZU5hbWUgKyBcInNcIjtcblx0JHZpZXdzW3N0b3JlTmFtZXNdID0gdGhlU3RvcmU7XG59XG5cbi8qKlxuKiBBZGQgc2V0dGluZ3Mgc3VjaCBhczpcbiogJC52aWV3cy5zZXR0aW5ncy5hbGxvd0NvZGUodHJ1ZSlcbiogQHBhcmFtIHtib29sZWFufSAgdmFsdWVcbiogQHJldHVybnMge1NldHRpbmdzfVxuKlxuKiBhbGxvd0NvZGUgPSAkLnZpZXdzLnNldHRpbmdzLmFsbG93Q29kZSgpXG4qIEByZXR1cm5zIHtib29sZWFufVxuKi9cbmZ1bmN0aW9uIGFkZFNldHRpbmcoc3QpIHtcblx0JHZpZXdzU2V0dGluZ3Nbc3RdID0gJHZpZXdzU2V0dGluZ3Nbc3RdIHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcblx0XHRcdD8gKCRzdWJTZXR0aW5nc1tzdF0gPSB2YWx1ZSwgJHZpZXdzU2V0dGluZ3MpXG5cdFx0XHQ6ICRzdWJTZXR0aW5nc1tzdF07XG5cdH07XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBkYXRhTWFwIGZvciByZW5kZXIgb25seVxuLy89PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZGF0YU1hcChtYXBEZWYpIHtcblx0ZnVuY3Rpb24gTWFwKHNvdXJjZSwgb3B0aW9ucykge1xuXHRcdHRoaXMudGd0ID0gbWFwRGVmLmdldFRndChzb3VyY2UsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMubWFwID0gdGhpcztcblx0fVxuXG5cdGlmICgkaXNGdW5jdGlvbihtYXBEZWYpKSB7XG5cdFx0Ly8gU2ltcGxlIG1hcCBkZWNsYXJlZCBhcyBmdW5jdGlvblxuXHRcdG1hcERlZiA9IHtcblx0XHRcdGdldFRndDogbWFwRGVmXG5cdFx0fTtcblx0fVxuXG5cdGlmIChtYXBEZWYuYmFzZU1hcCkge1xuXHRcdG1hcERlZiA9ICRleHRlbmQoJGV4dGVuZCh7fSwgbWFwRGVmLmJhc2VNYXApLCBtYXBEZWYpO1xuXHR9XG5cblx0bWFwRGVmLm1hcCA9IGZ1bmN0aW9uKHNvdXJjZSwgb3B0aW9ucykge1xuXHRcdHJldHVybiBuZXcgTWFwKHNvdXJjZSwgb3B0aW9ucyk7XG5cdH07XG5cdHJldHVybiBtYXBEZWY7XG59XG5cbi8vPT09PT09PT09PT09PT1cbi8vIHJlbmRlckNvbnRlbnRcbi8vPT09PT09PT09PT09PT1cblxuLyoqIFJlbmRlciB0aGUgdGVtcGxhdGUgYXMgYSBzdHJpbmcsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGF0YSBhbmQgaGVscGVycy9jb250ZXh0XG4qICQoXCIjdG1wbFwiKS5yZW5kZXIoKSwgdG1wbC5yZW5kZXIoKSwgdGFnQ3R4LnJlbmRlcigpLCAkLnJlbmRlci5uYW1lZFRtcGwoKVxuKlxuKiBAcGFyYW0ge2FueX0gICAgICAgIGRhdGFcbiogQHBhcmFtIHtoYXNofSAgICAgICBbY29udGV4dF0gICAgICAgICAgIGhlbHBlcnMgb3IgY29udGV4dFxuKiBAcGFyYW0ge2Jvb2xlYW59ICAgIFtub0l0ZXJhdGlvbl1cbiogQHBhcmFtIHtWaWV3fSAgICAgICBbcGFyZW50Vmlld10gICAgICAgIGludGVybmFsXG4qIEBwYXJhbSB7c3RyaW5nfSAgICAgW2tleV0gICAgICAgICAgICAgICBpbnRlcm5hbFxuKiBAcGFyYW0ge2Z1bmN0aW9ufSAgIFtvblJlbmRlcl0gICAgICAgICAgaW50ZXJuYWxcbiogQHJldHVybnMge3N0cmluZ30gICByZW5kZXJlZCB0ZW1wbGF0ZSAgIGludGVybmFsXG4qL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudChkYXRhLCBjb250ZXh0LCBub0l0ZXJhdGlvbiwgcGFyZW50Vmlldywga2V5LCBvblJlbmRlcikge1xuXHR2YXIgaSwgbCwgdGFnLCB0bXBsLCB0YWdDdHgsIGlzVG9wUmVuZGVyQ2FsbCwgcHJldkRhdGEsIHByZXZJbmRleCxcblx0XHR2aWV3ID0gcGFyZW50Vmlldyxcblx0XHRyZXN1bHQgPSBcIlwiO1xuXG5cdGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG5cdFx0bm9JdGVyYXRpb24gPSBjb250ZXh0OyAvLyBwYXNzaW5nIGJvb2xlYW4gYXMgc2Vjb25kIHBhcmFtIC0gbm9JdGVyYXRpb25cblx0XHRjb250ZXh0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSBPQkpFQ1QpIHtcblx0XHRjb250ZXh0ID0gdW5kZWZpbmVkOyAvLyBjb250ZXh0IG11c3QgYmUgYSBib29sZWFuIChub0l0ZXJhdGlvbikgb3IgYSBwbGFpbiBvYmplY3Rcblx0fVxuXG5cdGlmICh0YWcgPSB0aGlzLnRhZykge1xuXHRcdC8vIFRoaXMgaXMgYSBjYWxsIGZyb20gcmVuZGVyVGFnIG9yIHRhZ0N0eC5yZW5kZXIoLi4uKVxuXHRcdHRhZ0N0eCA9IHRoaXM7XG5cdFx0dmlldyA9IHZpZXcgfHwgdGFnQ3R4LnZpZXc7XG5cdFx0dG1wbCA9IHZpZXcuX2dldFRtcGwodGFnLnRlbXBsYXRlIHx8IHRhZ0N0eC50bXBsKTtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdGRhdGEgPSB0YWcuY29udGVudEN0eCAmJiAkaXNGdW5jdGlvbih0YWcuY29udGVudEN0eClcblx0XHRcdFx0PyBkYXRhID0gdGFnLmNvbnRlbnRDdHgoZGF0YSlcblx0XHRcdFx0OiB2aWV3OyAvLyBEZWZhdWx0IGRhdGEgY29udGV4dCBmb3Igd3JhcHBlZCBibG9jayBjb250ZW50IGlzIHRoZSBmaXJzdCBhcmd1bWVudFxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBUaGlzIGlzIGEgdGVtcGxhdGUucmVuZGVyKC4uLikgY2FsbFxuXHRcdHRtcGwgPSB0aGlzO1xuXHR9XG5cblx0aWYgKHRtcGwpIHtcblx0XHRpZiAoIXBhcmVudFZpZXcgJiYgZGF0YSAmJiBkYXRhLl9pcyA9PT0gXCJ2aWV3XCIpIHtcblx0XHRcdHZpZXcgPSBkYXRhOyAvLyBXaGVuIHBhc3NpbmcgaW4gYSB2aWV3IHRvIHJlbmRlciBvciBsaW5rIChhbmQgbm90IHBhc3NpbmcgaW4gYSBwYXJlbnQgdmlldykgdXNlIHRoZSBwYXNzZWQtaW4gdmlldyBhcyBwYXJlbnRWaWV3XG5cdFx0fVxuXG5cdFx0aWYgKHZpZXcgJiYgZGF0YSA9PT0gdmlldykge1xuXHRcdFx0Ly8gSW5oZXJpdCB0aGUgZGF0YSBmcm9tIHRoZSBwYXJlbnQgdmlldy5cblx0XHRcdGRhdGEgPSB2aWV3LmRhdGE7XG5cdFx0fVxuXG5cdFx0aXNUb3BSZW5kZXJDYWxsID0gIXZpZXc7XG5cdFx0aXNSZW5kZXJDYWxsID0gaXNSZW5kZXJDYWxsIHx8IGlzVG9wUmVuZGVyQ2FsbDtcblx0XHRpZiAoIXZpZXcpIHtcblx0XHRcdChjb250ZXh0ID0gY29udGV4dCB8fCB7fSkucm9vdCA9IGRhdGE7IC8vIFByb3ZpZGUgfnJvb3QgYXMgc2hvcnRjdXQgdG8gdG9wLWxldmVsIGRhdGEuXG5cdFx0fVxuXHRcdGlmICghaXNSZW5kZXJDYWxsIHx8ICRzdWJTZXR0aW5nc0FkdmFuY2VkLnVzZVZpZXdzIHx8IHRtcGwudXNlVmlld3MgfHwgdmlldyAmJiB2aWV3ICE9PSB0b3BWaWV3KSB7XG5cdFx0XHRyZXN1bHQgPSByZW5kZXJXaXRoVmlld3ModG1wbCwgZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24sIHZpZXcsIGtleSwgb25SZW5kZXIsIHRhZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh2aWV3KSB7IC8vIEluIGEgYmxvY2tcblx0XHRcdFx0cHJldkRhdGEgPSB2aWV3LmRhdGE7XG5cdFx0XHRcdHByZXZJbmRleCA9IHZpZXcuaW5kZXg7XG5cdFx0XHRcdHZpZXcuaW5kZXggPSBpbmRleFN0cjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZpZXcgPSB0b3BWaWV3O1xuXHRcdFx0XHRwcmV2RGF0YSA9IHZpZXcuZGF0YTtcblx0XHRcdFx0dmlldy5kYXRhID0gZGF0YTtcblx0XHRcdFx0dmlldy5jdHggPSBjb250ZXh0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRpc0FycmF5KGRhdGEpICYmICFub0l0ZXJhdGlvbikge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSB2aWV3IGZvciB0aGUgYXJyYXksIHdob3NlIGNoaWxkIHZpZXdzIGNvcnJlc3BvbmQgdG8gZWFjaCBkYXRhIGl0ZW0uIChOb3RlOiBpZiBrZXkgYW5kIHBhcmVudFZpZXcgYXJlIHBhc3NlZCBpblxuXHRcdFx0XHQvLyBhbG9uZyB3aXRoIHBhcmVudCB2aWV3LCB0cmVhdCBhcyBpbnNlcnQgLWUuZy4gZnJvbSB2aWV3LmFkZFZpZXdzIC0gc28gcGFyZW50VmlldyBpcyBhbHJlYWR5IHRoZSB2aWV3IGl0ZW0gZm9yIGFycmF5KVxuXHRcdFx0XHRmb3IgKGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHR2aWV3LmluZGV4ID0gaTtcblx0XHRcdFx0XHR2aWV3LmRhdGEgPSBkYXRhW2ldO1xuXHRcdFx0XHRcdHJlc3VsdCArPSB0bXBsLmZuKGRhdGFbaV0sIHZpZXcsICRzdWIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2aWV3LmRhdGEgPSBkYXRhO1xuXHRcdFx0XHRyZXN1bHQgKz0gdG1wbC5mbihkYXRhLCB2aWV3LCAkc3ViKTtcblx0XHRcdH1cblx0XHRcdHZpZXcuZGF0YSA9IHByZXZEYXRhO1xuXHRcdFx0dmlldy5pbmRleCA9IHByZXZJbmRleDtcblx0XHR9XG5cdFx0aWYgKGlzVG9wUmVuZGVyQ2FsbCkge1xuXHRcdFx0aXNSZW5kZXJDYWxsID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZW5kZXJXaXRoVmlld3ModG1wbCwgZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24sIHZpZXcsIGtleSwgb25SZW5kZXIsIHRhZykge1xuXHQvLyBSZW5kZXIgdGVtcGxhdGUgYWdhaW5zdCBkYXRhIGFzIGEgdHJlZSBvZiBzdWJ2aWV3cyAobmVzdGVkIHJlbmRlcmVkIHRlbXBsYXRlIGluc3RhbmNlcyksIG9yIGFzIGEgc3RyaW5nICh0b3AtbGV2ZWwgdGVtcGxhdGUpLlxuXHQvLyBJZiB0aGUgZGF0YSBpcyB0aGUgcGFyZW50IHZpZXcsIHRyZWF0IGFzIG5vSXRlcmF0aW9uLCByZS1yZW5kZXIgd2l0aCB0aGUgc2FtZSBkYXRhIGNvbnRleHQuXG5cdC8vIHRtcGwgY2FuIGJlIGEgc3RyaW5nIChlLmcuIHJlbmRlcmVkIGJ5IGEgdGFnLnJlbmRlcigpIG1ldGhvZCksIG9yIGEgY29tcGlsZWQgdGVtcGxhdGUuXG5cdHZhciBpLCBsLCBuZXdWaWV3LCBjaGlsZFZpZXcsIGl0ZW1SZXN1bHQsIHN3YXBDb250ZW50LCBjb250ZW50VG1wbCwgb3V0ZXJPblJlbmRlciwgdG1wbE5hbWUsIGl0ZW1WYXIsIG5ld0N0eCwgdGFnQ3R4LCBub0xpbmtpbmcsXG5cdFx0cmVzdWx0ID0gXCJcIjtcblxuXHRpZiAodGFnKSB7XG5cdFx0Ly8gVGhpcyBpcyBhIGNhbGwgZnJvbSByZW5kZXJUYWcgb3IgdGFnQ3R4LnJlbmRlciguLi4pXG5cdFx0dG1wbE5hbWUgPSB0YWcudGFnTmFtZTtcblx0XHR0YWdDdHggPSB0YWcudGFnQ3R4O1xuXHRcdGNvbnRleHQgPSBjb250ZXh0ID8gZXh0ZW5kQ3R4KGNvbnRleHQsIHRhZy5jdHgpIDogdGFnLmN0eDtcblxuXHRcdGlmICh0bXBsID09PSB2aWV3LmNvbnRlbnQpIHsgLy8ge3t4eHggdG1wbD0jY29udGVudH19XG5cdFx0XHRjb250ZW50VG1wbCA9IHRtcGwgIT09IHZpZXcuY3R4Ll93cnAgLy8gV2UgYXJlIHJlbmRlcmluZyB0aGUgI2NvbnRlbnRcblx0XHRcdFx0PyB2aWV3LmN0eC5fd3JwIC8vICNjb250ZW50IHdhcyB0aGUgdGFnQ3R4LnByb3BzLnRtcGwgd3JhcHBlciBvZiB0aGUgYmxvY2sgY29udGVudCAtIHNvIHdpdGhpbiB0aGlzIHZpZXcsICNjb250ZW50IHdpbGwgbm93IGJlIHRoZSB2aWV3LmN0eC5fd3JwIGJsb2NrIGNvbnRlbnRcblx0XHRcdFx0OiB1bmRlZmluZWQ7IC8vICNjb250ZW50IHdhcyB0aGUgdmlldy5jdHguX3dycCBibG9jayBjb250ZW50IC0gc28gd2l0aGluIHRoaXMgdmlldywgdGhlcmUgaXMgbm8gbG9uZ2VyIGFueSAjY29udGVudCB0byB3cmFwLlxuXHRcdH0gZWxzZSBpZiAodG1wbCAhPT0gdGFnQ3R4LmNvbnRlbnQpIHtcblx0XHRcdGlmICh0bXBsID09PSB0YWcudGVtcGxhdGUpIHsgLy8gUmVuZGVyaW5nIHt7dGFnfX0gdGFnLnRlbXBsYXRlLCByZXBsYWNpbmcgYmxvY2sgY29udGVudC5cblx0XHRcdFx0Y29udGVudFRtcGwgPSB0YWdDdHgudG1wbDsgLy8gU2V0ICNjb250ZW50IHRvIGJsb2NrIGNvbnRlbnQgKG9yIHdyYXBwZWQgYmxvY2sgY29udGVudCBpZiB0YWdDdHgucHJvcHMudG1wbCBpcyBzZXQpXG5cdFx0XHRcdGNvbnRleHQuX3dycCA9IHRhZ0N0eC5jb250ZW50OyAvLyBQYXNzIHdyYXBwZWQgYmxvY2sgY29udGVudCB0byBuZXN0ZWQgdmlld3Ncblx0XHRcdH0gZWxzZSB7IC8vIFJlbmRlcmluZyB0YWdDdHgucHJvcHMudG1wbCB3cmFwcGVyXG5cdFx0XHRcdGNvbnRlbnRUbXBsID0gdGFnQ3R4LmNvbnRlbnQgfHwgdmlldy5jb250ZW50OyAvLyBTZXQgI2NvbnRlbnQgdG8gd3JhcHBlZCBibG9jayBjb250ZW50XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRlbnRUbXBsID0gdmlldy5jb250ZW50OyAvLyBOZXN0ZWQgdmlld3MgaW5oZXJpdCBzYW1lIHdyYXBwZWQgI2NvbnRlbnQgcHJvcGVydHlcblx0XHR9XG5cblx0XHRpZiAodGFnQ3R4LnByb3BzLmxpbmsgPT09IGZhbHNlKSB7XG5cdFx0XHQvLyBsaW5rPWZhbHNlIHNldHRpbmcgb24gYmxvY2sgdGFnXG5cdFx0XHQvLyBXZSB3aWxsIG92ZXJyaWRlIGluaGVyaXRlZCB2YWx1ZSBvZiBsaW5rIGJ5IHRoZSBleHBsaWNpdCBzZXR0aW5nIGxpbms9ZmFsc2UgdGFrZW4gZnJvbSBwcm9wc1xuXHRcdFx0Ly8gVGhlIGNoaWxkIHZpZXdzIG9mIGFuIHVubGlua2VkIHZpZXcgYXJlIGFsc28gdW5saW5rZWQuIFNvIHNldHRpbmcgY2hpbGQgYmFjayB0byB0cnVlIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdC5cblx0XHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXHRcdFx0Y29udGV4dC5saW5rID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHZpZXcpIHtcblx0XHRvblJlbmRlciA9IG9uUmVuZGVyIHx8IHZpZXcuXy5vblJlbmRlcjtcblx0XHRub0xpbmtpbmcgPSBjb250ZXh0ICYmIGNvbnRleHQubGluayA9PT0gZmFsc2U7XG5cblx0XHRpZiAobm9MaW5raW5nICYmIHZpZXcuXy5ubCkge1xuXHRcdFx0b25SZW5kZXIgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Y29udGV4dCA9IGV4dGVuZEN0eChjb250ZXh0LCB2aWV3LmN0eCk7XG5cdFx0dGFnQ3R4ID0gIXRhZyAmJiB2aWV3LnRhZ1xuXHRcdFx0PyB2aWV3LnRhZy50YWdDdHhzW3ZpZXcudGFnRWxzZV1cblx0XHRcdDogdGFnQ3R4O1xuXHR9XG5cblx0aWYgKGl0ZW1WYXIgPSB0YWdDdHggJiYgdGFnQ3R4LnByb3BzLml0ZW1WYXIpIHtcblx0XHRpZiAoaXRlbVZhclswXSAhPT0gXCJ+XCIpIHtcblx0XHRcdHN5bnRheEVycm9yKFwiVXNlIGl0ZW1WYXI9J35teUl0ZW0nXCIpO1xuXHRcdH1cblx0XHRpdGVtVmFyID0gaXRlbVZhci5zbGljZSgxKTtcblx0fVxuXG5cdGlmIChrZXkgPT09IHRydWUpIHtcblx0XHRzd2FwQ29udGVudCA9IHRydWU7XG5cdFx0a2V5ID0gMDtcblx0fVxuXG5cdC8vIElmIGxpbms9PT1mYWxzZSwgZG8gbm90IGNhbGwgb25SZW5kZXIsIHNvIG5vIGRhdGEtbGlua2luZyBtYXJrZXIgbm9kZXNcblx0aWYgKG9uUmVuZGVyICYmIHRhZyAmJiB0YWcuXy5ub1Z3cykge1xuXHRcdG9uUmVuZGVyID0gdW5kZWZpbmVkO1xuXHR9XG5cdG91dGVyT25SZW5kZXIgPSBvblJlbmRlcjtcblx0aWYgKG9uUmVuZGVyID09PSB0cnVlKSB7XG5cdFx0Ly8gVXNlZCBieSB2aWV3LnJlZnJlc2goKS4gRG9uJ3QgY3JlYXRlIGEgbmV3IHdyYXBwZXIgdmlldy5cblx0XHRvdXRlck9uUmVuZGVyID0gdW5kZWZpbmVkO1xuXHRcdG9uUmVuZGVyID0gdmlldy5fLm9uUmVuZGVyO1xuXHR9XG5cdC8vIFNldCBhZGRpdGlvbmFsIGNvbnRleHQgb24gdmlld3MgY3JlYXRlZCBoZXJlLCAoYXMgbW9kaWZpZWQgY29udGV4dCBpbmhlcml0ZWQgZnJvbSB0aGUgcGFyZW50LCBhbmQgdG8gYmUgaW5oZXJpdGVkIGJ5IGNoaWxkIHZpZXdzKVxuXHRjb250ZXh0ID0gdG1wbC5oZWxwZXJzXG5cdFx0PyBleHRlbmRDdHgodG1wbC5oZWxwZXJzLCBjb250ZXh0KVxuXHRcdDogY29udGV4dDtcblxuXHRuZXdDdHggPSBjb250ZXh0O1xuXHRpZiAoJGlzQXJyYXkoZGF0YSkgJiYgIW5vSXRlcmF0aW9uKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgdmlldyBmb3IgdGhlIGFycmF5LCB3aG9zZSBjaGlsZCB2aWV3cyBjb3JyZXNwb25kIHRvIGVhY2ggZGF0YSBpdGVtLiAoTm90ZTogaWYga2V5IGFuZCB2aWV3IGFyZSBwYXNzZWQgaW5cblx0XHQvLyBhbG9uZyB3aXRoIHBhcmVudCB2aWV3LCB0cmVhdCBhcyBpbnNlcnQgLWUuZy4gZnJvbSB2aWV3LmFkZFZpZXdzIC0gc28gdmlldyBpcyBhbHJlYWR5IHRoZSB2aWV3IGl0ZW0gZm9yIGFycmF5KVxuXHRcdG5ld1ZpZXcgPSBzd2FwQ29udGVudFxuXHRcdFx0PyB2aWV3XG5cdFx0XHQ6IChrZXkgIT09IHVuZGVmaW5lZCAmJiB2aWV3KVxuXHRcdFx0XHR8fCBuZXcgVmlldyhjb250ZXh0LCBcImFycmF5XCIsIHZpZXcsIGRhdGEsIHRtcGwsIGtleSwgb25SZW5kZXIsIGNvbnRlbnRUbXBsKTtcblx0XHRuZXdWaWV3Ll8ubmw9IG5vTGlua2luZztcblx0XHRpZiAodmlldyAmJiB2aWV3Ll8udXNlS2V5KSB7XG5cdFx0XHQvLyBQYXJlbnQgaXMgbm90IGFuICdhcnJheSB2aWV3J1xuXHRcdFx0bmV3Vmlldy5fLmJuZCA9ICF0YWcgfHwgdGFnLl8uYm5kICYmIHRhZzsgLy8gRm9yIGFycmF5IHZpZXdzIHRoYXQgYXJlIGRhdGEgYm91bmQgZm9yIGNvbGxlY3Rpb24gY2hhbmdlIGV2ZW50cywgc2V0IHRoZVxuXHRcdFx0Ly8gdmlldy5fLmJuZCBwcm9wZXJ0eSB0byB0cnVlIGZvciB0b3AtbGV2ZWwgbGluaygpIG9yIGRhdGEtbGluaz1cIntmb3J9XCIsIG9yIHRvIHRoZSB0YWcgaW5zdGFuY2UgZm9yIGEgZGF0YS1ib3VuZCB0YWcsIGUuZy4ge157Zm9yIC4uLn19XG5cdFx0XHRuZXdWaWV3LnRhZyA9IHRhZztcblx0XHR9XG5cdFx0Zm9yIChpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHQvLyBDcmVhdGUgYSB2aWV3IGZvciBlYWNoIGRhdGEgaXRlbS5cblx0XHRcdGNoaWxkVmlldyA9IG5ldyBWaWV3KG5ld0N0eCwgXCJpdGVtXCIsIG5ld1ZpZXcsIGRhdGFbaV0sIHRtcGwsIChrZXkgfHwgMCkgKyBpLCBvblJlbmRlciwgbmV3Vmlldy5jb250ZW50KTtcblx0XHRcdGlmIChpdGVtVmFyKSB7XG5cdFx0XHRcdChjaGlsZFZpZXcuY3R4ID0gJGV4dGVuZCh7fSwgbmV3Q3R4KSlbaXRlbVZhcl0gPSAkc3ViLl9jcChkYXRhW2ldLCBcIiNkYXRhXCIsIGNoaWxkVmlldyk7XG5cdFx0XHR9XG5cdFx0XHRpdGVtUmVzdWx0ID0gdG1wbC5mbihkYXRhW2ldLCBjaGlsZFZpZXcsICRzdWIpO1xuXHRcdFx0cmVzdWx0ICs9IG5ld1ZpZXcuXy5vblJlbmRlciA/IG5ld1ZpZXcuXy5vblJlbmRlcihpdGVtUmVzdWx0LCBjaGlsZFZpZXcpIDogaXRlbVJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQ3JlYXRlIGEgdmlldyBmb3Igc2luZ2xldG9uIGRhdGEgb2JqZWN0LiBUaGUgdHlwZSBvZiB0aGUgdmlldyB3aWxsIGJlIHRoZSB0YWcgbmFtZSwgZS5nLiBcImlmXCIgb3IgXCJteXRhZ1wiIGV4Y2VwdCBmb3Jcblx0XHQvLyBcIml0ZW1cIiwgXCJhcnJheVwiIGFuZCBcImRhdGFcIiB2aWV3cy4gQSBcImRhdGFcIiB2aWV3IGlzIGZyb20gcHJvZ3JhbW1hdGljIHJlbmRlcihvYmplY3QpIGFnYWluc3QgYSAnc2luZ2xldG9uJy5cblx0XHRuZXdWaWV3ID0gc3dhcENvbnRlbnQgPyB2aWV3IDogbmV3IFZpZXcobmV3Q3R4LCB0bXBsTmFtZSB8fCBcImRhdGFcIiwgdmlldywgZGF0YSwgdG1wbCwga2V5LCBvblJlbmRlciwgY29udGVudFRtcGwpO1xuXG5cdFx0aWYgKGl0ZW1WYXIpIHtcblx0XHRcdChuZXdWaWV3LmN0eCA9ICRleHRlbmQoe30sIG5ld0N0eCkpW2l0ZW1WYXJdID0gJHN1Yi5fY3AoZGF0YSwgXCIjZGF0YVwiLCBuZXdWaWV3KTtcblx0XHR9XG5cblx0XHRuZXdWaWV3LnRhZyA9IHRhZztcblx0XHRuZXdWaWV3Ll8ubmwgPSBub0xpbmtpbmc7XG5cdFx0cmVzdWx0ICs9IHRtcGwuZm4oZGF0YSwgbmV3VmlldywgJHN1Yik7XG5cdH1cblx0aWYgKHRhZykge1xuXHRcdG5ld1ZpZXcudGFnRWxzZSA9IHRhZ0N0eC5pbmRleDtcblx0XHR0YWdDdHguY29udGVudFZpZXcgPSBuZXdWaWV3O1xuXHR9XG5cdHJldHVybiBvdXRlck9uUmVuZGVyID8gb3V0ZXJPblJlbmRlcihyZXN1bHQsIG5ld1ZpZXcpIDogcmVzdWx0O1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQnVpbGQgYW5kIGNvbXBpbGUgdGVtcGxhdGVcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEdlbmVyYXRlIGEgcmV1c2FibGUgZnVuY3Rpb24gdGhhdCB3aWxsIHNlcnZlIHRvIHJlbmRlciBhIHRlbXBsYXRlIGFnYWluc3QgZGF0YVxuLy8gKENvbXBpbGUgQVNUIHRoZW4gYnVpbGQgdGVtcGxhdGUgZnVuY3Rpb24pXG5cbmZ1bmN0aW9uIG9uUmVuZGVyRXJyb3IoZSwgdmlldywgZmFsbGJhY2spIHtcblx0dmFyIG1lc3NhZ2UgPSBmYWxsYmFjayAhPT0gdW5kZWZpbmVkXG5cdFx0PyAkaXNGdW5jdGlvbihmYWxsYmFjaylcblx0XHRcdD8gZmFsbGJhY2suY2FsbCh2aWV3LmRhdGEsIGUsIHZpZXcpXG5cdFx0XHQ6IGZhbGxiYWNrIHx8IFwiXCJcblx0XHQ6IFwie0Vycm9yOiBcIiArIChlLm1lc3NhZ2V8fGUpICsgXCJ9XCI7XG5cblx0aWYgKCRzdWJTZXR0aW5ncy5vbkVycm9yICYmIChmYWxsYmFjayA9ICRzdWJTZXR0aW5ncy5vbkVycm9yLmNhbGwodmlldy5kYXRhLCBlLCBmYWxsYmFjayAmJiBtZXNzYWdlLCB2aWV3KSkgIT09IHVuZGVmaW5lZCkge1xuXHRcdG1lc3NhZ2UgPSBmYWxsYmFjazsgLy8gVGhlcmUgaXMgYSBzZXR0aW5ncy5kZWJ1Z01vZGUoaGFuZGxlcikgb25FcnJvciBvdmVycmlkZS4gQ2FsbCBpdCwgYW5kIHVzZSByZXR1cm4gdmFsdWUgKGlmIGFueSkgdG8gcmVwbGFjZSBtZXNzYWdlXG5cdH1cblx0cmV0dXJuIHZpZXcgJiYgIXZpZXcuX2xjID8gJGNvbnZlcnRlcnMuaHRtbChtZXNzYWdlKSA6IG1lc3NhZ2U7IC8vIEZvciBkYXRhLWxpbms9XFxcInsuLi4gb25FcnJvcj0uLi59XCIuLi4gU2VlIG9uRGF0YUxpbmtlZFRhZ0NoYW5nZVxufVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG5cdHRocm93IG5ldyAkc3ViLkVycihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc3ludGF4RXJyb3IobWVzc2FnZSkge1xuXHRlcnJvcihcIlN5bnRheCBlcnJvclxcblwiICsgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHRtcGxGbihtYXJrdXAsIHRtcGwsIGlzTGlua0V4cHIsIGNvbnZlcnRCYWNrLCBoYXNFbHNlKSB7XG5cdC8vIENvbXBpbGUgbWFya3VwIHRvIEFTVCAoYWJ0cmFjdCBzeW50YXggdHJlZSkgdGhlbiBidWlsZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gY29kZSBmcm9tIHRoZSBBU1Qgbm9kZXNcblx0Ly8gVXNlZCBmb3IgY29tcGlsaW5nIHRlbXBsYXRlcywgYW5kIGFsc28gYnkgSnNWaWV3cyB0byBidWlsZCBmdW5jdGlvbnMgZm9yIGRhdGEgbGluayBleHByZXNzaW9uc1xuXG5cdC8vPT09PSBuZXN0ZWQgZnVuY3Rpb25zID09PT1cblx0ZnVuY3Rpb24gcHVzaHByZWNlZGluZ0NvbnRlbnQoc2hpZnQpIHtcblx0XHRzaGlmdCAtPSBsb2M7XG5cdFx0aWYgKHNoaWZ0KSB7XG5cdFx0XHRjb250ZW50LnB1c2gobWFya3VwLnN1YnN0cihsb2MsIHNoaWZ0KS5yZXBsYWNlKHJOZXdMaW5lLCBcIlxcXFxuXCIpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBibG9ja1RhZ0NoZWNrKHRhZ05hbWUsIGJsb2NrKSB7XG5cdFx0aWYgKHRhZ05hbWUpIHtcblx0XHRcdHRhZ05hbWUgKz0gJ319Jztcblx0XHRcdC8vXHRcdFx0J3t7aW5jbHVkZX19IGJsb2NrIGhhcyB7ey9mb3J9fSB3aXRoIG5vIG9wZW4ge3tmb3J9fSdcblx0XHRcdHN5bnRheEVycm9yKChcblx0XHRcdFx0YmxvY2tcblx0XHRcdFx0XHQ/ICd7eycgKyBibG9jayArICd9fSBibG9jayBoYXMge3svJyArIHRhZ05hbWUgKyAnIHdpdGhvdXQge3snICsgdGFnTmFtZVxuXHRcdFx0XHRcdDogJ1VubWF0Y2hlZCBvciBtaXNzaW5nIHt7LycgKyB0YWdOYW1lKSArICcsIGluIHRlbXBsYXRlOlxcbicgKyBtYXJrdXApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBhcnNlVGFnKGFsbCwgYmluZCwgdGFnTmFtZSwgY29udmVydGVyLCBjb2xvbiwgaHRtbCwgY29kZVRhZywgcGFyYW1zLCBzbGFzaCwgYmluZDIsIGNsb3NlQmxvY2ssIGluZGV4KSB7XG4vKlxuXG4gICAgIGJpbmQgICAgIHRhZ05hbWUgICAgICAgICBjdnQgICBjbG4gaHRtbCBjb2RlICAgIHBhcmFtcyAgICAgICAgICAgIHNsYXNoICAgYmluZDIgICAgICAgICBjbG9zZUJsayAgY29tbWVudFxuLyg/OnsoXFxeKT97KD86KFxcdysoPz1bXFwvXFxzfV0pKXwoXFx3Kyk/KDopfCg+KXwoXFwqKSlcXHMqKCg/OltefV18fSg/IX0pKSo/KShcXC8pP3x7KFxcXik/eyg/Oig/OlxcLyhcXHcrKSlcXHMqfCEtLVtcXHNcXFNdKj8tLSkpfX0vZ1xuXG4oPzpcbiAgeyhcXF4pP3sgICAgICAgICAgICBiaW5kXG4gICg/OlxuICAgIChcXHcrICAgICAgICAgICAgIHRhZ05hbWVcbiAgICAgICg/PVtcXC9cXHN9XSlcbiAgICApXG4gICAgfFxuICAgIChcXHcrKT8oOikgICAgICAgIGNvbnZlcnRlciBjb2xvblxuICAgIHxcbiAgICAoPikgICAgICAgICAgICAgIGh0bWxcbiAgICB8XG4gICAgKFxcKikgICAgICAgICAgICAgY29kZVRhZ1xuICApXG4gIFxccypcbiAgKCAgICAgICAgICAgICAgICAgIHBhcmFtc1xuICAgICg/OltefV18fSg/IX0pKSo/XG4gIClcbiAgKFxcLyk/ICAgICAgICAgICAgICBzbGFzaFxuICB8XG4gIHsoXFxeKT97ICAgICAgICAgICAgYmluZDJcbiAgKD86XG4gICAgKD86XFwvKFxcdyspKVxccyogICBjbG9zZUJsb2NrXG4gICAgfFxuICAgICEtLVtcXHNcXFNdKj8tLSAgICBjb21tZW50XG4gIClcbilcbn19L2dcblxuKi9cblx0XHRpZiAoY29kZVRhZyAmJiBiaW5kIHx8IHNsYXNoICYmICF0YWdOYW1lIHx8IHBhcmFtcyAmJiBwYXJhbXMuc2xpY2UoLTEpID09PSBcIjpcIiB8fCBiaW5kMikge1xuXHRcdFx0c3ludGF4RXJyb3IoYWxsKTtcblx0XHR9XG5cblx0XHQvLyBCdWlsZCBhYnN0cmFjdCBzeW50YXggdHJlZSAoQVNUKTogW3RhZ05hbWUsIGNvbnZlcnRlciwgcGFyYW1zLCBjb250ZW50LCBoYXNoLCBiaW5kaW5ncywgY29udGVudE1hcmt1cF1cblx0XHRpZiAoaHRtbCkge1xuXHRcdFx0Y29sb24gPSBcIjpcIjtcblx0XHRcdGNvbnZlcnRlciA9IEhUTUw7XG5cdFx0fVxuXHRcdHNsYXNoID0gc2xhc2ggfHwgaXNMaW5rRXhwciAmJiAhaGFzRWxzZTtcblxuXHRcdHZhciBsYXRlLCBvcGVuVGFnTmFtZSwgaXNMYXRlT2IsXG5cdFx0XHRwYXRoQmluZGluZ3MgPSAoYmluZCB8fCBpc0xpbmtFeHByKSAmJiBbW11dLCAvLyBwYXRoQmluZGluZ3MgaXMgYW4gYXJyYXkgb2YgYXJyYXlzIGZvciBhcmcgYmluZGluZ3MgYW5kIGEgaGFzaCBvZiBhcnJheXMgZm9yIHByb3AgYmluZGluZ3Ncblx0XHRcdHByb3BzID0gXCJcIixcblx0XHRcdGFyZ3MgPSBcIlwiLFxuXHRcdFx0Y3R4UHJvcHMgPSBcIlwiLFxuXHRcdFx0cGFyYW1zQXJncyA9IFwiXCIsXG5cdFx0XHRwYXJhbXNQcm9wcyA9IFwiXCIsXG5cdFx0XHRwYXJhbXNDdHhQcm9wcyA9IFwiXCIsXG5cdFx0XHRvbkVycm9yID0gXCJcIixcblx0XHRcdHVzZVRyaWdnZXIgPSBcIlwiLFxuXHRcdFx0Ly8gQmxvY2sgdGFnIGlmIG5vdCBzZWxmLWNsb3NpbmcgYW5kIG5vdCB7ezp9fSBvciB7ez59fSAoc3BlY2lhbCBjYXNlKSBhbmQgbm90IGEgZGF0YS1saW5rIGV4cHJlc3Npb25cblx0XHRcdGJsb2NrID0gIXNsYXNoICYmICFjb2xvbjtcblxuXHRcdC8vPT09PSBuZXN0ZWQgaGVscGVyIGZ1bmN0aW9uID09PT1cblx0XHR0YWdOYW1lID0gdGFnTmFtZSB8fCAocGFyYW1zID0gcGFyYW1zIHx8IFwiI2RhdGFcIiwgY29sb24pOyAvLyB7ezp9fSBpcyBlcXVpdmFsZW50IHRvIHt7OiNkYXRhfX1cblx0XHRwdXNocHJlY2VkaW5nQ29udGVudChpbmRleCk7XG5cdFx0bG9jID0gaW5kZXggKyBhbGwubGVuZ3RoOyAvLyBsb2NhdGlvbiBtYXJrZXIgLSBwYXJzZWQgdXAgdG8gaGVyZVxuXHRcdGlmIChjb2RlVGFnKSB7XG5cdFx0XHRpZiAoYWxsb3dDb2RlKSB7XG5cdFx0XHRcdGNvbnRlbnQucHVzaChbXCIqXCIsIFwiXFxuXCIgKyBwYXJhbXMucmVwbGFjZSgvXjovLCBcInJldCs9IFwiKS5yZXBsYWNlKHJVbmVzY2FwZVF1b3RlcywgXCIkMVwiKSArIFwiO1xcblwiXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0YWdOYW1lKSB7XG5cdFx0XHRpZiAodGFnTmFtZSA9PT0gXCJlbHNlXCIpIHtcblx0XHRcdFx0aWYgKHJUZXN0RWxzZUlmLnRlc3QocGFyYW1zKSkge1xuXHRcdFx0XHRcdHN5bnRheEVycm9yKCdGb3IgXCJ7e2Vsc2UgaWYgZXhwcn19XCIgdXNlIFwie3tlbHNlIGV4cHJ9fVwiJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGF0aEJpbmRpbmdzID0gY3VycmVudFs5XSAmJiBbW11dO1xuXHRcdFx0XHRjdXJyZW50WzEwXSA9IG1hcmt1cC5zdWJzdHJpbmcoY3VycmVudFsxMF0sIGluZGV4KTsgLy8gY29udGVudE1hcmt1cCBmb3IgYmxvY2sgdGFnXG5cdFx0XHRcdG9wZW5UYWdOYW1lID0gY3VycmVudFsxMV0gfHwgY3VycmVudFswXSB8fCBzeW50YXhFcnJvcihcIk1pc21hdGNoZWQ6IFwiICsgYWxsKTtcblx0XHRcdFx0Ly8gY3VycmVudFswXSBpcyB0YWdOYW1lLCBidXQgZm9yIHt7ZWxzZX19IG5vZGVzLCBjdXJyZW50WzExXSBpcyB0YWdOYW1lIG9mIHByZWNlZGluZyBvcGVuIHRhZ1xuXHRcdFx0XHRjdXJyZW50ID0gc3RhY2sucG9wKCk7XG5cdFx0XHRcdGNvbnRlbnQgPSBjdXJyZW50WzJdO1xuXHRcdFx0XHRibG9jayA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFyYW1zKSB7XG5cdFx0XHRcdC8vIHJlbW92ZSBuZXdsaW5lcyBmcm9tIHRoZSBwYXJhbXMgc3RyaW5nLCB0byBhdm9pZCBjb21waWxlZCBjb2RlIGVycm9ycyBmb3IgdW50ZXJtaW5hdGVkIHN0cmluZ3Ncblx0XHRcdFx0cGFyc2VQYXJhbXMocGFyYW1zLnJlcGxhY2Uock5ld0xpbmUsIFwiIFwiKSwgcGF0aEJpbmRpbmdzLCB0bXBsLCBpc0xpbmtFeHByKVxuXHRcdFx0XHRcdC5yZXBsYWNlKHJCdWlsZEhhc2gsIGZ1bmN0aW9uKGFsbCwgb25lcnJvciwgaXNDdHhQcm0sIGtleSwga2V5VG9rZW4sIGtleVZhbHVlLCBhcmcsIHBhcmFtKSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBcInRoaXM6XCIpIHtcblx0XHRcdFx0XHRcdFx0a2V5VmFsdWUgPSBcInVuZGVmaW5lZFwiOyAvLyB0aGlzPXNvbWUucGF0aCBpcyBhbHdheXMgYSB0byBwYXJhbWV0ZXIgKG9uZS13YXkpLCBzbyBkb24ndCBuZWVkIHRvIGNvbXBpbGUvZXZhbHVhdGUgc29tZS5wYXRoIGluaXRpYWxpemF0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFyYW0pIHtcblx0XHRcdFx0XHRcdFx0aXNMYXRlT2IgPSBpc0xhdGVPYiB8fCBwYXJhbVswXSA9PT0gXCJAXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRrZXkgPSBcIidcIiArIGtleVRva2VuICsgXCInOlwiO1xuXHRcdFx0XHRcdFx0aWYgKGFyZykge1xuXHRcdFx0XHRcdFx0XHRhcmdzICs9IGlzQ3R4UHJtICsga2V5VmFsdWUgKyBcIixcIjtcblx0XHRcdFx0XHRcdFx0cGFyYW1zQXJncyArPSBcIidcIiArIHBhcmFtICsgXCInLFwiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpc0N0eFBybSkgeyAvLyBDb250ZXh0dWFsIHBhcmFtZXRlciwgfmZvbz1leHByXG5cdFx0XHRcdFx0XHRcdGN0eFByb3BzICs9IGtleSArICdqLl9jcCgnICsga2V5VmFsdWUgKyAnLFwiJyArIHBhcmFtICsgJ1wiLHZpZXcpLCc7XG5cdFx0XHRcdFx0XHRcdC8vIENvbXBpbGVkIGNvZGUgZm9yIGV2YWx1YXRpbmcgdGFnQ3R4IG9uIGEgdGFnIHdpbGwgaGF2ZTogY3R4OnsnZm9vJzpqLl9jcChjb21waWxlZEV4cHIsIFwiZXhwclwiLCB2aWV3KX1cblx0XHRcdFx0XHRcdFx0cGFyYW1zQ3R4UHJvcHMgKz0ga2V5ICsgXCInXCIgKyBwYXJhbSArIFwiJyxcIjtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAob25lcnJvcikge1xuXHRcdFx0XHRcdFx0XHRvbkVycm9yICs9IGtleVZhbHVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKGtleVRva2VuID09PSBcInRyaWdnZXJcIikge1xuXHRcdFx0XHRcdFx0XHRcdHVzZVRyaWdnZXIgKz0ga2V5VmFsdWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKGtleVRva2VuID09PSBcImxhdGVSZW5kZXJcIikge1xuXHRcdFx0XHRcdFx0XHRcdGxhdGUgPSBwYXJhbSAhPT0gXCJmYWxzZVwiOyAvLyBSZW5kZXIgYWZ0ZXIgZmlyc3QgcGFzc1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHByb3BzICs9IGtleSArIGtleVZhbHVlICsgXCIsXCI7XG5cdFx0XHRcdFx0XHRcdHBhcmFtc1Byb3BzICs9IGtleSArIFwiJ1wiICsgcGFyYW0gKyBcIicsXCI7XG5cdFx0XHRcdFx0XHRcdGhhc0hhbmRsZXJzID0gaGFzSGFuZGxlcnMgfHwgckhhc0hhbmRsZXJzLnRlc3Qoa2V5VG9rZW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0XHRcdFx0fSkuc2xpY2UoMCwgLTEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGF0aEJpbmRpbmdzICYmIHBhdGhCaW5kaW5nc1swXSkge1xuXHRcdFx0XHRwYXRoQmluZGluZ3MucG9wKCk7IC8vIFJlbW92ZSB0aGUgYmluZGluZyB0aGF0IHdhcyBwcmVwYXJlZCBmb3IgbmV4dCBhcmcuIChUaGVyZSBpcyBhbHdheXMgYW4gZXh0cmEgb25lIHJlYWR5KS5cblx0XHRcdH1cblxuXHRcdFx0bmV3Tm9kZSA9IFtcblx0XHRcdFx0XHR0YWdOYW1lLFxuXHRcdFx0XHRcdGNvbnZlcnRlciB8fCAhIWNvbnZlcnRCYWNrIHx8IGhhc0hhbmRsZXJzIHx8IFwiXCIsXG5cdFx0XHRcdFx0YmxvY2sgJiYgW10sXG5cdFx0XHRcdFx0cGFyc2VkUGFyYW0ocGFyYW1zQXJncyB8fCAodGFnTmFtZSA9PT0gXCI6XCIgPyBcIicjZGF0YScsXCIgOiBcIlwiKSwgcGFyYW1zUHJvcHMsIHBhcmFtc0N0eFByb3BzKSwgLy8ge3s6fX0gZXF1aXZhbGVudCB0byB7ezojZGF0YX19XG5cdFx0XHRcdFx0cGFyc2VkUGFyYW0oYXJncyB8fCAodGFnTmFtZSA9PT0gXCI6XCIgPyBcImRhdGEsXCIgOiBcIlwiKSwgcHJvcHMsIGN0eFByb3BzKSxcblx0XHRcdFx0XHRvbkVycm9yLFxuXHRcdFx0XHRcdHVzZVRyaWdnZXIsXG5cdFx0XHRcdFx0bGF0ZSxcblx0XHRcdFx0XHRpc0xhdGVPYixcblx0XHRcdFx0XHRwYXRoQmluZGluZ3MgfHwgMFxuXHRcdFx0XHRdO1xuXHRcdFx0Y29udGVudC5wdXNoKG5ld05vZGUpO1xuXHRcdFx0aWYgKGJsb2NrKSB7XG5cdFx0XHRcdHN0YWNrLnB1c2goY3VycmVudCk7XG5cdFx0XHRcdGN1cnJlbnQgPSBuZXdOb2RlO1xuXHRcdFx0XHRjdXJyZW50WzEwXSA9IGxvYzsgLy8gU3RvcmUgY3VycmVudCBsb2NhdGlvbiBvZiBvcGVuIHRhZywgdG8gYmUgYWJsZSB0byBhZGQgY29udGVudE1hcmt1cCB3aGVuIHdlIHJlYWNoIGNsb3NpbmcgdGFnXG5cdFx0XHRcdGN1cnJlbnRbMTFdID0gb3BlblRhZ05hbWU7IC8vIFVzZWQgZm9yIGNoZWNraW5nIHN5bnRheCAobWF0Y2hpbmcgY2xvc2UgdGFnKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2xvc2VCbG9jaykge1xuXHRcdFx0YmxvY2tUYWdDaGVjayhjbG9zZUJsb2NrICE9PSBjdXJyZW50WzBdICYmIGNsb3NlQmxvY2sgIT09IGN1cnJlbnRbMTFdICYmIGNsb3NlQmxvY2ssIGN1cnJlbnRbMF0pOyAvLyBDaGVjayBtYXRjaGluZyBjbG9zZSB0YWcgbmFtZVxuXHRcdFx0Y3VycmVudFsxMF0gPSBtYXJrdXAuc3Vic3RyaW5nKGN1cnJlbnRbMTBdLCBpbmRleCk7IC8vIGNvbnRlbnRNYXJrdXAgZm9yIGJsb2NrIHRhZ1xuXHRcdFx0Y3VycmVudCA9IHN0YWNrLnBvcCgpO1xuXHRcdH1cblx0XHRibG9ja1RhZ0NoZWNrKCFjdXJyZW50ICYmIGNsb3NlQmxvY2spO1xuXHRcdGNvbnRlbnQgPSBjdXJyZW50WzJdO1xuXHR9XG5cdC8vPT09PSAvZW5kIG9mIG5lc3RlZCBmdW5jdGlvbnMgPT09PVxuXG5cdHZhciBpLCByZXN1bHQsIG5ld05vZGUsIGhhc0hhbmRsZXJzLCBiaW5kaW5ncyxcblx0XHRhbGxvd0NvZGUgPSAkc3ViU2V0dGluZ3MuYWxsb3dDb2RlIHx8IHRtcGwgJiYgdG1wbC5hbGxvd0NvZGVcblx0XHRcdHx8ICR2aWV3c1NldHRpbmdzLmFsbG93Q29kZSA9PT0gdHJ1ZSwgLy8gaW5jbHVkZSBkaXJlY3Qgc2V0dGluZyBvZiBzZXR0aW5ncy5hbGxvd0NvZGUgdHJ1ZSBmb3IgYmFja3dhcmQgY29tcGF0IG9ubHlcblx0XHRhc3RUb3AgPSBbXSxcblx0XHRsb2MgPSAwLFxuXHRcdHN0YWNrID0gW10sXG5cdFx0Y29udGVudCA9IGFzdFRvcCxcblx0XHRjdXJyZW50ID0gWywsYXN0VG9wXTtcblxuXHRpZiAoYWxsb3dDb2RlICYmIHRtcGwuX2lzKSB7XG5cdFx0dG1wbC5hbGxvd0NvZGUgPSBhbGxvd0NvZGU7XG5cdH1cblxuLy9UT0RPXHRyZXN1bHQgPSB0bXBsRm5zQ2FjaGVbbWFya3VwXTsgLy8gT25seSBjYWNoZSBpZiB0ZW1wbGF0ZSBpcyBub3QgbmFtZWQgYW5kIG1hcmt1cCBsZW5ndGggPCAuLi4sXG4vL2FuZCB0aGVyZSBhcmUgbm8gYmluZGluZ3Mgb3Igc3VidGVtcGxhdGVzPz8gQ29uc2lkZXIgc3RhbmRhcmQgb3B0aW1pemF0aW9uIGZvciBkYXRhLWxpbms9XCJhLmIuY1wiXG4vL1x0XHRpZiAocmVzdWx0KSB7XG4vL1x0XHRcdHRtcGwuZm4gPSByZXN1bHQ7XG4vL1x0XHR9IGVsc2Uge1xuXG4vL1x0XHRyZXN1bHQgPSBtYXJrdXA7XG5cdGlmIChpc0xpbmtFeHByKSB7XG5cdFx0aWYgKGNvbnZlcnRCYWNrICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG1hcmt1cCA9IG1hcmt1cC5zbGljZSgwLCAtY29udmVydEJhY2subGVuZ3RoIC0gMikgKyBkZWxpbUNsb3NlQ2hhcjA7XG5cdFx0fVxuXHRcdG1hcmt1cCA9IGRlbGltT3BlbkNoYXIwICsgbWFya3VwICsgZGVsaW1DbG9zZUNoYXIxO1xuXHR9XG5cblx0YmxvY2tUYWdDaGVjayhzdGFja1swXSAmJiBzdGFja1swXVsyXS5wb3AoKVswXSk7XG5cdC8vIEJ1aWxkIHRoZSBBU1QgKGFic3RyYWN0IHN5bnRheCB0cmVlKSB1bmRlciBhc3RUb3Bcblx0bWFya3VwLnJlcGxhY2UoclRhZywgcGFyc2VUYWcpO1xuXG5cdHB1c2hwcmVjZWRpbmdDb250ZW50KG1hcmt1cC5sZW5ndGgpO1xuXG5cdGlmIChsb2MgPSBhc3RUb3BbYXN0VG9wLmxlbmd0aCAtIDFdKSB7XG5cdFx0YmxvY2tUYWdDaGVjayhcIlwiICsgbG9jICE9PSBsb2MgJiYgKCtsb2NbMTBdID09PSBsb2NbMTBdKSAmJiBsb2NbMF0pO1xuXHR9XG4vL1x0XHRcdHJlc3VsdCA9IHRtcGxGbnNDYWNoZVttYXJrdXBdID0gYnVpbGRDb2RlKGFzdFRvcCwgdG1wbCk7XG4vL1x0XHR9XG5cblx0aWYgKGlzTGlua0V4cHIpIHtcblx0XHRyZXN1bHQgPSBidWlsZENvZGUoYXN0VG9wLCBtYXJrdXAsIGlzTGlua0V4cHIpO1xuXHRcdGJpbmRpbmdzID0gW107XG5cdFx0aSA9IGFzdFRvcC5sZW5ndGg7XG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0YmluZGluZ3MudW5zaGlmdChhc3RUb3BbaV1bOV0pOyAvLyBXaXRoIGRhdGEtbGluayBleHByZXNzaW9ucywgcGF0aEJpbmRpbmdzIGFycmF5IGZvciB0YWdDdHhbaV0gaXMgYXN0VG9wW2ldWzldXG5cdFx0fVxuXHRcdHNldFBhdGhzKHJlc3VsdCwgYmluZGluZ3MpO1xuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9IGJ1aWxkQ29kZShhc3RUb3AsIHRtcGwpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldFBhdGhzKGZuLCBwYXRoc0Fycikge1xuXHR2YXIga2V5LCBwYXRocyxcblx0XHRpID0gMCxcblx0XHRsID0gcGF0aHNBcnIubGVuZ3RoO1xuXHRmbi5kZXBzID0gW107XG5cdGZuLnBhdGhzID0gW107IC8vIFRoZSBhcnJheSBvZiBwYXRoIGJpbmRpbmcgKGFycmF5L2RpY3Rpb25hcnkpcyBmb3IgZWFjaCB0YWcvZWxzZSBibG9jaydzIGFyZ3MgYW5kIHByb3BzXG5cdGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Zm4ucGF0aHMucHVzaChwYXRocyA9IHBhdGhzQXJyW2ldKTtcblx0XHRmb3IgKGtleSBpbiBwYXRocykge1xuXHRcdFx0aWYgKGtleSAhPT0gXCJfanN2dG9cIiAmJiBwYXRocy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHBhdGhzW2tleV0ubGVuZ3RoICYmICFwYXRoc1trZXldLnNrcCkge1xuXHRcdFx0XHRmbi5kZXBzID0gZm4uZGVwcy5jb25jYXQocGF0aHNba2V5XSk7IC8vIGRlcHMgaXMgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHBhdGhzIGFycmF5cyBmb3IgdGhlIGRpZmZlcmVudCBiaW5kaW5nc1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZWRQYXJhbShhcmdzLCBwcm9wcywgY3R4KSB7XG5cdHJldHVybiBbYXJncy5zbGljZSgwLCAtMSksIHByb3BzLnNsaWNlKDAsIC0xKSwgY3R4LnNsaWNlKDAsIC0xKV07XG59XG5cbmZ1bmN0aW9uIHBhcmFtU3RydWN0dXJlKHBhcnRzLCB0eXBlKSB7XG5cdHJldHVybiAnXFxuXFx0J1xuXHRcdCsgKHR5cGVcblx0XHRcdD8gdHlwZSArICc6eydcblx0XHRcdDogJycpXG5cdFx0KyAnYXJnczpbJyArIHBhcnRzWzBdICsgJ10sXFxuXFx0cHJvcHM6eycgKyBwYXJ0c1sxXSArICd9J1xuXHRcdCsgKHBhcnRzWzJdID8gJyxcXG5cXHRjdHg6eycgKyBwYXJ0c1syXSArICd9JyA6IFwiXCIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtcyhwYXJhbXMsIHBhdGhCaW5kaW5ncywgdG1wbCwgaXNMaW5rRXhwcikge1xuXG5cdGZ1bmN0aW9uIHBhcnNlVG9rZW5zKGFsbCwgbGZ0UHJuMCwgbGZ0UHJuLCBib3VuZCwgcGF0aCwgb3BlcmF0b3IsIGVyciwgZXEsIHBhdGgyLCBsYXRlLCBwcm4sIGNvbW1hLCBsZnRQcm4yLCBhcG9zLCBxdW90LCBydFBybiwgcnRQcm5Eb3QsIHBybjIsIHNwYWNlLCBpbmRleCwgZnVsbCkge1xuXHQvLyAvKFxcKCkoPz1cXHMqXFwoKXwoPzooWyhbXSlcXHMqKT8oPzooXFxePykofj9bXFx3JC5eXSspP1xccyooKFxcK1xcK3wtLSl8XFwrfC18fig/IVtcXHckXSl8JiZ8XFx8XFx8fD09PXwhPT18PT18IT18PD18Pj18Wzw+JSo6P1xcL118KD0pKVxccyp8KCEqPyhAKT9bI35dP1tcXHckLl5dKykoWyhbXSk/KXwoLFxccyopfChcXCg/KVxcXFw/KD86KCcpfChcIikpfCg/OlxccyooKFspXFxdXSkoPz1bLl5dfFxccyokfFteKFtdKXxbKVxcXV0pKFsoW10/KSl8KFxccyspL2csXG5cdC8vbGZ0UHJuMCAgICAgICAgICAgbGZ0UHJuICAgICAgICAgYm91bmQgICAgIHBhdGggICAgICAgICAgICAgICBvcGVyYXRvciAgICAgZXJyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXEgICAgICBwYXRoMiBsYXRlICAgICAgICAgICAgcHJuICAgICAgY29tbWEgIGxmdFBybjIgICBhcG9zIHF1b3QgICAgICAgIHJ0UHJuICBydFBybkRvdCAgICAgICAgICAgICAgICAgIHBybjIgICAgIHNwYWNlXG5cdC8vIChsZWZ0IHBhcmVuPyBmb2xsb3dlZCBieSAocGF0aD8gZm9sbG93ZWQgYnkgb3BlcmF0b3IpIG9yIChwYXRoIGZvbGxvd2VkIGJ5IHBhcmVuPykpIG9yIGNvbW1hIG9yIGFwb3Mgb3IgcXVvdCBvciByaWdodCBwYXJlbiBvciBzcGFjZVxuXG5cdFx0ZnVuY3Rpb24gcGFyc2VQYXRoKGFsbFBhdGgsIG5vdCwgb2JqZWN0LCBoZWxwZXIsIHZpZXcsIHZpZXdQcm9wZXJ0eSwgcGF0aFRva2VucywgbGVhZlRva2VuKSB7XG5cdFx0XHQvLyAvXighKj8pKD86bnVsbHx0cnVlfGZhbHNlfFxcZFtcXGQuXSp8KFtcXHckXSt8XFwufH4oW1xcdyRdKyl8Iyh2aWV3fChbXFx3JF0rKSk/KShbXFx3JC5eXSo/KSg/OlsuW15dKFtcXHckXSspXFxdPyk/KSQvZyxcblx0XHRcdC8vICAgIG5vdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgICAgIGhlbHBlciAgICB2aWV3ICB2aWV3UHJvcGVydHkgcGF0aFRva2VucyAgICAgIGxlYWZUb2tlblxuXHRcdFx0dmFyIHN1YlBhdGggPSBvYmplY3QgPT09IFwiLlwiO1xuXHRcdFx0aWYgKG9iamVjdCkge1xuXHRcdFx0XHRwYXRoID0gcGF0aC5zbGljZShub3QubGVuZ3RoKTtcblx0XHRcdFx0aWYgKC9eXFwuP2NvbnN0cnVjdG9yJC8udGVzdChsZWFmVG9rZW58fHBhdGgpKSB7XG5cdFx0XHRcdFx0c3ludGF4RXJyb3IoYWxsUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzdWJQYXRoKSB7XG5cdFx0XHRcdFx0YWxsUGF0aCA9IChsYXRlIC8vIGxhdGUgcGF0aCBAYS5iLmM6IG5vdCB0aHJvdyBvbiAncHJvcGVydHkgb2YgdW5kZWZpbmVkJyBpZiBhIHVuZGVmaW5lZCwgYW5kIHdpbGwgdXNlIF9nZXRPYigpIGFmdGVyIGxpbmtpbmcgdG8gcmVzb2x2ZSBsYXRlLlxuXHRcdFx0XHRcdFx0XHQ/IChpc0xpbmtFeHByID8gJycgOiAnKGx0T2IubHQ9bHRPYi5sdHx8JykgKyAnKG9iPSdcblx0XHRcdFx0XHRcdFx0OiBcIlwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQrIChoZWxwZXJcblx0XHRcdFx0XHRcdFx0PyAndmlldy5jdHhQcm0oXCInICsgaGVscGVyICsgJ1wiKSdcblx0XHRcdFx0XHRcdFx0OiB2aWV3XG5cdFx0XHRcdFx0XHRcdFx0PyBcInZpZXdcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJkYXRhXCIpXG5cdFx0XHRcdFx0XHQrIChsYXRlXG5cdFx0XHRcdFx0XHRcdD8gJyk9PT11bmRlZmluZWQnICsgKGlzTGlua0V4cHIgPyAnJyA6ICcpJykgKyAnP1wiXCI6dmlldy5fZ2V0T2Iob2IsXCInXG5cdFx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KyAobGVhZlRva2VuXG5cdFx0XHRcdFx0XHRcdD8gKHZpZXdQcm9wZXJ0eVxuXHRcdFx0XHRcdFx0XHRcdD8gXCIuXCIgKyB2aWV3UHJvcGVydHlcblx0XHRcdFx0XHRcdFx0XHQ6IGhlbHBlclxuXHRcdFx0XHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICh2aWV3ID8gXCJcIiA6IFwiLlwiICsgb2JqZWN0KVxuXHRcdFx0XHRcdFx0XHRcdCkgKyAocGF0aFRva2VucyB8fCBcIlwiKVxuXHRcdFx0XHRcdFx0XHQ6IChsZWFmVG9rZW4gPSBoZWxwZXIgPyBcIlwiIDogdmlldyA/IHZpZXdQcm9wZXJ0eSB8fCBcIlwiIDogb2JqZWN0LCBcIlwiKSk7XG5cdFx0XHRcdFx0YWxsUGF0aCA9IGFsbFBhdGggKyAobGVhZlRva2VuID8gXCIuXCIgKyBsZWFmVG9rZW4gOiBcIlwiKTtcblxuXHRcdFx0XHRcdGFsbFBhdGggPSBub3QgKyAoYWxsUGF0aC5zbGljZSgwLCA5KSA9PT0gXCJ2aWV3LmRhdGFcIlxuXHRcdFx0XHRcdFx0PyBhbGxQYXRoLnNsaWNlKDUpIC8vIGNvbnZlcnQgI3ZpZXcuZGF0YS4uLiB0byBkYXRhLi4uXG5cdFx0XHRcdFx0XHQ6IGFsbFBhdGgpXG5cdFx0XHRcdFx0KyAobGF0ZVxuXHRcdFx0XHRcdFx0XHQ/IChpc0xpbmtFeHByID8gJ1wiJzogJ1wiLGx0T2InKSArIChwcm4gPyAnLDEpJzonKScpXG5cdFx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYmluZGluZ3MpIHtcblx0XHRcdFx0XHRiaW5kcyA9IG5hbWVkID09PSBcIl9saW5rVG9cIiA/IChiaW5kdG8gPSBwYXRoQmluZGluZ3MuX2pzdnRvID0gcGF0aEJpbmRpbmdzLl9qc3Z0byB8fCBbXSkgOiBibmRDdHguYmQ7XG5cdFx0XHRcdFx0aWYgKHRoZU9iID0gc3ViUGF0aCAmJiBiaW5kc1tiaW5kcy5sZW5ndGgtMV0pIHtcblx0XHRcdFx0XHRcdGlmICh0aGVPYi5fY3BmbikgeyAvLyBDb21wdXRlZCBwcm9wZXJ0eSBleHByT2Jcblx0XHRcdFx0XHRcdFx0d2hpbGUgKHRoZU9iLnNiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhlT2IgPSB0aGVPYi5zYjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAodGhlT2IuYm5kKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGF0aCA9IFwiXlwiICsgcGF0aC5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aGVPYi5zYiA9IHBhdGg7XG5cdFx0XHRcdFx0XHRcdHRoZU9iLmJuZCA9IHRoZU9iLmJuZCB8fCBwYXRoWzBdID09PSBcIl5cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmluZHMucHVzaChwYXRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGF0aFN0YXJ0W3BhcmVuRGVwdGhdID0gaW5kZXggKyAoc3ViUGF0aCA/IDEgOiAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFsbFBhdGg7XG5cdFx0fVxuXG5cdFx0Ly9ib3VuZCA9IGJpbmRpbmdzICYmIGJvdW5kO1xuXHRcdGlmIChib3VuZCAmJiAhZXEpIHtcblx0XHRcdHBhdGggPSBib3VuZCArIHBhdGg7IC8vIGUuZy4gc29tZS5mbiguLi4pXnNvbWUucGF0aCAtIHNvIGhlcmUgcGF0aCBpcyBcIl5zb21lLnBhdGhcIlxuXHRcdH1cblx0XHRvcGVyYXRvciA9IG9wZXJhdG9yIHx8IFwiXCI7XG5cdFx0bGZ0UHJuID0gbGZ0UHJuIHx8IGxmdFBybjAgfHwgbGZ0UHJuMjtcblx0XHRwYXRoID0gcGF0aCB8fCBwYXRoMjtcblxuXHRcdGlmIChsYXRlICYmIChsYXRlID0gIS9cXCl8XS8udGVzdChmdWxsW2luZGV4LTFdKSkpIHtcblx0XHRcdHBhdGggPSBwYXRoLnNsaWNlKDEpLnNwbGl0KFwiLlwiKS5qb2luKFwiXlwiKTsgLy8gTGF0ZSBwYXRoIEB6LmIuYy4gVXNlIFwiXlwiIHJhdGhlciB0aGFuIFwiLlwiIHRvIGVuc3VyZSB0aGF0IGRlZXAgYmluZGluZyB3aWxsIGJlIHVzZWRcblx0XHR9XG5cdFx0Ly8gQ291bGQgZG8gdGhpcyAtIGJ1dCBub3Qgd29ydGggcGVyZiBjb3N0Pz8gOi1cblx0XHQvLyBpZiAoIXBhdGgubGFzdEluZGV4T2YoXCIjZGF0YS5cIiwgMCkpIHsgcGF0aCA9IHBhdGguc2xpY2UoNik7IH0gLy8gSWYgcGF0aCBzdGFydHMgd2l0aCBcIiNkYXRhLlwiLCByZW1vdmUgdGhhdC5cblx0XHRwcm4gPSBwcm4gfHwgcHJuMiB8fCBcIlwiO1xuXG5cdFx0dmFyIGV4cHIsIGV4cHJGbiwgYmluZHMsIHRoZU9iLCBuZXdPYixcblx0XHRcdHJ0U3EgPSBcIilcIjtcblxuXHRcdGlmIChwcm4gPT09IFwiW1wiKSB7XG5cdFx0XHRwcm4gPSBcIltqLl9zcShcIjtcblx0XHRcdHJ0U3EgPSBcIildXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGVyciAmJiAhYXBvc2VkICYmICFxdW90ZWQpIHtcblx0XHRcdHN5bnRheEVycm9yKHBhcmFtcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChiaW5kaW5ncyAmJiBydFBybkRvdCAmJiAhYXBvc2VkICYmICFxdW90ZWQpIHtcblx0XHRcdFx0Ly8gVGhpcyBpcyBhIGJpbmRpbmcgdG8gYSBwYXRoIGluIHdoaWNoIGFuIG9iamVjdCBpcyByZXR1cm5lZCBieSBhIGhlbHBlci9kYXRhIGZ1bmN0aW9uL2V4cHJlc3Npb24sIGUuZy4gZm9vKCleeC55IG9yIChhP2I6YyleeC55XG5cdFx0XHRcdC8vIFdlIGNyZWF0ZSBhIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIGdldCB0aGUgb2JqZWN0IGluc3RhbmNlICh3aGljaCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBkZXBlbmRlbnQgZGF0YSBvZiB0aGUgc3ViZXhwcmVzc2lvbiBjaGFuZ2VzLCB0byByZXR1cm4gdGhlIG5ldyBvYmplY3QsIGFuZCB0cmlnZ2VyIHJlLWJpbmRpbmcgb2YgdGhlIHN1YnNlcXVlbnQgcGF0aClcblx0XHRcdFx0aWYgKHBhcmVuRGVwdGgpIHtcblx0XHRcdFx0XHRleHByID0gcGF0aFN0YXJ0W3BhcmVuRGVwdGggLSAxXTtcblx0XHRcdFx0XHRpZiAoZnVsbC5sZW5ndGggLSAxID4gaW5kZXggLSAoZXhwciB8fCAwKSkgeyAvLyBXZSBuZWVkIHRvIGNvbXBpbGUgYSBzdWJleHByZXNzaW9uXG5cdFx0XHRcdFx0XHRleHByID0gZnVsbC5zbGljZShleHByLCBpbmRleCArIGFsbC5sZW5ndGgpO1xuXHRcdFx0XHRcdFx0aWYgKGV4cHJGbiAhPT0gdHJ1ZSkgeyAvLyBJZiBub3QgcmVlbnRyYW50IGNhbGwgZHVyaW5nIGNvbXBpbGF0aW9uXG5cdFx0XHRcdFx0XHRcdGJpbmRzID0gYmluZHRvIHx8IGJuZFN0YWNrW3BhcmVuRGVwdGgtMV0uYmQ7XG5cdFx0XHRcdFx0XHRcdC8vIEluc2VydCBleHByT2Igb2JqZWN0LCB0byBiZSB1c2VkIGR1cmluZyBiaW5kaW5nIHRvIHJldHVybiB0aGUgY29tcHV0ZWQgb2JqZWN0XG5cdFx0XHRcdFx0XHRcdHRoZU9iID0gYmluZHNbYmluZHMubGVuZ3RoLTFdO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhlT2IgJiYgdGhlT2IucHJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKHRoZU9iLnNiICYmIHRoZU9iLnNiLnBybSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhlT2IgPSB0aGVPYi5zYjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3T2IgPSB0aGVPYi5zYiA9IHtwYXRoOiB0aGVPYi5zYiwgYm5kOiB0aGVPYi5ibmR9O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGJpbmRzLnB1c2gobmV3T2IgPSB7cGF0aDogYmluZHMucG9wKCl9KTsgLy8gSW5zZXJ0IGV4cHJPYiBvYmplY3QsIHRvIGJlIHVzZWQgZHVyaW5nIGJpbmRpbmcgdG8gcmV0dXJuIHRoZSBjb21wdXRlZCBvYmplY3Rcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gKGUuZy4gXCJzb21lLm9iamVjdCgpXCIgaW4gXCJzb21lLm9iamVjdCgpLmEuYlwiIC0gdG8gYmUgdXNlZCBhcyBjb250ZXh0IGZvciBiaW5kaW5nIHRoZSBmb2xsb3dpbmcgdG9rZW5zIFwiYS5iXCIpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRydFBybkRvdCA9IGRlbGltT3BlbkNoYXIxICsgXCI6XCIgKyBleHByIC8vIFRoZSBwYXJhbWV0ZXIgb3IgZnVuY3Rpb24gc3ViZXhwcmVzc2lvblxuXHRcdFx0XHRcdFx0XHQrIFwiIG9uZXJyb3I9JydcIiAvLyBzZXQgb25lcnJvcj0nJyBpbiBvcmRlciB0byB3cmFwIGdlbmVyYXRlZCBjb2RlIHdpdGggYSB0cnkgY2F0Y2ggLSByZXR1cm5pbmcgJycgYXMgb2JqZWN0IGluc3RhbmNlIGlmIHRoZXJlIGlzIGFuIGVycm9yL21pc3NpbmcgcGFyZW50XG5cdFx0XHRcdFx0XHRcdCsgZGVsaW1DbG9zZUNoYXIwO1xuXHRcdFx0XHRcdFx0ZXhwckZuID0gdG1wbExpbmtzW3J0UHJuRG90XTtcblx0XHRcdFx0XHRcdGlmICghZXhwckZuKSB7XG5cdFx0XHRcdFx0XHRcdHRtcGxMaW5rc1tydFBybkRvdF0gPSB0cnVlOyAvLyBGbGFnIHRoYXQgdGhpcyBleHByRm4gKGZvciBydFBybkRvdCkgaXMgYmVpbmcgY29tcGlsZWRcblx0XHRcdFx0XHRcdFx0dG1wbExpbmtzW3J0UHJuRG90XSA9IGV4cHJGbiA9IHRtcGxGbihydFBybkRvdCwgdG1wbCwgdHJ1ZSk7IC8vIENvbXBpbGUgdGhlIGV4cHJlc3Npb24gKG9yIHVzZSBjYWNoZWQgY29weSBhbHJlYWR5IGluIHRtcGwubGlua3MpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZXhwckZuICE9PSB0cnVlICYmIG5ld09iKSB7XG5cdFx0XHRcdFx0XHRcdC8vIElmIG5vdCByZWVudHJhbnQgY2FsbCBkdXJpbmcgY29tcGlsYXRpb25cblx0XHRcdFx0XHRcdFx0bmV3T2IuX2NwZm4gPSBleHByRm47XG5cdFx0XHRcdFx0XHRcdG5ld09iLnBybSA9IGJuZEN0eC5iZDtcblx0XHRcdFx0XHRcdFx0bmV3T2IuYm5kID0gbmV3T2IuYm5kIHx8IG5ld09iLnBhdGggJiYgbmV3T2IucGF0aC5pbmRleE9mKFwiXlwiKSA+PSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChhcG9zZWRcblx0XHRcdFx0Ly8gd2l0aGluIHNpbmdsZS1xdW90ZWQgc3RyaW5nXG5cdFx0XHRcdD8gKGFwb3NlZCA9ICFhcG9zLCAoYXBvc2VkID8gYWxsIDogbGZ0UHJuMiArICdcIicpKVxuXHRcdFx0XHQ6IHF1b3RlZFxuXHRcdFx0XHQvLyB3aXRoaW4gZG91YmxlLXF1b3RlZCBzdHJpbmdcblx0XHRcdFx0XHQ/IChxdW90ZWQgPSAhcXVvdCwgKHF1b3RlZCA/IGFsbCA6IGxmdFBybjIgKyAnXCInKSlcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdChcblx0XHRcdFx0XHQobGZ0UHJuXG5cdFx0XHRcdFx0XHQ/IChwYXRoU3RhcnRbcGFyZW5EZXB0aF0gPSBpbmRleCsrLCBibmRDdHggPSBibmRTdGFja1srK3BhcmVuRGVwdGhdID0ge2JkOiBbXX0sIGxmdFBybilcblx0XHRcdFx0XHRcdDogXCJcIilcblx0XHRcdFx0XHQrIChzcGFjZVxuXHRcdFx0XHRcdFx0PyAocGFyZW5EZXB0aFxuXHRcdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0Ly8gTmV3IGFyZyBvciBwcm9wIC0gc28gaW5zZXJ0IGJhY2tzcGFjZSBcXGIgKFxceDA4KSBhcyBzZXBhcmF0b3IgZm9yIG5hbWVkIHBhcmFtcywgdXNlZCBzdWJzZXF1ZW50bHkgYnkgckJ1aWxkSGFzaCwgYW5kIHByZXBhcmUgbmV3IGJpbmRpbmdzIGFycmF5XG5cdFx0XHRcdFx0XHRcdDogKHBhcmFtSW5kZXggPSBmdWxsLnNsaWNlKHBhcmFtSW5kZXgsIGluZGV4KSwgbmFtZWRcblx0XHRcdFx0XHRcdFx0XHQ/IChuYW1lZCA9IGJvdW5kTmFtZSA9IGJpbmR0byA9IGZhbHNlLCBcIlxcYlwiKVxuXHRcdFx0XHRcdFx0XHRcdDogXCJcXGIsXCIpICsgcGFyYW1JbmRleCArIChwYXJhbUluZGV4ID0gaW5kZXggKyBhbGwubGVuZ3RoLCBiaW5kaW5ncyAmJiBwYXRoQmluZGluZ3MucHVzaChibmRDdHguYmQgPSBbXSksIFwiXFxiXCIpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IGVxXG5cdFx0XHRcdC8vIG5hbWVkIHBhcmFtLiBSZW1vdmUgYmluZGluZ3MgZm9yIGFyZyBhbmQgY3JlYXRlIGluc3RlYWQgYmluZGluZ3MgYXJyYXkgZm9yIHByb3Bcblx0XHRcdFx0XHRcdFx0PyAocGFyZW5EZXB0aCAmJiBzeW50YXhFcnJvcihwYXJhbXMpLCBiaW5kaW5ncyAmJiBwYXRoQmluZGluZ3MucG9wKCksIG5hbWVkID0gXCJfXCIgKyBwYXRoLCBib3VuZE5hbWUgPSBib3VuZCwgcGFyYW1JbmRleCA9IGluZGV4ICsgYWxsLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdGJpbmRpbmdzICYmICgoYmluZGluZ3MgPSBibmRDdHguYmQgPSBwYXRoQmluZGluZ3NbbmFtZWRdID0gW10pLCBiaW5kaW5ncy5za3AgPSAhYm91bmQpLCBwYXRoICsgJzonKVxuXHRcdFx0XHRcdFx0XHQ6IHBhdGhcblx0XHRcdFx0Ly8gcGF0aFxuXHRcdFx0XHRcdFx0XHRcdD8gKHBhdGguc3BsaXQoXCJeXCIpLmpvaW4oXCIuXCIpLnJlcGxhY2UoJHN1Yi5yUGF0aCwgcGFyc2VQYXRoKVxuXHRcdFx0XHRcdFx0XHRcdFx0KyAocHJuXG5cdFx0XHRcdC8vIHNvbWUuZm5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IChibmRDdHggPSBibmRTdGFja1srK3BhcmVuRGVwdGhdID0ge2JkOiBbXX0sIGZuQ2FsbFtwYXJlbkRlcHRoXSA9IHJ0U3EsIHBybilcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBvcGVyYXRvcilcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0OiBvcGVyYXRvclxuXHRcdFx0XHQvLyBvcGVyYXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0PyBvcGVyYXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBydFByblxuXHRcdFx0XHQvLyBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICgocnRQcm4gPSBmbkNhbGxbcGFyZW5EZXB0aF0gfHwgcnRQcm4sIGZuQ2FsbFtwYXJlbkRlcHRoXSA9IGZhbHNlLCBibmRDdHggPSBibmRTdGFja1stLXBhcmVuRGVwdGhdLCBydFBybilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIChwcm4gLy8gcnRQcm4gYW5kIHBybiwgZS5nICkoIGluIChhKSgpIG9yIGEoKSgpLCBvciApWyBpbiBhKClbXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAoYm5kQ3R4ID0gYm5kU3RhY2tbKytwYXJlbkRlcHRoXSwgZm5DYWxsW3BhcmVuRGVwdGhdID0gcnRTcSwgcHJuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcIlwiKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogY29tbWFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IChmbkNhbGxbcGFyZW5EZXB0aF0gfHwgc3ludGF4RXJyb3IocGFyYW1zKSwgXCIsXCIpIC8vIFdlIGRvbid0IGFsbG93IHRvcC1sZXZlbCBsaXRlcmFsIGFycmF5cyBvciBvYmplY3RzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBsZnRQcm4wXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogKGFwb3NlZCA9IGFwb3MsIHF1b3RlZCA9IHF1b3QsICdcIicpXG5cdFx0XHRcdCkpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBuYW1lZCwgYmluZHRvLCBib3VuZE5hbWUsXG5cdFx0cXVvdGVkLCAvLyBib29sZWFuIGZvciBzdHJpbmcgY29udGVudCBpbiBkb3VibGUgcXVvdGVzXG5cdFx0YXBvc2VkLCAvLyBvciBpbiBzaW5nbGUgcXVvdGVzXG5cdFx0YmluZGluZ3MgPSBwYXRoQmluZGluZ3MgJiYgcGF0aEJpbmRpbmdzWzBdLCAvLyBiaW5kaW5ncyBhcnJheSBmb3IgdGhlIGZpcnN0IGFyZ1xuXHRcdGJuZEN0eCA9IHtiZDogYmluZGluZ3N9LFxuXHRcdGJuZFN0YWNrID0gezA6IGJuZEN0eH0sXG5cdFx0cGFyYW1JbmRleCA9IDAsIC8vIGxpc3QsXG5cdFx0dG1wbExpbmtzID0gKHRtcGwgPyB0bXBsLmxpbmtzIDogYmluZGluZ3MgJiYgKGJpbmRpbmdzLmxpbmtzID0gYmluZGluZ3MubGlua3MgfHwge30pKSB8fCB0b3BWaWV3LnRtcGwubGlua3MsXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBhcmUgdXNlZCBmb3IgdHJhY2tpbmcgcGF0aCBwYXJzaW5nIGluY2x1ZGluZyBuZXN0ZWQgcGF0aHMsIHN1Y2ggYXMgXCJhLmIoY15kICsgKGUpKV5mXCIsIGFuZCBjaGFpbmVkIGNvbXB1dGVkIHBhdGhzIHN1Y2ggYXNcblx0XHQvLyBcImEuYigpLmNeZCgpLmUuZigpLmdcIiAtIHdoaWNoIGhhcyBmb3VyIGNoYWluZWQgcGF0aHMsIFwiYS5iKClcIiwgXCJeYy5kKClcIiwgXCIuZS5mKClcIiBhbmQgXCIuZ1wiXG5cdFx0cGFyZW5EZXB0aCA9IDAsXG5cdFx0Zm5DYWxsID0ge30sIC8vIFdlIGFyZSBpbiBhIGZ1bmN0aW9uIGNhbGxcblx0XHRwYXRoU3RhcnQgPSB7fSwgLy8gdHJhY2tzIHRoZSBzdGFydCBvZiB0aGUgY3VycmVudCBwYXRoIHN1Y2ggYXMgY15kKCkgaW4gdGhlIGFib3ZlIGV4YW1wbGVcblx0XHRyZXN1bHQ7XG5cblx0aWYgKHBhcmFtc1swXSA9PT0gXCJAXCIpIHtcblx0XHRwYXJhbXMgPSBwYXJhbXMucmVwbGFjZShyQnJhY2tldFF1b3RlLCBcIi5cIik7XG5cdH1cblx0cmVzdWx0ID0gKHBhcmFtcyArICh0bXBsID8gXCIgXCIgOiBcIlwiKSkucmVwbGFjZSgkc3ViLnJQcm0sIHBhcnNlVG9rZW5zKTtcblxuXHRyZXR1cm4gIXBhcmVuRGVwdGggJiYgcmVzdWx0IHx8IHN5bnRheEVycm9yKHBhcmFtcyk7IC8vIFN5bnRheCBlcnJvciBpZiB1bmJhbGFuY2VkIHBhcmVucyBpbiBwYXJhbXMgZXhwcmVzc2lvblxufVxuXG5mdW5jdGlvbiBidWlsZENvZGUoYXN0LCB0bXBsLCBpc0xpbmtFeHByKSB7XG5cdC8vIEJ1aWxkIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBjb2RlIGZyb20gdGhlIEFTVCBub2RlcywgYW5kIHNldCBhcyBwcm9wZXJ0eSBvbiB0aGUgcGFzc2VkLWluIHRlbXBsYXRlIG9iamVjdFxuXHQvLyBVc2VkIGZvciBjb21waWxpbmcgdGVtcGxhdGVzLCBhbmQgYWxzbyBieSBKc1ZpZXdzIHRvIGJ1aWxkIGZ1bmN0aW9ucyBmb3IgZGF0YSBsaW5rIGV4cHJlc3Npb25zXG5cdHZhciBpLCBub2RlLCB0YWdOYW1lLCBjb252ZXJ0ZXIsIHRhZ0N0eCwgaGFzVGFnLCBoYXNFbmNvZGVyLCBnZXRzVmFsLCBoYXNDbnZ0LCB1c2VDbnZ0LCB0bXBsQmluZGluZ3MsIHBhdGhCaW5kaW5ncywgcGFyYW1zLCBib3VuZE9uRXJyU3RhcnQsXG5cdFx0Ym91bmRPbkVyckVuZCwgdGFnUmVuZGVyLCBuZXN0ZWRUbXBscywgdG1wbE5hbWUsIG5lc3RlZFRtcGwsIHRhZ0FuZEVsc2VzLCBjb250ZW50LCBtYXJrdXAsIG5leHRJc0Vsc2UsIG9sZENvZGUsIGlzRWxzZSwgaXNHZXRWYWwsIHRhZ0N0eEZuLFxuXHRcdG9uRXJyb3IsIHRhZ1N0YXJ0LCB0cmlnZ2VyLCBsYXRlUmVuZGVyLCByZXRTdHJPcGVuLCByZXRTdHJDbG9zZSxcblx0XHR0bXBsQmluZGluZ0tleSA9IDAsXG5cdFx0dXNlVmlld3MgPSAkc3ViU2V0dGluZ3NBZHZhbmNlZC51c2VWaWV3cyB8fCB0bXBsLnVzZVZpZXdzIHx8IHRtcGwudGFncyB8fCB0bXBsLnRlbXBsYXRlcyB8fCB0bXBsLmhlbHBlcnMgfHwgdG1wbC5jb252ZXJ0ZXJzLFxuXHRcdGNvZGUgPSBcIlwiLFxuXHRcdHRtcGxPcHRpb25zID0ge30sXG5cdFx0bCA9IGFzdC5sZW5ndGg7XG5cblx0aWYgKFwiXCIgKyB0bXBsID09PSB0bXBsKSB7XG5cdFx0dG1wbE5hbWUgPSBpc0xpbmtFeHByID8gJ2RhdGEtbGluaz1cIicgKyB0bXBsLnJlcGxhY2Uock5ld0xpbmUsIFwiIFwiKS5zbGljZSgxLCAtMSkgKyAnXCInIDogdG1wbDtcblx0XHR0bXBsID0gMDtcblx0fSBlbHNlIHtcblx0XHR0bXBsTmFtZSA9IHRtcGwudG1wbE5hbWUgfHwgXCJ1bm5hbWVkXCI7XG5cdFx0aWYgKHRtcGwuYWxsb3dDb2RlKSB7XG5cdFx0XHR0bXBsT3B0aW9ucy5hbGxvd0NvZGUgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG1wbC5kZWJ1Zykge1xuXHRcdFx0dG1wbE9wdGlvbnMuZGVidWcgPSB0cnVlO1xuXHRcdH1cblx0XHR0bXBsQmluZGluZ3MgPSB0bXBsLmJuZHM7XG5cdFx0bmVzdGVkVG1wbHMgPSB0bXBsLnRtcGxzO1xuXHR9XG5cdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHQvLyBBU1Qgbm9kZXM6IFswOiB0YWdOYW1lLCAxOiBjb252ZXJ0ZXIsIDI6IGNvbnRlbnQsIDM6IHBhcmFtcywgNDogY29kZSwgNTogb25FcnJvciwgNjogdHJpZ2dlciwgNzpwYXRoQmluZGluZ3MsIDg6IGNvbnRlbnRNYXJrdXBdXG5cdFx0bm9kZSA9IGFzdFtpXTtcblxuXHRcdC8vIEFkZCBuZXdsaW5lIGZvciBlYWNoIGNhbGxvdXQgdG8gdCgpIGMoKSBldGMuIGFuZCBlYWNoIG1hcmt1cCBzdHJpbmdcblx0XHRpZiAoXCJcIiArIG5vZGUgPT09IG5vZGUpIHtcblx0XHRcdC8vIGEgbWFya3VwIHN0cmluZyB0byBiZSBpbnNlcnRlZFxuXHRcdFx0Y29kZSArPSAnXFxuK1wiJyArIG5vZGUgKyAnXCInO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBhIGNvbXBpbGVkIHRhZyBleHByZXNzaW9uIHRvIGJlIGluc2VydGVkXG5cdFx0XHR0YWdOYW1lID0gbm9kZVswXTtcblx0XHRcdGlmICh0YWdOYW1lID09PSBcIipcIikge1xuXHRcdFx0XHQvLyBDb2RlIHRhZzoge3sqIH19XG5cdFx0XHRcdGNvZGUgKz0gXCI7XFxuXCIgKyBub2RlWzFdICsgXCJcXG5yZXQ9cmV0XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb252ZXJ0ZXIgPSBub2RlWzFdO1xuXHRcdFx0XHRjb250ZW50ID0gIWlzTGlua0V4cHIgJiYgbm9kZVsyXTtcblx0XHRcdFx0dGFnQ3R4ID0gcGFyYW1TdHJ1Y3R1cmUobm9kZVszXSwgJ3BhcmFtcycpICsgJ30sJyArIHBhcmFtU3RydWN0dXJlKHBhcmFtcyA9IG5vZGVbNF0pO1xuXHRcdFx0XHR0cmlnZ2VyID0gbm9kZVs2XTtcblx0XHRcdFx0bGF0ZVJlbmRlciA9IG5vZGVbN107XG5cdFx0XHRcdGlmIChub2RlWzhdKSB7IC8vIGxhdGVQYXRoIEBhLmIuYyBvciBAfmEuYi5jXG5cdFx0XHRcdFx0cmV0U3RyT3BlbiA9IFwiXFxudmFyIG9iLGx0T2I9e30sY3R4cz1cIjtcblx0XHRcdFx0XHRyZXRTdHJDbG9zZSA9IFwiO1xcbmN0eHMubHQ9bHRPYi5sdDtcXG5yZXR1cm4gY3R4cztcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXRTdHJPcGVuID0gXCJcXG5yZXR1cm4gXCI7XG5cdFx0XHRcdFx0cmV0U3RyQ2xvc2UgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hcmt1cCA9IG5vZGVbMTBdICYmIG5vZGVbMTBdLnJlcGxhY2UoclVuZXNjYXBlUXVvdGVzLCBcIiQxXCIpO1xuXHRcdFx0XHRpZiAoaXNFbHNlID0gdGFnTmFtZSA9PT0gXCJlbHNlXCIpIHtcblx0XHRcdFx0XHRpZiAocGF0aEJpbmRpbmdzKSB7XG5cdFx0XHRcdFx0XHRwYXRoQmluZGluZ3MucHVzaChub2RlWzldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b25FcnJvciA9IG5vZGVbNV0gfHwgJHN1YlNldHRpbmdzLmRlYnVnTW9kZSAhPT0gZmFsc2UgJiYgXCJ1bmRlZmluZWRcIjsgLy8gSWYgZGVidWdNb2RlIG5vdCBmYWxzZSwgc2V0IGRlZmF1bHQgb25FcnJvciBoYW5kbGVyIG9uIHRhZyB0byBcInVuZGVmaW5lZFwiIChzZWUgb25SZW5kZXJFcnJvcilcblx0XHRcdFx0XHRpZiAodG1wbEJpbmRpbmdzICYmIChwYXRoQmluZGluZ3MgPSBub2RlWzldKSkgeyAvLyBBcnJheSBvZiBwYXRocywgb3IgZmFsc2UgaWYgbm90IGRhdGEtYm91bmRcblx0XHRcdFx0XHRcdHBhdGhCaW5kaW5ncyA9IFtwYXRoQmluZGluZ3NdO1xuXHRcdFx0XHRcdFx0dG1wbEJpbmRpbmdLZXkgPSB0bXBsQmluZGluZ3MucHVzaCgxKTsgLy8gQWRkIHBsYWNlaG9sZGVyIGluIHRtcGxCaW5kaW5ncyBmb3IgY29tcGlsZWQgZnVuY3Rpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dXNlVmlld3MgPSB1c2VWaWV3cyB8fCBwYXJhbXNbMV0gfHwgcGFyYW1zWzJdIHx8IHBhdGhCaW5kaW5ncyB8fCAvdmlldy4oPyFpbmRleCkvLnRlc3QocGFyYW1zWzBdKTtcblx0XHRcdFx0Ly8gdXNlVmlld3MgaXMgZm9yIHBlcmYgb3B0aW1pemF0aW9uLiBGb3IgcmVuZGVyKCkgd2Ugb25seSB1c2Ugdmlld3MgaWYgbmVjZXNzYXJ5IC0gZm9yIHRoZSBtb3JlIGFkdmFuY2VkIHNjZW5hcmlvcy5cblx0XHRcdFx0Ly8gV2UgdXNlIHZpZXdzIGlmIHRoZXJlIGFyZSBwcm9wcywgY29udGV4dHVhbCBwcm9wZXJ0aWVzIG9yIGFyZ3Mgd2l0aCAjLi4uIChvdGhlciB0aGFuICNpbmRleCkgLSBidXQgeW91IGNhbiBmb3JjZVxuXHRcdFx0XHQvLyB1c2luZyB0aGUgZnVsbCB2aWV3IGluZnJhc3RydWN0dXJlLCAoYW5kIHBheSBhIHBlcmYgcHJpY2UpIGJ5IG9wdGluZyBpbjogU2V0IHVzZVZpZXdzOiB0cnVlIG9uIHRoZSB0ZW1wbGF0ZSwgbWFudWFsbHkuLi5cblx0XHRcdFx0aWYgKGlzR2V0VmFsID0gdGFnTmFtZSA9PT0gXCI6XCIpIHtcblx0XHRcdFx0XHRpZiAoY29udmVydGVyKSB7XG5cdFx0XHRcdFx0XHR0YWdOYW1lID0gY29udmVydGVyID09PSBIVE1MID8gXCI+XCIgOiBjb252ZXJ0ZXIgKyB0YWdOYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoY29udGVudCkgeyAvLyBUT0RPIG9wdGltaXplIC0gaWYgY29udGVudC5sZW5ndGggPT09IDAgb3IgaWYgdGhlcmUgaXMgYSB0bXBsPVwiLi4uXCIgc3BlY2lmaWVkIC0gc2V0IGNvbnRlbnQgdG8gbnVsbCAvIGRvbid0IHJ1biB0aGlzIGNvbXBpbGF0aW9uIGNvZGUgLSBzaW5jZSBjb250ZW50IHdvbid0IGdldCB1c2VkISFcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0ZW1wbGF0ZSBvYmplY3QgZm9yIG5lc3RlZCB0ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0bmVzdGVkVG1wbCA9IHRtcGxPYmplY3QobWFya3VwLCB0bXBsT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRuZXN0ZWRUbXBsLnRtcGxOYW1lID0gdG1wbE5hbWUgKyBcIi9cIiArIHRhZ05hbWU7XG5cdFx0XHRcdFx0XHQvLyBDb21waWxlIHRvIEFTVCBhbmQgdGhlbiB0byBjb21waWxlZCBmdW5jdGlvblxuXHRcdFx0XHRcdFx0bmVzdGVkVG1wbC51c2VWaWV3cyA9IG5lc3RlZFRtcGwudXNlVmlld3MgfHwgdXNlVmlld3M7XG5cdFx0XHRcdFx0XHRidWlsZENvZGUoY29udGVudCwgbmVzdGVkVG1wbCk7XG5cdFx0XHRcdFx0XHR1c2VWaWV3cyA9IG5lc3RlZFRtcGwudXNlVmlld3M7XG5cdFx0XHRcdFx0XHRuZXN0ZWRUbXBscy5wdXNoKG5lc3RlZFRtcGwpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghaXNFbHNlKSB7XG5cdFx0XHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBhbiBlbHNlIHRhZy5cblx0XHRcdFx0XHRcdHRhZ0FuZEVsc2VzID0gdGFnTmFtZTtcblx0XHRcdFx0XHRcdHVzZVZpZXdzID0gdXNlVmlld3MgfHwgdGFnTmFtZSAmJiAoISR0YWdzW3RhZ05hbWVdIHx8ICEkdGFnc1t0YWdOYW1lXS5mbG93KTtcblx0XHRcdFx0XHRcdC8vIFN3aXRjaCB0byBhIG5ldyBjb2RlIHN0cmluZyBmb3IgdGhpcyBib3VuZCB0YWcgKGFuZCBpdHMgZWxzZXMsIGlmIGl0IGhhcyBhbnkpIC0gZm9yIHJldHVybmluZyB0aGUgdGFnQ3R4cyBhcnJheVxuXHRcdFx0XHRcdFx0b2xkQ29kZSA9IGNvZGU7XG5cdFx0XHRcdFx0XHRjb2RlID0gXCJcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV4dElzRWxzZSA9IGFzdFtpICsgMV07XG5cdFx0XHRcdFx0bmV4dElzRWxzZSA9IG5leHRJc0Vsc2UgJiYgbmV4dElzRWxzZVswXSA9PT0gXCJlbHNlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFnU3RhcnQgPSBvbkVycm9yID8gXCI7XFxudHJ5e1xcbnJldCs9XCIgOiBcIlxcbitcIjtcblx0XHRcdFx0Ym91bmRPbkVyclN0YXJ0ID0gXCJcIjtcblx0XHRcdFx0Ym91bmRPbkVyckVuZCA9IFwiXCI7XG5cblx0XHRcdFx0aWYgKGlzR2V0VmFsICYmIChwYXRoQmluZGluZ3MgfHwgdHJpZ2dlciB8fCBjb252ZXJ0ZXIgJiYgY29udmVydGVyICE9PSBIVE1MIHx8IGxhdGVSZW5kZXIpKSB7XG5cdFx0XHRcdFx0Ly8gRm9yIGNvbnZlcnRWYWwgd2UgbmVlZCBhIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgbmV3IHRhZ0N0eChzKVxuXHRcdFx0XHRcdHRhZ0N0eEZuID0gbmV3IEZ1bmN0aW9uKFwiZGF0YSx2aWV3LGosdVwiLCBcIi8vIFwiICsgdG1wbE5hbWUgKyBcIiBcIiArICgrK3RtcGxCaW5kaW5nS2V5KSArIFwiIFwiICsgdGFnTmFtZVxuXHRcdFx0XHRcdFx0KyByZXRTdHJPcGVuICsgXCJ7XCIgKyB0YWdDdHggKyBcIn07XCIgKyByZXRTdHJDbG9zZSk7XG5cdFx0XHRcdFx0dGFnQ3R4Rm4uX2VyID0gb25FcnJvcjtcblx0XHRcdFx0XHR0YWdDdHhGbi5fdGFnID0gdGFnTmFtZTtcblx0XHRcdFx0XHR0YWdDdHhGbi5fYmQgPSAhIXBhdGhCaW5kaW5nczsgLy8gZGF0YS1saW5rZWQgdGFnIHteey4uLi99fVxuXHRcdFx0XHRcdHRhZ0N0eEZuLl9sciA9IGxhdGVSZW5kZXI7XG5cblx0XHRcdFx0XHRpZiAoaXNMaW5rRXhwcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhZ0N0eEZuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNldFBhdGhzKHRhZ0N0eEZuLCBwYXRoQmluZGluZ3MpO1xuXHRcdFx0XHRcdHRhZ1JlbmRlciA9ICdjKFwiJyArIGNvbnZlcnRlciArICdcIix2aWV3LCc7XG5cdFx0XHRcdFx0dXNlQ252dCA9IHRydWU7XG5cdFx0XHRcdFx0Ym91bmRPbkVyclN0YXJ0ID0gdGFnUmVuZGVyICsgdG1wbEJpbmRpbmdLZXkgKyBcIixcIjtcblx0XHRcdFx0XHRib3VuZE9uRXJyRW5kID0gXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29kZSArPSAoaXNHZXRWYWxcblx0XHRcdFx0XHQ/IChpc0xpbmtFeHByID8gKG9uRXJyb3IgPyBcInRyeXtcXG5cIiA6IFwiXCIpICsgXCJyZXR1cm4gXCIgOiB0YWdTdGFydCkgKyAodXNlQ252dCAvLyBDYWxsIF9jbnZ0IGlmIHRoZXJlIGlzIGEgY29udmVydGVyOiB7e2NudnQ6IC4uLiB9fSBvciB7XntjbnZ0OiAuLi4gfX1cblx0XHRcdFx0XHRcdD8gKHVzZUNudnQgPSB1bmRlZmluZWQsIHVzZVZpZXdzID0gaGFzQ252dCA9IHRydWUsIHRhZ1JlbmRlciArICh0YWdDdHhGblxuXHRcdFx0XHRcdFx0XHQ/ICgodG1wbEJpbmRpbmdzW3RtcGxCaW5kaW5nS2V5IC0gMV0gPSB0YWdDdHhGbiksIHRtcGxCaW5kaW5nS2V5KSAvLyBTdG9yZSB0aGUgY29tcGlsZWQgdGFnQ3R4Rm4gaW4gdG1wbC5ibmRzLCBhbmQgcGFzcyB0aGUga2V5IHRvIGNvbnZlcnRWYWwoKVxuXHRcdFx0XHRcdFx0XHQ6IFwie1wiICsgdGFnQ3R4ICsgXCJ9XCIpICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQ6IHRhZ05hbWUgPT09IFwiPlwiXG5cdFx0XHRcdFx0XHRcdD8gKGhhc0VuY29kZXIgPSB0cnVlLCBcImgoXCIgKyBwYXJhbXNbMF0gKyBcIilcIilcblx0XHRcdFx0XHRcdFx0OiAoZ2V0c1ZhbCA9IHRydWUsIFwiKCh2PVwiICsgcGFyYW1zWzBdICsgJykhPW51bGw/djonICsgKGlzTGlua0V4cHIgPyAnbnVsbCknIDogJ1wiXCIpJykpXG5cdFx0XHRcdFx0XHRcdC8vIE5vbiBzdHJpY3QgZXF1YWxpdHkgc28gZGF0YS1saW5rPVwidGl0bGV7OmV4cHJ9XCIgd2l0aCBleHByPW51bGwvdW5kZWZpbmVkIHJlbW92ZXMgdGl0bGUgYXR0cmlidXRlXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdDogKGhhc1RhZyA9IHRydWUsIFwiXFxue3ZpZXc6dmlldyxjb250ZW50OmZhbHNlLHRtcGw6XCIgLy8gQWRkIHRoaXMgdGFnQ3R4IHRvIHRoZSBjb21waWxlZCBjb2RlIGZvciB0aGUgdGFnQ3R4cyB0byBiZSBwYXNzZWQgdG8gcmVuZGVyVGFnKClcblx0XHRcdFx0XHRcdCsgKGNvbnRlbnQgPyBuZXN0ZWRUbXBscy5sZW5ndGggOiBcImZhbHNlXCIpICsgXCIsXCIgLy8gRm9yIGJsb2NrIHRhZ3MsIHBhc3MgaW4gdGhlIGtleSAobmVzdGVkVG1wbHMubGVuZ3RoKSB0byB0aGUgbmVzdGVkIGNvbnRlbnQgdGVtcGxhdGVcblx0XHRcdFx0XHRcdCsgdGFnQ3R4ICsgXCJ9LFwiKSk7XG5cblx0XHRcdFx0aWYgKHRhZ0FuZEVsc2VzICYmICFuZXh0SXNFbHNlKSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIGRhdGEtbGluayBleHByZXNzaW9uIG9yIGFuIGlubGluZSB0YWcgd2l0aG91dCBhbnkgZWxzZXMsIG9yIHRoZSBsYXN0IHt7ZWxzZX19IG9mIGFuIGlubGluZSB0YWdcblx0XHRcdFx0XHQvLyBXZSBjb21wbGV0ZSB0aGUgY29kZSBmb3IgcmV0dXJuaW5nIHRoZSB0YWdDdHhzIGFycmF5XG5cdFx0XHRcdFx0Y29kZSA9IFwiW1wiICsgY29kZS5zbGljZSgwLCAtMSkgKyBcIl1cIjtcblx0XHRcdFx0XHR0YWdSZW5kZXIgPSAndChcIicgKyB0YWdBbmRFbHNlcyArICdcIix2aWV3LHRoaXMsJztcblx0XHRcdFx0XHRpZiAoaXNMaW5rRXhwciB8fCBwYXRoQmluZGluZ3MpIHtcblx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBib3VuZCB0YWcgKGRhdGEtbGluayBleHByZXNzaW9uIG9yIGlubGluZSBib3VuZCB0YWcge157dGFnIC4uLn19KSBzbyB3ZSBzdG9yZSBhIGNvbXBpbGVkIHRhZ0N0eHMgZnVuY3Rpb24gaW4gdG1wLmJuZHNcblx0XHRcdFx0XHRcdGNvZGUgPSBuZXcgRnVuY3Rpb24oXCJkYXRhLHZpZXcsaix1XCIsIFwiIC8vIFwiICsgdG1wbE5hbWUgKyBcIiBcIiArIHRtcGxCaW5kaW5nS2V5ICsgXCIgXCIgKyB0YWdBbmRFbHNlcyArIHJldFN0ck9wZW4gKyBjb2RlXG5cdFx0XHRcdFx0XHRcdCsgcmV0U3RyQ2xvc2UpO1xuXHRcdFx0XHRcdFx0Y29kZS5fZXIgPSBvbkVycm9yO1xuXHRcdFx0XHRcdFx0Y29kZS5fdGFnID0gdGFnQW5kRWxzZXM7XG5cdFx0XHRcdFx0XHRpZiAocGF0aEJpbmRpbmdzKSB7XG5cdFx0XHRcdFx0XHRcdHNldFBhdGhzKHRtcGxCaW5kaW5nc1t0bXBsQmluZGluZ0tleSAtIDFdID0gY29kZSwgcGF0aEJpbmRpbmdzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvZGUuX2xyID0gbGF0ZVJlbmRlcjtcblx0XHRcdFx0XHRcdGlmIChpc0xpbmtFeHByKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjb2RlOyAvLyBGb3IgYSBkYXRhLWxpbmsgZXhwcmVzc2lvbiB3ZSByZXR1cm4gdGhlIGNvbXBpbGVkIHRhZ0N0eHMgZnVuY3Rpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJvdW5kT25FcnJTdGFydCA9IHRhZ1JlbmRlciArIHRtcGxCaW5kaW5nS2V5ICsgXCIsdW5kZWZpbmVkLFwiO1xuXHRcdFx0XHRcdFx0Ym91bmRPbkVyckVuZCA9IFwiKVwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgdGhlIGxhc3Qge3tlbHNlfX0gZm9yIGFuIGlubGluZSB0YWcuXG5cdFx0XHRcdFx0Ly8gRm9yIGEgYm91bmQgdGFnLCBwYXNzIHRoZSB0YWdDdHhzIGZuIGxvb2t1cCBrZXkgdG8gcmVuZGVyVGFnLlxuXHRcdFx0XHRcdC8vIEZvciBhbiB1bmJvdW5kIHRhZywgaW5jbHVkZSB0aGUgY29kZSBkaXJlY3RseSBmb3IgZXZhbHVhdGluZyB0YWdDdHhzIGFycmF5XG5cdFx0XHRcdFx0Y29kZSA9IG9sZENvZGUgKyB0YWdTdGFydCArIHRhZ1JlbmRlciArIChwYXRoQmluZGluZ3MgJiYgdG1wbEJpbmRpbmdLZXkgfHwgY29kZSkgKyBcIilcIjtcblx0XHRcdFx0XHRwYXRoQmluZGluZ3MgPSAwO1xuXHRcdFx0XHRcdHRhZ0FuZEVsc2VzID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob25FcnJvciAmJiAhbmV4dElzRWxzZSkge1xuXHRcdFx0XHRcdHVzZVZpZXdzID0gdHJ1ZTtcblx0XHRcdFx0XHRjb2RlICs9ICc7XFxufWNhdGNoKGUpe3JldCcgKyAoaXNMaW5rRXhwciA/IFwidXJuIFwiIDogXCIrPVwiKSArIGJvdW5kT25FcnJTdGFydCArICdqLl9lcnIoZSx2aWV3LCcgKyBvbkVycm9yICsgJyknICsgYm91bmRPbkVyckVuZCArICc7fScgKyAoaXNMaW5rRXhwciA/IFwiXCIgOiAncmV0PXJldCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEluY2x1ZGUgb25seSB0aGUgdmFyIHJlZmVyZW5jZXMgdGhhdCBhcmUgbmVlZGVkIGluIHRoZSBjb2RlXG5cdGNvZGUgPSBcIi8vIFwiICsgdG1wbE5hbWVcblx0XHQrICh0bXBsT3B0aW9ucy5kZWJ1ZyA/IFwiXFxuZGVidWdnZXI7XCIgOiBcIlwiKVxuXHRcdCsgXCJcXG52YXIgdlwiXG5cdFx0KyAoaGFzVGFnID8gXCIsdD1qLl90YWdcIiA6IFwiXCIpICAgICAgICAgICAgICAgIC8vIGhhcyB0YWdcblx0XHQrIChoYXNDbnZ0ID8gXCIsYz1qLl9jbnZ0XCIgOiBcIlwiKSAgICAgICAgICAgICAgLy8gY29udmVydGVyXG5cdFx0KyAoaGFzRW5jb2RlciA/IFwiLGg9ai5faHRtbFwiIDogXCJcIikgICAgICAgICAgIC8vIGh0bWwgY29udmVydGVyXG5cdFx0KyAoaXNMaW5rRXhwclxuXHRcdFx0XHQ/IChub2RlWzhdICAvLyBsYXRlIEAuLi4gcGF0aD9cblx0XHRcdFx0XHRcdD8gXCIsIG9iXCJcblx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdCkgKyBcIjtcXG5cIlxuXHRcdFx0XHQ6ICcscmV0PVwiXCInKVxuXHRcdCsgY29kZVxuXHRcdCsgKGlzTGlua0V4cHIgPyBcIlxcblwiIDogXCI7XFxucmV0dXJuIHJldDtcIik7XG5cblx0dHJ5IHtcblx0XHRjb2RlID0gbmV3IEZ1bmN0aW9uKFwiZGF0YSx2aWV3LGosdVwiLCBjb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHN5bnRheEVycm9yKFwiQ29tcGlsZWQgdGVtcGxhdGUgY29kZTpcXG5cXG5cIiArIGNvZGUgKyAnXFxuOiBcIicgKyAoZS5tZXNzYWdlfHxlKSArICdcIicpO1xuXHR9XG5cdGlmICh0bXBsKSB7XG5cdFx0dG1wbC5mbiA9IGNvZGU7XG5cdFx0dG1wbC51c2VWaWV3cyA9ICEhdXNlVmlld3M7XG5cdH1cblx0cmV0dXJuIGNvZGU7XG59XG5cbi8vPT09PT09PT09PVxuLy8gVXRpbGl0aWVzXG4vLz09PT09PT09PT1cblxuLy8gTWVyZ2Ugb2JqZWN0cywgaW4gcGFydGljdWxhciBjb250ZXh0cyB3aGljaCBpbmhlcml0IGZyb20gcGFyZW50IGNvbnRleHRzXG5mdW5jdGlvbiBleHRlbmRDdHgoY29udGV4dCwgcGFyZW50Q29udGV4dCkge1xuXHQvLyBSZXR1cm4gY29weSBvZiBwYXJlbnRDb250ZXh0LCB1bmxlc3MgY29udGV4dCBpcyBkZWZpbmVkIGFuZCBpcyBkaWZmZXJlbnQsIGluIHdoaWNoIGNhc2UgcmV0dXJuIGEgbmV3IG1lcmdlZCBjb250ZXh0XG5cdC8vIElmIG5laXRoZXIgY29udGV4dCBub3IgcGFyZW50Q29udGV4dCBhcmUgZGVmaW5lZCwgcmV0dXJuIHVuZGVmaW5lZFxuXHRyZXR1cm4gY29udGV4dCAmJiBjb250ZXh0ICE9PSBwYXJlbnRDb250ZXh0XG5cdFx0PyAocGFyZW50Q29udGV4dFxuXHRcdFx0PyAkZXh0ZW5kKCRleHRlbmQoe30sIHBhcmVudENvbnRleHQpLCBjb250ZXh0KVxuXHRcdFx0OiBjb250ZXh0KVxuXHRcdDogcGFyZW50Q29udGV4dCAmJiAkZXh0ZW5kKHt9LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0UHJvcHMoc291cmNlLCB0YWdDdHgpIHtcblx0Ly8gdGhpcyBwb2ludGVyIGlzIHRoZU1hcCAtIHdoaWNoIGhhcyB0YWdDdHgucHJvcHMgdG9vXG5cdC8vIGFyZ3VtZW50czogdGFnQ3R4LmFyZ3MuXG5cdHZhciBrZXksIHByb3AsXG5cdFx0bWFwID0gdGFnQ3R4Lm1hcCxcblx0XHRwcm9wc0FyciA9IG1hcCAmJiBtYXAucHJvcHNBcnI7XG5cblx0aWYgKCFwcm9wc0FycikgeyAvLyBtYXAucHJvcHNBcnIgaXMgdGhlIGZ1bGwgYXJyYXkgb2Yge2tleTouLi4sIHByb3A6Li4ufSBvYmplY3RzXG5cdFx0cHJvcHNBcnIgPSBbXTtcblx0XHRpZiAodHlwZW9mIHNvdXJjZSA9PT0gT0JKRUNUIHx8ICRpc0Z1bmN0aW9uKHNvdXJjZSkpIHtcblx0XHRcdGZvciAoa2V5IGluIHNvdXJjZSkge1xuXHRcdFx0XHRwcm9wID0gc291cmNlW2tleV07XG5cdFx0XHRcdGlmIChrZXkgIT09ICRleHBhbmRvICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICghdGFnQ3R4LnByb3BzLm5vRnVuY3Rpb25zIHx8ICEkLmlzRnVuY3Rpb24ocHJvcCkpKSB7XG5cdFx0XHRcdFx0cHJvcHNBcnIucHVzaCh7a2V5OiBrZXksIHByb3A6IHByb3B9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobWFwKSB7XG5cdFx0XHRtYXAucHJvcHNBcnIgPSBtYXAub3B0aW9ucyAmJiBwcm9wc0FycjsgLy8gSWYgYm91bmQge157cHJvcHN9fSBhbmQgbm90IGlzUmVuZGVyQ2FsbCwgc3RvcmUgcHJvcHNBcnIgb24gbWFwIChtYXAub3B0aW9ucyBpcyBkZWZpbmVkIG9ubHkgZm9yIGJvdW5kLCAmJiAhaXNSZW5kZXJDYWxsKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZ2V0VGFyZ2V0U29ydGVkKHByb3BzQXJyLCB0YWdDdHgpOyAvLyBPYnRhaW5zIG1hcC50Z3QsIGJ5IGZpbHRlcmluZywgc29ydGluZyBhbmQgc3BsaWNpbmcgdGhlIGZ1bGwgcHJvcHNBcnJcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0U29ydGVkKHZhbHVlLCB0YWdDdHgpIHtcblx0Ly8gZ2V0VGd0XG5cdHZhciBtYXBwZWQsIHN0YXJ0LCBlbmQsXG5cdFx0dGFnID0gdGFnQ3R4LnRhZyxcblx0XHRwcm9wcyA9IHRhZ0N0eC5wcm9wcyxcblx0XHRwcm9wUGFyYW1zID0gdGFnQ3R4LnBhcmFtcy5wcm9wcyxcblx0XHRmaWx0ZXIgPSBwcm9wcy5maWx0ZXIsXG5cdFx0c29ydCA9IHByb3BzLnNvcnQsXG5cdFx0ZGlyZWN0U29ydCA9IHNvcnQgPT09IHRydWUsXG5cdFx0c3RlcCA9IHBhcnNlSW50KHByb3BzLnN0ZXApLFxuXHRcdHJldmVyc2UgPSBwcm9wcy5yZXZlcnNlID8gLTEgOiAxO1xuXG5cdGlmICghJGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGlmIChkaXJlY3RTb3J0IHx8IHNvcnQgJiYgXCJcIiArIHNvcnQgPT09IHNvcnQpIHtcblx0XHQvLyBUZW1wb3JhcnkgbWFwcGVkIGFycmF5IGhvbGRzIG9iamVjdHMgd2l0aCBpbmRleCBhbmQgc29ydC12YWx1ZVxuXHRcdG1hcHBlZCA9IHZhbHVlLm1hcChmdW5jdGlvbihpdGVtLCBpKSB7XG5cdFx0XHRpdGVtID0gZGlyZWN0U29ydCA/IGl0ZW0gOiBnZXRQYXRoT2JqZWN0KGl0ZW0sIHNvcnQpO1xuXHRcdFx0cmV0dXJuIHtpOiBpLCB2OiBcIlwiICsgaXRlbSA9PT0gaXRlbSA/IGl0ZW0udG9Mb3dlckNhc2UoKSA6IGl0ZW19O1xuXHRcdH0pO1xuXHRcdC8vIFNvcnQgbWFwcGVkIGFycmF5XG5cdFx0bWFwcGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0cmV0dXJuIGEudiA+IGIudiA/IHJldmVyc2UgOiBhLnYgPCBiLnYgPyAtcmV2ZXJzZSA6IDA7XG5cdFx0fSk7XG5cdFx0Ly8gTWFwIHRvIG5ldyBhcnJheSB3aXRoIHJlc3VsdGluZyBvcmRlclxuXHRcdHZhbHVlID0gbWFwcGVkLm1hcChmdW5jdGlvbihpdGVtKXtcblx0XHRcdHJldHVybiB2YWx1ZVtpdGVtLmldO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKChzb3J0IHx8IHJldmVyc2UgPCAwKSAmJiAhdGFnLmRhdGFNYXApIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnNsaWNlKCk7IC8vIENsb25lIGFycmF5IGZpcnN0IGlmIG5vdCBhbHJlYWR5IGEgbmV3IGFycmF5XG5cdH1cblx0aWYgKCRpc0Z1bmN0aW9uKHNvcnQpKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS5zb3J0KGZ1bmN0aW9uKCkgeyAvLyBXcmFwIHRoZSBzb3J0IGZ1bmN0aW9uIHRvIHByb3ZpZGUgdGFnQ3R4IGFzICd0aGlzJyBwb2ludGVyXG5cdFx0XHRyZXR1cm4gc29ydC5hcHBseSh0YWdDdHgsIGFyZ3VtZW50cyk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKHJldmVyc2UgPCAwICYmICghc29ydCB8fCAkaXNGdW5jdGlvbihzb3J0KSkpIHsgLy8gUmV2ZXJzZSByZXN1bHQgaWYgbm90IGFscmVhZHkgcmV2ZXJzZWQgaW4gc29ydFxuXHRcdHZhbHVlID0gdmFsdWUucmV2ZXJzZSgpO1xuXHR9XG5cblx0aWYgKHZhbHVlLmZpbHRlciAmJiBmaWx0ZXIpIHsgLy8gSUU4IGRvZXMgbm90IHN1cHBvcnQgZmlsdGVyXG5cdFx0dmFsdWUgPSB2YWx1ZS5maWx0ZXIoZmlsdGVyLCB0YWdDdHgpO1xuXHRcdGlmICh0YWdDdHgudGFnLm9uRmlsdGVyKSB7XG5cdFx0XHR0YWdDdHgudGFnLm9uRmlsdGVyKHRhZ0N0eCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHByb3BQYXJhbXMuc29ydGVkKSB7XG5cdFx0bWFwcGVkID0gKHNvcnQgfHwgcmV2ZXJzZSA8IDApID8gdmFsdWUgOiB2YWx1ZS5zbGljZSgpO1xuXHRcdGlmICh0YWcuc29ydGVkKSB7XG5cdFx0XHQkLm9ic2VydmFibGUodGFnLnNvcnRlZCkucmVmcmVzaChtYXBwZWQpOyAvLyBOb3RlIHRoYXQgdGhpcyBtaWdodCBjYXVzZSB0aGUgc3RhcnQgYW5kIGVuZCBwcm9wcyB0byBiZSBtb2RpZmllZCAtIGUuZy4gYnkgcGFnZXIgdGFnIGNvbnRyb2xcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFnQ3R4Lm1hcC5zb3J0ZWQgPSBtYXBwZWQ7XG5cdFx0fVxuXHR9XG5cblx0c3RhcnQgPSBwcm9wcy5zdGFydDsgLy8gR2V0IGN1cnJlbnQgdmFsdWUgLSBhZnRlciBwb3NzaWJsZSAgY2hhbmdlcyB0cmlnZ2VyZWQgYnkgdGFnLnNvcnRlZCByZWZyZXNoKCkgYWJvdmVcblx0ZW5kID0gcHJvcHMuZW5kO1xuXHRpZiAocHJvcFBhcmFtcy5zdGFydCAmJiBzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHByb3BQYXJhbXMuZW5kICYmIGVuZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0c3RhcnQgPSBlbmQgPSAwO1xuXHR9XG5cdGlmICghaXNOYU4oc3RhcnQpIHx8ICFpc05hTihlbmQpKSB7IC8vIHN0YXJ0IG9yIGVuZCBzcGVjaWZpZWQsIGJ1dCBub3QgdGhlIGF1dG8tY3JlYXRlIE51bWJlciBhcnJheSBzY2VuYXJpbyBvZiB7e2ZvciBzdGFydD14eHggZW5kPXl5eX19XG5cdFx0c3RhcnQgPSArc3RhcnQgfHwgMDtcblx0XHRlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB2YWx1ZS5sZW5ndGggPyB2YWx1ZS5sZW5ndGggOiArZW5kO1xuXHRcdHZhbHVlID0gdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblx0aWYgKHN0ZXAgPiAxKSB7XG5cdFx0c3RhcnQgPSAwO1xuXHRcdGVuZCA9IHZhbHVlLmxlbmd0aDtcblx0XHRtYXBwZWQgPSBbXTtcblx0XHRmb3IgKDsgc3RhcnQ8ZW5kOyBzdGFydCs9c3RlcCkge1xuXHRcdFx0bWFwcGVkLnB1c2godmFsdWVbc3RhcnRdKTtcblx0XHR9XG5cdFx0dmFsdWUgPSBtYXBwZWQ7XG5cdH1cblx0aWYgKHByb3BQYXJhbXMucGFnZWQgJiYgdGFnLnBhZ2VkKSB7XG5cdFx0JG9ic2VydmFibGUodGFnLnBhZ2VkKS5yZWZyZXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqIFJlbmRlciB0aGUgdGVtcGxhdGUgYXMgYSBzdHJpbmcsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGF0YSBhbmQgaGVscGVycy9jb250ZXh0XG4qICQoXCIjdG1wbFwiKS5yZW5kZXIoKVxuKlxuKiBAcGFyYW0ge2FueX0gICAgICAgIGRhdGFcbiogQHBhcmFtIHtoYXNofSAgICAgICBbaGVscGVyc09yQ29udGV4dF1cbiogQHBhcmFtIHtib29sZWFufSAgICBbbm9JdGVyYXRpb25dXG4qIEByZXR1cm5zIHtzdHJpbmd9ICAgcmVuZGVyZWQgdGVtcGxhdGVcbiovXG5mdW5jdGlvbiAkZm5SZW5kZXIoZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24pIHtcblx0dmFyIHRtcGxFbGVtID0gdGhpcy5qcXVlcnkgJiYgKHRoaXNbMF0gfHwgZXJyb3IoJ1Vua25vd24gdGVtcGxhdGUnKSksIC8vIFRhcmdldGVkIGVsZW1lbnQgbm90IGZvdW5kIGZvciBqUXVlcnkgdGVtcGxhdGUgc2VsZWN0b3Igc3VjaCBhcyBcIiNteVRtcGxcIlxuXHRcdHRtcGwgPSB0bXBsRWxlbS5nZXRBdHRyaWJ1dGUodG1wbEF0dHIpO1xuXG5cdHJldHVybiByZW5kZXJDb250ZW50LmNhbGwodG1wbCAmJiAkLmRhdGEodG1wbEVsZW0pW2pzdlRtcGxdIHx8ICR0ZW1wbGF0ZXModG1wbEVsZW0pLFxuXHRcdGRhdGEsIGNvbnRleHQsIG5vSXRlcmF0aW9uKTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWdpc3RlciBjb252ZXJ0ZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGdldENoYXJFbnRpdHkoY2gpIHtcblx0Ly8gR2V0IGNoYXJhY3RlciBlbnRpdHkgZm9yIEhUTUwsIEF0dHJpYnV0ZSBhbmQgb3B0aW9uYWwgZGF0YSBlbmNvZGluZ1xuXHRyZXR1cm4gY2hhckVudGl0aWVzW2NoXSB8fCAoY2hhckVudGl0aWVzW2NoXSA9IFwiJiNcIiArIGNoLmNoYXJDb2RlQXQoMCkgKyBcIjtcIik7XG59XG5cbmZ1bmN0aW9uIGdldENoYXJGcm9tRW50aXR5KG1hdGNoLCB0b2tlbikge1xuXHQvLyBHZXQgY2hhcmFjdGVyIGZyb20gSFRNTCBlbnRpdHksIGZvciBvcHRpb25hbCBkYXRhIHVuZW5jb2Rpbmdcblx0cmV0dXJuIGNoYXJzRnJvbUVudGl0aWVzW3Rva2VuXSB8fCBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sRW5jb2RlKHRleHQpIHtcblx0Ly8gSFRNTCBlbmNvZGU6IFJlcGxhY2UgPCA+ICYgJyBcIiBgIGV0Yy4gYnkgY29ycmVzcG9uZGluZyBlbnRpdGllcy5cblx0cmV0dXJuIHRleHQgIT0gdW5kZWZpbmVkID8gcklzSHRtbC50ZXN0KHRleHQpICYmIChcIlwiICsgdGV4dCkucmVwbGFjZShySHRtbEVuY29kZSwgZ2V0Q2hhckVudGl0eSkgfHwgdGV4dCA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRhdGFFbmNvZGUodGV4dCkge1xuXHQvLyBFbmNvZGUganVzdCA8ID4gYW5kICYgLSBpbnRlbmRlZCBmb3IgJ3NhZmUgZGF0YScgYWxvbmcgd2l0aCB7ezp9fSByYXRoZXIgdGhhbiB7ez59fVxuICByZXR1cm4gXCJcIiArIHRleHQgPT09IHRleHQgPyB0ZXh0LnJlcGxhY2UockRhdGFFbmNvZGUsIGdldENoYXJFbnRpdHkpIDogdGV4dDtcbn1cblxuZnVuY3Rpb24gZGF0YVVuZW5jb2RlKHRleHQpIHtcbiAgLy8gVW5lbmNvZGUganVzdCA8ID4gYW5kICYgLSBpbnRlbmRlZCBmb3IgJ3NhZmUgZGF0YScgYWxvbmcgd2l0aCB7ezp9fSByYXRoZXIgdGhhbiB7ez59fVxuICByZXR1cm4gXCJcIiArIHRleHQgPT09IHRleHQgPyB0ZXh0LnJlcGxhY2UockRhdGFVbmVuY29kZSwgZ2V0Q2hhckZyb21FbnRpdHkpIDogdGV4dDtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBJbml0aWFsaXplID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRzdWIgPSAkdmlld3Muc3ViO1xuJHZpZXdzU2V0dGluZ3MgPSAkdmlld3Muc2V0dGluZ3M7XG5cbmlmICghKGpzciB8fCAkICYmICQucmVuZGVyKSkge1xuXHQvLyBKc1JlbmRlciBub3QgYWxyZWFkeSBsb2FkZWQsIG9yIGxvYWRlZCB3aXRob3V0IGpRdWVyeSwgYW5kIHdlIGFyZSBub3cgbW92aW5nIGZyb20ganNyZW5kZXIgbmFtZXNwYWNlIHRvIGpRdWVyeSBuYW1lcGFjZVxuXHRmb3IgKGpzdlN0b3JlTmFtZSBpbiBqc3ZTdG9yZXMpIHtcblx0XHRyZWdpc3RlclN0b3JlKGpzdlN0b3JlTmFtZSwganN2U3RvcmVzW2pzdlN0b3JlTmFtZV0pO1xuXHR9XG5cblx0JGNvbnZlcnRlcnMgPSAkdmlld3MuY29udmVydGVycztcblx0JGhlbHBlcnMgPSAkdmlld3MuaGVscGVycztcblx0JHRhZ3MgPSAkdmlld3MudGFncztcblxuXHQkc3ViLl90Zy5wcm90b3R5cGUgPSB7XG5cdFx0YmFzZUFwcGx5OiBiYXNlQXBwbHksXG5cdFx0Y3Z0QXJnczogY29udmVydEFyZ3MsXG5cdFx0Ym5kQXJnczogY29udmVydEJvdW5kQXJncyxcblx0XHRjdHhQcm06IGNvbnRleHRQYXJhbWV0ZXJcblx0fTtcblxuXHR0b3BWaWV3ID0gJHN1Yi50b3BWaWV3ID0gbmV3IFZpZXcoKTtcblxuXHQvL0JST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRpZiAoJCkge1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0Ly8galF1ZXJ5ICg9ICQpIGlzIGxvYWRlZFxuXG5cdFx0JC5mbi5yZW5kZXIgPSAkZm5SZW5kZXI7XG5cdFx0JGV4cGFuZG8gPSAkLmV4cGFuZG87XG5cdFx0aWYgKCQub2JzZXJ2YWJsZSkge1xuXHRcdFx0aWYgKHZlcnNpb25OdW1iZXIgIT09ICh2ZXJzaW9uTnVtYmVyID0gJC52aWV3cy5qc3ZpZXdzKSkge1xuXHRcdFx0XHQvLyBEaWZmZXJlbnQgdmVyc2lvbiBvZiBqc1JlbmRlciB3YXMgbG9hZGVkXG5cdFx0XHRcdHRocm93IFwiSnNPYnNlcnZhYmxlIHJlcXVpcmVzIEpzUmVuZGVyIFwiICsgdmVyc2lvbk51bWJlcjtcblx0XHRcdH1cblx0XHRcdCRleHRlbmQoJHN1YiwgJC52aWV3cy5zdWIpOyAvLyBqcXVlcnkub2JzZXJ2YWJsZS5qcyB3YXMgbG9hZGVkIGJlZm9yZSBqc3JlbmRlci5qc1xuXHRcdFx0JHZpZXdzLm1hcCA9ICQudmlld3MubWFwO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdC8vIGpRdWVyeSBpcyBub3QgbG9hZGVkLlxuXG5cdFx0JCA9IHt9O1xuXG5cdFx0aWYgKHNldEdsb2JhbHMpIHtcblx0XHRcdGdsb2JhbC5qc3JlbmRlciA9ICQ7IC8vIFdlIGFyZSBsb2FkaW5nIGpzcmVuZGVyLmpzIGZyb20gYSBzY3JpcHQgZWxlbWVudCwgbm90IEFNRCBvciBDb21tb25KUywgc28gc2V0IGdsb2JhbFxuXHRcdH1cblxuXHRcdC8vIEVycm9yIHdhcm5pbmcgaWYganNyZW5kZXIuanMgaXMgdXNlZCBhcyB0ZW1wbGF0ZSBlbmdpbmUgb24gTm9kZS5qcyAoZS5nLiBFeHByZXNzIG9yIEhhcGkuLi4pXG5cdFx0Ly8gVXNlIGpzcmVuZGVyLW5vZGUuanMgaW5zdGVhZC4uLlxuXHRcdCQucmVuZGVyRmlsZSA9ICQuX19leHByZXNzID0gJC5jb21waWxlID0gZnVuY3Rpb24oKSB7IHRocm93IFwiTm9kZS5qczogdXNlIG5wbSBqc3JlbmRlciwgb3IganNyZW5kZXItbm9kZS5qc1wiOyB9O1xuXG5cdFx0Ly9FTkQgQlJPV1NFUi1TUEVDSUZJQyBDT0RFXG5cdFx0JC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2IpIHtcblx0XHRcdHJldHVybiB0eXBlb2Ygb2IgPT09IFwiZnVuY3Rpb25cIjtcblx0XHR9O1xuXG5cdFx0JC5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcblx0XHRcdHJldHVybiAoe30udG9TdHJpbmcpLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXHRcdH07XG5cblx0XHQkc3ViLl9qcSA9IGZ1bmN0aW9uKGpxKSB7IC8vIHByaXZhdGUgbWV0aG9kIHRvIG1vdmUgZnJvbSBKc1JlbmRlciBBUElzIGZyb20ganNyZW5kZXIgbmFtZXNwYWNlIHRvIGpRdWVyeSBuYW1lc3BhY2Vcblx0XHRcdGlmIChqcSAhPT0gJCkge1xuXHRcdFx0XHQkZXh0ZW5kKGpxLCAkKTsgLy8gbWFwIG92ZXIgZnJvbSBqc3JlbmRlciBuYW1lc3BhY2UgdG8galF1ZXJ5IG5hbWVzcGFjZVxuXHRcdFx0XHQkID0ganE7XG5cdFx0XHRcdCQuZm4ucmVuZGVyID0gJGZuUmVuZGVyO1xuXHRcdFx0XHRkZWxldGUgJC5qc3JlbmRlcjtcblx0XHRcdFx0JGV4cGFuZG8gPSAkLmV4cGFuZG87XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdCQuanNyZW5kZXIgPSB2ZXJzaW9uTnVtYmVyO1xuXHR9XG5cdCRzdWJTZXR0aW5ncyA9ICRzdWIuc2V0dGluZ3M7XG5cdCRzdWJTZXR0aW5ncy5hbGxvd0NvZGUgPSBmYWxzZTtcblx0JGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG5cdCQucmVuZGVyID0gJHJlbmRlcjtcblx0JC52aWV3cyA9ICR2aWV3cztcblx0JC50ZW1wbGF0ZXMgPSAkdGVtcGxhdGVzID0gJHZpZXdzLnRlbXBsYXRlcztcblxuXHRmb3IgKHNldHRpbmcgaW4gJHN1YlNldHRpbmdzKSB7XG5cdFx0YWRkU2V0dGluZyhzZXR0aW5nKTtcblx0fVxuXG5cdC8qKlxuXHQqICQudmlld3Muc2V0dGluZ3MuZGVidWdNb2RlKHRydWUpXG5cdCogQHBhcmFtIHtib29sZWFufSAgZGVidWdNb2RlXG5cdCogQHJldHVybnMge1NldHRpbmdzfVxuXHQqXG5cdCogZGVidWdNb2RlID0gJC52aWV3cy5zZXR0aW5ncy5kZWJ1Z01vZGUoKVxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuXHQqL1xuXHQoJHZpZXdzU2V0dGluZ3MuZGVidWdNb2RlID0gZnVuY3Rpb24oZGVidWdNb2RlKSB7XG5cdFx0cmV0dXJuIGRlYnVnTW9kZSA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/ICRzdWJTZXR0aW5ncy5kZWJ1Z01vZGVcblx0XHRcdDogKFxuXHRcdFx0XHQkc3ViU2V0dGluZ3MuZGVidWdNb2RlID0gZGVidWdNb2RlLFxuXHRcdFx0XHQkc3ViU2V0dGluZ3Mub25FcnJvciA9IGRlYnVnTW9kZSArIFwiXCIgPT09IGRlYnVnTW9kZVxuXHRcdFx0XHRcdD8gZnVuY3Rpb24oKSB7IHJldHVybiBkZWJ1Z01vZGU7IH1cblx0XHRcdFx0XHQ6ICRpc0Z1bmN0aW9uKGRlYnVnTW9kZSlcblx0XHRcdFx0XHRcdD8gZGVidWdNb2RlXG5cdFx0XHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHRcdFx0JHZpZXdzU2V0dGluZ3MpO1xuXHR9KShmYWxzZSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG5cdCRzdWJTZXR0aW5nc0FkdmFuY2VkID0gJHN1YlNldHRpbmdzLmFkdmFuY2VkID0ge1xuXHRcdHVzZVZpZXdzOiBmYWxzZSxcblx0XHRfanN2OiBmYWxzZSAvLyBGb3IgZ2xvYmFsIGFjY2VzcyB0byBKc1ZpZXdzIHN0b3JlXG5cdH07XG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWdpc3RlciB0YWdzID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0JHRhZ3Moe1xuXHRcdFwiaWZcIjoge1xuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb25jZSBmb3Ige3tpZn19IGFuZCBvbmNlIGZvciBlYWNoIHt7ZWxzZX19LlxuXHRcdFx0XHQvLyBXZSB3aWxsIHVzZSB0aGUgdGFnLnJlbmRlcmluZyBvYmplY3QgZm9yIGNhcnJ5aW5nIHJlbmRlcmluZyBzdGF0ZSBhY3Jvc3MgdGhlIGNhbGxzLlxuXHRcdFx0XHQvLyBJZiBub3QgZG9uZSAoYSBwcmV2aW91cyBibG9jayBoYXMgbm90IGJlZW4gcmVuZGVyZWQpLCBsb29rIGF0IGV4cHJlc3Npb24gZm9yIHRoaXMgYmxvY2sgYW5kIHJlbmRlciB0aGUgYmxvY2sgaWYgZXhwcmVzc2lvbiBpcyB0cnV0aHlcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHJldHVybiBcIlwiXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0XHR0YWdDdHggPSBzZWxmLnRhZ0N0eCxcblx0XHRcdFx0XHRyZXQgPSAoc2VsZi5yZW5kZXJpbmcuZG9uZSB8fCAhdmFsICYmICh0YWdDdHguYXJncy5sZW5ndGggfHwgIXRhZ0N0eC5pbmRleCkpXG5cdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0XHRcdDogKHNlbGYucmVuZGVyaW5nLmRvbmUgPSB0cnVlLFxuXHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdGVkID0gdGFnQ3R4LmluZGV4LFxuXHRcdFx0XHRcdFx0XHR1bmRlZmluZWQpOyAvLyBUZXN0IGlzIHNhdGlzZmllZCwgc28gcmVuZGVyIGNvbnRlbnQgb24gY3VycmVudCBjb250ZXh0XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9LFxuXHRcdFx0Y29udGVudEN0eDogdHJ1ZSwgLy8gSW5oZXJpdCBwYXJlbnQgdmlldyBkYXRhIGNvbnRleHRcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdFwiZm9yXCI6IHtcblx0XHRcdHNvcnREYXRhTWFwOiBkYXRhTWFwKGdldFRhcmdldFNvcnRlZCksXG5cdFx0XHRpbml0OiBmdW5jdGlvbih2YWwsIGNsb25lZCkge1xuXHRcdFx0XHR0aGlzLnNldERhdGFNYXAodGhpcy50YWdDdHhzKTtcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmNlIGZvciB7e2Zvcn19IGFuZCBvbmNlIGZvciBlYWNoIHt7ZWxzZX19LlxuXHRcdFx0XHQvLyBXZSB3aWxsIHVzZSB0aGUgdGFnLnJlbmRlcmluZyBvYmplY3QgZm9yIGNhcnJ5aW5nIHJlbmRlcmluZyBzdGF0ZSBhY3Jvc3MgdGhlIGNhbGxzLlxuXHRcdFx0XHR2YXIgdmFsdWUsIGZpbHRlciwgc3J0RmllbGQsIGlzQXJyYXksIGksIHNvcnRlZCwgZW5kLCBzdGVwLFxuXHRcdFx0XHRcdHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdHRhZ0N0eCA9IHNlbGYudGFnQ3R4LFxuXHRcdFx0XHRcdHJhbmdlID0gdGFnQ3R4LmFyZ0RlZmF1bHQgPT09IGZhbHNlLFxuXHRcdFx0XHRcdHByb3BzID0gdGFnQ3R4LnByb3BzLFxuXHRcdFx0XHRcdGl0ZXJhdGUgPSAgcmFuZ2UgfHwgdGFnQ3R4LmFyZ3MubGVuZ3RoLCAvLyBOb3QgZmluYWwgZWxzZSBhbmQgbm90IGF1dG8tY3JlYXRlIHJhbmdlXG5cdFx0XHRcdFx0cmVzdWx0ID0gXCJcIixcblx0XHRcdFx0XHRkb25lID0gMDtcblxuXHRcdFx0XHRpZiAoIXNlbGYucmVuZGVyaW5nLmRvbmUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGl0ZXJhdGUgPyB2YWwgOiB0YWdDdHgudmlldy5kYXRhOyAvLyBGb3IgdGhlIGZpbmFsIGVsc2UsIGRlZmF1bHRzIHRvIGN1cnJlbnQgZGF0YSB3aXRob3V0IGl0ZXJhdGlvbi5cblxuXHRcdFx0XHRcdGlmIChyYW5nZSkge1xuXHRcdFx0XHRcdFx0cmFuZ2UgPSBwcm9wcy5yZXZlcnNlID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIjtcblx0XHRcdFx0XHRcdGVuZCA9ICtwcm9wcy5lbmQ7XG5cdFx0XHRcdFx0XHRzdGVwID0gK3Byb3BzLnN0ZXAgfHwgMTtcblx0XHRcdFx0XHRcdHZhbHVlID0gW107IC8vIGF1dG8tY3JlYXRlIGludGVnZXIgYXJyYXkgc2NlbmFyaW8gb2Yge3tmb3Igc3RhcnQ9eHh4IGVuZD15eXl9fVxuXHRcdFx0XHRcdFx0Zm9yIChpID0gK3Byb3BzLnN0YXJ0IHx8IDA7IChlbmQgLSBpKSAqIHN0ZXAgPiAwOyBpICs9IHN0ZXApIHtcblx0XHRcdFx0XHRcdFx0dmFsdWVbcmFuZ2VdKGkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0aXNBcnJheSA9ICRpc0FycmF5KHZhbHVlKTtcblx0XHRcdFx0XHRcdHJlc3VsdCArPSB0YWdDdHgucmVuZGVyKHZhbHVlLCAhaXRlcmF0ZSB8fCBwcm9wcy5ub0l0ZXJhdGlvbik7XG5cdFx0XHRcdFx0XHQvLyBJdGVyYXRlcyBpZiBkYXRhIGlzIGFuIGFycmF5LCBleGNlcHQgb24gZmluYWwgZWxzZSAtIG9yIGlmIG5vSXRlcmF0aW9uIHByb3BlcnR5XG5cdFx0XHRcdFx0XHQvLyBzZXQgdG8gdHJ1ZS4gKFVzZSB7e2luY2x1ZGV9fSB0byBjb21wb3NlIHRlbXBsYXRlcyB3aXRob3V0IGFycmF5IGl0ZXJhdGlvbilcblx0XHRcdFx0XHRcdGRvbmUgKz0gaXNBcnJheSA/IHZhbHVlLmxlbmd0aCA6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLnJlbmRlcmluZy5kb25lID0gZG9uZSkge1xuXHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RlZCA9IHRhZ0N0eC5pbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgbm90aGluZyB3YXMgcmVuZGVyZWQgd2Ugd2lsbCBsb29rIGF0IHRoZSBuZXh0IHt7ZWxzZX19LiBPdGhlcndpc2UsIHdlIGFyZSBkb25lLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0c2V0RGF0YU1hcDogZnVuY3Rpb24odGFnQ3R4cykge1xuXHRcdFx0XHR2YXIgdGFnQ3R4LCBwcm9wcywgcGFyYW1zUHJvcHMsXG5cdFx0XHRcdFx0c2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0bCA9IHRhZ0N0eHMubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAobC0tKSB7XG5cdFx0XHRcdFx0dGFnQ3R4ID0gdGFnQ3R4c1tsXTtcblx0XHRcdFx0XHRwcm9wcyA9IHRhZ0N0eC5wcm9wcztcblx0XHRcdFx0XHRwYXJhbXNQcm9wcyA9IHRhZ0N0eC5wYXJhbXMucHJvcHM7XG5cdFx0XHRcdFx0dGFnQ3R4LmFyZ0RlZmF1bHQgPSBwcm9wcy5lbmQgPT09IHVuZGVmaW5lZCB8fCB0YWdDdHguYXJncy5sZW5ndGggPiAwOyAvLyBEZWZhdWx0IHRvICNkYXRhIGV4Y2VwdCBmb3IgYXV0by1jcmVhdGUgcmFuZ2Ugc2NlbmFyaW8ge3tmb3Igc3RhcnQ9eHh4IGVuZD15eXkgc3RlcD16enp9fVxuXHRcdFx0XHRcdHByb3BzLmRhdGFNYXAgPSAodGFnQ3R4LmFyZ0RlZmF1bHQgIT09IGZhbHNlICYmICRpc0FycmF5KHRhZ0N0eC5hcmdzWzBdKSAmJlxuXHRcdFx0XHRcdFx0KHBhcmFtc1Byb3BzLnNvcnQgfHwgcGFyYW1zUHJvcHMuc3RhcnQgfHwgcGFyYW1zUHJvcHMuZW5kIHx8IHBhcmFtc1Byb3BzLnN0ZXAgfHwgcGFyYW1zUHJvcHMuZmlsdGVyIHx8IHBhcmFtc1Byb3BzLnJldmVyc2Vcblx0XHRcdFx0XHRcdHx8IHByb3BzLnNvcnQgfHwgcHJvcHMuc3RhcnQgfHwgcHJvcHMuZW5kIHx8IHByb3BzLnN0ZXAgfHwgcHJvcHMuZmlsdGVyIHx8IHByb3BzLnJldmVyc2UpKVxuXHRcdFx0XHRcdFx0JiYgc2VsZi5zb3J0RGF0YU1hcDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdHByb3BzOiB7XG5cdFx0XHRiYXNlVGFnOiBcImZvclwiLFxuXHRcdFx0ZGF0YU1hcDogZGF0YU1hcChnZXRUYXJnZXRQcm9wcyksXG5cdFx0XHRpbml0OiBub29wLCAvLyBEb24ndCBleGVjdXRlIHRoZSBiYXNlIGluaXQoKSBvZiB0aGUgXCJmb3JcIiB0YWdcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdFwiKlwiOiB7XG5cdFx0XHQvLyB7eyogY29kZS4uLiB9fSAtIElnbm9yZWQgaWYgdGVtcGxhdGUuYWxsb3dDb2RlIGFuZCAkLnZpZXdzLnNldHRpbmdzLmFsbG93Q29kZSBhcmUgZmFsc2UuIE90aGVyd2lzZSBpbmNsdWRlIGNvZGUgaW4gY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdHJlbmRlcjogcmV0VmFsLFxuXHRcdFx0ZmxvdzogdHJ1ZVxuXHRcdH0sXG5cdFx0XCI6KlwiOiB7XG5cdFx0XHQvLyB7ezoqIHJldHVybmVkRXhwcmVzc2lvbiB9fSAtIElnbm9yZWQgaWYgdGVtcGxhdGUuYWxsb3dDb2RlIGFuZCAkLnZpZXdzLnNldHRpbmdzLmFsbG93Q29kZSBhcmUgZmFsc2UuIE90aGVyd2lzZSBpbmNsdWRlIGNvZGUgaW4gY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdHJlbmRlcjogcmV0VmFsLFxuXHRcdFx0ZmxvdzogdHJ1ZVxuXHRcdH0sXG5cdFx0ZGJnOiAkaGVscGVycy5kYmcgPSAkY29udmVydGVycy5kYmcgPSBkYmdCcmVhayAvLyBSZWdpc3RlciB7e2RiZy99fSwge3tkYmc6Li4ufX0gYW5kIH5kYmcoKSB0byB0aHJvdyBhbmQgY2F0Y2gsIGFzIGJyZWFrcG9pbnRzIGZvciBkZWJ1Z2dpbmcuXG5cdH0pO1xuXG5cdCRjb252ZXJ0ZXJzKHtcblx0XHRodG1sOiBodG1sRW5jb2RlLFxuXHRcdGF0dHI6IGh0bWxFbmNvZGUsIC8vIEluY2x1ZGVzID4gZW5jb2Rpbmcgc2luY2UgckNvbnZlcnRNYXJrZXJzIGluIEpzVmlld3MgZG9lcyBub3Qgc2tpcCA+IGNoYXJhY3RlcnMgaW4gYXR0cmlidXRlIHN0cmluZ3Ncblx0XHRlbmNvZGU6IGRhdGFFbmNvZGUsXG5cdFx0dW5lbmNvZGU6IGRhdGFVbmVuY29kZSwgLy8gSW5jbHVkZXMgPiBlbmNvZGluZyBzaW5jZSByQ29udmVydE1hcmtlcnMgaW4gSnNWaWV3cyBkb2VzIG5vdCBza2lwID4gY2hhcmFjdGVycyBpbiBhdHRyaWJ1dGUgc3RyaW5nc1xuXHRcdHVybDogZnVuY3Rpb24odGV4dCkge1xuXHRcdFx0Ly8gVVJMIGVuY29kaW5nIGhlbHBlci5cblx0XHRcdHJldHVybiB0ZXh0ICE9IHVuZGVmaW5lZCA/IGVuY29kZVVSSShcIlwiICsgdGV4dCkgOiB0ZXh0ID09PSBudWxsID8gdGV4dCA6IFwiXCI7IC8vIG51bGwgcmV0dXJucyBudWxsLCBlLmcuIHRvIHJlbW92ZSBhdHRyaWJ1dGUuIHVuZGVmaW5lZCByZXR1cm5zIFwiXCJcblx0XHR9XG5cdH0pO1xufVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBEZWZpbmUgZGVmYXVsdCBkZWxpbWl0ZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09XG4kc3ViU2V0dGluZ3MgPSAkc3ViLnNldHRpbmdzO1xuJGlzQXJyYXkgPSAoJHx8anNyKS5pc0FycmF5O1xuJHZpZXdzU2V0dGluZ3MuZGVsaW1pdGVycyhcInt7XCIsIFwifX1cIiwgXCJeXCIpO1xuXG5pZiAoanNyVG9KcSkgeyAvLyBNb3ZpbmcgZnJvbSBqc3JlbmRlciBuYW1lc3BhY2UgdG8galF1ZXJ5IG5hbWVwYWNlIC0gY29weSBvdmVyIHRoZSBzdG9yZWQgaXRlbXMgKHRlbXBsYXRlcywgY29udmVydGVycywgaGVscGVycy4uLilcblx0anNyLnZpZXdzLnN1Yi5fanEoJCk7XG59XG5yZXR1cm4gJCB8fCBqc3I7XG59LCB3aW5kb3cpKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IGpzcmVuZGVyID0gcmVxdWlyZSgnanNyZW5kZXInKVxuXG4gIGNvbnN0IHNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1tZXNzYWdlc19fY29udGFpbmVyIFtkYXRhLXBlcmZlY3Qtc2Nyb2xsYmFyXScpXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gMTZcbiAgfVxuXG4gIDtbJ0RPTUNvbnRlbnRMb2FkZWQnLCAnbG9hZCddLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLCBzY3JvbGwpXG4gIH0pXG5cbiAgY29uc3QgYWRkTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZXMnKVxuICAgIGNvbnN0IHRlbXBsYXRlID0ganNyZW5kZXIudGVtcGxhdGVzKCcjdGVtcGxhdGUtbWVzc2FnZScpXG4gICAgY29uc3QgbWVzc2FnZU5vZGVUZXh0ID0gdGVtcGxhdGUucmVuZGVyKHtcbiAgICAgIG5hbWU6ICdMYXphIEJvZ2RhbicsXG4gICAgICBhdmF0YXI6ICdhc3NldHMvaW1hZ2VzL3Blb3BsZS8xMTAvZ3V5LTYuanBnJyxcbiAgICAgIGRhdGU6ICdqdXN0IG5vdycsXG4gICAgICBtZXNzYWdlXG4gICAgfSlcblxuICAgIGxldCBtZXNzYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG1lc3NhZ2VOb2RlVGV4dClcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChtZXNzYWdlTm9kZSlcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlLXJlcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgICBhZGRNZXNzYWdlKGZpZWxkLnZhbHVlKVxuICAgIGZpZWxkLnZhbHVlID0gJydcblxuICAgIHNjcm9sbCgpXG4gIH0pXG5cbn0pKCkiLCJpbXBvcnQgJ3VpLWh1bWEvanMvbWVzc2FnZXMnIl0sInNvdXJjZVJvb3QiOiIifQ==