describe('Counter Test', function() {
	var thisCounter;
	beforeEach(function() {
		thisCounter = new Counter();
	});

	it('should create a new counter', function() {
		expect(thisCounter).toBeDefined(Counter);
	});

	it('should can get a counter initial value', function() {
		expect(thisCounter.get()).toBe(0);
	});

	it('should add 1 to the conter', function() {
		thisCounter.addOne();
		expect(thisCounter.get()).toBe(1);
	});

});
	