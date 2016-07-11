/*************************
// Linting
*************************/
// Linting (semicolons, curly braces)
// read the specification!
// paste { at the same line
function service() {
    var get = function() {
        console.log('get');
    };

    var set = function() {
      console.log('set');
    };

    return {
      get: get,
      set: set
    };
}

/*************************
// Equality
*************************/
var x = 10; // primitive
var y = '10'; // primitive

if (x === y) { // == convert to the same type
  console.log('Equals');
} else {
  console.log('Not equals');
}

var z;
// check of existing
if(typeof z !== undefined) {
  console.log('Exist');
} else {
  console.log('Not exist');
}

/*************************
// Variables
*************************/

// Hoisting - moving to the top ONLY var
// all variables become undefined!
console.log(myVar); // undefined
var myVar = 700;


// Hoisting - 2nd example
var myVar2 = 12;

function func() {
  myVar2 = 25; // in func() scope

  var myVar2;
}

console.log(myVar2); // 10 - from the Global Scope

// All var declarations go to the top of your scope!

/*************************
// Functions
*************************/

// FuncExpression(); // Error!
// FuncDeclaration();

// var FuncExpression = function() {
//   console.log('Expression!');
// };

// function FuncDeclaration() {
//   console.log('Declaration');
// }

// variables first!
var myVar = 'String';
// functions next
function print(argument) {
  // variables first
  var x = '';
  //functions nexe
  function log() {
    // some stuff..
  }
  // run code
  console.log(argument);
}

// run code
print('String');
