var events = require('events');

var myEmitter = new events.EventEmitter();


myEmitter.on('someEvent', function(mssg){
	console.log(mssg);
});

myEmitter.emit("someEvent", "the event was emitted");





var events = require("events");
var util = require("util");

var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var mary = new Person("mary");
var ryan = new Person("ryan");

var people = [ james, mary, ryan];

people.forEach(function(person){

	person.on('speak' function(mssg){
		console.log(person.name + "said: " + mssg);
	});

});



james.emit("speak" "hey dudes");


