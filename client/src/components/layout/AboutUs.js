import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../../App-01.css"

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="w-full min-h-screen bg-baseBlack text-white">
        <div className="max-w-screen-laptop mx-auto">
          <Navbar />
          <main>
            <div
              className="bg-[url('/images/NewAbout.png')] bg-no-repeat md:bg-contain bg-cover bg-center md:bg-top h-full flex flex-col items-center justify-center md:py-24 py-16 px-4 md:px-0">
              <img alt="logo"
                srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FAboutLogo.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FAboutLogo.png&amp;w=640&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FAboutLogo.png&amp;w=640&amp;q=100" width="65" height="100"
                decoding="async" data-nimg="1" />
              <div className="text-center md:mt-20 mt-10 md:mb-9 mb-4 ">
                <div className="text-gray-400 font-inter font-semibold text-base mb-2">Hey there, fabulous fren 👋 </div>
                <div
                  className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/60 bg-clip-text text-transparent font-bold font-polySans md:text-5xl text-4xl mx-auto">
                  Welcome to Our Story</div>
              </div>
              <div className="max-w-xl text-center text-gray-300 md:text-lg font-inter font-normal text-base">
                <div className="">Like many great stories, ours too started with 2 college friends stumbling upon a
                  revolutionary idea. Back in 2019, Ayush &amp; Susmit had planned to participate in a hackathon called
                  EthGlobal. While brainstorming and ideating, they fell upon the idea of creating Cadbury01, a
                  peer-to-peer decentralised video conferencing product. It turned out to be an absolute winner bagging
                  several prizes and appreciation from esteemed folks such as Juan Benet, the team at Consensys Mesh,
                  Filecoin and many more!</div>
                <div className="md:mt-8 mt-4"> Thus, D-App was born in December 2019; as a full-fledged company with a
                  mission and vision</div>
              </div>
            </div>
            <div className="md:mb-24 mb-16 md:pb-16 pb-8 flex items-center justify-center flex-col px-4 md:px-0">
              <div className="text-gray-400 font-inter font-medium text-sm mb-2">Our Mission</div>
              <div className="text-gray-300 font-inter font-normal text-lg">Our mission is to connect 100 million members over
                D-App by 2026.</div>
            </div>
            <div className="md:mb-24 mb-16 md:pb-16 pb-8 md:px-16 px-4 flex items-center justify-center flex-col">
              <div className="text-center md:mb-12 mb-6">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Our Solution</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans md:max-w-3xl  mx-auto text-[28px] pb-1">
                  The D-App Approach to Solve the Same</div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center justify-center">
                <div
                  className=" rounded-2xl p-6 md:h-72 flex flex-col items-start justify-between xl:w-[410px] mx-auto border cardStyles">
                  <img alt="icon"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F4.png&amp;w=96&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F4.png&amp;w=256&amp;q=75 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F4.png&amp;w=256&amp;q=75" width="80" height="50"
                    decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className="">
                    <div className="mb-2 flex items-center">
                      <div className="text-gray-200 text-xl font-inter font-semibold">Platform</div><span
                        className="ml-2 rounded-2xl py-0.5 px-2.5  text-sm font-medium font-inter bg-rgbColors-7 text-green-200">Live</span>
                    </div>
                    <div className="text-gray-400 font-inter text-base font-normal">A sufficiently decentralized RTC Platform
                      for communities and creators, powered by the D-App dashboard.</div>
                  </div><button type="button"
                    className="text-custom-11 cursor-pointer xl:text-base text-sm flex items-center font-inter font-semibold hover:text-blue-300"><span
                      className="mr-2">Try Meeting for Free</span><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.83332 10.0001H16.5M16.5 10.0001L10.6667 4.16675M16.5 10.0001L10.6667 15.8334"
                        stroke="#4984FD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></button>
                </div>
                <div
                  className=" rounded-2xl p-6 md:h-72 flex flex-col items-start justify-between xl:w-[410px] mx-auto border cardStyles">
                  <img alt="icon"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F5.png&amp;w=96&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F5.png&amp;w=256&amp;q=75 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F5.png&amp;w=256&amp;q=75" width="80" height="50"
                    decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className="">
                    <div className="mb-2 flex items-center">
                      <div className="text-gray-200 text-xl font-inter font-semibold">SDK</div><span
                        className="ml-2 rounded-2xl py-0.5 px-2.5  text-sm font-medium font-inter bg-rgbColors-7 text-green-200">Live</span>
                    </div>
                    <div className="text-gray-400 font-inter text-base font-normal">Plug-&amp;-play API for builders to power
                      audio/video communications in their product within few lines of code.</div>
                  </div><button type="button"
                    className="text-custom-11 cursor-pointer xl:text-base text-sm flex items-center font-inter font-semibold hover:text-blue-300"><span
                      className="mr-2">Start Building</span><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.83332 10.0001H16.5M16.5 10.0001L10.6667 4.16675M16.5 10.0001L10.6667 15.8334"
                        stroke="#4984FD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></button>
                </div>
                <div
                  className=" rounded-2xl p-6 md:h-72 flex flex-col items-start justify-between xl:w-[410px] mx-auto border cardStyles">
                  <img alt="icon"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F6.png&amp;w=96&amp;q=75 1x, https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F6.png&amp;w=256&amp;q=75 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FGetStarted%2F6.png&amp;w=256&amp;q=75" width="80" height="50"
                    decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className="">
                    <div className="mb-2 flex items-center">
                      <div className="text-gray-200 text-xl font-inter font-semibold">Protocol</div><span
                        className="ml-2 rounded-2xl py-0.5 px-2.5  text-sm font-medium font-inter bg-rgbColors-8 text-custom-9">Coming
                        Soon</span>
                    </div>
                    <div className="text-gray-400 font-inter text-base font-normal">An open dRTC (Decentralized Real-Time
                      Communication) that can be leveraged by any RTC client or app.</div>
                  </div><button type="button"
                    className="text-custom-11 cursor-pointer xl:text-base text-sm flex items-center font-inter font-semibold hover:text-blue-300"><span
                      className="mr-2">Read About It</span><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.83332 10.0001H16.5M16.5 10.0001L10.6667 4.16675M16.5 10.0001L10.6667 15.8334"
                        stroke="#4984FD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></button>
                </div>
              </div>
              <div className="mt-12 md:max-w-xl text-center text-gray-500 text-sm md:text-lg font-inter font-normal">
                Interested in knowing more? Or, think our synergies is matching, we would love to get on a call for the
                same, and talk about it.</div><button
                  className="mt-12 flex items-center justify-center border border-custom-4 hover:bg-custom-5 transition duration-300 ease-in-out  bg-custom-3 rounded-lg py-3 px-5 md:w-48 w-full font-semibold"
                  type="button"><span className="text-center font-inter text-base text-gray-300">Contact us</span></button>
            </div>
            <div
              className="md:mb-24 mb-16 md:pb-16 pb-8 md:px-16 px-4 flex md:items-start md:justify-between md:gap-10 2xl:justify-around md:flex-row flex-col">
              <div>
                <div className="text-center text-start">
                  <div className="text-gray-400 font-inter font-medium text-sm mb-2">Vision</div>
                  <div className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans undefined  mx-auto text-[28px] pb-1">
                    The Protocol</div>
                </div>
                <div className=" md:block hidden">
                  <div className="text-gray-300 xl:text-lg font-inter font-normal text-base md:max-w-md 2xl:max-w-2xl mt-6">In
                    the deep-tech consumer space, Architecture and Technology are of paramount importance. Keeping that as
                    the core, we’re building a dRTC (Decentralized real-time communication) engine that is</div>
                  <div className="grid md:grid-cols-2 grid-cols-1 mt-8 xl:gap-10 gap-7">
                    <div className="flex items-center"><img alt="Open"
                      srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F1.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F1.png&amp;w=128&amp;q=100 2x"
                      src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F1.png&amp;w=128&amp;q=100" width="50" height="50"
                      decoding="async" data-nimg="1" loading="lazy" />
                      <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Open</div>
                    </div>
                    <div className="flex items-center"><img alt="Scalable"
                      srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F2.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F2.png&amp;w=128&amp;q=100 2x"
                      src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F2.png&amp;w=128&amp;q=100" width="50" height="50"
                      decoding="async" data-nimg="1" loading="lazy" />
                      <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Scalable</div>
                    </div>
                    <div className="flex items-center"><img alt="Decentralized"
                      srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F3.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F3.png&amp;w=128&amp;q=100 2x"
                      src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F3.png&amp;w=128&amp;q=100" width="50" height="50"
                      decoding="async" data-nimg="1" loading="lazy" />
                      <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Decentralized</div>
                    </div>
                    <div className="flex items-center"><img alt="End-to-End Encrypted"
                      srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F4.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F4.png&amp;w=128&amp;q=100 2x"
                      src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F4.png&amp;w=128&amp;q=100" width="50" height="50"
                      decoding="async" data-nimg="1" loading="lazy" />
                      <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">End-to-End Encrypted</div>
                    </div>
                    <div className="flex items-center"><img alt="Bottom-up Economy"
                      srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F5.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F5.png&amp;w=128&amp;q=100 2x"
                      src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F5.png&amp;w=128&amp;q=100" width="50" height="50"
                      decoding="async" data-nimg="1" loading="lazy" />
                      <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Bottom-up Economy</div>
                    </div>
                  </div>
                </div>
              </div><img alt="protocol"
                srcset="https://huddle01.com/_next/image?url=%2Fimages%2FProtocol.png&amp;w=828&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FProtocol.png&amp;w=1920&amp;q=100 2x"
                src="https://huddle01.com/_next/image?url=%2Fimages%2FProtocol.png&amp;w=1920&amp;q=100" width="770" height="100"
                decoding="async" data-nimg="1" className="mt-9 md:mt-0" loading="lazy" />
              <div className=" block md:hidden">
                <div className="text-gray-300 xl:text-lg font-inter font-normal text-base md:max-w-md 2xl:max-w-2xl mt-6">In
                  the deep-tech consumer space, Architecture and Technology are of paramount importance. Keeping that as
                  the core, we’re building a dRTC (Decentralized real-time communication) engine that is</div>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 xl:gap-10 gap-7">
                  <div className="flex items-center"><img alt="Open"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F1.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F1.png&amp;w=128&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F1.png&amp;w=128&amp;q=100" width="60" height="50"
                    decoding="async" data-nimg="1" loading="lazy" />
                    <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Open</div>
                  </div>
                  <div className="flex items-center"><img alt="Scalable"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F2.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F2.png&amp;w=128&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F2.png&amp;w=128&amp;q=100" width="60" height="50"
                    decoding="async" data-nimg="1" loading="lazy" />
                    <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Scalable</div>
                  </div>
                  <div className="flex items-center"><img alt="Decentralized"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F3.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F3.png&amp;w=128&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F3.png&amp;w=128&amp;q=100" width="60" height="50"
                    decoding="async" data-nimg="1" loading="lazy" />
                    <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Decentralized</div>
                  </div>
                  <div className="flex items-center"><img alt="End-to-End Encrypted"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F4.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F4.png&amp;w=128&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F4.png&amp;w=128&amp;q=100" width="60" height="50"
                    decoding="async" data-nimg="1" loading="lazy" />
                    <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">End-to-End Encrypted</div>
                  </div>
                  <div className="flex items-center"><img alt="Bottom-up Economy"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F5.png&amp;w=64&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F5.png&amp;w=128&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2F5.png&amp;w=128&amp;q=100" width="60" height="50"
                    decoding="async" data-nimg="1" loading="lazy" />
                    <div className="ml-5 text-gray-300 xl:text-lg text-sm font-normal font-inter">Bottom-up Economy</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mb-24 mb-16 md:pb-16 pb-8 md:px-16 px-4 ">
              <div className="text-center undefined">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">The faces behind the desks</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans undefined  mx-auto text-[28px] pb-1">
                  Meet our Team</div>
              </div>
              <div className="grid md:grid-cols-4 md:mt-12 mt-6 md:gap-12 gap-6 grid-cols-2 md:max-w-5xl mx-auto">
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Ayush Ranjan"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fayush.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fayush.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fayush.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Ayush Ranjan</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Co-Founder &amp;
                    CEO</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Susmit"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fsusmit.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fsusmit.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fsusmit.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Susmit</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Co-Founder &amp;
                    CTO</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Shashank"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fshashank.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fshashank.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fshashank.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Shashank</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Product Manager
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Daria"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fdaria.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fdaria.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fdaria.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Daria</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Product Manager
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Deepanshu"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fdeepanshu.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fdeepanshu.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fdeepanshu.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Deepanshu</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Lead Developer
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Akshit"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fakshit.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fakshit.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fakshit.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Akshit</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Vaibhav"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fvaibhav.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fvaibhav.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fvaibhav.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Vaibhav</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Protocol Lead
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Ramit"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Framit.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Framit.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Framit.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Ramit</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Harsh"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fharsh.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fharsh.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fharsh.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Harsh</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Max"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fmax.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fmax.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fmax.jpg&amp;w=384&amp;q=100" width="150" height="100"
                    decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Max</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Mobile Dev Lead
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Serg"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fserg.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fserg.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fserg.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Serg</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Growth &amp;
                    Partnerships</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Yashvendra"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fyashvendra.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fyashvendra.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fyashvendra.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Yashvendra</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Business Dev Lead
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Parnika"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fparnika.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fparnika.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fparnika.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Parnika</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Marketing Lead
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Aditya"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Faditya.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Faditya.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Faditya.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Aditya</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Design Lead</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Arko"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Farko.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Farko.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Farko.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Arko</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Motion Designer
                  </div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Om Gupta"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fom.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fom.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fom.jpg&amp;w=384&amp;q=100" width="150" height="100"
                    decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Om Gupta</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Siddhi"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fsiddhi.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fsiddhi.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fsiddhi.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Siddhi</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Marketing
                    Designer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Ambesh"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fambesh.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fambesh.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fambesh.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Ambesh</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Business
                    Development</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Vatsal"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fvatsal.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fvatsal.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fvatsal.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Vatsal</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Arush"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Farush.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Farush.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Farush.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Arush</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Preetham"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fpreetham.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fpreetham.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fpreetham.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Preetham</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Marketing</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
                <div
                  className="bg-custom-2 backdrop-blur-3xl rounded-lg flex items-center justify-center flex-col p-4 w-full mx-auto">
                  <img alt="Manavendra"
                    srcset="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fmavn.jpg&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fmavn.jpg&amp;w=384&amp;q=100 2x"
                    src="https://huddle01.com/_next/image?url=%2Fimages%2FAbout%2FTeam%2Fmavn.jpg&amp;w=384&amp;q=100" width="150"
                    height="100" decoding="async" data-nimg="1" className="rounded mb-4"
                  />
                  <div className="text-gray-300 font-inter font-semibold text-lg text-center">Manavendra</div>
                  <div className="md:mb-4 mb-2 text-base font-normal font-inter text-custom-10 text-center ">Developer</div>
                  <div className="flex items-center md:mt-2 mt-4">
                    <div className="mr-4 cursor-pointer" role="presentation"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                        fill="#98A2B3"></path>
                    </svg></div>
                    <div role="presentation" className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3474_72219)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="#98A2B3"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3474_72219">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-16 px-4 md:mb-24 mb-16 w-full undefined">
              <div className="text-center mb-12">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Socials</div>
                <div className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans max-w-3xl  mx-auto text-[28px] pb-1">Join the Global Community of D-App</div>
              </div>
              <div className="grid md:grid-cols-4 gap-6 grid-cols-2">
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Twitter" srcset="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FTwitter.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FTwitter.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FTwitter.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Twitter</div>
                </div>
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Discord" srcset="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FDiscord.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FDiscord.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FDiscord.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Discord</div>
                </div>
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Linkedin" srcset="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FLinkedin.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FLinkedin.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FLinkedin.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Linkedin</div>
                </div>
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Substack" srcset="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FSubstack.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FSubstack.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FSubstack.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Substack</div>
                </div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default AboutUs