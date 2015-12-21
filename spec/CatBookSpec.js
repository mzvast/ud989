describe('CatBook Test', function() {
	var thisCat = new Cat();
		catBook = new CatBook();

	it('should Add a Cat to CatBook and Shows the right total number', function() {
		catBook.add(thisCat);
		expect(catBook.get(0)).toBe(thisCat);
		expect(catBook.getNumber()).toBe(1);
	});
});