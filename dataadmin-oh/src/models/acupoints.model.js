const { model } = require('mongoose')

const AcuPoints = model('AcuPoints', {
  zh_name: String,
  en_name: String,
})

module.exports = AcuPoints
