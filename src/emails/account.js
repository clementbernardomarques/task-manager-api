const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "clement.bernardo@auxilia-tech.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "clement.bernardo@auxilia-tech.com",
        subject: `Goodbye ${name} :(`,
        text: `Your account has been sucessfully removed, please tell us why you decided to leave us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}