const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())









app.post('/send', (req, res) => {
  
    const { name, email, phoneNumber, appointmentDate, appointmentTime, message, time } = req.body

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
          <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">We hope this email finds you well. We wanted to remind you about your upcoming dental appointment scheduled for ${appointmentDate} at ${appointmentTime},${time}.</p>
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
        <p style="color: #6c757d; font-size: 14px; line-height: 1.5;">Appointments Cancel / Re Schedule an Appointment</p?
          <a href="https://v-r-dental-care.vercel.app/cancel" style="background-color: #007bff; color: #ffffff; display: inline-block; padding: 10px 20px; text-decoration: none;">Schedule an Appointment</a>
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

    //cancel appoint 

    




  


















})




//cancel appoint

app.post('/cancel', (req, res) => {

    const { name, appointmentDate, appointmentTime, message, email,time} = req.body

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
        subject: 'Appointment Cancellation',
        html: `
        


<!DOCTYPE html>
<html>
<head>
	<title>V.R Dental Care Appointment Cancellation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
	<table width="600" align="center" style="background-color: #ffffff; border: 1px solid #ddd; padding: 20px;">
		<tr>
			<td>
				<img src="https://res.cloudinary.com/da13f2ytg/image/upload/v1724573285/logo_xtf2e6.jpg" alt="V.R Dental Care Logo" style="width: 150px; height: auto;">
			</td>
		</tr>
		<tr>
			<td style="padding: 20px;">
				<h2 style="color: #2f4f7f;">Appointment Cancellation</h2>
				<p>Dear ${name},</p>
				<p>Unfortunately, your appointment with Dr.Preven Kumar scheduled for:</p>
				<p>
					<strong>Date:</strong>${appointmentDate}<br>
					<strong>Time:</strong> ${appointmentTime}${time}<br>
					<strong>Message:</strong> ${message}
				</p>
				<p>has been canceled.</p>
				<p>We apologize for any inconvenience this may cause and would be happy to reschedule your appointment at your earliest convenience.</p>
				<p>Please contact us at [Phone Number] or [Email Address] to arrange a new appointment.</p>
				<p>Thank you for choosing V.R Dental Care.</p>
				<p>Best regards,</p>
				<p>V.R Dental Care Team</p>
			</td>
		</tr>
		<tr>
			<td style="background-color: #f4f4f4; padding: 10px; text-align: center;">
				<p>
					<a href="tel:[Phone Number]" style="text-decoration: none; color: #2f4f7f;">Call Us: [Phone Number]</a> |
					<a href="mailto:[Email Address]" style="text-decoration: none; color: #2f4f7f;">Email Us: [Email Address]</a>
				</p>
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


// eadit appointment

app.post('/edit', (req, res) => {

    const { name, email, phoneNumber, appointmentDate, appointmentTime, message, time, address} = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host:'smtp.gmail.com',
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
        subject: 'Appointment Updated',
        html:`
        
       <!DOCTYPE html>
<html>
<head>
	<title>V.R Dental Care Appointment Update</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
	<table width="600" align="center" style="background-color: #ffffff; border: 1px solid #ddd; padding: 20px;">
		<tr>
			<td>
				<img src="https://res.cloudinary.com/da13f2ytg/image/upload/v1724573285/logo_xtf2e6.jpg" alt="V.R Dental Care Logo" style="width: 150px; height: auto;">
			</td>
		</tr>
		<tr>
			<td style="padding: 20px;">
				<h2 style="color: #2f4f7f;">Appointment Update</h2>
				<p>Dear ${name},</p>
				<p>We would like to inform you that your appointment with V.R dental care Team has been Update to:</p>
				<p>
					<strong>Date:</strong>${appointmentDate}<br>
					<strong>Time:</strong>${appointmentTime}${time}<br>
					<strong>Message:</strong>${message}
          <strong>Phone Number:</strong>${phoneNumber}
          <br>
          <strong>Address:</strong>${address}
				</p>

				<p>Please confirm your availability by replying to this email or calling  .</p>
				<p>Thank you for choosing V.R Dental Care.</p>
				<p>Best regards,</p>
				<p>V.R Dental Care Team</p>
			</td>
		</tr>
		<tr>
			<td style="background-color: #f4f4f4; padding: 10px; text-align: center;">
				<p>
					<a href="tel:918790349798" style="text-decoration: none; color: #2f4f7f;">Call Us:8790349798</a> |
					<a href="mailto:praveenmedidhi@gmail.com" style="text-decoration: none; color: #2f4f7f;">Email Us: [praveenmedidhi@gmail.com]</a>
				</p>
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
