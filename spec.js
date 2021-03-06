// Custom matcher which tests equality of supplied variables
var matches = {
    matches: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var passed = actual == expected;
                return {
                    pass: passed,
                    message: "Expected " + actual + (passed ? "" : " not") 
                                + " to equal " + expected
                };
            }
        };
    }
};

// Custom matcher which tests if result is 50
var toBeFifty = {
    toBeFifty: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var result = {};

                result.pass = util.equals(50, 50, customEqualityTesters);
                result.message = "Expected " + actual + " to be 50";

                return result;
            }
        };
    }
};

// add custom matchers to jasmine object, so they're available globally
beforeEach(function() {
    jasmine.addMatchers(matches);
    jasmine.addMatchers(toBeFifty);
});





// ####### Old-school Jasmine way to make custom Matchers

// beforeEach(function() {
// 	this.addMatchers({

// 		toBeFifty: function() {
// 			this.message = function() {
// 				return "Expected " + this.actual + " to be 50";
// 			};
// 			return this.actual === 50;
// 		}

// 	});
// });

// ####### Other Jasmine way to make custom Matchers (must be included in describe)

// describe("Making Custom Matcher", function() {    
//     beforeEach(function() {
//         jasmine.addMatchers({
//           toBeLarge: function(util, customEqualityTesters) {
//             return {
//                 compare: function(actual, expected) {
//                     var passed = actual == expected;
//                     return {
//                         pass: passed,
//                         message: "Expected " + actual + 
//                                 (passed ? "" : " not") + " to equal " + expected

//                     };
//                 }
//             };
//           }
//       });
//     });
// });



describe("Adder", function() {

	it("adds positive numbers", function() {
		expect(adder(3, 4)).toEqual(7);
	});

	it("adds negative numbers", function() {
		expect(adder(-1, 0)).toEqual(-1);
	});

	it("doesn't equal the wrong thing", function() {
		expect(adder(4,2)).not.toEqual(0);
	});

	it("gets close to the right answer", function() {
		expect(adder(12, 11.5)).toBeCloseTo(23.54, 1);
	});

	xit("breaks when passed string", function() {
		expect(function() {
		    adder("string");
		}).toThrow();
	});

	it("uses toThrow", function() {
		expect(function() {
		    calculate("string");
		}).toThrow();
	});

    // ###### Custom Matchers!

    it("uses a custom matcher", function() {
        expect(adder(25, 25)).matches(50);
    });

    it("is fifty", function() {
        expect(adder(25, 25)).toBeFifty();
    });

});

describe("Tester", function() {
    it("runs!", function() {
        expect(testMe()).toEqual("I work!");
    });
});

describe("Greeter", function() {
	it("greets name", function() {
		expect(greet("Atlas")).toEqual("Hello Atlas");
	});

	it("works without a name argument", function() {
		expect(greet()).toContain("name?");
	});

	it("matches a regex", function() {
		expect(greet("Ari")).toMatch(/lo/);
	});
});

describe("Appender", function() {
	it("contains the new word", function() {
		expect(appendWord("cherry")).toContain("cherry");
	});
});