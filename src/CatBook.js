function CatBook () {
	this.cat = [];
}
CatBook.prototype.add = function(newCat) {
	this.cat.push(newCat);
};

CatBook.prototype.get = function(index) {
	return this.cat[index];
};