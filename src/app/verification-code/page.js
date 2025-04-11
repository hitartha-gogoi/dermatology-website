"use client"
import { useState } from "react";
import Image from "next/image";

export default function VerificationCode() {

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only digits and max 1 character
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };


  const submitForm = (e)=>{
    e.preventDefault()

  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-center items-center">

      {/* HEADING */}
      <span className="text-center sm:text-5xl text-3xl font-semibold text-black my-8">Verification Code</span>

      <span className="font-normal text-center text-lg text-black">We have sent the verification code to your email address</span>

      {/* FORM */}
      <form onSubmit={submitForm} className="flex flex-col justify-center items-center w-96 mt-6 text-black p-4">

        <div className="flex flex-row space-x-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-400 rounded-md focus:outline-none focus:border-green-800 font-poppins"
        />
      ))}

         </div>

        <button type="submit" className="bg-green-700 w-60 text-white font-bold text-center text-base mt-8 rounded-md py-2 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out">Verify OTP</button>
      </form>

    </div>
  );
}
