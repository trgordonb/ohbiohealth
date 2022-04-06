import { User } from "../models/user";

export const addAdmin = async () => {
    const user = User.build({
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