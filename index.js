const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())






app.post('/send', (req, res) => {
    const { name, email, phoneNumber, appointmentDate, appointmentTime, message } = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        
        auth: {
            user: 'polisettymadhupavan1@gmail.com',
            pass: 'ogzufytchmvdgdhu'
        }
    })

    const mailOptions = {
        from: 'polisettymadhupavan1@gmail.com',
        to: email,
        subject: 'New Appointment',
        html:`

        <!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>V.R Dental Care</title>
  </head>
  <body>
    <table width="600" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin: 0 auto; max-width: 600px; font-family: Arial, sans-serif;">
      <tr>
        <td style="background-color: #f8f9fa; padding: 20px;">
          <img src="https://res.cloudinary.com/da13f2ytg/image/upload/v1724573285/logo_xtf2e6.jpg" alt="V.R Dental Care" style="display: block; margin:2; width: 50px;">
        </td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; padding: 20px;">
          <h1 style="color: #007bff; font-size: 24px; margin: 0 0 20px 0;">Welcome to V.R Dental Care</h1>
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">Dear ${name},</p>
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">We hope this email finds you well. We wanted to remind you about your upcoming dental appointment scheduled for ${appointmentDate} at ${appointmentTime}.</p>
          <a href="tel:+91{{from_phoneNumber}}" style="color: #6c757d; font-size: 14px; line-height: 1.5;">content PhoneNumber:${phoneNumber}</a>
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">EmailAddress:${email}</p>
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">Message :${message}</p>

          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">Please arrive 15 minutes early to complete any necessary paperwork. If you need to reschedule or cancel your appointment, please let us know as soon as possible.</p>
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">Thank you for choosing V.R Dental Care. We look forward to seeing you soon!</p>
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">Best regards,<br>The V.R Dental Care Team</p>

        </td>
      </tr>
      <tr>
        <td style="background-color: #f8f9fa; padding: 20px; text-align: center;">
          <a href="#" style="background-color: #007bff; color: #ffffff; display: inline-block; padding: 10px 20px; text-decoration: none;">Schedule an Appointment</a>
        </td>
      </tr>
    </table>
  </body>
</html>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ` 

    
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.status(500).send('Error sending email')
        } else {
            console.log('Email sent: ' + info.response)
            res.status(200).send('Email sent successfully')
        }
    })
})










app.listen(8000, () => {
    console.log('Server is running on port 800')
})