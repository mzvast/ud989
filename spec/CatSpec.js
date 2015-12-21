describe('Cat Test', function() {
	var thisCat;

	beforeEach(function() {
		thisCat = new Cat();
	});

	it('should Set/Get a cats name', function() {
		thisCat.setName('Cat1');
		expect(thisCat.getName()).toBe('Cat1');
	});

	it('should Set/Get a cats URL', function() {
		thisCat.setURL('URL1');
		expect(thisCat.getURL()).toBe('URL1');
	});

	it('should upVote/Get a cats count', function() {
		expect(thisCat.getCount()).toBe(0);
		thisCat.upVote();
		expect(thisCat.getCount()).toBe(1);
	});

	it('should initialize a cats ', function() {
		thisCat.init('name','url')		
		expect(thisCat.getName()).toBe('name');
		expect(thisCat.getURL()).toBe('url');
	});
});