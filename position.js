/**
 * Created by Reed on 9/22/2015.
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
};

var testData = [1, 3, 5, 6];
console.log(position(testData, 5));
console.log(position(testData, 2));
console.log(position(testData, 7));
console.log(position(testData, 0));

var testData2 = [1, 2, 3, 4, 5, 6];
console.log(position(testData2, 5));
console.log(position(testData2, 2));
console.log(position(testData2, 7));
console.log(position(testData2, 0));