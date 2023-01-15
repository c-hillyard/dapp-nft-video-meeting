import React from 'react'
import { useHistory } from "react-router-dom"

const Sidebar = () => {
  let history = useHistory()
  const [tab, setTab] = React.useState('/dashboard')

  const goPage = async location => {
    await history.push(`/`)
    if (location === 'overview') {
      await history.push(`/dashboard`)
      return
    }
    await history.push(`/dashboard`)
    await history.push(`/dashboard/${location}`)
  }

  React.useEffect(() => {
    setTab(history.location.pathname)
  }, [history.location.pathname])

  return (
    <div role="toolbar" aria-orientation="vertical" dir="ltr" className="dark:bg-customDark-1 transition-width transition-slowest ease dark:border-customDark-2 h-screen w-fit border-r-2 border-slate-300 bg-zinc-50 py-5 px-4 text-slate-500 transition duration-700 dark:border-r-2 dark:text-slate-400" tabIndex="0" data-orientation="vertical">
      <div className="mx-auto flex justify-center">
        <div className="mr-2">
          <img alt="logo" src="/image/logo.png" width="130" height="28" decoding="async" data-nimg="1" />
        </div>
      </div>
      <div role="group" dir="ltr" data-orientation="vertical" aria-label="Sidebar" className="mt-8">
        <div className="pb-4">
          <button onClick={() => goPage('overview')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="overview" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.35843 1.72925H7.17509C8.35009 1.72925 9.29176 2.68758 9.29176 3.86341V6.70425C9.29176 7.88758 8.35009 8.83758 7.17509 8.83758H4.35843C3.19176 8.83758 2.24176 7.88758 2.24176 6.70425V3.86341C2.24176 2.68758 3.19176 1.72925 4.35843 1.72925ZM4.35843 11.8376H7.17509C8.35009 11.8376 9.29176 12.7884 9.29176 13.9718V16.8126C9.29176 17.9876 8.35009 18.9459 7.17509 18.9459H4.35843C3.19176 18.9459 2.24176 17.9876 2.24176 16.8126V13.9718C2.24176 12.7884 3.19176 11.8376 4.35843 11.8376ZM17.2251 1.72925H14.4084C13.2334 1.72925 12.2918 2.68758 12.2918 3.86341V6.70425C12.2918 7.88758 13.2334 8.83758 14.4084 8.83758H17.2251C18.3918 8.83758 19.3418 7.88758 19.3418 6.70425V3.86341C19.3418 2.68758 18.3918 1.72925 17.2251 1.72925ZM14.4084 11.8376H17.2251C18.3918 11.8376 19.3418 12.7884 19.3418 13.9718V16.8126C19.3418 17.9876 18.3918 18.9459 17.2251 18.9459H14.4084C13.2334 18.9459 12.2918 17.9876 12.2918 16.8126V13.9718C12.2918 12.7884 13.2334 11.8376 14.4084 11.8376Z" fill="#777E91"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize ">overview</div>
          </button>
          <button onClick={() => goPage('meetings')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="meetings" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/meetings' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3286 6.87469L9.32063 11.6952L3.62473 8.30223C2.80863 7.81595 2.97839 6.63536 3.90148 6.37827L17.425 2.60647C18.2703 2.37052 19.0537 3.12319 18.8026 3.93083L14.8017 16.8015C14.5276 17.6818 13.295 17.8391 12.7893 17.0585L9.31797 11.696" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize dark:text-slate-400 ">meetings</div>
          </button>
          <button onClick={() => goPage('storage')} type="button" data-state="off" role="radio" aria-checked="false"
            aria-label="storage" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/storage' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div><svg width="22" height="21" viewBox="0 0 22 21" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M19.2927 13.1725C19.2927 16.1542 17.4473 17.9117 14.3165 17.9117H7.50728C4.36865 17.9117 2.51978 16.1542 2.51978 13.1725V6.6725C2.51978 3.695 3.66953 1.9375 6.80115 1.9375H8.55115C9.1794 1.93833 9.7709 2.21917 10.1472 2.69833L10.946 3.71C11.324 4.18833 11.9155 4.47 12.5438 4.47083H15.02C18.1587 4.47083 19.3172 5.9925 19.3172 9.035L19.2927 13.1725Z"
                stroke="#777E91" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.5"></path>
              <path d="M7.09698 12.1149H14.7401" stroke="#777E91" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg></div>
            <div className="ml-2 capitalize dark:text-slate-400 ">storage</div>
          </button>
          <button onClick={() => goPage('collections')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="collections" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/collections' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.3561 17.0767C16.9169 17.0767 18.1827 15.8117 18.1836 14.2508V14.2492V11.9992C17.1527 11.9992 16.3177 11.1642 16.3169 10.1333C16.3169 9.10333 17.1519 8.2675 18.1827 8.2675H18.1836V6.0175C18.1852 4.45583 16.9211 3.18917 15.3602 3.1875H15.3552H5.59524C4.03357 3.1875 2.76774 4.4525 2.76691 6.01417V6.015V8.34C3.76191 8.305 4.59607 9.08333 4.63107 10.0783C4.63191 10.0967 4.63274 10.115 4.63274 10.1333C4.63357 11.1625 3.80107 11.9975 2.77191 11.9992H2.76691V14.2492C2.76607 15.81 4.03191 17.0767 5.59274 17.0767H5.59357H15.3561Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7845 7.61511L11.2978 8.65427C11.3478 8.75594 11.4445 8.82677 11.557 8.84344L12.7045 9.01094C12.9886 9.05261 13.1011 9.40094 12.8961 9.60011L12.0661 10.4084C11.9845 10.4876 11.9478 10.6018 11.9661 10.7143L12.162 11.8559C12.2103 12.1384 11.9145 12.3534 11.6611 12.2201L10.6353 11.6809C10.5345 11.6276 10.4145 11.6276 10.3136 11.6809L9.28865 12.2201C9.03448 12.3534 8.73865 12.1384 8.78698 11.8559L8.98282 10.7143C9.00198 10.6018 8.96448 10.4876 8.88282 10.4084L8.05365 9.60011C7.84865 9.40094 7.96115 9.05261 8.24448 9.01094L9.39198 8.84344C9.50448 8.82677 9.60198 8.75594 9.65198 8.65427L10.1645 7.61511C10.2911 7.35844 10.6578 7.35844 10.7845 7.61511Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize dark:text-slate-400 ">collections</div>
          </button>
        </div>
        <div className="transition-border border-b-2 border-t-2 border-slate-300 py-4 duration-700 dark:border-b-2 dark:border-t-2 dark:border-[#23262F]">
          <button onClick={() => goPage('profile')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="collections" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/profile' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.9632 12.848C7.74017 12.848 4.98779 13.3353 4.98779 15.2869C4.98779 17.2385 7.72271 17.7433 10.9632 17.7433C14.1862 17.7433 16.9378 17.2552 16.9378 15.3044C16.9378 13.3536 14.2037 12.848 10.9632 12.848Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.9632 10.0644C13.0783 10.0644 14.7926 8.34935 14.7926 6.23427C14.7926 4.11919 13.0783 2.40491 10.9632 2.40491C8.84816 2.40491 7.13308 4.11919 7.13308 6.23427C7.12594 8.34221 8.82911 10.0573 10.9363 10.0644H10.9632Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize transition-none dark:text-slate-400">profile</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar