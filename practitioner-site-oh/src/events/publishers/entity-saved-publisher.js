const common = require('@ohbiohealth/common')

class EntitySavedPublisher extends common.Publisher {
    subject = common.Subjects.EntitySaved
}

module.exports = EntitySavedPublisher
