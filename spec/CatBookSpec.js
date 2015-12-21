describe('CatBook Test', function() {
	var thisCat = new Cat();
		catBook = new CatBook();

	it('should Add a Cat to CatBook', function() {
		catBook.add(thisCat);
		expect(catBook.get(0)).toBe(thisCat);
	});
});