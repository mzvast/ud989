function CounterBook () {
	this.counterBook = [];
};

CounterBook.prototype.get = function(index) {
	return this.counterBook[index];
};

CounterBook.prototype.add = function(counter) {
	this.counterBook.push(counter);
};