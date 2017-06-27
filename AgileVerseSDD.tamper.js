// ==UserScript==
// @name AgileVerseSDD
// @namespace AgileVerseSDD
// @include https://mail.notes.na.collabserv.com/verse*
// @include https://mail.notes.ce.collabserv.com/verse*
// @include https://mail.notes.ap.collabserv.com/verse*
// @include https://mail.notes.scniris.com/verse*
// @include https://mail.notes.collabservintegration.com/verse*
// @copyright 2015, Martin Holan
// @run-at document-end
// @connect localhost
// @connect collabserv.com
// @connect scniris.com
// @connect collabservintegration.com
// @connect mybluemix.net
// @grant GM_xmlhttpRequest
// @require http://code.jquery.com/jquery-2.1.4.min.js
// @downloadURL https://ibm.biz/AgileVerse
// @homepageURL https://tap.innovate.ibm.com/app/4099
// @supportURL https://apps.na.collabserv.com/forums/html/forum?id=7265e2bb-762b-437e-8de2-f0b757b92491
// @version 5.1.0
// @author Martin Holan
// @description AgileVerse is JavaScript plugin for your browser that enhance your user experience with IBM Verse
// ==/UserScript==


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var logger = __webpack_require__(1)('app');

	var AVE = __webpack_require__(5);
	// var sendHeartbeat = require('AVE/utils/tracking');

	if (AVE.checkIfMain(window)) {
		console.log('Starting AgileVerse ' + ("5.1.0") + ' - b' + (1497609853314) + ' from ' + ("Fri Jun 16 2017 12:44:13 GMT+0200 (Central Europe Daylight Time)"));
		// sendHeartbeat();
		try {
			registerPlugins(AVE);
			AVE.createMainMenu();
			waitForNewRelic(10);
		} catch (err) {
			logger.error(err);
		}
	}

	function waitForNewRelic(attempts) {
		try {
			if (unsafeWindow.newrelic) {
				window.eval('newrelic.addPageAction("Agile-Verse-Started", { browser: navigator.userAgent });');
				logger.debug('Agile Verse analytics sent');
			} else if (attempts > 0) {
				attempts--;
				setTimeout(waitForNewRelic, 1000, attempts);
			}
		} catch (error) {
			logger.error('Error Accessing unsafe window  %O', error);
		}
	}

	function registerPlugins(aveReg) {
		var plugins = [__webpack_require__(13),
		//require('AVE/plugin/important'),
		//require('AVE/plugin/mail-height'),
		__webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(25), __webpack_require__(27), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39), __webpack_require__(45),
		//require('AVE/plugin/unread'),
		__webpack_require__(46),
		//require('AVE/plugin/mailfont'),
		__webpack_require__(47)];

		plugins.map(function (p) {
			return aveReg.registerPlugin(p);
		});
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (debug) {
	    var prefix = "AVE/";

	    var logger = function createLogger(scope) {
	        var scopeNS = prefix + scope;

	        return {
	            error: Function.prototype.bind.call(console.error, console, scopeNS),
	            debug: debug(scopeNS),
	            NAMESPACE: scopeNS,
	            isEnabled: function isEnabled() {
	                return debug.enabled(scopeNS);
	            },
	            enable: function enable() {
	                return enableNamespace(scopeNS);
	            },
	            disable: function disable() {
	                return disableNamespace(scopeNS);
	            }
	        };
	    };
	    logger.main = debug;

	    return logger;

	    function enableNamespace(namespaceStr) {
	        var namespaces = getCurrentDebugAsSet();
	        var negativeNamespace = '-' + namespaceStr;
	        namespaces.add(namespaceStr);

	        var unique = Array.from(namespaces).filter(function (i) {
	            return i !== null && i !== '' && i != negativeNamespace;
	        });

	        debug.enable(unique.join(','));
	    }

	    function disableNamespace(namespaceStr) {
	        var namespaces = getCurrentDebugAsSet();
	        var namespaceRegexp = new RegExp('^' + namespaceStr + '$');
	        var removed = Array.from(namespaces).filter(function (i) {
	            return !namespaceRegexp.test(i);
	        });

	        if (removed.length == namespaces.size) {
	            // add negative
	            removed.push('-' + namespaceStr);
	        }

	        debug.enable(removed.join(','));
	    }

	    function getCurrentDebugAsSet() {
	        return new Set(getCurrentDebugString().split(/[\s,]+/));
	    }

	    function getCurrentDebugString() {
	        return debug.load() || '';
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {


	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(3);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {


	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(4);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (logger, PluginBase, optionsPage) {
	    var _plugins = [];
	    var log = logger('main');

	    var Module = {
	        registerPlugin: registerPlugin,
	        disablePlugin: disablePlugin,
	        enablePlugin: enablePlugin,
	        getPlugin: getPluginByName,
	        checkIfMain: CheckIfMain,
	        createMainMenu: createMainMenu
	    };

	    return Module;

	    function CheckIfMain(window) {
	        return window !== undefined && window.self === window.top && window.location.pathname === "/verse" && window.location.search === "" && (window.location.hash === "" || window.location.hash === "#/inbox");
	    }

	    function getPluginByName(pluginName) {
	        return _plugins.filter(function (i) {
	            return i.name == pluginName;
	        }).shift();
	    }

	    function getPluginName(plugin) {
	        return isFunction(plugin.name) ? plugin.name() : plugin.name;
	    }

	    function registerPlugin(plugin) {
	        log.debug("Verifying plugin");
	        verifyPlugin(plugin);

	        log.debug("Registering plugin " + getPluginName(plugin));
	        _plugins.push(plugin);

	        log.debug("Checking plugin init - " + getPluginName(plugin));
	        if (plugin.init !== undefined) {
	            log.debug("Plugin init - " + getPluginName(plugin));
	            plugin.init();
	        }
	    }

	    function isFunction(fc) {
	        return fc !== undefined && typeof fc === 'function';
	    }

	    function verifyPlugin(plugin) {
	        if (plugin instanceof PluginBase) {
	            return;
	        }
	        if (plugin.name === undefined || typeof plugin.name !== 'string') {
	            throw new TypeError("Plugin needs to have 'name' property");
	        }
	        if (!isFunction(plugin.disable)) {
	            throw new TypeError("Plugin is missing 'disable' function");
	        }
	        if (!isFunction(plugin.enable)) {
	            throw new TypeError("Plugin is missing 'enable' function");
	        }
	        if (plugin.init !== undefined && !isFunction(plugin.init)) {
	            throw new TypeError("Plugin 'init' needs to be a function");
	        }
	    }

	    function disablePlugin(pluginName) {
	        _plugins.filter(function (i) {
	            return i.name == pluginName;
	        }).map(function (i) {
	            return i.disable();
	        });
	    }

	    function enablePlugin(pluginName) {
	        _plugins.filter(function (i) {
	            return i.name == pluginName;
	        }).map(function (i) {
	            return i.enable();
	        });
	    }

	    function createMainMenu() {
	        optionsPage.createMainMenu(_plugins);
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7), __webpack_require__(10), __webpack_require__(1), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (optionsPage, configPage, createLogger, storageOps) {

		return function () {
			function PluginBase(pluginName, enabledByDefault, description) {
				var configuration = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

				_classCallCheck(this, PluginBase);

				this.name = pluginName;
				this.log = createLogger(pluginName);
				this.ID = 'AVE_' + pluginName;
				this.enabledByDefault = enabledByDefault;
				this.description = description;
				this.reloadRequired = false;
				this.configuration = configuration;
				this.hasConfiguration = Object.keys(configuration).length;
			}

			_createClass(PluginBase, [{
				key: 'isEnabled',
				value: function isEnabled() {}
			}, {
				key: 'toggleEnabled',
				value: function toggleEnabled() {
					if (this.isEnabled()) {
						this.disable();
					} else {
						this.enable();
					}
				}
			}, {
				key: 'init',
				value: function init() {
					this.log.debug('Init plugin', this.name);
					var s = storageOps.load(this.name);
					this.log.debug('Received : \'' + s + '\' from storage. By default enabled = ' + this.enabledByDefault);
					if (s == '1' || s === undefined && this.enabledByDefault) {
						this.enable();
					}
				}
			}, {
				key: 'enable',
				value: function enable() {
					this.sendAnalytics(this.name, 'enabled');
					this.log.debug('Enabling plugin', this.name);
					if (!this.isEnabled()) {
						storageOps.save(this.name, '1');
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					this.log.debug('Disabling plugin', this.name);
					storageOps.save(this.name, '0');
				}
			}, {
				key: 'reload',
				value: function reload() {
					this.disable();
					this.enable();
				}
			}, {
				key: 'getOptionsPageElement',
				value: function getOptionsPageElement() {
					return optionsPage.createPluginOptionsPageElement(this);
				}
			}, {
				key: 'isReloadRequired',
				value: function isReloadRequired() {
					this.log.debug('Checking reload required: ', this.reloadRequired);
					return this.reloadRequired;
				}
			}, {
				key: 'sendAnalytics',
				value: function sendAnalytics(name, action) {
					try {
						// eval to run in page context
						window.eval('newrelic.addPageAction(\'Agile-Verse-Feature: ' + name + ' ' + action + '\', {\n\t\t\t\t\textension: \'Agile Verse\',\n\t\t\t\t\tbrowser: navigator.userAgent,\n\t\t\t\t\tfeature: \'' + name + '\'\n\t\t\t\t});');
						this.log.debug('New Relic data sent');
					} catch (error) {
						this.log.error('Error accessing unsafe window %O', error);
					}
				}
			}]);

			return PluginBase;
		}();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(1), __webpack_require__(9), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, createLogger, waitForElement, configPage) {

	    var log = createLogger('optionsPage');
	    var debugModule = createLogger.main;
	    var config = configPage;

	    var SETTINGS_PAGE_ID = 'AVE_Settings_Page';
	    var SETTINGS_RELOAD_WARNING_ID = 'AVE_Settings_Message';

	    var pluginDebugReloadRequired = false;
	    var pluginsReloadRequired = new Map();

	    return {
	        createMainMenu: waitToCreateMenu,
	        createPluginOptionsPageElement: createPluginOptionsPageElement
	    };

	    function getOptionsPages(plugins) {
	        return plugins.slice(0).sort(function (p1, p2) {
	            return p1.name.localeCompare(p2.name);
	        }).map(function (p) {
	            return p.getOptionsPageElement();
	        }).filter(function (i) {
	            return i !== undefined && i !== null;
	        });
	    }

	    function waitToCreateMenu(plugins) {
	        waitForElement('div#bss-usersMenu > ul > li.logout', createMainMenuHtml.bind(undefined, plugins));
	    }

	    function createMainMenuHtml(plugins) {
	        var SETTINGS_BUTTON_ID = 'AVE_Settings_Button';

	        $('div#bss-usersMenu > ul').prepend('<li>\n            <a id="' + SETTINGS_BUTTON_ID + '" role="menuitem" tabindex="0" class="ignoreFocus">AgileVerse Extension Settings</a>\n        </li>');

	        addCSSStyle();

	        createOptionsHtml(plugins);

	        config.createConfigPage('#' + ('' + SETTINGS_PAGE_ID));

	        $('#' + SETTINGS_BUTTON_ID).click(function showOptionsPage() {
	            $('#' + SETTINGS_PAGE_ID).show();
	        });
	    }

	    function createOptionsHtml(plugins) {
	        var container = $(getContainerHtml());

	        container.find('.plugins').append(getOptionsPages(plugins));

	        container.find('#AVE_Options_Done').on('click', function hideOptions() {
	            $('#' + SETTINGS_PAGE_ID).hide();
	        });

	        container.find('#AVE_options-debug').on('click', function toggleDebug() {
	            if (this.checked) {
	                container.find('.plugins input:checkbox.AVE-debug:not(:checked)').click();
	                debugModule.enable('*');
	            } else {
	                container.find('.plugins input:checkbox.AVE-debug:checked').click();
	                debugModule.disable();
	            }
	        });

	        container.appendTo(document.body);
	    }

	    function getContainerHtml() {
	        return '<div id="' + SETTINGS_PAGE_ID + '" style="">\n            <div id="AVE_Options_Main">\n                <div class="AVE_Options_Head">\n                    <div class="AVE_Options_Img">\n                        <img src="https://apps.na.collabserv.com/communities/service/html/image?communityUuid=14ccb823-6af1-4a93-b593-e113f29f5581&lastMod=1457959880259&showDefaultForNoPermissions=true" />\n                    </div>\n                    <div class="AVE_Options_Title">\n                        <span>AgileVerse Extension Settings</span>\n                    </div>\n                </div>\n                <div class="AVE_Options_Plugins">\n                    <table class="plugins">\n                        <tr>\n                            <th>\n                                <span>ON | OFF</span>\n                            </th>\n                            <th>\n                                <span>Module name - module description</span>\n                            </th>\n                            <th>\n                            </th>\n                            <th>\n                                <span></span>\n                            </th>\n                        </tr>\n                    </table>\n                </div>\n                <div class="AVE_Options_Footer">\n                    <button id="AVE_Options_Done">CLOSE</button>\n                    <span id="' + SETTINGS_RELOAD_WARNING_ID + '" style="display: none;">IBM Verse page reload required!</span>\n                    <div class="AVE_Options_Version">\n                        <span>v' + ("5.1.0") + ' - b' + (1497609853314) + '</span>\n                        <input type="checkbox" id="AVE_options-debug"' + (debugModule.enabled('all_enabled') ? ' checked="checked"' : '') + ' title="Toggle all modules debugging (please refresh page afterwards)"/>\n                    </div>\n                </div>\n            </div>\n\n        </div>';
	    }

	    function addCSSStyle() {
	        $('head').prepend('\n            <style type="text/css" id="AVE_Options_CSS">\n                .onoffswitch {position: relative; width: 60px; -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;}\n                .onoffswitch-checkbox {display: none;}\n                .onoffswitch-label {display: block; overflow: hidden; cursor: pointer; border: none; border-radius: 50px;}\n                .onoffswitch-inner {display: block; width: 200%; margin-left: -100%; transition: margin 0.3s ease-in 0s;}\n                .onoffswitch-inner:before, .onoffswitch-inner:after {display: block; float: left; width: 50%; height: 16px; padding: 0; line-height: 16px; font-size: 12px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold; box-sizing: border-box;}\n                .onoffswitch-inner:before {content: "ON"; padding-left: 10px; background-color: #859900; color: #FFFFFF;}\n                .onoffswitch-inner:after {content: "OFF"; padding-right: 10px; background-color: #ff5050; color: #FFFFFF; text-align: right;}\n                .onoffswitch-switch { display: block; width: 12px; margin: 2px; background: #FFFFFF; position: absolute; top: 0; bottom: 0; right: 40px; border: 2px solid #FFFFFF; border-radius: 50px; transition: all 0.3s ease-in 0s;}\n                .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {margin-left: 0;}\n                .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {right: 0px;}\n                .onoffswitch.disabled .onoffswitch-inner::before, .onoffswitch.disabled .onoffswitch-inner::after {background-color: #eee; !important;}\n\n                #' + SETTINGS_PAGE_ID + ' {width: 900px; height: 600px; position: absolute; left: 50%; margin-left: -460px; top: 50%; margin-top: -310px; z-index: 1000; background: white; min-height: 200px; display:none; box-shadow: 0px 0px 10px 1px #555;}\n                #' + SETTINGS_PAGE_ID + ' hr {border-width: 1px 0px 0px 0px; border-color: #eee; border-style: solid; margin: 0px;}\n                .AVE_Options_Head {height: 125px; box-shadow: 0px 30px 40px -40px rgba(0, 0, 0, 0.2);}\n                .AVE_Options_Footer {background-color: #333; height: 30px; padding: 10px 20px;}\n                .AVE_Options_Footer button {transition: 0.2s; background-color: #333; height: 30px; border: 2px solid white; font-weight: bold; font-size: 10px; padding: 5px 10px; color: white;}\n                .AVE_Options_Footer button:hover {background-color: white; color: #333; cursor: pointer; }\n                #' + SETTINGS_RELOAD_WARNING_ID + ' {color: #ff5050; padding-left: 10px; font-weight: bold;}\n                #AVE_options-debug {height: 10px; vertical-align: middle;}\n                .AVE_Options_Img {height: 100px; width: 100px; position: absolute; left: 20px; top: 20px; border: solid 2px white;}\n                .AVE_Options_Img img {height: 100px; width: 100px;}\n                .AVE_Options_Plugins {clear: left; padding: 10px; height: 405px; overflow-y: auto;}\n                .AVE_Options_Plugins > table {width: 100%; border-collapse: collapse;}\n                .AVE_Options_Plugins tr:hover {background-color: #F0F0F0;}\n                .AVE_Options_Plugins tr th:nth-child(1) {text-align: center;}\n                .AVE_Options_Plugins tr th:not(:nth-child(1)) {text-align: left;}\n                .AVE_Options_Title {padding: 20px; font-size: 30px; font-weight: bold; text-align: center; background-color: #333; color: white;}\n                .AVE_Options_Switch > div {margin: auto;}\n                .AVE_Options_Version { float: right; font-size: smaller; color: white; }\n                .AVE_Options_Config_Enabled svg {fill: #333;}\n                .AVE_Options_Config_Enabled svg:hover {fill: #ff5050; cursor: pointer;}\n                .AVE_Options_Config_Disabled svg {fill: #BBB; cursor: no-drop;}\n            </style>\n        ');
	    }

	    function reloadCheck() {
	        if (pluginDebugReloadRequired || pluginsReloadRequired.size > 0) {
	            $('#' + SETTINGS_RELOAD_WARNING_ID).show();
	        }

	        if (!pluginDebugReloadRequired && pluginsReloadRequired.size == 0) {
	            $('#' + SETTINGS_RELOAD_WARNING_ID).hide();
	        }
	    }

	    function createPluginOptionsPageElement(plugin) {
	        var id = plugin.ID + '_switch';
	        var el = $('\n            <tr><td colspan="4"><hr/></td></tr>\n            <tr>\n                <td class="AVE_Options_Switch">\n                    <div class="onoffswitch">\n                        <input id="' + id + '" type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"' + (plugin.isEnabled() ? ' checked="checked" value="ON"' : 'value="OFF"') + '>\n                        <label class="onoffswitch-label" for="' + id + '">\n                            <span class="onoffswitch-inner"></span>\n                            <span class="onoffswitch-switch"></span>\n                        </label>\n                    </div>\n                </td>\n                <td class="AVE_Options_Description">\n                    <span><b>' + plugin.name + '</b> - ' + plugin.description + '</span>\n                </td>\n                <td class="AVE_Options_Debug">\n                    <span>\n                        <input id="' + plugin.ID + '_debug" class="AVE-debug" type="checkbox"' + (plugin.log.isEnabled() ? ' checked="checked" value="ON"' : 'value="OFF"') + ' title="Toggle debugging for this module only (please refresh page afterwards)"/>\n                    </span>\n                </td>\n                <td ' + (plugin.hasConfiguration ? 'class="AVE_Options_Config_Enabled" title="Open configuration of this module"' : 'class="AVE_Options_Config_Disabled" title="This module cannot be configured"') + '>\n                    <span>\n                        <svg id="' + plugin.ID + '_Config" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 268.765 268.765" style="enable-background:new 0 0 268.765 268.765;" xml:space="preserve" width="18px" height="18px">\n                            <g>\n                                    <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z"/>\n                            </g>\n                        </svg>\n                    </span>\n                </td>\n            </tr>\n        ');

	        $('#' + id, el).on('click', switchClickHandler.bind(undefined, plugin));

	        $('#' + plugin.ID + '_debug', el).on('click', function debugSwitch() {
	            debugSwitchHandler(plugin, this);
	        });
	        if (plugin.hasConfiguration) {
	            $('#' + plugin.ID + '_Config', el).on('click', function () {
	                config.getConfig(plugin);
	            });
	        }

	        return el;
	    }

	    function switchClickHandler(plugin) {
	        plugin.toggleEnabled();

	        if (plugin.isReloadRequired()) {
	            pluginsReloadRequired.set(plugin.name, true);
	        } else {
	            pluginsReloadRequired.delete(plugin.name);
	        }

	        reloadCheck();
	    }

	    function debugSwitchHandler(plugin, element) {
	        if (element.checked) {
	            plugin.log.enable();
	        } else {
	            plugin.log.disable();
	        }
	        pluginDebugReloadRequired = true;
	        reloadCheck();
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {

	    function waitForElement(selector, callback, interval) {
	        var s = $(selector);
	        if (s.length) {
	            callback(s);
	        } else {
	            interval = interval || 300;
	            setTimeout(waitForElement, interval, selector, callback, interval);
	        }
	    }

	    return waitForElement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(1), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, createLogger, conf) {

		var log = createLogger('configPage');
		var CONFIG_PAGE_ID = 'AVE_Configure_Main';

		return {
			createConfigPage: createConfigPage,
			createConfigPageElements: createConfigPageElements,
			getConfig: getConfig
		};

		function createConfigPage(main) {
			log.debug('creating config page');
			addConfigCSSStyle();
			addHTMLElement(main);
		}

		function getConfig(plugin) {
			$('#AVE_Configure_Close').on('click', function () {
				log.debug('Clicked CLOSE');
				finishConfig(plugin, false);
			});

			$('#AVE_Configure_Apply').prop('disabled', true);
			//load config from plugin
			$('#' + CONFIG_PAGE_ID).attr('plugin', plugin.name);
			$('#' + CONFIG_PAGE_ID + ' .AVE_Configure_Title').text(plugin.name + ' - Configuration');
			$('#' + CONFIG_PAGE_ID).removeClass('AVE_Configure_Hidden');

			log.debug('loading configuration items from plugin');
			var confObjects = plugin.configuration;
			var bundle = plugin.configuration.bundle == true;
			log.debug(confObjects);
			log.debug("Bundled? ", bundle);
			if (!bundle) {
				log.debug("Bundled? NO");
				for (var item in confObjects) {
					log.debug(confObjects[item]);
					//log.debug(confObjects[item].element());
					log.debug('Getting configuration item elements');
					//log.debug(confObjects[item].element(item));
					var el = conf.getConfigElement(confObjects[item]);
					$('#' + CONFIG_PAGE_ID + ' .AVE_Configure_Plugin').append(el);
					$('#' + confObjects[item].storageName).data('config', confObjects[item]).attr('data', 'true');
				}
			} else if (bundle) {
				log.debug("Bundled? YES");
				var counter = 0;
				var confID = 'AVE_configBundle';
				for (var b in confObjects) {
					if (_typeof(confObjects[b]) == 'object') {
						counter++;
						log.debug(confObjects[b]);
						var _el = document.createElement("div");
						_el.setAttribute('ID', confID + counter);
						//el.classList.add('AVE_configBundle');
						$('#' + CONFIG_PAGE_ID + ' .AVE_Configure_Plugin').append(_el);
						var root = $('#' + CONFIG_PAGE_ID + ' .AVE_Configure_Plugin #' + (confID + counter));
						for (var s in confObjects[b]) {
							log.debug('Getting configuration item elements');
							root.append(conf.getConfigElement(confObjects[b][s]));
							$('#' + confObjects[b][s].storageName).data('config', confObjects[b][s]).attr('data', 'true');
						}
					}
				}
			} else {
				log.debug("Cannot recognize configuration object type!");
			}

			$('#AVE_Configure_Apply').on('click', function () {
				log.debug('Clicked APPLY');
				finishConfig(plugin, true);
			});

			$('#AVE_Configure_Reset').on('click', function () {
				log.debug('Clicked RESET');
				resetToDefault(plugin);
				closeConfiguration();
			});

			$('#AVE_Configure_Apply').prop('disabled', false);
		}

		function finishConfig(plugin, save) {
			var valid = true;
			log.debug('Finishing with configuration');
			if (save) {
				valid = validateInput();
			}
			log.debug('Save: ' + save + ' ; valid : ' + valid);
			if (save && valid) {
				log.debug('Input check passed. Applying and saving configuration of ' + plugin.name);
				saveInput(plugin);
			} else if (save && !valid) {
				log.debug('Input check failed! Correction needed');
			} else {
				closeConfiguration();
			}
		}

		function closeConfiguration() {
			log.debug('Closing configuration');
			$('#' + CONFIG_PAGE_ID).addClass('AVE_Configure_Hidden');
			$('.AVE_Configure_Title, .AVE_Configure_Plugin').empty();
			$('#' + CONFIG_PAGE_ID).attr('plugin', '');
			$('#AVE_Configure_Apply, #AVE_Configure_Close, #AVE_Configure_Reset').off('click');
		}

		function validateInput() {
			var result = true;
			log.debug('Validating configuration inputs');
			$('.AVE_Configure_Plugin div input, .AVE_Configure_Plugin div select').each(function () {
				log.debug(this);
				var v = void 0;
				var t = void 0;
				if ($(this).attr('type') == 'checkbox') {
					v = $(this).prop('checked');
					t = $(this).data().config.validation;
				} else {
					try {
						v = $(this).val();
						t = $(this).closest('[data="true"]').data().config.validation;
					} catch (e) {
						log.error(e);
					}
				}
				log.debug("Value ", v);
				log.debug("Validator ", t);
				if (t.test(v)) {
					log.debug('Value "' + v + '" passed test of regexp "' + t + '"');
					$(this).removeClass('AVE_Configure_Error').addClass('AVE_Configure_Success');
				} else {
					log.debug(v + ' is incorrect input, please make correction of your input');
					result = false;
					$(this).removeClass('AVE_Configure_Success').addClass('AVE_Configure_Error');
				}
			});
			return result;
		}

		function saveInput(plugin) {
			log.debug('Saving plugin ', plugin);
			$('.AVE_Configure_Plugin div input, .AVE_Configure_Plugin div select').each(function () {
				log.debug(this);
				var v = void 0;
				var n = void 0;
				if ($(this).attr('type') == 'checkbox') {
					v = $(this).prop('checked');
					n = $(this).data().config;
				} else {
					try {
						v = $(this).val();
						n = $(this).closest('[data="true"]').data().config;
					} catch (e) {
						log.error(e);
					}
				}
				log.debug('Saving value ', v);
				log.debug('Saving to object ', n);
				conf.saveValue(n, v);
			});
			plugin.reload();
		}

		function resetToDefault(plugin) {
			if (plugin.configuration.bundle == true) {
				for (var i in plugin.configuration) {
					if (_typeof(plugin.configuration[i]) == 'object') {
						for (var c in plugin.configuration[i]) {
							plugin.configuration[i][c].resetToDefault();
						}
					}
				}
			} else {
				for (var _c in plugin.configuration) {
					plugin.configuration[_c].resetToDefault();
				}
			}
			plugin.reload();
		}

		function addConfigCSSStyle() {
			log.debug('adding CSS of config page');
			$('head').prepend('\n\t\t\t<style type="text/css" id="AVE_Config_CSS">\n\t\t\t\t#' + CONFIG_PAGE_ID + ', #AVE_Options_Main {position: absolute; width: 100%; height: 100%;}\n\t\t\t\t#' + CONFIG_PAGE_ID + ' {box-shadow: 0px 0px 10px 1px #333; margin: 20px 0px 0px 20px; background-color: white;}\n\t\t\t\t.AVE_Configure_Head {height: 60px; background-color: #eee; overflow: hidden; border-bottom: 1px solid #CCCCCC;}\n\t\t\t\t.AVE_Configure_Title {font-size: 25px; font-weight: bold; text-align: center; padding: 15px; height: 30px; color: #333;}\n\t\t\t\t.AVE_Configure_Plugin {height: calc(100% - 60px - 50px - 40px); overflow-y: auto; margin: 20px 0px;}\n\t\t\t\t.AVE_Configure_Footer {background-color: #eee; height: 30px; padding: 10px 20px; border-top: 1px solid #CCCCCC;}\n\t\t\t\t.AVE_Configure_Footer button {transition: 0.2s; background-color: #eee; height: 30px; border: 2px solid #333; font-weight: bold; font-size: 10px; padding: 5px 10px; color: #333;}\n\t\t\t\t.AVE_Configure_Footer button:hover:not(:disabled) {background-color: #333; color: #eee; cursor: pointer;}\n\t\t\t\t.AVE_Configure_Footer #AVE_Configure_Reset {float: right;}\n\t\t\t\t.AVE_Configure_Footer #AVE_Configure_Reset:hover {background-color: #F00; color: #eee; cursor: pointer;}\n\t\t\t\t.AVE_Configure_Footer button:disabled {border-color: #999; color: #999;}\n\t\t\t\t.AVE_Configure_Footer button:disabled:hover {cursor: not-allowed;}\n\t\t\t\t.AVE_Configure_Hidden {display: none;}\n\n\t\t\t\t.AVE_Configure_Plugin > div {padding: 10px 40px 5px; color: #777; display:block; border-bottom: 1px solid #CCCCCC;}\n\t\t\t\t.AVE_Configure_Plugin > div:nth-of-type(1) {border-top: 1px solid #CCCCCC;}\n\t\t\t\t.AVE_Configure_Plugin > div:hover {background-color: #EEEEEE;}\n\t\t\t\t.AVE_Configure_Plugin > div span:nth-of-type(1) {font-weight: bold; font-size: 16px; left: 20px; vertical-align: middle; position: relative; color: #555;}\n\t\t\t\t.AVE_Configure_Plugin > div span:nth-of-type(2) {display: block; margin-top: 5px;}\n\t\t\t\t.AVE_Configure_Plugin > div input:not([type="checkbox"]), .AVE_Configure_Plugin > div select {\n\t\t\t\t\tborder: 1px solid #AAA;\n\t\t\t\t\tpadding: 3px 10px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\twidth: 90px;\n\t\t\t\t\tcolor: #555;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tbox-sizing: content-box;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Plugin > div select > option {\n\t\t\t\t\ttext-align: left;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Plugin input[type="checkbox"] {\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Plugin input[type="checkbox"]:not(:checked) ~div {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Plugin > div > div:first-of-type {\n  \t\t\t\t\tmargin-top: 10px;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Plugin > div > div {\n  \t\t\t\t\tpadding: 5px 10px;\n\t\t\t\t\tborder-top: solid 1px #DDD;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Plugin > div > div:hover {\n\t\t\t\t\tbackground-color: #F9F9F9;\n\t\t\t\t}\n\t\t\t\t.AVE_Configure_Error select, .AVE_Configure_Error input{box-shadow: 0 0 3px 2px #F00;}\n\t\t\t\t.AVE_Configure_Success select, .AVE_Configure_Success input {}\n\t\t\t</style>\n\t\t');
		}

		function addHTMLElement(main) {
			log.debug('adding HTML of config page into ' + main);
			$(main).append('\n\t\t\t<div id="' + CONFIG_PAGE_ID + '" class="AVE_Configure_Hidden" plugin="">\n\t\t\t\t<div class="AVE_Configure_Head">\n\t\t\t\t\t<div class="AVE_Configure_Title">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="AVE_Configure_Plugin">\n\t\t\t\t</div>\n\t\t\t\t<div class="AVE_Configure_Footer">\n\t\t\t\t\t<button id="AVE_Configure_Apply">APPLY</button>\n\t\t\t\t\t<button id="AVE_Configure_Close">CLOSE</button>\n\t\t\t\t\t<button id="AVE_Configure_Reset">RESET TO DEFAULT</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t');
		}

		function createConfigPageElements(plugin) {}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(8), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (createLogger, $, storageOps) {
	    var name = "PluginConf";
	    var STORAGE_NAME = "PluginConf";
	    var storage = storageOps.getNamespace(STORAGE_NAME);
	    var log = createLogger(name);

	    var configType = {
	        color: {
	            validation: /#([a-f0-9]{3}){1,2}\b/i,
	            defaultDescription: "Choose desired color to be used",
	            elementType: "color",
	            elementMaxLength: 7,
	            CSS: "AVE_Configuration_Color"
	        },
	        select: {
	            validation: /.*/,
	            defaultDescription: "Select required setting from dropdown",
	            CSS: "AVE_Configuration_Dropdown"
	        },
	        padding: {
	            validation: /^[1-9][0-9]$|^[0-9]$/m,
	            defaultDescription: "Select amount of additional blank space in pixels you want to see for visual adjustment of element size. Only numbers in range 0-99",
	            elementType: "number",
	            elementMin: "0",
	            elementMax: "99",
	            CSS: "AVE_Configuration_Padding"
	        },
	        height: {
	            validation: /^[1-4][0-9][0-9]$|^[1-9][0-9]$|^[1-9]$/m,
	            defaultDescription: "Select height of this element in pixels you want to have",
	            elementType: "number",
	            elementMin: "1",
	            elementMax: "499",
	            CSS: "AVE_Configuration_Height"
	        },
	        width: {
	            validation: /^[1-4][0-9][0-9]$|^[1-9][0-9]$|^[1-9]$/m,
	            defaultDescription: "Select width of this element in pixels you want to have",
	            elementType: "number",
	            elementMin: "1",
	            elementMax: "499",
	            CSS: "AVE_Configuration_Width"
	        },
	        time: {
	            validation: /^[1-9][0-9]$|^[0-9]$/m,
	            defaultDescription: "Select amount of minutes you would like to set",
	            elementType: "number",
	            elementMin: "0",
	            elementMax: "99",
	            CSS: "AVE_Configuration_Time"
	        },
	        number: {
	            validation: /\d+/,
	            defaultDescription: '',
	            elementType: "number",
	            elementMin: "0",
	            elementMax: "99",
	            CSS: "AVE_Configuration_Number"
	        },
	        text: {
	            validation: /.*/,
	            defaultDescription: '',
	            elementType: 'text',
	            CSS: 'AVE_Configuration_Text'
	        },
	        percent: {
	            validation: /^[1-9][0-9]$|^[0-9]$|^100$|^[1-9][0-9]%$|^[0-9]%$|^100%$/m,
	            defaultDescription: "Provide amount of percent to reposition affected element",
	            elementType: "number",
	            elementMin: "0",
	            elementMax: "100",
	            CSS: "AVE_Configuration_Percent"
	        },
	        checkbox: {
	            validation: /.*/,
	            defaultDescription: 'Enable or disable this plugin adjustment',
	            elementType: 'checkbox',
	            CSS: 'AVE_Configuration_Checkbox'
	        }
	    };

	    var api = {
	        getConfigObj: getConfigObj,
	        loadValue: loadValue,
	        saveValue: saveValue,
	        configType: configType,
	        getConfigElement: getConfigElement
	    };

	    return api;

	    function getConfigObj(pluginName, name, type, defaultValue) {
	        var description = arguments.length <= 4 || arguments[4] === undefined ? configType[type].defaultDescription : arguments[4];
	        var validation = arguments.length <= 5 || arguments[5] === undefined ? configType[type].validation : arguments[5];

	        log.debug("type: " + type);

	        var obj = {
	            name: name,
	            nameUI: getNameUI(name),
	            description: description,
	            type: type,
	            value: defaultValue,
	            defaultValue: defaultValue,
	            options: [],
	            resetToDefault: function resetToDefault() {
	                this.value = this.defaultValue;saveValue(this);
	            },
	            validation: validation,
	            storageName: pluginName + "-" + name,
	            element: {
	                elementType: configType[type].elementType,
	                elementMaxLength: configType[type].elementMaxLength,
	                elementMin: configType[type].elementMin,
	                elementMax: configType[type].elementMax
	            }
	        };

	        if (obj.type == "select") {
	            log.debug("Select type detected");
	            var d = obj.defaultValue["default"];
	            var o = obj.defaultValue["options"];
	            obj.defaultValue = d;
	            obj.options = o;
	            log.debug("Default: " + d);
	            log.debug(o);
	        }

	        obj.value = loadValue(obj);
	        saveValue(obj);
	        log.debug("Configuration Object: ", obj);
	        return obj;
	    }

	    function loadValue(obj) {
	        log.debug("Loading config for " + obj.storageName + " from storage");
	        var v = storage.load(obj.storageName);
	        if (v === undefined || v === null || v === "") {
	            log.debug("No value loaded from storage, thus leaving default");
	            return obj.defaultValue;
	        } else {
	            log.debug("Value loaded from storage is : " + v);
	            if (configType[obj.type].validation.test(v)) {
	                log.debug("String is valid");
	            } else {
	                log.debug("String is NOT valid");
	            }
	            return v;
	        }
	    }

	    function saveValue(obj) {
	        var value = arguments.length <= 1 || arguments[1] === undefined ? obj.value : arguments[1];

	        log.debug("Saving value " + value + " to storage for " + obj.storageName);
	        obj.value = value;
	        storage.save(obj.storageName, value);
	    }

	    function validateValue(obj, newValue) {
	        return configType[obj.type].validation.test(newValue);
	    }

	    function changeValue(obj, newValue) {}

	    function getNameUI(name) {
	        return name.split('_').join(' ');
	    }

	    function getOptionsElement(obj) {
	        log.debug("Getting options element");
	        var el = '';
	        log.debug("Value: " + obj.value);
	        for (var o = 0; o < obj.options.length; o++) {
	            log.debug("Option: " + obj.options[o]);
	            el += '<option value="' + obj.options[o] + '" ' + (obj.options[o] == obj.value ? ' selected="selected"' : '') + '>' + obj.options[o] + '</option>';
	        }
	        return el;
	    }

	    function getConfigElement(obj) {
	        log.debug("Generating configuration element");
	        var el = void 0;
	        if (obj.type == "select") {
	            log.debug("Obj is select", obj);
	            el = '\n                <div id="' + obj.storageName + '" class="' + configType[obj.type].CSS + '">\n                    <select>\n                        ' + getOptionsElement(obj) + '\n                    </select>\n                    <span>' + obj.nameUI + '</span><span>' + obj.description + '</span>\n                </div>\n            ';
	        } else if (obj.type == "checkbox") {
	            log.debug("Obj is checkbox ", obj);
	            el = '\n                <input id="' + obj.storageName + '" type="' + obj.element.elementType + '" class="' + configType[obj.type].CSS + '" ' + (obj.value ? 'checked="checked"' : '') + '>\n                <span>' + obj.nameUI + '</span><span>' + obj.description + '</span>\n            ';
	        } else {
	            el = '\n                <div id="' + obj.storageName + '" class="' + configType[obj.type].CSS + '">\n                    <input type="' + obj.element.elementType + '" ' + (obj.element.elementMaxLength ? 'maxlength="' + obj.element.elementMaxLength + '"' : '') + ' ' + (obj.element.elementMin ? 'min="' + obj.element.elementMin + '"' : '') + ' ' + (obj.element.elementMax ? 'max="' + obj.element.elementMax + '"' : '') + ' value="' + obj.value + '">\n                    <span>' + obj.nameUI + '</span><span>' + obj.description + '</span>\n                </div>\n            ';
	        }
	        log.debug("Returning configuration element: ", el);
	        return el;
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (createLogger) {
	    var storageKey = "AVE";
	    var configKey = "Configuration";
	    var log = createLogger("StorageOps");
	    return {
	        save: namespaceSave(configKey),
	        load: namespaceLoad(configKey),
	        clear: namespaceClear(configKey),
	        getAllConfigs: namespaceGetAll(configKey),
	        getNamespace: getNamespace
	    };

	    function getNamespace(name) {
	        return {
	            save: namespaceSave(name),
	            load: namespaceLoad(name),
	            clear: namespaceClear(name)
	        };
	    }

	    function createNamespaceStr(name) {
	        return (storageKey + "_" + name).replace(/_$/, "");
	    }

	    function namespaceSave(name) {
	        return save.bind(undefined, createNamespaceStr(name));
	    }

	    function namespaceLoad(name) {
	        return load.bind(undefined, createNamespaceStr(name));
	    }

	    function namespaceClear(name) {
	        return clear.bind(undefined, createNamespaceStr(name));
	    }

	    function namespaceGetAll(name) {
	        return getAll.bind(undefined, createNamespaceStr(name));
	    }

	    function load(prefix, _item) {
	        log.debug("Loading item '" + _item + "' from '" + prefix + "'");
	        try {
	            var tempObj = storageLoad(prefix);
	            log.debug(tempObj[_item]);
	            return tempObj[_item];
	        } catch (e) {
	            log.error(e);
	        }
	        log.debug("Safety net - return undefined");
	        return undefined;
	    }

	    function getAll(prefix) {
	        log.debug("Loading all items for '" + prefix + "'");
	        try {
	            return storageLoad(prefix);
	        } catch (e) {
	            log.error(e);
	        }
	        log.debug("Safety net - return empty obj");
	        return {};
	    }

	    function save(prefix, _item, _value) {
	        log.debug("Saving item '" + _item + "' into '" + prefix + "'");
	        try {
	            var tempObj = storageLoad(prefix);
	            tempObj[_item] = _value;
	            storageSave(prefix, tempObj);
	        } catch (e) {
	            log.error(e);
	        }
	    }

	    function clear(prefix, _item) {
	        try {
	            var tempObj = {};
	            if (_item === undefined) {
	                log.debug("Deleting all items");
	            } else {
	                log.debug("Deleting item '" + _item + "' from '" + prefix + "'");
	                tempObj = storageLoad(prefix);
	                delete tempObj[_item];
	            }
	            storageSave(prefix, tempObj);
	        } catch (e) {
	            log.error(e);
	        }
	    }

	    function checkEmpty(obj) {
	        return obj === null || obj === undefined || obj === "";
	    }

	    function storageSave(key, value) {
	        localStorage.setItem(key, JSON.stringify(value));
	    }

	    function storageLoad(prefix) {
	        var tempObj = localStorage.getItem(prefix);
	        if (checkEmpty(tempObj)) {
	            return {};
	        }
	        return JSON.parse(tempObj);
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(1), __webpack_require__(9), __webpack_require__(14), __webpack_require__(6), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, createLogger, waitForElem, StylePlugin, PluginBase, conf) {
		var name = 'FoldersCount';
		var description = 'shows number of unread mails in each folder';
		var enableByDefault = true;
		var log = createLogger(name);

		var CONST_INTERVAL = 60 * 1000;
		var CONST_TEXTCOLOR = '#dc322f';
		var CONST_TIMEOUT = 10000;
		var CONST_AVE_COUNT_CLASS = 'AVE_count_elem';
		var CONST_AVE_STYLE_CLASS = "AVE_Unread-Emails";

		var CONST_SPECIAL_FOLDERS = {
			'Inbox': '.folder-view.inbox',
			'Drafts': '.folder-view.drafts',
			'Sent': '.folder-view.sent',
			'Junk': '.folder-view.junk',
			'Trash': '.folder-view.trash'
		};

		var folderData = { 'unids': {}, 'titles': {} };
		var _foundFoldersSum = 0;
		var _enabled = false;
		var _initialized = false;

		var configuration = {
			color_main: conf.getConfigObj(name, "Folder_Color", "color", CONST_TEXTCOLOR)
		};

		var FoldersCount = function (_StylePlugin) {
			_inherits(FoldersCount, _StylePlugin);

			function FoldersCount() {
				_classCallCheck(this, FoldersCount);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(FoldersCount).call(this, name, enableByDefault, description, configuration));
			}

			_createClass(FoldersCount, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return _enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(FoldersCount.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						_enabled = true;
						waitForElem('.folder-view .folder-name', startRefreshUnreadCount);
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					_enabled = false;
					this.getStyleElement().remove();
					_get(Object.getPrototypeOf(FoldersCount.prototype), 'disable', this).call(this);
				}
			}, {
				key: 'getStyle',
				value: function getStyle() {
					return '\n\t\t\t\t.' + CONST_AVE_STYLE_CLASS + ' * {color: ' + this.configuration.color_main.value + ' !important; font-weight: bold !important;}\t\t\n\t\t\t';
				}
			}]);

			return FoldersCount;
		}(StylePlugin);

		return new FoldersCount();

		function startRefreshUnreadCount() {
			Promise.resolve(refreshUnreadCount()).catch(function (e) {
				log.error(e);
			}).then(function () {
				if (_enabled) {
					setTimeout(startRefreshUnreadCount, CONST_INTERVAL);
				}
			});
		}

		function getFoldersData() {
			return new Promise(function (resolve, reject) {
				if (_initialized) {
					resolve(folderData);
				} else {
					$.ajax({
						url: '/livemail/iNotes/Proxy/?OpenDocument&Form=OutlineData_JSON&xhr=1&sq=1&time=' + new Date().getTime(),
						timeout: CONST_TIMEOUT
					}).done(function (data) {
						storeFoldersData(data);
						_initialized = true;
						resolve(folderData);
					}).fail(function (jqXHR, textStatus, err) {
						reject(err);
					});
				}

				function storeFoldersData(data) {
					log.debug('Folder data raw', data);
					var i;
					for (i = 0; i < data.outline.outlineentry.length; i++) {
						if (data.outline.outlineentry[i]['@unid'] !== undefined) {
							folderData.titles[data.outline.outlineentry[i]['@title']] = data.outline.outlineentry[i]['@unid'];
							folderData.unids[data.outline.outlineentry[i]['@unid']] = data.outline.outlineentry[i]['@title'];
						}
					}
					log.debug('Folder data parsed', folderData);
				}
			});
		}

		function getFolderIDs() {
			return getFoldersData().then(function (data) {
				return Object.getOwnPropertyNames(data.unids).join(';');
			});
		}

		function getTitleByUnid(unid) {
			return getFoldersData().then(function (data) {
				return data.unids[unid] !== undefined ? data.unids[unid] : '';
			});
		}

		function getUnidByTitle(title) {
			return getFoldersData().then(function (data) {
				return data.titles[title] !== undefined ? data.titles[title] : '';
			});
		}

		function fetchUnreadCount(folderIDsPromise) {
			var nonce = extractNonce(document.cookie);
			return folderIDsPromise.then(function (folderIDs) {
				return new Promise(function (resolve, reject) {
					$.ajax({
						method: 'POST',
						url: '/livemail/iNotes/Proxy/?EditDocument&Form=s_GetFolderUnreadCountJSON&xhr=1&sq=1',
						data: { s_FolderListNames: 'FolderName', FolderName: folderIDs },
						headers: { 'X-IBM-INOTES-NONCE': nonce },
						contentType: 'text/plain;charset=UTF-8',
						timeout: CONST_TIMEOUT
					}).done(function (data) {
						if (data === undefined || typeof data == 'string') {
							reject(new Error('Invalid data on GetFolderUnreadCount'));
						}
						resolve(data);
					}).fail(function (error) {
						reject(error);
					});
				});
			});
		}

		function extractNonce(cookies) {
			var nonceCookie = getCookie('ShimmerS', cookies);
			var nonceObj = nonceCookie.split('&').reduce(function (carry, item) {
				var parts = item.split(':');
				if (parts.length === 2) {
					carry[parts[0]] = parts[1];
				}
				return carry;
			}, {});
			if (nonceObj.N === undefined) {
				throw new Error('Unable to extract Notes NONCE from cookies');
			}
			return nonceObj.N;
		}

		function getCookie(cname, cookies) {
			var name = cname + '=';
			var ca = cookies.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) === 0) {
					return c.substring(name.length, c.length);
				}
			}
			return '';
		}

		function refreshUnreadCount() {
			log.debug('Refreshing unread count');
			return fetchUnreadCount(getFolderIDs()).then(updateDomLabels).catch(log.error);
		}

		function updateDomLabels(unidCounts) {
			log.debug('Updating DOM Labels', unidCounts);
			_foundFoldersSum = 0;
			// prepare list of folder elements with labels
			var elems = Array.prototype.slice.call(document.querySelectorAll('.folder-view .folder-name')).map(function (el) {
				return { label: el.textContent, el: el };
			});

			Promise.all(Object.getOwnPropertyNames(unidCounts).map(function (unid) {
				return updateDomLabel(unid, unidCounts[unid], elems);
			})).then(function () {
				// ensure all docs updated last
				return updateSpecialFolders(unidCounts);
			}).then(function () {
				return updateAllDocsDom();
			}).catch(function error(e) {
				log.error('Error encountered during folder count update');
				log.error(e);
			});
		}

		function findByText(text, elem) {
			return elem.label === text;
		}

		function updateDomLabel(unid, unreadCount, folderElements) {
			log.debug('Updating DOM Label for ' + unid + ' with ' + unreadCount);
			getTitleByUnid(unid).then(function (label) {
				if (label === '') {
					log.debug('Unknown unid ', unid);
					return false;
				}
				if (CONST_SPECIAL_FOLDERS.hasOwnProperty(label)) {
					log.debug('Postpone special folder label ', label);
					return false;
				}

				var foundElement = folderElements.filter(findByText.bind(null, label)).shift();
				if (foundElement === undefined) {
					log.debug('No element found for label ', label);
					return false;
				}
				return unreadLabelToElement(foundElement.el, label, unreadCount);
			});
		}

		function unreadLabelToElement(elem, label, unreadCount) {
			log.debug('Updating element', label, unreadCount);
			if (elem === null) {
				log.debug('No element found for label ', label);
				return false;
			}
			_foundFoldersSum += unreadCount;
			if (unreadCount === 0) {
				elem.parentNode.classList.remove(CONST_AVE_STYLE_CLASS);
				removeCountElement(elem);
			} else {
				elem.parentNode.classList.add(CONST_AVE_STYLE_CLASS);
				setCountElement(elem, unreadCount);
			}
			return true;
		}

		function removeCountElement(elem) {
			var countElem = getCountElement(elem);
			if (countElem !== null) {
				elem.parentNode.removeChild(countElem);
			}
		}

		function setCountElement(elem, unreadCount) {
			var countElem = getCountElement(elem);
			if (countElem === null) {
				countElem = document.createElement('span');
				countElem.title = 'Unread count';
				countElem.classList.add(CONST_AVE_COUNT_CLASS);
				elem.parentNode.insertBefore(countElem, elem.nextElementSibling);
			}
			countElem.textContent = ' (' + unreadCount + ')';
		}

		function getCountElement(elem) {
			return elem.parentNode.querySelector('.' + CONST_AVE_COUNT_CLASS);
		}

		function updateSpecialFolders(unidCounts) {
			return Promise.all(Object.getOwnPropertyNames(CONST_SPECIAL_FOLDERS).map(function (folderName) {
				log.debug('Updating DOM label for special folder ' + folderName);
				return getUnidByTitle(folderName).then(function (unid) {
					if (unidCounts[unid] === undefined) {
						log.debug('Special folder ' + folderName + ' has no unread count defined');
						return;
					}
					var elem = document.querySelector(CONST_SPECIAL_FOLDERS[folderName] + ' .folder-name');
					unreadLabelToElement(elem, getTrimmedName(elem), unidCounts[unid]);
				});
			}));
		}

		function updateAllDocsDom() {
			log.debug('Updating DOM label for All documents');
			var elem = document.querySelector('.folder-view.all .folder-name');
			unreadLabelToElement(elem, getTrimmedName(elem), _foundFoldersSum);
			return true;
		}

		function getTrimmedName(el) {
			return el.textContent.trim();
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, PluginBase) {

	    return function (_PluginBase) {
	        _inherits(StylePlugin, _PluginBase);

	        function StylePlugin() {
	            _classCallCheck(this, StylePlugin);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(StylePlugin).apply(this, arguments));
	        }

	        _createClass(StylePlugin, [{
	            key: 'getStyleElement',
	            value: function getStyleElement() {
	                return $('#' + this.ID);
	            }
	        }, {
	            key: 'isEnabled',
	            value: function isEnabled() {
	                return this.getStyleElement().length > 0;
	            }
	        }, {
	            key: 'enable',
	            value: function enable() {
	                _get(Object.getPrototypeOf(StylePlugin.prototype), 'enable', this).call(this);
	                if (!this.isEnabled()) {
	                    this.createStyleElement();
	                }
	            }
	        }, {
	            key: 'reload',
	            value: function reload() {
	                this.getStyleElement().remove();
	                this.createStyleElement();
	            }
	        }, {
	            key: 'disable',
	            value: function disable() {
	                this.getStyleElement().remove();
	                _get(Object.getPrototypeOf(StylePlugin.prototype), 'disable', this).call(this);
	            }
	        }, {
	            key: 'createStyleElement',
	            value: function createStyleElement() {
	                $('head').prepend('<style type="text/css" id="' + this.ID + '">' + this.getStyle() + '</style>');
	            }
	        }, {
	            key: 'getStyle',
	            value: function getStyle() {
	                return '';
	            }
	        }]);

	        return StylePlugin;
	    }(PluginBase);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(9), __webpack_require__(12), __webpack_require__(1), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, waitForElem, storageOps, createLogger, StylePlugin) {
	    var name = "Initials";
	    var description = "provides possibility to edit initials of frequent/favorite contacts";
	    var enableByDefault = true;
	    var storage = storageOps.getNamespace(name);
	    var log = createLogger(name);
	    var minFontSize = 8;

	    var Initials = function (_StylePlugin) {
	        _inherits(Initials, _StylePlugin);

	        function Initials() {
	            _classCallCheck(this, Initials);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(Initials).call(this, name, enableByDefault, description));
	        }

	        _createClass(Initials, [{
	            key: 'enable',
	            value: function enable() {
	                if (!this.isEnabled()) {
	                    waitForElem('div[data-dojo-attach-point="suggestedSets"] div.ic-bizcard-section1 > button:visible', delayInitials);
	                }
	                _get(Object.getPrototypeOf(Initials.prototype), 'enable', this).call(this);
	            }
	        }, {
	            key: 'getStyle',
	            value: function getStyle() {
	                return '.AVE-Edit-Initials {left: -14px; top: -7px;}\n                .AVE-Edit-Initials svg {width: 12px !important; height: 12px !important; left: 6px !important; top: 6px !important;}\n                /* .people-set .initials {font-size: 14px !important; font-weight: 600 !important;} */\n                .actions-open .AVE-Edit-Initials {visibility: hidden;}';
	            }
	        }, {
	            key: 'disable',
	            value: function disable() {
	                if (this.isEnabled()) {
	                    this.reloadRequired = true;
	                }
	                $("button.AVE-Edit-Initials").remove();
	                _get(Object.getPrototypeOf(Initials.prototype), 'disable', this).call(this);
	            }
	        }]);

	        return Initials;
	    }(StylePlugin);

	    return new Initials();

	    function delayInitials() {
	        setTimeout(addEditInitials, 3000);
	    }

	    function createInitialsElement(root) {
	        root.find('[data-dojo-attach-point="initials"]').remove();
	        root.find('.avatar-svg:visible').hide();
	        if (root.find('[AVE="initials"]').length == 0) {
	            root.prepend('<span AVE="initials"></span>');
	        }
	    }

	    //EDIT FAVORITE/FREQUENT CONTACTS INITIALS
	    function addEditInitials() {
	        log.debug("Checking for avatar containers");
	        $('div[data-dojo-attach-point="displayedSets"] button[data-dojo-attach-point="avatarContainer"]').each(function () {
	            var photo = $(this).children('span').children('img');

	            if (photo[0].naturalWidth == "1") {
	                log.debug("Found initials only");
	                var actionsBar = $(this).parent().find('div[data-dojo-attach-point="actionsMenuBar"]');

	                if (actionsBar.children('button.AVE-Edit-Initials').length === 0) {
	                    log.debug("Found initials action bar");

	                    var initialsElem = $(this).find('[data-dojo-attach-point="initials"]');
	                    var initialsParentElem = initialsElem.parent();
	                    var id = $(this).closest('[data-user-hash]').attr("data-user-hash");
	                    log.debug("Checking initials for id: ", id);
	                    var initials = storage.load(id);
	                    if (initials !== undefined && initials !== "" && id !== undefined) {
	                        log.debug("Loaded initials >>" + initials + "<< for id:", id);
	                        createInitialsElement(initialsParentElem);
	                        initialsElem = initialsParentElem.find('[AVE="initials"]').text(initials);
	                    }
	                    resizeInitials(initialsElem);
	                    log.debug("No picture detected");
	                    actionsBar.prepend('<button class="action bcKeyNav bcKeyButton AVE-Edit-Initials" UserHash="' + id + '" title="Edit initials" tabindex="-1" aria-label="Edit initials">\n                        <svg viewBox="0 0 268.725 268.725" class="new-msg-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 12 12" xml:space="preserve">\n                        <path xmlns="http://www.w3.org/2000/svg" d="M 161.359 56.337 c -7.041 -7.049 -18.458 -7.049 -25.498 0 l -6.374 6.381 l -89.243 89.337 l 0.023 0.023 l -2.812 2.82 c 0 0 -8.968 9.032 -29.216 74.399 c -0.142 0.457 -0.283 0.911 -0.426 1.374 c -0.361 1.171 -0.726 2.361 -1.094 3.567 c -0.326 1.066 -0.656 2.154 -0.987 3.249 c -0.279 0.923 -0.556 1.836 -0.839 2.779 c -0.642 2.14 -1.292 4.318 -1.955 6.567 c -1.455 4.937 -5.009 16.07 -0.99 20.1 c 3.87 3.882 15.12 0.467 20.043 -0.993 c 2.232 -0.662 4.395 -1.311 6.519 -1.952 c 0.981 -0.296 1.932 -0.586 2.891 -0.878 c 1.031 -0.314 2.057 -0.626 3.062 -0.935 c 1.269 -0.39 2.52 -0.775 3.75 -1.157 c 0.367 -0.114 0.727 -0.227 1.091 -0.34 c 62.192 -19.365 73.357 -28.453 74.285 -29.284 c 0.007 -0.005 0.007 -0.005 0.012 -0.01 c 0.039 -0.036 0.066 -0.06 0.066 -0.06 l 2.879 -2.886 l 0.193 0.193 l 89.245 -89.337 l -0.001 -0.001 l 6.374 -6.381 c 7.041 -7.048 7.041 -18.476 0 -25.525 L 161.359 56.337 Z M 103.399 219.782 c -0.078 0.053 -0.184 0.122 -0.296 0.193 c -0.062 0.04 -0.137 0.087 -0.211 0.133 c -0.075 0.047 -0.157 0.098 -0.244 0.151 c -0.077 0.047 -0.157 0.095 -0.243 0.147 c -2.969 1.777 -11.682 6.362 -32.828 14.017 c -2.471 0.894 -5.162 1.842 -7.981 2.819 l -30.06 -30.091 c 0.98 -2.84 1.929 -5.551 2.826 -8.041 c 7.638 -21.235 12.219 -29.974 13.986 -32.939 c 0.043 -0.071 0.082 -0.136 0.121 -0.2 c 0.062 -0.102 0.12 -0.197 0.174 -0.284 c 0.043 -0.069 0.088 -0.141 0.126 -0.2 c 0.071 -0.111 0.14 -0.217 0.193 -0.296 l 2.2 -2.206 l 54.485 54.542 L 103.399 219.782 Z M 263.351 56.337 l -50.997 -51.05 c -7.041 -7.048 -18.456 -7.048 -25.498 0 l -12.748 12.763 c -7.041 7.048 -7.041 18.476 0 25.524 l 50.996 51.05 c 7.04 7.048 18.457 7.048 25.498 0 l 12.749 -12.762 C 270.392 74.813 270.392 63.385 263.351 56.337 Z"></path>\n                        </svg></button>');

	                    actionsBar.children("button.AVE-Edit-Initials").click(function () {
	                        var userHash = $(this).attr("UserHash");
	                        var initialsRoot = void 0;
	                        var initialsElem = void 0;
	                        var initialsText = void 0;
	                        if ($(this).parent().parent().find('[data-dojo-attach-point="initials"]').length > 0) {
	                            var el = $(this).parent().parent().find('[data-dojo-attach-point="initials"]');
	                            initialsRoot = el.parent();
	                            initialsText = el.text();
	                            createInitialsElement(initialsRoot);
	                            initialsElem = initialsRoot.find('[AVE="initials"]');
	                            initialsElem.text(initialsText);
	                        } else {
	                            initialsElem = $(this).parent().parent().find('[AVE="initials"]');
	                            initialsRoot = initialsElem.parent();
	                            initialsText = initialsElem.text();
	                        }
	                        log.debug("initialsRoot", initialsRoot);
	                        log.debug("initialsElem", initialsElem);
	                        initialsText = prompt("AgileVerse: Please enter new initials", initialsText);
	                        if (initialsText !== null) {
	                            initialsElem.text(initialsText);
	                            storage.save(userHash, initialsText);
	                            resizeInitials(initialsElem);
	                        }
	                    });
	                }
	            }
	        });
	    }

	    function resizeInitials(i) {
	        try {
	            i.css('font-size', '');
	            var t = i.text();
	            var w = parseInt(i.width(), 10);
	            var p = parseInt(i.parent().width(), 10);
	            var f = parseInt(i.css('font-size'), 10);
	            log.debug("Initials: " + t + " | Width: " + w + " | Parent: " + p + " | OldFont: " + f);
	            while (w > p && f > minFontSize) {
	                f -= 1;
	                i.css('font-size', f);
	                w = parseInt(i.width(), 10);
	            }
	            log.debug("Initials: " + t + " | Width: " + w + " | Parent: " + p + " | NewFont: " + f);
	        } catch (e) {
	            log.debug(e);
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (StylePlugin, conf) {

	    var name = "Dividers";
	    var description = "narrow down inbox dividers in one line message view";
	    var enabledByDefault = true;
	    var configOptions = ["normal", "bold"];
	    var configDefault = "normal";
	    var configuration = {
	        display: conf.getConfigObj(name, "Divider_Visible", "select", { default: "true", options: ["true", "false"] }),
	        height: conf.getConfigObj(name, "Divider_Height", "height", 20),
	        background: conf.getConfigObj(name, "Background_Color", "color", "#FFFFFF"),
	        color: conf.getConfigObj(name, "Font_Color", "color", "#5A5A5A"),
	        font_size: conf.getConfigObj(name, "Font_Size", "height", 12),
	        font_weight: conf.getConfigObj(name, "Font_Weight", "select", { default: configDefault, options: configOptions })
	    };

	    var Dividers = function (_StylePlugin) {
	        _inherits(Dividers, _StylePlugin);

	        function Dividers() {
	            _classCallCheck(this, Dividers);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(Dividers).call(this, name, enabledByDefault, description, configuration));
	        }

	        _createClass(Dividers, [{
	            key: 'getStyle',
	            value: function getStyle() {
	                return '.seq-mcv.condensed  .divider, .seq-msg-row.condensed .dueDateDivider, .seq-msg-row .divider, .seq-msg-row .dueDateDivider {\n                ' + (this.configuration.display.value == "false" ? 'display: none;' : '') + '\n                border: none;\n                height: ' + this.configuration.height.value + 'px !important;\n                top: -' + this.configuration.height.value + 'px !important;\n                line-height: ' + this.configuration.height.value + 'px !important;\n                color: ' + this.configuration.color.value + ' !important;\n                background-color: ' + this.configuration.background.value + ' !important;\n                font-size: ' + this.configuration.font_size.value + 'px !important;\n                font-weight: ' + this.configuration.font_weight.value + ' !important;\n            }\n            \n            .messageList .seq-msg-row {\n                margin-top: ' + (this.configuration.display.value == "false" ? '0' : parseInt(this.configuration.height.value) + 1) + 'px !important;\n            }\n\n            .seq-msg-row:hover .divider, .seq-msg-row.focused .divider, .seq-msg-row:focus .divider, .seq-msg-row:hover .dueDateDivider, .seq-msg-row.focused .dueDateDivider, .seq-msg-row:focus .dueDateDivider {\n                top: -' + (parseInt(this.configuration.height.value) + 1) + 'px !important;\n            }\n\n            .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .today:not(.hidden) ~ .today, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .yesterday:not(.hidden) ~ .yesterday, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .this-week:not(.hidden) ~ .this-week, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .last-week:not(.hidden) ~ .last-week, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .two-week-older:not(.hidden) ~ .two-week-older, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .this-month:not(.hidden) ~ .this-month, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .last-month:not(.hidden) ~ .last-month, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) .older-msgs:not(.hidden) ~ .older-msgs, .seq-mcv:not(.opening-waiting-for):not(.opening-needs-action) li:first-child {\n                margin-top: 0px !important;\n            }\n\n            .opening-waiting-for .msg-row-due-today:not(.hidden) ~ .msg-row-due-today, .opening-needs-action .msg-row-due-today:not(.hidden) ~ .msg-row-due-today, .opening-waiting-for .msg-row-due-tomorrow:not(.hidden) ~ .msg-row-due-tomorrow, .opening-needs-action .msg-row-due-tomorrow:not(.hidden) ~ .msg-row-due-tomorrow, .opening-waiting-for .msg-row-due-one-week:not(.hidden) ~ .msg-row-due-one-week, .opening-needs-action .msg-row-due-one-week:not(.hidden) ~ .msg-row-due-one-week, .opening-waiting-for .msg-row-due-beyond-one-week:not(.hidden) ~ .msg-row-due-beyond-one-week, .opening-needs-action .msg-row-due-beyond-one-week:not(.hidden) ~ .msg-row-due-beyond-one-week, .opening-waiting-for .msg-row-due-none:not(.hidden) ~ .msg-row-due-none, .opening-needs-action .msg-row-due-none:not(.hidden) ~ .msg-row-due-none {\n                margin-top: 0px !important;\n            }\n\n            .opening-waiting-for li:first-child, .opening-needs-action li:first-child {\n                margin-top: 0px !important;\n            }';
	            }
	        }]);

	        return Dividers;
	    }(StylePlugin);

	    return new Dividers();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (StylePlugin) {
	    var name = "BannerHide";
	    var description = "make IBM banner hiding";
	    var enabledByDefault = false;

	    var BannerHide = function (_StylePlugin) {
	        _inherits(BannerHide, _StylePlugin);

	        function BannerHide() {
	            _classCallCheck(this, BannerHide);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(BannerHide).call(this, name, enabledByDefault, description));
	        }

	        _createClass(BannerHide, [{
	            key: "getStyle",
	            value: function getStyle() {
	                return "body > div[role=\"banner\"] {top: -35px !important; position: fixed !important; width: 100%; transition: 0.3s !important; transition-delay:0.1s !important; z-index: 1100;}\n                    body > div[role=\"banner\"]:hover {top: 0px !important; box-shadow: 0px 0px 15px 5px #333;}\n                    .notification-banner {top: 20px !important;}\n                    .seq-window {top: 5px !important; height: calc(100% - 5px) !important;}";
	            }
	        }]);

	        return BannerHide;
	    }(StylePlugin);

	    return new BannerHide();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (StylePlugin) {
	    var name = "FavoritePanelShrink";
	    var description = "shrink height of favorite/frequent contacts panel";
	    var enabledByDefault = true;

	    var FavoritePanelShrink = function (_StylePlugin) {
	        _inherits(FavoritePanelShrink, _StylePlugin);

	        function FavoritePanelShrink() {
	            _classCallCheck(this, FavoritePanelShrink);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(FavoritePanelShrink).call(this, name, enabledByDefault, description));
	        }

	        _createClass(FavoritePanelShrink, [{
	            key: "getStyle",
	            value: function getStyle() {
	                return "body:not(.itm-closed) .set-side-bar {height: 60px;}\n                    body:not(.itm-closed) .set-base {margin-top: 4px !important;}\n                    body:not(.itm-closed) .seq-window.calendar .seq-mcv {height: calc(100% - 60px - 54px - 98px) !important;}\n                    body:not(.itm-closed) .seq-window:not(.calendar) .seq-mcv {height: calc(100% - 60px - 54px - 38px) !important;}\n                    body .suggested-sets::before, body .carousel.sets-overflown .scroll-button.left::after, body .carousel.sets-overflown .scroll-button.right::before, body .carousel .scroll-button {top: 0px !important; height: 100% !important;}\n                    div[data-dojo-attach-point=\"displayedSets\"] span[data-dojo-attach-point=\"setLabel\"] {top: 65px !important; background-color:transparent !important; pointer-events:none !important;}";
	            }
	        }]);

	        return FavoritePanelShrink;
	    }(StylePlugin);

	    return new FavoritePanelShrink();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (StylePlugin) {

		var name = "TodoWaitingBlink";
		var description = "makes waiting for and action needed buttons blinking for better visibility";
		var enabledByDefault = true;

		var TodoWaitingBlink = function (_StylePlugin) {
			_inherits(TodoWaitingBlink, _StylePlugin);

			function TodoWaitingBlink() {
				_classCallCheck(this, TodoWaitingBlink);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoWaitingBlink).call(this, name, enabledByDefault, description));
			}

			_createClass(TodoWaitingBlink, [{
				key: "getStyle",
				value: function getStyle() {
					return "\n\t\t\t.needs-attention.show-focus-count::after, .waiting-for.show-focus-count::after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: -1;\n\t\t\t\topacity: 0;\n\t\t\t\tbox-shadow: 0px 0px 6px 2px red;\n\t\t\t\tanimation: blinker 1s infinite alternate;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\t.needs-attention.show-focus-count, .waiting-for.show-focus-count {\n\t\t\t\tbox-shadow: 0px 0px 1px 1px red;\n\t\t\t}\n\n\t\t\t@keyframes blinker {\n\t\t\t\t0% { opacity: 0;}\n\t\t\t\t80% { opacity: 0; }\n\t\t\t\t100% { opacity: 1; }\n\t\t\t}\n\t\t\t";
				}
			}]);

			return TodoWaitingBlink;
		}(StylePlugin);

		return new TodoWaitingBlink();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (StylePlugin, conf) {
	    var name = "SametimeContactsGlow";
	    var description = "colored glow effect for favorite/frequent contacts";
	    var enabledByDefault = true;

	    var configuration = {
	        color_available: conf.getConfigObj(name, "Available", "color", "#008000"),
	        color_away: conf.getConfigObj(name, "Away", "color", "#FFEE00"),
	        color_inMeeting: conf.getConfigObj(name, "In_Meeting", "color", "#FF8000"),
	        color_dnd: conf.getConfigObj(name, "Do_Not_Disturb", "color", "#FF0000")
	    };

	    var SametimeContactsGlow = function (_StylePlugin) {
	        _inherits(SametimeContactsGlow, _StylePlugin);

	        function SametimeContactsGlow() {
	            _classCallCheck(this, SametimeContactsGlow);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(SametimeContactsGlow).call(this, name, enabledByDefault, description, configuration));
	        }

	        _createClass(SametimeContactsGlow, [{
	            key: 'getStyle',
	            value: function getStyle() {
	                return '\n                div.people-set.ic-bizcard { transition: box-shadow 1s; }\n                div.chat-available:not(.bizcard-open) {box-shadow: 0px 0px 5px 3px ' + this.configuration.color_available.value + ';}\n                div.chat-away:not(.bizcard-open) {box-shadow: 0px 0px 5px 3px ' + this.configuration.color_away.value + ';}\n                div.chat-in-meeting:not(.bizcard-open) {box-shadow: 0px 0px 5px 3px ' + this.configuration.color_inMeeting.value + ';}\n                div.chat-dnd:not(.bizcard-open){box-shadow: 0px 0px 5px 3px ' + this.configuration.color_dnd.value + ';}\n                ';
	            }
	        }]);

	        return SametimeContactsGlow;
	    }(StylePlugin);

	    return new SametimeContactsGlow();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(6), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, PluginBase, createLogger) {

	    var name = "SametimeWebDisable";
	    var description = "Keeps web sametime logged off and hide it's control";
	    var enabledByDefault = true;
	    var log = createLogger(name);

	    var CONST_KEEP_OUT_INTERVAL = 2000;

	    var _keepOffIntervalID = void 0;

	    var SametimeWebKeepLoggedoff = function (_PluginBase) {
	        _inherits(SametimeWebKeepLoggedoff, _PluginBase);

	        function SametimeWebKeepLoggedoff() {
	            _classCallCheck(this, SametimeWebKeepLoggedoff);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(SametimeWebKeepLoggedoff).call(this, name, enabledByDefault, description));
	        }

	        _createClass(SametimeWebKeepLoggedoff, [{
	            key: 'isEnabled',
	            value: function isEnabled() {
	                return _keepOffIntervalID !== undefined;
	            }
	        }, {
	            key: 'enable',
	            value: function enable() {
	                _get(Object.getPrototypeOf(SametimeWebKeepLoggedoff.prototype), 'enable', this).call(this);
	                if (_keepOffIntervalID == undefined) {
	                    _keepOffIntervalID = setInterval(logoutIfLoggedWebST, CONST_KEEP_OUT_INTERVAL);
	                    HideSametime(this.ID);
	                }
	            }
	        }, {
	            key: 'disable',
	            value: function disable() {
	                _get(Object.getPrototypeOf(SametimeWebKeepLoggedoff.prototype), 'disable', this).call(this);
	                clearInterval(_keepOffIntervalID);
	                _keepOffIntervalID = undefined;
	                ShowSametime(this.ID);
	            }
	        }]);

	        return SametimeWebKeepLoggedoff;
	    }(PluginBase);

	    return new SametimeWebKeepLoggedoff();

	    function logoutIfLoggedWebST() {
	        var btn_el = $('#sametime-tray .logged-in button.log-btn');
	        log.debug('Found "' + btn_el.length + '" matching elements for logout button');
	        if (btn_el.length) {
	            log.debug("Web Sametime appears to be online, logging out!");
	            btn_el.click();
	        }
	    }

	    function HideSametime(id) {
	        $('head').prepend('<style type="text/css" id="' + id + '">#sametime-tray {display: none !important;}</style>');
	    }

	    function ShowSametime(id) {
	        $('#' + id).remove();
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(23), __webpack_require__(1), __webpack_require__(6), __webpack_require__(5), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, GM_ajax, createLogger, PluginBase, registry, DelayedTimeCounter) {

		var name = 'SametimeStandalone';
		var description = 'integrate standalone sametime instead of web';
		var enabledByDefault = true;
		var log = createLogger(name);

		var CONST_TIMEOUT = 20000;
		var CONST_INTEGRATION_INTERVAL = 2000;
		var CONST_DELAY_ON_FAIL = 5000;
		var MAX_INTEGRATION_INTERVAL = 60 * 1000;

		var delayCounter = new DelayedTimeCounter(CONST_INTEGRATION_INTERVAL, CONST_DELAY_ON_FAIL, MAX_INTEGRATION_INTERVAL);

		var CONST_KEEP_OFF_PLUGIN = 'SametimeWebKeepLoggedoff';

		var _enabled = false;

		var SametimeStandalone = function (_PluginBase) {
			_inherits(SametimeStandalone, _PluginBase);

			function SametimeStandalone() {
				_classCallCheck(this, SametimeStandalone);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SametimeStandalone).call(this, name, enabledByDefault, description));
			}

			_createClass(SametimeStandalone, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return isSTIntegrationEnabled();
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(SametimeStandalone.prototype), 'enable', this).call(this);
					this.log.debug('Enabling STIntegration');
					enableStandaloneIntegration();

					this.log.debug('Checking for keepOffPlugin');
					var plugin = registry.getPlugin(CONST_KEEP_OFF_PLUGIN);
					if (plugin !== undefined) {
						plugin.enable();
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					this.log.debug('Disabling STIntegration');
					disableStandaloneIntegration();
					_get(Object.getPrototypeOf(SametimeStandalone.prototype), 'disable', this).call(this);
				}
			}]);

			return SametimeStandalone;
		}(PluginBase);

		return new SametimeStandalone();

		function isSTIntegrationEnabled() {
			return _enabled;
		}

		function startStandaloneIntegrationInterval() {
			Promise.resolve(processStandaloneIntegration()).catch(function (e) {
				log.error(e);
				delayCounter.addFail();
			}).then(function () {
				if (isSTIntegrationEnabled()) {
					log.debug('Waiting for ' + delayCounter.nextDelay() + ' on next interval');
					setTimeout(startStandaloneIntegrationInterval, delayCounter.nextDelay());
				}
			});
		}

		function filterJqIBMMails() {
			return this.href.toLowerCase().slice(-8) === '.ibm.com';
		}

		function getAllIBMElements() {
			return $('a[href^=\'mailto:\']').filter(filterJqIBMMails);
		}

		function getAllIBMMails() {
			return getAllIBMElements().map(function () {
				return this.href.slice('mailto:'.length);
			}).get();
		}

		function uniqueOnly(mails) {
			return $.grep(mails, function (el, index) {
				return index === $.inArray(el, mails);
			});
		}

		function processStandaloneIntegration() {
			log.debug('STInt::processStandaloneIntegration start');
			var _userMails = uniqueOnly(getAllIBMMails());

			if (_userMails.length === 0) {
				log.debug('STInt::processStandaloneIntegration no mails to process, end');
				return;
			}

			if (!isSTIntegrationEnabled()) {
				log.debug('STInt::processStandaloneIntegration not enabled end');
				return updateSametimeDOM(_userMails, { persons: [] }); // update without status -> disable all
			}

			return GM_ajax('http://localhost:59449/stwebapi/getstatus?userId=' + _userMails.join('|').toLowerCase() + '&wait=true&time=' + new Date().getTime(), { timeout: CONST_TIMEOUT }).then(function (xhr) {
				if (xhr.responseJson === undefined) {
					throw new Error('Invalid response - expected json');
				}
				delayCounter.addSuccess();
				log.debug('STInt::processStandaloneIntegration xhref complete, updating dom');
				return updateSametimeDOM(_userMails, xhr.responseJson);
			}).catch(function (err) {
				log.debug('STInt::processStandaloneIntegration xhref error');
				log.debug(err);
				delayCounter.addFail();
			});
		}

		function updateSametimeDOM(allUsersMails, responseStatuses) {
			log.debug('STInt::updateSametimeDOM start', responseStatuses);

			if (!isSTIntegrationEnabled()) {
				log.debug('STInt::processStandaloneIntegration disabled during ajax');
				return;
			}

			var allMails = getAllIBMElements();
			var i;

			if (responseStatuses.persons === undefined) {
				log.error('Invalid people response:', responseStatuses);
			}

			var personResponseStatusMap = {};
			for (i = 0; i < responseStatuses.persons.length; i++) {
				personResponseStatusMap[responseStatuses.persons[i].contactId.toLowerCase()] = responseStatuses.persons[i];
			}

			for (i = 0; i < allUsersMails.length; i++) {
				updateUserSametimeStatus(allMails.filter('a[href="mailto:' + allUsersMails[i] + '"]'), personResponseStatusMap[allUsersMails[i].toLowerCase()]);
			}
			log.debug('STInt::updateSametimeDOM end');
		}

		function onClickOpenChat(buttonEl, contactId) {
			// log.debug('Setting onclick for ', contactId, buttonEl);
			buttonEl.attr('disabled', false);
			buttonEl.click(function () {
				GM_ajax('http://localhost:59449/stwebapi/chat?userId=' + contactId, { method: 'HEAD' });
			});
		}

		function setChatClass(statusEl, buttonEl, className, contactId) {
			cleanClasses(statusEl).addClass(className);
			if (shouldEnableOnclick(className)) {
				onClickOpenChat(buttonEl, contactId);
			} else {
				buttonEl.attr('disabled', true);
			}
		}

		function shouldEnableOnclick(status) {
			switch (status) {
				case 'chat-available':
					return true;
				case 'chat-away':
					return true;
				case 'chat-in-meeting':
					return true;
				case 'chat-dnd':
					return false;
				case 'chat-offline':
					return false;
				default:
					return false;
			}
		}

		function cleanClasses(element) {
			return element.removeClass(' chat-dnd chat-away chat-in-meeting chat-available chat-offline ');
		}

		function updateUserSametimeStatus(userElement, personStatus) {
			var _STButton = userElement.parent().siblings('div.ic-bizcard-actions').children('button[data-dojo-attach-point="chat"]');
			var _STStatus = _STButton.parent().closest('[class*="chat-"]');
			applyUserStatusToDOM(_STStatus, _STButton, personStatus);
		}

		function applyUserStatusToDOM(statusEl, buttonEl, status) {
			buttonEl.off('click');
			if (status === undefined || !isSTIntegrationEnabled()) {
				setChatClass(statusEl, buttonEl, 'chat-offline');
				buttonEl.attr('title', 'User is offline');
				return;
			}

			setChatClass(statusEl, buttonEl, getChatClassFromStatus(status.status), status.contactId);
			buttonEl.attr('title', status.hoverText);
		}

		function getChatClassFromStatus(status) {
			switch (status) {
				case 1:
					return 'chat-available';
				case 6:
					return 'chat-available';
				case 2:
					return 'chat-away';
				case 7:
					return 'chat-away';
				case 3:
					return 'chat-dnd';
				case 8:
					return 'chat-dnd';
				case 5:
					return 'chat-in-meeting';
				case 10:
					return 'chat-in-meeting';
				case 4:
					return 'chat-offline';
				case 0:
					return 'chat-offline';
				case -1:
					return 'chat-offline';
			}
		}

		function enableStandaloneIntegration() {
			if (_enabled) {
				return;
			}
			log.debug('STInt enabling');
			_enabled = true;
			startStandaloneIntegrationInterval();
			processStandaloneIntegration(); // update DOM immediately
		}

		function disableStandaloneIntegration() {
			log.debug('STInt disabling');
			_enabled = false;
			processStandaloneIntegration(); // update DOM immediately
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (createLogger) {

		var ERR_TIMEOUT = "Request timeout";
		var ERR_ABORT = "Request aborted";
		var ERR_CONNECTION = "Error connecting";
		var ERR_INVALID_JSON = "Error parsing json response";
		var ERR_UNKNOWN = "Unknown GM_xmlhttpRequest error";
		var ERR_RESPONSE_ERROR = "Response status code was error";

		var log = createLogger('GM-Request');

		return function GM_xmlhttpRequestPromise(url, opt) {
			return new Promise(function (resolve, reject) {
				log.debug("Getting ajax for " + url);
				try {
					var opts = {
						url: url,
						method: opt && opt.method || "GET",
						timeout: opt && opt.timeout || 0,
						headers: opt && opt.headers || {},

						onload: function onload(xhr) {
							if (xhr.status < 200 || xhr.status >= 400) {
								log.debug("Ajax finished with error status code", xhr);
								reject(new Error(ERR_RESPONSE_ERROR));
							}
							try {
								if (xhr.responseHeaders.split("\n").filter(function (i) {
									return i.match(/content-type:\s*application\/json/i);
								}).length > 0) {
									xhr.responseJson = JSON.parse(xhr.responseText);
								}
							} catch (err) {
								log.debug("Ajax finished with error parsing JSON", xhr);
								reject(new Error(ERR_INVALID_JSON));
							}
							log.debug("Ajax finished with success", xhr);
							resolve(xhr);
						},
						onerror: function onerror(xhr) {
							log.debug("Ajax finished with error", xhr);
							reject(new Error(ERR_CONNECTION));
						},
						onabort: function onabort(xhr) {
							log.debug("Ajax aborted", xhr);
							reject(new Error(ERR_ABORT));
						},
						ontimeout: function ontimeout(xhr) {
							log.debug("Ajax finished with timeout", xhr);
							reject(new Error(ERR_TIMEOUT));
						}
					};
					if (opt && opt.data !== undefined) {
						opts.data = opt.data;
						if (opts.headers['Content-Type'] === undefined) {
							if (_typeof(opts.data) == 'object') {
								opts.headers['Content-Type'] = 'application/json';
								opts.data = JSON.stringify(opt.data);
							} else {
								opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
							}
						}
					}
					GM_xmlhttpRequest(opts);
				} catch (err) {
					log.debug("Ajax encountered error", err);
					reject(new Error(ERR_UNKNOWN));
				}
			});
		};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		var DelayedTimeCounter = function () {
			function DelayedTimeCounter(defaultDelay, failIncrease, maxDelay) {
				_classCallCheck(this, DelayedTimeCounter);

				this.failedRuns = 0;
				this.defaultDelay = defaultDelay;
				this.failIncrease = failIncrease;
				this.maxDelay = maxDelay;
			}

			_createClass(DelayedTimeCounter, [{
				key: "getFails",
				value: function getFails() {
					return this.failedRuns;
				}
			}, {
				key: "addFail",
				value: function addFail() {
					this.failedRuns++;
				}
			}, {
				key: "addSuccess",
				value: function addSuccess() {
					this.failedRuns = 0;
				}
			}, {
				key: "nextDelay",
				value: function nextDelay() {
					return Math.min(this.defaultDelay + this.failedRuns * this.failIncrease, this.maxDelay);
				}
			}]);

			return DelayedTimeCounter;
		}();

		return DelayedTimeCounter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(1), __webpack_require__(9), __webpack_require__(6), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, createLogger, waitForElem, PluginBase, scriptNode) {
		var name = "FoldersExpandAll";
		var description = "expands/collapses all folders";
		var enableByDefault = true;
		var log = createLogger(name);

		var BUTTONS_ID = 'AVE_FoldersExpand';
		var SCRIPT_NODE_ID = 'AVE_FoldersExpand_script';

		var COLLAPSE_TITLE = 'Collapse all folders';
		var EXPAND_TITLE = 'Expand all folders';

		var _enabled = false;

		var FoldersExpand = function (_PluginBase) {
			_inherits(FoldersExpand, _PluginBase);

			function FoldersExpand() {
				_classCallCheck(this, FoldersExpand);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(FoldersExpand).call(this, name, enableByDefault, description));
			}

			_createClass(FoldersExpand, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return _enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(FoldersExpand.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						_enabled = true;
						waitForElem('.folder-tray.isLoaded', setupButtons);
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					removeButtons();
					_enabled = false;
					_get(Object.getPrototypeOf(FoldersExpand.prototype), 'disable', this).call(this);
				}
			}]);

			return FoldersExpand;
		}(PluginBase);

		return new FoldersExpand();

		function removeButtons() {
			log.debug("Removing buttons");
			var buttonEl = document.getElementById(BUTTONS_ID);
			if (buttonEl) buttonEl.remove();
		}

		function setupButtons() {
			log.debug("Creating buttons");
			$('.folders-title').append('\n\t\t\t<div id="' + BUTTONS_ID + '" style="width:16px; cursor:pointer; fill: #777677;" title="' + EXPAND_TITLE + '">\n\t\t\t\t<svg class="folder-plus" style="display: inline-block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n\t\t\t\t\t<path d="M7 3V1H0v13h15V3H7zm7 10H1V4h13v9z"></path>\n\t\t\t\t\t<path d="M7 12h1V9h3V8H8V5H7v3H4v1h3"></path>\n\t\t\t\t</svg>\n\t\t\t\t<svg class="folder-minus" style="display:none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n\t\t\t\t\t<path d="M7 3V1H0v13h15V3H7zm7 10H1V4h13v9z"></path>\n\t\t\t\t\t<path d="M7 8H4v1h7V8H8"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t');
			createFunctions();
			bindClickEvents();
		}

		function createFunctions() {
			if (document.getElementById(SCRIPT_NODE_ID)) {
				return; // dont recreate if exists
			}

			var sNode = scriptNode.addScript('\n\t\t\tvar ' + SCRIPT_NODE_ID + ' = (function(){\n\t\t\t\tfunction mapFoldersFunction(fnc) {\n\t\t\t\t\tgetFolderWidget().getChildren().map( fnc );\n\t\t\t\t}\n\n\t\t\t\tfunction getFolderWidget() {\n\t\t\t\t\tvar widget = window.dijit.byId( document.querySelector(\'.folder-tray\').id );\n\t\t\t\t\tif ( widget === undefined || widget.folderView === undefined ) {\n\t\t\t\t\t\tthrow new Error("Could not find folder-tray/folderView widget");\n\t\t\t\t\t}\n\t\t\t\t\treturn widget.folderView;\n\t\t\t\t}\n\n\t\t\t\tfunction expandFolderRecursive(folder) {\n\t\t\t\t\tfolder.expandSubTree(true);\n\t\t\t\t\tfolder.getChildren().map( expandFolderRecursive );\n\t\t\t\t}\n\n\t\t\t\tfunction collapseFolderRecursive(folder) {\n\t\t\t\t\tfolder.expandSubTree(false);\n\t\t\t\t\tfolder.getChildren().map( collapseFolderRecursive );\n\t\t\t\t}\n\n\t\t\t\tfunction showCollapseButton() {\n\t\t\t\t\tdocument.querySelector( \'#' + BUTTONS_ID + ' .folder-plus\').style.display = \'none\';\n\t\t\t\t\tdocument.querySelector( \'#' + BUTTONS_ID + ' .folder-minus\').style.display = \'inline-block\';\n\t\t\t\t\tdocument.getElementById( \'' + BUTTONS_ID + '\').title = \'' + COLLAPSE_TITLE + '\';\n\t\t\t\t}\n\n\t\t\t\tfunction showExpandButton() {\n\t\t\t\t\tdocument.querySelector( \'#' + BUTTONS_ID + ' .folder-plus\').style.display = \'inline-block\';\n\t\t\t\t\tdocument.querySelector( \'#' + BUTTONS_ID + ' .folder-minus\').style.display = \'none\';\n\t\t\t\t\tdocument.getElementById( \'' + BUTTONS_ID + '\').title = \'' + EXPAND_TITLE + '\';\n\t\t\t\t}\n\n\t\t\t\tfunction expandAll() {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tmapFoldersFunction( expandFolderRecursive );\n\t\t\t\t\t\tshowCollapseButton();\n\t\t\t\t\t} catch(e) {\n\t\t\t\t\t\tconsole.error(e);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tfunction collapseAll() {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tmapFoldersFunction( collapseFolderRecursive );\n\t\t\t\t\t\tshowExpandButton();\n\t\t\t\t\t} catch(e) {\n\t\t\t\t\t\tconsole.error(e);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn {\n\t\t\t\t\tcollapseAll : collapseAll,\n\t\t\t\t\texpandAll: expandAll\n\t\t\t\t};\n\t\t\t}());\n\t\t');

			sNode.id = SCRIPT_NODE_ID;
		}

		function bindClickEvents() {
			scriptNode.addScript('\n\t\t\tdocument.querySelector( \'#' + BUTTONS_ID + ' .folder-plus\').addEventListener(\'click\', ' + SCRIPT_NODE_ID + '.expandAll );\n\t\t\tdocument.querySelector( \'#' + BUTTONS_ID + ' .folder-minus\').addEventListener(\'click\', ' + SCRIPT_NODE_ID + '.collapseAll );\n\t\t');
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

	    function addJS_Node(text, s_URL, funcToRun, runOnLoad) {
	        var scriptNode = document.createElement('script');

	        if (runOnLoad) {
	            scriptNode.addEventListener("load", runOnLoad, false);
	        }
	        scriptNode.type = "text/javascript";

	        if (text) {
	            scriptNode.textContent = text;
	        } else if (s_URL) {
	            scriptNode.src = s_URL;
	        } else if (funcToRun) {
	            scriptNode.textContent = '(' + funcToRun.toString() + ')()';
	        }

	        var targ = document.getElementsByTagName('head')[0] || document.body || document.documentElement;
	        targ.appendChild(scriptNode);
	        return scriptNode;
	    }

	    return {
	        addScript: addJS_Node
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(1), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PluginBase, createLogger, EventCollector) {
	    var name = "EventSysNotify";
	    var description = "provide system notification for events";
	    var log = createLogger(name);
	    var enabledByDefault = true;
	    var collector = EventCollector;

	    var configuration = {
	        GLOBAL_TimeToEvent: collector.system.configuration.GLOBAL_TimeToEvent
	    };

	    var enabled = false;

	    var EventSysNotify = function (_PluginBase) {
	        _inherits(EventSysNotify, _PluginBase);

	        function EventSysNotify() {
	            _classCallCheck(this, EventSysNotify);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(EventSysNotify).call(this, name, enabledByDefault, description, configuration));
	        }

	        _createClass(EventSysNotify, [{
	            key: 'isEnabled',
	            value: function isEnabled() {
	                return enabled;
	            }
	        }, {
	            key: 'enable',
	            value: function enable() {
	                _get(Object.getPrototypeOf(EventSysNotify.prototype), 'enable', this).call(this);
	                if (!this.isEnabled()) {
	                    collector.addPlugin(this);
	                    enabled = true;
	                }
	                if (Notification.permission !== "granted") {
	                    Notification.requestPermission();
	                }
	            }
	        }, {
	            key: 'disable',
	            value: function disable() {
	                _get(Object.getPrototypeOf(EventSysNotify.prototype), 'disable', this).call(this);
	                if (this.isEnabled()) {
	                    collector.removePlugin(this);
	                    enabled = false;
	                }
	            }
	        }, {
	            key: 'reload',
	            value: function reload() {
	                collector.reload();
	                _get(Object.getPrototypeOf(EventSysNotify.prototype), 'reload', this).call(this);
	            }
	        }, {
	            key: 'fire',
	            value: function fire(e) {
	                log.debug("You have reached 'notify' function of " + name);
	                var head = e.subject;
	                var body = e.time + "\n" + e.chair + "\n" + e.place;
	                var unid = e.unid;
	                var icon = "https://apps.na.collabserv.com/communities/service/html/image?communityUuid=14ccb823-6af1-4a93-b593-e113f29f5581&lastMod=1457959880259&showDefaultForNoPermissions=true";
	                var alert = new Notification(head, {
	                    requireInteraction: true,
	                    tag: unid,
	                    body: body,
	                    icon: icon,
	                    sticky: true
	                });
	                log.debug(alert);
	                collector.dismissEvent(e.AVEunid);
	            }
	        }]);

	        return EventSysNotify;
	    }(PluginBase);

	    return new EventSysNotify();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(8), __webpack_require__(12), __webpack_require__(29), __webpack_require__(31), __webpack_require__(35), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (createLogger, $, storageOps, calendarAPI, meetingCollector, dateutils, conf) {
		var name = 'EventCollector';

		var TimeToEvent_Description = 'Select amount of minutes you want even notification to be triggered prior event start\n\t\t(please note this setting is global for all notification types and requires IBM Verse page reload to apply it\'s setting)';

		var configuration = {
			GLOBAL_TimeToEvent: loadTimeToEventConfigurationObject()
		};

		var eventList = {};
		var storageOpsEventList = storageOps.getNamespace(name);
		var storageT2E = name + '_T2E';

		var STORAGE_KEY_NAME = 'eventlist';

		var log = createLogger(name);

		var plugins = new Map();

		var meetingCollectorListener = {
			name: name,
			updateEventList: updateEventsFromDOM
		};

		var dispatchingPaused = false;
		var dispatchIntervalID = null;

		var timeOps = {
			msToMin: function msToMin(x) {
				return x / (60 * 1000);
			},
			minToMs: function minToMs(x) {
				return x * 60 * 1000;
			},
			isNumber: function isNumber(x) {
				return isFinite(String(x));
			}
		};

		var system = {
			timeToEvent: timeOps.minToMs(configuration.GLOBAL_TimeToEvent.value), // convert loaded value to milliseconds
			recycleOlderThan: 2 * 60 * 60 * 1000, // 2 hours ( in milliseconds )
			triggerNotOlderThan: 60 * 60 * 1000, // 1 hour ( in milliseconds )
			dispatchPeriod: 10 * 1000,
			configuration: configuration,
			disableCollector: disableCollector,
			enableCollector: enableCollector
		};

		var api = {
			isRunning: isRunning,
			addPlugin: addPlugin,
			removePlugin: removePlugin,
			plugins: plugins,
			_eventList: eventList,
			snoozeEvent: snoozeEvent,
			dismissEvent: dismissEvent,
			removeDismissOnEvent: removeDismissOnEvent,
			system: system,
			reload: reload
		};

		log.debug("API:", api);

		return api;

		/** Listeners, enable/disable **/

		function isRunning() {
			return dispatchIntervalID !== null;
		}

		function checkEnableOrDisable() {
			log.debug('Amount of enabled plugins is ' + plugins.size);
			if (!isRunning() && plugins.size > 0) {
				enableCollector();
			} else if (isRunning() && plugins.size === 0) {
				disableCollector();
			}
		}

		function addPlugin(plugin) {
			log.debug('Adding plugin : ' + plugin.name);
			if (plugins.has(plugin.name)) {
				log.error('Plugin ' + plugin.name + ' is already registered');
				return;
			}

			plugins.set(plugin.name, plugin);
			checkEnableOrDisable();
		}

		function removePlugin(plugin) {
			log.debug('Removing plugin : ' + plugin.name);
			if (!plugins.has(plugin.name)) {
				log.error('no plugin with name ' + plugin.name + ' is registered');
			}
			plugins.delete(plugin.name);
			checkEnableOrDisable();
		}

		function reload() {
			system.timeToEvent = timeOps.minToMs(loadTimeToEventConfigurationObject().value);
			updateEventsNotifyValue();
		}

		function disableCollector() {
			log.debug('Disabling collector');
			meetingCollector.removeListener(meetingCollectorListener);
			clearInterval(dispatchIntervalID);
			dispatchIntervalID = null;
			storageOpsEventList.clear();
			for (var ID in eventList) {
				delete eventList[ID];
			}
		}

		function enableCollector() {
			log.debug('Enabling collector');
			loadEvents();
			updateEventsNotifyValue();
			meetingCollector.addListener(meetingCollectorListener);
			dispatchIntervalID = setInterval(dispatchSingleNotification, system.dispatchPeriod);
		}

		function loadTimeToEventConfigurationObject() {
			return conf.getConfigObj(name, "GLOBAL_Time_To_Event", "time", 30, TimeToEvent_Description);
		}

		/** Events processing **/

		// event constructor
		function eventAdd(eventObj) {
			var AVEunid = getID(eventObj.unid);
			eventList[AVEunid] = {
				unid: eventObj.unid,
				domId: eventObj.domId,
				AVEunid: AVEunid,
				start: eventObj.start,
				duration: eventObj.duration,
				notify: system.timeToEvent,
				original: system.timeToEvent,
				subject: eventObj.subject,
				time: eventObj.time,
				chair: eventObj.chair,
				place: eventObj.place,
				accepted: eventObj.accepted,
				fired: false,
				dismissed: false
			};
		}

		function dispatchSingleNotification() {
			log.debug('Starting EventCollector dispatchNext');
			if (dispatchingPaused) {
				log.debug('Dispatching is paused until previous notification is resolved');
				return;
			}

			var _loop = function _loop(ID) {
				log.debug('Checking event ' + ID);
				var currentEvent = eventList[ID];
				if (shouldNotify(currentEvent)) {
					var _ret2 = function () {
						var promises = [];
						plugins.forEach(function (value, key) {
							log.debug('Dispatching event ID \'' + ID + '\' to ' + key);
							promises.push(Promise.resolve(value.fire(currentEvent)));
						});
						pauseDispatching();
						Promise.all(promises).catch(logError).then(continueDispatching).then(scheduleNextDispatch);

						return {
							v: {
								v: void 0
							}
						}; // end on first fired
					}();

					if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
				}
			};

			for (var ID in eventList) {
				var _ret = _loop(ID);

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
		}

		function scheduleNextDispatch() {
			setTimeout(dispatchSingleNotification, 0);
		}

		function logError(err) {
			log.error('Encountered error', err);
		}

		function continueDispatching() {
			dispatchingPaused = false;
		}

		function pauseDispatching() {
			dispatchingPaused = true;
		}

		function getID(eventId) {
			return 'AVE_' + eventId;
		}

		function snoozeEvent(unid, time) {
			log.debug('Snoozing event : ', unid);
			if (eventList[unid] === undefined) {
				log.error('Tried to snooze event not in list ' + unid);
				return false;
			}
			if (timeOps.isNumber(time)) {
				var t = void 0;
				if (time == 0) {
					t = 0;
				} else {
					t = eventList[unid].start - timeOps.minToMs(time) - Date.now();
				}
				eventList[unid].notify = t;
				eventList[unid].dismissed = false;
				storeEvents();
			} else {
				return;
			}
		}

		function dismissEvent(unid) {
			log.debug('Dismissing event : ', unid);
			if (eventList[unid] === undefined) {
				log.error('Tried to dismiss event not in list ' + unid);
				return false;
			}
			eventList[unid].dismissed = true;
			storeEvents();
		}

		function removeDismissOnEvent(eventId) {
			log.debug('Un-Dismissing event : ', eventId);
			if (eventList[eventId] === undefined) {
				log.error('Tried to undismiss event not in list ' + eventId);
				return false;
			}
			eventList[eventId].dismissed = false;
		}

		function recycleEvents() {
			try {
				var changed = false;
				log.debug('Recycle events older than ' + system.recycleOlderThan);
				for (var ID in eventList) {
					if (shouldRecycleEvent(eventList[ID])) {
						log.debug('Recycling event ID ' + eventList[ID].unid + ' as start is ' + new Date(eventList[ID].start).toString() + ' and current is ' + new Date().toString());
						delete eventList[ID];
						changed = true;
					}
				}

				if (changed) {
					storageOpsEventList.clear(STORAGE_KEY_NAME);
					storeEvents();
				}
			} catch (e) {
				logError(e);
			}
		}

		function storeEvents() {
			log.debug('Storing collected events');
			storageOpsEventList.save(STORAGE_KEY_NAME, eventList);
		}

		function updateEventsNotifyValue() {
			log.debug("System time to event value is: " + system.timeToEvent);
			for (var ID in eventList) {
				log.debug('Checking:', eventList[ID]);
				if (eventList[ID].original !== system.timeToEvent) {
					if (eventList[ID].notify == eventList[ID].original) {
						log.debug('Updating NOTIFY value ' + eventList[ID].notify + ' to value of ' + system.timeToEvent + ' on event ', eventList[ID]);
						eventList[ID].notify = system.timeToEvent;
					}
					log.debug('Updating ORIGINAL value ' + eventList[ID].original + ' to value of ' + system.timeToEvent + ' on event ', eventList[ID]);
					eventList[ID].original = system.timeToEvent;
				}
			}
			storeEvents();
		}

		function loadEvents() {
			var tempObj = storageOpsEventList.load(STORAGE_KEY_NAME);
			log.debug('Loaded : ', tempObj);
			for (var ID in tempObj) {
				eventList[ID] = tempObj[ID];
			}
		}

		function shouldRecycleEvent(eventObj) {
			return eventObj.start + system.recycleOlderThan < Date.now();
		}

		function shouldNotify(eventObj) {
			return eventObj.accepted && eventObj.dismissed === false && eventObj.start - eventObj.notify < Date.now() // starts in less than notify time
			 && inNotifyRange(eventObj);
		}

		function inNotifyRange(event) {
			if (event.duration === undefined || event.duration === 0) {
				return event.start + system.triggerNotOlderThan > Date.now(); // no duration, not too old
			}
			return event.start + event.duration > Date.now(); // have duration and did not finish yet
		}

		function shouldAddEvent(eventObj) {
			var eventId = getID(eventObj.unid);

			if (shouldRecycleEvent(eventObj)) {
				// too old
				log.debug('Event ID \'' + eventId + '\' too old - no action taken');
				return false;
			}

			if (!(eventId in eventList)) {
				log.debug('Event ID \'' + eventId + '\' not on list - adding');
				return true;
			} else if (eventList[eventId].start !== eventObj.start) {
				if (eventsOnSameDay(eventList[eventId], eventObj)) {
					// same day - reschedule -> update
					log.debug('Event ID \'' + eventId + '\' on list. Stored start time is ' + new Date(eventList[eventId].start).toString() + ' but detected ' + new Date(eventObj.start).toString() + ' on same day - thus replacing');
					return true;
				}

				if (eventList[eventId].start > eventObj.start) {
					// "nearer" event -> overwrite event more in future with closer
					log.debug('Event ID \'' + eventId + '\' on list. Stored start time is ' + new Date(eventList[eventId].start).toString() + ' but detected ' + new Date(eventObj.start).toString() + ' - starts sooner - thus replacing');
					return true;
				}
			} else if (eventList[eventId].accepted !== eventObj.accepted) {
				log.debug('Event ID \'' + eventId + '\' on list, but incorrect approval status - replacing');
				return true;
			}
			log.debug('Event ID \'' + eventId + '\' - no action taken');
			return false;
		}

		function eventsOnSameDay(eventA, eventB) {
			return dateutils.dateOnly(eventA.start).getTime() === dateutils.dateOnly(eventB.start).getTime();
		}

		/**
	  * Listener for meetingCollector
	  */
		function updateEventsFromDOM(events) {
			recycleEvents(); // remove old first
			var added = events.filter(shouldAddEvent).map(eventAdd);
			if (added.length > 0) {
				storeEvents();
			}
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23), __webpack_require__(1), __webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (GM_ajax, createLogger, strings) {

		var log = createLogger('API/Calendar');

		var CONST_DEFAULT_TIMEOUT = 20000;
		var baseUrl = document.location.origin;

		var padLeft = strings.padLeft;

		// public API
		return {
			eventsForNextDay: eventsForNextHours.bind(null, 24)
		};

		function eventsForNextHours(hours, timeout) {
			var opts = {
				timeout: timeout || CONST_DEFAULT_TIMEOUT
			};
			var now = new Date();
			var fromDate = hoursOnlyUTCStringFormat(now);
			now.setHours(now.getHours() + hours);
			var untilDate = hoursOnlyUTCStringFormat(now);

			var url = baseUrl + '/livemail/iNotes/Proxy/?OpenDocument&Form=s_ReadViewEntries_JSON&Count=-1&KeyType=time&TZType=UTC&StartKey=' + fromDate + '&UntilKey=' + untilDate + '&PresetFields=FolderName%3B(%24CSAPIs)&xhr=1&sq=1';

			return GM_ajax(url, opts).then(parseEvents);
		}

		function hoursOnlyUTCStringFormat(dateO) {
			return '' + dateO.getUTCFullYear() + padLeft(dateO.getUTCMonth() + 1, 2) + padLeft(dateO.getUTCDate(), 2) + 'T' + dateO.getUTCHours() + '0000,00Z';
		}

		function UTCStringToDate(utcString) {
			return new Date(Date.UTC(utcString.substr(0, 4), parseInt(utcString.substr(4, 2), 10) - 1, utcString.substr(6, 2), utcString.substr(9, 2), utcString.substr(11, 2)));
		}

		function parseEvents(xhrObj) {
			log.debug("Parsing events json", xhrObj);
			return xhrObj.responseJson.entries.viewentry.map(parseEventEntry);
		}

		function parseEventEntry(entryJsonObj) {
			var boundByName = dataByName.bind(null, entryJsonObj);
			var room = boundByName('$Room').text[0];
			var location = boundByName('$Location').text[0];

			var startEntry = boundByName('$StartDateTime');
			var startDate = UTCStringToDate(startEntry.datetime === undefined ? startEntry.datetimelist.datetime[0][0] : startEntry.datetime[0]);
			var durationEntry = boundByName('$Duration');
			var duration = parseInt(durationEntry.number === undefined ? durationEntry.numberlist.number[0][0] : durationEntry.number[0], 10);
			var endDate = new Date(startDate.getTime());
			endDate.setSeconds(startDate.getSeconds() + duration);

			var timeString = isNaN(duration) ? '' : padLeft(startDate.getHours(), 2) + ':' + padLeft(startDate.getMinutes(), 2) + ' - ' + padLeft(endDate.getHours(), 2) + ':' + padLeft(endDate.getMinutes(), 2);

			return {
				unid: entryJsonObj['@unid'],
				subject: boundByName('$Subject').text[0],
				start: startDate.getTime(),
				chair: boundByName('$Chair').text[0],
				time: timeString,
				repeats: boundByName('$Repeats').number[0],
				room: room,
				location: location,
				place: room.length !== 0 ? room : location,
				accepted: isAccepted(boundByName)
			};
		}

		function isAccepted(boundByNameFc) {
			// parse icons?
			return boundByNameFc('$NoticeType').text[0] == 'A';
		}

		function dataByName(entryJsonO, name) {
			// log.debug("Finding ", name, " in ", entryJsonO );
			return entryJsonO.entrydata.filter(function (i) {
				return i['@name'] === name;
			}).pop();
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

		return {
			padLeft: padLeft
		};

		/**
	  * Pads string from left
	  * @param {string} s String to pad
	  * @param {number} length
	  * @param {string} [char='0'] Character to use as padding
	  * @returns
	  */
		function padLeft(s, length) {
			var char = arguments.length <= 2 || arguments[2] === undefined ? '0' : arguments[2];

			return (Array(length).join(char) + s).slice(-length);
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(8), __webpack_require__(32), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (createLogger, $, parseEventDom, DOMListeners) {
		var name = "MeetingsCollector";

		var log = createLogger(name);

		var CONST_COLLECTING_PERIOD = 5 * 60 * 1000;
		var CONST_INITIAL_WAIT = 5000; // delay on start before collecting DOM data

		var EVENT_SELECTOR = '.event';

		var listeners = new Map();

		var eventCollectorID = null;

		var api = {
			isRunning: isRunning,
			addListener: addListener,
			removeListener: removeListener,
			checkNow: collectAndDispatch
		};

		return api;

		function scheduleNextCollect() {
			clearTimeout(eventCollectorID);
			eventCollectorID = setTimeout(collectAndDispatch, CONST_COLLECTING_PERIOD);
		}

		function collectAndDispatch() {
			dispatchEvents(collectEventsFromDom());
			scheduleNextCollect();
		}

		function isRunning() {
			return eventCollectorID !== null;
		}

		function checkCollector() {
			log.debug("Amount of enabled listeners is " + listeners.size);
			if (!isRunning() && listeners.size > 0) {
				enableCollector();
			} else if (isRunning() && listeners.size === 0) {
				disableCollector();
			}
		}

		function dispatchEvents(eventList) {
			listeners.forEach(function (value, key) {
				log.debug("Dispatching all events to " + key);
				value.updateEventList(eventList);
			});
		}

		function addListener(listener) {
			if (listener.name === undefined || typeof listener.updateEventList !== 'function') {
				log.error('Listener is missing \'name\' property or \'updateEventList\' function');
				return;
			}
			log.debug('Adding listener : ' + listener.name);
			if (listeners.has(listener.name)) {
				log.error('Listener ' + listener.name + ' is already registered');
				return;
			}

			listeners.set(listener.name, listener);
			checkCollector();
		}

		function removeListener(listener) {
			log.debug('Removing listener : ' + listener.name);
			if (!listeners.has(listener.name)) {
				log.error('no listener with name ' + listener.name + ' is registered');
			}
			listeners.delete(listener.name);
			checkCollector();
		}

		function disableCollector() {
			log.debug("Disabling collector");
			clearTimeout(eventCollectorID);
			eventCollectorID = null;
			DOMListeners.removeCalendarListener(collectAndDispatch);
		}

		function enableCollector() {
			log.debug("Enabling collector");
			DOMListeners.addCalendarListener(collectAndDispatch);
			setTimeout(collectAndDispatch, CONST_INITIAL_WAIT);
		}

		function collectEventsFromDom() {
			var eventList = Array.prototype.map.call(document.querySelectorAll(EVENT_SELECTOR), function (el) {
				return parseEventDom(el);
			});
			log.debug("Collected events", eventList);
			return eventList;
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(33), __webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, language, strings) {

		var USE_DOJO = true;
		var padToTwo = function padToTwo(string) {
			return strings.padLeft(string, 2, '0');
		};

		return processDomToEvent;

		function getDojoModelByNode(node) {
			return unsafeWindow.dijit.byId(node.id).model;
			// return window.eval('dijit.byId(' + node.id + ').model');
		}

		function startByLanguage(jqDomObj) {
			if (language.used !== 'en') {
				return Date.parse(language.getTime(jqDomObj.attr('datetime')));
			} else {
				return Date.parse(jqDomObj.attr('datetime'));
			}
		}

		function eventPlace(eventDom) {
			if (eventDom.children('dd.room').length !== 0) {
				return eventRoom(eventDom);
			} else {
				return eventLocation(eventDom);
			}
		}

		function eventRoom(eventDom) {
			return textBySelector(eventDom, 'dd.room');
		}

		function eventLocation(eventDom) {
			return textBySelector(eventDom, 'dd.location');
		}

		function textBySelector(jqDomObj, selector) {
			return jqDomObj.children(selector).text();
		}

		function processDomToEvent(domObj) {
			if (USE_DOJO) {
				try {
					return processFromDojo(domObj);
				} catch (e) {
					// ignore error, retry from DOM
					console.error('ParseDomEvent error', e);
				}
			}

			return processDOMData(domObj);
		}

		function processFromDojo(domObj) {
			var model = getDojoModelByNode(domObj);
			var start = model.oStartTime.getDate();
			var end = model.oEndTime.getDate();

			var eventDOM = $(domObj).children();
			if (!eventDOM.length) {
				eventDOM = $('div.eventPopup').children();
			}
			var time = textBySelector(eventDOM, 'dd.time') || padToTwo(start.getHours()) + ':' + padToTwo(start.getMinutes()) + (model.type !== 'reminder' ? ' - ' + padToTwo(end.getHours()) + ':' + padToTwo(end.getMinutes()) : '');

			return {
				accepted: !domObj.classList.contains('unprocessed'),
				domId: domObj.id,
				unid: model.unid,
				start: start.getTime(),
				duration: parseInt(model.duration, 10) * 1000,
				subject: model.subject,
				time: time,
				chair: model.chair,
				room: model.room,
				location: model.location,
				place: model.room ? model.room : model.location,
				alarmOffset: model.alarmOffset !== undefined ? parseInt(model.alarmOffset, 10) : undefined,
				type: model.type
			};
		}

		function processDOMData(domObj) {
			var jqDomObj = $(domObj);

			var eventDOM = jqDomObj.children();
			if (!eventDOM.length) {
				eventDOM = $('div.eventPopup').children();
			}

			var boundTextBySelector = textBySelector.bind(null, eventDOM);

			var container = jqDomObj.find('.eventDetailContainer');
			if (!container.length) {
				container = $('div.eventPopup').find('.eventDetailContainer');
			}

			var type = undefined;
			if (container.hasClass('reminder')) {
				type = 'reminder';
			} else if (container.hasClass('meeting')) {
				type = 'meeting';
			}

			return {
				accepted: !jqDomObj.hasClass('unprocessed'),
				domId: jqDomObj.attr('id'),
				unid: jqDomObj.attr('unid'),
				start: startByLanguage(jqDomObj),
				duration: 0,
				subject: boundTextBySelector('dd.subject'),
				time: boundTextBySelector('dd.time'),
				chair: boundTextBySelector('dd.chair'),
				room: eventRoom(eventDOM),
				location: eventLocation(eventDOM),
				place: eventPlace(eventDOM),
				alarmOffset: undefined,
				type: type
			};
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

		var languages = {
			en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			cs: ['po', 'út', 'st', 'čt', 'pá', 'so', 'ne', 'led', 'úno', 'bře', 'dub', 'kvě', 'čer', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
			de: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so', 'jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez'],
			fr: ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.', 'janv.', 'fév.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
			'pt-br': ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
			tmp2: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			tmp3: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			tmp4: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			tmp5: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		};

		var api = {
			used: $('html').attr("lang"),
			translate: function translate(d) {
				var p = $.inArray(d.toLocaleLowerCase(), languages[api.used]);
				return languages.en[p];
			},
			getTime: function getTime(s) {
				var res = [];
				s.replace(",", "").split(" ").forEach(function (e) {
					if (e.match(/[a-z]/i)) {
						res.push(api.translate(e));
					} else {
						res.push(e);
					}
				});
				return res.join(" ");
			}
		};

		return api;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(26), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (scriptNode, createLogger) {

		var log = createLogger('Listeners');

		var EVENT_NAME_PREFIX = 'AVE_LISTENER';

		var CALENDAR_CHANGE_EVENT = EVENT_NAME_PREFIX + '.CALENDAR.change';
		var CALENDAR_ENABLE_EVENT = EVENT_NAME_PREFIX + '.CALENDAR.enable';
		var CALENDAR_DISABLE_EVENT = EVENT_NAME_PREFIX + '.CALENDAR.disable';

		var FOLDERS_CHANGE_EVENT = EVENT_NAME_PREFIX + '.FOLDERS.change';
		var FOLDERS_ENABLE_EVENT = EVENT_NAME_PREFIX + '.FOLDERS.enable';
		var FOLDERS_DISABLE_EVENT = EVENT_NAME_PREFIX + '.FOLDERS.disable';

		var MAIL_CHANGE_EVENT = EVENT_NAME_PREFIX + '.MAIL.change';
		var MAIL_ENABLE_EVENT = EVENT_NAME_PREFIX + '.MAIL.enable';
		var MAIL_DISABLE_EVENT = EVENT_NAME_PREFIX + '.MAIL.disable';

		var MAILLIST_CHANGE_EVENT = EVENT_NAME_PREFIX + '.MAILLIST.change';
		var MAILLIST_ENABLE_EVENT = EVENT_NAME_PREFIX + '.MAILLIST.enable';
		var MAILLIST_DISABLE_EVENT = EVENT_NAME_PREFIX + '.MAILLIST.disable';

		var SCRIPT_NODE_ID = 'AVE_listeners_script';
		var CALENDAR_SELECTOR = '.calendar-Container'; // '.calendarDate';
		var FOLDERS_SELECTOR = '.folder-tray.isLoaded';
		var MAIL_SELECTOR = '.preview-panel';
		var MAILLIST_SELECTOR = '.messageList';

		var HANDLER_CALL_DELAY = 300; // delay between change detected and handler call - allows to call only once after lot of changes happened
		var ENSURE_INTERVAL = 1000; // interval for checking DOM object for selector is still valid, rebind MutationObservers if not

		var _listenerEnabled = false;

		var _types = {
			calendar: {
				handlers: new Set()
			},
			folders: {
				handlers: new Set()
			},
			mail: {
				handlers: new Set()
			},
			mailList: {
				handlers: new Set()
			}
		};

		return {
			addCalendarListener: enableListenerType.bind(null, _types.calendar.handlers, CALENDAR_ENABLE_EVENT),
			addFoldersListener: enableListenerType.bind(null, _types.folders.handlers, FOLDERS_ENABLE_EVENT),
			addMailListener: enableListenerType.bind(null, _types.mail.handlers, MAIL_ENABLE_EVENT),
			addMailListListener: enableListenerType.bind(null, _types.mailList.handlers, MAILLIST_ENABLE_EVENT),
			removeCalendarListener: removeListener.bind(null, _types.calendar.handlers, CALENDAR_DISABLE_EVENT),
			removeFoldersListener: removeListener.bind(null, _types.folders.handlers, FOLDERS_DISABLE_EVENT),
			removeMailListener: removeListener.bind(null, _types.mail.handlers, MAIL_DISABLE_EVENT),
			removeMailListListener: removeListener.bind(null, _types.mailList.handlers, MAILLIST_DISABLE_EVENT)
		};

		/**
	  * Removes listener for changes of type
	  * @param {Set<function>} handlers
	  * @param {string} event
	  * @param {function} handler
	  */
		function removeListener(handlers, disableEvent, handler) {
			log.debug('Removing listener, event \'' + disableEvent + '\'');
			handlers.delete(handler);
			if (handlers.size === 0) {
				log.debug('Last listener, sending event \'' + disableEvent + '\'');
				window.postMessage(disableEvent, '*');
			}
			// check if any handlers remain and disable if none
			if (Object.getOwnPropertyNames(_types).map(function (type) {
				return _types[type].handlers.size;
			}).filter(function (size) {
				return size > 0;
			}).length === 0) {
				// last handler was removed, disable window listener
				log.debug('No handlers left, stopping window listen');
				window.removeEventListener('message', onMessage);
				_listenerEnabled = false;
			}
		}

		/**
	  * Adds listener for changes
	  * @param {Set<function>} handlers
	  * @param {string} enableEvent
	  * @param {function} handler
	  */
		function enableListenerType(handlers, enableEvent, handler) {
			log.debug('Adding listener, event \'' + enableEvent + '\'');
			createPageListener();
			handlers.add(handler);
			if (handlers.size === 1) {
				log.debug('First listener, sending event \'' + enableEvent + '\'');
				window.postMessage(enableEvent, '*');
			}
		}

		/**
	  * Schedules call to handlers for specific observer object
	  * @param {Object} type
	  * @param {Set<function>} type.handlers
	  * @param {Object} event
	  */
		function onTypeObserverChanged(type, event) {
			log.debug('Received message:', event);
			notifyTypeHandlers(type.handlers, event);
		}

		/**
	  * Calls handlers
	  * @param {Set<function>} handlers
	  */
		function notifyTypeHandlers(handlers, event) {
			log.debug('Notifying handlers of event ', event);
			handlers.forEach(function (handler) {
				handler();
			});
		}

		/**
	  * Handles events from window
	  * @param {Object} event
	  */
		function onMessage(event) {
			if (event.source !== window && !(unsafeWindow && unsafeWindow === event.source)) {
				return;
			}
			if (typeof event.data == 'string') switch (event.data) {
				case CALENDAR_CHANGE_EVENT:
					onTypeObserverChanged(_types.calendar, event);
					break;
				case FOLDERS_CHANGE_EVENT:
					onTypeObserverChanged(_types.folders, event);
					break;
				case MAIL_CHANGE_EVENT:
					onTypeObserverChanged(_types.mail, event);
					break;
				case MAILLIST_CHANGE_EVENT:
					onTypeObserverChanged(_types.mailList, event);
					break;
			}
		}

		function createPageListener() {
			if (_listenerEnabled) {
				return;
			}
			log.debug('Starting window listen');
			window.addEventListener('message', onMessage, false);
			_listenerEnabled = true;

			if (document.getElementById(SCRIPT_NODE_ID)) {
				return; // dont recreate if exists
			}

			log.debug('Injecting observers script');
			var sNode = scriptNode.addScript('\n\t\t\t(function ' + SCRIPT_NODE_ID + '(){\n\n\t\t\t\tvar _types = {\n\t\t\t\t\tcalendar: {\n\t\t\t\t\t\tobserver: new MutationObserver(onChange.bind(null,\'' + CALENDAR_CHANGE_EVENT + '\')),\n\t\t\t\t\t\tselector: \'' + CALENDAR_SELECTOR + '\',\n\t\t\t\t\t\telement: null\n\t\t\t\t\t},\n\t\t\t\t\tfolders: {\n\t\t\t\t\t\tobserver: new MutationObserver(onChange.bind(null,\'' + FOLDERS_CHANGE_EVENT + '\')),\n\t\t\t\t\t\tselector: \'' + FOLDERS_SELECTOR + '\',\n\t\t\t\t\t\telement: null\n\t\t\t\t\t},\n\t\t\t\t\tmail: {\n\t\t\t\t\t\tobserver: new MutationObserver(onChange.bind(null,\'' + MAIL_CHANGE_EVENT + '\')),\n\t\t\t\t\t\tselector: \'' + MAIL_SELECTOR + '\',\n\t\t\t\t\t\telement: null\n\t\t\t\t\t},\n\t\t\t\t\tmailList: {\n\t\t\t\t\t\tobserver: new MutationObserver(onChange.bind(null,\'' + MAILLIST_CHANGE_EVENT + '\')),\n\t\t\t\t\t\tselector: \'' + MAILLIST_SELECTOR + '\',\n\t\t\t\t\t\telement: null\n\t\t\t\t\t}\n\t\t\t\t};\n\n\t\t\t\tvar _timers = {\n\t\t\t\t\t\'' + CALENDAR_CHANGE_EVENT + '\': null,\n\t\t\t\t\t\'' + FOLDERS_CHANGE_EVENT + '\': null,\n\t\t\t\t\t\'' + MAIL_CHANGE_EVENT + '\': null,\n\t\t\t\t\t\'' + MAILLIST_CHANGE_EVENT + '\': null\n\t\t\t\t};\n\n\t\t\t\tvar observerConfig = { attributes: true, childList: true, subtree: true };\n\t\t\t\tvar _ensureInterval;\n\n\t\t\t\tfunction ensureObservers() {\n\t\t\t\t\tvar types = Object.getOwnPropertyNames(_types);\n\t\t\t\t\tvar ix;\n\t\t\t\t\tvar type;\n\t\t\t\t\tfor( ix = 0; ix < types.length; ix++ ) {\n\t\t\t\t\t\ttype = types[ix];\n\t\t\t\t\t\tif ( document.querySelector(_types[type].selector) !== _types[type].element ) {\n\t\t\t\t\t\t\t// console.log("Reattaching listener for " + type);\n\t\t\t\t\t\t\tremoveListener(type);\n\t\t\t\t\t\t\tattachListener(type);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tfunction attachListener(type) {\n\t\t\t\t\t_types[type].element = document.querySelector(_types[type].selector);\n\t\t\t\t\tif ( _types[type].element === null ) { // wait for element\n\t\t\t\t\t\tsetTimeout( attachListener.bind(null, type), 80 );\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t_types[type].observer.observe( _types[type].element, observerConfig);\n\t\t\t\t\tif ( !_ensureInterval ) {\n\t\t\t\t\t\t_ensureInterval = setInterval( ensureObservers, ' + ENSURE_INTERVAL + ' );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tfunction removeListener(type) {\n\t\t\t\t\t_types[type].observer.disconnect();\n\t\t\t\t\t_types[type].element = null;\n\t\t\t\t\tcheckRemoveEnsureInterval();\n\t\t\t\t}\n\n\t\t\t\tfunction checkRemoveEnsureInterval() {\n\t\t\t\t\tvar types = Object.getOwnPropertyNames(_types);\n\t\t\t\t\tvar ix;\n\t\t\t\t\tvar needed = false;\n\t\t\t\t\tfor( ix = 0; ix < types.length; ix++ ) {\n\t\t\t\t\t\tif ( _types[types[ix]].element !== null ) {\n\t\t\t\t\t\t\tneeded = true;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif ( needed === false ) {\n\t\t\t\t\t\t// console.log("Last listener removed, disabling ensure interval");\n\t\t\t\t\t\tclearInterval(_ensureInterval);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tfunction onChange(changeEvent) {\n\t\t\t\t\t// console.log("Sending event " + changeEvent );\n\t\t\t\t\tclearTimeout( _timers[changeEvent] );\n\t\t\t\t\t_timers[changeEvent] = setTimeout( window.postMessage, ' + HANDLER_CALL_DELAY + ', changeEvent, \'*\' );\n\t\t\t\t}\n\n\t\t\t\tfunction onMessage(event) {\n\t\t\t\t\tif ( event.source !== window ) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\tif ( typeof(event.data) == \'string\' ) {\n\t\t\t\t\t\tswitch( event.data ) {\n\t\t\t\t\t\t\tcase \'' + CALENDAR_ENABLE_EVENT + '\': attachListener(\'calendar\'); break;\n\t\t\t\t\t\t\tcase \'' + CALENDAR_DISABLE_EVENT + '\': removeListener(\'calendar\'); break;\n\n\t\t\t\t\t\t\tcase \'' + FOLDERS_ENABLE_EVENT + '\': attachListener(\'folders\'); break;\n\t\t\t\t\t\t\tcase \'' + FOLDERS_DISABLE_EVENT + '\': removeListener(\'folders\'); break;\n\n\t\t\t\t\t\t\tcase \'' + MAIL_ENABLE_EVENT + '\': attachListener(\'mail\'); break;\n\t\t\t\t\t\t\tcase \'' + MAIL_DISABLE_EVENT + '\': removeListener(\'mail\'); break;\n\n\t\t\t\t\t\t\tcase \'' + MAILLIST_ENABLE_EVENT + '\': attachListener(\'mailList\'); break;\n\t\t\t\t\t\t\tcase \'' + MAILLIST_DISABLE_EVENT + '\': removeListener(\'mailList\'); break;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\twindow.addEventListener(\'message\', onMessage, false );\n\t\t\t})();\n\t\t');
			sNode.id = SCRIPT_NODE_ID;
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		var INVALID_DATE = 'invalid date';

		return {
			dateOnly: dateOnly,
			INVALID_DATE: INVALID_DATE
		};

		/**
	  * Returns Date object with only year, month, day filled - strips hours/minutes/seconds
	  * @param {(Date|number)} date
	  */
		function dateOnly(dateArg) {
			if (dateArg === undefined) {
				throw new Error(INVALID_DATE);
			}
			if (typeof dateArg === 'number') {
				dateArg = new Date(dateArg);
			}
			return new Date(dateArg.getFullYear(), dateArg.getMonth(), dateArg.getDate());
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(1), __webpack_require__(28), __webpack_require__(12), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PluginBase, createLogger, EventCollector, storageOps, conf) {
		var name = "EventWebNotify";
		var description = "provide web browser notification for events";
		var log = createLogger(name);
		var storage = storageOps.getNamespace(name);
		var enabledByDefault = true;
		var collector = EventCollector;

		var enabled = false;
		var activeEvent = undefined;
		var activeEventPromiseResolve = undefined;

		var configuration = {
			GLOBAL_TimeToEvent: collector.system.configuration.GLOBAL_TimeToEvent,
			Default_Snooze_Time: conf.getConfigObj(name, "Default_Snooze_Time", "time", 5)
		};

		var EventWebNotify = function (_PluginBase) {
			_inherits(EventWebNotify, _PluginBase);

			function EventWebNotify() {
				_classCallCheck(this, EventWebNotify);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(EventWebNotify).call(this, name, enabledByDefault, description, configuration));
			}

			_createClass(EventWebNotify, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(EventWebNotify.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						collector.addPlugin(this);
						enabled = true;
					}
					setupAlertBox();
					setupNotificationBox();
					loadPriorActiveNotification();
				}
			}, {
				key: 'disable',
				value: function disable() {
					_get(Object.getPrototypeOf(EventWebNotify.prototype), 'disable', this).call(this);
					if (this.isEnabled()) {
						collector.removePlugin(this);
						enabled = false;
					}
					removeNotificationElements();
				}
			}, {
				key: 'reload',
				value: function reload() {
					collector.reload();
					_get(Object.getPrototypeOf(EventWebNotify.prototype), 'reload', this).call(this);
				}
			}, {
				key: 'fire',
				value: function fire(e) {
					log.debug("You have reached 'notify' function of " + name);
					log.debug("Web browser notification has been called with following details : ", e);

					if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) !== "object" || e === null) {
						log.debug("Incorrect event data provided - aborting");
						return false;
					}
					if (activeEvent !== undefined) {
						log.debug("There is already active notification");
						return false;
					} else {
						log.debug("There is no active notification. Notification will be triggered");
						return triggerNotification(e);
					}
				}
			}]);

			return EventWebNotify;
		}(PluginBase);

		return new EventWebNotify();

		function setupAlertBox() {
			if ($('#AVE-Alert_CSS').length === 0) {
				$('head').prepend('<style id="AVE-Alert_CSS">\n\t\t\t\t.AVE-Alert {font-family: Arial, Helvetica, sans-serif;}\n\t\t\t\t.AVE-Alert {position: fixed; left: 50%; top: 50%; margin: -150px 0px 0px -250px; width: 500px; height: 300px; background-color: rgb(255,255,255); z-index: 100000; box-shadow: 0px 0px 10px 1px #333; border: 1px solid #333;}\n\t\t\t\t.AVE-Alert_Message {height: 190px; overflow: auto; font-weight: 400;}\n\t\t\t\t.AVE-Alert_Message > span {margin: 3px 30px; display: block; font-size: 18px; color: #333}\n\t\t\t\t.AVE-Alert_Message > .AVE-Alert_Message_Subject {margin-top: 15px; font-weight: bolder; font-size: 20px;}\n\t\t\t\t.AVE-Alert_ConfirmBTN {background-color: white; border: none; margin: 5px 0px; height: 35px; text-align: center; font-weight: 800; transition: 200ms; box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5); padding: 0px;}\n\t\t\t\t.AVE-Alert_ConfirmBTN:hover {background-color: #333; color: white;}\n\t\t\t\t.AVE-Alert_ConfirmBTN {width: 480px; height: 40px; margin: 10px;}\n\t\t\t\t.AVE-Alert_ConfirmBTN:hover {box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);}\n\t\t\t\t.AVE-Alert > div {display: block;}\n\t\t\t\t.AVE-Alert_Banner {background-color: indianred; font-weight: 800; font-size: 22px; text-align: center; vertical-align: middle; line-height: 50px; height: 50px; color: white;}\n\t\t\t\t.AVE-Alert_Confirm {background-color: #DDD; width: 100%; height: 60px;}\n\t\t\t\t.AVE-Alert_Hidden {visibility: hidden; z-index: -1;}\n\t\t\t\t.AVE-Alert_Visible {visibility: visible;}\n\t\t\t\t</style>');
			} else {
				log.debug("Alert box CSS already exists");
			}
			if ($('#AVE-Alert_Box').length === 0) {
				$('body').prepend('\n\t\t\t\t<div id="AVE-Alert_Box" class="AVE-Alert AVE-Alert_Hidden">\n\t\t\t\t\t<div class="AVE-Alert_Banner"><span>! ERROR ENCOUNTERED !</span></div>\n\t\t\t\t\t<div class="AVE-Alert_Message">\n\t\t\t\t\t\t<span class="AVE-Alert_Message_Subject"></span>\n\t\t\t\t\t\t<span class="AVE-Alert_Message_Text"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="AVE-Alert_Confirm">\n\t\t\t\t\t\t<div><button class="AVE-Alert_ConfirmBTN" title="Confirm and close alert window">I UNDERSTAND</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>');
				$('button.AVE-Alert_ConfirmBTN').click(dismissAlert);
			} else {
				log.debug("Alert box DIV already exists");
			}
		}

		function removeNotificationElements() {
			$('#AVE-Alert_CSS').remove();
			$('#AVE-Alert_Box').remove();
			$('#AVE-Notification_CSS').remove();
			$('#AVE-Notification_Box').remove();
			$('#AVE-Notification_Box_Background').remove();
		}

		function setupNotificationBox() {
			if ($('#AVE-Notification_CSS').length === 0) {
				$('head').prepend('<style id="AVE-Notification_CSS">\n\t\t\t\t.AVE-Notification {font-family: Arial, Helvetica, sans-serif;}\n\t\t\t\t.AVE-Notification_Background {position: fixed;top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 99998; background-color: rgba(0,0,0,0.7);}\n\t\t\t\t.AVE-Notification {position: fixed; left: 50%; top: 50%; margin: -150px 0px 0px -250px; width: 500px; height: 300px; background-color: rgb(255,255,255); z-index: 99999; box-shadow: 0px 0px 50px 5px #333; border: 1px solid #333;}\n\t\t\t\t.AVE-Notification_Message {height: 150px; overflow: auto; font-weight: 400;}\n\t\t\t\t.AVE-Notification_Message > span {margin: 3px 30px; display: block; font-size: 18px; color: #333}\n\t\t\t\t.AVE-Notification_Message > span:first-child {margin-top: 15px;}\n\t\t\t\t.AVE-Notification_Bold {font-weight: bold;}\n\t\t\t\t.AVE-Notification_DismissBTN, .AVE-Notification_OpenBTN, .AVE-Notification_SnoozeSOE, .AVE-Notification_SnoozeBTN, .AVE-Notification_SnoozeINP {background-color: white; border: none; margin: 5px 0px; height: 40px; text-align: center; font-weight: 800; transition: 200ms; box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5); padding: 0px;}\n\t\t\t\t.AVE-Notification_SnoozeBTN {width: 183px; height: 30px; margin: 10px 0px 5px 10px; border-right: none; font-size: 12px; float: left;}\n\t\t\t\t.AVE-Notification_SnoozeINP {width: 50px; height: 30px; margin: 10px 5px 5px 0px; float: left;}\n\t\t\t\t.AVE-Notification_SnoozeINP:focus { background-color: #333; color: white;}\n\t\t\t\t.AVE-Notification_SnoozeSOE {width: 233px; height: 30px; margin: 10px 10px 5px 5px; font-size: 12px; float: right;}\n\t\t\t\t.AVE-Notification_SnoozeBTN:hover, .AVE-Notification_SnoozeSOE:hover {background-color: #333; color: white;}\n\t\t\t\t.AVE-Notification_OpenBTN {width: 233px; height: 40px; margin: 5px 5px 10px 10px; float: left;}\n\t\t\t\t.AVE-Notification_DismissBTN {width: 233px; height: 40px; margin: 5px 10px 10px 5px; float: right;}\n\t\t\t\t.AVE-Notification_OpenBTN:hover {background-color: #00b4a0; color: white;}\n\t\t\t\t.AVE-Notification_DismissBTN:hover {background-color: indianred; color: white;}\n\t\t\t\t.AVE-Notification_OpenBTN:hover, .AVE-Notification_DismissBTN:hover {box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);}\n\t\t\t\t.AVE-Notification > div {display: block;}\n\t\t\t\t.AVE-Notification_Banner {background-color: #00b4a0; font-weight: 800; font-size: 22px; text-align: center; vertical-align: middle; line-height: 50px; height: 50px; color: white;}\n\t\t\t\t.AVE-Notification_Snooze {background-color: #DDD; height: 45px;}\n\t\t\t\t.AVE-Notification_Snooze:last-child {float: right;}\n\t\t\t\t.AVE-Notification_Confirm {background-color: #DDD; width: 100%; height: 55px;}\n\t\t\t\t.AVE-Notification_Confirm:last-child {float: right;}\n\t\t\t\t.AVE-Notification_Custom {width: 100%;}\n\t\t\t\t.AVE-Notification_Hidden {visibility: hidden; z-index: -1;}\n\t\t\t\t.AVE-Notification_Visible {visibility: visible;}\n\t\t\t</style>');
			} else {
				log.debug("Notification CSS already exists");
			}
			if ($('#AVE-Notification_Box').length === 0) {
				$('body').prepend('\n\t\t\t\t<div id="AVE-Notification_Box_Background" class="AVE-Notification_Background AVE-Notification_Hidden"></div>\n\t\t\t\t<div id="AVE-Notification_Box" class="AVE-Notification AVE-Notification_Hidden">\n\t\t\t\t\t<div class="AVE-Notification_Banner"><span>EVENT NOTIFICATION</span></div>\n\t\t\t\t\t<div class="AVE-Notification_Message"><span></span></div>\n\t\t\t\t\t<div class="AVE-Notification_Snooze">\n\t\t\t\t\t\t<div><button class="AVE-Notification_SnoozeBTN" title="Snooze notifications for provided amount of minutes">SNOOZE</button></div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<input class="AVE-Notification_SnoozeINP" type="number"\n\t\t\t\t\t\t\t\tvalue="' + configuration.Default_Snooze_Time.value + '"\n\t\t\t\t\t\t\t\tmax="' + configuration.Default_Snooze_Time.element.elementMax + '"\n\t\t\t\t\t\t\t\tmin="' + configuration.Default_Snooze_Time.element.elementMin + '"\n\t\t\t\t\t\t\t\ttitle="Define amount of minutes to snooze notification of this event">\n\t\t\t\t\t\t\t</input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div><button class="AVE-Notification_SnoozeSOE" title="Snooze notifications till start of event">SNOOZE TILL START</input></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="AVE-Notification_Confirm">\n\t\t\t\t\t\t<div><button class="AVE-Notification_OpenBTN" title="Confirm notification and open meeting details - no further notifications">OPEN</button></div>\n\t\t\t\t\t\t<div><button class="AVE-Notification_DismissBTN" title="Dismiss notification for this event">DISMISS</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>');

				$('button.AVE-Notification_OpenBTN').click(handleOpenButton);
				$('button.AVE-Notification_DismissBTN').click(handleDismissButton);
				$('button.AVE-Notification_SnoozeSOE').click(handleSnoozeUntilStartButton);
				$('button.AVE-Notification_SnoozeBTN').click(handleSnoozeButton);
			} else {
				log.debug("Notification DIV already exists");
			}
		}

		function handleOpenButton() {
			$('button[data-dojo-attach-point="backtoCurrentTime"]').click();
			clickEventSubjectElement();
			collector.dismissEvent(activeID());
			hideNotification();
		}

		function handleDismissButton() {
			collector.dismissEvent(activeID());
			hideNotification();
		}

		function handleSnoozeUntilStartButton() {
			if (activeEvent.start < Date.now()) {
				var subject = "Event already started";
				var text = "since AgileVerse is not yet able to control spacetime, this event cannot be snoozed until it's start, because event has already started. If you really want to just snooze it, please use snooze button providing amount of minutes you want to snooze this event from now on";
				showAlert(subject, text);
				return;
			} else {
				snoozeUntil(0);
			}
		}

		function handleSnoozeButton() {
			snoozeUntil($('input.AVE-Notification_SnoozeINP').val());
		}

		function snoozeUntil(time) {
			if (time === '') {
				log.debug("Provided value is not a number");
				var subject = "Provided value is not a number";
				var text = "unable to snooze event for amount of time provided as provided value is not a number. Please provide valid numerical value only!";
				showAlert(subject, text);
				return;
			} else {
				collector.snoozeEvent(activeID(), time);
				hideNotification();
			}
		}

		function clickEventSubjectElement() {
			if (activeEventDomID() !== undefined) {
				return $('#' + activeEventDomID() + ' dd.subject').click();
			}
			return $("dl[unid=" + originalActiveID() + "] > dd.subject").click();
		}

		function hideNotification() {
			$('div.AVE-Notification_Background').removeClass("AVE-Notification_Visible").addClass("AVE-Notification_Hidden");
			$('div.AVE-Notification').removeClass("AVE-Notification_Visible").addClass("AVE-Notification_Hidden");
			$('div.AVE-Notification_Message > span').empty();
			activeEvent = undefined;
			activeEventPromiseResolve(true);
			activeEventPromiseResolve = undefined;
			storage.save("ActiveEventID", "");
		}

		function showAlert(subject, text) {
			$('.AVE-Alert_Message_Subject').text(subject);
			$('.AVE-Alert_Message_Text').text(text);
			$('.AVE-Alert').removeClass("AVE-Alert_Hidden").addClass("AVE-Alert_Visible");
			if (activeEvent == undefined) {
				$('div.AVE-Notification_Background').removeClass("AVE-Notification_Hidden").addClass("AVE-Notification_Visible");
			}
		}

		function dismissAlert() {
			$('.AVE-Alert').removeClass("AVE-Alert_Visible").addClass("AVE-Alert_Hidden");
			if (activeEvent == undefined) {
				$('div.AVE-Notification_Background').removeClass("AVE-Notification_Visible").addClass("AVE-Notification_Hidden");
			}
			$('.AVE-Alert_Message_Subject, .AVE-Alert_Message_Text').empty();
		}

		function loadPriorActiveNotification() {
			var e = storage.load("ActiveEventID");
			if (e !== "") {
				log.debug("Prior active notification found, removing dismiss");
				collector.removeDismissOnEvent(e);
			}
		}

		function activeID() {
			log.debug("Active event ID is : " + activeEvent.AVEunid);
			return activeEvent.AVEunid;
		}

		function originalActiveID() {
			return activeEvent.unid;
		}

		function activeEventDomID() {
			return activeEvent.domid;
		}

		function triggerNotification(event) {
			activeEvent = event;
			var p = new Promise(function (resolve) {
				activeEventPromiseResolve = resolve;
			});
			log.debug("Triggering web notification");

			$('div.AVE-Notification_Message').empty().append("<span>" + event.time + "</span>").append('<span class="AVE-Notification_Bold">' + event.subject + '</span>').append('<span>' + event.chair + '</span>').append('<span>' + event.place + '</span>');

			$('div.AVE-Notification_Background').removeClass("AVE-Notification_Hidden").addClass("AVE-Notification_Visible");
			$('div.AVE-Notification').removeClass("AVE-Notification_Hidden").addClass("AVE-Notification_Visible");
			storage.save("ActiveEventID", activeEvent.AVEunid);
			return p;
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(31), __webpack_require__(1), __webpack_require__(12), __webpack_require__(33), __webpack_require__(35), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PluginBase, collector, createLogger, storageOps, language, dateutils, conf) {
		var name = "EventDAG";
		var description = "provide day at glance overview";
		var desc_HandlePosition = 'Provide in percent position of DAG handle (DAG button on right side of your screen that is visible if DAG is not pinned). Position is counted from top of your Verse page, means 0% is very top and 100% is most bottom. Specif only numerical value (we already know it in in percent :)';
		var enabledByDefault = false;

		var CONST_SWITCH_NAME = 'AVE-DAGSwitch';
		var CALENDAR_DOM_SELECTOR = '.calendar-Container';

		var log = createLogger(name);
		var storage = storageOps.getNamespace(name);
		var dateOnly = dateutils.dateOnly;
		var INVALID_DATE = dateutils.INVALID_DATE;

		var enabled = false;

		var sections = new Set();

		var currentCalendarDatetime = undefined;

		// let effect_description = 'Enables visual slide in effect for each item in DAG upon hovering your mouse over it. If disabled, only background color will change without any effect.';

		var configuration = {
			location: conf.getConfigObj(name, "Event_Location_Visible", "select", { default: "true", options: ["true", "false"] }),
			width: conf.getConfigObj(name, "DAG_Panel_Width", "width", 250),
			handle_position: conf.getConfigObj(name, "DAG_Handle_Position", "percent", '30', desc_HandlePosition),
			color_accepted: conf.getConfigObj(name, "Accepted_Event_Color", "color", "#0d9184"),
			color_not_accepted: conf.getConfigObj(name, "Unprocessed_Event_Color", "color", "#606060")
			// effect: conf.getConfigObj(name,"Enable_On_Hover_Effect","select",{default: "false", options: ["true","false"]},effect_description)
		};

		var EventDAG = function (_PluginBase) {
			_inherits(EventDAG, _PluginBase);

			function EventDAG() {
				_classCallCheck(this, EventDAG);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(EventDAG).call(this, name, enabledByDefault, description, configuration));
			}

			_createClass(EventDAG, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(EventDAG.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						collector.addListener(this);
						createCSS(this.ID);
						createHtml(this.ID);
						enabled = true;
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					_get(Object.getPrototypeOf(EventDAG.prototype), 'disable', this).call(this);
					if (this.isEnabled()) {
						collector.removeListener(this);
						removeHtml(this.ID);
						removeCSS(this.ID);
						enabled = false;
					}
				}
			}, {
				key: 'reload',
				value: function reload() {
					removeCSS(this.ID);
					createCSS(this.ID);
				}
			}, {
				key: 'updateEventList',
				value: function updateEventList(eventList) {
					try {
						this.log.debug('DAG_data onfired: ', eventList);
						var calendarDate = updateCalendarDate();

						updateDAGHtml(eventList.filter(isEventToday.bind(null, calendarDate)));
					} catch (e) {
						if (e.message === INVALID_DATE) {
							this.log.debug('DAG_data error parsing date from DAG');
							return;
						}
						this.log.error(e);
					}
				}
			}, {
				key: 'addSection',
				value: function addSection(name) {
					if (sections.has(name)) {
						log.error('Section with name ' + name + ' already exists');
						return;
					}
					sections.add(name);
					return $('#AVE-DAG-content').append('<div id="' + sectionIdFromName(name) + '" class="AVE-DAG-section"></div>').find('#' + sectionIdFromName(name));
				}
			}, {
				key: 'removeSection',
				value: function removeSection(name) {
					if (!sections.has(name)) {
						log.error('Section with name ' + name + ' is not present');
						return;
					}

					sections.delete(name);
					$('#' + sectionIdFromName(name)).remove();
				}
			}]);

			return EventDAG;
		}(PluginBase);

		return new EventDAG();

		function sectionIdFromName(name) {
			return 'AVE-DAG-section-' + name;
		}

		function updateCalendarDate() {
			var calDate = dateOnly(getWidgetDate());
			log.debug('OldDate: ', currentCalendarDatetime, ', Calendar date:', calDate.getTime());
			if (currentCalendarDatetime != calDate.getTime()) {
				$('#AVE-DAG-top > span').text(calDate.toLocaleDateString(language.used));
				currentCalendarDatetime = calDate.getTime();
			}
			return currentCalendarDatetime;
		}

		function isEventToday(todayDatetime, event) {
			log.debug('Checking event date', event.start, '=>', dateOnly(event.start), ' vs today ', todayDatetime, '=>', dateOnly(todayDatetime));
			return dateOnly(event.start).getTime() == todayDatetime;
		}

		function sortEventlist(eventList) {
			var list = eventList.slice(0);
			list.sort(function (a, b) {
				if (a.start < b.start) {
					return -1;
				}
				if (a.start > b.start) {
					return 1;
				}
				return a.subject.toLowerCase().localeCompare(b.subject.toLowerCase());
			});
			return list;
		}

		function updateDAGHtml(eventList) {
			log.debug("Updating DAG DOM");

			cleanDAG();
			if (eventList.length === 0) {
				return;
			}

			var sortedList = sortEventlist(eventList);

			$('#AVE-DAG-content #AVE-DAG-events').html(sortedList.map(eventHtml).join("\n"));

			// bind click events
			sortedList.map(bindClickEvent);
		}

		function bindClickEvent(event) {
			$('#' + eventHtmlId(event)).click(function () {
				$('#' + event.domId + ' dd.subject').click();
			});
		}

		function createCSS(pluginId) {
			$('head').prepend('\n\t\t\t\t<style type="text/css" id="' + pluginId + '">\n\t\t\t\t\t#AVE-DAG {top:0px; bottom:0px; background-color: #F0F0F0; transition: 0.3s; }\n\t\t\t\t\t#AVE-DAG-switch {position: absolute; top: 8px; right: 15px; cursor: pointer; color: white; font-size: 20px;}\n\t\t\t\t\t.AVE-DAG-visible {right: 0px; float: right; height: 100%; box-sizing: border-box; position: relative; z-index: 999;}\n\t\t\t\t\t.AVE-DAG-visible > #AVE-DAG-top {background-color: #325c80;}\n\t\t\t\t\t.AVE-DAG-hidden_peak {right: 0px !important; position:fixed; box-shadow: 0px 0px 10px #666; z-index: 1008;}\n\t\t\t\t\t#AVE-DAG-top {height: 40px; background-color: #00b4a0; color: white; font-size: 16px; font-weight: bold; text-align: center; transition: 0.3s; vertical-align: middle; width: inherit; display: table-cell; white-space: nowrap;}\n\t\t\t\t\t#AVE-DAG-content {overflow-y:auto; position: relative; height: calc(100% - 40px); border-left: 1px #CCC solid;}\n\t\t\t\t\t#AVE-DAG-content > div.AVE-DAG-section > dl {margin: 0px 0px 3px -20px; padding: 7px 5px 7px 0px; cursor: pointer;}\n\t\t\t\t\t.DAG-event-accepted-false, .DAG-event-accepted-true {display: block; background-color: white; margin: 3px 0px 3px 0px;}\n\n\t\t\t\t\t#AVE-DAG-Grab {position: absolute; width: 50px; height: 16px; line-height: 16px; color: white; font-weight: 800; background-color: #676767; left: -33px; top: ' + configuration.handle_position.value + '%; transform: rotate(-90deg); text-align: center; transition: 0.3s; border-radius: 5px 5px 0px 0px;}\' + //border-width: 1px 0px 1px 1px; border-color: #CCC; border-style: solid;\n\t\t\t\t\t#AVE-DAG-Grab:hover {background-color:#00b4a0;}\n\t\t\t\t\t#AVE-DAG-Grab > a {display: block; cursor: pointer;}\n\t\t\t\t\t' + (configuration.location.value == "false" ? '.AVE-DAG-EventPlace {display: none;}' : '') + '\n\t\t\t\t\t.AVE-DAG-pinned {width: calc(100% - ' + configuration.width.value + 'px) !important; float: left !important;}\n\t\t\t\t\t#AVE-DAG {width: ' + configuration.width.value + 'px;}\n\t\t\t\t\t.AVE-DAG-hidden {right: -' + configuration.width.value + 'px; position:fixed; z-index: 1008;}\n\n\t\t\t\t\t.DAG-event-accepted-true {\n\t\t\t\t\t\tborder-right: solid 8px ' + configuration.color_accepted.value + ';\n\t\t\t\t\t}\n\n\t\t\t\t\t.DAG-event-accepted-true:hover {\n\t\t\t\t\t\tbackground-color: ' + configuration.color_accepted.value + ';\n\t\t\t\t\t}\n\n\t\t\t\t\t.DAG-event-accepted-false {\n\t\t\t\t\t\tcolor: gray;\n\t\t\t\t\t\tborder-right: solid 8px ' + configuration.color_not_accepted.value + ';\n\t\t\t\t\t}\n\n\t\t\t\t\t.DAG-event-accepted-false:hover {\n\t\t\t\t\t\tbackground-color: ' + configuration.color_not_accepted.value + ';\n\t\t\t\t\t}\n\n\t\t\t\t\t#AVE-DAG dl:hover {\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t}\n\n\t\t\t\t\t.AVE-DAG-section a {\n\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t}\n\t\t\t\t</style>');
		}

		function removeCSS(pluginId) {
			$('#' + pluginId).remove();
		}

		function createHtml(id) {
			$('body').prepend('\n\t\t\t\t<div class="AVE-DAG-hidden" id="AVE-DAG" tabindex="0">\n\t\t\t\t\t<div class="" id="AVE-DAG-Grab"><a>DAG</a></div>\n\t\t\t\t\t<div id="AVE-DAG-top"><a id="AVE-DAG-switch" title="Pin/unpin Day-at-Glance">+</a><span></span></div>\n\t\t\t\t\t<div id="AVE-DAG-content">\n\t\t\t\t\t\t<div id="AVE-DAG-events" class="AVE-DAG-section"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>');

			$('#AVE-DAG-Grab > a').click(function () {
				$('#AVE-DAG.AVE-DAG-hidden').addClass("AVE-DAG-hidden_peak");
			});

			$('#AVE-DAG-top, #AVE-DAG-content').hover(function () {
				$('#AVE-DAG.AVE-DAG-hidden').addClass("AVE-DAG-hidden_peak");
			}, function () {
				$('#AVE-DAG').removeClass("AVE-DAG-hidden_peak");
			});

			$('#AVE-DAG-switch').click(function () {
				if ($('#AVE-DAG.AVE-DAG-hidden').length) {
					switchDAG(true);
				} else {
					switchDAG(false);
				}
			});

			var visible = storage.load(CONST_SWITCH_NAME);
			if (visible === '1') {
				switchDAG(true);
			} else {
				switchDAG(false);
			}
		}

		function removeHtml(id) {
			$('#AVE-DAG, #' + id).remove();
			$('#main').css("width", "").css("float", "");
		}

		function getWidgetDate() {
			try {
				var widget = unsafeWindow.dijit.byId(document.querySelector(CALENDAR_DOM_SELECTOR).id);
				return widget !== undefined && widget.showStartTime !== undefined ? widget.showStartTime.getDate() : undefined;
			} catch (e) {
				log.error(e);
			}
			return undefined;
		}

		function cleanDAG() {
			$('#AVE-DAG-content #AVE-DAG-events').empty();
		}

		function switchDAG(visible) {
			log.debug("Switching DAG to ", visible.toString());
			var switchEl = $('#AVE-DAG-switch');
			var parentEl = switchEl.parent().parent();
			if (visible) {
				switchEl.text("X");
				parentEl.removeClass("AVE-DAG-hidden").addClass("AVE-DAG-visible").removeClass("AVE-DAG-hidden_peak");
				$('#main').addClass("AVE-DAG-pinned");
				$('#AVE-DAG-Grab').css("visibility", "hidden");
			} else {
				switchEl.text("+");
				parentEl.removeClass("AVE-DAG-visible").addClass("AVE-DAG-hidden");
				$('#main').removeClass("AVE-DAG-pinned");
				$('#AVE-DAG-Grab').css("visibility", "");
			}
			storage.save(CONST_SWITCH_NAME, visible ? '1' : '0');
		}

		function eventHtml(event) {
			return '<dl id="' + eventHtmlId(event) + '" class="' + eventClass(event) + '">\n\t\t\t\t\t' + eventDetailsHtml(event) + '\n\t\t\t\t</dl>';
		}

		function eventDetailsHtml(event) {
			return '<dd class="AVE-DAG-EventTime">' + event.time + '</dd>\n\t\t\t<dd class="AVE-DAG-EventSubject" style="font-weight:bold;">' + event.subject + '</dd>\n\t\t\t<dd class="AVE-DAG-EventPlace">' + event.place + '</dd>\n\t\t\t<dd class="AVE-DAG-EventChair">' + event.chair + '</dd>';
		}

		function eventHtmlId(event) {
			return 'DAG_' + event.unid;
		}

		function eventClass(event) {
			return 'DAG-event-accepted-' + (event.accepted ? 'true' : 'false');
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(1), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PluginBase, createLogger, EventCollector) {
	    var name = "EventAudioNotify";
	    var description = "provide acoustic notification for events";
	    var log = createLogger(name);
	    var enabledByDefault = false;
	    var collector = EventCollector;

	    var configuration = {
	        GLOBAL_TimeToEvent: collector.system.configuration.GLOBAL_TimeToEvent
	    };

	    var soundSrc = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==";

	    var sound = new Audio();
	    var enabled = false;

	    var EventAudioNotify = function (_PluginBase) {
	        _inherits(EventAudioNotify, _PluginBase);

	        function EventAudioNotify() {
	            _classCallCheck(this, EventAudioNotify);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(EventAudioNotify).call(this, name, enabledByDefault, description, configuration));
	        }

	        _createClass(EventAudioNotify, [{
	            key: 'isEnabled',
	            value: function isEnabled() {
	                return enabled;
	            }
	        }, {
	            key: 'enable',
	            value: function enable() {
	                _get(Object.getPrototypeOf(EventAudioNotify.prototype), 'enable', this).call(this);
	                if (!this.isEnabled()) {
	                    collector.addPlugin(this);
	                    enabled = true;
	                }
	                sound.src = soundSrc;
	            }
	        }, {
	            key: 'disable',
	            value: function disable() {
	                _get(Object.getPrototypeOf(EventAudioNotify.prototype), 'disable', this).call(this);
	                if (this.isEnabled()) {
	                    collector.removePlugin(this);
	                    enabled = false;
	                }
	                sound.src = "";
	            }
	        }, {
	            key: 'reload',
	            value: function reload() {
	                collector.reload();
	                _get(Object.getPrototypeOf(EventAudioNotify.prototype), 'reload', this).call(this);
	            }
	        }, {
	            key: 'fire',
	            value: function fire(e) {
	                log.debug("You have reached 'notify' function of " + name);
	                sound.play();
	                collector.dismissEvent(e.AVEunid);
	            }
	        }]);

	        return EventAudioNotify;
	    }(PluginBase);

	    return new EventAudioNotify();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(40), __webpack_require__(1), __webpack_require__(5), __webpack_require__(33), __webpack_require__(11), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PluginBase, collector, createLogger, registry, language, conf, notesApi) {
		var name = 'TodosDAG';
		var description = 'provide day at glance overview for todos';
		var enabledByDefault = false;

		var log = createLogger(name);
		var DAG_PLUGIN_NAME = 'EventDAG';

		var TYPE_ASSIGNED = 'assigned';
		var TYPE_CREATED = 'created';

		var enabled = false;

		var DAGplugin;

		var SECTION_ASSIGNED = name + '-assigned';
		var SECTION_CREATED = name + '-created';

		var TODO_URL_DESCRIPTION = 'Provide URL for activities TODO API, empty will use autodetection from Verse mail url. ex \'https://apps.na.collabserv.com\' for SCNIris cloud environment';
		var TODO_URL_DEFAULT = 'auto';
		var TODO_URL_APPS = 'https://apps.na.collabserv.com';

		var assignedSectionElem = undefined;
		var createdSectionElem = undefined;

		var configuration = {
			base_url: conf.getConfigObj(name, 'Base_URL_For_TODOs', 'select', { default: TODO_URL_DEFAULT, options: [TODO_URL_DEFAULT, TODO_URL_APPS] }, TODO_URL_DESCRIPTION),
			collecting_interval: conf.getConfigObj(name, 'Collecting_Interval', 'time', '10'),
			show_assigned: conf.getConfigObj(name, 'Show_Assigned_Items', 'select', { default: 'true', options: ['true', 'false'] }),
			color_assigned: conf.getConfigObj(name, 'Assigned_To_Me_Color', 'color', '#395d88'),
			show_created: conf.getConfigObj(name, 'Show_Created_Items', 'select', { default: 'true', options: ['true', 'false'] }),
			color_created: conf.getConfigObj(name, 'Created_By_Me_Color', 'color', '#a27e32'),
			color_overdue: conf.getConfigObj(name, 'Overdue_Color', 'color', '#dc322f')
		};

		var TodosDAG = function (_PluginBase) {
			_inherits(TodosDAG, _PluginBase);

			function TodosDAG() {
				_classCallCheck(this, TodosDAG);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(TodosDAG).call(this, name, enabledByDefault, description, configuration));
			}

			_createClass(TodosDAG, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(TodosDAG.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						notesApi.setBaseActivitiesURL(getBaseUrlSetting());
						DAGplugin = registry.getPlugin(DAG_PLUGIN_NAME);
						collector.setCollectingInterval(configuration.collecting_interval.value);
						collector.addListener(this);
						createCSS(this.ID);
						createHtml(this.ID);
						enabled = true;
						// enable dependency plugin
						DAGplugin.enable();
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					_get(Object.getPrototypeOf(TodosDAG.prototype), 'disable', this).call(this);
					if (this.isEnabled()) {
						collector.removeListener(this);
						removeHtml(this.ID);
						removeCSS(this.ID);
						DAGplugin = undefined;
						enabled = false;
					}
				}
			}, {
				key: 'reload',
				value: function reload() {
					removeCSS(this.ID);
					createCSS(this.ID);
					notesApi.setBaseActivitiesURL(getBaseUrlSetting());
					collector.setCollectingInterval(configuration.collecting_interval.value);
				}
			}, {
				key: 'updateTodos',
				value: function updateTodos(todos) {
					if (!DAGplugin.isEnabled()) {
						log.debug('Disabling because dependency plugin is not enabled');
						this.disable();
					}
					try {
						this.log.debug(' DAG_data onfired: ', todos);
						if (todos.length === 0) {
							cleanDAG();
							return;
						}

						updateDAGHtml(todos);
					} catch (e) {
						this.log.error(e);
					}
				}
			}]);

			return TodosDAG;
		}(PluginBase);

		return new TodosDAG();

		function getBaseUrlSetting() {
			return configuration.base_url.value === TODO_URL_DEFAULT ? '' : configuration.base_url.value;
		}

		function createHtml(pluginId) {
			createdSectionElem = DAGplugin.addSection(SECTION_CREATED);
			assignedSectionElem = DAGplugin.addSection(SECTION_ASSIGNED);
		}

		function createCSS(pluginId) {
			$('head').prepend('\n\t\t\t<style type="text/css" id="' + pluginId + '">\n\t\t\t\t#AVE-DAG-section-TodosDAG-created .DAG-todo {\n\t\t\t\t\tborder-right: solid 8px ' + configuration.color_created.value + ';\n\t\t\t\t}\n\n\t\t\t\t#AVE-DAG-section-TodosDAG-created .DAG-todo:hover {\n\t\t\t\t\tbackground-color: ' + configuration.color_created.value + ';\n\t\t\t\t}\n\n\t\t\t\t#AVE-DAG-section-TodosDAG-assigned .DAG-todo {\n\t\t\t\t\tborder-right: solid 8px ' + configuration.color_assigned.value + ';\n\t\t\t\t}\n\n\t\t\t\t#AVE-DAG-section-TodosDAG-assigned .DAG-todo:hover {\n\t\t\t\t\tbackground-color: ' + configuration.color_assigned.value + ';\n\t\t\t\t}\n\n\t\t\t\t#AVE-DAG-section-TodosDAG-created {\n\t\t\t\t\t' + (configuration.show_created.value == 'false' ? 'display: none;' : '') + '\n\t\t\t\t}\n\n\t\t\t\t#AVE-DAG-section-TodosDAG-assigned {\n\t\t\t\t\t' + (configuration.show_assigned.value == 'false' ? 'display: none;' : '') + '\n\t\t\t\t}\n\n\t\t\t\t.DAG-todo {display: block; background-color: white; margin: 3px 0px 3px 0px; }\n\t\t\t\t.DAG-todo:hover { background-color: #0d9184; color: white;}\n\t\t\t\t.DAG-todo-overdue { color: white; font-weight: bold; background-color: ' + configuration.color_overdue.value + ';}\n\t\t\t\t.DAG-todo-title { font-weight:bold; }\n\t\t\t\t//.DAG-todo-title a { text-decoration: none; color: inherit;  }\n\t\t\t\t//.DAG-todo-title a:hover { text-decoration: underline; }\n\t\t\t\t.DAG-todo-tags { font-size: smaller; }\n\t\t\t\t.DAG-todo-last_update { }\n\t\t\t</style>');
		}

		function removeCSS(pluginId) {
			$('#' + pluginId).remove();
		}

		function removeHtml(pluginId) {
			DAGplugin.removeSection(SECTION_CREATED);
			DAGplugin.removeSection(SECTION_ASSIGNED);
			createdSectionElem = undefined;
			assignedSectionElem = undefined;
			$('#' + pluginId).remove();
		}

		function cleanDAG() {
			createdSectionElem.empty();
			assignedSectionElem.empty();
		}

		function updateDAGHtml(todos) {
			log.debug('Updating DAG DOM', todos);

			updateSectionHtml(assignedSectionElem, todos.assigned, TYPE_ASSIGNED);
			updateSectionHtml(createdSectionElem, todos.created, TYPE_CREATED);
		}

		function updateSectionHtml(sectionElem, todos, type) {
			sectionElem.html(sortTodos(todos).map(todoHtml.bind(null, type)).join('\n'));
		}

		function sortTodos(todos) {
			var list = todos.slice(0);
			list.sort(function (a, b) {
				if (a.dueDate !== null && a.dueDate < b.dueDate) {
					return -1;
				}
				if (b.dueDate !== null && a.dueDate > b.dueDate) {
					return 1;
				}
				return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
			});
			return list;
		}

		function todoHtmlId(todo) {
			return 'DAG_todo-' + todo.id.replace(/[:.]/g, '_');
		}

		function todoHtml(type, todo) {
			var lines = ['<dd class="DAG-todo-title">' + todo.title + '</dd>'];
			if (todo.created !== null) {
				lines.push('<dd class="DAG-todo-created">Created: ' + todo.created.toLocaleDateString(language.used) + ' ' + (type === TYPE_ASSIGNED && todo.author ? ' by ' + todo.author : '') + '</dd>');
			}
			if (todo.dueDate !== null) {
				lines.push('<dd class="DAG-todo-due">Due: ' + todo.dueDate.toLocaleString(language.used) + (type === TYPE_CREATED && todo.assignedTo ? ' to ' + todo.assignedTo : '') + '</dd>');
			} else if (type === TYPE_CREATED) {
				lines.push('<dd>Assigned to: ' + todo.assignedTo + '</dd>');
			}
			if (todo.updated !== null) {
				lines.push('<dd class="DAG-todo-last_update">Last update: ' + todo.updated.toLocaleString(language.used) + '</dd>');
			}
			if (todo.categories.length > 0) {
				lines.push('<dd class="DAG-todo-tags">' + todo.categories.join(', ') + '</dd>');
			}

			return '<dl id= "' + todoHtmlId(todo) + '" class="' + todoClass(todo) + '">\n\t\t\t\t<a href="' + todo.link + '" target="' + todoHtmlId(todo) + '">\n\t\t\t\t\t' + lines.join('\n') + '\n\t\t\t\t</a>\n\t\t\t</dl>';
		}

		function todoClass(todo) {
			var classes = ['DAG-todo'];
			if (todo.dueDate !== null && todo.dueDate < new Date()) {
				classes.push('DAG-todo-overdue');
			}
			return classes.join(' ');
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23), __webpack_require__(1), __webpack_require__(41)], __WEBPACK_AMD_DEFINE_RESULT__ = function (GM_ajax, createLogger, activities) {

		var CONST_COLLECTING_PERIOD = 10 * 60 * 1000;
		var CONST_INITIAL_DELAY = 1 * 1000;

		var log = createLogger('TodosCollector');
		var listeners = new Map();

		var eventCollectorID = null;

		var collectingInterval = CONST_COLLECTING_PERIOD;

		var api = {
			isRunning: isRunning,
			addListener: addListener,
			removeListener: removeListener,
			checkNow: collectAndDispatch,
			setCollectingInterval: setCollectingInterval
		};

		return api;

		function setCollectingInterval(intervalInMinutes) {
			var newInterval = parseInt(intervalInMinutes, 10) * 60 * 1000;
			if (newInterval > 0) {
				log.debug('Setting new collectingInterval to ' + newInterval);
				collectingInterval = newInterval;
				if (isRunning()) {
					scheduleNextCollect();
				}
			}
		}

		function scheduleNextCollect() {
			log.debug('Scheduling next collection in ' + collectingInterval / 1000 + 's');
			clearTimeout(eventCollectorID);
			eventCollectorID = setTimeout(collectAndDispatch, collectingInterval);
		}

		function collectAndDispatch() {
			log.debug('Getting todos and dispatching');
			dispatchTodos(activities.getTodos()).then(scheduleNextCollect);
		}

		function isRunning() {
			return eventCollectorID !== null;
		}

		function checkCollector() {
			log.debug('Amount of enabled listeners is ' + listeners.size);
			if (!isRunning() && listeners.size > 0) {
				enableCollector();
			} else if (isRunning() && listeners.size === 0) {
				disableCollector();
			}
		}

		function dispatchTodos(todoListsPromise) {
			return todoListsPromise.then(function gotTodoLists(todoLists) {
				log.debug('Got todolists', todoLists);
				listeners.forEach(function (value, key) {
					log.debug('Dispatching all todos to ' + key);
					value.updateTodos(todoLists);
				});
			}).catch(function (err) {
				log.error('Error fetching todo lists', err);
			});
		}

		function addListener(listener) {
			if (listener.name === undefined || typeof listener.updateTodos !== 'function') {
				log.error('Listener is missing \'name\' property or \'updateTodos\' function');
				return;
			}
			log.debug('Adding listener : ' + listener.name);
			if (listeners.has(listener.name)) {
				log.error('Listener ' + listener.name + ' is already registered');
				return;
			}

			listeners.set(listener.name, listener);
			checkCollector();
		}

		function removeListener(listener) {
			log.debug('Removing listener : ' + listener.name);
			if (!listeners.has(listener.name)) {
				log.error('no listener with name ' + listener.name + ' is registered');
			}
			listeners.delete(listener.name);
			checkCollector();
		}

		function disableCollector() {
			log.debug('Disabling collector');
			clearTimeout(eventCollectorID);
			eventCollectorID = null;
		}

		function enableCollector() {
			log.debug('Enabling collector');
			setTimeout(collectAndDispatch, CONST_INITIAL_DELAY);
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23), __webpack_require__(1), __webpack_require__(42), __webpack_require__(43), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function (GM_ajax, createLogger, createXPathEvaluator, person, notesBase) {

		var log = createLogger('API/Todos');

		var CONST_TIMEOUT = 60000;

		// public API
		return {
			getTodos: getTodos
		};

		function getTodos() {
			return person.getUserId().then(function fetchTodos(userId) {
				var assigned = GM_ajax(getAppsBaseUrl() + '/activities/service/atom2/forms/todos?sortfields=duedate&sortorder=0&count=100&assignedToUserid=' + userId, { timeout: CONST_TIMEOUT }).then(function (xhr) {
					ensureXmlResponse(xhr);
					return extractTodos(xhr.responseXML);
				}).catch(function (err) {
					log.error('Get Activities assigned todos encountered error', err);
					return Promise.reject(err);
				});

				var created = GM_ajax(getAppsBaseUrl() + '/activities/service/atom2/forms/todos?sortfields=duedate&sortorder=0&count=100&createdByUserId=' + userId, { timeout: CONST_TIMEOUT }).then(function (xhr) {
					ensureXmlResponse(xhr);
					return extractTodos(xhr.responseXML);
				}).catch(function (err) {
					log.error('Get Activities created todos encountered error', err);
					return Promise.reject(err);
				});

				return Promise.all([assigned, created]).then(function (_ref) {
					var _ref2 = _slicedToArray(_ref, 2);

					var assigned = _ref2[0];
					var created = _ref2[1];
					return { assigned: assigned, created: created };
				});
			});
		}

		function extractTodos(xml) {
			var xpather = createXPathEvaluator(xml);
			var entries = xpather.getAll('atom:feed/atom:entry');
			return entries.map(function (entry) {
				return {
					id: xpather.getFirstText('atom:id', entry, ''),
					title: xpather.getFirstText('atom:title', entry, ''),
					dueDate: xpather.getFirstCustom('snx:duedate', entry, parseDate),
					text: xpather.getFirstText('atom:content', entry, ''),
					link: xpather.getFirstAttribute('atom:link[@type="text/html"]', 'href', entry, ''),
					created: xpather.getFirstCustom('atom:published', entry, parseDate),
					updated: xpather.getFirstCustom('atom:updated', entry, parseDate),
					author: xpather.getFirstText('atom:author/atom:name', entry, null),
					assignedTo: xpather.getFirstAttribute('snx:assignedto', 'name', entry, null),
					categories: xpather.getAllAttribute('atom:category', 'term', entry)
				};
			});
		}

		function ensureXmlResponse(xhr) {
			if (xhr.responseXML === undefined) {
				log.error(xhr);
				throw new Error('Invalid response content type for activities');
			}
		}

		function getAppsBaseUrl() {
			return notesBase.getAppsBaseUrl();
		}

		function parseDate(el) {
			return el === null ? null : new Date(el.textContent);
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {

		return createXPathEvaluator;

		function createXPathEvaluator(xml) {
			var _nsResolver = createNsResolver(xml);
			var _xmlDoc = xml;
			return {
				getAll: xmlXpathArray.bind(_xmlDoc, _nsResolver),
				getAllText: xmlXpathArrayText.bind(_xmlDoc, _nsResolver),
				getAllAttribute: xmlXpathArrayAttribute.bind(_xmlDoc, _nsResolver),
				getAllCustom: xmlXpathArrayCustom.bind(_xmlDoc, _nsResolver),
				getFirst: xmlXpathFirst.bind(_xmlDoc, _nsResolver),
				getFirstText: xmlXpathFirstText.bind(_xmlDoc, _nsResolver),
				getFirstAttribute: xmlXpathFirstAttribute.bind(_xmlDoc, _nsResolver),
				getFirstCustom: xmlXPathFirstCustom.bind(_xmlDoc, _nsResolver)
			};
		}

		/**
	  * Returns first element parsed by custom function provided
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {Object} context
	  * @param {Function} fnc
	  * @returns {any}
	  */
		function xmlXPathFirstCustom(_nsResolver, path, context, fnc) {
			return fnc(xmlXpathFirst.call(this, _nsResolver, path, context, null));
		}

		/**
	  * Returns Attribute value for first found element, or default value if not found or it does not have the attribute
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {string} attribute
	  * @param {Object} context
	  * @param {any} defVal
	  * @returns {any}
	  */
		function xmlXpathFirstAttribute(_nsResolver, path, attribute, context, defVal) {
			var e = xmlXpathFirst.call(this, _nsResolver, path, context);
			return e === null ? defVal : !e.hasAttribute(attribute) ? defVal : e.getAttribute(attribute);
		}

		/**
	  * Returns text content of first node found by path or default value if not found
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {Object} context
	  * @param {string} defVal
	  * @returns {string}
	  */
		function xmlXpathFirstText(_nsResolver, path, context, defVal) {
			var e = xmlXpathFirst.call(this, _nsResolver, path, context, null);
			return e !== null ? e.textContent : defVal;
		}

		/**
	  * Returns first XML element matched or defVal
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {Object} context
	  * @param {string} [defVal=null]
	  * @returns {string}
	  */
		function xmlXpathFirst(_nsResolver, path, context) {
			var defVal = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

			var a = xmlXpathArray.call(this, _nsResolver, path, context);
			return a.length === 0 ? defVal : a[0];
		}

		/**
	  * Returns textContent of all matched elements as array
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {Object} context
	  * @returns {Array}
	  */
		function xmlXpathArrayText(_nsResolver, path, context) {
			return xmlXpathArray.call(this, _nsResolver, path, context).map(function (el) {
				return el.textContent;
			});
		}

		/**
	  * Returns attribute values of all matched elements as array, inserts default value when attribute missing
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {string} attribute
	  * @param {Object} context
	  * @param {any} [defVal=null]
	  * @returns {Array}
	  */
		function xmlXpathArrayAttribute(_nsResolver, path, attribute, context) {
			var defVal = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

			return xmlXpathArray.call(this, _nsResolver, path, context).map(function (el) {
				return !el.hasAttribute(attribute) ? defVal : el.getAttribute(attribute);
			}).filter(function (el) {
				return el !== null;
			}); // remove null values if no other default value was provided
		}

		/**
	  * Returns array of matched XML elements transformed by provided function
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {Object} context
	  * @param {Function} fn
	  */
		function xmlXpathArrayCustom(_nsResolver, path, context, fn) {
			return fn(xmlXpathArray.call(this, _nsResolver, path, context));
		}

		/**
	  * Returns array of XML elements matched by xpath
	  * @param {Function} _nsResolver
	  * @param {string} path
	  * @param {Object} context
	  * @returns {Array}
	  */
		function xmlXpathArray(_nsResolver, path, context) {
			var i,
			    a = [];
			var result = this.evaluate(path, context || this, _nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			for (i = 0; i < result.snapshotLength; i++) {
				a[i] = result.snapshotItem(i);
			}
			return a;
		}

		function createNsResolver(xmlDoc) {
			var originalNsR = xmlDoc.createNSResolver(xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);
			var defaultNS = xmlDoc.documentElement.getAttribute('xmlns');
			return function (prefix) {
				return originalNsR.lookupNamespaceURI(prefix) || defaultNS;
			};
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23), __webpack_require__(1), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function (GM_ajax, createLogger, notesBase) {

		var log = createLogger('API/Person');

		var _lastApiUrl = '';
		var _userData;
		// public API
		return {
			getUserId: getUserId,
			getUserEmail: getUserEmail
		};

		function parseUserId(data) {
			return data.entry.id.split(':').slice(-1);
		}

		function getUserId() {
			return getUserData().then(function (jsonData) {
				return parseUserId(jsonData);
			});
		}

		function getUserEmail() {
			return getUserData().then(function (json) {
				return json.entry.emails.filter(function (e) {
					return e.primary;
				}).reduce(function (c, i) {
					return i.value;
				}, '');
			});
		}

		function getUserData() {
			if (_userData !== undefined && !appsUrlChanged()) {
				return Promise.resolve(_userData);
			}

			var currentUrl = getAppsBaseUrl();

			return GM_ajax(currentUrl + '/connections/opensocial/rest/people/@me/@self?fields=userSettings.textDirection&fields=userSettings.bidiEnabled&fields=userSettings.calendar').then(function (xhr) {
				if (xhr.responseJson === undefined) {
					log.debug(xhr);
					throw Error('Invalid response content type for person');
				}
				storeAppsUrl(currentUrl);
				_userData = xhr.responseJson;
				return _userData;
			});
		}

		function appsUrlChanged() {
			return _lastApiUrl !== getAppsBaseUrl();
		}

		function storeAppsUrl(currentUrl) {
			_lastApiUrl = currentUrl;
		}

		function getAppsBaseUrl() {
			return notesBase.getAppsBaseUrl();
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (createLogger) {

			var log = createLogger('API/NotesBASE');

			var defaultBaseUrl = getDefaultAppsBaseUrl(document.location.origin);

			var currentBaseUrl = defaultBaseUrl;

			// public API
			return {
					getAppsBaseUrl: function getAppsBaseUrl() {
							return currentBaseUrl;
					},
					setBaseActivitiesURL: setBaseAppsUrl
			};

			function setBaseAppsUrl(strUrl) {
					if (strUrl === null || strUrl.trim() === '') {
							currentBaseUrl = defaultBaseUrl;
							log.debug('Resetting base URL to \'' + currentBaseUrl + '\'');
							return;
					}
					log.debug('Setting base URL to \'' + strUrl + '\'');
					currentBaseUrl = strUrl;
			}

			function getDefaultAppsBaseUrl(originUrl) {
					// return originUrl.replace( /\/\/.*\.([^.]+)\.([^.]+)\.([^.]+)/, '//apps.$1.$2.$3');
					return originUrl.replace(/\/mail\.notes\./, '/apps.');
			}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(9), __webpack_require__(12), __webpack_require__(1), __webpack_require__(6), __webpack_require__(34), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, waitForElem, storageOps, createLogger, PluginBase, DOMListeners, conf) {
		var name = 'QuickMove';
		var description = 'provides quick move of mail to folder';
		var enableByDefault = false;
		var storage = storageOps.getNamespace(name);
		var log = createLogger(name);

		var SPLIT_FOLDER_NAMES_INTO_SEPARATE_KEYWORDS = true; // can be set to false if too many false positives
		var ALWAYS_USE_FOLDER_NAME = false; // when true stored keywords will be added to folder name, if false name is not appended automatically

		var MIN_KEYWORD_LENGTH = 3;
		var KEYWORD_LENGTH_DESCRIPTION = 'Minimal length of detected keyword from folder name - words with fewer characters will be ignored';

		var MAX_MATCHES_DESCRIPTION = 'Maximum number of matches shown with QuickMove buttons, 0 to show all matches.';
		var ORDER_BY_COUNT_DESCRIPTION = 'Order QuickMove buttons by name or by number of matches.';
		var ORDER_BY_COUNT = 'Matches';
		var ORDER_BY_ALPHA = 'Name';
		var COLOR = '#4178BE';

		var configuration = {
			color_main: conf.getConfigObj(name, 'Color', 'color', COLOR),
			max_matches: conf.getConfigObj(name, 'Maximum_number_of_matches', 'number', 0, MAX_MATCHES_DESCRIPTION),
			order_type: conf.getConfigObj(name, 'Order_by', 'select', { default: ORDER_BY_ALPHA, options: [ORDER_BY_ALPHA, ORDER_BY_COUNT] }, ORDER_BY_COUNT_DESCRIPTION)
			// split_folders: conf.getConfigObj(name,'Split_Folder_Names','select',{default: 'true', options: ['true','false']}),
			// min_keywords_len: conf.getConfigObj(name, 'Minimal_Keyword_Length', 'number', MIN_KEYWORD_LENGTH, KEYWORD_LENGTH_DESCRIPTION)
		};

		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

		var _enabled = false;

		var QuickMove = function (_PluginBase) {
			_inherits(QuickMove, _PluginBase);

			function QuickMove() {
				_classCallCheck(this, QuickMove);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(QuickMove).call(this, name, enableByDefault, description, configuration));
			}

			_createClass(QuickMove, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return _enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(QuickMove.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						_enabled = true;
						this.createStyleElement();
						waitForElem('.folder-tray.isLoaded', initCollecting);
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					DOMListeners.removeFoldersListener(runFolderCheck);
					DOMListeners.removeMailListener(runMailCheck);
					this.removeStyleElement();
					_enabled = false;
					_get(Object.getPrototypeOf(QuickMove.prototype), 'disable', this).call(this);
				}
			}, {
				key: 'reload',
				value: function reload() {
					this.removeStyleElement();
					this.createStyleElement();
				}
			}, {
				key: 'removeStyleElement',
				value: function removeStyleElement() {
					$('#' + this.ID).remove();
				}
			}, {
				key: 'createStyleElement',
				value: function createStyleElement() {
					$('head').prepend('<style type="text/css" id="' + this.ID + '">\n\t\t\t\t\t.quickmovebadge {\n\t\t\t\t\t\tbackground-color: ' + configuration.color_main.value + ';\n\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\t\tpadding: 1px 1ex;\n\t\t\t\t\t\tcursor: pointer\n\t\t\t\t\t}\n\n\t\t\t\t\t.quickmoveelement {\n\t\t\t\t\t\tflex: 1 100%;\n\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\torder: 2;\n\t\t\t\t\t}\n\t\t\t\t</style>');
				}
			}]);

			return QuickMove;
		}(PluginBase);

		return new QuickMove();

		function initCollecting() {
			log.debug('Initializing collection');
			DOMListeners.addMailListener(runMailCheck);
			DOMListeners.addFoldersListener(runFolderCheck);
		}

		function runFolderCheck() {
			addQuickMoveSettingsButton(document.querySelector('.folder-tray').querySelector('.edit-folder-view'));
		}

		function runMailCheck() {
			var folders = getFolderElements();
			Array.prototype.map.call(document.querySelectorAll('.preview-panel .read-view.body-open:not(.message-loading) .pim-mailread-mailcontent:not(.collapsed-mailcontent)'), checkPreviewDOM.bind(null, folders));
		}

		function escapeRegexpChars(str) {
			return str.replace(reRegExpChar, '\\$&');
		}

		/**
	  * @param {string} folderName
	  * @returns {string[]}
	  */
		function getFolderKeywords(folderName) {
			var storedValue = storage.load(folderNameToID(folderName));
			var keys;

			if (storedValue === undefined) {
				if (!ALWAYS_USE_FOLDER_NAME) {
					// initial parsing of folder name to stored value
					keys = folderNameToKeywords(folderName);
					storedValue = keys.filter(function (i) {
						return i !== '';
					}).join(',');
				} else {
					// name will be added, initial stored value is empty
					storedValue = '';
				}
				storage.save(folderNameToID(folderName), storedValue);
			}
			keys = storedValue.split(',').filter(function (i) {
				return i !== '';
			});

			if (ALWAYS_USE_FOLDER_NAME) {
				return folderNameToKeywords(folderName).concat(keys);
			}

			return keys;
		}

		/**
	  * @param {string} name
	  * @returns {string[]}
	  */
		function folderNameToKeywords(name) {
			if (SPLIT_FOLDER_NAMES_INTO_SEPARATE_KEYWORDS) {
				return name.split(' ').filter(function isValidKeyword(token) {
					token = token.toLowerCase().trim();
					return token !== '' && token !== 'and' && token !== 'the' && token.length >= MIN_KEYWORD_LENGTH;
					// FIXME: use when config enabled. token.length >= configuration.min_keywords_len.value;
				}).map(function (i) {
					return escapeRegexpChars(i);
				});
			}
			return [escapeRegexpChars(name)];
		}

		/**
	  * @param {Element} Element of folder
	  * @param {boolean} Match all or only first, false default
	  * @returns {RegExp|null}
	  */
		function makeRegexpForFolder(folderEl) {
			var matchAll = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			var folderName = getTrimmedName(folderEl);
			var keywords = getFolderKeywords(folderName);

			if (keywords.length === 0) {
				log.debug('Folder \'' + folderName + '\' empty regexp');
				return null;
			}

			var result = regexpFromKeywords(keywords, matchAll);
			log.debug('Folder: \'' + folderName + '\' : ' + result);
			return result;
		}

		/**
	  * @param  {array} keywords array of string keywords
	  * @param  {boolean} Find all matches, default false
	  * @return {RegExp|null} returns valid RegExp or null
	  */
		function regexpFromKeywords(keywords) {
			var makeGlobal = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			var regexpStr = '[^\\w](' + keywords.join('|') + ')';
			var result = null;
			try {
				result = new RegExp(regexpStr, makeGlobal ? 'ig' : 'i');
			} catch (e) {
				log.error('Error creating regexp ' + regexpStr, e);
			}
			return result;
		}

		function checkPreviewDOM(folderElements, previewDomEl) {
			var mailMainEl = previewDomEl.parentNode.parentNode;
			if (mailMainEl.dataset.quickMoveApplied !== undefined) {
				return; // apply only once
			}
			var mailText = getTextFromMailElement(mailMainEl);
			var found = [];
			var orderByCount = configuration.order_type.value === ORDER_BY_COUNT;
			var regexp, res, count;

			for (var i = 0; i < folderElements.length; i++) {
				regexp = makeRegexpForFolder(folderElements[i], orderByCount);
				if (regexp === null) {
					continue;
				}
				log.debug('Checking folder \'' + getTrimmedName(folderElements[i]) + '\' with ' + regexp.toString());
				if (!orderByCount) {
					// dont count occurences
					res = regexp.exec(mailText);
					if (res !== null) {
						log.debug('Found match: ' + res[1]);
						found.push({ element: folderElements[i], name: getTrimmedName(folderElements[i]), match: res[1] });
					}
				} else {
					// count occurences for sorting
					count = 0;
					while (regexp.exec(mailText) !== null) {
						++count;
					}

					if (count > 0) {
						res = regexp.exec(mailText);
						log.debug('Found matches: ' + count + ', showing ' + res[1]);
						found.push({ element: folderElements[i], name: getTrimmedName(folderElements[i]), match: res[1], count: count });
					}
				}
			}

			if (orderByCount) {
				found.sort(compareMatchCount);
			}

			addQuickSuggestions(mailMainEl, found);

			mailMainEl.dataset.quickMoveApplied = true;
		}

		function compareMatchCount(a, b) {
			if (a.count > b.count) {
				return -1;
			}
			if (a.count < b.count) {
				return 1;
			}
			return 0;
		}

		function createQuickElement(mailElement) {
			var target = mailElement.querySelector('.pim-mailread-securityinfo');
			var quickEl = document.createElement('div');

			quickEl = target.parentNode.insertBefore(quickEl, target);
			quickEl.setAttribute('class', 'quickmoveelement');
			log.debug('Added element', quickEl);
			return quickEl;
		}

		function addQuickSuggestions(mailElement, foundFolders) {
			var targetElement = createQuickElement(mailElement);
			if (foundFolders.length === 0) {
				targetElement.innerHTML = 'Sorry, no quick move suggestions for this mail.';
			} else {
				var maxMatches = parseInt(configuration.max_matches.value, 10);
				if (maxMatches !== 0 && foundFolders.length > maxMatches) {
					targetElement.innerHTML = 'Quick move to (limited to ' + configuration.max_matches.value + '): ';
					foundFolders = foundFolders.slice(0, configuration.max_matches.value);
				} else {
					targetElement.innerHTML = 'Quick move to : ';
				}

				foundFolders.forEach(function (folderMatch) {
					var separator = document.createElement('span');
					separator.innerHTML = '&nbsp;';
					var badge = document.createElement('span');
					badge.setAttribute('class', 'quickmovebadge');
					badge.setAttribute('title', 'Click here to move this email into the \'' + getFolderPath(folderMatch.element) + '\' folder (matched ' + (folderMatch.count ? folderMatch.count + 'x times,' : '') + ' keyword : [' + folderMatch.match + ']). For better suggestions please edit each folder settings directly from Verse interface');
					badge.addEventListener('click', moveMail.bind(null, mailElement, folderMatch.element));
					badge.innerHTML = folderMatch.name;
					targetElement.appendChild(badge);
					targetElement.appendChild(separator);
				});
			}
		}

		function addQuickMoveSettingsButton(folderMenu) {
			if (folderMenu === null) {
				return; // not found
			}

			if (folderMenu.dataset.quickMoveApplied !== undefined) {
				return; // apply only once
			}

			var button = document.createElement('button');
			var folderName = folderMenu.parentNode.querySelector('.folder-name').textContent;
			var KEYWORDS_ID = folderNameToID(folderName);
			log.debug('QuickMove folder menu adding button');

			button.setAttribute('tabindex', '-1');
			button.setAttribute('class', 'edit-action rename-button');
			button.setAttribute('role', 'menuitem');

			button.innerHTML = '<svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="miu" stroke="none" stroke-width="1"><g id="Artboard-1" transform="translate(-827.000000, -263.000000)"><g id="slice" transform="translate(215.000000, 119.000000)"/><path d="M848.921906,265.133586 L839.52106,264.453813 L828.724788,275.250085 C828.533878,275.440996 828.537282,275.753927 828.732015,275.94866 L838.632815,285.849461 C838.827717,286.044362 839.143222,286.044855 839.33139,285.856687 L850.127662,275.060415 L849.447889,265.659569 C849.4283,265.388666 849.187241,265.152772 848.921906,265.133586 Z M842.324831,272.256644 C843.10588,273.037693 844.35814,273.051763 845.121832,272.288071 C845.885523,271.524379 845.871453,270.27212 845.090405,269.491071 C844.309356,268.710022 843.057096,268.695952 842.293404,269.459644 C841.529712,270.223336 841.543783,271.475595 842.324831,272.256644 L842.324831,272.256644 Z" fill="#ffffff" id="common-tag-2-general-price-glyph"/></g></g></svg>QuickMove settings';
			button.addEventListener('click', function () {
				var currentKeywords = getFolderKeywords(folderName);
				var keywords = prompt('\nQuickMove Settings\n==================\nFor better suggestions, please edit the keywords associated with the folder \'' + folderName + '\'.\n\nPlease note that \'' + folderName + '\' itself was used only initally and can be removed. Use \',\' to separate multiple keywords !\n\n', currentKeywords.join(','));
				if (keywords !== null) {
					if (regexpFromKeywords(keywords.split(',')) === null) {
						alert('Entered keywords do not form valid regular expression, please check for special characters: ( ) [ ] . * | ?');
					}
					storage.save(KEYWORDS_ID, keywords);
				}
			});
			folderMenu.appendChild(button);
			folderMenu.dataset.quickMoveApplied = true;
		}

		function folderNameToID(folderName) {
			return folderName.trim().toLowerCase();
		}

		/**
	  * @param {Node} folderElement
	  */
		function getFolderPath(folderElement) {
			var path = [];
			var pointer = folderElement;
			path.unshift(getTrimmedName(pointer));
			while (isSubtree(pointer)) {
				pointer = pointer.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.folder-name');
				path.unshift(getTrimmedName(pointer));
			}

			return path.join('\\');
		}

		function isSubtree(element) {
			return element.parentNode && element.parentNode.parentNode && element.parentNode.parentNode.parentNode && element.parentNode.parentNode.parentNode.parentNode && element.parentNode.parentNode.parentNode.parentNode.classList.contains('folder-subtree');
		}

		function getTextFromMailElement(mailElement) {
			return Array.prototype.map.call(mailElement.querySelectorAll('.socpimMailingListContainer, .pim-mailread-subject, .pim-mailread-mailcontent'), function (el) {
				return el.textContent.trim();
			}).join('\n');
		}

		function moveMail(mailElement, folderElement) {
			var path = getFolderPath(folderElement);
			log.debug('Moving mail to ' + path);
			mailElement.parentNode.querySelector('.action.pim-move-to-folder.icon').click();
			clickOnFolder(mailElement.parentNode.parentNode, path, 10);
		}

		function clickOnFolder(mailElement, folderPath, attempts) {
			if (attempts-- > 0) {
				var folderNode = findFolderElementByPath(mailElement, folderPath.split('\\'));
				if (folderNode !== null) {
					log.debug('Found element', folderNode);
					getClickableElement(folderNode).click();
					return;
				}
				setTimeout(clickOnFolder, 100, mailElement, folderPath, attempts);
			} else {
				log.error('Could not click on folder ' + folderPath);
			}
		}

		function findFolderElementByPath(root, path) {
			if (path.length === 0) {
				return root.querySelector('.folder-name');
			}

			var _path = _toArray(path);

			var thisFolderName = _path[0];

			var rest = _path.slice(1);

			var nextRoots = Array.prototype.filter.call( // filter by name
			root.querySelectorAll('.folder-view > div > div > div.folder-name'), function (fe) {
				return fe.textContent.toLowerCase() == thisFolderName.toLowerCase();
			}).map(function (fe) {
				// find parent folder-view
				return closestParentWithClass(fe, 'folder-view');
			}).filter(function (viewEl) {
				// filter only direct 'children'
				return viewEl !== root && (viewEl.parentNode.classList.contains('tree') || // either child of root tree
				closestParentWithClass(viewEl, 'folder-view') === root //or child of current subtree
				);
			});
			if (nextRoots.length === 0) {
				return null;
			}

			return findFolderElementByPath(nextRoots[0], rest);
		}

		function getFolderElements() {
			return Array.prototype.filter.call(document.querySelectorAll('.folder-tray.isLoaded .folder-view:not(.no-edit) .folder-name'), function filterEmpty(el) {
				return getTrimmedLabel(el) !== '';
			}).sort(function compareFolderElByName(elA, elB) {
				return getTrimmedLabel(elA).localeCompare(getTrimmedLabel(elB));
			});
		}

		function getTrimmedLabel(el) {
			return el.getAttribute('aria-label').trim();
		}

		function getTrimmedName(el) {
			return el.textContent.trim();
		}

		function getClickableElement(folderNameElement) {
			return closestParentWithClass(folderNameElement, 'this-folder');
		}

		function closestParentWithClass(element, targetClass) {
			if (element === null) {
				return null;
			}
			var pointer = element.parentNode;
			while (!pointer.classList.contains(targetClass)) {
				if (!pointer.parentNode) {
					return null;
				}
				pointer = pointer.parentNode;
			}
			return pointer;
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (PluginBase, DOMListeners) {

		var name = 'MailSubject';
		var description = 'Puts mail full subject as title of subject text';
		var enabledByDefault = false;

		var _enabled = false;

		var MailSubject = function (_PluginBase) {
			_inherits(MailSubject, _PluginBase);

			function MailSubject() {
				_classCallCheck(this, MailSubject);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(MailSubject).call(this, name, enabledByDefault, description));
			}

			_createClass(MailSubject, [{
				key: 'isEnabled',
				value: function isEnabled() {
					return _enabled;
				}
			}, {
				key: 'enable',
				value: function enable() {
					_get(Object.getPrototypeOf(MailSubject.prototype), 'enable', this).call(this);
					if (!this.isEnabled()) {
						DOMListeners.addMailListListener(runMailSubjectFix);
						_enabled = true;
					}
				}
			}, {
				key: 'disable',
				value: function disable() {
					_get(Object.getPrototypeOf(MailSubject.prototype), 'disable', this).call(this);
					if (this.isEnabled()) {
						DOMListeners.removeMailListListener(runMailSubjectFix);
						_enabled = false;
					}
				}
			}]);

			return MailSubject;
		}(PluginBase);

		return new MailSubject();

		function runMailSubjectFix() {
			Array.prototype.map.call(document.querySelectorAll('.seq-msg-row .msg-info .subject:not([title])'), function (el) {
				el.title = el.textContent;
			});
		}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (StylePlugin, conf) {
	    var name = 'MailStyle';
	    var description = 'Change visual style of your inbox and mail view';
	    var enabledByDefault = true;

	    // pluginName, name, type, defaultValue, description = configType[type].defaultDescription, validation = configType[type].validation, bundleID = 0
	    var configuration = {
	        bundle: true,
	        height: {
	            enabled: conf.getConfigObj(name, 'Email_Height', 'checkbox', true, 'Customize top and bottom padding of each mail to narrow spacing'),
	            padding_height: conf.getConfigObj(name, 'Padding', 'padding', 0)
	        },
	        important: {
	            enabled: conf.getConfigObj(name, 'Important_Email_Color', 'checkbox', true, 'Replace colors of circle on left side for important emails for better visibility'),
	            color_primary: conf.getConfigObj(name, 'Color_Primary', 'color', '#FF5050'),
	            color_second: conf.getConfigObj(name, 'Color_Secondary', 'color', '#FFFFFF')
	        },
					unread: {
	            enabled: conf.getConfigObj(name, 'Unread_Emails_Highlight', 'checkbox', false, 'Adjust text visibility of unread emails'),
	            color_primary: conf.getConfigObj(name, 'Color_Unread_Mails', 'color', '#FF5050'),
	            bold: conf.getConfigObj(name, 'Bold_Unread_Mails', 'select', { default: 'true', options: ['true', 'false'] }, 'Use bold font for unread mails')
	        },
					selected: {
	            enabled: conf.getConfigObj(name, 'Selected_Email_Appearance', 'checkbox', false, 'Adjust visibility of selected emails'),
							color_primary: conf.getConfigObj(name, 'Font_Color_Selected_Mails', 'color', '#FF5050'),
							color_secondary: conf.getConfigObj(name, 'Background_Color_Selected_Mails', 'color', '#FF5050'),
	            bold: conf.getConfigObj(name, 'Bold_Selected_Mails', 'select', { default: 'true', options: ['true', 'false'] }, 'Use bold font for selected mails')
	        },
	        fontFace: {
	            enabled: conf.getConfigObj(name, 'Force_FontFace_Family', 'checkbox', false, 'Force specific font face inside emails where applicable (this might be useful to address issues of emails sent from Lotus Notes, that results in barely readable font)'),
	            font_family: conf.getConfigObj(name, 'Font_Family', 'text', 'Arial', 'Specify existing font you want to enforce')
	        }
	    };

	    var MailStyle = function (_StylePlugin) {
	        _inherits(MailStyle, _StylePlugin);

	        function MailStyle() {
	            _classCallCheck(this, MailStyle);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(MailStyle).call(this, name, enabledByDefault, description, configuration));
	        }

	        _createClass(MailStyle, [{
	            key: 'getStyle',
	            value: function getStyle() {
	                return '\n                ' + (this.configuration.height.enabled.value ? '\n                    .msg-info {padding: ' + this.configuration.height.padding_height.value + 'px 10px !important}\n                    ' : '') + '\n                ' + (this.configuration.important.enabled.value ? '\n                    .seq-msg-row.importance > .avatar .initials { background-color: ' + this.configuration.important.color_primary.value + ' !important; color: ' +  this.configuration.important.color_second.value + ' !important; fill: ' + this.configuration.important.color_second.value + ' !important; }\n                    .seq-msg-row.importance > .avatar:hover .check-icon { border-color: ' + this.configuration.important.color_primary.value + ' !important; }\n                    .seq-msg-row.importance.checked > .avatar .check-icon { border-color: ' + this.configuration.important.color_primary.value + ' !important; }\n                    .seq-msg-row.importance > .invitation.view-icon { background-color: ' + this.configuration.important.color_primary.value + ' !important; }\n                    .seq-msg-row.importance  .view-icon svg { fill: ' + this.configuration.important.color_second.value + ' !important; }\n                    ' : '') + '\n                ' + (this.configuration.unread.enabled.value ? '\n                    .seq-msg-row.unread .subject, .seq-msg-row.unread:not(.thread) .from, .thread-people .person.unread {\n                        font-weight: ' + (this.configuration.unread.bold.value === 'true' ? 'bold' : 'normal') + ' !important;\n                        color: ' + this.configuration.unread.color_primary.value + ' !important;\n                    }\n                    ' : '') + '\n                ' + (this.configuration.fontFace.enabled.value ? '\n                    .mail-read-view .pim-mailread-mailcontent font[face] {font-family: ' + this.configuration.fontFace.font_family.value + ' !important;}\n                    ' : '') + '\n                    .seq-msg-row.selected {background-color: #C6E2FF;}' + '\n            ';
	            }
	        }]);

	        return MailStyle;
	    }(StylePlugin);

	    return new MailStyle();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
