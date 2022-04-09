const { model } = require('mongoose')

const PainCauses = model('PainCauses', {
  zh_name: String,
  en_name: String,
})

module.exports = PainCauses
