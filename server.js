var redis   = require('redis')
  , utils   = require('./utils')
  ;

var connectionRedis = redis.createClient();

var tot = 40
  , nb  = 0;
connectionRedis.on('ready', function(err) {
  if (err) console.log('ERROR redis ready : ' + err);
  else { // ready
    for (var i=0; i<=tot; i++) {
      (function(e) {
        var r = fib(e);
        connectionRedis.set('fib:'+e, r, function(err,res) {
          if (err) console.error('error : ' + err);
          else console.log('res redis fib : ' + res);
          nb++;
          if (nb == tot) console.log('Fib into Redis: finished');
        });
      })(i);
    }
  }
});
connectionRedis.on("error", function (err) {
  console.log("RedisClient Error : " + err);
}); 

var fib = function fibb(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

setInterval( function() {
  utils.a(function(err,res) {
    if (err) console.error('error : ' + err);
  });
  utils.b(function(err,res) {
    if (err) console.error('error : ' + err);
  });
  utils.c(function(err,res) {
    if (err) console.error('error : ' + err);
  });
},2000);