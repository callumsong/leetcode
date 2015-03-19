var compareVersion = function(a, b) {
  var aArray = a.split('.');
  var bArray = b.split('.');
  if (aArray.length > bArray.length){
    for (var i = 0; i < (aArray.length - bArray.length); i ++) {
      bArray.push(0);
    }
  } else if (bArray.length > aArray.length){
    for (var i = 0; i < (bArray.length - aArray.length); i++){
      aArray.push(0);
    }
  }
  for (var i =0; i < aArray.length; i ++) {
    var diff = aArray[i] - bArray[i];
    if (diff > 0) return 1;
    if (diff < 0) return -1;
  }
  return 0;
};