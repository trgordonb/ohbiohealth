import { User } from "../models/user"

export const adminExists = () => {
    return new Promise(async (resolve, reject) => {
        const existingAdmin = await User.findOne({usertype: "admin"});
        if (existingAdmin) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}