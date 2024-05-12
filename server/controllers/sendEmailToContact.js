var nodemailer = require('nodemailer');

exports.sendEmailToContact = async (req,res) => {
    try{
        const {email, message, replymessage} = req.body;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'lifecoachsoniyapachauri@gmail.com',
              pass: 'uzmj pkxr frzb tabn'
            }
          });
          
          var mailOptions = {
            from: 'lifecoachsoniyapachauri@gmail.com',
            to: email,
            subject: 'Message from Soniya Pachauri !!!',
            text: message + "\n\n" + replymessage
        };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    catch(err){
        console.log(err);
    }
}