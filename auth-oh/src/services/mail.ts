import nodemailer from 'nodemailer'
import { UserDoc } from '../models/user'

export const sendEmail = (message: any) => {
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_ACCOUNT,
                pass: process.env.SMTP_PASSWORD,
            },
        })
    
        transporter.sendMail(message, function(err: any, info: any) {
            if (err) {
                rej(err)
            } else {
                res(info)
            }
        })
    })
}

export const sendConfirmationEmail = (user: UserDoc) => {
    const message = {
      from: process.env.SMTP_ACCOUNT,
      to: user.email,
      subject: 'OHBiohealth - Activate Account',
      html: `
        <h3> Hello user </h3>
        <p>Thank you for registering into our portal. Much Appreciated! Just one last step is laying ahead of you...</p>
        <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/activate/user/${user.verificationHash}">Link to activate account</a></p>
        <p>Cheers</p>
        <p>OHBiohealth</p>
      `
    }
  
    return sendEmail(message);
}

export const sendResetPasswordEmail = (user: UserDoc) => {
    const message = {
        from: process.env.SMTP_ACCOUNT,
        to: user.email,
        subject: 'OHBiohealth - Reset Password',
        html: `
          <h3> Hello user </h3>
          <p>To reset password to our portal please follow this link: <a target="_" href="${process.env.DOMAIN}/reset/user/${user.verificationHash}">Link to reset password</a></p>
          <p>Cheers</p>
          <p>OHBiohealth</p>
        `
      }
    
      return sendEmail(message);
}
  