// import chai from 'chai'
// import chaiAsPromised from 'chai-as-promised'
//
// chai.use(chaiAsPromised)
// global.expect = chai.expect

process.env.NODE_ENV = 'TEST'
process.env.PUBLIC_URL = ''

global.expect = require('chai').expect
// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')({
  presets: ['env']
})

//babel-cli babel-preset-envbabel-preset-stage-0 babel-register chai chai-as-promised
