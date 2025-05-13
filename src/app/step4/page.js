"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Step4() {

    const router = useRouter()

    useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

    const [payData, setPayData] = useState({
    name: '',
    email: '',
    amount: '',
    purpose: '',
  });

  const [enrollID, setEnrollID] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollStatus, setEnrollStatus] = useState('');

  const handlePayChange = (e) => {
    setPayData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = e => {
    e.preventDefault()
    const { name, email } = payData
    if (!name || !email) return alert('Please fill in name & email')

    if (!window.Razorpay) {
      return alert('Failed to load Razorpay. Please try again.')
    }

    const options = {
      key: 'rzp_test_ngx1siyaSSVYJ9',   // ← replace with your Key ID
      amount: 4900,                  // ₹49 in paise
      currency: 'INR',
      name: 'Derma Website',
      description: '',
      prefill: { name, email },
      theme: { color: '#285430' },
      handler: _ => router.push('/'),
      modal: { ondismiss: _ => console.log('Checkout closed') }
    }

    new window.Razorpay(options).open()
  }


  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center">

      {/* GREEN NAVIGATION BAR */}

     {/* GREEN NAVIGATION BAR */}

      <div className="w-full h-16 bg-[#285430] py-6 flex flex-row justify-between items-center">

        {/* PATIENTS && HOME */}

        <div className="flex flex-row justify-evenly items-center space-x-4 ml-4 sm:ml-20 ">
          <span className="text-base font-bold text-[#285430] bg-white mt-10 rounded-2xl  px-6 pt-4 pb-10">Patients</span>
          <span className="text-base font-bold text-white mt-10 p-6 rounded-2xl  px-6 pt-4 pb-10">Home</span>
        </div>

      {/* PROFILE */}

      <div className="flex flex-row justify-end items-center space-y-2 mr-20">
        <div className="flex flex-col justify-center items-center space-y-2">
          <Link className="self-start" href="/"><span className="text-base hidden sm:block font-bold text-white">Marvin McKinsey</span></Link>
          <Link className="self-start" href="/"><span className="text-base hidden sm:block font-light text-white">Doctor</span></Link>
        </div>
        <div>
          <span className="p-4 ml-4 bg-gray-200/50 rounded-lg ">M</span>
        </div>
      </div>
   
      </div>

      {/* WHITE NAVIGATION BAR */}

      <div className="flex flex-row justify-start items-center w-full space-x-0 sm:space-x-10 py-6  shadow-md">
        <Link href="/"><span className="ml-2 text-sm font-medium text-gray-400 p-2 sm:p-6 hover:text-green-800 hover:scale-105 transition-transform duration-200 ease-in-out sm:ml-40">Patients</span></Link>
        <Link href="/"><span className="text-sm font-medium text-gray-400 p-2 sm:p-6 hover:text-green-800 hover:scale-125 duration-100 transition-transform ease-in-out">Add New Patient</span></Link>
      </div>

      <div className="flex flex-row items-center mt-14 space-x-4">
        <div className=" hidden sm:block text-gray-400 border-b-4 border-gray-400 font-semibold text-2xl pr-20">1 <span className="text-base">Basic Information</span></div>
        <div className=" hidden sm:block text-gray-400 border-b-4 border-gray-400 font-semibold text-2xl pr-20">2 <span className="text-base">Upload Photos</span> </div>
        <div className=" hidden sm:block text-gray-400 border-b-4 border-gray-400 font-semibold text-2xl pr-20">3 <span className="text-base">Choose Region </span></div>
        <div className="text-[#5F8D4E] border-b-4 border-[#5F8D4E] font-semibold text-2xl pr-20">4 <span className="text-base">Payment</span> </div>
      </div>
      

      {/* FORM */}
      <form onSubmit={submitForm} className="flex flex-col w-full max-w-xl mx-auto mt-6 text-black p-4 gap-2">

      <span className="text-left sm:text-4xl text-3xl font-medium font-poppins text-black my-8">Payment gateway</span>

      {/* ✅ Pay Fee Form */}
        <div className="w-full max-w-2xl border border-gray-200 rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">Pay Fee</h2>
          
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={payData.name}
                  onChange={handlePayChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={payData.email}
                  onChange={handlePayChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              
             
            </div>

            <button
              type="submit"
              className={`mt-4 w-full bg-[#5F8D4E] text-white text-sm font-medium py-2.5 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out uppercase `}
            >
              Pay 49
            </button>
      
        </div>
        
        

        <div className="flex flex-row justify-between items-center">
            <span></span>
          {/*<button type="submit" className="bg-[#5F8D4E] text-white font-bold rounded-md text-center text-base py-2 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out mt-4 uppercase w-36">next step</button>*/}
        </div>
       
        </form>
    </div>
  );
}
