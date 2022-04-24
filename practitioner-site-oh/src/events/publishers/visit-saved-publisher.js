const common = require('@ohbiohealth/common')

class VisitSavedPublisher extends common.Publisher {
    subject = common.Subjects.VisitSaved
}

module.exports = VisitSavedPublisher
