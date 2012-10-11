var redis   = require('redis')
  ; 

function sayHello(callback) {
  setTimeout(function() {
    callback(null,'Hello');
  },1500)
}

function fib(n) {
  if (n < 2) {
    return 1;
  } else {
    sayHello( function(err,msg) {
      console.log('msg : ' + msg);
    })
    return fib(n - 2) + fib(n - 1);
  }
}

setInterval( function() {
  console.log('interval : ' + fib(5));
},4000);