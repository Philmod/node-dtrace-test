exports.a = function aa(callback) {
	setTimeout(function() {
		console.log('a here');
		callback(null,500);
	}, 500);
};

exports.b = function bb(callback) {
	setTimeout(function() {
		exports.a(function(err,res) {
			callback(null,750+res);
		});
	}, 750);
};

exports.c = function cc(callback) {
	setTimeout(function() {
		callback(null,1500);
	}, 1500);
};