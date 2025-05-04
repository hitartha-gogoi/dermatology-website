"use client"
import { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { AppContext } from '../../context/context'


export default function Step2() {

    const router = useRouter()

    const { firstName } = useContext(AppContext)

    useEffect(()=>{
      console.log("The firstname os", firstName)
    }, [])

  const submitForm = (e)=>{
    e.preventDefault()
    router.push("/step3")

  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center">

      {/* GREEN NAVIGATION BAR */}

      <div className="w-full  h-20 bg-green-800 py-6 flex flex-row justify-between items-center">

        {/* PATIENTS && HOME */}

        <div className="flex flex-row justify-evenly items-center space-x-4 ml-4 sm:ml-20 ">
          <span className="text-base font-bold text-white p-2 sm:p-6">Patients</span>
          <span className="text-base font-bold text-white p-2 sm:p-6 ">Home</span>
        </div>

        {/* PROFILE */}

        <div className="flex flex-row justify-end items-center space-y-2 mr-20">

        <div className="flex flex-col justify-center items-center space-y-2">
          <Link className="self-start" href="/"><span className="text-base hidden sm:block font-bold text-white">Marvin McKinsey</span></Link>
          <Link className="self-start" href="/"><span className="text-base hidden sm:block font-light text-white">Doctor</span></Link>
        </div>

        </div>
        
      </div>


      {/* WHITE NAVIGATION BAR */}

      <div className="flex flex-row justify-start items-center w-full space-x-0 sm:space-x-10 py-6  shadow-md">
        <Link href="/"><span className="ml-2 text-sm font-medium text-gray-400 p-2 sm:p-6 hover:text-green-800 hover:scale-105 transition-transform duration-200 ease-in-out sm:ml-40">Patients</span></Link>
        <Link href="/"><span className="text-sm font-medium text-gray-400 p-2 sm:p-6 hover:text-green-800 hover:scale-125 duration-100 transition-transform ease-in-out">Add New Patient</span></Link>
      </div>
      

      {/* FORM */}
      <form onSubmit={submitForm} className="flex flex-col w-full max-w-xl mx-auto mt-6 text-black p-4 gap-2">

      <span className="text-left sm:text-4xl text-3xl font-medium font-poppins text-black my-8">Upload Photos {firstName}</span>
        
        <div className="flex flex-row justify-start items-center py-2 w-96">
            <Image alt="image" height={60} width={60} className="rounded-full sm:rounded-md " src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745325926~exp=1745329526~hmac=a1c794a76dc92e08e044600b1d73c6eca9341edecca027d57b62a8c43b965d8e&w=826"} />
                <div className="flex flex-col justify-start items-center py-2 ml-0 sm:ml-4">
                    <span className="text-black self-start font-normal italic banner-text ">Please upload Naked eye photo</span>
                    <div className="flex flex-row justify-start items-start">
                        <input type="file" className="text-green-800 bg-gray-200 rounded-md p-2 sm:w-96 md:w-66 w-56" />
                    </div>
            </div>
        </div>

        <div className="flex flex-row justify-between items-center">
            <span></span>
          <button type="submit" className="bg-green-800 text-white font-bold rounded-md text-center text-base py-2 hover:scale-105 hover:shadow-xl transition-transform duration-200 ease-in-out mt-4 uppercase w-36">next step</button>
        </div>
       
        </form>
    </div>
  );
}
