const express = require("express");
const app = express();
const Razorpay = require("razorpay");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//database connect
//database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    //origin: "https://soniya1.netlify.app",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//routes
app.use(require("./routes/blog"));

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

const razorpay = new Razorpay({
  key_id: "rzp_live_TDH6ZUzDARLkMQ",
  key_secret: "DXDyqdXmm6VvVK1N2M86fKF3",
});

app.post("/create-order", async (req, res) => {
  const { amount, currency = "INR" } = req.body;

  const options = {
    amount: amount * 100, // in paise
    currency,
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("Order created1:", order);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("Error creating order1:", err);
  }
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
