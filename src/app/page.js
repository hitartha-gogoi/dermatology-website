"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { FaUserPlus } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {

  const router = useRouter()

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
          <span className="p-4 ml-16  bg-gray-200/50 rounded-lg ">M</span>
        </div>
      </div>
   
      </div>


      {/* WHITE NAVIGATION BAR */}

      <div className="flex flex-row justify-start items-center w-full space-x-0 sm:space-x-10 py-6 sm:mr-20">
        <Link href="/"><span className=" text-sm font-medium text-gray-400 p-2 sm:p-2 hover:bg-green-100 rounded-md hover:text-green-800 hover:scale-105 transition-transform duration-200 ease-in-out sm:ml-40">All Patients</span></Link>
        <Link href="/"><span className="text-sm font-medium text-gray-400 p-2 sm:p-2 hover:bg-green-100 rounded-md hover:text-green-800 hover:scale-125 duration-100 transition-transform ease-in-out">Pending</span></Link>
        <Link href="/"><span className="text-sm font-medium text-gray-400 p-2 sm:p-2 hover:bg-green-100 rounded-md hover:text-green-800 hover:scale-125 duration-100 transition-transform ease-in-out">Completed</span></Link>
      </div>
      
      
      <div className="w-full h-24 flex flex-row sm:flex-nowrap flex-wrap justify-center sm:justify-between items-center  border-t-2 pt-8 sm:border-none border-gray-200">

        {/* HEADING FOR MOBILE SCREENS */}
        <div className="flex flex-row sm:hidden justify-center items-center ml-2 sm:ml-40">
          
          <span className="block sm:hidden text-lg self-start font-bold text-green-700  px-4">All Patients</span>
          <span className="block sm:hidden  text-base self-start font-light text-green-700 px-4">100 patients</span>
         
        </div>

        {/* List of Patients Heading */}
        
        <div className="flex flex-col justify-center items-center space-y-2 ml-2 sm:ml-40">
          <span className="hidden sm:block text-base self-start font-medium text-black px-4 w-40">List of Patients</span>
          <span className="hidden sm:block text-base self-start font-light text-black px-4 py-2 w-48">34 recorded patients</span>
        </div>
        
        
        {/* ADD NEW PATIENT BUTTON */}
        
        <div className="flex flex-row justify-end items-center place-self-center space-y-2  mr-4 sm:mr-40">
          <button onClick={()=> router.push('/step1')} className="hidden sm:block px-4 bg-[#5F8D4E] text-base  text-center text-white font-semibold w-52 h-12 rounded-md  hover:scale-105 duration-100 transition-transform ease-in-out"><span className="flex flex-row items-center justify-center"><FaUserPlus size={24} className="m-2" /> Add new Patient</span></button>
          <button onClick={()=> router.push('/step1')} className="block sm:hidden bg-[#5F8D4E] text-base text-center text-white font-semibold w-52 h-12 rounded-md  hover:scale-105 duration-100 transition-transform ease-in-out"><span className="flex flex-row items-center justify-center "><FaUserPlus size={24} className="m-2" /> Add new Patient</span></button>
        </div>
        
      </div> 

      {/* TABLE */}

      <div className="flex flex-row justify-evenly items-center w-full px-4 mt-8">

        {/*  */}
        <div className="flex flex-row justify-evenly items-center p-4 bg-gray-100 w-80 sm:w-5/6 rounded-md">
          <span className="text-gray-400 font-semibold banner-text w-48 sm:w-80">Name</span>
          <span className="text-gray-400 hidden sm:block font-semibold banner-text w-40">Age</span>
          <span className="text-gray-400 hidden sm:block font-semibold banner-text w-48">Gender</span>
          <span className="text-gray-400 hidden sm:block font-semibold banner-text w-48">Duration</span>
          <span className="text-gray-400 hidden sm:block font-semibold banner-text w-48">Date added</span>
          <span className="text-gray-400 font-semibold banner-text uppercase w-40 sm:w-40 ml-10">status</span>
        </div>

      </div>

      <div className="flex flex-col justify-evenly items-center w-full px-4">

        <div className="flex flex-row justify-evenly items-center p-4  sm:w-5/6 w-96 rounded-md">

        {/* NAME SECTION */}
          < div className="flex flex-row justify-start flex-wrap items-center py-2 w-80">
            <Image  height={60} width={60} className="rounded-full sm:rounded-md " src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745325926~exp=1745329526~hmac=a1c794a76dc92e08e044600b1d73c6eca9341edecca027d57b62a8c43b965d8e&w=826"} />
            <div className="flex flex-col justify-start items-center py-2 ml-0 sm:ml-4">
              <span className="text-black self-start font-semibold banner-text ">Brooklyn Simmons</span>
              <span className="text-gray-400 self-start font-semibold banner-text ">Male</span>
            </div>
          </div>

          <span className="text-black  hidden sm:block font-semibold banner-text w-40">18</span>
          <span className="text-black hidden sm:block font-semibold banner-text w-48">Male</span>
          <span className="text-black hidden sm:block font-semibold banner-text w-48">10 days</span>

          <div className="flex flex-col justify-center items-center  w-48">
           <span className="text-black self-start font-semibold hidden sm:block banner-text">22/12/24</span>
           <span className="text-gray-400 self-start font-semibold hidden sm:block banner-text">5:20 PM</span>
          </div>

          <span className="text-green-700 text-sm bg-green-100 font-normal banner-text uppercase w-48 py-2 rounded-md text-center">completed</span>
          <FaArrowRight size={24} className="ml-8 text-neutral-800 p-2  hidden sm:block  scale-125 bg-gray-300 rounded-full hover:scale-150 duration-100 transition-transform ease-in-out" />
        </div>


        {/* PENDING */}

        <div className="flex flex-row justify-evenly items-center p-4  sm:w-5/6 w-96 rounded-md">

        {/* NAME SECTION */}
          < div className="flex flex-row justify-start flex-wrap items-center py-2 w-80">
            <Image  height={60} width={60} className="rounded-full sm:rounded-md " src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745325926~exp=1745329526~hmac=a1c794a76dc92e08e044600b1d73c6eca9341edecca027d57b62a8c43b965d8e&w=826"} />
            <div className="flex flex-col justify-start items-center py-2 ml-0 sm:ml-4">
              <span className="text-black self-start font-semibold banner-text ">Brooklyn Simmons</span>
              <span className="text-gray-400 self-start font-semibold banner-text ">Male</span>
            </div>
          </div>

          <span className="text-black  hidden sm:block font-semibold banner-text w-40">18</span>
          <span className="text-black hidden sm:block font-semibold banner-text w-48">Male</span>
          <span className="text-black hidden sm:block font-semibold banner-text w-48">10 days</span>

          <div className="flex flex-col justify-center items-center  w-48">
           <span className="text-black self-start font-semibold hidden sm:block banner-text">22/12/24</span>
           <span className="text-gray-400 self-start font-semibold hidden sm:block banner-text">5:20 PM</span>
          </div>

          <span className="text-red-600 text-sm bg-red-100 font-normal banner-text uppercase w-48 py-2 rounded-md text-center">Pending </span>
          <FaArrowRight size={24} className="ml-8 text-neutral-800 p-2 scale-125 bg-gray-300 rounded-full hidden sm:block hover:scale-150 duration-100 transition-transform ease-in-out" />
        </div>



        
      </div>
        
    </div>
  );
}
