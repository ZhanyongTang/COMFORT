v0 = 'regress-7224.js';
var v1 = 'regress';
var v2 = 'JS1_4';
var v3 = 'Regression test for bugzilla #7224';
var v4 = 'http://bugzilla.mozilla.org/show_bug.cgi?id=7224';
startTest();
var v5 = new Function('return arguments.caller');
var v6 = {};
v6.foo = v5;
v6.foo('a', 'b', 'function');
AddTestCase('var f = new Function( \'return arguments.caller\' ); f()', undefined, v5());
AddTestCase('var o = {}; o.foo = f; o.foo(\'a\')', undefined, v6.foo('a'));
test();