#!/usr/bin/env node

const {message} = require('../lib/index.js')
const inquirer = require('inquirer')

console.log('daxiao hahaha')
console.log(message)

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?'
  }
])
.then(anwsers => {
  console.log(anwsers)
})
