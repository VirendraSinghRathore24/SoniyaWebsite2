import React, { useEffect, useState } from "react";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  IndianRupee,
  Users,
  CheckCircle,
} from "lucide-react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";

const CustomersDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const contactCollectionRef = collection(db, "bookcontacts");
  const getContactData = async () => {
    try {
      // We create a query to order by the date field descending (newest payments first)
      const q = query(contactCollectionRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);

      // Map the documents into a clean array of objects
      const customersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return customersList;
    } catch (err) {
      console.error("Error fetching payment data: ", err);
      return [];
    }
  };
  // Filter customers based on Search Term (Name or Email)
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate Metrics
  const totalRevenue = filteredCustomers.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const totalItemsSold = filteredCustomers.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  const formatDate = (isoString) => {
    if (!isoString) return "N/A";

    const date = new Date(isoString);

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getContactData();
      setCustomers(data);
      setLoading(false);
    };

    loadData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const authStatus = localStorage.getItem("auth");
    if (authStatus !== "Logged In") {
      window.location.href = "/admin/login"; // Redirect to login page if not logged in
    }
  }, []);

  if (loading) {
    return (
      <div className="text-center p-10 text-gray-500">Loading payments...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 sm:p-10 antialiased font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Received Payments
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Track and manage details of customers who have successfully
              completed transactions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
            />
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Total Customers Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Paid Customers
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {filteredCustomers.length}
              </span>
            </div>
          </div>

          {/* Total Quantity Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Total Quantity Sold
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {totalItemsSold} Units
              </span>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl text-green-600">
              <IndianRupee className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Revenue Collected
              </span>
              <span className="text-2xl font-bold text-gray-900">
                ₹{totalRevenue}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Table view / Mobile Card view */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <th className="px-6 py-4">Customer Details</th>
                  <th className="px-6 py-4">Contact Info</th>
                  <th className="px-6 py-4">Shipping Address</th>
                  <th className="px-6 py-4 text-center">Qty</th>
                  <th className="px-6 py-4 text-right">Amount Paid</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="hover:bg-gray-50/50 transition duration-150 text-sm"
                    >
                      {/* Name & Date */}
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                            {customer.name.charAt(0)}
                          </div>
                          <div>
                            <span className="block font-semibold text-gray-900">
                              {customer.name}
                            </span>
                            <span className="block text-xs text-gray-400">
                              {formatDate(customer.date)}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="space-y-1">
                          <span className="flex items-center gap-1.5 text-gray-600">
                            <Mail className="h-3.5 w-3.5 text-gray-400" />{" "}
                            {customer.email}
                          </span>
                          <span className="flex items-center gap-1.5 text-gray-600">
                            <Phone className="h-3.5 w-3.5 text-gray-400" />{" "}
                            {customer.mobile}
                          </span>
                        </div>
                      </td>

                      {/* Address */}
                      <td className="px-6 py-5 max-w-xs">
                        <span className="text-gray-600 line-clamp-2 leading-relaxed">
                          {customer.address} - {customer.pincode}
                        </span>
                      </td>

                      {/* Quantity */}
                      <td className="px-6 py-5 text-center font-medium text-gray-900 whitespace-nowrap">
                        {customer.quantity}
                      </td>

                      {/* Amount Paid */}
                      <td className="px-6 py-5 text-right font-bold text-gray-900 whitespace-nowrap">
                        ₹{customer.amount}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                          <CheckCircle className="h-3 w-3" /> Paid
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-400">
                      No matching paid customers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View (renders on smaller screens) */}
          <div className="block lg:hidden divide-y divide-gray-100">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <div key={customer.id} className="p-6 space-y-4">
                  {/* Top Header Row */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {customer.name}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {formatDate(customer.date)}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                      <CheckCircle className="h-3 w-3" /> Paid
                    </span>
                  </div>

                  {/* Contact Meta */}
                  <div className="space-y-2 pt-2 border-t border-gray-50 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                      <span>{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                      <span>{customer.mobile}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        {customer.address} - {customer.pincode}
                      </span>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="flex justify-between items-center bg-gray-50/50 p-3 rounded-xl text-sm">
                    <span className="text-gray-500">
                      Qty:{" "}
                      <strong className="text-gray-800">
                        {customer.quantity}
                      </strong>
                    </span>
                    <span className="font-extrabold text-gray-900">
                      ₹{customer.amount}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400 text-sm">
                No matching paid customers found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersDashboard;
