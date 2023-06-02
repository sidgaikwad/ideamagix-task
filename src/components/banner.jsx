import React from 'react'
import banner from '../assets/banner1.jpg';


const Banner = () => {
    return (
        <div className="w-full h-auto bg-cover bg-center bg-no-repeat lg:h-96"
    style={{backgroundImage:`url(${banner})`}}
      >
        <p className='m-auto p-4 text-white text-sm'>Home &gt; Treatment &gt; Orthopeadics &gt;Knee Replacement </p> 
        <h1 className='p-4 m-auto font-bold text-4xl text-white'>Total Knee Replacement</h1>
        <p className='m-auto p-4 text-white text-sm'>Total Knee Replacement is a surgery to remove and replace the whole <br/> damaged knee joint with an artificial joint</p> 
      </div>
    )
};
export default Banner;