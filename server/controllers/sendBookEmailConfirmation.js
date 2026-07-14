var nodemailer = require("nodemailer");

exports.sendBookEmailConfirmation = async (req, res) => {
  try {
    const { name, email, transactionId, bookName, address, amount } = req.body;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lifecoachsoniyapachauri@gmail.com",
        pass: "uzmj pkxr frzb tabn",
      },
    });

    var mailOptions = {
      from: "lifecoachsoniyapachauri@gmail.com",
      to: `${email}`,
      subject: "Order Confirmation - Thank you for your order",
      text:
        "Dear " +
        name +
        ",\n\n" +
        "Thank you for your order! 🎉\n\n" +
        "Your book order has been placed successfully.\n\n" +
        "📦 Order Details\n" +
        "--------------------------------\n" +
        "Transaction ID : " +
        transactionId +
        "\n" +
        "Book           : " +
        bookName +
        "\n" +
        "Amount Paid    : ₹" +
        amount +
        "\n" +
        "\n" +
        "Address       : " +
        address +
        "Payment Status : Successful\n\n" +
        "We have received your payment successfully. Your order is now being processed, and you'll receive another notification once it has been shipped.\n\n" +
        "You can also follow me on Instagram for updates and new book releases:\n" +
        "https://www.instagram.com/soniyapachauri12/\n\n" +
        "Thank you for your support and happy reading! ❤️\n\n" +
        "Warm Regards,\n" +
        "Soniya Pachauri",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
