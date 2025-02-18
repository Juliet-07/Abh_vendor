import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Help = () => {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMessageSubmission = (e) => {
    e.preventDefault();
    emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent Successfully!");
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Message Failed to Send.");
      }
    );
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-6 md:p-10">
        {/* Reach out to us */}
        <div className="md:w-[476px] md:h-[300px] bg-[#FFFFFF] flex flex-col p-6 md:p-10 rounded-t-[100px] rounded-r-0 rounded-b-0 rounded-l-[100px]">
          <div className="w-full font-primaryBold text-2xl text-black text-center">
            Reach Out To Us
          </div>
          <div className="grid gap-10 my-4 text-black font-primaryRegular">
            <div className="flex">
              <FiMail size={20} />
              <p className="mx-4">Email us</p>
              <p>@info.abhmarkets.com</p>
            </div>
            <div className="flex">
              <FiPhone size={20} />
              <p className="mx-4">Call us</p>
              <p>07061131509</p>
            </div>
          </div>
        </div>
        {/* content form */}
        <div className="md:w-[529px] bg-white border border-[#CFCBCB] p-4">
          <div className="w-full font-primaryBold text-2xl text-center">
            Send Us A Message
          </div>
          {/* form proper */}
          <div className="">
            <form
              onSubmit={handleSubmit(handleMessageSubmission)}
              className="w-full mx-auto flex flex-col justify-center p-3 md:p-6 font-primaryRegular"
            >
              <div className="flex flex-col">
                <div className="mb-4">
                  <label
                    className="block text-[#0C1415] font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full border border-[#C1C6C5] p-3 text-[#0C1415] leading-tight"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#0C1415] font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full border border-[#C1C6C5] p-3 text-[#0C1415] leading-tight"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>{" "}
                <div className="mb-4">
                  <label
                    className="block text-[#0C1415] font-bold mb-2"
                    for="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full border border-[#C1C6C5] p-3 text-[#0C1415] leading-tight"
                    id="phone"
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>{" "}
                <div className="mb-4">
                  <label
                    className="block text-[#0C1415] font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full border border-[#C1C6C5] p-3 text-[#0C1415] leading-tight"
                    id="message"
                    type="text"
                    placeholder="How can we help?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full h-[50px] bg-[#4CBD6B] text-white font-bold rounded"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
