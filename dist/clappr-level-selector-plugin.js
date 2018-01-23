(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define("clappr-level-selector-plugin", ["clappr"], factory);
	else if(typeof exports === 'object')
		exports["clappr-level-selector-plugin"] = factory(require("clappr"));
	else
		root["clappr-level-selector-plugin"] = factory(root["clappr"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clappr__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clappr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clappr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_level_selector_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_level_selector_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_level_selector_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_style_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__public_style_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AUTO = -1;

var LevelSelector = function (_UICorePlugin) {
  _inherits(LevelSelector, _UICorePlugin);

  function LevelSelector() {
    _classCallCheck(this, LevelSelector);

    return _possibleConstructorReturn(this, (LevelSelector.__proto__ || Object.getPrototypeOf(LevelSelector)).apply(this, arguments));
  }

  _createClass(LevelSelector, [{
    key: 'bindEvents',
    value: function bindEvents() {
      this.listenTo(this.core, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].CORE_READY, this.bindPlaybackEvents);
      this.listenTo(this.core.mediaControl, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].MEDIACONTROL_CONTAINERCHANGED, this.reload);
      this.listenTo(this.core.mediaControl, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].MEDIACONTROL_RENDERED, this.render);
      this.listenTo(this.core.mediaControl, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].MEDIACONTROL_HIDE, this.hideSelectLevelMenu);
    }
  }, {
    key: 'unBindEvents',
    value: function unBindEvents() {
      this.stopListening(this.core, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].CORE_READY);
      this.stopListening(this.core.mediaControl, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].MEDIACONTROL_CONTAINERCHANGED);
      this.stopListening(this.core.mediaControl, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].MEDIACONTROL_RENDERED);
      this.stopListening(this.core.mediaControl, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].MEDIACONTROL_HIDE);
      this.stopListening(this.core.getCurrentPlayback(), __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_LEVELS_AVAILABLE);
      this.stopListening(this.core.getCurrentPlayback(), __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_LEVEL_SWITCH_START);
      this.stopListening(this.core.getCurrentPlayback(), __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_LEVEL_SWITCH_END);
      this.stopListening(this.core.getCurrentPlayback(), __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_BITRATE);
    }
  }, {
    key: 'bindPlaybackEvents',
    value: function bindPlaybackEvents() {
      var currentPlayback = this.core.getCurrentPlayback();

      this.listenTo(currentPlayback, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_LEVELS_AVAILABLE, this.fillLevels);
      this.listenTo(currentPlayback, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_LEVEL_SWITCH_START, this.startLevelSwitch);
      this.listenTo(currentPlayback, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_LEVEL_SWITCH_END, this.stopLevelSwitch);
      this.listenTo(currentPlayback, __WEBPACK_IMPORTED_MODULE_0_clappr__["Events"].PLAYBACK_BITRATE, this.updateCurrentLevel);

      var playbackLevelsAvaialbeWasTriggered = currentPlayback.levels && currentPlayback.levels.length > 0;
      playbackLevelsAvaialbeWasTriggered && this.fillLevels(currentPlayback.levels);
    }
  }, {
    key: 'reload',
    value: function reload() {
      this.unBindEvents();
      this.bindEvents();
      this.bindPlaybackEvents();
    }
  }, {
    key: 'shouldRender',
    value: function shouldRender() {
      if (!this.core.getCurrentContainer()) return false;

      var currentPlayback = this.core.getCurrentPlayback();
      if (!currentPlayback) return false;

      var respondsToCurrentLevel = currentPlayback.currentLevel !== undefined;
      // Only care if we have at least 2 to choose from
      var hasLevels = !!(this.levels && this.levels.length > 1);

      return respondsToCurrentLevel && hasLevels;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.shouldRender()) {
        var style = __WEBPACK_IMPORTED_MODULE_0_clappr__["Styler"].getStyleFor(__WEBPACK_IMPORTED_MODULE_2__public_style_scss___default.a, { baseUrl: this.core.options.baseUrl });

        this.$el.html(this.template({ 'levels': this.levels, 'title': this.getTitle() }));
        this.$el.append(style);
        this.core.mediaControl.$('.media-control-right-panel').append(this.el);
        this.highlightCurrentLevel();
      }
      return this;
    }
  }, {
    key: 'fillLevels',
    value: function fillLevels(levels) {
      var initialLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AUTO;

      if (this.selectedLevelId === undefined) this.selectedLevelId = initialLevel;
      this.levels = levels;
      this.configureLevelsLabels();
      this.render();
    }
  }, {
    key: 'configureLevelsLabels',
    value: function configureLevelsLabels() {
      if (this.core.options.levelSelectorConfig === undefined) return;

      var labelCallback = this.core.options.levelSelectorConfig.labelCallback;
      if (labelCallback && typeof labelCallback !== 'function') {
        throw new TypeError('labelCallback must be a function');
      }

      var hasLabels = this.core.options.levelSelectorConfig.labels;
      var labels = hasLabels ? this.core.options.levelSelectorConfig.labels : {};

      if (labelCallback || hasLabels) {
        var level;
        var label;
        for (var levelId in this.levels) {
          level = this.levels[levelId];
          label = labels[level.id];
          if (labelCallback) {
            level.label = labelCallback(level, label);
          } else if (label) {
            level.label = label;
          }
        }
      }
    }
  }, {
    key: 'findLevelBy',
    value: function findLevelBy(id) {
      var foundLevel;
      this.levels.forEach(function (level) {
        if (level.id === id) {
          foundLevel = level;
        }
      });
      return foundLevel;
    }
  }, {
    key: 'onLevelSelect',
    value: function onLevelSelect(event) {
      this.selectedLevelId = parseInt(event.target.dataset.levelSelectorSelect, 10);
      if (this.core.getCurrentPlayback().currentLevel == this.selectedLevelId) return false;
      this.core.getCurrentPlayback().currentLevel = this.selectedLevelId;

      this.toggleContextMenu();

      event.stopPropagation();
      return false;
    }
  }, {
    key: 'onShowLevelSelectMenu',
    value: function onShowLevelSelectMenu(event) {
      this.toggleContextMenu();
    }
  }, {
    key: 'hideSelectLevelMenu',
    value: function hideSelectLevelMenu() {
      this.$('.level_selector ul').hide();
    }
  }, {
    key: 'toggleContextMenu',
    value: function toggleContextMenu() {
      this.$('.level_selector ul').toggle();
    }
  }, {
    key: 'buttonElement',
    value: function buttonElement() {
      return this.$('.level_selector button');
    }
  }, {
    key: 'levelElement',
    value: function levelElement(id) {
      return this.$('.level_selector ul a' + (!isNaN(id) ? '[data-level-selector-select="' + id + '"]' : '')).parent();
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      return (this.core.options.levelSelectorConfig || {}).title;
    }
  }, {
    key: 'startLevelSwitch',
    value: function startLevelSwitch() {
      this.buttonElement().addClass('changing');
    }
  }, {
    key: 'stopLevelSwitch',
    value: function stopLevelSwitch() {
      this.buttonElement().removeClass('changing');
    }
  }, {
    key: 'updateText',
    value: function updateText(level) {
      if (level === AUTO) {
        this.buttonElement().text(this.currentLevel ? 'AUTO (' + this.currentLevel.label + ')' : 'AUTO');
      } else {
        this.buttonElement().text(this.findLevelBy(level).label);
      }
    }
  }, {
    key: 'updateCurrentLevel',
    value: function updateCurrentLevel(info) {
      var level = this.findLevelBy(info.level);
      this.currentLevel = level ? level : null;
      this.highlightCurrentLevel();
    }
  }, {
    key: 'highlightCurrentLevel',
    value: function highlightCurrentLevel() {
      this.levelElement().removeClass('current');
      this.currentLevel && this.levelElement(this.currentLevel.id).addClass('current');
      this.updateText(this.selectedLevelId);
    }
  }, {
    key: 'name',
    get: function get() {
      return 'level_selector';
    }
  }, {
    key: 'template',
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_clappr__["template"])(__WEBPACK_IMPORTED_MODULE_1__public_level_selector_html___default.a);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': this.name,
        'data-level-selector': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click [data-level-selector-select]': 'onLevelSelect',
        'click [data-level-selector-button]': 'onShowLevelSelectMenu'
      };
    }
  }], [{
    key: 'version',
    get: function get() {
      return VERSION;
    }
  }]);

  return LevelSelector;
}(__WEBPACK_IMPORTED_MODULE_0_clappr__["UICorePlugin"]);

