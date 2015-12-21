function AddressBook () {
	this.contact=[];
	this.initialComplete = false;//Fake Async
}
AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;
	setTimeout(function() {
		self.initialComplete = true;
		if (cb) {
			return cb();
		};
	},3);
};//Fake Async

AddressBook.prototype.addContact = function(contact) {
	this.contact.push(contact);
};
AddressBook.prototype.deleteContact = function(index) {
	this.contact.splice(index,1);
};
AddressBook.prototype.getContact = function(index) {
	return this.contact[index];
};