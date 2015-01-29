// var assert = require('assert');
// var maxBy = require('../');
//
// suite('Mocha TDD simple comparisons', function(){
// 	test('maxBy [9,3,4] should return 4', function(){
// 		var n = maxBy([9,3,4], function (x) {
// 			return x % 3;
// 		});
// 		assert.equal(n, 4);
// 	});
// });

/*** IGNORE - Old tape tests for reference only ***/
var maxBy = require('../');
var test = require('tape');

test('simple comparisons', function (t) {
    t.plan(1);

    var n = maxBy([9,3,4], function (x) {
	    return x % 3
    });
    t.equal(n, 4);
});
