/************************
  Read Only property
************************/
// "use strict";
// Will rise error on lines: 15, 21, 51
// Also you could not bind the Global scope

var obj = {};

Object.defineProperty(obj, 'readOnly', {
  enumerable: false,
  configurable: false,
  writeable: false,
  value: 'Read only property'
});

obj.readOnly = 'New value'; // without 'use strict' silent error
console.log(obj.readOnly);

/************************
  Dupes
***********************/
function func(arg1, arg2, arg1) {
  console.log(arg1);
}

func(1,2,3); // Output: 3

/************************
  This keyword - point where fn() executed
***********************/
var newObj = {
  val: 'Hello!',
  prnVal: function() {
    console.log(this.val); // without this val - undefined
  }
};

var newObj2 = {
  val: 'Whats up?!'
};

// prnVal method get access to the newObj2 context by this
newObj2.prnVal = newObj.prnVal;

newObj.prnVal();  // Hello!
newObj2.prnVal(); // Whats up?!

// Bind this to the Global scope
var print = newObj.prnVal;
print(); // undefined, or error in strict mode

var bindPrint = newObj.prnVal.bind(newObj2);
bindPrint();  // Whats up?!


/************************
  This in new object
***********************/
var funcObj = function() {
  var _this = this;

  _this.hello = 'hello';

  _this.greet = function() {
    console.log(_this.hello);
  };

  this.delayGreeting = function() {
    setTimeout(_this.greet, 1000);
  };

};

// Bind new this scope
var greeter = new funcObj();
greeter.delayGreeting();