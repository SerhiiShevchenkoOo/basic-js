const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    // ?this.depth = 1
  }
  calculateDepth(arr) {
    let depth = 1
    arr.forEach(element => {
      let i = 1;
      if (Array.isArray(element)) {
        i += this.calculateDepth(element);
      }
      depth = (depth >= i) ? depth : i;
    });
    return depth
  }

}




