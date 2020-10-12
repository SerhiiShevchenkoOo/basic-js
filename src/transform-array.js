const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //--discard-next
  //--discard-prev
  //--double-next
  //--double-prev
  let result = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (result.length !== 0 && arr[i - 2] !== '--discard-next') result.pop();
        break;
      case '--double-next':
        if (i < arr.length - 1) result.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') result.push(arr[i - 1])
        break;
      default:
        result.push(arr[i])
        break;
    }
  }
  return result
}
//     if (arr[i] == '--discard-next') result.splice(i, 2)
//   if (arr[i] == '--discard-prev') result.splice(i - 1, 2)
//  if (arr[i] == '--double-next') result.splice(i, 1, arr[i + 1])
// if (arr[i] == '--double-prev') result.splice(i, 1, arr[i - 1])


