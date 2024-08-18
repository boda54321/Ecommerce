import nodemailer from "nodemailer"



const sendEmail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.myaccount,
            pass:process.env.passaccount
        }
    })
    const mailOptions = await transporter.sendMail({
        from: `"abdo"<${process.env.sendemail}>`,
        to: to,
        subject: subject,
        html: html
    })
    
        return true
   
}
export default sendEmail