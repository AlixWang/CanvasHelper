(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.canvasHandle = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function ObjType(obj) {
    var type = Object.prototype.toString.call(obj).match(/^\[.+\b(.+)\]$/);
    return type[1];
  }

  var canvasHandle =
  /*#__PURE__*/
  function () {
    function canvasHandle(ctx) {
      _classCallCheck(this, canvasHandle);

      if (ObjType(ctx) !== 'CanvasRenderingContext2D') {
        throw new Error('initial obj is not a canvas context objcet please check your code');
      }

      this.ctx = ctx;
      this.ctx.strokeRoundRect = this.strokeRoundRect.bind(this);
      this.ctx.fillRoundRect = this.fillRoundRect.bind(this);
      return this.ctx;
    }
    /**
     *
     *
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [width=100]
     * @param {number} [height=100]
     * @param {number} [strokeWidth=1] stroke width
     * @param {string} [color='#000000'] stroke line color
     * @param {*} [radiusCount=[]]
     * @memberof canvasHandle
     */


    _createClass(canvasHandle, [{
      key: "strokeRoundRect",
      value: function strokeRoundRect() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
        var strokeWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#000000';
        var radiusCount = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
        this.ctx.save();

        this._drawRoundRect(x, y, width, height, radiusCount);

        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = strokeWidth;
        this.ctx.stroke();
        this.ctx.restore();
      }
      /**
       *
       * arguments similar with _drawRoundRect infact the almost arguments will pass to it
       * @param {number} [x=0]
       * @param {number} [y=0]
       * @param {number} [width=100]
       * @param {number} [height=100]
       * @param {string} [color='#000000'] fill bg color
       * @param {*} [radiusCount=[]]
       * @memberof canvasHandle
       */

    }, {
      key: "fillRoundRect",
      value: function fillRoundRect() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
        var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#000000';
        var radiusCount = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
        this.ctx.save();

        this._drawRoundRect(x, y, width, height, radiusCount);

        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.restore();
      }
      /**
       * this method will generate a roundRect
       *
       * @param {*} x roundRect x position
       * @param {*} y roundRect y position 
       * @param {*} width roundRect width
       * @param {*} height roundRect height
       * @param {*} radiusCount roundRect radius array [topLeft, topRight, bottomRight, bottomLeft]
       * @memberof canvasHandle
       */

    }, {
      key: "_drawRoundRect",
      value: function _drawRoundRect(x, y, width, height, radiusCount) {
        var _radiusCount = _slicedToArray(radiusCount, 4),
            topLeft = _radiusCount[0],
            topRight = _radiusCount[1],
            bottomRight = _radiusCount[2],
            bottomLeft = _radiusCount[3];

        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.beginPath(0);

        if (topLeft) {
          this.ctx.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2);
        }

        this.ctx.lineTo(width - topRight, 0);

        if (topRight) {
          this.ctx.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, Math.PI * 2);
        } else {
          this.ctx.lineTo(width, 0);
          this.ctx.lineTo(width, topRight);
        }

        this.ctx.lineTo(width, height - bottomRight);

        if (bottomRight) {
          this.ctx.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2);
        } else {
          this.ctx.lineTo(width, height);
        }

        this.ctx.lineTo(bottomLeft, height);

        if (bottomLeft) {
          this.ctx.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI);
        } else {
          this.ctx.lineTo(0, height);
        }

        this.ctx.lineTo(0, topLeft);
        this.ctx.closePath();
      }
    }]);

    return canvasHandle;
  }();

  return canvasHandle;

}));
