const common = require('@ohbiohealth/common')

class DiagnosisSavedPublisher extends common.Publisher {
    subject = common.Subjects.DiagnosisSaved
}

module.exports = DiagnosisSavedPublisher
