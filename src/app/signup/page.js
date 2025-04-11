"use client"
import Image from "next/image";
import Link from "next/link";

export default function Signup() {

  const submitForm = (e)=>{
    e.preventDefault()

  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-center items-center py-16">

      {/* HEADING */}
      <h1 className="sm:text-5xl text-3xl  font-semibold text-center uppercase text-black"><span className="text-green-800">ui</span> kit</h1>

      {/* WELCOME BACK TEXT */}
      <span className="text-center sm:text-5xl text-3xl font-medium font-poppins text-black my-8">Create your account</span>

      <span className="font-normal text-center text-lg text-black">Let's get started! Sign up now to access all of our features and content.</span>

      {/* FORM */}
      <form onSubmit={submitForm} className="flex flex-col w-full max-w-xl mx-auto mt-6 text-black p-4 gap-2">
        
        <div className="w-full flex flex-col sm:flex-row gap-4 mt-4">
        {/* First Name */}
        
        <div className="flex flex-col flex-1">
            <span className="text-xs font-poppins font-bold text-black mb-1">First Name</span>
            <input type="text" placeholder="First-Name" className="border border-gray-400 rounded-md h-10 px-4 font-poppins" />
        </div>
        
        {/* Last Name */}
        
        <div className="flex flex-col flex-1">
            <span className="text-xs font-poppins font-bold text-black mb-1">Last Name</span>
            <input type="text" placeholder="Last-Name" className="border border-gray-400 rounded-md h-10 px-4 font-poppins" />
        </div>
        
        </div>

        <div className="flex flex-col flex-1 mt-2">
            <span className="text-xs font-poppins font-bold text-black mb-1">Email</span>
            <input type="email" placeholder="johndoe@gmail.com" className="border border-gray-400 rounded-md h-10 px-4 font-poppins" />
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4 mt-2">

        {/* Phone Number */}
        
        <div className="flex flex-col flex-1">
            <span className="text-xs font-poppins font-bold text-black mb-1">Phone Number</span>
            <input type="text" placeholder="Phone Number" className="border border-gray-400 rounded-md h-10 px-4 font-poppins" />
        </div>
        
        {/* Age */}
        
        <div className="flex flex-col flex-1">
            <span className="text-xs font-poppins font-bold text-black mb-1">Age</span>
            <input type="text" placeholder="Age" className="border border-gray-400 rounded-md h-10 px-4 font-poppins" />
        </div>
        
        </div>

        <div className="flex flex-col flex-1 mt-2">
            <span className="text-xs font-poppins font-bold text-black mb-1">Password</span>
            <input type="password" placeholder="Password" className="border border-gray-400 rounded-md h-10 px-4 font-poppins" />
        </div>

        {/*

        <div className="flex flex-row mt-8 w-full justify-between items-center">
        <div className="flex flex-row">
          <input type="checkbox" />
          <span className="text-black text-right text-sm font-normal">Remember me </span>
        </div>
        <span className="text-blue-600 text-right text-sm font-normal">forgot your password </span>
        </div>

        */}

        <button type="submit" className="bg-green-700 text-white font-bold text-center text-base rounded-sm py-2 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out mt-4">Create account</button>
        <span className="text-gray-800 uppercase text-center font-light">or</span>
        <button className="flex flex-row justify-center items-center bg-white border border-gray-400 text-black text-center text-base  rounded-sm py-2 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out"><Image  alt="google logo" className="rounded-full" src={"https://img.freepik.com/premium-vector/google-icon_1273375-870.jpg?w=826"} height={30} width={30} /><span className="ml-4 font-medium font-poppins">Signup with Google</span></button>
      </form>

      <span className="text-black text-center text-sm font-normal font-poppins">Already have an account? <Link href="/login"><span className="text-blue-600 text-sm font-normal"> Login here</span></Link></span>
     
    </div>
  );
}
