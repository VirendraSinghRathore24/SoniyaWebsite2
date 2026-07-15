import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import {
  Star,
  Users,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function BookSalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    pincode: "",
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
        pincode: shippingInfo.pincode,
        quantity: quantity,
        transaction_id: response.razorpay_payment_id,
        amount: bookPrice,
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
            amount: bookPrice,
          },
        });
      },
      prefill: {
        name: shippingInfo.name,
        email: shippingInfo.email,
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

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 antialiased">
      {/* Product Card */}
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Left Column: Book Cover Image */}
        <div className="w-full md:w-1/2 h-80 md:h-auto min-h-[450px] relative">
          <img
            src={book.image}
            alt={book.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Detailed Content Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Best Seller/Guide Tag */}
            <div className="inline-flex items-center gap-1.5 bg-[#C58B3A]/10 text-[#A66E28] px-3.5 py-1 rounded-lg font-bold text-xs uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-[#A66E28] stroke-none" />
              #1 Emotional Healing Guide
            </div>

            {/* Book Title & Author */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-tight">
                {book.title}
              </h1>
              <p className="text-sm font-medium text-gray-500 mt-1">
                By{" "}
                <span className="text-[#A66E28] font-semibold">
                  {book.author}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {book.description}
            </p>

            {/* "What You'll Learn" Section */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#A66E28] text-lg">✨</span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  What You'll Learn
                </h3>
                <div className="h-[1px] bg-gray-100 flex-grow ml-2" />
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A66E28] fill-[#A66E28]/10 shrink-0" />
                  <span>Heal emotional pain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A66E28] fill-[#A66E28]/10 shrink-0" />
                  <span>Practice forgiveness prayers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A66E28] fill-[#A66E28]/10 shrink-0" />
                  <span>Release past memories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A66E28] fill-[#A66E28]/10 shrink-0" />
                  <span>Build self-love & inner peace</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A66E28] fill-[#A66E28]/10 shrink-0" />
                  <span>Improve relationships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A66E28] fill-[#A66E28]/10 shrink-0" />
                  <span>Daily exercises & affirmations</span>
                </div>
              </div>
            </div>

            {/* Trust Banner (4.9 Rating & Total Readers) */}
            <div className="grid grid-cols-2 divide-x divide-orange-100 bg-amber-50/50 border border-amber-100/50 rounded-xl py-2 px-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-800">
                <Star className="h-4 w-4 text-[#A66E28] fill-[#A66E28]" />
                <span>4.9/5 Reader Experience</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-800">
                <Users className="h-4 w-4 text-[#A66E28]" />
                <span>Trusted by 1000+ Readers</span>
              </div>
            </div>
          </div>

          {/* Pricing, Quantity Selector & Action CTA */}
          <div className="mt-6 pt-4 border-t border-gray-50 space-y-4">
            <div className="flex items-center justify-between">
              {/* Discounted Pricing Block */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-gray-950">
                  ₹{book.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{book.price * 2}
                </span>
                <span className="text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  (50% OFF)
                </span>
              </div>

              {/* Micro Quantity Dropdown */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-gray-500">
                  Qty:
                </span>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="bg-gray-50 border border-gray-200 text-gray-800 font-semibold text-xs rounded-lg py-1.5 px-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Core Action Call-to-Action */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#0055FE] hover:bg-[#0042D1] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-200 active:scale-98 transition duration-150 text-sm tracking-wide text-center"
            >
              Buy Now
            </button>

            {/* Three Trust Badges Footer */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] sm:text-xs text-gray-500 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="h-5 w-5 text-[#A66E28]" />
                <span className="font-semibold leading-tight text-gray-800">
                  Pan India Delivery
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-gray-100">
                <ShieldCheck className="h-5 w-5 text-[#A66E28]" />
                <span className="font-semibold leading-tight text-gray-800">
                  100% Secure Payment
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Award className="h-5 w-5 text-[#A66E28]" />
                <span className="font-semibold leading-tight text-gray-800">
                  Premium Quality Content
                </span>
              </div>
            </div>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pin Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="pincode"
                  maxLength={6}
                  minLength={6}
                  pattern="[0-9]{10}"
                  value={shippingInfo.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter pincode"
                  className="w-5/12 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
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
