const { model } = require('mongoose')

const PainCategories = model('PainCategories', {
  zh_name: String,
  en_name: String,
})

module.exports = PainCategories
