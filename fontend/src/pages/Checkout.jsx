import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Checkout = () => {
  let { state } = useLocation();

  console.log(state);

  let handlePayment = () => {
    axios
      .get(" http://localhost:3500/api/v1/payment/init")
      .then((data) => {
        console.log(data);
        window.location.replace(
          `https://sandbox.sslcommerz.com/EasyCheckOut/${data.data}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="font-sans bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
            Checkout
          </h2>
        </div>
        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">01</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">
                Personal Details
              </h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone number"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">02</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">
                Shopping Address
              </h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <button
              type="button"
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100"
            >
              Pay later
            </button>
            <Link
              onClick={handlePayment}
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Pay now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
