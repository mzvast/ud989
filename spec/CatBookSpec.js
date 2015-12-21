describe('Cat Test', function() {
	var thisCat = new Cat();
		catBook = new CatBook();

	it('should add a new Cat', function() {
		catBook.add(thisCat);
		expect(catBook.get(0)).toBe(thisCat);
	});
});