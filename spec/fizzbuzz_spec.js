// Test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("A program that implements fizzuzz", function() {

	it("can count from 1 to 5", function() {
		expect(fb.count(1,5)).tobe("1 2 3 4 5");
	});
	it("it can convert multiples of 3 into Fizz", function() {
		expect(fb.fizzer(1)).toBe(1);
		expect(fb.fizzer(2)).toBe(2);
		expect(fb.fizzer(3)).toBe("Fizz");
		expect(fb.fizzer(4)).toBe(4);
		expect(fb.fizzer(5)).toBe(5);
	});

	it("it can convert multiples of 5 into Buzz", function() {
		expect(fb.buzzer(1)).toBe(1);
		expect(fb.buzzer(2)).toBe(2);
		expect(fb.buzzer(3)).toBe(3);
		expect(fb.buzzer(4)).toBe(4);
		expect(fb.buzzer(5)).toBe("Buzz");
	});	
		it("it can convert multiples of 3 and 5 into FizzBuzz", function() {
		expect(fb.buzzer(1)).toBe(1);
		expect(fb.buzzer(2)).toBe(2);
		expect(fb.buzzer(3)).toBe(3);
		expect(fb.buzzer(4)).toBe(4);
		expect(fb.buzzer(5)).toBe("Buzz");
	});	
});




