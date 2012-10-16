/**
 * Count to a given number with DTrace probes
 */

// Requires / Constants
var dtp = require('dtrace-provider').createDTraceProvider('nodestatic'),
    n = 1000000;

// Add probes
dtp.addProbe('count-to-n-entry', 'int');
dtp.addProbe('count-to-n-return');
dtp.enable();

// Count to n
function count_to(n) {
  // Fire the 'entry' probe
  dtp.fire('count-to-n-entry', function() {
    // [ 'int' ]
    return [ n ];
  });

  // Now count
  for (var i = 0; i < n; ) {
    i++;
  }

  // Fire the 'return' probe
  dtp.fire('count-to-n-return', function() {
    return [];
  });
}

// Count to n
count_to(n);
