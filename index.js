(function (root, factory) {
    'use strict'
    /* istanbul ignore next */
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory)
    } else {
        // Browser globals
        root.Marquee = factory()
    }
})(this, function () {

  function Marquee (el, options) {

  }

  Marquee.prototype = {
    constructor: Marquee,

    _init: function () {

    },

    start: function () {

    },

    stop: function () {

    },

    reset: function () {

    },

    append: function () {

    },

    set: function () {

    }
  }

  return Marquee
});
