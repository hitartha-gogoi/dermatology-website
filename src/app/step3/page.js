"use client"

import * as THREE from 'three';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Region from '@/components/region';

export default function Step3() {

    const router = useRouter()

  const submitForm = (e)=>{
    e.preventDefault()
    router.push("/step4")

  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center">

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
        <div className="text-gray-400 hidden sm:block  border-b-4 border-gray-400 font-semibold text-2xl pr-20">1 <span className="text-base">Basic Information</span></div>
        <div className="text-gray-400 hidden sm:block  border-b-4 border-gray-400 font-semibold text-2xl pr-20">2 <span className="text-base">Upload Photos</span> </div>
        <div className="text-[#5F8D4E] border-b-4 border-[#5F8D4E] font-semibold text-2xl pr-20">3 <span className="text-base">Choose Region </span></div>
        <div className="text-gray-400 hidden sm:block  border-b-4 border-gray-400 font-semibold text-2xl pr-20">4 <span className="text-base">Payment</span> </div>
      </div>

      {/* FORM */}
      <form onSubmit={submitForm} className="flex flex-col w-full max-w-xl mx-auto mt-6 text-black p-4 gap-2">

      <span className="text-left sm:text-4xl text-3xl font-medium font-poppins text-black my-8">Select Region</span>
        
        

        <div className="flex flex-col justify-center items-center h-[80vh]">
            <span></span>

            <div className="w-full h-[75vh]">
              <Region />
            </div>
          <button type="submit" className="bg-[#5F8D4E] text-white font-bold rounded-md text-center text-base py-2 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out mt-4 uppercase w-36">next step</button>
        </div>
       
        </form>
    </div>
  );
}
