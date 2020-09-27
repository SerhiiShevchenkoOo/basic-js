const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const sample = parseFloat(sampleActivity)
  if ((isNaN(sample) || sample <= 0 || sample > HALF_LIFE_PERIOD || sample !== Math.round(sample))) return false;
  let years = Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));
  return years;
};

