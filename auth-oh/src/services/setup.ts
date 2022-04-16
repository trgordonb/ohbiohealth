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
        password: process.env.ADMIN_PASSWORD || 'password123',
        groupId: 'oh',
        usertype: 'admin',
        hasVerifiedEmail: true,
        hasProvidedInfo: true,
        hasFinishedSurvey: true,
        hasRegDevice: false
    });
    console.log(user)
    await user.save();
}