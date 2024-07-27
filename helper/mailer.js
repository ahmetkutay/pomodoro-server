const nodemailer = require('nodemailer');

class Mailer {
    constructor(service, user, pass) {
        this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: user,
                pass: pass
            }
        });
    }

    sendMail(from, to, subject, text) {
        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Email sent: ' + info.response);
        });
    }
}

module.exports = Mailer;