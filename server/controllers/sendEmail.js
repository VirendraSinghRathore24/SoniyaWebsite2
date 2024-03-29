var nodemailer = require('nodemailer');

exports.sendEmail = async (req,res) => {
    try{
        const {name, email} = req.body;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'lifecoachsoniyapachauri@gmail.com',
              pass: 'uzmj pkxr frzb tabn'
            }
          });
          
          var mailOptions = {
            from: 'lifecoachsoniyapachauri@gmail.com',
            to: `${email}`,
            subject: 'Thank you for Downloading Hooponopono PDF !!!',
            text: "Dear " + name + "\n\n" + "Thank you for your interest in Hooponopono Prayer and Forgiveness PDF.\n\nYou can also follow me on Instagram for regular updates https://www.instagram.com/soniyapachauri12/ \n\nLove, \nSoniya Pachauri"
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