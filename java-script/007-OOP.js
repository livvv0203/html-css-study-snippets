// OOP
// Create Obj - Option 1
function createObject(name, age) {
  // Create an obj
  var obj = {};
  // Add attributes to the object
  obj.name = name;
  obj.age = age;
  obj.sayHi = function () {
    console.log("Hi, I'm Olivia.");
  };

  return obj;
}

var obj1 = createObject("Olivia", 19);
var obj2 = createObject("Johnson", 25);

console.log(obj1, obj2);

// Create Obj - Option 2
function createObject_2(name, age) {

    this.name = name;
    this.age = age;
    this.sayHi = function () { console.log('Hello...')};

}

var obj3 = new createObject_2('Oli', 18);
var obj4 = new createObject_2('Someone Else', 20);

console.log(obj3, obj4);

// Prototype
function Person() {
    Person.prototype.sayHi = function() {
        console.log("Hi");
    }
}

var p1 = new Person();
var p2 = new Person();
p1.sayHi();
p2.sayHi();






















