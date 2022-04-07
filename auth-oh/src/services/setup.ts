import { User } from "../models/user";
import axios from 'axios'

export const addAdmin = async () => {
    let _id = ''
    const IdServerResponse = await axios.post(process.env.IDENTITY_SERVICE_URL!, {
        groupId: 'oh'
    })
    if (IdServerResponse.data && IdServerResponse.data.sequence) {
        _id = IdServerResponse.data.sequence
    }
    const user = User.build({
        _id: _id,
        email: 'admin@ohbiohealth.com',
        password: process.env.ADMIN_PASSWORD || 'admin',
        groupId: 'oh',
        usertype: 'admin',
        hasProvidedInfo: true,
        hasFinishedSurvey: true,
        hasRegDevice: false
    });
    await user.save();
}