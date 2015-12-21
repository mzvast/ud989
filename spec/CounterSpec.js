describe('Counter test', function() {
	var thisCounter;
	beforeEach(function() {
		thisCounter = new Counter();
	});

	it('should create a new counter', function() {
		expect(thisCounter).toBeDefined(Counter);
	});

	it('should add 1 to the conter', function() {
		thisCounter.add();
		expect(thisCounter.get()).toBe(1);
	});

});
	