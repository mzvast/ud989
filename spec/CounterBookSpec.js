describe('CounterBook Test', function() {
	var myCounterBook,myCounter;
	beforeEach(function() {
		myCounterBook = new CounterBook();
		myCounter = new Counter();
	});

	it('should Create a new CounterBook', function() {
		expect(myCounterBook).toBeDefined(CounterBook);
	});

	it('should Get a undefined counter in a new CounterBook', function() {		
		expect(myCounterBook.get(0)).toBe(undefined);
	});

	it('should Add a new counter to CounterBook', function() {
		myCounterBook.add(myCounter);
		expect(myCounterBook.get(0)).not.toBe(undefined);
	});

	it('should Get the counter value of a certain conter in CounterBook', function() {
		myCounterBook.add(myCounter);
		var thisCounter = myCounterBook.get(0);	
		expect(thisCounter.get()).toBe(0);
	});
});