function Cat () {
	this.name = '';
	this.url = '';
	this.count = 0;
};

Cat.prototype.setName = function(name) {
	this.name = name;
};
Cat.prototype.getName = function() {
	return this.name;
};
Cat.prototype.setURL = function(url) {
	this.url = url;
};
Cat.prototype.getURL = function() {
	return this.url;
};
Cat.prototype.upVote = function() {
	this.count += 1; 
};
Cat.prototype.getCount = function() {
	return this.count;
};