function Counter () {
	this.num = 0;
};

Counter.prototype.add = function() {
	this.num++;
};
Counter.prototype.get = function() {
	return this.num;
};