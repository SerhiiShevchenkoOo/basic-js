const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],

  getLength() {
    return this.str.length
  },

  addLink(value) {
    if (value === undefined) { this.str.push('( )') }
    else {
      this.str.push(`( ${value} )`)
    };
    return this;
  },

  removeLink(position) {
    if (position === undefined || position <= 0 || position > this.str.length || typeof position !== 'number') {
      this.str = []
      throw new Error();
    }
    else {
      this.str.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let newStr = this.str
    this.str = []
    return newStr.join('~~')
  }
};

module.exports = chainMaker;
