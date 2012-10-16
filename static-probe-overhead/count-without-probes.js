/**
 * Count to a given number without DTrace probes
 */

var n = 1000000;

// Count to n
function count_to(n) {
  for (var i = 0; i < n; ) {
    i++;
  }
}

count_to(n);
