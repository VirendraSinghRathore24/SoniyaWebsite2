import React from "react";
import {
  CheckCircle,
  Calendar,
  Hash,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const paymentData = location.state;
  if (!paymentData) {
    return <Navigate to="/" replace />;
  }

  // Destructure the properties from the state securely
  const { name, mobile, email, address, transactionId, date, amount } =
    paymentData;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 antialiased">
      {/* Success Card Wrapper */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
        {/* Animated Green Header Section */}
        <div className="bg-gradient-to-b from-green-50 to-white pt-8 pb-6 flex flex-col items-center border-b border-gray-50">
          <div className="relative mb-4">
            {/* Soft pulsing green ring background */}
            <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-100 animate-ping opacity-75"></span>
            <CheckCircle className="relative h-16 w-16 text-green-500 bg-white rounded-full" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Thank you for your payment
          </p>

          <div className="mt-4 text-3xl font-extrabold text-gray-900">
            ₹
            {amount
              ? amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })
              : "0.00"}
          </div>
        </div>

        {/* Transaction & Shipping Details */}
        <div className="px-8 py-6 space-y-6">
          {/* Section 1: Payment Metadata */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Payment Details
            </h3>

            <div className="space-y-3">
              {/* Transaction ID */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <Hash className="h-4 w-4 text-gray-400" /> Transaction ID
                </span>
                <span className="font-mono font-medium text-gray-800">
                  {transactionId || "N/A"}
                </span>
              </div>

              {/* Date */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" /> Date & Time
                </span>
                <span className="font-medium text-gray-800">
                  {date || "N/A"}
                </span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Delivery & Customer Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Delivery Details
            </h3>

            <div className="space-y-3 text-sm">
              {/* Name */}
              {name && (
                <div className="flex items-start gap-3">
                  <User className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-400">
                      Customer Name
                    </span>
                    <span className="font-medium text-gray-800">{name}</span>
                  </div>
                </div>
              )}

              {/* Mobile */}
              {mobile && (
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-400">
                      Contact Number
                    </span>
                    <span className="font-medium text-gray-800">{mobile}</span>
                  </div>
                </div>
              )}

              {/* Email */}
              {email && (
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-400">
                      Email Address
                    </span>
                    <span className="font-medium text-gray-800">{email}</span>
                  </div>
                </div>
              )}

              {/* Address */}
              {address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-400">
                      Shipping Address
                    </span>
                    <span className="font-medium text-gray-800 leading-relaxed">
                      {address}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Email Confirmation Toast */}
          {email && (
            <div className="bg-green-50/50 border border-green-100 rounded-xl p-3 text-xs text-green-700 text-center mt-4">
              A receipt and order details have been sent to <br />
              <strong className="text-green-800">{email}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Footer Support Prompt */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        Having trouble?{" "}
        <a
          href="/support"
          className="text-blue-500 hover:underline font-medium"
        >
          Contact Support
        </a>
      </p>
    </div>
  );
};

export default PaymentSuccess;
