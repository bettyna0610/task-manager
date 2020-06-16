const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcome = (email,name) => {
sgMail.send({
    to: email,
    from:'balazsbettina1990@gmail.com',
    subject:'Welcome',
    text:`Welcome to the app, ${name}.`
})
}

const sendGoodBy = (email,name) => {
    sgMail.send({
        to:email,
        from:'balazsbettina1990@gmail.com',
        subject:'By',
        text:`We are sorry you go, ${name}.`
    })
}

module.exports = {
    sendWelcome,
    sendGoodBy
}