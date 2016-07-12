function asyncMethod(message) {
  return new Promise(function(fullfill, reject) {
    setTimeout(function() {
      console.log(message);
      fullfill();
    }, 500);
  });
}

// asyncMethod('Open new db connection...', function() {
//   asyncMethod('Find user...', function() {
//     asyncMethod('Validate user...', function() {
//       asyncMethod('Do some stuff...', function() {});
//     });
//   });
// });

function findUser() {
  asyncMethod('Find user...')
    .then(validateUser);
}

function validateUser() {
  asyncMethod('Validate user...')
    .then(doSomeStuff);
}

function doSomeStuff() {
  asyncMethod('Do some stuff...')
    .then(function() {});
}

asyncMethod('Open new db connection...')
  .then(findUser);