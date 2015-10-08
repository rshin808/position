/**
 * This function accepts a sorted array of integers and a target value and returns the index where the target value is
 * found. Or if the target value is not found, returns where it would be if it were inserted in order.
 * @param data The sorted array of integers.
 * @param value The target value to find.
 * @returns {*} The target value index or expected index.
 */
function position(data, value) {
  if(data[0] >= value) {
    return 0;
  }
  else if(data[data.length - 1] <= value) {
    return data.length;
  }

  var index = 0;
  var i = 0;

  while(i < data.length) {
    if(data[i] < value) {
      index = i;
    }
    else {
      index++;
      break;
    }
    i++;
  }
  return index;
}