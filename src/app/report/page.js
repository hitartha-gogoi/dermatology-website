'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Report() {
  const router = useRouter()

  return (
    <div className="bg-white w-full font-poppins min-h-screen flex flex-col items-center font-sans">

     {/* GREEN NAVIGATION BAR */}
      
            <div className="w-full h-16 bg-[#285430] py-6 flex flex-row justify-between items-center">
      
              {/* PATIENTS && HOME */}
      
              <div className="flex flex-row justify-evenly items-center space-x-4 ml-4 sm:ml-20 ">
                <span className="font-poppins text-base font-bold text-[#285430] bg-white mt-10 rounded-2xl  px-6 pt-4 pb-10">Patients</span>
                <span className="font-poppins text-base font-bold text-white mt-10 p-6 rounded-2xl  px-6 pt-4 pb-10">Home</span>
              </div>
      
            {/* PROFILE */}
      
            <div className="flex flex-row justify-end items-center space-y-2 mr-20">
              <div className="flex flex-col justify-center items-center space-y-2">
                <Link className="self-start" href="/"><span className="font-poppins text-base hidden sm:block font-bold text-white">Marvin McKinsey</span></Link>
                <Link className="self-start" href="/"><span className="font-poppins text-base hidden sm:block font-light text-white">Doctor</span></Link>
              </div>
              <div>
                <span className="p-4 ml-4 bg-gray-200/50 rounded-lg ">M</span>
              </div>
            </div>
         
            </div>

      {/* WHITE SUB NAVBAR */}
      <div className="w-full shadow flex items-center px-6 sm:px-40 py-4">
        <Link href="/">
          <span className="text-sm font-poppins font-medium text-gray-400 hover:text-green-800 hover:scale-105 transition">
            Report
          </span>
        </Link>
      </div>

      {/* REPORT BODY */}
      <div className="w-full max-w-5xl border border-black my-10 p-6 space-y-6 text-gray-800">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-lg font-poppins font-bold">Name Of Hospital (Dermoscopy Analysis)</h2>
          <h3 className="font-semibold font-poppins">Dr ABCD XYZ</h3>
          <p className="font-mediumfont-poppins">Bengaluru</p>
        </div>

        {/* Patient Info */}
        <div className="grid font-poppins grid-cols-1 sm:grid-cols-3 gap-4 border border-black px-4 py-3 text-sm font-medium">
          <p><strong>Name :</strong> Aditya Kumar</p>
          <p><strong>Age / Sex :</strong> Male / 26</p>
          <p><strong>Date :</strong> 21/04/2025</p>
        </div>

        {/* Clinical Details */}
        <div className="px-4 text-sm space-y-2 font-poppins">
          <p><strong>Site of legion :</strong> Left forearm</p>
          <p><strong>Duration of Symptoms :</strong> 10 days</p>
          <p><strong>Clinical Impression :</strong> Something Something happening , Nobody knows what and why</p>
        </div>

        {/* Findings + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-sm">
          <div className="border border-black p-4 space-y-2 font-poppins">
            <p className="font-semibold font-poppins">Dermosopic findings:</p>
            <p><strong>Purple :</strong> Blue areas</p>
            <p><strong>Green :</strong> Pigmented areas</p>
            <p><strong>Blue :</strong> Dotted vessels</p>
            <p><strong>Red :</strong> Scale</p>

            <p><strong>Impression :</strong> Dermoscopic features suggestive of Bowens disease</p>
            <p><strong>Advice :</strong> Histopathological examination to confirm diagnosis</p>
          </div>
          <div className="font-poppins w-full h-auto border-4 border-blue-500">
            <Image
              src="/report-image.png" // Replace with actual image path
              alt="Dermoscopy"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
