const calculate = function(a, n){ //変更されないconst 変更できるvar
  var num = a;
  for (var i = 1; i < n; i++) {
    num *= a;
  }
  return num;
};

module.exports = calculate;
