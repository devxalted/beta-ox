import 'dotenv/config'

let accountSid = process.env.TWILIO_ACCOUNT_SID
let authToken = process.env.TWILIO_AUTH_TOKEN
import twilio from 'twilio'

let helper = twilio(accountSid, authToken)

export const post = async ({request}) => {

    let body = await request.json()
    let {name, from, msgBody} = body
    let to = process.env.TO_PHONE_NUMBER_PROD
    let twilioNumber = process.env.TWILIO_NUMBER

    let sendBody = `
    From: +1${from}:
    Name: ${name}
    Msg: ${msgBody}
    `

    let msgSent;

    try {

        await helper.messages.create({body: sendBody, from: twilioNumber, to})
            .then(msg => (msg) && (msgSent = true))

        if (msgSent) {
            return {
                status: 200,
                body: {
                    msg: 'Sent successfully.'
                }
            }
        } else {
            {
                return {
                    status: 200,
                    body: {
                        msg: 'Sent failed to send.'
                    }
                }
            }
        }


    } catch (err) {
        console.error(err.message)
        return {
            status: 500,
            body: {
                msg: 'Server Error.'
            }
        }
    }

}
