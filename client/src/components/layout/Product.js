import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Product = () => {
  return (
    <div className="AboutUs">
      <div className="w-full min-h-screen bg-baseBlack text-white">
        <div className="max-w-screen-laptop mx-auto">
          <Navbar />
          <main>
            <div
              className="bg-[url('/images/Product/Background.png')] bg-cover bg-no-repeat bg-center prodHero px-4 md:pt-24 pt-12 pb-24">
              <div className="flex items-center justify-center flex-col">
                <div
                  className="md:text-7xl font-polySans bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent max-w-[720px] text-center font-bold z-[2] text-3xl">
                  One Product,<br /> Many Experiences.</div>
                <div
                  className="md:text-xl font-inter font-normal text-custom-1 z-[2] text-base text-center mt-4 mb-8 md:mt-6 md:mb-12 max-w-[203px] md:max-w-full">
                  Video meetings where your web3 Identity thrives.</div>
                <div className="flex items-center justify-center z-[2] md:flex-row flex-col gap-4 w-full"><button
                  type="button"
                  className="transition-all duration-300 ease-in-out py-3 w-full shadow-2xl rounded-lg cursor-pointer flex items-center justify-center font-semibold text-base font-inter outline-none md:w-60 bg-gradient-to-b from-[#5C80FF] to-[#2447FD] border-none  text-custom-1  bg-pos-0 bg-size-200 hover:bg-pos-100">Try
                  Meeting for Free</button><button type="button"
                    className="transition-all duration-300 ease-in-out py-3 w-full shadow-2xl rounded-lg cursor-pointer flex items-center justify-center font-semibold text-base font-inter outline-none md:w-60 border border-custom-4  text-slate-300 bg-custom-3 hover:bg-custom-5 ">Contact
                    us for Subdomain</button></div>
              </div>
            </div>
            <div className="px-4 md:pb-16 -mt-6 md:-mt-0 z-[3] relative"><img alt="prod_hero"
              srcSet="https://huddle01.com/_next/image?url=%2Fimages%2Fproduct.png&amp;w=1200&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2Fproduct.png&amp;w=3840&amp;q=100 2x"
              src="https://huddle01.com/_next/image?url=%2Fimages%2Fproduct.png&amp;w=3840&amp;q=100" width="1150" height="720"
              decoding="async" data-nimg="1" className="mx-auto" /></div>
            <div className="md:py-24 md:px-20 px-4 py-16">
              <div className="text-center md:text-center text-start">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Web3 Features</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans pb-1  mx-auto text-[28px] pb-1">
                  The Bigger Picture</div>
              </div>
              <div className=" w-full flex flex-col items-center justify-center md:my-20 my-12 "><img alt="ProdPicture"
                srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProdPicture.png&amp;w=1920&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProdPicture.png&amp;w=3840&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FProdPicture.png&amp;w=3840&amp;q=100" width="1280" height="560"
                decoding="async" data-nimg="1" /></div>
              <div className="grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-14 place-items-center">
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M42 38V18C42 15.7909 40.2091 14 38 14L10 14C7.79086 14 6 12.2091 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38Z"
                        fill="url(#paint0_radial_3592_32024)" fillOpacity="0.8"></path>
                      <path
                        d="M42 38V18C42 15.7909 40.2091 14 38 14L10 14C7.79086 14 6 12.2091 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38Z"
                        fill="url(#paint1_radial_3592_32024)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M33 28H33.02M6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V18C42 15.7909 40.2091 14 38 14L10 14C7.79086 14 6 12.2091 6 10ZM6 10C6 7.79086 7.79086 6 10 6H34M34 28C34 28.5523 33.5523 29 33 29C32.4477 29 32 28.5523 32 28C32 27.4477 32.4477 27 33 27C33.5523 27 34 27.4477 34 28Z"
                      stroke="url(#paint2_radial_3592_32024)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M33 28H33.02M6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V18C42 15.7909 40.2091 14 38 14L10 14C7.79086 14 6 12.2091 6 10ZM6 10C6 7.79086 7.79086 6 10 6H34M34 28C34 28.5523 33.5523 29 33 29C32.4477 29 32 28.5523 32 28C32 27.4477 32.4477 27 33 27C33.5523 27 34 27.4477 34 28Z"
                      stroke="url(#paint3_radial_3592_32024)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_32024" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 26) rotate(90) scale(16 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_32024" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 26) rotate(34.2516) scale(28.4279 82.4618)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_32024" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(18 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_32024" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 24) rotate(37.4532) scale(29.5997 89.0968)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Wallet Sign
                      in</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Sign in with your wallet, and start the meeting whenever you’re ready.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M6 31.6C6 28.2397 6 26.5595 6.65396 25.2761C7.2292 24.1471 8.14708 23.2292 9.27606 22.654C10.5595 22 12.2397 22 15.6 22H32.4C35.7603 22 37.4405 22 38.7239 22.654C39.8529 23.2292 40.7708 24.1471 41.346 25.2761C42 26.5595 42 28.2397 42 31.6V32.4C42 35.7603 42 37.4405 41.346 38.7239C40.7708 39.8529 39.8529 40.7708 38.7239 41.346C37.4405 42 35.7603 42 32.4 42H15.6C12.2397 42 10.5595 42 9.27606 41.346C8.14708 40.7708 7.2292 39.8529 6.65396 38.7239C6 37.4405 6 35.7603 6 32.4V31.6Z"
                        fill="url(#paint0_radial_3592_32031)" fillOpacity="0.8"></path>
                      <path
                        d="M6 31.6C6 28.2397 6 26.5595 6.65396 25.2761C7.2292 24.1471 8.14708 23.2292 9.27606 22.654C10.5595 22 12.2397 22 15.6 22H32.4C35.7603 22 37.4405 22 38.7239 22.654C39.8529 23.2292 40.7708 24.1471 41.346 25.2761C42 26.5595 42 28.2397 42 31.6V32.4C42 35.7603 42 37.4405 41.346 38.7239C40.7708 39.8529 39.8529 40.7708 38.7239 41.346C37.4405 42 35.7603 42 32.4 42H15.6C12.2397 42 10.5595 42 9.27606 41.346C8.14708 40.7708 7.2292 39.8529 6.65396 38.7239C6 37.4405 6 35.7603 6 32.4V31.6Z"
                        fill="url(#paint1_radial_3592_32031)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M34 22V16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16V22M15.6 42H32.4C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4V31.6C42 28.2397 42 26.5595 41.346 25.2761C40.7708 24.1471 39.8529 23.2292 38.7239 22.654C37.4405 22 35.7603 22 32.4 22H15.6C12.2397 22 10.5595 22 9.27606 22.654C8.14708 23.2292 7.2292 24.1471 6.65396 25.2761C6 26.5595 6 28.2397 6 31.6V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42Z"
                      stroke="url(#paint2_radial_3592_32031)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M34 22V16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16V22M15.6 42H32.4C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4V31.6C42 28.2397 42 26.5595 41.346 25.2761C40.7708 24.1471 39.8529 23.2292 38.7239 22.654C37.4405 22 35.7603 22 32.4 22H15.6C12.2397 22 10.5595 22 9.27606 22.654C8.14708 23.2292 7.2292 24.1471 6.65396 25.2761C6 26.5595 6 28.2397 6 31.6V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42Z"
                      stroke="url(#paint3_radial_3592_32031)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_32031" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 32) rotate(90) scale(10 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_32031" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 32) rotate(23.0533) scale(25.5371 57.3727)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_32031" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(18 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_32031" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 24) rotate(37.4532) scale(29.5997 89.0968)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">
                      Token-Gating</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Schedule token-gated meetings with NFTs, tokens, and POAPs via D-App dashboard.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M43.1368 22.4459C43.4519 23.0131 43.6095 23.2968 43.6712 23.5971C43.7259 23.8629 43.7259 24.1371 43.6712 24.4029C43.6095 24.7032 43.4519 24.9868 43.1368 25.5541L34.9146 40.3541C34.5818 40.9531 34.4154 41.2526 34.1787 41.4707C33.9693 41.6637 33.7212 41.8097 33.4508 41.899C33.1452 42 32.8026 42 32.1173 42H15.8831C15.1978 42 14.8551 42 14.5495 41.899C14.2792 41.8097 14.031 41.6637 13.8216 41.4707C13.585 41.2526 13.4186 40.9531 13.0858 40.3541L4.86353 25.5541C4.54842 24.9868 4.39086 24.7032 4.32909 24.4029C4.27442 24.1371 4.27442 23.8629 4.32909 23.5971C4.39086 23.2968 4.54842 23.0131 4.86353 22.4459L13.0858 7.64594C13.4186 7.0469 13.585 6.74737 13.8216 6.52927C14.031 6.33632 14.2792 6.19029 14.5495 6.10097C14.8551 6 15.1978 6 15.8831 6L32.1173 6C32.8026 6 33.1452 6 33.4508 6.10097C33.7212 6.1903 33.9693 6.33632 34.1787 6.52927C34.4154 6.74737 34.5818 7.0469 34.9146 7.64594L43.1368 22.4459Z"
                        fill="url(#paint0_radial_3592_32037)" fillOpacity="0.8"></path>
                      <path
                        d="M43.1368 22.4459C43.4519 23.0131 43.6095 23.2968 43.6712 23.5971C43.7259 23.8629 43.7259 24.1371 43.6712 24.4029C43.6095 24.7032 43.4519 24.9868 43.1368 25.5541L34.9146 40.3541C34.5818 40.9531 34.4154 41.2526 34.1787 41.4707C33.9693 41.6637 33.7212 41.8097 33.4508 41.899C33.1452 42 32.8026 42 32.1173 42H15.8831C15.1978 42 14.8551 42 14.5495 41.899C14.2792 41.8097 14.031 41.6637 13.8216 41.4707C13.585 41.2526 13.4186 40.9531 13.0858 40.3541L4.86353 25.5541C4.54842 24.9868 4.39086 24.7032 4.32909 24.4029C4.27442 24.1371 4.27442 23.8629 4.32909 23.5971C4.39086 23.2968 4.54842 23.0131 4.86353 22.4459L13.0858 7.64594C13.4186 7.0469 13.585 6.74737 13.8216 6.52927C14.031 6.33632 14.2792 6.19029 14.5495 6.10097C14.8551 6 15.1978 6 15.8831 6L32.1173 6C32.8026 6 33.1452 6 33.4508 6.10097C33.7212 6.1903 33.9693 6.33632 34.1787 6.52927C34.4154 6.74737 34.5818 7.0469 34.9146 7.64594L43.1368 22.4459Z"
                        fill="url(#paint1_radial_3592_32037)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M43.1367 22.4459C43.4518 23.0131 43.6094 23.2968 43.6711 23.5971C43.7258 23.8629 43.7258 24.1371 43.6711 24.4029C43.6094 24.7032 43.4518 24.9868 43.1367 25.5541L34.9145 40.3541C34.5817 40.9531 34.4153 41.2526 34.1786 41.4707C33.9692 41.6637 33.721 41.8097 33.4507 41.899C33.1451 42 32.8024 42 32.1172 42H15.8829C15.1976 42 14.855 42 14.5494 41.899C14.2791 41.8097 14.0309 41.6637 13.8215 41.4707C13.5848 41.2526 13.4184 40.9531 13.0856 40.3541L4.86341 25.5541C4.5483 24.9868 4.39074 24.7032 4.32897 24.4029C4.2743 24.1371 4.2743 23.8629 4.32897 23.5971C4.39074 23.2968 4.5483 23.0131 4.86341 22.4459L13.0856 7.64594C13.4184 7.0469 13.5848 6.74737 13.8215 6.52927C14.0309 6.33632 14.2791 6.19029 14.5494 6.10097C14.855 6 15.1977 6 15.8829 6L32.1172 6C32.8024 6 33.1451 6 33.4507 6.10097C33.721 6.1903 33.9692 6.33632 34.1786 6.52927C34.4153 6.74737 34.5817 7.0469 34.9145 7.64594L43.1367 22.4459Z"
                      stroke="url(#paint2_radial_3592_32037)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M43.1367 22.4459C43.4518 23.0131 43.6094 23.2968 43.6711 23.5971C43.7258 23.8629 43.7258 24.1371 43.6711 24.4029C43.6094 24.7032 43.4518 24.9868 43.1367 25.5541L34.9145 40.3541C34.5817 40.9531 34.4153 41.2526 34.1786 41.4707C33.9692 41.6637 33.721 41.8097 33.4507 41.899C33.1451 42 32.8024 42 32.1172 42H15.8829C15.1976 42 14.855 42 14.5494 41.899C14.2791 41.8097 14.0309 41.6637 13.8215 41.4707C13.5848 41.2526 13.4184 40.9531 13.0856 40.3541L4.86341 25.5541C4.5483 24.9868 4.39074 24.7032 4.32897 24.4029C4.2743 24.1371 4.2743 23.8629 4.32897 23.5971C4.39074 23.2968 4.5483 23.0131 4.86341 22.4459L13.0856 7.64594C13.4184 7.0469 13.5848 6.74737 13.8215 6.52927C14.0309 6.33632 14.2791 6.19029 14.5494 6.10097C14.855 6 15.1977 6 15.8829 6L32.1172 6C32.8024 6 33.1451 6 33.4507 6.10097C33.721 6.1903 33.9692 6.33632 34.1786 6.52927C34.4153 6.74737 34.5817 7.0469 34.9145 7.64594L43.1367 22.4459Z"
                      stroke="url(#paint3_radial_3592_32037)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_32037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24.0002 24) rotate(90) scale(18 20.6952)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_32037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.3087 24) rotate(34.9727) scale(31.4034 91.9672)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_32037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(18 20.6952)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_32037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.3086 24) rotate(34.9727) scale(31.4034 91.9672)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">NFT Avatars
                    </div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Personalize your experience by using NFT avatars to represent yourself in meeting.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M37.6 14H34V34H37.6C39.8402 34 40.9603 34 41.816 33.564C42.5686 33.1805 43.1805 32.5686 43.564 31.816C44 30.9603 44 29.8402 44 27.6V20.4C44 18.1598 44 17.0397 43.564 16.184C43.1805 15.4314 42.5686 14.8195 41.816 14.436C40.9603 14 39.8402 14 37.6 14Z"
                        fill="url(#paint0_radial_3592_32043)" fillOpacity="0.8"></path>
                      <path
                        d="M37.6 14H34V34H37.6C39.8402 34 40.9603 34 41.816 33.564C42.5686 33.1805 43.1805 32.5686 43.564 31.816C44 30.9603 44 29.8402 44 27.6V20.4C44 18.1598 44 17.0397 43.564 16.184C43.1805 15.4314 42.5686 14.8195 41.816 14.436C40.9603 14 39.8402 14 37.6 14Z"
                        fill="url(#paint1_radial_3592_32043)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M26 14H10.4C8.15979 14 7.03969 14 6.18404 14.436C5.43139 14.8195 4.81947 15.4314 4.43597 16.184C4 17.0397 4 18.1598 4 20.4V27.6C4 29.8402 4 30.9603 4.43597 31.816C4.81947 32.5686 5.43139 33.1805 6.18404 33.564C7.03969 34 8.15979 34 10.4 34H26M34 14H37.6C39.8402 14 40.9603 14 41.816 14.436C42.5686 14.8195 43.1805 15.4314 43.564 16.184C44 17.0397 44 18.1598 44 20.4V27.6C44 29.8402 44 30.9603 43.564 31.816C43.1805 32.5686 42.5686 33.1805 41.816 33.564C40.9603 34 39.8402 34 37.6 34H34M34 42L34 6M39 6.00002L29 6M39 42L29 42"
                      stroke="url(#paint2_radial_3592_32043)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M26 14H10.4C8.15979 14 7.03969 14 6.18404 14.436C5.43139 14.8195 4.81947 15.4314 4.43597 16.184C4 17.0397 4 18.1598 4 20.4V27.6C4 29.8402 4 30.9603 4.43597 31.816C4.81947 32.5686 5.43139 33.1805 6.18404 33.564C7.03969 34 8.15979 34 10.4 34H26M34 14H37.6C39.8402 14 40.9603 14 41.816 14.436C42.5686 14.8195 43.1805 15.4314 43.564 16.184C44 17.0397 44 18.1598 44 20.4V27.6C44 29.8402 44 30.9603 43.564 31.816C43.1805 32.5686 42.5686 33.1805 41.816 33.564C40.9603 34 39.8402 34 37.6 34H34M34 42L34 6M39 6.00002L29 6M39 42L29 42"
                      stroke="url(#paint3_radial_3592_32043)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_32043" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(39 24) rotate(90) scale(10 5.24937)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_32043" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(35.5271 24) rotate(56.8669) scale(11.9417 34.0808)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_32043" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(18 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_32043" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(34.5835) scale(31.7121 92.4021)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Digital
                      Identites</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Use your Unstoppable Domains name, .ens name, or .lens to stay psuedo-anonymous in meetings.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:py-24 md:px-20 px-4 py-16">
              <div className="text-center md:text-center text-start">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Essential Features</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans pb-1  mx-auto text-[28px] pb-1">
                  The Details</div>
              </div>
              <div className=" w-full flex flex-col items-center justify-center md:my-20 my-12 "><img alt="ProdDetails"
                srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProdDetails.png&amp;w=1920&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProdDetails.png&amp;w=3840&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FProdDetails.png&amp;w=3840&amp;q=100" width="1280" height="560"
                decoding="async" data-nimg="1" /></div>
              <div className="grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-14 place-items-center">
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H32.4C35.7603 6 37.4405 6 38.7239 6.65396C39.8529 7.2292 40.7708 8.14708 41.346 9.27606C42 10.5595 42 12.2397 42 15.6V26.4C42 29.7603 42 31.4405 41.346 32.7239C40.7708 33.8529 39.8529 34.7708 38.7239 35.346C37.4405 36 35.7603 36 32.4 36H27.3675C26.1194 36 25.4953 36 24.8984 36.1225C24.3689 36.2312 23.8564 36.411 23.375 36.6569C22.8323 36.9341 22.345 37.324 21.3704 38.1037L16.5995 41.9204C15.7673 42.5861 15.3513 42.919 15.0011 42.9194C14.6965 42.9197 14.4084 42.7812 14.2185 42.5432C14 42.2696 14 41.7367 14 40.671V36C12.1401 36 11.2101 36 10.4471 35.7956C8.37653 35.2408 6.75925 33.6235 6.20445 31.5529C6 30.7899 6 29.8599 6 28V15.6Z"
                        fill="url(#paint0_radial_3553_23415)" fillOpacity="0.8"></path>
                      <path
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H32.4C35.7603 6 37.4405 6 38.7239 6.65396C39.8529 7.2292 40.7708 8.14708 41.346 9.27606C42 10.5595 42 12.2397 42 15.6V26.4C42 29.7603 42 31.4405 41.346 32.7239C40.7708 33.8529 39.8529 34.7708 38.7239 35.346C37.4405 36 35.7603 36 32.4 36H27.3675C26.1194 36 25.4953 36 24.8984 36.1225C24.3689 36.2312 23.8564 36.411 23.375 36.6569C22.8323 36.9341 22.345 37.324 21.3704 38.1037L16.5995 41.9204C15.7673 42.5861 15.3513 42.919 15.0011 42.9194C14.6965 42.9197 14.4084 42.7812 14.2185 42.5432C14 42.2696 14 41.7367 14 40.671V36C12.1401 36 11.2101 36 10.4471 35.7956C8.37653 35.2408 6.75925 33.6235 6.20445 31.5529C6 30.7899 6 29.8599 6 28V15.6Z"
                        fill="url(#paint1_radial_3553_23415)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M14 17H24M14 24H30M14 36V40.671C14 41.7367 14 42.2696 14.2185 42.5432C14.4084 42.7812 14.6965 42.9197 15.0011 42.9194C15.3513 42.919 15.7673 42.5861 16.5995 41.9204L21.3704 38.1037C22.345 37.324 22.8323 36.9341 23.375 36.6569C23.8564 36.411 24.3689 36.2312 24.8984 36.1225C25.4953 36 26.1194 36 27.3675 36H32.4C35.7603 36 37.4405 36 38.7239 35.346C39.8529 34.7708 40.7708 33.8529 41.346 32.7239C42 31.4405 42 29.7603 42 26.4V15.6C42 12.2397 42 10.5595 41.346 9.27606C40.7708 8.14708 39.8529 7.2292 38.7239 6.65396C37.4405 6 35.7603 6 32.4 6H15.6C12.2397 6 10.5595 6 9.27606 6.65396C8.14708 7.2292 7.2292 8.14708 6.65396 9.27606C6 10.5595 6 12.2397 6 15.6V28C6 29.8599 6 30.7899 6.20445 31.5529C6.75925 33.6235 8.37653 35.2408 10.4471 35.7956C11.2101 36 12.1401 36 14 36Z"
                      stroke="url(#paint2_radial_3553_23415)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M14 17H24M14 24H30M14 36V40.671C14 41.7367 14 42.2696 14.2185 42.5432C14.4084 42.7812 14.6965 42.9197 15.0011 42.9194C15.3513 42.919 15.7673 42.5861 16.5995 41.9204L21.3704 38.1037C22.345 37.324 22.8323 36.9341 23.375 36.6569C23.8564 36.411 24.3689 36.2312 24.8984 36.1225C25.4953 36 26.1194 36 27.3675 36H32.4C35.7603 36 37.4405 36 38.7239 35.346C39.8529 34.7708 40.7708 33.8529 41.346 32.7239C42 31.4405 42 29.7603 42 26.4V15.6C42 12.2397 42 10.5595 41.346 9.27606C40.7708 8.14708 39.8529 7.2292 38.7239 6.65396C37.4405 6 35.7603 6 32.4 6H15.6C12.2397 6 10.5595 6 9.27606 6.65396C8.14708 7.2292 7.2292 8.14708 6.65396 9.27606C6 10.5595 6 12.2397 6 15.6V28C6 29.8599 6 30.7899 6.20445 31.5529C6.75925 33.6235 8.37653 35.2408 10.4471 35.7956C11.2101 36 12.1401 36 14 36Z"
                      stroke="url(#paint3_radial_3553_23415)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23415" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24.4597) rotate(90) scale(18.4597 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23415" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 24.4597) rotate(38.153) scale(29.8815 90.5106)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23415" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24.4597) rotate(90) scale(18.4597 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23415" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 24.4597) rotate(38.153) scale(29.8815 90.5106)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Chat</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Engage with your peers in the main room, or directly message them, and share files.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M15.6 42H32.4C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4V31.6C42 28.2397 42 26.5595 41.346 25.2761C40.7708 24.1471 39.8529 23.2292 38.7239 22.654C37.4405 22 35.7603 22 32.4 22H15.6C12.2397 22 10.5595 22 9.27606 22.654C8.14708 23.2292 7.2292 24.1471 6.65396 25.2761C6 26.5595 6 28.2397 6 31.6V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42Z"
                        fill="url(#paint0_radial_3553_23409)" fillOpacity="0.8"></path>
                      <path
                        d="M15.6 42H32.4C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4V31.6C42 28.2397 42 26.5595 41.346 25.2761C40.7708 24.1471 39.8529 23.2292 38.7239 22.654C37.4405 22 35.7603 22 32.4 22H15.6C12.2397 22 10.5595 22 9.27606 22.654C8.14708 23.2292 7.2292 24.1471 6.65396 25.2761C6 26.5595 6 28.2397 6 31.6V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42Z"
                        fill="url(#paint1_radial_3553_23409)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M14 22C12.1401 22 11.2101 22 10.4471 22.2044C8.37653 22.7592 6.75925 24.3765 6.20445 26.4471C6 27.2101 6 28.1401 6 30V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42H32.4C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4V30C42 28.1401 42 27.2101 41.7956 26.4471C41.2408 24.3765 39.6235 22.7592 37.5529 22.2044C36.7899 22 35.8599 22 34 22M32 14L24 6M24 6L16 14M24 6V30"
                      stroke="url(#paint2_radial_3553_23409)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M14 22C12.1401 22 11.2101 22 10.4471 22.2044C8.37653 22.7592 6.75925 24.3765 6.20445 26.4471C6 27.2101 6 28.1401 6 30V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42H32.4C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4V30C42 28.1401 42 27.2101 41.7956 26.4471C41.2408 24.3765 39.6235 22.7592 37.5529 22.2044C36.7899 22 35.8599 22 34 22M32 14L24 6M24 6L16 14M24 6V30"
                      stroke="url(#paint3_radial_3553_23409)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23409" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 32) rotate(90) scale(10 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23409" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 32) rotate(23.0533) scale(25.5371 57.3727)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23409" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(18 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23409" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 24) rotate(37.4532) scale(29.5997 89.0968)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Screen
                      Share</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Share your screen without any downscaling in quality.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        fill="url(#paint0_radial_3553_23410)" fillOpacity="0.8"></path>
                      <path
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        fill="url(#paint1_radial_3553_23410)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M12 22V26M20 18V30M28 14V34M36 22V26M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                      stroke="url(#paint2_radial_3553_23410)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M12 22V26M20 18V30M28 14V34M36 22V26M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                      stroke="url(#paint3_radial_3553_23410)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23410" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(20 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23410" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(37.4532) scale(32.8886 98.9964)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23410" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(20 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23410" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(37.4532) scale(32.8886 98.9964)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Recording
                    </div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Record your meetings and email or download them instantly.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34H34C28.4772 34 24 29.5228 24 24C24 18.4772 28.4772 14 34 14H14Z"
                        fill="url(#paint0_radial_3553_23412)" fillOpacity="0.8"></path>
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34H34C28.4772 34 24 29.5228 24 24C24 18.4772 28.4772 14 34 14H14Z"
                        fill="url(#paint1_radial_3553_23412)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M34 34H14C8.47715 34 4 29.5228 4 24C4 18.4772 8.47715 14 14 14H34M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14M34 34C28.4772 34 24 29.5228 24 24C24 18.4772 28.4772 14 34 14"
                      stroke="url(#paint2_radial_3553_23412)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M34 34H14C8.47715 34 4 29.5228 4 24C4 18.4772 8.47715 14 14 14H34M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14M34 34C28.4772 34 24 29.5228 24 24C24 18.4772 28.4772 14 34 14"
                      stroke="url(#paint3_radial_3553_23412)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23412" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(19 24) rotate(90) scale(10 15.7481)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23412" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(8.58145 24) rotate(27.0528) scale(21.9871 55.53)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23412" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(10 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23412" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(20.9576) scale(27.9582 58.2272)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Moderation
                    </div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Moderate the important aspects of your meeting via host controls.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M26 6L29.4684 15.0177C30.0324 16.4842 30.3144 17.2174 30.7529 17.8342C31.1416 18.3808 31.6192 18.8584 32.1658 19.2471C32.7826 19.6856 33.5158 19.9676 34.9823 20.5316L44 24L34.9823 27.4684C33.5158 28.0324 32.7826 28.3144 32.1658 28.7529C31.6192 29.1416 31.1416 29.6192 30.7529 30.1658C30.3144 30.7826 30.0324 31.5158 29.4684 32.9823L26 42L22.5316 32.9823C21.9676 31.5158 21.6856 30.7826 21.2471 30.1658C20.8584 29.6192 20.3808 29.1416 19.8342 28.7529C19.2174 28.3144 18.4842 28.0324 17.0177 27.4684L8 24L17.0177 20.5316C18.4842 19.9676 19.2174 19.6856 19.8342 19.2471C20.3808 18.8584 20.8584 18.3808 21.2471 17.8342C21.6856 17.2174 21.9676 16.4842 22.5316 15.0177L26 6Z"
                        fill="url(#paint0_radial_3553_23411)" fillOpacity="0.8"></path>
                      <path
                        d="M26 6L29.4684 15.0177C30.0324 16.4842 30.3144 17.2174 30.7529 17.8342C31.1416 18.3808 31.6192 18.8584 32.1658 19.2471C32.7826 19.6856 33.5158 19.9676 34.9823 20.5316L44 24L34.9823 27.4684C33.5158 28.0324 32.7826 28.3144 32.1658 28.7529C31.6192 29.1416 31.1416 29.6192 30.7529 30.1658C30.3144 30.7826 30.0324 31.5158 29.4684 32.9823L26 42L22.5316 32.9823C21.9676 31.5158 21.6856 30.7826 21.2471 30.1658C20.8584 29.6192 20.3808 29.1416 19.8342 28.7529C19.2174 28.3144 18.4842 28.0324 17.0177 27.4684L8 24L17.0177 20.5316C18.4842 19.9676 19.2174 19.6856 19.8342 19.2471C20.3808 18.8584 20.8584 18.3808 21.2471 17.8342C21.6856 17.2174 21.9676 16.4842 22.5316 15.0177L26 6Z"
                        fill="url(#paint1_radial_3553_23411)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M9 44V34M9 14V4M4 9H14M4 39H14M26 6L22.5316 15.0177C21.9676 16.4842 21.6856 17.2174 21.2471 17.8342C20.8584 18.3808 20.3808 18.8584 19.8342 19.2471C19.2174 19.6856 18.4842 19.9676 17.0177 20.5316L8 24L17.0177 27.4684C18.4842 28.0324 19.2174 28.3144 19.8342 28.7529C20.3808 29.1416 20.8584 29.6192 21.2471 30.1658C21.6856 30.7826 21.9676 31.5158 22.5316 32.9823L26 42L29.4684 32.9823C30.0324 31.5158 30.3144 30.7826 30.7529 30.1658C31.1416 29.6192 31.6192 29.1416 32.1658 28.7529C32.7826 28.3144 33.5158 28.0324 34.9823 27.4684L44 24L34.9823 20.5316C33.5158 19.9676 32.7826 19.6856 32.1658 19.2471C31.6192 18.8584 31.1416 18.3808 30.7529 17.8342C30.3144 17.2174 30.0324 16.4842 29.4684 15.0177L26 6Z"
                      stroke="url(#paint2_radial_3553_23411)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M9 44V34M9 14V4M4 9H14M4 39H14M26 6L22.5316 15.0177C21.9676 16.4842 21.6856 17.2174 21.2471 17.8342C20.8584 18.3808 20.3808 18.8584 19.8342 19.2471C19.2174 19.6856 18.4842 19.9676 17.0177 20.5316L8 24L17.0177 27.4684C18.4842 28.0324 19.2174 28.3144 19.8342 28.7529C20.3808 29.1416 20.8584 29.6192 21.2471 30.1658C21.6856 30.7826 21.9676 31.5158 22.5316 32.9823L26 42L29.4684 32.9823C30.0324 31.5158 30.3144 30.7826 30.7529 30.1658C31.1416 29.6192 31.6192 29.1416 32.1658 28.7529C32.7826 28.3144 33.5158 28.0324 34.9823 27.4684L44 24L34.9823 20.5316C33.5158 19.9676 32.7826 19.6856 32.1658 19.2471C31.6192 18.8584 31.1416 18.3808 30.7529 17.8342C30.3144 17.2174 30.0324 16.4842 29.4684 15.0177L26 6Z"
                      stroke="url(#paint3_radial_3553_23411)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23411" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(26 24) rotate(90) scale(18 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23411" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(13.4977 24) rotate(37.4532) scale(29.5997 89.0968)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23411" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(20 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23411" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(37.4532) scale(32.8886 98.9964)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Virtual
                      Backgrounds</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Maintain a professional look in your meetings from wherever you’re attending it.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M37.3676 38.8768C33.8252 42.0619 29.139 44 24.0002 44C18.8614 44 14.1752 42.0619 10.6328 38.8768C11.8495 36.0104 14.6901 34 18.0002 34H30.0002C33.3104 34 36.151 36.0104 37.3676 38.8768Z"
                        fill="url(#paint0_radial_3553_23414)" fillOpacity="0.8"></path>
                      <path
                        d="M37.3676 38.8768C33.8252 42.0619 29.139 44 24.0002 44C18.8614 44 14.1752 42.0619 10.6328 38.8768C11.8495 36.0104 14.6901 34 18.0002 34H30.0002C33.3104 34 36.151 36.0104 37.3676 38.8768Z"
                        fill="url(#paint1_radial_3553_23414)" fillOpacity="0.9"></path>
                      <path
                        d="M24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"
                        fill="url(#paint2_radial_3553_23414)" fillOpacity="0.8"></path>
                      <path
                        d="M24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"
                        fill="url(#paint3_radial_3553_23414)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M10.6326 38.8768C11.8492 36.0104 14.6898 34 18 34H30C33.3102 34 36.1507 36.0104 37.3674 38.8768M32 19C32 23.4183 28.4183 27 24 27C19.5817 27 16 23.4183 16 19C16 14.5817 19.5817 11 24 11C28.4183 11 32 14.5817 32 19ZM44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                      stroke="url(#paint4_radial_3553_23414)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M10.6326 38.8768C11.8492 36.0104 14.6898 34 18 34H30C33.3102 34 36.1507 36.0104 37.3674 38.8768M32 19C32 23.4183 28.4183 27 24 27C19.5817 27 16 23.4183 16 19C16 14.5817 19.5817 11 24 11C28.4183 11 32 14.5817 32 19ZM44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                      stroke="url(#paint5_radial_3553_23414)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23414" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24.0002 27.5) rotate(90) scale(16.5 14.0341)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23414" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(14.7156 27.5) rotate(43.3968) scale(24.0158 74.7547)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23414" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24.0002 27.5) rotate(90) scale(16.5 14.0341)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23414" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(14.7156 27.5) rotate(43.3968) scale(24.0158 74.7547)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint4_radial_3553_23414" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(20 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint5_radial_3553_23414" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(37.4532) scale(32.8886 98.9964)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Default
                      Avatars</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Personalize your identity with default avatars when your video is off.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M4 18.4C4 16.1598 4 15.0397 4.43597 14.184C4.81947 13.4314 5.43139 12.8195 6.18404 12.436C7.03968 12 8.15979 12 10.4 12H37.6C39.8402 12 40.9603 12 41.816 12.436C42.5686 12.8195 43.1805 13.4314 43.564 14.184C44 15.0397 44 16.1598 44 18.4V29.6C44 31.8402 44 32.9603 43.564 33.816C43.1805 34.5686 42.5686 35.1805 41.816 35.564C40.9603 36 39.8402 36 37.6 36H10.4C8.15979 36 7.03968 36 6.18404 35.564C5.43139 35.1805 4.81947 34.5686 4.43597 33.816C4 32.9603 4 31.8402 4 29.6V18.4Z"
                        fill="url(#paint0_radial_3553_23413)" fillOpacity="0.8"></path>
                      <path
                        d="M4 18.4C4 16.1598 4 15.0397 4.43597 14.184C4.81947 13.4314 5.43139 12.8195 6.18404 12.436C7.03968 12 8.15979 12 10.4 12H37.6C39.8402 12 40.9603 12 41.816 12.436C42.5686 12.8195 43.1805 13.4314 43.564 14.184C44 15.0397 44 16.1598 44 18.4V29.6C44 31.8402 44 32.9603 43.564 33.816C43.1805 34.5686 42.5686 35.1805 41.816 35.564C40.9603 36 39.8402 36 37.6 36H10.4C8.15979 36 7.03968 36 6.18404 35.564C5.43139 35.1805 4.81947 34.5686 4.43597 33.816C4 32.9603 4 31.8402 4 29.6V18.4Z"
                        fill="url(#paint1_radial_3553_23413)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M14 29H34M12 20H12.02M20 20H20.02M28 20H28.02M36 20H36.02M10.4 36H37.6C39.8402 36 40.9603 36 41.816 35.564C42.5686 35.1805 43.1805 34.5686 43.564 33.816C44 32.9603 44 31.8402 44 29.6V18.4C44 16.1598 44 15.0397 43.564 14.184C43.1805 13.4314 42.5686 12.8195 41.816 12.436C40.9603 12 39.8402 12 37.6 12H10.4C8.15979 12 7.03968 12 6.18404 12.436C5.43139 12.8195 4.81947 13.4314 4.43597 14.184C4 15.0397 4 16.1598 4 18.4V29.6C4 31.8402 4 32.9603 4.43597 33.816C4.81947 34.5686 5.43139 35.1805 6.18404 35.564C7.03968 36 8.15979 36 10.4 36Z"
                      stroke="url(#paint2_radial_3553_23413)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M14 29H34M12 20H12.02M20 20H20.02M28 20H28.02M36 20H36.02M10.4 36H37.6C39.8402 36 40.9603 36 41.816 35.564C42.5686 35.1805 43.1805 34.5686 43.564 33.816C44 32.9603 44 31.8402 44 29.6V18.4C44 16.1598 44 15.0397 43.564 14.184C43.1805 13.4314 42.5686 12.8195 41.816 12.436C40.9603 12 39.8402 12 37.6 12H10.4C8.15979 12 7.03968 12 6.18404 12.436C5.43139 12.8195 4.81947 13.4314 4.43597 14.184C4 15.0397 4 16.1598 4 18.4V29.6C4 31.8402 4 32.9603 4.43597 33.816C4.81947 34.5686 5.43139 35.1805 6.18404 35.564C7.03968 36 8.15979 36 10.4 36Z"
                      stroke="url(#paint3_radial_3553_23413)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23413" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(12 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23413" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(24.6844) scale(28.7343 67.9854)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23413" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(12 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23413" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(24.6844) scale(28.7343 67.9854)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Keyboard
                      Shortcuts</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Shortcuts for all the essential meeting functions.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M26.0002 4L8.18712 25.3757C7.48951 26.2128 7.1407 26.6314 7.13537 26.9849C7.13073 27.2922 7.26767 27.5846 7.50673 27.7778C7.78171 28 8.32657 28 9.41628 28H24.0002L22.0002 44L39.8133 22.6243C40.5109 21.7872 40.8597 21.3686 40.8651 21.0151C40.8697 20.7078 40.7327 20.4154 40.4937 20.2222C40.2187 20 39.6739 20 38.5841 20H24.0002L26.0002 4Z"
                        fill="url(#paint0_radial_3553_23408)" fillOpacity="0.8"></path>
                      <path
                        d="M26.0002 4L8.18712 25.3757C7.48951 26.2128 7.1407 26.6314 7.13537 26.9849C7.13073 27.2922 7.26767 27.5846 7.50673 27.7778C7.78171 28 8.32657 28 9.41628 28H24.0002L22.0002 44L39.8133 22.6243C40.5109 21.7872 40.8597 21.3686 40.8651 21.0151C40.8697 20.7078 40.7327 20.4154 40.4937 20.2222C40.2187 20 39.6739 20 38.5841 20H24.0002L26.0002 4Z"
                        fill="url(#paint1_radial_3553_23408)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M26 4L8.18691 25.3757C7.48929 26.2128 7.14048 26.6314 7.13515 26.9849C7.13052 27.2922 7.26746 27.5846 7.50651 27.7778C7.78149 28 8.32635 28 9.41607 28H24L22 44L39.8131 22.6243C40.5107 21.7872 40.8595 21.3686 40.8648 21.0151C40.8695 20.7078 40.7325 20.4154 40.4935 20.2222C40.2185 20 39.6736 20 38.5839 20H24L26 4Z"
                      stroke="url(#paint2_radial_3553_23408)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M26 4L8.18691 25.3757C7.48929 26.2128 7.14048 26.6314 7.13515 26.9849C7.13052 27.2922 7.26746 27.5846 7.50651 27.7778C7.78149 28 8.32635 28 9.41607 28H24L22 44L39.8131 22.6243C40.5107 21.7872 40.8595 21.3686 40.8648 21.0151C40.8695 20.7078 40.7325 20.4154 40.4935 20.2222C40.2185 20 39.6736 20 38.5839 20H24L26 4Z"
                      stroke="url(#paint3_radial_3553_23408)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3553_23408" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24.0002 24) rotate(90) scale(20 17.7061)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3553_23408" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12.2863 24) rotate(42.2529) scale(29.744 92.304)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3553_23408" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(20 17.7061)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3553_23408" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12.2861 24) rotate(42.2529) scale(29.744 92.304)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Bandwidth
                      Saver Mode</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Low on data? Save your internet bandwidth with bandwidth saver.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:py-24 md:px-20 px-4 py-16">
              <div className="text-center md:text-center text-start">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Reach the Masses</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans pb-1  mx-auto text-[28px] pb-1">
                  Livestreaming</div>
              </div>
              <div className=" w-full flex flex-col items-center justify-center md:my-20 my-12 "><img alt="ProdMultiStream"
                srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProdMultiStream.png&amp;w=1920&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProdMultiStream.png&amp;w=3840&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FProdMultiStream.png&amp;w=3840&amp;q=100" width="1280" height="560"
                decoding="async" data-nimg="1" />
                <div className="mt-4 flex md:items-center md:justify-between w-full md:flex-row flex-col items-start">
                  <div className="text-gray-500 font-inter font-normal text-xl max-w-3xl">Messari, a leading crypto analytics
                    firm has started using D-App for streaming their analyst calls with the top protocol founders.
                  </div><button type="button"
                    className="flex items-center bg-custom-3 py-3 px-5 cursor-pointer mt-3 md:mt-0 rounded-lg border border-custom-5 text-gray-300 font-inter text-base font-semibold hover:bg-custom-5 duration-300 transition-all ease-in-out"><svg
                      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_3592_33436)">
                        <path
                          d="M18.6238 5.9734C18.4168 5.19655 17.807 4.58482 17.0325 4.3772C15.6288 3.99989 10 3.99989 10 3.99989C10 3.99989 4.37125 3.99989 2.96751 4.3772C2.19307 4.58482 1.58311 5.19655 1.37613 5.9734C1 7.38137 1 10.319 1 10.319C1 10.319 1 13.2567 1.37613 14.6648C1.58311 15.4415 2.19307 16.0532 2.96751 16.261C4.37125 16.6382 10 16.6382 10 16.6382C10 16.6382 15.6288 16.6382 17.0325 16.261C17.807 16.0532 18.4168 15.4415 18.6238 14.6648C19 13.2567 19 10.319 19 10.319C19 10.319 19 7.38137 18.6238 5.9734Z"
                          fill="#ED1D24"></path>
                        <path d="M8.15906 12.9863L12.8636 10.3193L8.15906 7.652V12.9863Z" fill="white"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3592_33436">
                          <rect width="18" height="12.6383" fill="white" transform="translate(1 4)"></rect>
                        </clipPath>
                      </defs>
                    </svg><span className="ml-2">Watch it in action</span></button>
                </div>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-14 place-items-center">
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                        fill="url(#paint0_radial_3558_25294)" fillOpacity="0.8"></path>
                      <path
                        d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                        fill="url(#paint1_radial_3558_25294)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M32.4853 15.5148C37.1716 20.2011 37.1716 27.799 32.4853 32.4853M15.5147 32.4853C10.8284 27.799 10.8284 20.201 15.5147 15.5147M9.85786 38.1422C2.04738 30.3317 2.04738 17.6684 9.85786 9.85791M38.1421 9.858C45.9526 17.6685 45.9526 30.3318 38.1421 38.1423M28 24C28 26.2092 26.2091 28 24 28C21.7909 28 20 26.2092 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z"
                      stroke="url(#paint2_radial_3558_25294)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M32.4853 15.5148C37.1716 20.2011 37.1716 27.799 32.4853 32.4853M15.5147 32.4853C10.8284 27.799 10.8284 20.201 15.5147 15.5147M9.85786 38.1422C2.04738 30.3317 2.04738 17.6684 9.85786 9.85791M38.1421 9.858C45.9526 17.6685 45.9526 30.3318 38.1421 38.1423M28 24C28 26.2092 26.2091 28 24 28C21.7909 28 20 26.2092 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z"
                      stroke="url(#paint3_radial_3558_25294)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3558_25294" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(4 4.1995)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3558_25294" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(21.2217 24) rotate(37.4532) scale(6.57772 19.7993)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3558_25294" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24.0001) rotate(90) scale(14.1422 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3558_25294" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24.0001) rotate(28.443) scale(29.6928 77.5355)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">
                      Multistreaming</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Reach wider audience by streaming simultaneously via Youtube, Twitch, and Livepeer.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M44 28.4C44 26.1598 44 25.0397 43.564 24.184C43.1805 23.4314 42.5686 22.8195 41.816 22.436C40.9603 22 39.8402 22 37.6 22H26.4C24.1598 22 23.0397 22 22.184 22.436C21.4314 22.8195 20.8195 23.4314 20.436 24.184C20 25.0397 20 26.1598 20 28.4V33.4286C20 35.6688 20 36.7889 20.436 37.6445C20.8195 38.3972 21.4314 39.0091 22.184 39.3926C23.0397 39.8286 24.1598 39.8286 26.4 39.8286H29.9938C30.7391 39.8286 31.1117 39.8286 31.4711 39.8948C31.7902 39.9536 32.1009 40.051 32.3964 40.1849C32.7294 40.3357 33.0353 40.5484 33.6472 40.9738L38 44V39.8286C39.8638 39.8286 40.7956 39.8286 41.5307 39.5241C42.5108 39.1181 43.2895 38.3394 43.6955 37.3593C44 36.6242 44 35.6923 44 33.8286V28.4Z"
                        fill="url(#paint0_radial_3592_33452)" fillOpacity="0.8"></path>
                      <path
                        d="M44 28.4C44 26.1598 44 25.0397 43.564 24.184C43.1805 23.4314 42.5686 22.8195 41.816 22.436C40.9603 22 39.8402 22 37.6 22H26.4C24.1598 22 23.0397 22 22.184 22.436C21.4314 22.8195 20.8195 23.4314 20.436 24.184C20 25.0397 20 26.1598 20 28.4V33.4286C20 35.6688 20 36.7889 20.436 37.6445C20.8195 38.3972 21.4314 39.0091 22.184 39.3926C23.0397 39.8286 24.1598 39.8286 26.4 39.8286H29.9938C30.7391 39.8286 31.1117 39.8286 31.4711 39.8948C31.7902 39.9536 32.1009 40.051 32.3964 40.1849C32.7294 40.3357 33.0353 40.5484 33.6472 40.9738L38 44V39.8286C39.8638 39.8286 40.7956 39.8286 41.5307 39.5241C42.5108 39.1181 43.2895 38.3394 43.6955 37.3593C44 36.6242 44 35.6923 44 33.8286V28.4Z"
                        fill="url(#paint1_radial_3592_33452)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M20 30L13.8495 36.2274C12.9916 37.096 12.5626 37.5304 12.1939 37.561C11.874 37.5876 11.5608 37.459 11.3519 37.2153C11.1111 36.9344 11.1111 36.324 11.1111 35.1031V31.9832C11.1111 30.8879 10.2141 30.0954 9.13041 29.9366V29.9366C6.50749 29.5524 4.44755 27.4925 4.06335 24.8696C4 24.4371 4 23.921 4 22.8889V13.6C4 10.2397 4 8.55953 4.65396 7.27606C5.2292 6.14708 6.14708 5.2292 7.27606 4.65396C8.55953 4 10.2397 4 13.6 4H28.4C31.7603 4 33.4405 4 34.7239 4.65396C35.8529 5.2292 36.7708 6.14708 37.346 7.27606C38 8.55953 38 10.2397 38 13.6V22M38 44L33.6472 40.9738C33.0353 40.5484 32.7294 40.3357 32.3964 40.1849C32.1009 40.051 31.7902 39.9536 31.4711 39.8948C31.1117 39.8286 30.7391 39.8286 29.9938 39.8286H26.4C24.1598 39.8286 23.0397 39.8286 22.184 39.3926C21.4314 39.0091 20.8195 38.3972 20.436 37.6445C20 36.7889 20 35.6688 20 33.4286V28.4C20 26.1598 20 25.0397 20.436 24.184C20.8195 23.4314 21.4314 22.8195 22.184 22.436C23.0397 22 24.1598 22 26.4 22H37.6C39.8402 22 40.9603 22 41.816 22.436C42.5686 22.8195 43.1805 23.4314 43.564 24.184C44 25.0397 44 26.1598 44 28.4V33.8286C44 35.6923 44 36.6242 43.6955 37.3593C43.2895 38.3394 42.5108 39.1181 41.5307 39.5241C40.7957 39.8286 39.8638 39.8286 38 39.8286V44Z"
                      stroke="url(#paint2_radial_3592_33452)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M20 30L13.8495 36.2274C12.9916 37.096 12.5626 37.5304 12.1939 37.561C11.874 37.5876 11.5608 37.459 11.3519 37.2153C11.1111 36.9344 11.1111 36.324 11.1111 35.1031V31.9832C11.1111 30.8879 10.2141 30.0954 9.13041 29.9366V29.9366C6.50749 29.5524 4.44755 27.4925 4.06335 24.8696C4 24.4371 4 23.921 4 22.8889V13.6C4 10.2397 4 8.55953 4.65396 7.27606C5.2292 6.14708 6.14708 5.2292 7.27606 4.65396C8.55953 4 10.2397 4 13.6 4H28.4C31.7603 4 33.4405 4 34.7239 4.65396C35.8529 5.2292 36.7708 6.14708 37.346 7.27606C38 8.55953 38 10.2397 38 13.6V22M38 44L33.6472 40.9738C33.0353 40.5484 32.7294 40.3357 32.3964 40.1849C32.1009 40.051 31.7902 39.9536 31.4711 39.8948C31.1117 39.8286 30.7391 39.8286 29.9938 39.8286H26.4C24.1598 39.8286 23.0397 39.8286 22.184 39.3926C21.4314 39.0091 20.8195 38.3972 20.436 37.6445C20 36.7889 20 35.6688 20 33.4286V28.4C20 26.1598 20 25.0397 20.436 24.184C20.8195 23.4314 21.4314 22.8195 22.184 22.436C23.0397 22 24.1598 22 26.4 22H37.6C39.8402 22 40.9603 22 41.816 22.436C42.5686 22.8195 43.1805 23.4314 43.564 24.184C44 25.0397 44 26.1598 44 28.4V33.8286C44 35.6923 44 36.6242 43.6955 37.3593C43.2895 38.3394 42.5108 39.1181 41.5307 39.5241C40.7957 39.8286 39.8638 39.8286 38 39.8286V44Z"
                      stroke="url(#paint3_radial_3592_33452)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_33452" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(32 33) rotate(90) scale(11 12.5985)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_33452" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(23.6652 33) rotate(35.0764) scale(19.1415 56.131)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_33452" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(20 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_33452" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 24) rotate(37.4532) scale(32.8886 98.9964)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Live Chat
                    </div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Have engaging conversations with your viewers in real-time.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M30.101 18H11C8.23858 18 6 15.7614 6 13C6 10.2386 8.23858 8 11 8H30.101C28.8045 9.27052 28 11.0413 28 13C28 14.9587 28.8045 16.7295 30.101 18Z"
                        fill="url(#paint0_radial_3592_33459)" fillOpacity="0.8"></path>
                      <path
                        d="M30.101 18H11C8.23858 18 6 15.7614 6 13C6 10.2386 8.23858 8 11 8H30.101C28.8045 9.27052 28 11.0413 28 13C28 14.9587 28.8045 16.7295 30.101 18Z"
                        fill="url(#paint1_radial_3592_33459)" fillOpacity="0.9"></path>
                      <path
                        d="M17.8994 40H37.0004C39.7619 40 42.0004 37.7614 42.0004 35C42.0004 32.2386 39.7619 30 37.0004 30H17.8994C19.196 31.2705 20.0004 33.0413 20.0004 35C20.0004 36.9587 19.196 38.7295 17.8994 40Z"
                        fill="url(#paint2_radial_3592_33459)" fillOpacity="0.8"></path>
                      <path
                        d="M17.8994 40H37.0004C39.7619 40 42.0004 37.7614 42.0004 35C42.0004 32.2386 39.7619 30 37.0004 30H17.8994C19.196 31.2705 20.0004 33.0413 20.0004 35C20.0004 36.9587 19.196 38.7295 17.8994 40Z"
                        fill="url(#paint3_radial_3592_33459)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M30.101 18H11C8.23858 18 6 15.7614 6 13C6 10.2386 8.23858 8 11 8H30.101M17.899 40H37C39.7614 40 42 37.7614 42 35C42 32.2386 39.7614 30 37 30H17.899M6 35C6 38.866 9.13401 42 13 42C16.866 42 20 38.866 20 35C20 31.134 16.866 28 13 28C9.13401 28 6 31.134 6 35ZM42 13C42 16.866 38.866 20 35 20C31.134 20 28 16.866 28 13C28 9.13401 31.134 6 35 6C38.866 6 42 9.13401 42 13Z"
                      stroke="url(#paint4_radial_3592_33459)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M30.101 18H11C8.23858 18 6 15.7614 6 13C6 10.2386 8.23858 8 11 8H30.101M17.899 40H37C39.7614 40 42 37.7614 42 35C42 32.2386 39.7614 30 37 30H17.899M6 35C6 38.866 9.13401 42 13 42C16.866 42 20 38.866 20 35C20 31.134 16.866 28 13 28C9.13401 28 6 31.134 6 35ZM42 13C42 16.866 38.866 20 35 20C31.134 20 28 16.866 28 13C28 9.13401 31.134 6 35 6C38.866 6 42 9.13401 42 13Z"
                      stroke="url(#paint5_radial_3592_33459)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_33459" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24.0002 24) rotate(90) scale(16 18.898)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_33459" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4978 24) rotate(34.2513) scale(28.4281 82.4621)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_33459" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24.0002 24) rotate(90) scale(16 18.898)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_33459" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4978 24) rotate(34.2513) scale(28.4281 82.4621)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint4_radial_3592_33459" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(18 18.8977)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint5_radial_3592_33459" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.4977 24) rotate(37.4532) scale(29.5997 89.0968)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">Moderation
                    </div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Moderate your livestream by enabling/disabling chat, or restricting chat for guest viewers.</div>
                  </div>
                </div>
                <div
                  className="flex  flex-col justify-start mx-auto md:items-start items-center  md:h-60 h-full md:w-[302px] w-full cardStyles rounded-2xl p-6 undefined">
                  <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.12">
                      <path
                        d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
                        fill="url(#paint0_radial_3592_33465)" fillOpacity="0.8"></path>
                      <path
                        d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
                        fill="url(#paint1_radial_3592_33465)" fillOpacity="0.9"></path>
                    </g>
                    <path
                      d="M13.8364 6.7713C16.8148 5.01049 20.2894 4 24 4C35.0457 4 44 12.9543 44 24C44 24.0663 43.9997 24.1325 43.999 24.1986M6.76228 13.8517C5.00704 16.8267 4 20.2957 4 24C4 33.3192 10.3739 41.1497 19 43.3699M41.4153 33.8411C38.7745 38.5044 34.3147 42.002 29 43.3699M28.1786 12.7476C26.8773 12.2641 25.4695 12 24 12C17.3726 12 12 17.3726 12 24C12 25.4775 12.267 26.8926 12.7554 28.1998M35.2502 19.8153C35.735 21.1183 36 22.5282 36 24C36 30.6274 30.6274 36 24 36C22.5403 36 21.1414 35.7394 19.8475 35.2621M24 20V28"
                      stroke="url(#paint2_radial_3592_33465)" strokeOpacity="0.8" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                      d="M13.8364 6.7713C16.8148 5.01049 20.2894 4 24 4C35.0457 4 44 12.9543 44 24C44 24.0663 43.9997 24.1325 43.999 24.1986M6.76228 13.8517C5.00704 16.8267 4 20.2957 4 24C4 33.3192 10.3739 41.1497 19 43.3699M41.4153 33.8411C38.7745 38.5044 34.3147 42.002 29 43.3699M28.1786 12.7476C26.8773 12.2641 25.4695 12 24 12C17.3726 12 12 17.3726 12 24C12 25.4775 12.267 26.8926 12.7554 28.1998M35.2502 19.8153C35.735 21.1183 36 22.5282 36 24C36 30.6274 30.6274 36 24 36C22.5403 36 21.1414 35.7394 19.8475 35.2621M24 20V28"
                      stroke="url(#paint3_radial_3592_33465)" strokeOpacity="0.9" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <radialGradient id="paint0_radial_3592_33465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 24) rotate(90) scale(12 12.5985)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_3592_33465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(15.6652 24) rotate(37.4532) scale(19.7332 59.3979)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                      <radialGradient id="paint2_radial_3592_33465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(24 23.685) rotate(90) scale(19.685 20.9975)">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.6"></stop>
                      </radialGradient>
                      <radialGradient id="paint3_radial_3592_33465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.1086 23.685) rotate(37.015) scale(32.698 98.0051)">
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0.1"></stop>
                      </radialGradient>
                    </defs>
                  </svg></div>
                  <div className="mt-6">
                    <div className="text-gray-200 text-xl font-semibold font-inter text-center md:text-start mb-3">
                      Token-Gating</div>
                    <div className="text-gray-400 text-base font-normal font-inter mt-2 max-w-xs text-center md:text-start">
                      Token-gate your livestreams similar to token-gated meetings via NFTs, Tokens &amp; POAPS.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:py-16 md:px-20 px-4 py-12">
              <div className="text-center text-start md:text-center">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Same Meetings, Different Device</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans undefined  mx-auto text-[28px] pb-1">
                  For Lazy Days</div>
              </div>
              <div className="md:flex hidden md:mt-20 md:mb-10 items-center justify-center"><img alt="meeting_space"
                srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FMeetingSpace.png&amp;w=1080&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FMeetingSpace.png&amp;w=2048&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FMeetingSpace.png&amp;w=2048&amp;q=100" width="1000" height="720"
                decoding="async" data-nimg="1" /></div>
              <div className="md:hidden flex flex-col my-12"><img alt="main_image"
                srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2FMain.png&amp;w=640&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2FMain.png&amp;w=1080&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2FMain.png&amp;w=1080&amp;q=100" width="500" height="200"
                decoding="async" data-nimg="1" />
                <div className="w-fit overflow-x-auto mt-6 flex items-center gap-6 makeTheHost"><img alt="meeting-img-1"
                  srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F1.png&amp;w=256&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F1.png&amp;w=640&amp;q=75 2x"
                  src="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F1.png&amp;w=640&amp;q=75" width="250" height="300"
                  decoding="async" data-nimg="1" loading="lazy" /><img alt="meeting-img-2"
                    srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F2.png&amp;w=256&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F2.png&amp;w=640&amp;q=75 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F2.png&amp;w=640&amp;q=75" width="250" height="300"
                    decoding="async" data-nimg="1" loading="lazy" /><img alt="meeting-img-3"
                      srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F3.png&amp;w=256&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F3.png&amp;w=640&amp;q=75 2x"
                      src="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F3.png&amp;w=640&amp;q=75" width="250" height="300"
                      decoding="async" data-nimg="1" loading="lazy" /><img alt="meeting-img-4"
                        srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F4.png&amp;w=256&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F4.png&amp;w=640&amp;q=75 2x"
                        src="https://huddle01.com/_next/image?url=%2Fimages%2FProduct%2F4.png&amp;w=640&amp;q=75" width="250" height="300"
                        decoding="async" data-nimg="1" loading="lazy" /></div>
              </div>
              <div className="text-gray-300 font-inter text-xl text-center font-normal">All the same web3 and essential
                features are also at your fingertips, now.</div>
              <div className="flex items-center justify-center flex-row md:space-x-6 md:mb-8 gap-4 md:gap-0 mt-6">
                <div role="presentation" className="cursor-pointer"><svg width="162" height="48" viewBox="0 0 162 48"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="161" height="47" rx="7.5" fill="#121214"></rect>
                  <path
                    d="M29.7226 24.3608C29.7355 23.3592 30.0015 22.3771 30.496 21.506C30.9904 20.6348 31.6972 19.9029 32.5505 19.3783C32.0084 18.6041 31.2932 17.967 30.4619 17.5175C29.6305 17.0681 28.7057 16.8187 27.7611 16.7891C25.746 16.5776 23.7924 17.9949 22.7656 17.9949C21.7189 17.9949 20.1379 16.8101 18.4354 16.8451C17.3342 16.8807 16.261 17.2009 15.3203 17.7746C14.3797 18.3483 13.6037 19.1558 13.0679 20.1186C10.7471 24.1367 12.4782 30.0419 14.7013 33.2899C15.8136 34.8803 17.1135 36.6568 18.8145 36.5938C20.479 36.5248 21.1006 35.5324 23.1098 35.5324C25.1003 35.5324 25.6835 36.5938 27.419 36.5538C29.205 36.5248 30.3303 34.9563 31.4036 33.3508C32.2028 32.2176 32.8177 30.9651 33.2257 29.6398C32.188 29.2009 31.3025 28.4663 30.6796 27.5275C30.0566 26.5888 29.7238 25.4874 29.7226 24.3608Z"
                    fill="white"></path>
                  <path
                    d="M26.4447 14.6531C27.4185 13.484 27.8983 11.9814 27.7821 10.4644C26.2943 10.6206 24.92 11.3317 23.933 12.4559C23.4505 13.0051 23.0809 13.644 22.8454 14.3361C22.6099 15.0283 22.5131 15.76 22.5606 16.4896C23.3047 16.4972 24.0409 16.3359 24.7137 16.0178C25.3865 15.6997 25.9784 15.2331 26.4447 14.6531Z"
                    fill="white"></path>
                  <path
                    d="M50.7626 32.5677H45.0825L43.7185 36.5954H41.3126L46.6927 21.6938H49.1923L54.5724 36.5954H52.1255L50.7626 32.5677ZM45.6708 30.7091H50.1732L47.9537 24.1724H47.8916L45.6708 30.7091Z"
                    fill="white"></path>
                  <path
                    d="M66.1915 31.1637C66.1915 34.5399 64.3845 36.709 61.6576 36.709C60.9668 36.7452 60.2798 36.586 59.6752 36.2499C59.0707 35.9137 58.573 35.4141 58.2392 34.8082H58.1876V40.1895H55.9575V25.7309H58.1161V27.5379H58.1572C58.5063 26.935 59.0124 26.438 59.6215 26.0997C60.2307 25.7615 60.9202 25.5948 61.6165 25.6172C64.3739 25.6172 66.1915 27.7969 66.1915 31.1637ZM63.8993 31.1637C63.8993 28.9641 62.7626 27.518 61.0282 27.518C59.3243 27.518 58.1783 28.9946 58.1783 31.1637C58.1783 33.3528 59.3243 34.8188 61.0282 34.8188C62.7626 34.8188 63.8993 33.3833 63.8993 31.1637Z"
                    fill="white"></path>
                  <path
                    d="M78.1493 31.1637C78.1493 34.5399 76.3423 36.709 73.6153 36.709C72.9245 36.7452 72.2375 36.586 71.633 36.2499C71.0284 35.9137 70.5308 35.4141 70.197 34.8082H70.1454V40.1895H67.9153V25.7309H70.0739V27.5379H70.1149C70.464 26.935 70.9701 26.4379 71.5793 26.0997C72.1884 25.7615 72.8779 25.5948 73.5743 25.6172C76.3317 25.6172 78.1493 27.7969 78.1493 31.1637ZM75.8571 31.1637C75.8571 28.9641 74.7204 27.518 72.986 27.518C71.2821 27.518 70.136 28.9946 70.136 31.1637C70.136 33.3528 71.2821 34.8188 72.986 34.8188C74.7204 34.8188 75.8571 33.3833 75.8571 31.1637H75.8571Z"
                    fill="white"></path>
                  <path
                    d="M86.0525 32.4434C86.2177 33.9212 87.6533 34.8914 89.615 34.8914C91.4947 34.8914 92.847 33.9211 92.847 32.5887C92.847 31.432 92.0314 30.7395 90.1002 30.2649L88.1689 29.7996C85.4326 29.1387 84.1623 27.859 84.1623 25.7824C84.1623 23.2113 86.4029 21.4453 89.5845 21.4453C92.7333 21.4453 94.892 23.2113 94.9646 25.7824H92.7134C92.5787 24.2953 91.3494 23.3977 89.5529 23.3977C87.7564 23.3977 86.5271 24.3059 86.5271 25.6277C86.5271 26.6813 87.3122 27.3012 89.2329 27.7757L90.8747 28.1789C93.9322 28.9019 95.2025 30.1301 95.2025 32.3097C95.2025 35.0976 92.9818 36.8437 89.4497 36.8437C86.145 36.8437 83.9138 35.1386 83.7697 32.4433L86.0525 32.4434Z"
                    fill="white"></path>
                  <path
                    d="M100.015 23.1599V25.731H102.081V27.497H100.015V33.4865C100.015 34.4169 100.429 34.8505 101.337 34.8505C101.583 34.8463 101.827 34.829 102.071 34.7989V36.5544C101.663 36.6307 101.247 36.6653 100.832 36.6575C98.6326 36.6575 97.7747 35.8314 97.7747 33.7243V27.497H96.1951V25.731H97.7747V23.1599H100.015Z"
                    fill="white"></path>
                  <path
                    d="M103.278 31.1638C103.278 27.7455 105.291 25.5974 108.431 25.5974C111.581 25.5974 113.585 27.7454 113.585 31.1638C113.585 34.5916 111.591 36.7302 108.431 36.7302C105.271 36.7302 103.278 34.5915 103.278 31.1638ZM111.312 31.1638C111.312 28.8189 110.238 27.4349 108.431 27.4349C106.624 27.4349 105.55 28.8294 105.55 31.1638C105.55 33.5181 106.624 34.8916 108.431 34.8916C110.238 34.8916 111.312 33.5181 111.312 31.1638H111.312Z"
                    fill="white"></path>
                  <path
                    d="M115.423 25.7308H117.55V27.58H117.602C117.746 27.0025 118.084 26.4921 118.56 26.1346C119.036 25.7771 119.62 25.5944 120.215 25.6171C120.472 25.6162 120.728 25.6441 120.979 25.7003V27.7863C120.655 27.6871 120.316 27.6416 119.977 27.6515C119.653 27.6384 119.33 27.6955 119.03 27.8189C118.73 27.9424 118.461 28.1293 118.24 28.3668C118.019 28.6042 117.853 28.8867 117.751 29.1947C117.65 29.5027 117.616 29.8289 117.653 30.1511V36.5952H115.423L115.423 25.7308Z"
                    fill="white"></path>
                  <path
                    d="M131.261 33.4044C130.961 35.3767 129.04 36.7302 126.583 36.7302C123.422 36.7302 121.461 34.6126 121.461 31.2154C121.461 27.8076 123.433 25.5974 126.489 25.5974C129.495 25.5974 131.385 27.6623 131.385 30.9564V31.7205H123.712V31.8552C123.676 32.2551 123.727 32.6579 123.859 33.0369C123.991 33.4159 124.202 33.7624 124.479 34.0535C124.755 34.3445 125.09 34.5734 125.462 34.725C125.834 34.8766 126.233 34.9473 126.635 34.9326C127.162 34.9819 127.69 34.8599 128.142 34.5846C128.594 34.3092 128.946 33.8953 129.144 33.4044L131.261 33.4044ZM123.722 30.1619H129.154C129.174 29.8023 129.12 29.4426 128.994 29.1051C128.868 28.7677 128.674 28.4598 128.424 28.2009C128.174 27.942 127.873 27.7376 127.54 27.6005C127.207 27.4635 126.849 27.3967 126.489 27.4044C126.126 27.4023 125.766 27.4721 125.43 27.6097C125.094 27.7474 124.789 27.9503 124.531 28.2067C124.274 28.463 124.07 28.7678 123.931 29.1034C123.792 29.439 123.721 29.7987 123.722 30.1619V30.1619Z"
                    fill="white"></path>
                  <path
                    d="M45.3914 10.4774C45.8589 10.4438 46.3281 10.5144 46.765 10.6842C47.2019 10.8539 47.5958 11.1185 47.9181 11.4588C48.2404 11.7992 48.4831 12.2068 48.6288 12.6523C48.7745 13.0978 48.8195 13.5702 48.7605 14.0352C48.7605 16.3227 47.5242 17.6376 45.3914 17.6376H42.8051V10.4774H45.3914ZM43.9172 16.625H45.2672C45.6012 16.6449 45.9356 16.5902 46.2458 16.4646C46.5561 16.3391 46.8344 16.1459 47.0606 15.8993C47.2868 15.6526 47.4551 15.3586 47.5534 15.0386C47.6516 14.7187 47.6773 14.3809 47.6285 14.0498C47.6737 13.72 47.6455 13.3842 47.5457 13.0666C47.446 12.749 47.2772 12.4574 47.0516 12.2127C46.8259 11.968 46.5489 11.7762 46.2404 11.6512C45.9319 11.5261 45.5995 11.4708 45.2672 11.4892H43.9172V16.625Z"
                    fill="white"></path>
                  <path
                    d="M50.0168 14.9333C49.9828 14.5782 50.0235 14.2199 50.1361 13.8814C50.2487 13.5429 50.4308 13.2317 50.6707 12.9678C50.9107 12.7038 51.2031 12.4929 51.5293 12.3485C51.8556 12.2042 52.2083 12.1296 52.5651 12.1296C52.9218 12.1296 53.2746 12.2042 53.6008 12.3485C53.927 12.4929 54.2195 12.7038 54.4594 12.9678C54.6993 13.2317 54.8814 13.5429 54.994 13.8814C55.1067 14.2199 55.1473 14.5782 55.1133 14.9333C55.1479 15.2888 55.1078 15.6475 54.9955 15.9866C54.8832 16.3256 54.7012 16.6374 54.4612 16.9019C54.2212 17.1664 53.9285 17.3777 53.602 17.5224C53.2754 17.667 52.9222 17.7417 52.5651 17.7417C52.2079 17.7417 51.8547 17.667 51.5282 17.5224C51.2016 17.3777 50.9089 17.1664 50.6689 16.9019C50.429 16.6374 50.247 16.3256 50.1346 15.9866C50.0223 15.6475 49.9822 15.2888 50.0168 14.9333ZM54.0164 14.9333C54.0164 13.762 53.4902 13.077 52.5668 13.077C51.6399 13.077 51.1184 13.762 51.1184 14.9333C51.1184 16.114 51.6399 16.7937 52.5668 16.7937C53.4903 16.7936 54.0164 16.1093 54.0164 14.9333H54.0164Z"
                    fill="white"></path>
                  <path
                    d="M61.8879 17.6374H60.7816L59.6648 13.6577H59.5805L58.4683 17.6374H57.3726L55.8832 12.2339H56.9648L57.9328 16.3571H58.0125L59.1234 12.2339H60.1465L61.2574 16.3571H61.3418L62.3051 12.2339H63.3715L61.8879 17.6374Z"
                    fill="white"></path>
                  <path
                    d="M64.6242 12.2339H65.6507V13.0923H65.7304C65.8656 12.784 66.0936 12.5255 66.3826 12.353C66.6717 12.1804 67.0074 12.1023 67.3429 12.1296C67.6058 12.1098 67.8698 12.1495 68.1153 12.2456C68.3608 12.3417 68.5816 12.4918 68.7612 12.6848C68.9408 12.8778 69.0747 13.1088 69.153 13.3606C69.2312 13.6124 69.2518 13.8785 69.2132 14.1393V17.6373H68.1468V14.4071C68.1468 13.5388 67.7695 13.1069 66.9808 13.1069C66.8023 13.0986 66.6241 13.129 66.4584 13.196C66.2927 13.263 66.1435 13.365 66.021 13.4951C65.8984 13.6251 65.8054 13.7802 65.7484 13.9495C65.6914 14.1189 65.6716 14.2986 65.6905 14.4763V17.6374H64.6241L64.6242 12.2339Z"
                    fill="white"></path>
                  <path d="M70.9125 10.1245H71.9789V17.6374H70.9125V10.1245Z" fill="white"></path>
                  <path
                    d="M73.4612 14.9334C73.4273 14.5783 73.4679 14.22 73.5806 13.8815C73.6932 13.543 73.8754 13.2318 74.1153 12.9678C74.3553 12.7038 74.6477 12.4929 74.974 12.3485C75.3002 12.2042 75.653 12.1296 76.0098 12.1296C76.3665 12.1296 76.7193 12.2042 77.0456 12.3485C77.3718 12.4929 77.6643 12.7038 77.9042 12.9678C78.1442 13.2318 78.3263 13.543 78.439 13.8815C78.5516 14.22 78.5922 14.5783 78.5583 14.9334C78.5929 15.2889 78.5527 15.6477 78.4404 15.9867C78.328 16.3257 78.146 16.6375 77.906 16.902C77.6659 17.1665 77.3733 17.3778 77.0467 17.5225C76.7201 17.6671 76.3669 17.7418 76.0098 17.7418C75.6526 17.7418 75.2994 17.6671 74.9728 17.5225C74.6463 17.3778 74.3536 17.1665 74.1136 16.902C73.8736 16.6375 73.6915 16.3257 73.5792 15.9867C73.4668 15.6477 73.4267 15.2889 73.4612 14.9334ZM77.4608 14.9334C77.4608 13.7621 76.9347 13.0772 76.0112 13.0772C75.0843 13.0772 74.5628 13.7621 74.5628 14.9334C74.5628 16.1141 75.0843 16.7938 76.0112 16.7938C76.9347 16.7937 77.4608 16.1094 77.4608 14.9334H77.4608Z"
                    fill="white"></path>
                  <path
                    d="M79.681 16.1093C79.681 15.1367 80.4053 14.5759 81.6908 14.4962L83.1545 14.4119V13.9455C83.1545 13.3747 82.7771 13.0525 82.0482 13.0525C81.4529 13.0525 81.0404 13.271 80.922 13.6531H79.8896C79.9986 12.7249 80.8717 12.1296 82.0974 12.1296C83.4521 12.1296 84.2162 12.804 84.2162 13.9455V17.6374H83.1896V16.8781H83.1053C82.934 17.1505 82.6935 17.3725 82.4084 17.5216C82.1232 17.6706 81.8036 17.7413 81.4822 17.7265C81.2554 17.7501 81.0261 17.7259 80.8092 17.6554C80.5923 17.585 80.3925 17.4699 80.2228 17.3175C80.0531 17.1652 79.9172 16.9789 79.8239 16.7708C79.7306 16.5627 79.6819 16.3374 79.681 16.1093ZM83.1545 15.6476V15.1958L81.8349 15.2802C81.0908 15.33 80.7533 15.5831 80.7533 16.0595C80.7533 16.5458 81.1752 16.8288 81.7553 16.8288C81.9253 16.846 82.097 16.8289 82.2602 16.7784C82.4234 16.7279 82.5748 16.645 82.7053 16.5348C82.8358 16.4246 82.9429 16.2893 83.02 16.1369C83.0972 15.9844 83.1429 15.818 83.1545 15.6476Z"
                    fill="white"></path>
                  <path
                    d="M85.6178 14.9333C85.6178 13.2259 86.4955 12.1443 87.8608 12.1443C88.1985 12.1287 88.5336 12.2096 88.8271 12.3775C89.1205 12.5453 89.3601 12.7933 89.5178 13.0923H89.5975V10.1245H90.6639V17.6374H89.642V16.7837H89.5577C89.3877 17.0807 89.1398 17.3255 88.8407 17.4917C88.5416 17.6579 88.2027 17.7391 87.8608 17.7264C86.4862 17.7265 85.6178 16.6448 85.6178 14.9333ZM86.7194 14.9333C86.7194 16.0794 87.2596 16.7691 88.1632 16.7691C89.062 16.7691 89.6174 16.0695 89.6174 14.938C89.6174 13.8118 89.0561 13.1023 88.1632 13.1023C87.2655 13.1023 86.7194 13.7966 86.7194 14.9333H86.7194Z"
                    fill="white"></path>
                  <path
                    d="M95.0759 14.9333C95.0419 14.5782 95.0825 14.2199 95.1952 13.8814C95.3078 13.5429 95.4899 13.2317 95.7298 12.9678C95.9697 12.7038 96.2622 12.4929 96.5884 12.3485C96.9146 12.2042 97.2674 12.1296 97.6241 12.1296C97.9809 12.1296 98.3336 12.2042 98.6599 12.3485C98.9861 12.4929 99.2785 12.7038 99.5185 12.9678C99.7584 13.2317 99.9405 13.5429 100.053 13.8814C100.166 14.2199 100.206 14.5782 100.172 14.9333C100.207 15.2888 100.167 15.6475 100.055 15.9866C99.9422 16.3256 99.7602 16.6374 99.5202 16.9019C99.2802 17.1664 98.9876 17.3777 98.661 17.5224C98.3345 17.667 97.9813 17.7417 97.6241 17.7417C97.267 17.7417 96.9138 17.667 96.5872 17.5224C96.2607 17.3777 95.968 17.1664 95.728 16.9019C95.488 16.6374 95.306 16.3256 95.1937 15.9866C95.0814 15.6475 95.0413 15.2888 95.0759 14.9333ZM99.0755 14.9333C99.0755 13.762 98.5493 13.077 97.6259 13.077C96.6989 13.077 96.1775 13.762 96.1775 14.9333C96.1775 16.114 96.699 16.7937 97.6259 16.7937C98.5493 16.7936 99.0755 16.1093 99.0755 14.9333Z"
                    fill="white"></path>
                  <path
                    d="M101.603 12.2339H102.63V13.0923H102.71C102.845 12.784 103.073 12.5255 103.362 12.353C103.651 12.1804 103.986 12.1023 104.322 12.1296C104.585 12.1098 104.849 12.1495 105.094 12.2456C105.34 12.3417 105.561 12.4918 105.74 12.6848C105.92 12.8778 106.054 13.1088 106.132 13.3606C106.21 13.6124 106.231 13.8785 106.192 14.1393V17.6373H105.126V14.4071C105.126 13.5388 104.749 13.1069 103.96 13.1069C103.781 13.0986 103.603 13.129 103.438 13.196C103.272 13.263 103.123 13.365 103 13.4951C102.878 13.6251 102.785 13.7802 102.728 13.9495C102.671 14.1189 102.651 14.2986 102.67 14.4763V17.6374H101.603V12.2339Z"
                    fill="white"></path>
                  <path
                    d="M112.218 10.8887V12.2586H113.389V13.1568H112.218V15.9354C112.218 16.5014 112.451 16.7492 112.982 16.7492C113.118 16.7488 113.254 16.7406 113.389 16.7246V17.6129C113.197 17.6471 113.003 17.6654 112.809 17.6674C111.623 17.6674 111.151 17.2502 111.151 16.2084V13.1568H110.293V12.2585H111.151V10.8887H112.218Z"
                    fill="white"></path>
                  <path
                    d="M114.845 10.1245H115.902V13.1023H115.987C116.129 12.7911 116.363 12.5312 116.658 12.3579C116.953 12.1847 117.294 12.1066 117.634 12.1343C117.896 12.1201 118.157 12.1637 118.4 12.2622C118.643 12.3606 118.861 12.5114 119.039 12.7038C119.216 12.8962 119.35 13.1255 119.428 13.3753C119.507 13.625 119.53 13.8891 119.495 14.1487V17.6374H118.428V14.4118C118.428 13.5487 118.026 13.1116 117.272 13.1116C117.089 13.0966 116.905 13.1218 116.732 13.1854C116.56 13.2491 116.403 13.3497 116.274 13.4802C116.144 13.6107 116.045 13.7679 115.982 13.9409C115.92 14.1138 115.896 14.2984 115.912 14.4815V17.6374H114.846L114.845 10.1245Z"
                    fill="white"></path>
                  <path
                    d="M125.713 16.1783C125.569 16.6722 125.255 17.0993 124.827 17.3851C124.399 17.6709 123.884 17.7971 123.372 17.7416C123.016 17.751 122.662 17.6828 122.335 17.5418C122.008 17.4007 121.716 17.1902 121.478 16.9249C121.241 16.6595 121.064 16.3456 120.96 16.005C120.856 15.6645 120.827 15.3053 120.876 14.9525C120.829 14.5987 120.858 14.2388 120.961 13.8971C121.065 13.5555 121.241 13.2402 121.477 12.9725C121.714 12.7048 122.005 12.491 122.331 12.3456C122.657 12.2001 123.01 12.1264 123.367 12.1295C124.871 12.1295 125.778 13.1567 125.778 14.8535V15.2256H121.962V15.2854C121.946 15.4836 121.97 15.6832 122.035 15.8713C122.1 16.0594 122.204 16.2319 122.339 16.3776C122.475 16.5234 122.639 16.6392 122.822 16.7177C123.005 16.7962 123.202 16.8356 123.401 16.8334C123.656 16.864 123.915 16.818 124.144 16.7014C124.373 16.5847 124.562 16.4027 124.687 16.1783L125.713 16.1783ZM121.962 14.4369H124.692C124.705 14.2556 124.68 14.0734 124.619 13.9021C124.558 13.7309 124.462 13.5743 124.336 13.4425C124.211 13.3106 124.06 13.2065 123.892 13.1367C123.724 13.0668 123.543 13.0329 123.361 13.0371C123.177 13.0348 122.994 13.0694 122.823 13.139C122.652 13.2085 122.497 13.3115 122.367 13.442C122.236 13.5724 122.133 13.7277 122.064 13.8985C121.994 14.0694 121.96 14.2525 121.962 14.4369H121.962Z"
                    fill="white"></path>
                  <rect x="0.5" y="0.5" width="161" height="47" rx="7.5" stroke="#334155"></rect>
                </svg></div>
                <div role="presentation" className="cursor-pointer"><svg width="162" height="48" viewBox="0 0 162 48"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="161" height="47" rx="7.5" fill="#121214"></rect>
                  <path
                    d="M56.9041 12.288C56.9238 12.7281 56.8542 13.1676 56.6995 13.58C56.5448 13.9925 56.3083 14.3694 56.0041 14.688C55.6632 15.04 55.2518 15.316 54.7968 15.4979C54.3419 15.6799 53.8537 15.7638 53.3641 15.744C52.8717 15.755 52.3822 15.6648 51.9261 15.479C51.4699 15.2933 51.0567 15.0159 50.7121 14.664C50.0128 13.9488 49.6213 12.9883 49.6213 11.988C49.6213 10.9878 50.0128 10.0272 50.7121 9.31201C51.2467 8.78963 51.9237 8.43689 52.6582 8.29811C53.3926 8.15934 54.1517 8.24071 54.8401 8.53201C55.2728 8.70988 55.6588 8.98499 55.9681 9.33601L55.3321 9.97201C55.0938 9.68493 54.7918 9.45737 54.4502 9.30739C54.1086 9.15741 53.7367 9.08914 53.3641 9.10801C52.8937 9.11126 52.4313 9.22968 52.0172 9.4529C51.6032 9.67613 51.2501 9.99738 50.9889 10.3886C50.7277 10.7797 50.5663 11.229 50.5187 11.6969C50.4712 12.1649 50.539 12.6374 50.7163 13.0731C50.8935 13.5088 51.1748 13.8945 51.5355 14.1964C51.8962 14.4983 52.3253 14.7073 52.7855 14.8051C53.2456 14.9028 53.7226 14.8864 54.1749 14.7572C54.6272 14.628 55.041 14.39 55.3801 14.064C55.7466 13.6621 55.9592 13.1435 55.9801 12.6H53.3641V11.736H56.8561C56.8834 11.9188 56.8994 12.1032 56.9041 12.288Z"
                    fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path
                    d="M62.4 9.28815H59.16V11.5681H62.112V12.4321H59.16V14.7121H62.4V15.6001H58.224V8.40015H62.4V9.28815Z"
                    fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path d="M66.3361 15.6001H65.4121V9.28815H63.3961V8.40015H68.4001V9.28815H66.3361V15.6001Z"
                    fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path d="M71.928 15.6001V8.40015H72.852V15.6001H71.928Z" fill="white" stroke="white"
                    strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path d="M76.9559 15.6001H76.0319V9.28815H74.0159V8.40015H78.9599V9.28815H76.9559V15.6001Z"
                    fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path
                    d="M88.3319 14.6639C87.9853 15.0107 87.5738 15.2859 87.1208 15.4737C86.6678 15.6614 86.1822 15.758 85.6919 15.758C85.2015 15.758 84.716 15.6614 84.263 15.4737C83.81 15.2859 83.3985 15.0107 83.0519 14.6639C82.3735 13.9427 81.9958 12.99 81.9958 11.9999C81.9958 11.0098 82.3735 10.057 83.0519 9.33588C83.391 8.97924 83.8012 8.69776 84.256 8.50965C84.7107 8.32155 85.1999 8.231 85.6919 8.24388C86.1832 8.23611 86.6708 8.32898 87.1249 8.51678C87.5789 8.70459 87.9897 8.98334 88.3319 9.33588C88.6769 9.68687 88.9482 10.1034 89.1295 10.561C89.3109 11.0185 89.3988 11.5078 89.3879 11.9999C89.4036 12.4926 89.318 12.9832 89.1364 13.4415C88.9547 13.8997 88.6809 14.3158 88.3319 14.6639ZM83.7359 14.0639C83.9915 14.3229 84.2961 14.5286 84.6318 14.669C84.9676 14.8094 85.328 14.8817 85.6919 14.8817C86.0558 14.8817 86.4162 14.8094 86.7519 14.669C87.0877 14.5286 87.3923 14.3229 87.6479 14.0639C88.1657 13.5012 88.4531 12.7645 88.4531 11.9999C88.4531 11.2352 88.1657 10.4985 87.6479 9.93588C87.3923 9.67683 87.0877 9.47113 86.7519 9.33074C86.4162 9.19035 86.0558 9.11805 85.6919 9.11805C85.328 9.11805 84.9676 9.19035 84.6318 9.33074C84.2961 9.47113 83.9915 9.67683 83.7359 9.93588C83.2181 10.4985 82.9307 11.2352 82.9307 11.9999C82.9307 12.7645 83.2181 13.5012 83.7359 14.0639Z"
                    fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path
                    d="M90.6961 15.6001V8.40015H91.8121L95.3161 14.0041V12.6121V8.40015H96.2401V15.6001H95.2801L91.6201 9.73215V11.1121V15.6001H90.6961Z"
                    fill="white" stroke="white" strokeWidth="0.2" strokeMiterlimit="10"></path>
                  <path
                    d="M81.7681 26.0999C80.757 26.1022 79.7694 26.4044 78.93 26.9681C78.0907 27.5317 77.4373 28.3317 77.0526 29.2667C76.6679 30.2017 76.5691 31.2297 76.7687 32.2209C76.9682 33.2121 77.4572 34.1218 78.1738 34.835C78.8904 35.5483 79.8025 36.033 80.7946 36.2279C81.7866 36.4229 82.8143 36.3192 83.7474 35.9301C84.6806 35.541 85.4775 34.8839 86.0372 34.0419C86.597 33.2 86.8944 32.2109 86.8921 31.1999C86.9019 30.5254 86.7758 29.8558 86.5215 29.2311C86.2671 28.6063 85.8897 28.0391 85.4116 27.5633C84.9335 27.0874 84.3645 26.7126 83.7386 26.4612C83.1126 26.2098 82.4425 26.0869 81.7681 26.0999ZM81.7681 34.2959C81.1484 34.3392 80.53 34.1951 79.9932 33.8823C79.4565 33.5695 79.0263 33.1025 78.7585 32.542C78.4907 31.9814 78.3977 31.3533 78.4917 30.7392C78.5856 30.1252 78.8621 29.5536 79.2852 29.0987C79.7083 28.6439 80.2585 28.3268 80.8642 28.1888C81.4699 28.0508 82.1031 28.0981 82.6815 28.3248C83.2599 28.5514 83.7568 28.9468 84.1075 29.4595C84.4582 29.9722 84.6466 30.5786 84.6481 31.1999C84.6674 31.5935 84.6077 31.987 84.4725 32.3572C84.3374 32.7273 84.1295 33.0667 83.861 33.3553C83.5926 33.6438 83.2691 33.8757 82.9097 34.0372C82.5502 34.1988 82.1621 34.2867 81.7681 34.2959ZM70.5841 26.0999C69.573 26.1022 68.5854 26.4044 67.746 26.9681C66.9067 27.5317 66.2533 28.3317 65.8686 29.2667C65.4839 30.2017 65.3851 31.2297 65.5847 32.2209C65.7842 33.2121 66.2732 34.1218 66.9898 34.835C67.7064 35.5483 68.6185 36.033 69.6106 36.2279C70.6026 36.4229 71.6303 36.3192 72.5634 35.9301C73.4966 35.541 74.2935 34.8839 74.8532 34.0419C75.413 33.2 75.7104 32.2109 75.7081 31.1999C75.7178 30.5254 75.5918 29.8558 75.3375 29.2311C75.0831 28.6063 74.7057 28.0391 74.2276 27.5633C73.7495 27.0874 73.1805 26.7126 72.5546 26.4612C71.9286 26.2098 71.2585 26.0869 70.5841 26.0999ZM70.5841 34.2959C69.9644 34.3392 69.346 34.1951 68.8092 33.8823C68.2725 33.5695 67.8423 33.1025 67.5745 32.542C67.3067 31.9814 67.2137 31.3533 67.3077 30.7392C67.4016 30.1252 67.6781 29.5536 68.1012 29.0987C68.5243 28.6439 69.0745 28.3268 69.6802 28.1888C70.2859 28.0508 70.9191 28.0981 71.4975 28.3248C72.0759 28.5514 72.5728 28.9468 72.9235 29.4595C73.2742 29.9722 73.4626 30.5786 73.4641 31.1999C73.4834 31.5935 73.4237 31.987 73.2885 32.3572C73.1534 32.7273 72.9455 33.0667 72.677 33.3553C72.4086 33.6438 72.0851 33.8757 71.7257 34.0372C71.3662 34.1988 70.9781 34.2867 70.5841 34.2959ZM57.2881 27.6719V29.8319H62.4721C62.3908 30.8492 61.9679 31.8092 61.2721 32.5559C60.7521 33.0857 60.1266 33.5004 59.4362 33.7733C58.7458 34.0461 58.0058 34.171 57.2641 34.1399C55.7364 34.1399 54.2713 33.533 53.1911 32.4528C52.1109 31.3726 51.5041 29.9075 51.5041 28.3799C51.5041 26.8522 52.1109 25.3871 53.1911 24.3069C54.2713 23.2267 55.7364 22.6199 57.2641 22.6199C58.7286 22.5981 60.1427 23.1542 61.2001 24.1679L62.7241 22.6439C62.0089 21.9365 61.1597 21.3789 60.2262 21.0039C59.2928 20.6289 58.2939 20.4439 57.2881 20.4599C56.2213 20.4183 55.1571 20.5926 54.1592 20.9722C53.1614 21.3518 52.2504 21.929 51.481 22.6691C50.7115 23.4092 50.0994 24.297 49.6813 25.2793C49.2631 26.2616 49.0476 27.3182 49.0476 28.3859C49.0476 29.4535 49.2631 30.5101 49.6813 31.4924C50.0994 32.4747 50.7115 33.3626 51.481 34.1026C52.2504 34.8427 53.1614 35.4199 54.1592 35.7995C55.1571 36.1791 56.2213 36.3534 57.2881 36.3119C58.3146 36.3529 59.3381 36.1763 60.2916 35.7936C61.245 35.411 62.1067 34.8311 62.8201 34.0919C64.0802 32.7075 64.7517 30.8869 64.6921 29.0159C64.6964 28.5655 64.6602 28.1157 64.5841 27.6719H57.2881ZM111.66 29.3519C111.347 28.4311 110.762 27.6272 109.982 27.0465C109.202 26.4658 108.264 26.1356 107.292 26.0999C106.636 26.0986 105.986 26.2319 105.383 26.4917C104.78 26.7515 104.237 27.1321 103.787 27.6101C103.337 28.0881 102.99 28.6533 102.768 29.2707C102.545 29.8882 102.451 30.5447 102.492 31.1999C102.482 32.2953 102.826 33.3646 103.474 34.2482C104.121 35.1317 105.037 35.7821 106.085 36.102C107.133 36.422 108.256 36.3945 109.287 36.0235C110.317 35.6525 111.201 34.9581 111.804 34.0439L110.064 32.8439C109.805 33.2762 109.437 33.6332 108.997 33.8795C108.557 34.1258 108.06 34.2528 107.556 34.2479C107.036 34.2693 106.522 34.133 106.08 33.8567C105.639 33.5804 105.292 33.1771 105.084 32.6999L111.912 29.8799L111.66 29.3519ZM104.7 31.0559C104.676 30.6831 104.726 30.3093 104.848 29.9562C104.97 29.6031 105.161 29.2779 105.41 28.9997C105.66 28.7214 105.962 28.4957 106.299 28.3357C106.637 28.1757 107.003 28.0846 107.376 28.0679C107.763 28.0443 108.148 28.1353 108.483 28.3295C108.818 28.5238 109.088 28.8126 109.26 29.1599L104.7 31.0559ZM99.1561 35.9999H101.4V20.9999H99.1561V35.9999ZM95.4841 27.2399H95.4001C95.0649 26.8581 94.6511 26.5532 94.1872 26.3461C93.7233 26.139 93.2201 26.0345 92.7121 26.0399C91.4007 26.1035 90.1641 26.6692 89.2584 27.6198C88.3528 28.5703 87.8477 29.8329 87.8477 31.1459C87.8477 32.4588 88.3528 33.7214 89.2584 34.672C90.1641 35.6226 91.4007 36.1883 92.7121 36.2519C93.2208 36.2621 93.7256 36.1598 94.1902 35.9524C94.6549 35.7449 95.068 35.4374 95.4001 35.0519H95.4841V35.7839C95.4841 37.7399 94.4401 38.7839 92.7601 38.7839C92.1989 38.7715 91.654 38.5927 91.1946 38.2701C90.7352 37.9474 90.3821 37.4956 90.1801 36.9719L88.2361 37.7759C88.5955 38.6786 89.2204 39.4509 90.0282 39.9909C90.8359 40.5308 91.7885 40.8129 92.7601 40.7999C95.3881 40.7999 97.5601 39.2519 97.5601 35.4839V26.3999H95.4841V27.2399ZM92.9041 34.2959C92.1178 34.2468 91.3799 33.9 90.8404 33.3259C90.301 32.7518 90.0007 31.9936 90.0007 31.2059C90.0007 30.4181 90.301 29.66 90.8404 29.0859C91.3799 28.5118 92.1178 28.1649 92.9041 28.1159C93.2884 28.1324 93.6654 28.2262 94.0127 28.3914C94.36 28.5567 94.6706 28.7901 94.9258 29.0779C95.1811 29.3656 95.3759 29.7017 95.4986 30.0663C95.6213 30.4308 95.6694 30.8163 95.6401 31.1999C95.6728 31.5847 95.6272 31.9722 95.5059 32.3388C95.3846 32.7055 95.1902 33.0438 94.9344 33.3332C94.6787 33.6226 94.3669 33.8571 94.0179 34.0226C93.6689 34.1881 93.29 34.281 92.9041 34.2959ZM122.172 20.9999H116.796V35.9999H119.04V30.3119H122.172C122.812 30.3578 123.454 30.2715 124.058 30.0583C124.663 29.8452 125.218 29.5097 125.687 29.0728C126.156 28.636 126.531 28.1071 126.787 27.5193C127.042 26.9314 127.175 26.297 127.175 25.6559C127.175 25.0147 127.042 24.3803 126.787 23.7925C126.531 23.2046 126.156 22.6757 125.687 22.2389C125.218 21.802 124.663 21.4666 124.058 21.2534C123.454 21.0402 122.812 20.9539 122.172 20.9999ZM122.172 28.1999H119.04V23.0879H122.22C122.557 23.0879 122.891 23.1543 123.203 23.2833C123.514 23.4124 123.797 23.6015 124.036 23.84C124.274 24.0785 124.464 24.3616 124.593 24.6731C124.722 24.9847 124.788 25.3186 124.788 25.6559C124.788 25.9931 124.722 26.327 124.593 26.6386C124.464 26.9502 124.274 27.2332 124.036 27.4717C123.797 27.7102 123.514 27.8993 123.203 28.0284C122.891 28.1574 122.557 28.2239 122.22 28.2239L122.172 28.1999ZM136.02 26.0519C135.203 26.0015 134.389 26.1917 133.679 26.5991C132.968 27.0064 132.393 27.613 132.024 28.3439L134.004 29.1719C134.204 28.8111 134.504 28.5161 134.869 28.3223C135.233 28.1285 135.645 28.0443 136.056 28.0799C136.341 28.0466 136.63 28.0704 136.905 28.1498C137.181 28.2293 137.438 28.3629 137.661 28.5427C137.885 28.7226 138.07 28.9451 138.206 29.1973C138.343 29.4496 138.428 29.7265 138.456 30.0119V30.1559C137.734 29.7766 136.931 29.5789 136.116 29.5799C133.98 29.5799 131.796 30.7799 131.796 32.9639C131.817 33.4281 131.931 33.8833 132.132 34.3025C132.332 34.7217 132.615 35.0964 132.963 35.4042C133.311 35.712 133.718 35.9467 134.158 36.0944C134.599 36.2421 135.065 36.2997 135.528 36.2639C136.091 36.295 136.652 36.1758 137.154 35.9186C137.656 35.6613 138.081 35.2752 138.384 34.7999H138.456V35.9999H140.616V30.2279C140.616 27.5999 138.624 26.0759 136.068 26.0759L136.02 26.0519ZM135.744 34.2719C135.012 34.2719 133.992 33.8999 133.992 32.9999C133.992 31.7999 135.264 31.3919 136.392 31.3919C137.105 31.3743 137.809 31.5483 138.432 31.8959C138.357 32.5475 138.048 33.1498 137.562 33.5911C137.077 34.0324 136.448 34.2828 135.792 34.2959L135.744 34.2719ZM148.488 26.3999L145.92 32.9039H145.848L143.184 26.3999H140.784L144.78 35.4959L142.5 40.5479H144.84L150.984 26.3999H148.488ZM128.328 35.9999H130.56V20.9999H128.328V35.9999Z"
                    fill="white"></path>
                  <path
                    d="M12.5281 9.04811C12.1327 9.51566 11.9309 10.1167 11.9641 10.7281V37.2721C11.9233 37.8846 12.126 38.4884 12.5281 38.9521L12.6121 39.0481L27.4801 24.1801V23.8201L12.6121 8.96411L12.5281 9.04811Z"
                    fill="url(#paint0_linear_2875_10546)"></path>
                  <path
                    d="M32.3999 29.136L27.4799 24.18V23.82L32.3999 18.864L32.5079 18.936L38.3999 22.272C40.0799 23.22 40.0799 24.78 38.3999 25.74L32.5319 29.076L32.3999 29.136Z"
                    fill="url(#paint1_linear_2875_10546)"></path>
                  <path
                    d="M32.5439 29.064L27.48 24L12.528 38.952C12.867 39.2538 13.3011 39.4275 13.7548 39.4428C14.2085 39.4582 14.6532 39.3142 15.012 39.036L32.5439 29.064Z"
                    fill="url(#paint2_linear_2875_10546)"></path>
                  <path
                    d="M32.5439 18.936L15.012 8.97601C14.6556 8.69391 14.2112 8.54648 13.7568 8.55965C13.3025 8.57282 12.8674 8.74574 12.528 9.04801L27.48 24L32.5439 18.936Z"
                    fill="url(#paint3_linear_2875_10546)"></path>
                  <path opacity="0.2"
                    d="M32.4 28.9558L15.012 38.8558C14.6663 39.1167 14.245 39.2578 13.812 39.2578C13.3789 39.2578 12.9576 39.1167 12.612 38.8558L12.528 38.9398L12.612 39.0358C12.9576 39.2967 13.3789 39.4378 13.812 39.4378C14.245 39.4378 14.6663 39.2967 15.012 39.0358L32.5439 29.0638L32.4 28.9558Z"
                    fill="#181A20"></path>
                  <path opacity="0.12"
                    d="M12.5278 38.784C12.1424 38.3081 11.9535 37.7028 11.9998 37.092V37.272C11.959 37.8845 12.1617 38.4883 12.5638 38.952L12.6478 38.868L12.5278 38.784Z"
                    fill="#181A20"></path>
                  <path opacity="0.12"
                    d="M38.4 25.56L32.4 28.956L32.508 29.064L38.4 25.728C38.7478 25.5809 39.0495 25.3428 39.2734 25.0387C39.4972 24.7346 39.6349 24.3758 39.672 24C39.597 24.3415 39.4428 24.6606 39.2219 24.9315C39.0009 25.2025 38.7194 25.4178 38.4 25.56Z"
                    fill="#181A20"></path>
                  <path opacity="0.25"
                    d="M15.012 9.14402L38.4 22.44C38.7194 22.5823 39.0009 22.7975 39.2218 23.0685C39.4428 23.3395 39.597 23.6585 39.672 24C39.6349 23.6242 39.4972 23.2654 39.2733 22.9613C39.0495 22.6572 38.7478 22.4191 38.4 22.272L15.012 8.97602C13.344 8.01602 11.964 8.80802 11.964 10.728V10.908C12 8.98802 13.344 8.19602 15.012 9.14402Z"
                    fill="white"></path>
                  <rect x="0.5" y="0.5" width="161" height="47" rx="7.5" stroke="#334155"></rect>
                  <defs>
                    <linearGradient id="paint0_linear_2875_10546" x1="26.1601" y1="10.4521" x2="6.02415" y2="30.5881"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A0FF"></stop>
                      <stop offset="0.01" stopColor="#00A1FF"></stop>
                      <stop offset="0.26" stopColor="#00BEFF"></stop>
                      <stop offset="0.51" stopColor="#00D2FF"></stop>
                      <stop offset="0.76" stopColor="#00DFFF"></stop>
                      <stop offset="1" stopColor="#00E3FF"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2875_10546" x1="40.5959" y1="24" x2="11.5679" y2="24"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE000"></stop>
                      <stop offset="0.41" stopColor="#FFBD00"></stop>
                      <stop offset="0.78" stopColor="#FFA500"></stop>
                      <stop offset="1" stopColor="#FF9C00"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2875_10546" x1="29.7959" y1="26.76" x2="2.48395" y2="54.06"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3A44"></stop>
                      <stop offset="1" stopColor="#C31162"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2875_10546" x1="8.75996" y1="0.216013" x2="20.952" y2="12.408"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#32A071"></stop>
                      <stop offset="0.07" stopColor="#2DA771"></stop>
                      <stop offset="0.48" stopColor="#15CF74"></stop>
                      <stop offset="0.8" stopColor="#06E775"></stop>
                      <stop offset="1" stopColor="#00F076"></stop>
                    </linearGradient>
                  </defs>
                </svg></div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8 md:py-16 md:px-20 px-4 py-12">
              <div
                className="bg-[url('/images/Enterprise/BrowserX.png')] bg-cover bg-center w-full p-6 md:p-12 rounded-lg flex flex-col items-start justify-center">
                <div className="text-center text-start ">
                  <div className="text-gray-400 font-inter font-medium text-sm mb-2">Yep, we have one more thing.</div>
                  <div
                    className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans md:text-[50px]  mx-auto text-[28px] pb-1">
                    Browser Extension</div>
                </div><button
                  className="flex justify-center border border-custom-4 hover:bg-custom-5 transition duration-300 ease-in-out bg-custom-3 rounded-lg py-3 px-5 font-semibold mt-4 md:mt-6"
                  type="button"><span className="text-center font-inter text-base text-gray-300">Check Browser
                    Extension</span><span className="ml-4"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.83333 10H17.1667M17.1667 10L12.1667 5M17.1667 10L12.1667 15" stroke="#CDD5DF"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></span></button>
              </div>
              <div
                className="bg-[url('/images/Enterprise/SdkBanner.png')] bg-cover bg-center w-full p-6 md:p-12 rounded-lg flex flex-col items-start justify-center">
                <div className="text-center text-start ">
                  <div className="text-gray-400 font-inter font-medium text-sm mb-2">Build the above products</div>
                  <div
                    className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans undefined  mx-auto text-[28px] pb-1">
                    With our SDK</div>
                </div><button
                  className="flex items-center justify-center border border-custom-4 hover:bg-custom-5 transition duration-300 ease-in-out bg-custom-3 rounded-lg py-3 px-5 font-semibold mt-4 md:mt-6"
                  type="button"><span className="text-center font-inter text-base text-gray-300">Documentation</span><span
                    className="ml-4"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.83333 10H17.1667M17.1667 10L12.1667 5M17.1667 10L12.1667 15" stroke="#CDD5DF"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></span></button>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Product