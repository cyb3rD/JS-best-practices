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
  return asyncMethod('Find user...');
}

function validateUser() {
  return asyncMethod('Validate user...');
}

function doSomeStuff() {
  return asyncMethod('Do some stuff...');
}

asyncMethod('Open new db connection...')
  .then(findUser)
  .then(validateUser)
  .then(doSomeStuff)
  .then(function() {
    setTimeout(function() {
      console.log('Finished');
    }, 500);
  });