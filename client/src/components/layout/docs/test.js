import React from 'react'
import { Link } from 'react-router-dom'

const OverView = () => {
  return (
    <div className='DOCS'>
      <div className="nextra-container main-container flex flex-col">
        <div className="nextra-nav-container sticky top-0 z-20 w-full bg-transparent dark">
          <div className="nextra-nav-container-blur pointer-events-none absolute h-full w-full bg-white dark:bg-dark"></div>
          <main className='DOCS'>
            <div className="mx-auto flex w-full flex-1 items-stretch max-w-[90rem]">
              <aside
                className="nextra-sidebar-container nextra-scrollbar fixed top-16 z-[15] h-[calc(100vh-4rem)] w-full flex-shrink-0 self-start overflow-y-auto md:sticky md:w-64 md:block with-menu">
                <div className="nextra-sidebar h-full w-full select-none pl-[calc(env(safe-area-inset-left)-1.5rem)] md:h-auto">
                  <div className="min-h-[calc(100vh-4rem-61px)] p-4">
                    <div
                      className="sticky top-0 z-[1] block md:hidden -mt-4 mb-4 bg-white pt-4 dark:bg-dark shadow-[0_2px_14px_6px_#fff] dark:shadow-[0_2px_14px_6px_#111]">
                      <div className="nextra-search relative md:w-64">
                        <div
                          className="relative flex items-center text-gray-900 dark:text-gray-300 contrast-more:text-gray-800 contrast-more:dark:text-gray-300">
                          <input spellcheck="false"
                            className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors md:text-sm text-base leading-tight bg-black/[.03] dark:bg-gray-50/10 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:bg-dark dark:focus:ring-gray-100/20 placeholder:text-gray-400 dark:placeholder:text-gray-500 contrast-more:border contrast-more:border-current"
                            type="search" placeholder="Search documentation..." value="" /><kbd
                              className="absolute ltr:right-1.5 rtl:left-1.5 my-1.5 select-none rounded bg-white px-1.5 h-5 font-mono font-medium text-gray-500 text-[10px] border dark:bg-dark/50 dark:border-gray-100/20 contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 hidden sm:flex pointer-events-none transition-opacity opacity-100">CTRL K</kbd></div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <ul className="nextra-sidebar-list">
                        <li className="open">
                          <Link className="cursor-pointer !flex gap-2 items-center justify-between [word-break:break-word]"
                            to="/docs">
                            Introduction
                            <svg fill="none" viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"
                                className="origin-center transition-transform rtl:-rotate-180 ltr:rotate-90 rtl:rotate-[-270deg]">
                              </path>
                            </svg>
                          </Link>
                          <div className="transform-gpu overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none">
                            <div className="p-2 transform-gpu overflow-hidden transition-opacity duration-500 ease-in-out motion-reduce:transition-none">
                              <ul className="nextra-sidebar-list">
                                <li className="active">
                                  <Link className="break-words" to="/docs">Huddle01 Overview</Link>
                                </li>
                                <li className="">
                                  <Link className="break-words" to="/docs">SDK Overview</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="">
                          <Link className="break-words" to="/docs">FAQs</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
              <article className="flex w-full min-w-0 max-w-full justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]" >
                <main className="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
                  <ul
                    className="nextra-breadcrumb mt-2.5 flex items-center gap-1 overflow-hidden text-sm text-gray-500 contrast-more:text-current">
                    <li className="transition-colors whitespace-nowrap min-w-[24px] overflow-hidden text-ellipsis" title="Docs">
                      Docs</li><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <li className="transition-colors whitespace-nowrap min-w-[24px] overflow-hidden text-ellipsis"
                      title="Introduction">Introduction</li><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-3.5 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <li
                      className="transition-colors whitespace-nowrap text-gray-700 dark:text-gray-400 font-medium contrast-more:font-bold contrast-more:text-current contrast-more:dark:text-current"
                      title="Huddle01 Overview">Huddle01 Overview</li>
                  </ul>
                  <h1 className="mt-2 text-4xl font-bold tracking-tight">Introduction</h1>
                  <blockquote
                    className="mt-6 first:mt-0 border-gray-300 italic text-gray-700 dark:border-gray-700 dark:text-gray-400 rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
                    <p className="mt-6 first:mt-0 leading-7">Strive to build products that provide utility to the end user. <br />
                      -- Susmit ( CTO, Co-Founder - D-App )</p>
                  </blockquote>
                  <h3 className="font-semibold tracking-tight mt-8 text-2xl"><span className="subheading-anchor -mt-20"
                    id="what-is-huddle01"></span><a href="#what-is-huddle01"><strong>What is D-App?</strong></a></h3>
                  <p className="mt-6 first:mt-0 leading-7">Huddle01 is a web3 video meeting platform built for web3 communities,
                    DAOs, buidlers and web3 enthusiasts. We aim to bring the world closer via seamless video calling from
                    anywhere in the world and serve people with newer ways to express their thoughts and feelings without
                    any concerns.</p>
                  <br />
                  <img src="https://huddle01.com/docs/images/docs/huddle01-overview.png" alt="drawing" width="100%" />
                  <br />
                  <p className="mt-6 first:mt-0 leading-7">Huddle01 provides web3-rich features such as:</p>
                  <ul className="ltr:ml-6 rtl:mr-6 mt-6 list-disc first:mt-0">
                    <li className="my-2">Token-gated meetings</li>
                    <li className="my-2">NFTs as profile pictures</li>
                    <li className="my-2">Decentralised storage for meeting recordings (on IPFS and Filecoin)</li>
                    <li className="my-2">Decentralised live streaming (on Livepeer), and much more!</li>
                  </ul>
                </main>
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default OverView