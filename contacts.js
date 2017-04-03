var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

/* var findContact = function(index) {
    return contacts[index];
}; */
//example as expression

function findContact (index) {
    return contacts[index];
}

function addContact (name) {
    contacts.push(name);
}

function updateLastContact (newName) {
    contacts[contacts.length - 1] = newName;
}

console.log(findContact(2));
updateLastContact("Patty Davis");
addContact("Mark Jones");
console.log(contacts);