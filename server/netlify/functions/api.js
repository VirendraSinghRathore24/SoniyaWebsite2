const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const Razorpay = require("razorpay");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---
const razorpay = new Razorpay({
  key_id: "rzp_live_TDH6ZUzDARLkMQ",
  key_secret: "DXDyqdXmm6VvVK1N2M86fKF3",
});

router.post("/create-order", async (req, res) => {
  const { amount, currency = "INR" } = req.body;

  const options = {
    amount: amount * 100, // in paise
    currency,
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("Error creating order1:", err);
  }
});

router.post("/sendbookemailconfirmation", async (req, res) => {
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
});

// 3. Mount the router
// This base path must match the "to" field in your netlify.toml redirects
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
