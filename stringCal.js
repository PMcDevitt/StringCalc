'use strict'
class StringCalculator {
  add(input) {
    return input.length === 0 ? 0 : getNumArray(input).map(checkNum).reduce(getSum, 0)
  }
}

const getNumArray = (input) => {
  let del = ','
  if(input.startsWith('//')){
    del = getDelimiter(input)
    input = getInput(input)
  }
  return input.replace(/(\r\n|\n|\r)/gm,",").split(del)
}

const getDelimiter = (input) =>{
  return input.substring(2, input.indexOf('\n')).replace('[', '').replace(']', '')
}

const getInput = (input) => {
  return input.substring(input.indexOf('\n')+1, input.length)
}

const getSum = (total, num) => {
  return total + num
}

const checkNum = (num) => {
  if (num < 0 || num === '') throw "Invalid number!"
  if (num > 1000) num = 0
  return Number(num)
}

module.exports = StringCalculator
