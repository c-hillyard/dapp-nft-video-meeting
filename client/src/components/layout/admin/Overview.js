import React from 'react'
import RightSidebar from './RightSidebar'

const Overview = () => {
  return (
    <main className="no-scrollbar overflow-y-auto px-12 pt-9 pb-28">
      <section className="text-white">
        <div className='row'>
          <div className='col-lg-9'>
            <section className="no-scrollbar h-full overflow-y-auto">
              <section className="mb-5 lg:w-full h-fit rounded-2xl border-2 border-transparent p-4 transition duration-700 dark:border-2 dark:bg-zinc-900">
                <div className='d-flex mb-3'>
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="8" fill="url(#paint0_linear_823_3934)">
                      </rect>
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M14.7676 9.53813C14.7676 11.0736 13.5365 12.3049 11.9999 12.3049C10.4638 12.3049 9.23212 11.0736 9.23212 9.53813C9.23212 8.00262 10.4638 6.77191 11.9999 6.77191C13.5365 6.77191 14.7676 8.00262 14.7676 9.53813ZM11.9999 17.2281C9.73211 17.2281 7.81738 16.8595 7.81738 15.4375C7.81738 14.0149 9.74414 13.6594 11.9999 13.6594C14.2681 13.6594 16.1823 14.028 16.1823 15.45C16.1823 16.8726 14.2556 17.2281 11.9999 17.2281Z"
                        fill="#F8FAFC"></path>
                      <defs>
                        <linearGradient id="paint0_linear_823_3934" x1="12" y1="0" x2="12"
                          y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5A90FF"></stop>
                          <stop offset="0.5" stopColor="#3F7EFE"></stop>
                          <stop offset="1" stopColor="#246BFD"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className=" font-500 z-10 text-base leading-6 text-slate-800 transition duration-700 dark:text-slate-300 ">
                    Your personal room
                  </p>
                </div>
                <div
                  className="dark:bg-rgbColors-6 relative z-10 mb-4 rounded-lg bg-slate-50 px-3 py-3 text-sm font-light leading-4 text-slate-400 backdrop-blur-3xl transition duration-700">
                  <p className="text-slate-500 dark:text-slate-400  ">app.huddle01.com/<span
                    className="font-medium text-slate-600 dark:text-slate-300">0x41A2A38499</span>
                  </p>
                </div>
                <div className="relative z-10 flex w-full items-center justify-end">
                  <div role="group" dir="ltr" aria-label="meeting util" tabIndex="0"
                  ><button type="button" data-state="on" role="radio"
                    aria-checked="true"
                    className="mr-2 rounded-xl border-2 border-slate-400 py-2 px-3 text-sm font-semibold text-slate-500 transition duration-700 hover:opacity-80 dark:border-2 dark:border-gray-700 dark:text-slate-300"
                    aria-label="Copy Meeting Link" tabIndex="-1"
                    data-radix-collection-item="">
                      <p className="w-32">Copy Meeting Link</p>
                    </button><button type="button" data-state="off" role="radio"
                      aria-checked="false"
                      className="outline-brand border-brand bg-brand mr-2 rounded-xl border-2 py-2 px-3 text-sm font-semibold text-white hover:opacity-80"
                      aria-label="Start Meeting" tabIndex="-1" data-radix-collection-item="">
                      <p className="w-32">Start Meeting</p>
                    </button></div>
                </div>
              </section>
              <section className="lg:w-full h-fit rounded-2xl border-2 border-transparent p-4 transition duration-700 dark:border-2 dark:bg-zinc-900">
                <div className="align-center mb-6 flex justify-between text-base">
                  <h1 className="text-slate-800 dark:text-slate-300">Overall Statistics</h1>
                </div>
                <section className="row">
                  <div className='col-lg-4  mb-4'>
                    <div className="undefined  align-center flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6  transition duration-700 dark:border-2 dark:border-slate-700">
                      <div className="my-1 mr-4 ">
                        <svg width="33" height="33" viewBox="0 0 33 33"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.424805" y="0.9375" width="32" height="32" rx="16"
                            fill="url(#paint0_linear_1200_5693)"></rect>
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M12.5001 11.9375H16.3615C17.9761 11.9375 19.1035 13.0502 19.1035 14.6448V19.2302C19.1035 20.8248 17.9761 21.9375 16.3615 21.9375H12.5001C10.8854 21.9375 9.75806 20.8248 9.75806 19.2302V14.6448C9.75806 13.0502 10.8854 11.9375 12.5001 11.9375ZM21.73 13.5235C22.0227 13.3746 22.366 13.3902 22.6454 13.5661C22.9247 13.7414 23.0914 14.046 23.0914 14.379V19.4964C23.0914 19.8301 22.9247 20.134 22.6454 20.3093C22.4927 20.4047 22.322 20.4534 22.15 20.4534C22.0067 20.4534 21.8634 20.4196 21.7294 20.3512L20.742 19.8531C20.3767 19.6677 20.15 19.2954 20.15 18.8819V14.9929C20.15 14.5787 20.3767 14.2064 20.742 14.0223L21.73 13.5235Z"
                            fill="#F8FAFC"></path>
                          <defs>
                            <linearGradient id="paint0_linear_1200_5693" x1="16.4248"
                              y1="0.9375" x2="16.4248" y2="32.9375"
                              gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FF0A7F"></stop>
                              <stop offset="1" stopColor="#F885BC"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <section className="flex-1 ">
                        <p className="mb-1 text-4xl font-semibold text-slate-500 transition duration-700 dark:text-slate-50 undefined">0</p>
                        <div className="flex items-center text-xs font-medium text-slate-400">
                          <p>Hosted Meetings</p>
                          <div className="ml-1 cursor-pointer" data-state="closed"><svg width="16"
                            height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.6666 8.99064C14.6666 12.6725 11.6818 15.6573 7.99992 15.6573C4.31802 15.6573 1.33325 12.6725 1.33325 8.99064C1.33325 5.30874 4.31802 2.32397 7.99992 2.32397C11.6818 2.32397 14.6666 5.30874 14.6666 8.99064ZM7.99992 8.32397C8.36811 8.32397 8.66659 8.62245 8.66659 8.99064V12.3246C8.66659 12.6928 8.36811 12.9912 7.99992 12.9912C7.63173 12.9912 7.33325 12.6928 7.33325 12.3246V8.99064C7.33325 8.62245 7.63173 8.32397 7.99992 8.32397ZM7.99992 6.99064C8.36811 6.99064 8.66659 6.69216 8.66659 6.32397C8.66659 5.95578 8.36811 5.65731 7.99992 5.65731C7.63173 5.65731 7.33325 5.95578 7.33325 6.32397C7.33325 6.69216 7.63173 6.99064 7.99992 6.99064Z"
                              fill="#475569"></path>
                          </svg></div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className='col-lg-4  mb-4'>
                    <div className="undefined  align-center flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6  transition duration-700 dark:border-2 dark:border-slate-700">
                      <div className="my-1 mr-4 "><svg width="32" height="32" viewBox="0 0 32 32"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16"
                          fill="url(#paint0_linear_1200_5707)"></rect>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.9999 22.6668C12.3199 22.6668 9.33325 19.6868 9.33325 16.0002C9.33325 12.3202 12.3199 9.3335 15.9999 9.3335C19.6866 9.3335 22.6666 12.3202 22.6666 16.0002C22.6666 19.6868 19.6866 22.6668 15.9999 22.6668ZM18.1266 18.4735C18.2066 18.5202 18.2933 18.5468 18.3866 18.5468C18.5533 18.5468 18.7199 18.4602 18.8133 18.3002C18.9533 18.0668 18.8799 17.7602 18.6399 17.6135L16.2666 16.2002V13.1202C16.2666 12.8402 16.0399 12.6202 15.7666 12.6202C15.4933 12.6202 15.2666 12.8402 15.2666 13.1202V16.4868C15.2666 16.6602 15.3599 16.8202 15.5133 16.9135L18.1266 18.4735Z"
                          fill="#F8FAFC"></path>
                        <defs>
                          <linearGradient id="paint0_linear_1200_5707" x1="16" y1="32"
                            x2="16" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5A90FF"></stop>
                            <stop offset="0.5" stopColor="#3F7EFE"></stop>
                            <stop offset="1" stopColor="#246BFD"></stop>
                          </linearGradient>
                        </defs>
                      </svg></div>
                      <section className="flex-1 ">
                        <p
                          className="mb-1 text-4xl font-semibold text-slate-500 transition duration-700 dark:text-slate-50 undefined">
                          0</p>
                        <div className="flex items-center text-xs font-medium text-slate-400">
                          <p>Total duration</p>
                          <div className="ml-1 cursor-pointer" data-state="closed"><svg width="16"
                            height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.6666 8.99064C14.6666 12.6725 11.6818 15.6573 7.99992 15.6573C4.31802 15.6573 1.33325 12.6725 1.33325 8.99064C1.33325 5.30874 4.31802 2.32397 7.99992 2.32397C11.6818 2.32397 14.6666 5.30874 14.6666 8.99064ZM7.99992 8.32397C8.36811 8.32397 8.66659 8.62245 8.66659 8.99064V12.3246C8.66659 12.6928 8.36811 12.9912 7.99992 12.9912C7.63173 12.9912 7.33325 12.6928 7.33325 12.3246V8.99064C7.33325 8.62245 7.63173 8.32397 7.99992 8.32397ZM7.99992 6.99064C8.36811 6.99064 8.66659 6.69216 8.66659 6.32397C8.66659 5.95578 8.36811 5.65731 7.99992 5.65731C7.63173 5.65731 7.33325 5.95578 7.33325 6.32397C7.33325 6.69216 7.63173 6.99064 7.99992 6.99064Z"
                              fill="#475569"></path>
                          </svg></div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className='col-lg-4  mb-4'>
                    <div className="undefined  align-center flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6  transition duration-700 dark:border-2 dark:border-slate-700">
                      <div className="my-1 mr-4 "><svg width="32" height="32" viewBox="0 0 32 32"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16"
                          fill="url(#paint0_linear_1200_5680)"></rect>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M22.5247 15.0261C22.4345 15.1138 22.312 15.1639 22.183 15.1639C21.7059 15.1639 21.3191 15.5397 21.3191 15.9969C21.3191 16.4573 21.7014 16.8312 22.174 16.8363C22.4403 16.8388 22.6666 17.0191 22.6666 17.2778V18.8844C22.6666 20.2367 21.5383 21.3334 20.1456 21.3334H18.0438C17.8265 21.3334 17.6505 21.1624 17.6505 20.9513V19.5984C17.6505 19.3354 17.4377 19.1287 17.1669 19.1287C16.9026 19.1287 16.6833 19.3354 16.6833 19.5984V20.9513C16.6833 21.1624 16.5073 21.3334 16.2907 21.3334H11.8542C10.468 21.3334 9.33325 20.2373 9.33325 18.8844V17.2778C9.33325 17.0191 9.55956 16.8388 9.82584 16.8363C10.2991 16.8312 10.6808 16.4573 10.6808 15.9969C10.6808 15.5522 10.3068 15.214 9.81681 15.214C9.68786 15.214 9.56536 15.1639 9.4751 15.0762C9.38483 14.9885 9.33325 14.8695 9.33325 14.7443V13.122C9.33325 11.7716 10.4706 10.6667 11.8607 10.6667H16.2907C16.5073 10.6667 16.6833 10.8377 16.6833 11.0488V12.6523C16.6833 12.9091 16.9026 13.122 17.1669 13.122C17.4377 13.122 17.6505 12.9091 17.6505 12.6523V11.0488C17.6505 10.8377 17.8265 10.6667 18.0438 10.6667H20.1456C21.5383 10.6667 22.6666 11.7629 22.6666 13.1158V14.6942C22.6666 14.8194 22.615 14.9384 22.5247 15.0261ZM17.1669 17.9136C17.4377 17.9136 17.6505 17.7006 17.6505 17.4438V14.9384C17.6505 14.6816 17.4377 14.4687 17.1669 14.4687C16.9026 14.4687 16.6833 14.6816 16.6833 14.9384V17.4438C16.6833 17.7006 16.9026 17.9136 17.1669 17.9136Z"
                          fill="#F8FAFC"></path>
                        <defs>
                          <linearGradient id="paint0_linear_1200_5680" x1="16" y1="0"
                            x2="16" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6B38FC"></stop>
                            <stop offset="1" stopColor="#9F7EFD"></stop>
                          </linearGradient>
                        </defs>
                      </svg></div>
                      <section className="flex-1 ">
                        <p
                          className="mb-1 text-4xl font-semibold text-slate-500 transition duration-700 dark:text-slate-50 undefined">
                          0</p>
                        <div className="flex items-center text-xs font-medium text-slate-400">
                          <p>Total collectibles</p>
                          <div className="ml-1 cursor-pointer" data-state="closed"><svg width="16"
                            height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.6666 8.99064C14.6666 12.6725 11.6818 15.6573 7.99992 15.6573C4.31802 15.6573 1.33325 12.6725 1.33325 8.99064C1.33325 5.30874 4.31802 2.32397 7.99992 2.32397C11.6818 2.32397 14.6666 5.30874 14.6666 8.99064ZM7.99992 8.32397C8.36811 8.32397 8.66659 8.62245 8.66659 8.99064V12.3246C8.66659 12.6928 8.36811 12.9912 7.99992 12.9912C7.63173 12.9912 7.33325 12.6928 7.33325 12.3246V8.99064C7.33325 8.62245 7.63173 8.32397 7.99992 8.32397ZM7.99992 6.99064C8.36811 6.99064 8.66659 6.69216 8.66659 6.32397C8.66659 5.95578 8.36811 5.65731 7.99992 5.65731C7.63173 5.65731 7.33325 5.95578 7.33325 6.32397C7.33325 6.69216 7.63173 6.99064 7.99992 6.99064Z"
                              fill="#475569"></path>
                          </svg></div>
                        </div>
                      </section>
                    </div>
                  </div>
                </section>
                <section className="row d-flex align-items-stretch">
                  <div className='col-lg-6  mb-4'>
                    <div className="col-span-2  align-center  flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6 transition duration-700 dark:border-2 dark:border-slate-700 ">
                      <div className="my-3 mr-4 "><svg width="33" height="33" viewBox="0 0 33 33"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.575195" y="0.5625" width="32" height="32" rx="16"
                          fill="url(#paint0_linear_713_4882)"></rect>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M16.7928 10.0355C16.8993 9.93997 17.0401 9.88988 17.1843 9.8963C20.2315 9.98752 22.7782 12.1996 23.2397 15.1562C23.2426 15.1738 23.2426 15.1918 23.2397 15.2095C23.2496 15.3494 23.2024 15.4874 23.1083 15.593C23.0143 15.6986 22.8812 15.7631 22.7386 15.7722L17.6189 16.1098C17.4496 16.1248 17.2817 16.0691 17.1565 15.9564C17.0312 15.8436 16.9602 15.6843 16.9609 15.5175L16.6168 10.4886V10.4057C16.623 10.2643 16.6864 10.1311 16.7928 10.0355ZM16.4417 17.4248L20.8791 17.1405L20.9093 17.1523C21.0998 17.1554 21.2813 17.2327 21.4138 17.3671C21.5463 17.5015 21.6189 17.6821 21.6157 17.869C21.4408 20.4171 19.5727 22.5461 17.0304 23.0946C14.4882 23.6431 11.882 22.4794 10.6338 20.2383C10.2667 19.5929 10.0348 18.882 9.95154 18.1474C9.91926 17.9298 9.90512 17.7099 9.90928 17.4899C9.91769 14.7805 11.8468 12.4418 14.5459 11.8688C14.8727 11.8076 15.2003 11.9707 15.3429 12.2656C15.3784 12.3191 15.4068 12.3768 15.4274 12.4374C15.478 13.2184 15.5305 13.9921 15.5827 14.7625C15.624 15.3709 15.6652 15.9773 15.7051 16.5837C15.7031 16.7265 15.7255 16.8687 15.7715 17.0042C15.8799 17.2709 16.1495 17.4401 16.4417 17.4248Z"
                          fill="white"></path>
                        <defs>
                          <linearGradient id="paint0_linear_713_4882" x1="16.5752"
                            y1="32.5625" x2="16.5193" y2="-2.93947"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF83DC"></stop>
                            <stop offset="1" stopColor="#A20877"></stop>
                          </linearGradient>
                        </defs>
                      </svg></div>
                      <section className="flex-1 ">
                        <p className="dark:text-customLight-7 text-sm font-medium text-slate-500">
                          Total Storage</p>
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="66"
                          aria-valuetext="66%" role="progressbar" data-state="loading"
                          data-value="66" data-max="100"
                          className="relative mt-2 h-4 w-full overflow-hidden rounded-full bg-slate-200 transition duration-700 dark:bg-gray-700">
                          <div data-state="loading" data-value="66" data-max="100"
                            className="transition-loading h-full bg-gradient-to-r from-[#8263DBC7] to-[#341D65] duration-500 ease-in-out "></div>
                        </div>
                        <p className="mt-3 text-xs font-normal text-slate-400 dark:text-slate-300">0
                          MB of 100 GB Used</p>
                      </section>
                      <div
                        className="animate-spin-fast -mt-5 -mr-3 h-min w-min justify-center filter-none invisible">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                          xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <rect width="32" height="32" fill="url(#pattern0)"></rect>
                          <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                              width="1" height="1">
                              <use xlinkHref="#image0_1363_8786"
                                transform="translate(-1 -1) scale(0.006)"></use>
                            </pattern>
                          </defs>
                        </svg></div>
                    </div>
                  </div>
                  <div className='col-lg-6  mb-4'>
                    <div className="undefined  align-center flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6  transition duration-700 dark:border-2 dark:border-slate-700">
                      <div className="my-1 mr-4 "><svg width="32" height="32" viewBox="0 0 32 32"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16"
                          fill="url(#paint0_linear_1200_5735)"></rect>
                        <path
                          d="M16 22.25C19.4518 22.25 22.25 19.4518 22.25 16C22.25 12.5482 19.4518 9.75 16 9.75C12.5482 9.75 9.75 12.5482 9.75 16C9.75 19.4518 12.5482 22.25 16 22.25ZM20.673 16C20.673 18.5808 18.5808 20.673 16 20.673C13.4192 20.673 11.327 18.5808 11.327 16C11.327 13.4192 13.4192 11.327 16 11.327C18.5808 11.327 20.673 13.4192 20.673 16ZM15.9999 18.5001C17.3806 18.5001 18.4999 17.3808 18.4999 16.0001C18.4999 14.6194 17.3806 13.5001 15.9999 13.5001C14.6192 13.5001 13.4999 14.6194 13.4999 16.0001C13.4999 17.3808 14.6192 18.5001 15.9999 18.5001Z"
                          fill="#F8FAFC" stroke="#F8FAFC" strokeWidth="0.5"></path>
                        <defs>
                          <linearGradient id="paint0_linear_1200_5735" x1="16" y1="32"
                            x2="16" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#929DFF"></stop>
                            <stop offset="1" stopColor="#5034FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg></div>
                      <section className="flex-1 ">
                        <p
                          className="mb-1 text-4xl font-semibold text-slate-500 transition duration-700 dark:text-slate-50 undefined">
                          0</p>
                        <div className="flex items-center text-xs font-medium text-slate-400">
                          <p>Recordings</p>
                          <div className="ml-1 cursor-pointer" data-state="closed"><svg width="16"
                            height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.6666 8.99064C14.6666 12.6725 11.6818 15.6573 7.99992 15.6573C4.31802 15.6573 1.33325 12.6725 1.33325 8.99064C1.33325 5.30874 4.31802 2.32397 7.99992 2.32397C11.6818 2.32397 14.6666 5.30874 14.6666 8.99064ZM7.99992 8.32397C8.36811 8.32397 8.66659 8.62245 8.66659 8.99064V12.3246C8.66659 12.6928 8.36811 12.9912 7.99992 12.9912C7.63173 12.9912 7.33325 12.6928 7.33325 12.3246V8.99064C7.33325 8.62245 7.63173 8.32397 7.99992 8.32397ZM7.99992 6.99064C8.36811 6.99064 8.66659 6.69216 8.66659 6.32397C8.66659 5.95578 8.36811 5.65731 7.99992 5.65731C7.63173 5.65731 7.33325 5.95578 7.33325 6.32397C7.33325 6.69216 7.63173 6.99064 7.99992 6.99064Z"
                              fill="#475569"></path>
                          </svg></div>
                        </div>
                      </section>
                    </div>
                  </div>
                </section>
              </section>
              <div data-orientation="horizontal" className="pb-8">
                <section
                  className="dark:bg-zinc-900 mt-4 rounded-2xl p-4 transition duration-700">
                  <div className="mb-4 flex w-full items-center justify-between">
                    <div className="flex items-center"><span><svg width="24" height="24"
                      viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="8"
                        fill="url(#paint0_linear_1200_6762)"></rect>
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M14.7677 9.53819C14.7677 11.0737 13.5366 12.3049 12 12.3049C10.4639 12.3049 9.23224 11.0737 9.23224 9.53819C9.23224 8.00268 10.4639 6.77197 12 6.77197C13.5366 6.77197 14.7677 8.00268 14.7677 9.53819ZM12 17.2282C9.73223 17.2282 7.8175 16.8596 7.8175 15.4375C7.8175 14.015 9.74426 13.6594 12 13.6594C14.2683 13.6594 16.1825 14.028 16.1825 15.4501C16.1825 16.8727 14.2557 17.2282 12 17.2282Z"
                        fill="#F8FAFC"></path>
                      <defs>
                        <linearGradient id="paint0_linear_1200_6762" x1="12" y1="0"
                          x2="12" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5A90FF"></stop>
                          <stop offset="0.5" stopColor="#3F7EFE"></stop>
                          <stop offset="1" stopColor="#246BFD"></stop>
                        </linearGradient>
                      </defs>
                    </svg></span><span
                      className="ml-3 text-base font-medium text-slate-800 dark:text-slate-300 transition duration-700">Set
                        a name</span></div>
                    <div role="tablist" aria-orientation="horizontal" dir="ltr" tabIndex="0"
                      data-orientation="horizontal"><button
                        type="button" role="tab" aria-selected="true"
                        aria-controls="radix-:r9:-content-tab1" data-state="active"
                        id="radix-:r9:-trigger-tab1" tabIndex="-1"
                        data-orientation="horizontal" data-radix-collection-item="">
                        <div className="cursor-pointer"><svg width="24" height="24"
                          viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.66976 1.99927H16.3398C19.7298 1.99927 21.9998 4.37927 21.9998 7.91927V16.0903C21.9998 19.6203 19.7298 21.9993 16.3398 21.9993H7.66976C4.27976 21.9993 1.99976 19.6203 1.99976 16.0903V7.91927C1.99976 4.37927 4.27976 1.99927 7.66976 1.99927ZM15.0098 14.9993C15.3498 14.6603 15.3498 14.1103 15.0098 13.7703L13.2298 11.9903L15.0098 10.2093C15.3498 9.87027 15.3498 9.31027 15.0098 8.97027C14.6698 8.62927 14.1198 8.62927 13.7698 8.97027L11.9998 10.7493L10.2198 8.97027C9.86976 8.62927 9.31976 8.62927 8.97976 8.97027C8.63976 9.31027 8.63976 9.87027 8.97976 10.2093L10.7598 11.9903L8.97976 13.7603C8.63976 14.1103 8.63976 14.6603 8.97976 14.9993C9.14976 15.1693 9.37976 15.2603 9.59976 15.2603C9.82976 15.2603 10.0498 15.1693 10.2198 14.9993L11.9998 13.2303L13.7798 14.9993C13.9498 15.1803 14.1698 15.2603 14.3898 15.2603C14.6198 15.2603 14.8398 15.1693 15.0098 14.9993Z"
                            fill="#475569"></path>
                        </svg></div>
                      </button></div>
                  </div>
                  <p
                    className="text-gray-500 dark:text-slate-400 mb-4 max-w-2xl text-sm font-normal transition duration-700">
                    Everyone on Huddle01 knows you as 0x41A2...38499. Set your ens name as
                    default name or set a custom name by going to your profile.</p>
                  <div role="tablist" aria-orientation="horizontal" dir="ltr" tabIndex="0"
                    data-orientation="horizontal"><button type="button"
                      className="rounded-xl py-2 px-3 text-sm font-semibold hover:opacity-80  dark:text-slate-400 text-slate-500 dark:border-gray-700 border-slate-300 dark:border-2 border-2 undefined transition duration-700">Change
                      Name</button></div>
                </section>
              </div>
            </section>
          </div>
          <div className='col-lg-3'>
            <RightSidebar />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Overview