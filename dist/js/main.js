// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/superfish/dist/js/superfish.js":[function(require,module,exports) {
/*
 * jQuery Superfish Menu Plugin - v1.7.10
 * Copyright (c) 2018 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
;

(function ($, w) {
  "use strict";

  var methods = function () {
    // private properties and methods go here
    var c = {
      bcClass: 'sf-breadcrumb',
      menuClass: 'sf-js-enabled',
      anchorClass: 'sf-with-ul',
      menuArrowClass: 'sf-arrows'
    },
        ios = function () {
      var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);

      if (ios) {
        // tap anywhere on iOS to unfocus a submenu
        $('html').css('cursor', 'pointer').on('click', $.noop);
      }

      return ios;
    }(),
        wp7 = function () {
      var style = document.documentElement.style;
      return 'behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent);
    }(),
        unprefixedPointerEvents = function () {
      return !!w.PointerEvent;
    }(),
        toggleMenuClasses = function ($menu, o, add) {
      var classes = c.menuClass,
          method;

      if (o.cssArrows) {
        classes += ' ' + c.menuArrowClass;
      }

      method = add ? 'addClass' : 'removeClass';
      $menu[method](classes);
    },
        setPathToCurrent = function ($menu, o) {
      return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function () {
        return $(this).children(o.popUpSelector).hide().show().length;
      }).removeClass(o.pathClass);
    },
        toggleAnchorClass = function ($li, add) {
      var method = add ? 'addClass' : 'removeClass';
      $li.children('a')[method](c.anchorClass);
    },
        toggleTouchAction = function ($menu) {
      var msTouchAction = $menu.css('ms-touch-action');
      var touchAction = $menu.css('touch-action');
      touchAction = touchAction || msTouchAction;
      touchAction = touchAction === 'pan-y' ? 'auto' : 'pan-y';
      $menu.css({
        'ms-touch-action': touchAction,
        'touch-action': touchAction
      });
    },
        getMenu = function ($el) {
      return $el.closest('.' + c.menuClass);
    },
        getOptions = function ($el) {
      return getMenu($el).data('sfOptions');
    },
        over = function () {
      var $this = $(this),
          o = getOptions($this);
      clearTimeout(o.sfTimer);
      $this.siblings().superfish('hide').end().superfish('show');
    },
        close = function (o) {
      o.retainPath = $.inArray(this[0], o.$path) > -1;
      this.superfish('hide');

      if (!this.parents('.' + o.hoverClass).length) {
        o.onIdle.call(getMenu(this));

        if (o.$path.length) {
          $.proxy(over, o.$path)();
        }
      }
    },
        out = function () {
      var $this = $(this),
          o = getOptions($this);

      if (ios) {
        $.proxy(close, $this, o)();
      } else {
        clearTimeout(o.sfTimer);
        o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
      }
    },
        touchHandler = function (e) {
      var $this = $(this),
          o = getOptions($this),
          $ul = $this.siblings(e.data.popUpSelector);

      if (o.onHandleTouch.call($ul) === false) {
        return this;
      }

      if ($ul.length > 0 && $ul.is(':hidden')) {
        $this.one('click.superfish', false);

        if (e.type === 'MSPointerDown' || e.type === 'pointerdown') {
          $this.trigger('focus');
        } else {
          $.proxy(over, $this.parent('li'))();
        }
      }
    },
        applyHandlers = function ($menu, o) {
      var targets = 'li:has(' + o.popUpSelector + ')';

      if ($.fn.hoverIntent && !o.disableHI) {
        $menu.hoverIntent(over, out, targets);
      } else {
        $menu.on('mouseenter.superfish', targets, over).on('mouseleave.superfish', targets, out);
      }

      var touchevent = 'MSPointerDown.superfish';

      if (unprefixedPointerEvents) {
        touchevent = 'pointerdown.superfish';
      }

      if (!ios) {
        touchevent += ' touchend.superfish';
      }

      if (wp7) {
        touchevent += ' mousedown.superfish';
      }

      $menu.on('focusin.superfish', 'li', over).on('focusout.superfish', 'li', out).on(touchevent, 'a', o, touchHandler);
    };

    return {
      // public methods
      hide: function (instant) {
        if (this.length) {
          var $this = this,
              o = getOptions($this);

          if (!o) {
            return this;
          }

          var not = o.retainPath === true ? o.$path : '',
              $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
              speed = o.speedOut;

          if (instant) {
            $ul.show();
            speed = 0;
          }

          o.retainPath = false;

          if (o.onBeforeHide.call($ul) === false) {
            return this;
          }

          $ul.stop(true, true).animate(o.animationOut, speed, function () {
            var $this = $(this);
            o.onHide.call($this);
          });
        }

        return this;
      },
      show: function () {
        var o = getOptions(this);

        if (!o) {
          return this;
        }

        var $this = this.addClass(o.hoverClass),
            $ul = $this.children(o.popUpSelector);

        if (o.onBeforeShow.call($ul) === false) {
          return this;
        }

        $ul.stop(true, true).animate(o.animation, o.speed, function () {
          o.onShow.call($ul);
        });
        return this;
      },
      destroy: function () {
        return this.each(function () {
          var $this = $(this),
              o = $this.data('sfOptions'),
              $hasPopUp;

          if (!o) {
            return false;
          }

          $hasPopUp = $this.find(o.popUpSelector).parent('li');
          clearTimeout(o.sfTimer);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this); // remove event handlers

          $this.off('.superfish').off('.hoverIntent'); // clear animation's inline display style

          $hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
            if (typeof style !== 'undefined') {
              return style.replace(/display[^;]+;?/g, '');
            }
          }); // reset 'current' path classes

          o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
          $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
          o.onDestroy.call($this);
          $this.removeData('sfOptions');
        });
      },
      init: function (op) {
        return this.each(function () {
          var $this = $(this);

          if ($this.data('sfOptions')) {
            return false;
          }

          var o = $.extend({}, $.fn.superfish.defaults, op),
              $hasPopUp = $this.find(o.popUpSelector).parent('li');
          o.$path = setPathToCurrent($this, o);
          $this.data('sfOptions', o);
          toggleMenuClasses($this, o, true);
          toggleAnchorClass($hasPopUp, true);
          toggleTouchAction($this);
          applyHandlers($this, o);
          $hasPopUp.not('.' + c.bcClass).superfish('hide', true);
          o.onInit.call(this);
        });
      }
    };
  }();

  $.fn.superfish = function (method, args) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
    }
  };

  $.fn.superfish.defaults = {
    popUpSelector: 'ul,.sf-mega',
    // within menu context
    hoverClass: 'sfHover',
    pathClass: 'overrideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: {
      opacity: 'show'
    },
    animationOut: {
      opacity: 'hide'
    },
    speed: 'normal',
    speedOut: 'fast',
    cssArrows: true,
    disableHI: false,
    onInit: $.noop,
    onBeforeShow: $.noop,
    onShow: $.noop,
    onBeforeHide: $.noop,
    onHide: $.noop,
    onIdle: $.noop,
    onDestroy: $.noop,
    onHandleTouch: $.noop
  };
})(jQuery, window);
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("superfish");

(function ($, wp) {
  // Superfish
  $('.desktop-main-menu-wrap ul.menu').superfish(); // Hamburger

  $('.mobile-main-menu-hamburger').click(function () {
    $('body').toggleClass('mobile-main-menu-is-open');
    $('.mobile-main-menu-wrap .menu-item-has-children').removeClass('sub-menu-visible');
  }); // Submenu expand

  $('.mobile-main-menu-wrap .menu-item-has-children > a').click(function () {
    $(this).parent().toggleClass('sub-menu-visible');
    $(this).parent().find('.menu-item-has-children').removeClass('sub-menu-visible');
    return false;
  });
})(window.jQuery, window.wp);
},{"superfish":"../node_modules/superfish/dist/js/superfish.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49852" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/js/main.js.map