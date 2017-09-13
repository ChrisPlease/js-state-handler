'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateHandler = function () {
  function StateHandler() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var initialFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, StateHandler);

    this._state = initialState || {};
    this.functions = [];

    if (initialFn) {
      this.addToRenderer(initialFn);
    }
  }

  _createClass(StateHandler, [{
    key: 'set',
    value: function set(newState) {
      Object.assign(this._state, newState);
      this.render();
    }
  }, {
    key: 'get',
    value: function get() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!key) {
        return this._state;
      }

      var value = this._state[key] ? this._state[key] : false;
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.functions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fn = _step.value;

          fn();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'addToRenderer',
    value: function addToRenderer() {
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!fn && typeof fn !== 'function' && (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) !== 'object') {
        console.error('Please provide a function or an array of functions to add them to the renderer');
        return false;
      }

      if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === 'object') {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = fn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var renderFunction = _step2.value;

            if (typeof renderFunction !== 'function') {
              console.error('The provided data is not a function.');
              return false;
            }

            this.functions.push(renderFunction);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else {
        this.functions.push(fn);
      }
    }
  }]);

  return StateHandler;
}();

exports.default = StateHandler;