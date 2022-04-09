const { model } = require('mongoose')

const PainLocations = model('PainLocations', {
  zh_name: String,
  en_name: String,
})

module.exports = PainLocations
