exports.a = function(callback) {
	setTimeout(function() {
		callback(null,500);
	}, 500);
};

exports.b = function(callback) {
	setTimeout(function() {
		callback(null,1000);
	}, 1000);
};

exports.c = function(callback) {
	setTimeout(function() {
		callback(null,1500);
	}, 1500);
};