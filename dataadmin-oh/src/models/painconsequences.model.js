const { model } = require('mongoose')

const PainConsequences = model('PainConsequences', {
  zh_name: String,
  en_name: String,
})

module.exports = PainConsequences
