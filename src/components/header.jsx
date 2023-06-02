import React from 'react'
import { TbBrandBooking } from "react-icons/tb";
import { TbPhoneCalling } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";


const Header = () => {  
    return (    
        <div className="w-full bg-white lg:flex hidden items-center mx-auto px-4 ">
        <svg
          id="logo-36"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M18.9523 11.0726C18.5586 7.69873 18.1429 4.13644 18.1429 0H21.8571C21.8571 4.08998 21.4434 7.64774 21.0502 11.0254C20.7299 13.778 20.4235 16.411 20.3666 19.115C22.2316 17.1697 23.863 15.107 25.572 12.9463C27.6791 10.2823 29.9043 7.46945 32.829 4.54464L35.4554 7.17104C32.5633 10.0631 29.7547 12.2861 27.0884 14.3966L27.0859 14.3985C24.9141 16.1178 22.8365 17.7624 20.885 19.6334C23.579 19.5765 26.1911 19.2717 28.9272 18.9524C32.3011 18.5586 35.8636 18.1429 40 18.1429V21.8571C35.9102 21.8571 32.3524 21.4432 28.9749 21.0502L28.9724 21.05C26.2204 20.7298 23.5882 20.4236 20.885 20.3666C22.829 22.2302 24.8906 23.8609 27.0499 25.5687L27.0533 25.5716C29.7174 27.6789 32.5304 29.9039 35.4554 32.829L32.829 35.4554C29.9369 32.5634 27.714 29.755 25.6038 27.0889L25.5988 27.082L25.5946 27.0765C23.8775 24.9081 22.2349 22.8338 20.3666 20.885C20.4235 23.589 20.7299 26.222 21.0502 28.9746C21.4434 32.3523 21.8571 35.91 21.8571 40H18.1429C18.1429 35.8636 18.5586 32.3013 18.9523 28.9274L18.9531 28.9219C19.272 26.1877 19.5765 23.5772 19.6334 20.885C17.7651 22.8338 16.1225 24.9081 14.4054 27.0765L14.4012 27.082L14.3962 27.0889C12.286 29.755 10.0631 32.5634 7.17104 35.4554L4.54464 32.829C7.46959 29.9039 10.2826 27.6789 12.9467 25.5716L12.9501 25.5687C15.1094 23.8609 17.171 22.2302 19.115 20.3666C16.411 20.4237 13.7779 20.73 11.0251 21.0502C7.6476 21.4432 4.08984 21.8571 0 21.8571V18.1429C4.13644 18.1429 7.69894 18.5586 11.0728 18.9524C13.8089 19.2717 16.421 19.5765 19.115 19.6334C17.1627 17.7617 15.0843 16.1166 12.9116 14.3966C10.2453 12.2861 7.43666 10.0631 4.54464 7.17104L7.17104 4.54464C10.0957 7.46945 12.3209 10.2823 14.428 12.9463C16.137 15.1069 17.7684 17.1696 19.6334 19.1148C19.5765 16.4227 19.272 13.8123 18.9531 11.0781L18.9523 11.0726Z"
            className="ccustom"
            fill="#FFA589"
          ></path>{" "}
        </svg>
        <div className="mx-5">
          <h1 className="text-black font-bold ">AAFIYA</h1>
          <h1 className="text-black font-bold ">MEDIRETREATS</h1>
          <p className="text-black ">Healing Globally...</p>
        </div>
        <svg
          className="ml-11"
          id="logo-88"
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
            fill="#FF630B"
          ></path>
        </svg>
        <p className="text-black text-4xl ml-8 mr-2">
          <TbBrandBooking />
        </p>
        <div>
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