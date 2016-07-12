"use strict";

let main = (() => {
  var _ref = _asyncToGenerator(function* () {
    // eliminatew the callback
    var one = yield asyncMethod('Open new db connection...', 0);
    var two = yield asyncMethod('Find user...', one);
    var three = yield asyncMethod('Validate user...', two);
    var four = yield asyncMethod('Do some stuff...', three);

    // .then(function() {
    //   setTimeout(function() {
    //     console.log('Finished');
    //   }, 500);
    // });
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function asyncMethod(message, num) {
  return new Promise(function (fullfill, reject) {
    setTimeout(function () {
      console.log(num + ' ' + message);
      fullfill(num + 1);
    }, 500);
  });
}

main();
