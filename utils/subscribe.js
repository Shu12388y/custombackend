import nodemailer from "nodemailer"


const  transport = nodemailer.createTransport({
  service:"gmail",
  secure:true,
  port:465,
  auth:{
    user:"letsresources@gmail.com",
    pass:"fxqiyubzaqfqawps"
  }
});


export async function Subscribemail(mail) {
  const info = await transport.sendMail({
    from: '"lets resources 👻" <letsresources@gmail.com>', // sender address
    to: mail, // list of receivers
    subject: "Thanks from Subscribing", // Subject line
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #dddddd;
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            max-width: 100px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #666666;
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #999999;
        }
        .button {
            background-color: #28a745;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://utfs.io/f/106a48bc-8e1d-4128-8198-e7ed159aae02-5t6ga5.png" alt="Company Logo">
        </div>
        <div class="content">
            <h1>Thank You for Subscribing!</h1>
            <p>We're excited to have you on board. You'll be the first to know about our latest updates and exclusive offers.</p>
            <p>To get started, click the button below:</p>
            <a href="https://letsresource.in" class="button">Visit Our Website</a>
        </div>
        <div class="footer">
            <p>If you have any questions, feel free to <a href="mailto:support@yourcompany.com">contact us</a>.</p>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
  });
  
}