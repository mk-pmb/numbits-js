/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  var ops = {
    and:  function bitAnd(a, b) { return (a & b); },
    or:   function bitOr(a, b) { return (a | b); },
    xor:  function bitXor(a, b) { return (a ^ b); },
    not:  function bitNot(x) { return ~x; },
    shl:  function bitShiftLeft(a, b) { return (a << b); },
    shr:  function bitShiftRight(a, b) { return (a >> b); },
  };
  ops.shup = ops.shl;
  ops.shdn = ops.shr;
  return ops;
}());
