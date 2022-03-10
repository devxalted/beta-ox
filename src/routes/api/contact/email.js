import 'dotenv/config'


export const post = async ({request}) => {
    const body = await request.json()
    let {name, from, msgBody} = body
    const toEmail = process.env.TO_EMAIL

    try {

        return {
            status: 200,
            body: {
                name, from, msgBody, toEmail
            }
        }


        } catch (err) {
          console.error(err.message)
          return {
              status: 500,
              body: {
                  msg: "Server Error."
              }
          }
        }
}
