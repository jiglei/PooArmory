// Define a class like this
function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

// Add methods like this.  All Person objects will be able to invoke this
Person.prototype.speak = function(){
    alert("Howdy, my name is" + this.name);
};

// Instantiate new objects with 'new'
var person = new Person("Bob", "M");

// Invoke methods like this
person.speak(); // alerts "Howdy, my name is Bob"

var locations =
{
	"hat":1,
	"weapon":2,
	"chest":3,
	"offhand":4,
	"legs":5,
	"feet":6,
	"rings":7,
	"earrings":8,
	"artifact":9,
	"brooch":10,
	"necklace":11
}

var types =
{
	"weapon":"longsword","longhammer"
}

var scrolls = [
{
	"name":"Immoral",
	"locations":["weapon"]

},
{
},
]