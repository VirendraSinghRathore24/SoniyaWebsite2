import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function BookSalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [quantity, setQuantity] = useState(1);

  const contactCollectionRef = collection(db, "bookcontacts");
  const addContactData = async (response) => {
    try {
      await addDoc(contactCollectionRef, {
        name: shippingInfo.name,
        mobile: shippingInfo.mobile,
        email: shippingInfo.email,
        address: shippingInfo.address,
        quantity: quantity,
        transaction_id: response.razorpay_payment_id,
        amount: book.price * quantity,
        date: new Date().toISOString(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [bookPrice, setBookPrice] = useState(1);

  const navigate = useNavigate();
  // Dummy Book Details
  const book = {
    title: "HO'OPONOPONO: The Art of Forgiveness",
    author: "Soniya Pachauri",
    price: bookPrice, // In INR
    image: "../../images/book.webp",
    description:
      "The Healing Power of Forgiveness, Inner Peace & Self - Transformation with Forgiveness - A Prayer Guide, Release the past. Heal your heart, Transform your life.",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    launchRazorpay();
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const launchRazorpay = async () => {
    //setLoading(true);
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    //setLoading(false);
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Create order on backend
    const order = await axios.post(baseUrl + "/create-order", {
      amount: bookPrice, // ₹499
    });

    const options = {
      key: process.env.RAZORPAY_KEY, // from Razorpay dashboard
      amount: order.data.amount,
      currency: "INR",
      name: "Soniya Pachauri",
      description: "Ho'oponopono: The Art of Forgiveness",
      image: "/logo.png",
      order_id: order.data.id,
      handler: function (response) {
        addContactData(response);
        sendEmailConfirmation(response);

        // Navigate to success page with order details
        navigate("/paymentsuccess", {
          state: {
            name: shippingInfo.name,
            mobile: shippingInfo.mobile,
            email: shippingInfo.email,
            address: shippingInfo.address,
            transactionId: response.razorpay_payment_id,
            date: new Date().toISOString(),
            amount: book.price * quantity,
          },
        });
      },
      prefill: {
        name: shippingInfo.name,
        email: shippingInfo.email,
        //contact: "8095528424",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const sendEmailConfirmation = async (response) => {
    try {
      await axios.post(baseUrl + "/sendbookemailconfirmation", {
        name: shippingInfo.name,
        mobile: shippingInfo.mobile,
        email: shippingInfo.email,
        address: shippingInfo.address,
        transactionId: response.razorpay_payment_id,
        date: new Date().toISOString(),
        amount: book.price * quantity,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setBookPrice(1 * quantity); // Update the price based on quantity
  }, [quantity]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 antialiased">
      {/* Product Card */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Book Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[400px] relative">
          <img
            src={book.image}
            alt={book.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Best Seller
            </span>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 leading-tight">
              {book.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">By {book.author}</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              {book.description}
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                {/* Pricing Info (Left Aligned) */}
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ₹{book.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ₹{book.price * 2}
                  </span>
                  <span className="text-sm font-semibold text-green-600 ml-2">
                    (50% OFF)
                  </span>
                </div>

                {/* Quantity Dropdown (Right Aligned) */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="quantity"
                    className="text-sm font-medium text-gray-600"
                  >
                    Qty:
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={quantity} // Assumes a 'quantity' state variable exists in your component
                    onChange={(e) => setQuantity(Number(e.target.value))} // Assumes a 'setQuantity' state handler exists
                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 cursor-pointer outline-none transition"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Shipping Details Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Shipping Information
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  maxLength={10}
                  minLength={10}
                  pattern="[0-9]{10}"
                  value={shippingInfo.mobile}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  required
                  rows="3"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  placeholder="Complete shipping address with pincode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                />
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition shadow-md"
                >
                  Proceed to Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