/* harmony default export */ __webpack_exports__["default"] = (LevelSelector);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<button data-level-selector-button>\n  Auto\n</button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href=\"#\" data-level-selector-select=\"-1\">AUTO</a></li>\n  <% for (var i = 0; i < levels.length; i++) { %>\n    <li><a href=\"#\" data-level-selector-select=\"<%= levels[i].id %>\"><%= levels[i].label %></a></li>\n  <% }; %>\n</ul>\n";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".level_selector[data-level-selector] {\n  float: right;\n  margin-top: 5px;\n  position: relative; }\n  .level_selector[data-level-selector] button {\n    background-color: transparent;\n    color: #fff;\n    font-family: Roboto,\"Open Sans\",Arial,sans-serif;\n    -webkit-font-smoothing: antialiased;\n    border: none;\n    font-size: 10px; }\n    .level_selector[data-level-selector] button:hover {\n      color: #c9c9c9; }\n    .level_selector[data-level-selector] button.changing {\n      -webkit-animation: pulse 0.5s infinite alternate; }\n  .level_selector[data-level-selector] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .level_selector[data-level-selector] li {\n    font-size: 10px; }\n    .level_selector[data-level-selector] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .level_selector[data-level-selector] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .level_selector[data-level-selector] li a:hover {\n        background-color: #555;\n        color: white; }\n        .level_selector[data-level-selector] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .level_selector[data-level-selector] li.current a {\n      color: #f00; }\n\n@-webkit-keyframes pulse {\n  0% {\n    color: #fff; }\n  50% {\n    color: #ff0101; }\n  100% {\n    color: #B80000; } }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=clappr-level-selector-plugin.js.map