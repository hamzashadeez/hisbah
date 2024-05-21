import React, { useState } from "react";

const ContactUS = () => {
  let [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  return (
    <section className="bg-teal-50">
      <div className="container m-auto max-w-2xl py-20">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form>
            <h2 className="text-3xl text-center font-bold sm:text-6xl text-teal-900">
              Contact Us
            </h2>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text-center items-center mt-10">
          <div className="text-left">
            <h6 className="font-bold text-teal-600 mb-5">
              Visit Hisbah Board Office Katsina State
            </h6>
            <p className="mb-5">
              Opposite 35 Batallion of the Nigerian Army - Natsinta Barracks
              Katsina, Katsina State.
            </p>
            <p>
              <b>Postal Code: </b> 8200231
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
