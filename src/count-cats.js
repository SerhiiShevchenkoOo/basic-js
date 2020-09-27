const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  backyard.forEach(yard => {
    yard.forEach(cat => {
      if (cat == '^^') cats++
    })
  });
  return cats;
}
