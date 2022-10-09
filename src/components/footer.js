import React from 'react'

const Footer = () => {

  return (
    <React.Fragment>
      <p className='text-base f-f-p font-bold w-full text-end px-11'>Follow Us @Slatemilk</p>
      <div className='bg-[#262322] py-10 cut'>
        <div className='container mx-auto flex flex-col justify-center text-white f-f-p w-[902px]'>
          <div className='flex w-full justify-between items-start pt-24 pb-10'>
            <div className='flex flex-col justify-center space-y-4'>
              <p className='text-base leading-4 font-bold'>ABOUT</p>
              <a href="/" className='text-sm leading-[18x]'>
                Blog
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                FAQs
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                Refer-a-Friend
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                Plastic Neutral Promise.
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                Accessibility
              </a>
            </div>
            <div className='flex flex-col justify-center space-y-4'>
              <p className='text-base leading-4 font-bold'>CONTACT</p>
              <a href="/" className='text-sm leading-[18x]'>
                Wholesale
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                Influencers
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                Careers
              </a>
              <a href="/" className='text-sm leading-[18x]'>
                Affiliate
              </a>
            </div>
            <form className='flex flex-col justify-center space-y-4'>
              <p className='text-base leading-4 font-bold'>SUBSCRIBE TO OUR MAILING LIST</p>
              <div className="flex items-center w-full space-x-3">
                <input required={true} type={"email"} placeholder={"Your Email"} className="text-sm f-f-p appearance-none outline-none text-black placeholder:text-[#878C92] px-4 py-2 w-[317px]" />
                <button role="button" type="submit" className='focus:outline-none appearance-none bg-transparent text-base leading-4 font-bold'>Sign Up</button>
              </div>
            </form>

          </div>
          <p className="text-end text-[15px] leading-4 f-f-v pb-0.5">© 2021 Slate Milk</p>
          <hr />
          <div className="flex w-full justify-between pt-3">
            <div className="flex">
              <a href="/" className="text-sm leading-4 f-f-p font-medium ">Return </a>
              <a href="/" className="text-sm leading-4 f-f-p font-medium pr-16 pl-10 ">Privacy Policy </a>
              <a href="/" className="text-sm leading-4 f-f-p font-medium ">Terms and Conditions </a>

            </div>
            <div className="flex space-x-2">
              <svg role="button" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H0V15H15V0ZM10.75 7.49998L10.4167 9.58335H8.75002V15H6.25V9.58335H4.375V7.49998H6.25V5.83332C6.25 3.95832 7.45833 2.91665 9.16665 2.91665C9.7083 2.91665 10.2916 2.99999 10.8333 3.08333V4.99999H9.87502C8.9583 4.99999 8.75002 5.45832 8.75002 6.04166V7.49998H10.75Z" fill="white" />
              </svg>

              <svg role="button" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_294)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H0V15H15V0ZM5.25121 2.07843C5.833 2.05195 6.01892 2.04548 7.50023 2.04548H7.49852C8.98028 2.04548 9.16552 2.05195 9.7473 2.07843C10.3279 2.10502 10.7245 2.19695 11.0722 2.33184C11.4313 2.47104 11.7347 2.65741 12.0382 2.96081C12.3415 3.264 12.5279 3.56831 12.6677 3.92707C12.8018 4.27388 12.8939 4.67025 12.9211 5.25093C12.9472 5.83275 12.9541 6.01865 12.9541 7.5C12.9541 8.9814 12.9472 9.16687 12.9211 9.74865C12.8939 10.3291 12.8018 10.7256 12.6677 11.0725C12.5279 11.4311 12.3415 11.7355 12.0382 12.0386C11.7351 12.3421 11.4313 12.5289 11.0726 12.6682C10.7256 12.8031 10.3288 12.8951 9.74813 12.9216C9.16635 12.9481 8.98095 12.9546 7.49955 12.9546C6.01835 12.9546 5.83255 12.9481 5.25075 12.9216C4.67021 12.8951 4.27374 12.8031 3.9267 12.6682C3.56819 12.5289 3.26388 12.3421 2.96082 12.0386C2.65754 11.7355 2.47117 11.4311 2.33175 11.0724C2.19698 10.7256 2.10506 10.3292 2.07835 9.74858C2.05199 9.16673 2.04539 8.9814 2.04539 7.5C2.04539 6.01865 2.05221 5.83263 2.07823 5.25082C2.10437 4.67036 2.19641 4.27388 2.33164 3.92695C2.47141 3.56831 2.65776 3.264 2.96116 2.96081C3.26434 2.65752 3.56864 2.47116 3.92738 2.33184C4.27419 2.19695 4.67054 2.10502 5.25121 2.07843ZM7.31844 3.02838C7.20815 3.02833 7.10594 3.02828 7.01093 3.02843V3.02707C5.99437 3.0282 5.79938 3.03502 5.29621 3.05775C4.76441 3.08218 4.47566 3.17081 4.28339 3.24581C4.02886 3.34491 3.84704 3.46309 3.65614 3.654C3.46524 3.84491 3.34683 4.02673 3.24797 4.28127C3.17332 4.47354 3.08446 4.76218 3.06014 5.29399C3.03401 5.869 3.02878 6.04081 3.02878 7.49741C3.02878 8.95403 3.03401 9.12675 3.06014 9.7017C3.08435 10.2335 3.17332 10.5222 3.24797 10.7142C3.34706 10.9689 3.46524 11.1503 3.65614 11.3411C3.84704 11.5321 4.02886 11.6503 4.28339 11.7491C4.47578 11.8237 4.76441 11.9126 5.29621 11.9372C5.87119 11.9633 6.0438 11.969 7.50023 11.969C8.95658 11.969 9.1293 11.9633 9.70425 11.9372C10.2361 11.9128 10.5249 11.8242 10.717 11.7492C10.9716 11.6503 11.1529 11.5322 11.3438 11.3413C11.5346 11.1505 11.6531 10.9692 11.7519 10.7146C11.8266 10.5226 11.9154 10.234 11.9398 9.70215C11.9659 9.1272 11.9716 8.95447 11.9716 7.49877C11.9716 6.04309 11.9659 5.87036 11.9398 5.29536C11.9155 4.76354 11.8266 4.47491 11.7519 4.28286C11.6528 4.02832 11.5346 3.8465 11.3438 3.65559C11.153 3.46468 10.9715 3.3465 10.717 3.24764C10.5247 3.17297 10.2361 3.08411 9.70425 3.05979C9.12915 3.03366 8.95658 3.02843 7.50023 3.02843C7.43729 3.02843 7.37673 3.0284 7.31844 3.02838ZM9.7572 4.58843C9.7572 4.22695 10.0504 3.93411 10.4117 3.93411V3.93389C10.7731 3.93389 11.0662 4.22707 11.0662 4.58843C11.0662 4.94979 10.7731 5.24297 10.4117 5.24297C10.0504 5.24297 9.7572 4.94979 9.7572 4.58843ZM4.69918 7.5C4.69918 5.95312 5.95328 4.69895 7.50015 4.69888C9.04703 4.69888 10.3008 5.95309 10.3008 7.5C10.3008 9.04695 9.0471 10.3006 7.50023 10.3006C5.95334 10.3006 4.69918 9.04695 4.69918 7.5ZM9.31838 7.5C9.31838 6.49582 8.50432 5.68184 7.50023 5.68184C6.49606 5.68184 5.68211 6.49582 5.68211 7.5C5.68211 8.5041 6.49606 9.31822 7.50023 9.31822C8.50432 9.31822 9.31838 8.5041 9.31838 7.5Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_17_294">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer