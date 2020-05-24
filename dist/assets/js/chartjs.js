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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
=======
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

>>>>>>> master
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

<<<<<<< HEAD
/***/ "./node_modules/ui-huma/js/vendor/chartjs.js":
/*!***************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/chartjs.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-chartjs */ "./node_modules/ui-huma/node_modules/fm-plugin-chartjs/js/chartjs.js");


/***/ }),

/***/ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/ui-huma/node_modules/fm-plugin-chartjs/js/chartjs.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ui-huma/node_modules/fm-plugin-chartjs/js/chartjs.js ***!
  \***************************************************************************/
=======
/***/ "./node_modules/fm-plugin-chartjs/js/chartjs.js":
/*!******************************************************!*\
  !*** ./node_modules/fm-plugin-chartjs/js/chartjs.js ***!
  \******************************************************/
>>>>>>> master
/*! exports provided: hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/ui-huma/node_modules/@babel/runtime/helpers/typeof.js");
=======
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
>>>>>>> master
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);




var extend = function extend(object, value) {
  for (var key in value) {
    "object" != _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(value[key]) ? object[key] = value[key] : extend(object[key], value[key]);
  }
};

var add = function add(element) {
  var data = element.data("add");
  var chart = $(element.data("target")).data("chart");

  if (element.is(":checked")) {
    var addRecursive = function addRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].push(a);
        }) : addRecursive(chart[o], data[o]);
      }
    };

    addRecursive(chart, data);
  } else {
    var removeRecursive = function removeRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].pop();
        }) : removeRecursive(chart[o], data[o]);
      }
    };

    removeRecursive(chart, data);
  }

  chart.update();
};

var update = function update(element) {
  var data = element.data("update");
  var chart = $(element.data("target")).data("chart");
  extend(chart, data);

  if (void 0 !== element.data("prefix") || void 0 !== element.data("suffix")) {
    var prefix = element.data("prefix") ? element.data("prefix") : "";
    var suffix = element.data("suffix") ? element.data("suffix") : "";

    if (chart.options.scales !== undefined) {
      chart.options.scales.yAxes[0].ticks.callback = function (a) {
        if (!(a % 10)) return prefix + a + suffix;
      };
    }

    chart.options.tooltips.callbacks.label = function (a, e) {
      var t = e.datasets[a.datasetIndex].label || "",
          o = a.yLabel || e.datasets[0].data[a.index],
          r = "";
      return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + prefix + o + suffix + "</span>";
    };
  }

  chart.update();
};

var globalSettings = {
  responsive: true,
  maintainAspectRatio: false,
  defaultColor: settings.charts.defaultColor,
  defaultFontColor: settings.charts.defaultFontColor,
  defaultFontFamily: settings.charts.defaultFontFamily,
  defaultFontSize: settings.charts.defaultFontSize,
  layout: {
    padding: 0
  },
  legend: {
    display: false,
    position: "bottom",
    labels: {
      usePointStyle: true,
      padding: 16
    }
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: settings.colors.primary[500]
    },
    line: {
      tension: .4,
      borderWidth: 3,
      borderColor: settings.colors.primary[500],
      backgroundColor: settings.colors.transparent,
      borderCapStyle: "rounded"
    },
    rectangle: {
      backgroundColor: settings.colors.primary[500]
    },
    arc: {
      backgroundColor: settings.colors.primary[500],
      borderColor: settings.colors.white,
      borderWidth: 4
    }
  },
  legendCallback: function legendCallback(a) {
    var o = a.data,
        r = "";
    var td = a.options.elements.line.borderColor;
    return o.datasets.forEach(function (a, e) {
      var l = o.datasets[e].label;
      var t = o.datasets[e].borderColor || td;
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += l, r += "</span>";
    }), r;
  },
  tooltips: {
    enabled: !1,
    mode: "index",
    intersect: !1,
    custom: function custom(r) {
      var a = $("#chart-tooltip");

      if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
        if (r.body) {
          var e = r.title || [],
              l = r.body.map(function (a) {
            return a.lines;
          }),
              n = "";
          n += '<div class="arrow"></div>', e.forEach(function (a) {
            n += '<h3 class="popover-header text-center">' + a + "</h3>";
          }), l.forEach(function (a, e) {
            var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                o = 1 < l.length ? "justify-content-left" : "justify-content-center";
            n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>";
          }), a.html(n);
        }

        var t = $(this._chart.canvas),
            o = (t.outerWidth(), t.outerHeight(), t.offset().top),
            s = t.offset().left,
            i = a.outerWidth(),
            c = a.outerHeight(),
            d = o + r.caretY - c - 16,
            u = s + r.caretX - i / 2;
        a.css({
          top: d + "px",
          left: u + "px",
          display: "block"
        });
      } else a.css("display", "none");
    },
    callbacks: {
      title: function title(a, e) {
        return e.labels[a[0].index];
      },
      label: function label(a, e) {
        var t = e.datasets[a.datasetIndex].label || "",
            o = a.yLabel,
            r = "";
        return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>";
      }
    }
  }
};
var doughnutSettings = {
  cutoutPercentage: 83,
  tooltips: {
    callbacks: {
      title: function title(a, e) {
        return e.labels[a[0].index];
      },
      label: function label(a, e) {
        var t = "";
        return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "</span>";
      }
    }
  },
  legendCallback: function legendCallback(a) {
    var o = a.data,
        r = "";
    return o.labels.forEach(function (a, e) {
      var t = o.datasets[0].backgroundColor[e];
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += a, r += "</span>";
    }), r;
  }
};

var dot = function dot(str, obj) {
  return str.split('.').reduce(function (o, i) {
    return o[i];
  }, obj);
};

var applyColors = function applyColors(el) {
  var chart = $(el).data('chart');
  var darkMode = el.hasAttribute('data-chart-dark-mode');

  if (chart.options.scales.yAxes[0] !== undefined) {
    chart.options.scales.yAxes[0].gridLines = {
      color: !!darkMode ? settings.colors.darkMode.border : settings.charts.gridLinesColor,
      zeroLineColor: !!darkMode ? settings.colors.darkMode.border : settings.charts.zeroLineColor
    };
    chart.options.scales.yAxes[0].angleLines = {
      color: !!darkMode ? settings.colors.darkMode.border : settings.charts.angleLinesColor
    };
  }

  if (chart.config.type === 'doughnut') {
    chart.data.datasets[0].borderColor = !!darkMode ? settings.colors.darkMode.bodyBg : settings.colors.white;
    chart.data.datasets[0].hoverBorderColor = !!darkMode ? settings.colors.darkMode.bodyBg : settings.colors.white;
  }

  var lineBorderColor = (el.getAttribute('data-chart-line-border-color') || '').split(',').filter(function (v) {
    return !!v;
  });
  var lineBorderOpacity = new String(el.getAttribute('data-chart-line-border-opacity') || '1').split(',').filter(function (v) {
    return !!v;
  });
  var lineBackgroundColor = (el.getAttribute('data-chart-line-background-color') || '').split(',').filter(function (v) {
    return !!v;
  });
  var lineBackgroundOpacity = new String(el.getAttribute('data-chart-line-background-opacity') || '1').split(',').filter(function (v) {
    return !!v;
  });
  lineBorderColor.forEach(function (color, index) {
    var opacity = lineBorderOpacity[index];

    if (color.indexOf(';') !== -1) {
      color = color.split(';');
      opacity = lineBorderOpacity[0].split(';');
      chart.data.datasets[0].borderColor = [];
      chart.data.datasets[0].pointBackgroundColor = [];
      color.forEach(function (color, index) {
        if (color.indexOf('.') !== -1) {
          color = dot(color, settings.colors);
        } else {
          color = hexToRGB(settings.colors.plain[color], opacity[index]);
        }

        chart.data.datasets[0].borderColor.push(color);
        chart.data.datasets[0].pointBackgroundColor.push(settings.colors.white);
      });
    } else {
      if (color.indexOf('.') !== -1) {
        color = dot(color, settings.colors);
      } else {
        color = hexToRGB(settings.colors.plain[color], opacity);
      }

      chart.data.datasets[index].borderColor = color;
      chart.data.datasets[index].pointBackgroundColor = settings.colors.white;
    }
  });
  var ctx = el.getContext('2d');
  var canvasHeight = el.scrollHeight;
  var gradient = null;
  var gradientEndOpacity = 0.001;

  if (chart.config.type.toLowerCase().indexOf('bar') !== -1) {
    gradientEndOpacity = 0.2;
  }

  lineBackgroundColor.forEach(function (color, index) {
    var opacity = lineBackgroundOpacity[index];
    gradient = gradient || color.indexOf('gradient:') !== -1;
    color = color.replace(/gradient\:/ig, '');

    if (color.indexOf(';') !== -1) {
      color = color.split(';');
      opacity = lineBackgroundOpacity[0].split(';');
      chart.data.datasets[0].backgroundColor = [];
      color.forEach(function (color, index) {
        var hex = color;

        if (color.indexOf('.') !== -1) {
          color = dot(color, settings.colors);
        } else {
          color = hexToRGB(settings.colors.plain[color], opacity[index]);
        }

        if (gradient) {
          var gradientCanvas = ctx.createLinearGradient(0, 0, 0, canvasHeight);
          gradientCanvas.addColorStop(0, color);
          gradientCanvas.addColorStop(1, hexToRGB(hex, gradientEndOpacity));
          color = gradientCanvas;
        }

        chart.data.datasets[0].backgroundColor.push(color);
      });
    } else {
      var hex;

      if (color.indexOf('.') !== -1) {
        color = dot(color, settings.colors);
        hex = color;
      } else {
        hex = settings.colors.plain[color];
        color = hexToRGB(hex, opacity);
      }

      if (gradient) {
        var gradientCanvas = ctx.createLinearGradient(0, 0, 0, canvasHeight);
        gradientCanvas.addColorStop(0, color);
        gradientCanvas.addColorStop(1, hexToRGB(hex, gradientEndOpacity));
        color = gradientCanvas;
      }

      chart.data.datasets[index].backgroundColor = color;
    }
  });
  chart.update();

  if ($(el).data('chart-legend')) {
    document.querySelector($(el).data('chart-legend')).innerHTML = chart.generateLegend();
  }
};

var create = function create(id) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var el = $(id);
  var prefix = el.data('chart-prefix') || '';
  var suffix = el.data('chart-suffix') || '';
  var points = el.data('chart-points');
  var hideAxes = el.data('chart-hide-axes');
  var disableTooltips = el.data('chart-disable-tooltips');

  if (hideAxes) {
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }, options);
  }

  if (type === 'area') {
    type = 'line';
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start'
        }
      }
    }, options);
  }

  if (points) {
    options = Chart.helpers.merge({
      elements: {
        point: {
          pointStyle: 'circle',
          radius: 4,
          hoverRadius: 4,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[500],
          borderWidth: 2
        }
      }
    }, options);
  }

  if (type === 'radar') {
    options = Chart.helpers.merge({
      scale: {
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 4
        },
        pointLabels: {
          fontSize: settings.charts.defaultFontSize
        }
      }
    }, options);
  }

  if (type === 'roundedBar') {
    options = Chart.helpers.merge({
      barRoundness: 1.2
    }, options);
  }

  if (type === 'doughnut' || type === 'radar') {
    options = Chart.helpers.merge({
      scales: {
        yAxes: {
          gridLines: {
            zeroLineWidth: 0
          }
        }
      }
    }, options);
  }

  if (prefix.length || suffix.length) {
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "".concat(prefix).concat(a).concat(suffix);
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";

            if (type === 'doughnut') {
              o = e.datasets[0].data[a.index];
            }

            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += "<span class=\"popover-body-value\">".concat(prefix).concat(o).concat(suffix, "</span>");
          }
        }
      }
    }, options);
  }

  if (disableTooltips) {
    options = Chart.helpers.merge({
      tooltips: {
        enabled: false,
        custom: function custom() {}
      }
    }, options);
  }

  var chart = new Chart(el, {
    type: type,
    options: options,
    data: data
  });
  el.data('chart', chart);

  if (el.data('chart-legend')) {
    document.querySelector(el.data('chart-legend')).innerHTML = chart.generateLegend();
  }

  applyColors(document.querySelector(id));
};

var init = function init() {
  extend(Chart, {
    defaults: {
      global: globalSettings,
      doughnut: doughnutSettings
    }
  });
  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: settings.charts.gridLinesColor,
      drawBorder: false,
      drawTicks: false,
      lineWidth: settings.charts.lineWidth,
      zeroLineWidth: settings.charts.zeroLineWidth,
      zeroLineColor: settings.charts.zeroLineColor,
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    angleLines: {
      color: settings.charts.angleLinesColor
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function callback(a) {
        if (!(a % 10)) return a;
      }
    }
  });
  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  $('[data-toggle="chart"]').on({
    change: function change() {
      var el = $(this);

      if (el.is("[data-add]")) {
        add(el);
      }
    },
    click: function click() {
      var el = $(this);

      if (el.is("[data-update]")) {
        update(el);
      }
    }
  });
};

var hexToRGB = function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
var Charts = {
  settings: settings,
  init: init,
  add: add,
  update: update,
  create: create,
  applyColors: applyColors,
  hexToRGB: hexToRGB
};

if (window !== undefined) {
  window.Charts = Charts;
  Charts.init();
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      return applyColors(mutation.target);
    });
  });
  var nodes = document.querySelectorAll('.chart-canvas');
  nodes.forEach(function (node) {
    observer.observe(node, {
      attributes: true,
      attributeOldValue: false,
      attributeFilter: ['data-chart-line-border-color', 'data-chart-line-border-opacity', 'data-chart-line-background-color', 'data-chart-line-background-opacity', 'data-chart-dark-mode']
    });
  });
}

/***/ }),

<<<<<<< HEAD
=======
/***/ "./node_modules/ui-huma/js/vendor/chartjs.js":
/*!***************************************************!*\
  !*** ./node_modules/ui-huma/js/vendor/chartjs.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-chartjs */ "./node_modules/fm-plugin-chartjs/js/chartjs.js");


/***/ }),

>>>>>>> master
/***/ "./src/js/vendor/chartjs.js":
/*!**********************************!*\
  !*** ./src/js/vendor/chartjs.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_vendor_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/vendor/chartjs */ "./node_modules/ui-huma/js/vendor/chartjs.js");


/***/ }),

/***/ 34:
/*!****************************************!*\
  !*** multi ./src/js/vendor/chartjs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/skankhunt/repositorys/digitalcrafts-LMS/src/js/vendor/chartjs.js */"./src/js/vendor/chartjs.js");


/***/ })

/******/ });
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL2pzL3ZlbmRvci9jaGFydGpzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1odW1hL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9ub2RlX21vZHVsZXMvZm0tcGx1Z2luLWNoYXJ0anMvanMvY2hhcnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmVuZG9yL2NoYXJ0anMuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwib2JqZWN0IiwidmFsdWUiLCJrZXkiLCJhZGQiLCJlbGVtZW50IiwiZGF0YSIsImNoYXJ0IiwiJCIsImlzIiwiYWRkUmVjdXJzaXZlIiwibyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJhIiwicHVzaCIsInJlbW92ZVJlY3Vyc2l2ZSIsInBvcCIsInVwZGF0ZSIsInByZWZpeCIsInN1ZmZpeCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ1bmRlZmluZWQiLCJ5QXhlcyIsInRpY2tzIiwiY2FsbGJhY2siLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwiZSIsInQiLCJkYXRhc2V0cyIsImRhdGFzZXRJbmRleCIsInlMYWJlbCIsImluZGV4IiwiciIsImxlbmd0aCIsImdsb2JhbFNldHRpbmdzIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJkZWZhdWx0Q29sb3IiLCJzZXR0aW5ncyIsImNoYXJ0cyIsImRlZmF1bHRGb250Q29sb3IiLCJkZWZhdWx0Rm9udEZhbWlseSIsImRlZmF1bHRGb250U2l6ZSIsImxheW91dCIsInBhZGRpbmciLCJsZWdlbmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJsYWJlbHMiLCJ1c2VQb2ludFN0eWxlIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInByaW1hcnkiLCJsaW5lIiwidGVuc2lvbiIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJ0cmFuc3BhcmVudCIsImJvcmRlckNhcFN0eWxlIiwicmVjdGFuZ2xlIiwiYXJjIiwid2hpdGUiLCJsZWdlbmRDYWxsYmFjayIsInRkIiwibCIsImVuYWJsZWQiLCJtb2RlIiwiaW50ZXJzZWN0IiwiY3VzdG9tIiwiYXBwZW5kIiwib3BhY2l0eSIsImJvZHkiLCJ0aXRsZSIsIm1hcCIsImxpbmVzIiwibiIsImxhYmVsQ29sb3JzIiwiaHRtbCIsIl9jaGFydCIsImNhbnZhcyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIm9mZnNldCIsInRvcCIsInMiLCJsZWZ0IiwiaSIsImMiLCJkIiwiY2FyZXRZIiwidSIsImNhcmV0WCIsImNzcyIsImRvdWdobnV0U2V0dGluZ3MiLCJjdXRvdXRQZXJjZW50YWdlIiwiZG90Iiwic3RyIiwib2JqIiwic3BsaXQiLCJyZWR1Y2UiLCJhcHBseUNvbG9ycyIsImVsIiwiZGFya01vZGUiLCJoYXNBdHRyaWJ1dGUiLCJncmlkTGluZXMiLCJjb2xvciIsImJvcmRlciIsImdyaWRMaW5lc0NvbG9yIiwiemVyb0xpbmVDb2xvciIsImFuZ2xlTGluZXMiLCJhbmdsZUxpbmVzQ29sb3IiLCJjb25maWciLCJ0eXBlIiwiYm9keUJnIiwiaG92ZXJCb3JkZXJDb2xvciIsImxpbmVCb3JkZXJDb2xvciIsImdldEF0dHJpYnV0ZSIsImZpbHRlciIsInYiLCJsaW5lQm9yZGVyT3BhY2l0eSIsIlN0cmluZyIsImxpbmVCYWNrZ3JvdW5kQ29sb3IiLCJsaW5lQmFja2dyb3VuZE9wYWNpdHkiLCJpbmRleE9mIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJoZXhUb1JHQiIsInBsYWluIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc0hlaWdodCIsInNjcm9sbEhlaWdodCIsImdyYWRpZW50IiwiZ3JhZGllbnRFbmRPcGFjaXR5IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaGV4IiwiZ3JhZGllbnRDYW52YXMiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImdlbmVyYXRlTGVnZW5kIiwiY3JlYXRlIiwiaWQiLCJwb2ludHMiLCJoaWRlQXhlcyIsImRpc2FibGVUb29sdGlwcyIsIkNoYXJ0IiwiaGVscGVycyIsIm1lcmdlIiwieEF4ZXMiLCJmaWxsIiwicG9pbnRTdHlsZSIsImhvdmVyUmFkaXVzIiwic2NhbGUiLCJiZWdpbkF0WmVybyIsIm1heFRpY2tzTGltaXQiLCJwb2ludExhYmVscyIsImZvbnRTaXplIiwiYmFyUm91bmRuZXNzIiwiemVyb0xpbmVXaWR0aCIsImluaXQiLCJkZWZhdWx0cyIsImdsb2JhbCIsImRvdWdobnV0Iiwic2NhbGVTZXJ2aWNlIiwidXBkYXRlU2NhbGVEZWZhdWx0cyIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiZHJhd0JvcmRlciIsImRyYXdUaWNrcyIsImxpbmVXaWR0aCIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsImRyYXdPbkNoYXJ0QXJlYSIsIm1heEJhclRoaWNrbmVzcyIsIm9uIiwiY2hhbmdlIiwiY2xpY2siLCJhbHBoYSIsInBhcnNlSW50Iiwic2xpY2UiLCJnIiwiYiIsIkNoYXJ0cyIsIndpbmRvdyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidGFyZ2V0Iiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xG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MWhCRDtBQUFBIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9jaGFydGpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGJ1aWx0aW5FeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuXG4gLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuICByZXR1cm4gYnVpbHRpbkV4ZWMuY2FsbChSLCBTKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLyxcbiAgICAgIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxW0xBU1RfSU5ERVhdICE9PSAwIHx8IHJlMltMQVNUX0lOREVYXSAhPT0gMDtcbn0pKCk7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHJlLnNvdXJjZSArICckKD8hXFxcXHMpJywgcmVnZXhwRmxhZ3MuY2FsbChyZSkpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZVtMQVNUX0lOREVYXTtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmVbTEFTVF9JTkRFWF0gPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJG1pbiA9IE1hdGgubWluO1xudmFyICRwdXNoID0gW10ucHVzaDtcbnZhciAkU1BMSVQgPSAnc3BsaXQnO1xudmFyIExFTkdUSCA9ICdsZW5ndGgnO1xudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbnZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiAkc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGludGVybmFsU3BsaXQgPSAkc3BsaXQ7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gJHNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gJG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59KTtcbiIsImltcG9ydCAnZm0tcGx1Z2luLWNoYXJ0anMnIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImNvbnN0IGV4dGVuZCA9IChvYmplY3QsIHZhbHVlKSA9PiB7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgXCJvYmplY3RcIiAhPSB0eXBlb2YgdmFsdWVba2V5XSA/IG9iamVjdFtrZXldID0gdmFsdWVba2V5XSA6IGV4dGVuZChvYmplY3Rba2V5XSwgdmFsdWVba2V5XSlcbn1cblxuY29uc3QgYWRkID0gKGVsZW1lbnQpID0+IHtcbiAgdmFyIGRhdGEgPSBlbGVtZW50LmRhdGEoXCJhZGRcIilcbiAgdmFyIGNoYXJ0ID0gJChlbGVtZW50LmRhdGEoXCJ0YXJnZXRcIikpLmRhdGEoXCJjaGFydFwiKVxuXG4gIGlmIChlbGVtZW50LmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICBmdW5jdGlvbiBhZGRSZWN1cnNpdmUoY2hhcnQsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIG8gaW4gZGF0YSkgQXJyYXkuaXNBcnJheShkYXRhW29dKSA/IGRhdGFbb10uZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgIGNoYXJ0W29dLnB1c2goYSlcbiAgICAgIH0pIDogYWRkUmVjdXJzaXZlKGNoYXJ0W29dLCBkYXRhW29dKVxuICAgIH1cbiAgICBhZGRSZWN1cnNpdmUoY2hhcnQsIGRhdGEpXG4gIH0gXG4gIGVsc2Uge1xuICAgIGZ1bmN0aW9uIHJlbW92ZVJlY3Vyc2l2ZShjaGFydCwgZGF0YSkge1xuICAgICAgZm9yICh2YXIgbyBpbiBkYXRhKSBBcnJheS5pc0FycmF5KGRhdGFbb10pID8gZGF0YVtvXS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgY2hhcnRbb10ucG9wKClcbiAgICAgIH0pIDogcmVtb3ZlUmVjdXJzaXZlKGNoYXJ0W29dLCBkYXRhW29dKVxuICAgIH1cbiAgICByZW1vdmVSZWN1cnNpdmUoY2hhcnQsIGRhdGEpXG4gIH1cblxuICBjaGFydC51cGRhdGUoKVxufVxuXG5jb25zdCB1cGRhdGUgPSAoZWxlbWVudCkgPT4ge1xuICB2YXIgZGF0YSA9IGVsZW1lbnQuZGF0YShcInVwZGF0ZVwiKVxuICB2YXIgY2hhcnQgPSAkKGVsZW1lbnQuZGF0YShcInRhcmdldFwiKSkuZGF0YShcImNoYXJ0XCIpXG4gIFxuICBleHRlbmQoY2hhcnQsIGRhdGEpXG5cbiAgaWYgKHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKFwicHJlZml4XCIpIHx8IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpKSB7XG4gICAgbGV0IHByZWZpeCA9IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSA/IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSA6IFwiXCJcbiAgICBsZXQgc3VmZml4ID0gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpID8gZWxlbWVudC5kYXRhKFwic3VmZml4XCIpIDogXCJcIlxuXG4gICAgaWYgKGNoYXJ0Lm9wdGlvbnMuc2NhbGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLmNhbGxiYWNrID0gZnVuY3Rpb24oYSkge1xuICAgICAgICBpZiAoIShhICUgMTApKSByZXR1cm4gcHJlZml4ICsgYSArIHN1ZmZpeFxuICAgICAgfVxuICAgIH1cblxuICAgIGNoYXJ0Lm9wdGlvbnMudG9vbHRpcHMuY2FsbGJhY2tzLmxhYmVsID0gZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgIG8gPSBhLnlMYWJlbCB8fCBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0sXG4gICAgICAgICAgciA9IFwiXCI7XG4gICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIHByZWZpeCArIG8gKyBzdWZmaXggKyBcIjwvc3Bhbj5cIlxuICAgIH1cbiAgfVxuXG4gIGNoYXJ0LnVwZGF0ZSgpXG59XG5cbmNvbnN0IGdsb2JhbFNldHRpbmdzID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgZGVmYXVsdENvbG9yOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdENvbG9yLFxuICBkZWZhdWx0Rm9udENvbG9yOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRDb2xvcixcbiAgZGVmYXVsdEZvbnRGYW1pbHk6IHNldHRpbmdzLmNoYXJ0cy5kZWZhdWx0Rm9udEZhbWlseSxcbiAgZGVmYXVsdEZvbnRTaXplOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRTaXplLFxuICBsYXlvdXQ6IHtcbiAgICBwYWRkaW5nOiAwXG4gIH0sXG4gIGxlZ2VuZDoge1xuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgIGxhYmVsczoge1xuICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcbiAgICAgIHBhZGRpbmc6IDE2XG4gICAgfVxuICB9LFxuICBlbGVtZW50czoge1xuICAgIHBvaW50OiB7XG4gICAgICByYWRpdXM6IDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF1cbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgIHRlbnNpb246IC40LFxuICAgICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnRyYW5zcGFyZW50LFxuICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwicm91bmRlZFwiXG4gICAgfSxcbiAgICByZWN0YW5nbGU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXVxuICAgIH0sXG4gICAgYXJjOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlLFxuICAgICAgYm9yZGVyV2lkdGg6IDRcbiAgICB9XG4gIH0sXG4gIGxlZ2VuZENhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgdmFyIG8gPSBhLmRhdGEsXG4gICAgICAgIHIgPSBcIlwiO1xuICAgIHZhciB0ZCA9IGEub3B0aW9ucy5lbGVtZW50cy5saW5lLmJvcmRlckNvbG9yO1xuICAgIHJldHVybiBvLmRhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIGwgPSBvLmRhdGFzZXRzW2VdLmxhYmVsO1xuICAgICAgdmFyIHQgPSBvLmRhdGFzZXRzW2VdLmJvcmRlckNvbG9yIHx8IHRkO1xuICAgICAgciArPSAnPHNwYW4gY2xhc3M9XCJjaGFydC1sZWdlbmQtaXRlbVwiPicsIHIgKz0gJzxpIGNsYXNzPVwiY2hhcnQtbGVnZW5kLWluZGljYXRvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIHQgKyAnXCI+PC9pPicsIHIgKz0gbCwgciArPSBcIjwvc3Bhbj5cIlxuICAgIH0pLCByXG4gIH0sXG4gIHRvb2x0aXBzOiB7XG4gICAgZW5hYmxlZDogITEsXG4gICAgbW9kZTogXCJpbmRleFwiLFxuICAgIGludGVyc2VjdDogITEsXG4gICAgY3VzdG9tOiBmdW5jdGlvbihyKSB7XG4gICAgICB2YXIgYSA9ICQoXCIjY2hhcnQtdG9vbHRpcFwiKTtcbiAgICAgIGlmIChhLmxlbmd0aCB8fCAoYSA9ICQoJzxkaXYgaWQ9XCJjaGFydC10b29sdGlwXCIgY2xhc3M9XCJwb3BvdmVyIGJzLXBvcG92ZXItdG9wXCIgcm9sZT1cInRvb2x0aXBcIj48L2Rpdj4nKSwgJChcImJvZHlcIikuYXBwZW5kKGEpKSwgMCAhPT0gci5vcGFjaXR5KSB7XG4gICAgICAgIGlmIChyLmJvZHkpIHtcbiAgICAgICAgICB2YXIgZSA9IHIudGl0bGUgfHwgW10sXG4gICAgICAgICAgICAgIGwgPSByLmJvZHkubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5saW5lc1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbiA9IFwiXCI7XG4gICAgICAgICAgbiArPSAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JywgZS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgbiArPSAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXIgdGV4dC1jZW50ZXJcIj4nICsgYSArIFwiPC9oMz5cIlxuICAgICAgICAgIH0pLCBsLmZvckVhY2goZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1pbmRpY2F0b3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyByLmxhYmVsQ29sb3JzW2VdLmJhY2tncm91bmRDb2xvciArICdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgIG8gPSAxIDwgbC5sZW5ndGggPyBcImp1c3RpZnktY29udGVudC1sZWZ0XCIgOiBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIjtcbiAgICAgICAgICAgICAgbiArPSAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICcgKyBvICsgJ1wiPicgKyB0ICsgYSArIFwiPC9kaXY+XCJcbiAgICAgICAgICB9KSwgYS5odG1sKG4pXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHQgPSAkKHRoaXMuX2NoYXJ0LmNhbnZhcyksXG4gICAgICAgICAgICBvID0gKHQub3V0ZXJXaWR0aCgpLCB0Lm91dGVySGVpZ2h0KCksIHQub2Zmc2V0KCkudG9wKSxcbiAgICAgICAgICAgIHMgPSB0Lm9mZnNldCgpLmxlZnQsXG4gICAgICAgICAgICBpID0gYS5vdXRlcldpZHRoKCksXG4gICAgICAgICAgICBjID0gYS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgZCA9IG8gKyByLmNhcmV0WSAtIGMgLSAxNixcbiAgICAgICAgICAgIHUgPSBzICsgci5jYXJldFggLSBpIC8gMjtcbiAgICAgICAgICBcbiAgICAgICAgYS5jc3Moe1xuICAgICAgICAgIHRvcDogZCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiB1ICsgXCJweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICB9KVxuXG4gICAgICB9IGVsc2UgYS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICB0aXRsZTogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICByZXR1cm4gZS5sYWJlbHNbYVswXS5pbmRleF1cbiAgICAgIH0sXG4gICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBvICsgXCI8L3NwYW4+XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZG91Z2hudXRTZXR0aW5ncyA9IHtcbiAgY3V0b3V0UGVyY2VudGFnZTogODMsXG4gIHRvb2x0aXBzOiB7XG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICB0aXRsZTogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICByZXR1cm4gZS5sYWJlbHNbYVswXS5pbmRleF1cbiAgICAgIH0sXG4gICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICB2YXIgdCA9IFwiXCI7XG4gICAgICAgIHJldHVybiB0ICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0gKyBcIjwvc3Bhbj5cIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGVnZW5kQ2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgbyA9IGEuZGF0YSxcbiAgICAgICAgciA9IFwiXCI7XG4gICAgcmV0dXJuIG8ubGFiZWxzLmZvckVhY2goZnVuY3Rpb24oYSwgZSkge1xuICAgICAgdmFyIHQgPSBvLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvcltlXTtcbiAgICAgIHIgKz0gJzxzcGFuIGNsYXNzPVwiY2hhcnQtbGVnZW5kLWl0ZW1cIj4nLCByICs9ICc8aSBjbGFzcz1cImNoYXJ0LWxlZ2VuZC1pbmRpY2F0b3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyB0ICsgJ1wiPjwvaT4nLCByICs9IGEsIHIgKz0gXCI8L3NwYW4+XCJcbiAgICB9KSwgclxuICB9XG59XG5cbmNvbnN0IGRvdCA9IChzdHIsIG9iaikgPT4gc3RyLnNwbGl0KCcuJykucmVkdWNlKChvLGkpPT5vW2ldLCBvYmopXG5cbmNvbnN0IGFwcGx5Q29sb3JzID0gKGVsKSA9PiB7XG4gIGNvbnN0IGNoYXJ0ID0gJChlbCkuZGF0YSgnY2hhcnQnKVxuICBjb25zdCBkYXJrTW9kZSA9IGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1jaGFydC1kYXJrLW1vZGUnKVxuICBcbiAgaWYgKGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMgPSB7XG4gICAgICBjb2xvcjogISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib3JkZXIgOiBzZXR0aW5ncy5jaGFydHMuZ3JpZExpbmVzQ29sb3IsXG4gICAgICB6ZXJvTGluZUNvbG9yOiAhIWRhcmtNb2RlID8gc2V0dGluZ3MuY29sb3JzLmRhcmtNb2RlLmJvcmRlciA6IHNldHRpbmdzLmNoYXJ0cy56ZXJvTGluZUNvbG9yXG4gICAgfVxuICAgIGNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmFuZ2xlTGluZXMgPSB7XG4gICAgICBjb2xvcjogISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib3JkZXIgOiBzZXR0aW5ncy5jaGFydHMuYW5nbGVMaW5lc0NvbG9yXG4gICAgfVxuICB9XG5cbiAgaWYgKGNoYXJ0LmNvbmZpZy50eXBlID09PSAnZG91Z2hudXQnKSB7XG4gICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5ib3JkZXJDb2xvciA9ICEhZGFya01vZGUgPyBzZXR0aW5ncy5jb2xvcnMuZGFya01vZGUuYm9keUJnIDogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5ob3ZlckJvcmRlckNvbG9yID0gISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib2R5QmcgOiBzZXR0aW5ncy5jb2xvcnMud2hpdGVcbiAgfVxuXG4gIGNvbnN0IGxpbmVCb3JkZXJDb2xvciA9IChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtbGluZS1ib3JkZXItY29sb3InKSB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIodiA9PiAhIXYpXG4gIGNvbnN0IGxpbmVCb3JkZXJPcGFjaXR5ID0gbmV3IFN0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtbGluZS1ib3JkZXItb3BhY2l0eScpIHx8ICcxJykuc3BsaXQoJywnKS5maWx0ZXIodiA9PiAhIXYpXG4gIGNvbnN0IGxpbmVCYWNrZ3JvdW5kQ29sb3IgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoYXJ0LWxpbmUtYmFja2dyb3VuZC1jb2xvcicpIHx8ICcnKS5zcGxpdCgnLCcpLmZpbHRlcih2ID0+ICEhdilcbiAgY29uc3QgbGluZUJhY2tncm91bmRPcGFjaXR5ID0gbmV3IFN0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtbGluZS1iYWNrZ3JvdW5kLW9wYWNpdHknKSB8fCAnMScpLnNwbGl0KCcsJykuZmlsdGVyKHYgPT4gISF2KVxuXG4gIGxpbmVCb3JkZXJDb2xvci5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBsZXQgb3BhY2l0eSA9IGxpbmVCb3JkZXJPcGFjaXR5W2luZGV4XVxuICAgIGlmIChjb2xvci5pbmRleE9mKCc7JykgIT09IC0xKSB7XG4gICAgICBjb2xvciA9IGNvbG9yLnNwbGl0KCc7JylcbiAgICAgIG9wYWNpdHkgPSBsaW5lQm9yZGVyT3BhY2l0eVswXS5zcGxpdCgnOycpXG4gICAgICBcbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYm9yZGVyQ29sb3IgPSBbXVxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5wb2ludEJhY2tncm91bmRDb2xvciA9IFtdXG5cbiAgICAgIGNvbG9yLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sb3IuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgIGNvbG9yID0gZG90KGNvbG9yLCBzZXR0aW5ncy5jb2xvcnMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29sb3IgPSBoZXhUb1JHQihzZXR0aW5ncy5jb2xvcnMucGxhaW5bY29sb3JdLCBvcGFjaXR5W2luZGV4XSlcbiAgICAgICAgfVxuICAgICAgICBjaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJvcmRlckNvbG9yLnB1c2goY29sb3IpXG4gICAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0ucG9pbnRCYWNrZ3JvdW5kQ29sb3IucHVzaChzZXR0aW5ncy5jb2xvcnMud2hpdGUpXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChjb2xvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgIGNvbG9yID0gZG90KGNvbG9yLCBzZXR0aW5ncy5jb2xvcnMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sb3IgPSBoZXhUb1JHQihzZXR0aW5ncy5jb2xvcnMucGxhaW5bY29sb3JdLCBvcGFjaXR5KVxuICAgICAgfVxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uYm9yZGVyQ29sb3IgPSBjb2xvclxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0ucG9pbnRCYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5ncy5jb2xvcnMud2hpdGVcbiAgICB9XG4gIH0pXG5cbiAgbGV0IGN0eCA9IGVsLmdldENvbnRleHQoJzJkJylcbiAgbGV0IGNhbnZhc0hlaWdodCA9IGVsLnNjcm9sbEhlaWdodFxuICBsZXQgZ3JhZGllbnQgPSBudWxsXG5cbiAgbGV0IGdyYWRpZW50RW5kT3BhY2l0eSA9IDAuMDAxXG4gIGlmIChjaGFydC5jb25maWcudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2JhcicpICE9PSAtMSkge1xuICAgIGdyYWRpZW50RW5kT3BhY2l0eSA9IDAuMlxuICB9XG5cbiAgbGluZUJhY2tncm91bmRDb2xvci5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBsZXQgb3BhY2l0eSA9IGxpbmVCYWNrZ3JvdW5kT3BhY2l0eVtpbmRleF1cblxuICAgIGdyYWRpZW50ID0gZ3JhZGllbnQgfHwgY29sb3IuaW5kZXhPZignZ3JhZGllbnQ6JykgIT09IC0xXG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC9ncmFkaWVudFxcOi9pZywgJycpXG5cbiAgICBpZiAoY29sb3IuaW5kZXhPZignOycpICE9PSAtMSkge1xuICAgICAgY29sb3IgPSBjb2xvci5zcGxpdCgnOycpXG4gICAgICBvcGFjaXR5ID0gbGluZUJhY2tncm91bmRPcGFjaXR5WzBdLnNwbGl0KCc7JylcbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gW11cbiAgICAgIGNvbG9yLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaGV4ID0gY29sb3JcbiAgICAgICAgaWYgKGNvbG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb2xvciA9IGRvdChjb2xvciwgc2V0dGluZ3MuY29sb3JzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbG9yID0gaGV4VG9SR0Ioc2V0dGluZ3MuY29sb3JzLnBsYWluW2NvbG9yXSwgb3BhY2l0eVtpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgICAgbGV0IGdyYWRpZW50Q2FudmFzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCwwLGNhbnZhc0hlaWdodClcbiAgICAgICAgICBncmFkaWVudENhbnZhcy5hZGRDb2xvclN0b3AoMCwgY29sb3IpXG4gICAgICAgICAgZ3JhZGllbnRDYW52YXMuYWRkQ29sb3JTdG9wKDEsIGhleFRvUkdCKGhleCwgZ3JhZGllbnRFbmRPcGFjaXR5KSlcbiAgICAgICAgICBjb2xvciA9IGdyYWRpZW50Q2FudmFzXG4gICAgICAgIH1cbiAgICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IucHVzaChjb2xvcilcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGhleFxuICAgICAgaWYgKGNvbG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgY29sb3IgPSBkb3QoY29sb3IsIHNldHRpbmdzLmNvbG9ycylcbiAgICAgICAgaGV4ID0gY29sb3JcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoZXggPSBzZXR0aW5ncy5jb2xvcnMucGxhaW5bY29sb3JdXG4gICAgICAgIGNvbG9yID0gaGV4VG9SR0IoaGV4LCBvcGFjaXR5KVxuICAgICAgfVxuICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgIGxldCBncmFkaWVudENhbnZhcyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsMCxjYW52YXNIZWlnaHQpXG4gICAgICAgIGdyYWRpZW50Q2FudmFzLmFkZENvbG9yU3RvcCgwLCBjb2xvcilcbiAgICAgICAgZ3JhZGllbnRDYW52YXMuYWRkQ29sb3JTdG9wKDEsIGhleFRvUkdCKGhleCwgZ3JhZGllbnRFbmRPcGFjaXR5KSlcbiAgICAgICAgY29sb3IgPSBncmFkaWVudENhbnZhc1xuICAgICAgfVxuICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgICB9XG4gIH0pXG5cbiAgY2hhcnQudXBkYXRlKClcblxuICBpZiAoJChlbCkuZGF0YSgnY2hhcnQtbGVnZW5kJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCQoZWwpLmRhdGEoJ2NoYXJ0LWxlZ2VuZCcpKS5pbm5lckhUTUwgPSBjaGFydC5nZW5lcmF0ZUxlZ2VuZCgpXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlID0gKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30sIGRhdGEgPSB7fSkgPT4ge1xuICB2YXIgZWwgPSAkKGlkKVxuICBcbiAgY29uc3QgcHJlZml4ID0gZWwuZGF0YSgnY2hhcnQtcHJlZml4JykgfHwgJydcbiAgY29uc3Qgc3VmZml4ID0gZWwuZGF0YSgnY2hhcnQtc3VmZml4JykgfHwgJydcbiAgY29uc3QgcG9pbnRzID0gZWwuZGF0YSgnY2hhcnQtcG9pbnRzJylcbiAgY29uc3QgaGlkZUF4ZXMgPSBlbC5kYXRhKCdjaGFydC1oaWRlLWF4ZXMnKVxuICBjb25zdCBkaXNhYmxlVG9vbHRpcHMgPSBlbC5kYXRhKCdjaGFydC1kaXNhYmxlLXRvb2x0aXBzJylcblxuICBpZiAoaGlkZUF4ZXMpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnYXJlYScpIHtcbiAgICB0eXBlID0gJ2xpbmUnXG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGZpbGw6ICdzdGFydCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAocG9pbnRzKSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICByYWRpdXM6IDQsXG4gICAgICAgICAgaG92ZXJSYWRpdXM6IDQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3JhZGFyJykge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgbWF4VGlja3NMaW1pdDogNFxuICAgICAgICB9LFxuICAgICAgICBwb2ludExhYmVsczoge1xuICAgICAgICAgIGZvbnRTaXplOiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRTaXplXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdyb3VuZGVkQmFyJykge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGJhclJvdW5kbmVzczogMS4yXG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnZG91Z2hudXQnIHx8IHR5cGUgPT09ICdyYWRhcicpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IHtcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIHplcm9MaW5lV2lkdGg6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHByZWZpeC5sZW5ndGggfHwgc3VmZml4Lmxlbmd0aCkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKCEoYSAlIDEwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cHJlZml4fSR7YX0ke3N1ZmZpeH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgICAgIHIgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RvdWdobnV0Jykge1xuICAgICAgICAgICAgICBvID0gZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gYDxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JHtwcmVmaXh9JHtvfSR7c3VmZml4fTwvc3Bhbj5gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmIChkaXNhYmxlVG9vbHRpcHMpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tOiBmdW5jdGlvbigpIHt9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIHZhciBjaGFydCA9IG5ldyBDaGFydChlbCwge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBkYXRhOiBkYXRhXG4gIH0pXG4gIGVsLmRhdGEoJ2NoYXJ0JywgY2hhcnQpXG4gIGlmIChlbC5kYXRhKCdjaGFydC1sZWdlbmQnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwuZGF0YSgnY2hhcnQtbGVnZW5kJykpXG4gICAgICAuaW5uZXJIVE1MID0gY2hhcnQuZ2VuZXJhdGVMZWdlbmQoKVxuICB9XG5cbiAgYXBwbHlDb2xvcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkpXG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGV4dGVuZChDaGFydCwge1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICBnbG9iYWw6IGdsb2JhbFNldHRpbmdzLFxuICAgICAgZG91Z2hudXQ6IGRvdWdobnV0U2V0dGluZ3NcbiAgICB9XG4gIH0pXG5cbiAgQ2hhcnQuc2NhbGVTZXJ2aWNlLnVwZGF0ZVNjYWxlRGVmYXVsdHMoXCJsaW5lYXJcIiwge1xuICAgIGdyaWRMaW5lczoge1xuICAgICAgYm9yZGVyRGFzaDogWzJdLFxuICAgICAgYm9yZGVyRGFzaE9mZnNldDogWzJdLFxuICAgICAgY29sb3I6IHNldHRpbmdzLmNoYXJ0cy5ncmlkTGluZXNDb2xvcixcbiAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgZHJhd1RpY2tzOiBmYWxzZSxcbiAgICAgIGxpbmVXaWR0aDogc2V0dGluZ3MuY2hhcnRzLmxpbmVXaWR0aCxcbiAgICAgIHplcm9MaW5lV2lkdGg6IHNldHRpbmdzLmNoYXJ0cy56ZXJvTGluZVdpZHRoLFxuICAgICAgemVyb0xpbmVDb2xvcjogc2V0dGluZ3MuY2hhcnRzLnplcm9MaW5lQ29sb3IsXG4gICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgIHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDogWzJdXG4gICAgfSxcbiAgICBhbmdsZUxpbmVzOiB7XG4gICAgICBjb2xvcjogc2V0dGluZ3MuY2hhcnRzLmFuZ2xlTGluZXNDb2xvclxuICAgIH0sXG4gICAgdGlja3M6IHtcbiAgICAgIGJlZ2luQXRaZXJvOiAhMCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgaWYgKCEoYSAlIDEwKSkgcmV0dXJuIGFcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgQ2hhcnQuc2NhbGVTZXJ2aWNlLnVwZGF0ZVNjYWxlRGVmYXVsdHMoXCJjYXRlZ29yeVwiLCB7XG4gICAgZ3JpZExpbmVzOiB7XG4gICAgICBkcmF3Qm9yZGVyOiAhMSxcbiAgICAgIGRyYXdPbkNoYXJ0QXJlYTogITEsXG4gICAgICBkcmF3VGlja3M6ICExXG4gICAgfSxcbiAgICB0aWNrczoge1xuICAgICAgcGFkZGluZzogMjBcbiAgICB9LFxuICAgIG1heEJhclRoaWNrbmVzczogMTBcbiAgfSlcblxuICAkKCdbZGF0YS10b2dnbGU9XCJjaGFydFwiXScpLm9uKHtcbiAgICBjaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKVxuICAgICAgaWYgKGVsLmlzKFwiW2RhdGEtYWRkXVwiKSkge1xuICAgICAgICBhZGQoZWwpXG4gICAgICB9XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwgPSAkKHRoaXMpXG4gICAgICBpZiAoZWwuaXMoXCJbZGF0YS11cGRhdGVdXCIpKSB7XG4gICAgICAgIHVwZGF0ZShlbClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBoZXhUb1JHQiA9IChoZXgsIGFscGhhKSA9PiB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNilcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpXG5cbiAgaWYgKGFscGhhKSB7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIlxuICB9XG59XG5cbmNvbnN0IENoYXJ0cyA9IHtcbiAgc2V0dGluZ3MsXG4gIGluaXQsXG4gIGFkZCxcbiAgdXBkYXRlLFxuICBjcmVhdGUsXG4gIGFwcGx5Q29sb3JzLFxuICBoZXhUb1JHQlxufVxuXG5pZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgd2luZG93LkNoYXJ0cyA9IENoYXJ0c1xuXG4gIENoYXJ0cy5pbml0KClcblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHsgXG4gICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4gYXBwbHlDb2xvcnMobXV0YXRpb24udGFyZ2V0KSlcbiAgIH0pXG5cbiAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJ0LWNhbnZhcycpXG4gIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IFxuICAgICAgYXR0cmlidXRlczogdHJ1ZSwgXG4gICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogZmFsc2UsIFxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXG4gICAgICAgICdkYXRhLWNoYXJ0LWxpbmUtYm9yZGVyLWNvbG9yJywgXG4gICAgICAgICdkYXRhLWNoYXJ0LWxpbmUtYm9yZGVyLW9wYWNpdHknLFxuICAgICAgICAnZGF0YS1jaGFydC1saW5lLWJhY2tncm91bmQtY29sb3InLCBcbiAgICAgICAgJ2RhdGEtY2hhcnQtbGluZS1iYWNrZ3JvdW5kLW9wYWNpdHknLFxuICAgICAgICAnZGF0YS1jaGFydC1kYXJrLW1vZGUnXG4gICAgICBdXG4gICAgfSlcbiAgfSlcbn0iLCJpbXBvcnQgJ3VpLWh1bWEvanMvdmVuZG9yL2NoYXJ0anMnIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm0tcGx1Z2luLWNoYXJ0anMvanMvY2hhcnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy92ZW5kb3IvY2hhcnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmVuZG9yL2NoYXJ0anMuanMiXSwibmFtZXMiOlsiZXh0ZW5kIiwib2JqZWN0IiwidmFsdWUiLCJrZXkiLCJhZGQiLCJlbGVtZW50IiwiZGF0YSIsImNoYXJ0IiwiJCIsImlzIiwiYWRkUmVjdXJzaXZlIiwibyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJhIiwicHVzaCIsInJlbW92ZVJlY3Vyc2l2ZSIsInBvcCIsInVwZGF0ZSIsInByZWZpeCIsInN1ZmZpeCIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ1bmRlZmluZWQiLCJ5QXhlcyIsInRpY2tzIiwiY2FsbGJhY2siLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwiZSIsInQiLCJkYXRhc2V0cyIsImRhdGFzZXRJbmRleCIsInlMYWJlbCIsImluZGV4IiwiciIsImxlbmd0aCIsImdsb2JhbFNldHRpbmdzIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJkZWZhdWx0Q29sb3IiLCJzZXR0aW5ncyIsImNoYXJ0cyIsImRlZmF1bHRGb250Q29sb3IiLCJkZWZhdWx0Rm9udEZhbWlseSIsImRlZmF1bHRGb250U2l6ZSIsImxheW91dCIsInBhZGRpbmciLCJsZWdlbmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJsYWJlbHMiLCJ1c2VQb2ludFN0eWxlIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInByaW1hcnkiLCJsaW5lIiwidGVuc2lvbiIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJ0cmFuc3BhcmVudCIsImJvcmRlckNhcFN0eWxlIiwicmVjdGFuZ2xlIiwiYXJjIiwid2hpdGUiLCJsZWdlbmRDYWxsYmFjayIsInRkIiwibCIsImVuYWJsZWQiLCJtb2RlIiwiaW50ZXJzZWN0IiwiY3VzdG9tIiwiYXBwZW5kIiwib3BhY2l0eSIsImJvZHkiLCJ0aXRsZSIsIm1hcCIsImxpbmVzIiwibiIsImxhYmVsQ29sb3JzIiwiaHRtbCIsIl9jaGFydCIsImNhbnZhcyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIm9mZnNldCIsInRvcCIsInMiLCJsZWZ0IiwiaSIsImMiLCJkIiwiY2FyZXRZIiwidSIsImNhcmV0WCIsImNzcyIsImRvdWdobnV0U2V0dGluZ3MiLCJjdXRvdXRQZXJjZW50YWdlIiwiZG90Iiwic3RyIiwib2JqIiwic3BsaXQiLCJyZWR1Y2UiLCJhcHBseUNvbG9ycyIsImVsIiwiZGFya01vZGUiLCJoYXNBdHRyaWJ1dGUiLCJncmlkTGluZXMiLCJjb2xvciIsImJvcmRlciIsImdyaWRMaW5lc0NvbG9yIiwiemVyb0xpbmVDb2xvciIsImFuZ2xlTGluZXMiLCJhbmdsZUxpbmVzQ29sb3IiLCJjb25maWciLCJ0eXBlIiwiYm9keUJnIiwiaG92ZXJCb3JkZXJDb2xvciIsImxpbmVCb3JkZXJDb2xvciIsImdldEF0dHJpYnV0ZSIsImZpbHRlciIsInYiLCJsaW5lQm9yZGVyT3BhY2l0eSIsIlN0cmluZyIsImxpbmVCYWNrZ3JvdW5kQ29sb3IiLCJsaW5lQmFja2dyb3VuZE9wYWNpdHkiLCJpbmRleE9mIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJoZXhUb1JHQiIsInBsYWluIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc0hlaWdodCIsInNjcm9sbEhlaWdodCIsImdyYWRpZW50IiwiZ3JhZGllbnRFbmRPcGFjaXR5IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiaGV4IiwiZ3JhZGllbnRDYW52YXMiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImdlbmVyYXRlTGVnZW5kIiwiY3JlYXRlIiwiaWQiLCJwb2ludHMiLCJoaWRlQXhlcyIsImRpc2FibGVUb29sdGlwcyIsIkNoYXJ0IiwiaGVscGVycyIsIm1lcmdlIiwieEF4ZXMiLCJmaWxsIiwicG9pbnRTdHlsZSIsImhvdmVyUmFkaXVzIiwic2NhbGUiLCJiZWdpbkF0WmVybyIsIm1heFRpY2tzTGltaXQiLCJwb2ludExhYmVscyIsImZvbnRTaXplIiwiYmFyUm91bmRuZXNzIiwiemVyb0xpbmVXaWR0aCIsImluaXQiLCJkZWZhdWx0cyIsImdsb2JhbCIsImRvdWdobnV0Iiwic2NhbGVTZXJ2aWNlIiwidXBkYXRlU2NhbGVEZWZhdWx0cyIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiZHJhd0JvcmRlciIsImRyYXdUaWNrcyIsImxpbmVXaWR0aCIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsImRyYXdPbkNoYXJ0QXJlYSIsIm1heEJhclRoaWNrbmVzcyIsIm9uIiwiY2hhbmdlIiwiY2xpY2siLCJhbHBoYSIsInBhcnNlSW50Iiwic2xpY2UiLCJnIiwiYiIsIkNoYXJ0cyIsIndpbmRvdyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidGFyZ2V0Iiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNI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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBhdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi45JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmV4ZWMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcblxudmFyIFNQRUNJRVMgPSB3a3MoJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPT09IDIgJiYgcmVzdWx0WzBdID09PSAnYScgJiYgcmVzdWx0WzFdID09PSAnYic7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCA/ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgIH1cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pIDogdW5kZWZpbmVkO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIGZucyA9IGV4ZWMoXG4gICAgICBkZWZpbmVkLFxuICAgICAgU1lNQk9MLFxuICAgICAgJydbS0VZXSxcbiAgICAgIGZ1bmN0aW9uIG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgICB9XG4gICAgKTtcbiAgICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gICAgdmFyIHJ4Zm4gPSBmbnNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuIC8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cbiAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS8sXG4gICAgICByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG59KSgpO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmVbTEFTVF9JTkRFWF07XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlW0xBU1RfSU5ERVhdID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5yZXF1aXJlKCcuL19leHBvcnQnKSh7XG4gIHRhcmdldDogJ1JlZ0V4cCcsXG4gIHByb3RvOiB0cnVlLFxuICBmb3JjZWQ6IHJlZ2V4cEV4ZWMgIT09IC8uLy5leGVjXG59LCB7XG4gIGV4ZWM6IHJlZ2V4cEV4ZWNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCZgJ118XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRyZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG1heChtaW4odG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xuXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgICB2YXIgY2FwdHVyZTtcbiAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRtaW4gPSBNYXRoLm1pbjtcbnZhciAkcHVzaCA9IFtdLnB1c2g7XG52YXIgJFNQTElUID0gJ3NwbGl0JztcbnZhciBMRU5HVEggPSAnbGVuZ3RoJztcbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG52YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IFJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9ICRtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCJjb25zdCBleHRlbmQgPSAob2JqZWN0LCB2YWx1ZSkgPT4ge1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIFwib2JqZWN0XCIgIT0gdHlwZW9mIHZhbHVlW2tleV0gPyBvYmplY3Rba2V5XSA9IHZhbHVlW2tleV0gOiBleHRlbmQob2JqZWN0W2tleV0sIHZhbHVlW2tleV0pXG59XG5cbmNvbnN0IGFkZCA9IChlbGVtZW50KSA9PiB7XG4gIHZhciBkYXRhID0gZWxlbWVudC5kYXRhKFwiYWRkXCIpXG4gIHZhciBjaGFydCA9ICQoZWxlbWVudC5kYXRhKFwidGFyZ2V0XCIpKS5kYXRhKFwiY2hhcnRcIilcblxuICBpZiAoZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgZnVuY3Rpb24gYWRkUmVjdXJzaXZlKGNoYXJ0LCBkYXRhKSB7XG4gICAgICBmb3IgKHZhciBvIGluIGRhdGEpIEFycmF5LmlzQXJyYXkoZGF0YVtvXSkgPyBkYXRhW29dLmZvckVhY2goZnVuY3Rpb24oYSkge1xuICAgICAgICBjaGFydFtvXS5wdXNoKGEpXG4gICAgICB9KSA6IGFkZFJlY3Vyc2l2ZShjaGFydFtvXSwgZGF0YVtvXSlcbiAgICB9XG4gICAgYWRkUmVjdXJzaXZlKGNoYXJ0LCBkYXRhKVxuICB9IFxuICBlbHNlIHtcbiAgICBmdW5jdGlvbiByZW1vdmVSZWN1cnNpdmUoY2hhcnQsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIG8gaW4gZGF0YSkgQXJyYXkuaXNBcnJheShkYXRhW29dKSA/IGRhdGFbb10uZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgIGNoYXJ0W29dLnBvcCgpXG4gICAgICB9KSA6IHJlbW92ZVJlY3Vyc2l2ZShjaGFydFtvXSwgZGF0YVtvXSlcbiAgICB9XG4gICAgcmVtb3ZlUmVjdXJzaXZlKGNoYXJ0LCBkYXRhKVxuICB9XG5cbiAgY2hhcnQudXBkYXRlKClcbn1cblxuY29uc3QgdXBkYXRlID0gKGVsZW1lbnQpID0+IHtcbiAgdmFyIGRhdGEgPSBlbGVtZW50LmRhdGEoXCJ1cGRhdGVcIilcbiAgdmFyIGNoYXJ0ID0gJChlbGVtZW50LmRhdGEoXCJ0YXJnZXRcIikpLmRhdGEoXCJjaGFydFwiKVxuICBcbiAgZXh0ZW5kKGNoYXJ0LCBkYXRhKVxuXG4gIGlmICh2b2lkIDAgIT09IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSB8fCB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YShcInN1ZmZpeFwiKSkge1xuICAgIGxldCBwcmVmaXggPSBlbGVtZW50LmRhdGEoXCJwcmVmaXhcIikgPyBlbGVtZW50LmRhdGEoXCJwcmVmaXhcIikgOiBcIlwiXG4gICAgbGV0IHN1ZmZpeCA9IGVsZW1lbnQuZGF0YShcInN1ZmZpeFwiKSA/IGVsZW1lbnQuZGF0YShcInN1ZmZpeFwiKSA6IFwiXCJcblxuICAgIGlmIChjaGFydC5vcHRpb25zLnNjYWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5jYWxsYmFjayA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgaWYgKCEoYSAlIDEwKSkgcmV0dXJuIHByZWZpeCArIGEgKyBzdWZmaXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFydC5vcHRpb25zLnRvb2x0aXBzLmNhbGxiYWNrcy5sYWJlbCA9IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICBvID0gYS55TGFiZWwgfHwgZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdLFxuICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBwcmVmaXggKyBvICsgc3VmZml4ICsgXCI8L3NwYW4+XCJcbiAgICB9XG4gIH1cblxuICBjaGFydC51cGRhdGUoKVxufVxuXG5jb25zdCBnbG9iYWxTZXR0aW5ncyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gIGRlZmF1bHRDb2xvcjogc2V0dGluZ3MuY2hhcnRzLmRlZmF1bHRDb2xvcixcbiAgZGVmYXVsdEZvbnRDb2xvcjogc2V0dGluZ3MuY2hhcnRzLmRlZmF1bHRGb250Q29sb3IsXG4gIGRlZmF1bHRGb250RmFtaWx5OiBzZXR0aW5ncy5jaGFydHMuZGVmYXVsdEZvbnRGYW1pbHksXG4gIGRlZmF1bHRGb250U2l6ZTogc2V0dGluZ3MuY2hhcnRzLmRlZmF1bHRGb250U2l6ZSxcbiAgbGF5b3V0OiB7XG4gICAgcGFkZGluZzogMFxuICB9LFxuICBsZWdlbmQ6IHtcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICBsYWJlbHM6IHtcbiAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXG4gICAgICBwYWRkaW5nOiAxNlxuICAgIH1cbiAgfSxcbiAgZWxlbWVudHM6IHtcbiAgICBwb2ludDoge1xuICAgICAgcmFkaXVzOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICB0ZW5zaW9uOiAuNCxcbiAgICAgIGJvcmRlcldpZHRoOiAzLFxuICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiBcInJvdW5kZWRcIlxuICAgIH0sXG4gICAgcmVjdGFuZ2xlOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF1cbiAgICB9LFxuICAgIGFyYzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZSxcbiAgICAgIGJvcmRlcldpZHRoOiA0XG4gICAgfVxuICB9LFxuICBsZWdlbmRDYWxsYmFjazogZnVuY3Rpb24oYSkge1xuICAgIHZhciBvID0gYS5kYXRhLFxuICAgICAgICByID0gXCJcIjtcbiAgICB2YXIgdGQgPSBhLm9wdGlvbnMuZWxlbWVudHMubGluZS5ib3JkZXJDb2xvcjtcbiAgICByZXR1cm4gby5kYXRhc2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIHZhciBsID0gby5kYXRhc2V0c1tlXS5sYWJlbDtcbiAgICAgIHZhciB0ID0gby5kYXRhc2V0c1tlXS5ib3JkZXJDb2xvciB8fCB0ZDtcbiAgICAgIHIgKz0gJzxzcGFuIGNsYXNzPVwiY2hhcnQtbGVnZW5kLWl0ZW1cIj4nLCByICs9ICc8aSBjbGFzcz1cImNoYXJ0LWxlZ2VuZC1pbmRpY2F0b3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyB0ICsgJ1wiPjwvaT4nLCByICs9IGwsIHIgKz0gXCI8L3NwYW4+XCJcbiAgICB9KSwgclxuICB9LFxuICB0b29sdGlwczoge1xuICAgIGVuYWJsZWQ6ICExLFxuICAgIG1vZGU6IFwiaW5kZXhcIixcbiAgICBpbnRlcnNlY3Q6ICExLFxuICAgIGN1c3RvbTogZnVuY3Rpb24ocikge1xuICAgICAgdmFyIGEgPSAkKFwiI2NoYXJ0LXRvb2x0aXBcIik7XG4gICAgICBpZiAoYS5sZW5ndGggfHwgKGEgPSAkKCc8ZGl2IGlkPVwiY2hhcnQtdG9vbHRpcFwiIGNsYXNzPVwicG9wb3ZlciBicy1wb3BvdmVyLXRvcFwiIHJvbGU9XCJ0b29sdGlwXCI+PC9kaXY+JyksICQoXCJib2R5XCIpLmFwcGVuZChhKSksIDAgIT09IHIub3BhY2l0eSkge1xuICAgICAgICBpZiAoci5ib2R5KSB7XG4gICAgICAgICAgdmFyIGUgPSByLnRpdGxlIHx8IFtdLFxuICAgICAgICAgICAgICBsID0gci5ib2R5Lm1hcChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEubGluZXNcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG4gPSBcIlwiO1xuICAgICAgICAgIG4gKz0gJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicsIGUuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIG4gKz0gJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyIHRleHQtY2VudGVyXCI+JyArIGEgKyBcIjwvaDM+XCJcbiAgICAgICAgICB9KSwgbC5mb3JFYWNoKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktaW5kaWNhdG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnICsgci5sYWJlbENvbG9yc1tlXS5iYWNrZ3JvdW5kQ29sb3IgKyAnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICBvID0gMSA8IGwubGVuZ3RoID8gXCJqdXN0aWZ5LWNvbnRlbnQtbGVmdFwiIDogXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI7XG4gICAgICAgICAgICAgIG4gKz0gJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAnICsgbyArICdcIj4nICsgdCArIGEgKyBcIjwvZGl2PlwiXG4gICAgICAgICAgfSksIGEuaHRtbChuKVxuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gJCh0aGlzLl9jaGFydC5jYW52YXMpLFxuICAgICAgICAgICAgbyA9ICh0Lm91dGVyV2lkdGgoKSwgdC5vdXRlckhlaWdodCgpLCB0Lm9mZnNldCgpLnRvcCksXG4gICAgICAgICAgICBzID0gdC5vZmZzZXQoKS5sZWZ0LFxuICAgICAgICAgICAgaSA9IGEub3V0ZXJXaWR0aCgpLFxuICAgICAgICAgICAgYyA9IGEub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgIGQgPSBvICsgci5jYXJldFkgLSBjIC0gMTYsXG4gICAgICAgICAgICB1ID0gcyArIHIuY2FyZXRYIC0gaSAvIDI7XG4gICAgICAgICAgXG4gICAgICAgIGEuY3NzKHtcbiAgICAgICAgICB0b3A6IGQgKyBcInB4XCIsXG4gICAgICAgICAgbGVmdDogdSArIFwicHhcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGEuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgdGl0bGU6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgcmV0dXJuIGUubGFiZWxzW2FbMF0uaW5kZXhdXG4gICAgICB9LFxuICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiPC9zcGFuPlwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRvdWdobnV0U2V0dGluZ3MgPSB7XG4gIGN1dG91dFBlcmNlbnRhZ2U6IDgzLFxuICB0b29sdGlwczoge1xuICAgIGNhbGxiYWNrczoge1xuICAgICAgdGl0bGU6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgcmV0dXJuIGUubGFiZWxzW2FbMF0uaW5kZXhdXG4gICAgICB9LFxuICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgdmFyIHQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdCArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdICsgXCI8L3NwYW4+XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxlZ2VuZENhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgdmFyIG8gPSBhLmRhdGEsXG4gICAgICAgIHIgPSBcIlwiO1xuICAgIHJldHVybiBvLmxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIHZhciB0ID0gby5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3JbZV07XG4gICAgICByICs9ICc8c3BhbiBjbGFzcz1cImNoYXJ0LWxlZ2VuZC1pdGVtXCI+JywgciArPSAnPGkgY2xhc3M9XCJjaGFydC1sZWdlbmQtaW5kaWNhdG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnICsgdCArICdcIj48L2k+JywgciArPSBhLCByICs9IFwiPC9zcGFuPlwiXG4gICAgfSksIHJcbiAgfVxufVxuXG5jb25zdCBkb3QgPSAoc3RyLCBvYmopID0+IHN0ci5zcGxpdCgnLicpLnJlZHVjZSgobyxpKT0+b1tpXSwgb2JqKVxuXG5jb25zdCBhcHBseUNvbG9ycyA9IChlbCkgPT4ge1xuICBjb25zdCBjaGFydCA9ICQoZWwpLmRhdGEoJ2NoYXJ0JylcbiAgY29uc3QgZGFya01vZGUgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2hhcnQtZGFyay1tb2RlJylcbiAgXG4gIGlmIChjaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzID0ge1xuICAgICAgY29sb3I6ICEhZGFya01vZGUgPyBzZXR0aW5ncy5jb2xvcnMuZGFya01vZGUuYm9yZGVyIDogc2V0dGluZ3MuY2hhcnRzLmdyaWRMaW5lc0NvbG9yLFxuICAgICAgemVyb0xpbmVDb2xvcjogISFkYXJrTW9kZSA/IHNldHRpbmdzLmNvbG9ycy5kYXJrTW9kZS5ib3JkZXIgOiBzZXR0aW5ncy5jaGFydHMuemVyb0xpbmVDb2xvclxuICAgIH1cbiAgICBjaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5hbmdsZUxpbmVzID0ge1xuICAgICAgY29sb3I6ICEhZGFya01vZGUgPyBzZXR0aW5ncy5jb2xvcnMuZGFya01vZGUuYm9yZGVyIDogc2V0dGluZ3MuY2hhcnRzLmFuZ2xlTGluZXNDb2xvclxuICAgIH1cbiAgfVxuXG4gIGlmIChjaGFydC5jb25maWcudHlwZSA9PT0gJ2RvdWdobnV0Jykge1xuICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYm9yZGVyQ29sb3IgPSAhIWRhcmtNb2RlID8gc2V0dGluZ3MuY29sb3JzLmRhcmtNb2RlLmJvZHlCZyA6IHNldHRpbmdzLmNvbG9ycy53aGl0ZVxuICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uaG92ZXJCb3JkZXJDb2xvciA9ICEhZGFya01vZGUgPyBzZXR0aW5ncy5jb2xvcnMuZGFya01vZGUuYm9keUJnIDogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gIH1cblxuICBjb25zdCBsaW5lQm9yZGVyQ29sb3IgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoYXJ0LWxpbmUtYm9yZGVyLWNvbG9yJykgfHwgJycpLnNwbGl0KCcsJykuZmlsdGVyKHYgPT4gISF2KVxuICBjb25zdCBsaW5lQm9yZGVyT3BhY2l0eSA9IG5ldyBTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoYXJ0LWxpbmUtYm9yZGVyLW9wYWNpdHknKSB8fCAnMScpLnNwbGl0KCcsJykuZmlsdGVyKHYgPT4gISF2KVxuICBjb25zdCBsaW5lQmFja2dyb3VuZENvbG9yID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jaGFydC1saW5lLWJhY2tncm91bmQtY29sb3InKSB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIodiA9PiAhIXYpXG4gIGNvbnN0IGxpbmVCYWNrZ3JvdW5kT3BhY2l0eSA9IG5ldyBTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNoYXJ0LWxpbmUtYmFja2dyb3VuZC1vcGFjaXR5JykgfHwgJzEnKS5zcGxpdCgnLCcpLmZpbHRlcih2ID0+ICEhdilcblxuICBsaW5lQm9yZGVyQ29sb3IuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgbGV0IG9wYWNpdHkgPSBsaW5lQm9yZGVyT3BhY2l0eVtpbmRleF1cbiAgICBpZiAoY29sb3IuaW5kZXhPZignOycpICE9PSAtMSkge1xuICAgICAgY29sb3IgPSBjb2xvci5zcGxpdCgnOycpXG4gICAgICBvcGFjaXR5ID0gbGluZUJvcmRlck9wYWNpdHlbMF0uc3BsaXQoJzsnKVxuICAgICAgXG4gICAgICBjaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJvcmRlckNvbG9yID0gW11cbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0ucG9pbnRCYWNrZ3JvdW5kQ29sb3IgPSBbXVxuXG4gICAgICBjb2xvci5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNvbG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb2xvciA9IGRvdChjb2xvciwgc2V0dGluZ3MuY29sb3JzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbG9yID0gaGV4VG9SR0Ioc2V0dGluZ3MuY29sb3JzLnBsYWluW2NvbG9yXSwgb3BhY2l0eVtpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5ib3JkZXJDb2xvci5wdXNoKGNvbG9yKVxuICAgICAgICBjaGFydC5kYXRhLmRhdGFzZXRzWzBdLnBvaW50QmFja2dyb3VuZENvbG9yLnB1c2goc2V0dGluZ3MuY29sb3JzLndoaXRlKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoY29sb3IuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICBjb2xvciA9IGRvdChjb2xvciwgc2V0dGluZ3MuY29sb3JzKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbG9yID0gaGV4VG9SR0Ioc2V0dGluZ3MuY29sb3JzLnBsYWluW2NvbG9yXSwgb3BhY2l0eSlcbiAgICAgIH1cbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbaW5kZXhdLmJvcmRlckNvbG9yID0gY29sb3JcbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbaW5kZXhdLnBvaW50QmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgfVxuICB9KVxuXG4gIGxldCBjdHggPSBlbC5nZXRDb250ZXh0KCcyZCcpXG4gIGxldCBjYW52YXNIZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHRcbiAgbGV0IGdyYWRpZW50ID0gbnVsbFxuXG4gIGxldCBncmFkaWVudEVuZE9wYWNpdHkgPSAwLjAwMVxuICBpZiAoY2hhcnQuY29uZmlnLnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdiYXInKSAhPT0gLTEpIHtcbiAgICBncmFkaWVudEVuZE9wYWNpdHkgPSAwLjJcbiAgfVxuXG4gIGxpbmVCYWNrZ3JvdW5kQ29sb3IuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgbGV0IG9wYWNpdHkgPSBsaW5lQmFja2dyb3VuZE9wYWNpdHlbaW5kZXhdXG5cbiAgICBncmFkaWVudCA9IGdyYWRpZW50IHx8IGNvbG9yLmluZGV4T2YoJ2dyYWRpZW50OicpICE9PSAtMVxuICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgvZ3JhZGllbnRcXDovaWcsICcnKVxuXG4gICAgaWYgKGNvbG9yLmluZGV4T2YoJzsnKSAhPT0gLTEpIHtcbiAgICAgIGNvbG9yID0gY29sb3Iuc3BsaXQoJzsnKVxuICAgICAgb3BhY2l0eSA9IGxpbmVCYWNrZ3JvdW5kT3BhY2l0eVswXS5zcGxpdCgnOycpXG4gICAgICBjaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IFtdXG4gICAgICBjb2xvci5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGhleCA9IGNvbG9yXG4gICAgICAgIGlmIChjb2xvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgY29sb3IgPSBkb3QoY29sb3IsIHNldHRpbmdzLmNvbG9ycylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb2xvciA9IGhleFRvUkdCKHNldHRpbmdzLmNvbG9ycy5wbGFpbltjb2xvcl0sIG9wYWNpdHlbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIGlmIChncmFkaWVudCkge1xuICAgICAgICAgIGxldCBncmFkaWVudENhbnZhcyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsMCxjYW52YXNIZWlnaHQpXG4gICAgICAgICAgZ3JhZGllbnRDYW52YXMuYWRkQ29sb3JTdG9wKDAsIGNvbG9yKVxuICAgICAgICAgIGdyYWRpZW50Q2FudmFzLmFkZENvbG9yU3RvcCgxLCBoZXhUb1JHQihoZXgsIGdyYWRpZW50RW5kT3BhY2l0eSkpXG4gICAgICAgICAgY29sb3IgPSBncmFkaWVudENhbnZhc1xuICAgICAgICB9XG4gICAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yLnB1c2goY29sb3IpXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBoZXhcbiAgICAgIGlmIChjb2xvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgIGNvbG9yID0gZG90KGNvbG9yLCBzZXR0aW5ncy5jb2xvcnMpXG4gICAgICAgIGhleCA9IGNvbG9yXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaGV4ID0gc2V0dGluZ3MuY29sb3JzLnBsYWluW2NvbG9yXVxuICAgICAgICBjb2xvciA9IGhleFRvUkdCKGhleCwgb3BhY2l0eSlcbiAgICAgIH1cbiAgICAgIGlmIChncmFkaWVudCkge1xuICAgICAgICBsZXQgZ3JhZGllbnRDYW52YXMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAsY2FudmFzSGVpZ2h0KVxuICAgICAgICBncmFkaWVudENhbnZhcy5hZGRDb2xvclN0b3AoMCwgY29sb3IpXG4gICAgICAgIGdyYWRpZW50Q2FudmFzLmFkZENvbG9yU3RvcCgxLCBoZXhUb1JHQihoZXgsIGdyYWRpZW50RW5kT3BhY2l0eSkpXG4gICAgICAgIGNvbG9yID0gZ3JhZGllbnRDYW52YXNcbiAgICAgIH1cbiAgICAgIGNoYXJ0LmRhdGEuZGF0YXNldHNbaW5kZXhdLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG4gICAgfVxuICB9KVxuXG4gIGNoYXJ0LnVwZGF0ZSgpXG5cbiAgaWYgKCQoZWwpLmRhdGEoJ2NoYXJ0LWxlZ2VuZCcpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigkKGVsKS5kYXRhKCdjaGFydC1sZWdlbmQnKSkuaW5uZXJIVE1MID0gY2hhcnQuZ2VuZXJhdGVMZWdlbmQoKVxuICB9XG59XG5cbmNvbnN0IGNyZWF0ZSA9IChpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9LCBkYXRhID0ge30pID0+IHtcbiAgdmFyIGVsID0gJChpZClcbiAgXG4gIGNvbnN0IHByZWZpeCA9IGVsLmRhdGEoJ2NoYXJ0LXByZWZpeCcpIHx8ICcnXG4gIGNvbnN0IHN1ZmZpeCA9IGVsLmRhdGEoJ2NoYXJ0LXN1ZmZpeCcpIHx8ICcnXG4gIGNvbnN0IHBvaW50cyA9IGVsLmRhdGEoJ2NoYXJ0LXBvaW50cycpXG4gIGNvbnN0IGhpZGVBeGVzID0gZWwuZGF0YSgnY2hhcnQtaGlkZS1heGVzJylcbiAgY29uc3QgZGlzYWJsZVRvb2x0aXBzID0gZWwuZGF0YSgnY2hhcnQtZGlzYWJsZS10b29sdGlwcycpXG5cbiAgaWYgKGhpZGVBeGVzKSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2FyZWEnKSB7XG4gICAgdHlwZSA9ICdsaW5lJ1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBmaWxsOiAnc3RhcnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHBvaW50cykge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXG4gICAgICAgICAgcmFkaXVzOiA0LFxuICAgICAgICAgIGhvdmVyUmFkaXVzOiA0LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdyYWRhcicpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZToge1xuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDRcbiAgICAgICAgfSxcbiAgICAgICAgcG9pbnRMYWJlbHM6IHtcbiAgICAgICAgICBmb250U2l6ZTogc2V0dGluZ3MuY2hhcnRzLmRlZmF1bHRGb250U2l6ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlID09PSAncm91bmRlZEJhcicpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBiYXJSb3VuZG5lc3M6IDEuMlxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2RvdWdobnV0JyB8fCB0eXBlID09PSAncmFkYXInKSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiB7XG4gICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICB6ZXJvTGluZVdpZHRoOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGlmIChwcmVmaXgubGVuZ3RoIHx8IHN1ZmZpeC5sZW5ndGgpIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgIGlmICghKGEgJSAxMCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke2F9JHtzdWZmaXh9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkb3VnaG51dCcpIHtcbiAgICAgICAgICAgICAgbyA9IGUuZGF0YXNldHNbMF0uZGF0YVthLmluZGV4XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9IGA8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPiR7cHJlZml4fSR7b30ke3N1ZmZpeH08L3NwYW4+YFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAoZGlzYWJsZVRvb2x0aXBzKSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGN1c3RvbTogZnVuY3Rpb24oKSB7fVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoZWwsIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgZGF0YTogZGF0YVxuICB9KVxuICBlbC5kYXRhKCdjaGFydCcsIGNoYXJ0KVxuICBpZiAoZWwuZGF0YSgnY2hhcnQtbGVnZW5kJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsLmRhdGEoJ2NoYXJ0LWxlZ2VuZCcpKVxuICAgICAgLmlubmVySFRNTCA9IGNoYXJ0LmdlbmVyYXRlTGVnZW5kKClcbiAgfVxuXG4gIGFwcGx5Q29sb3JzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpKVxufVxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBleHRlbmQoQ2hhcnQsIHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxTZXR0aW5ncyxcbiAgICAgIGRvdWdobnV0OiBkb3VnaG51dFNldHRpbmdzXG4gICAgfVxuICB9KVxuXG4gIENoYXJ0LnNjYWxlU2VydmljZS51cGRhdGVTY2FsZURlZmF1bHRzKFwibGluZWFyXCIsIHtcbiAgICBncmlkTGluZXM6IHtcbiAgICAgIGJvcmRlckRhc2g6IFsyXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgIGNvbG9yOiBzZXR0aW5ncy5jaGFydHMuZ3JpZExpbmVzQ29sb3IsXG4gICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgIGRyYXdUaWNrczogZmFsc2UsXG4gICAgICBsaW5lV2lkdGg6IHNldHRpbmdzLmNoYXJ0cy5saW5lV2lkdGgsXG4gICAgICB6ZXJvTGluZVdpZHRoOiBzZXR0aW5ncy5jaGFydHMuemVyb0xpbmVXaWR0aCxcbiAgICAgIHplcm9MaW5lQ29sb3I6IHNldHRpbmdzLmNoYXJ0cy56ZXJvTGluZUNvbG9yLFxuICAgICAgemVyb0xpbmVCb3JkZXJEYXNoOiBbMl0sXG4gICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXVxuICAgIH0sXG4gICAgYW5nbGVMaW5lczoge1xuICAgICAgY29sb3I6IHNldHRpbmdzLmNoYXJ0cy5hbmdsZUxpbmVzQ29sb3JcbiAgICB9LFxuICAgIHRpY2tzOiB7XG4gICAgICBiZWdpbkF0WmVybzogITAsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihhKSB7XG4gICAgICAgIGlmICghKGEgJSAxMCkpIHJldHVybiBhXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIENoYXJ0LnNjYWxlU2VydmljZS51cGRhdGVTY2FsZURlZmF1bHRzKFwiY2F0ZWdvcnlcIiwge1xuICAgIGdyaWRMaW5lczoge1xuICAgICAgZHJhd0JvcmRlcjogITEsXG4gICAgICBkcmF3T25DaGFydEFyZWE6ICExLFxuICAgICAgZHJhd1RpY2tzOiAhMVxuICAgIH0sXG4gICAgdGlja3M6IHtcbiAgICAgIHBhZGRpbmc6IDIwXG4gICAgfSxcbiAgICBtYXhCYXJUaGlja25lc3M6IDEwXG4gIH0pXG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY2hhcnRcIl0nKS5vbih7XG4gICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgIGlmIChlbC5pcyhcIltkYXRhLWFkZF1cIikpIHtcbiAgICAgICAgYWRkKGVsKVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKVxuICAgICAgaWYgKGVsLmlzKFwiW2RhdGEtdXBkYXRlXVwiKSkge1xuICAgICAgICB1cGRhdGUoZWwpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaGV4VG9SR0IgPSAoaGV4LCBhbHBoYSkgPT4ge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNilcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KVxuXG4gIGlmIChhbHBoYSkge1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCJcbiAgfVxufVxuXG5jb25zdCBDaGFydHMgPSB7XG4gIHNldHRpbmdzLFxuICBpbml0LFxuICBhZGQsXG4gIHVwZGF0ZSxcbiAgY3JlYXRlLFxuICBhcHBseUNvbG9ycyxcbiAgaGV4VG9SR0Jcbn1cblxuaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5DaGFydHMgPSBDaGFydHNcblxuICBDaGFydHMuaW5pdCgpXG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7IFxuICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IGFwcGx5Q29sb3JzKG11dGF0aW9uLnRhcmdldCkpXG4gICB9KVxuXG4gIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC1jYW52YXMnKVxuICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsIFxuICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IGZhbHNlLCBcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1xuICAgICAgICAnZGF0YS1jaGFydC1saW5lLWJvcmRlci1jb2xvcicsIFxuICAgICAgICAnZGF0YS1jaGFydC1saW5lLWJvcmRlci1vcGFjaXR5JyxcbiAgICAgICAgJ2RhdGEtY2hhcnQtbGluZS1iYWNrZ3JvdW5kLWNvbG9yJywgXG4gICAgICAgICdkYXRhLWNoYXJ0LWxpbmUtYmFja2dyb3VuZC1vcGFjaXR5JyxcbiAgICAgICAgJ2RhdGEtY2hhcnQtZGFyay1tb2RlJ1xuICAgICAgXVxuICAgIH0pXG4gIH0pXG59IiwiaW1wb3J0ICdmbS1wbHVnaW4tY2hhcnRqcyciLCJpbXBvcnQgJ3VpLWh1bWEvanMvdmVuZG9yL2NoYXJ0anMnIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> master
