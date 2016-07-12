"use strict";

function asyncMethod(message, num) {
  return new Promise(function(fullfill, reject) {
    setTimeout(function() {
      console.log(num + ' ' + message);
      fullfill(num + 1);
    }, 500);
  });
}

async function main() {
  // eliminatew the callback
  var one = await asyncMethod('Open new db connection...', 0);
  var two = await asyncMethod('Find user...', one);
  var three = await asyncMethod('Validate user...', two);
  var four = await asyncMethod('Do some stuff...', three);

  // .then(function() {
  //   setTimeout(function() {
  //     console.log('Finished');
  //   }, 500);
  // });
}

main();