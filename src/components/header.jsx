import React from 'react'
import { TbBrandBooking } from "react-icons/tb";
import { TbPhoneCalling } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import logo from '../assets/logo.png'

const Header = () => {  
    return (    
        <div className="w-full bg-white lg:flex hidden items-center mx-auto px-4 ">
            <img
            className=" h-14 w-auto  rounded-full"
            src={logo} alt=""  />
        <div className="mx-5">
          <h1 className="text-black font-bold ">Jayshree</h1>
          <h1 className="text-black font-bold ">Foundation</h1>
          <p className="text-black ">Togather we can change life</p>
        </div>
        <p className="text-black text-4xl ml-96 mr-2">
          <TbBrandBooking />
        </p>
        <div >
          <h3 className="text-black">Second Medicak Opinion</h3>
          <h1 className="text-black font-bold">Book Consultation</h1>
        </div>
        <p className="text-black text-4xl ml-8 mr-2">
          <TbPhoneCalling />
        </p>
        <div>
          <h3 className="text-black">Call Us On</h3>
          <h1 className="text-black font-bold">985 896 2222</h1>
        </div>
        <p className="text-black text-4xl ml-8 mr-2">
          <HiOutlineMailOpen />
        </p>
        <div>
          <h3 className="text-black">Email Us On</h3>
          <h1 className="text-black font-bold">info@mediretreats.com</h1>
        </div>
      </div>
    )
}
export default Header;