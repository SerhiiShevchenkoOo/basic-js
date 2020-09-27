const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) return false
  return members
    .filter(name => typeof (name) == 'string')
    .map(firstLetter => firstLetter
      .split(' ')
      .join('')
      .toUpperCase()[0]
    )
    .sort()
    .join('')
};
