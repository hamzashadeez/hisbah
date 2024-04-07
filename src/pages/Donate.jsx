import React, { useState } from "react";
import logo from "../assets/hisbah.png";
import { PaystackButton } from "react-paystack"; 
import { Link } from "react-router-dom";

const Button = ({ amountToPay, amount, setAmount }) => {
  return (
    <button
      onClick={() => setAmount(amountToPay)}
      className={`px-3 h-12 rounded-md  ${
        amountToPay === amount
          ? "bg-teal-800 text-white"
          : "text-gray-600 bg-gray-100"
      } shadow-md font-semibold  text-lg`}
    >
      {amountToPay}
    </button>
  );
};

function Donate() {
  const [amount, setAmount] = useState(500);
  const btns = [500, 1000, 2500, 5000];

  const publicKey = "pk_test_de599ceb8ff6558dbe1f1ce793cb4551827bcd08"; // Replace with your Paystack public key

  const config = {
    reference: (new Date()).getTime().toString(), // Unique reference for the transaction
    email: "user@example.com", // Replace with user's email (optional)
    amount: amount * 100, // Convert amount to kobo (Paystack uses kobo for NGN)
    currency: "NGN",
    publicKey,
  };

  // Function to handle successful payment (replace with your logic)
  const handleSuccess = (reference) => {
    console.log("Payment Successful:", reference);
    // Show a thank you message, send confirmation email, etc.
  };

  // Function to handle payment errors (replace with your logic)
  const handleError = (error) => {
    console.error("Payment Error:", error);
    // Display an error message to the user
  };


  return (
    <div className='flex-1 flex-col min-h-screen bg-teal-50 flex items-center justify-center p-6'>
          <div className="flex w-full md:w-1/3 flex-col space-y-3 lg:w-1/4 items-end justify-end mb-4">
            <Link to={"/"}>Back</Link>
          </div>
          
          <img src={logo} alt='Logo' className='w-20 mb-4' />

      <main className='w-full md:w-1/3 flex-col space-y-3 lg:w-1/4 shadow-md rounded-md bg-white p-6 '>
        <h4 className='text-justify text-teal-950 font-semibold text-lg'>
          Donate in the path of Allah (S.W.T), May Allah bless your wealth{" "}
        </h4>

        <div className='flex flex-row  items-center justify-between'>
          {btns.map((btn, i) => (
            <Button
              key={i}
              setAmount={setAmount}
              amountToPay={btn}
              amount={amount}
            />
          ))}
        </div>
        <p className='text-center text-black font-semibold'>OR</p>

        <div>
          <label className='font-semibold' htmlFor='amount'>
            Enter Amount To Donate
          </label>
          <input
            type="number"
            id="amount"
            className="w-full rounded-lg border-[3px] mt-2 border-gray-200 p-4 pe-12 text-sm"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <PaystackButton
          text="Donate Now"
          className="group relative flex items-center justify-center w-full rounded-md overflow-hidden bg-teal-600 px-8 py-4 text-white focus:outline-none focus:ring active:bg-teal-500 text-center"
          callback={handleSuccess} // Function to handle successful payment
          charge_emitter={(e) => console.log("Event:", e)} // Optional event listener
          email="user@example.com" // Replace with user's email (optional)
          {...config} // Spread the config object to include payment details
        />

       
      </main>
    </div>
  );
}

export default Donate;
