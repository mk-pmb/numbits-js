
<!--#echo json="package.json" key="name" underline="=" -->
numbits
=======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
JavaScript&#39;s native bit math operations, exposed as functions with names.
<!--/#echo -->


Why names?

  * Easier for readers of your code to distinguish bit math from
    accidential typo.
  * Easier for your linter to guess whether it's a typo.

Is it slower?

  * Dunno, probably depends on your optimizer.


Usage
-----

from [usage.js](usage.js):

<!--#include file="usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="24" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
