/* -*- tab-width: 2 -*- */
'use strict';


function readmeDemo() {
  //#u
  var bit = require('numbits'), eq = require('assert').deepStrictEqual,
    a = 23, b = 42;
  function expect(func, result) { eq(func(a, b), +result); }

  eq([a, b],    [ 0b00010111,
                  0b00101010 ]);
  expect(bit.and, 0b00000010 );
  expect(bit.or,  0b00111111 );
  expect(bit.xor, 0b00111101 );

  eq(a,           0b00010111 );
  expect(bit.not, -a -1 );

  b = 1;
  expect(bit.shl,    0b00101110 );   // alias: .shup (shift up)
  eq(a,            0b00010111 );
  expect(bit.shr, 0b00001011 );     // alias: .shdn (shift down)

  b = 3;
  expect(bit.shup,       0b10111000 );
  eq(a,               0b00010111 );
  expect(bit.shdn, 0b00000010 );
  //#r
}


function int2bin(i, w) {
  return ('0000000000000000000' + (+i).toString(2)).slice(-(w || 8));
}


(function (nums) {
  try {
    readmeDemo();
  } catch (err) {
    nums = err.message.match(/^(\d+) (?:===|deepStrictEqual) (\d+)$/);
    if (nums) {
      err.message = 'expected 0b' + int2bin(nums[2]) + ' but got 0b'
        + int2bin(nums[1]);
    }
    nums = err.stack.split(/\n +at readmeDemo/);
    if (nums) { nums = nums[1].match(/:(\d+):/); }
    if (nums) { err.stack = 'ln ' + nums[1] + ': ' + err.message; }
    throw err;
  }
}());









console.log("+OK usage test passed.");   //= "+OK usage test passed."
