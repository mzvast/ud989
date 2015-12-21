function Counter () {
	this.num = 0;
};

Counter.prototype.addOne = function() {
	this.num++;
};
Counter.prototype.get = function() {
	return this.num;
};