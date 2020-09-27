const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!(date instanceof Date)) {
    if (!date) {
      return 'Unable to determine the time of year!'
    }
    throw new Error()
  }
  if (date.hasOwnProperty("toString")) {
    throw Error()
  }
  try {
    if (date == undefined) return 'Unable to determine the time of year!'
    let month = date.getMonth()
    if (month < 2 || month == 11) return 'winter'
    if (month < 5) return 'spring'
    if (month < 8) return 'summer'
    else return 'autumn'
  }
  catch (err) {
    return err
  }
};
