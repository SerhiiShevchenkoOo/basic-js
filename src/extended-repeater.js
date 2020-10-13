const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {


  let repeatTimes = options.repeatTimes,
    separator = options.separator,
    addition = options.addition,
    additionRepeatTimes = options.additionRepeatTimes,
    additionSeparator = options.additionSeparator,
    result = []

  str = (maybeIWrong(str) +
    `${(addition === undefined) ? '' : (maybeIWrong(addition) + ' ')
      .repeat(checkValid(additionRepeatTimes))
      .trim()
      .replace(/[ ]/g, (additionSeparator === undefined) ? '|' : maybeIWrong(additionSeparator))

    }`
    // наличие addition
    + ' ')
    .repeat(checkValid(repeatTimes))//повтор str
    .trim()//убираем пробел в конце обработаной строки
    .replace(/[ ]/g, (separator === undefined) ? '+' : `${separator}`)
    .replace(/O_o/g, ' ');


  for (let char of str) {
    result.push(char)
  }
  return result.join('')

}
checkValid = (option) => (typeof (option) != 'number') ? 1 : option;
maybeIWrong = (str) => {

  if (`${str}`.includes(' ')) return `${str}`.replace(/[ ]/g, 'O_o')
  else return `${str}`
}
  // `${(addition == undefined) ?
  //   '' :
  //   (addition + ' ')
  //     .repeat(checkValid(additionRepeatTimes))
  //     .trim().
  //     replace(/[ ]/g, (additionSeparator == undefined) ? '+' : additionSeparator.normalize())
  // }`