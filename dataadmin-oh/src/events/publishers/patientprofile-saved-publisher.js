const common = require('@ohbiohealth/common')

class PatientProfileSavedPublisher extends common.Publisher {
    subject = common.Subjects.PatientProfileSaved
}

module.exports = PatientProfileSavedPublisher
