import React from 'react'
import ellipseAddress from '../../../utils/ellipseAddress'
import MetamaskImage from '../../reuseable/MetamaskImage'
import { useHistory } from 'react-router-dom'

const Profile = () => {
  const history = useHistory()
  const [walletAddress, setWalletAddress] = React.useState('')
  React.useEffect(() => {
    let _walletAddress = localStorage.getItem('walletAddress')
    if (_walletAddress === "null") {
      history.push('/')
    } else {
      setWalletAddress(localStorage.getItem('walletAddress'))
    }
  }, [])

  return (
    <main className="no-scrollbar h-full w-full overflow-y-auto px-12 pt-9 pb-28">
      <section className="w-full">
        <section>
          <div className="grid w-full place-content-center">
            <div role="presentation"
              className="h-32 w-32 dark:border-customDark-1 dark:bg-customDark-2 max-w-32 relative  max-h-32 rounded-full border-2 border-white bg-slate-300 text-white">
              <span className="grid h-full place-content-center  "><svg width="26" height="34" viewBox="0 0 26 34" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.9747 22.5762C6.52869 22.5762 1.02393 23.5508 1.02393 27.454C1.02393 31.3571 6.49377 32.3666 12.9747 32.3666C19.4207 32.3666 24.9239 31.3905 24.9239 27.4889C24.9239 23.5873 19.4557 22.5762 12.9747 22.5762Z"
                  stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.9748 17.0095C17.205 17.0095 20.6335 13.5793 20.6335 9.34916C20.6335 5.119 17.205 1.69043 12.9748 1.69043C8.74466 1.69043 5.3145 5.119 5.3145 9.34916C5.30021 13.565 8.70656 16.9952 12.9208 17.0095H12.9748Z"
                  stroke="#475569" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></span></div>
          </div>
        </section>
        <section className="relative mt-3">
          <section className="text-center">
            <p className="mb-7 cursor-default text-2xl font-bold text-slate-800 dark:text-white"></p>
            <section className="mb-3 flex items-center justify-center gap-8">
              <div role="button" tabIndex="0"
                className="dark:bg-customDark-2 flex cursor-default items-center rounded-lg bg-neutral-200 py-1 px-4">
                <p className="text-base font-medium text-slate-800 dark:text-slate-500">
                  <MetamaskImage />
                </p>
                <div className="mx-3 h-4 border-l-2 border-slate-500"></div>
                <div className="flex items-center gap-3">
                  <p className="text-brand cursor-pointer hover:opacity-80">{ellipseAddress(walletAddress)}</p><span
                    className="cursor-pointer hover:opacity-80"><svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.875 15.1885V3.93848H5.625" stroke="#475569" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path d="M14.375 6.43848H3.125V17.6885H14.375V6.43848Z" stroke="#475569" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    </svg></span>
                </div>
              </div>
            </section>
            <button type="button" className=" rounded-xl py-2 px-3 text-sm font-semibold hover:opacity-80  dark:text-slate-400 text-slate-500 dark:border-gray-700 border-slate-300 dark:border-2 border-2">
              Edit Profile
            </button>
            {/* <section className="mt-9 flex cursor-default items-center justify-center gap-8">
              <div className="flex items-center gap-2 rounded-xl border border-slate-500 py-3 px-4"><span> <svg width="14"
                height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2.13927C13.4849 2.36419 12.9313 2.51613 12.3504 2.58449C12.9433 2.23457 13.3988 1.68048 13.6132 1.0202C13.0582 1.34428 12.4435 1.57953 11.7893 1.70632C11.2654 1.15678 10.5189 0.813477 9.69275 0.813477C8.10655 0.813477 6.82044 2.07939 6.82044 3.64085C6.82044 3.86246 6.84585 4.07828 6.89485 4.28521C4.50771 4.16731 2.39132 3.04162 0.974658 1.33098C0.727418 1.74856 0.585737 2.23423 0.585737 2.75242C0.585737 3.73339 1.09282 4.59881 1.86352 5.10584C1.3927 5.09116 0.949808 4.96396 0.562567 4.7522C0.56224 4.76399 0.562241 4.77584 0.562241 4.78776C0.562241 6.15765 1.55232 7.30036 2.8663 7.56028C2.62528 7.62492 2.37153 7.65944 2.10959 7.65944C1.92451 7.65944 1.74461 7.64166 1.56919 7.60872C1.93473 8.732 2.99545 9.54946 4.25237 9.5722C3.26936 10.3306 2.03091 10.7826 0.685162 10.7826C0.453321 10.7826 0.224701 10.7692 0 10.7431C1.27113 11.5454 2.78089 12.0135 4.40294 12.0135C9.68606 12.0135 12.5752 7.70513 12.5752 3.96865C12.5752 3.84606 12.5724 3.72416 12.5668 3.60281C13.128 3.20425 13.6149 2.70632 14 2.13927H14Z"
                  fill="#2AA9E0"></path>
              </svg> </span>
                <p className="text-xs text-slate-400"> @twitterhandle </p>
                <p className="text-xs text-slate-500">Not Linked</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-500 py-3 px-4"><span> <svg width="11"
                height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.3758 5.66832C1.49439 5.92181 1.78791 6.42286 1.78791 6.42286L5.18112 0.813477L1.86944 3.12601C1.67211 3.25766 1.51022 3.43584 1.39804 3.64485C1.24721 3.96017 1.16707 4.30462 1.16323 4.65413C1.15939 5.00364 1.23194 5.34977 1.3758 5.66832Z"
                  fill="url(#paint0_linear_1301_11732)"></path>
                <path
                  d="M0.0312004 7.5154C0.0685912 8.05196 0.220191 8.57435 0.475848 9.04757C0.731506 9.52079 1.08532 9.93393 1.5136 10.2593L5.1766 12.8135C5.1766 12.8135 2.88481 9.5107 0.951769 6.22423C0.756068 5.87702 0.624505 5.49739 0.563381 5.10354C0.536322 4.92519 0.536322 4.74378 0.563381 4.56543C0.512979 4.65882 0.415141 4.85005 0.415141 4.85005C0.219137 5.24979 0.0856499 5.67725 0.0193413 6.1175C-0.0188254 6.58287 -0.0148563 7.05074 0.0312004 7.5154Z"
                  fill="#A0A8D4"></path>
                <path
                  d="M9.37611 7.95864C9.25752 7.70515 8.96401 7.2041 8.96401 7.2041L5.5708 12.8135L8.88247 10.5024C9.0798 10.3708 9.2417 10.1926 9.35388 9.9836C9.50493 9.66808 9.58519 9.32336 9.58903 8.97358C9.59287 8.62379 9.5202 8.27739 9.37611 7.95864Z"
                  fill="url(#paint1_linear_1301_11732)"></path>
                <path
                  d="M10.7208 6.11156C10.6834 5.575 10.5318 5.05261 10.2762 4.57939C10.0205 4.10617 9.66672 3.69303 9.23844 3.36765L5.57544 0.813477C5.57544 0.813477 7.86574 4.11626 9.80027 7.40273C9.99545 7.75004 10.1265 8.12966 10.1872 8.52342C10.2142 8.70177 10.2142 8.88318 10.1872 9.06153C10.2376 8.96814 10.3354 8.77691 10.3354 8.77691C10.5314 8.37717 10.6649 7.94971 10.7312 7.50946C10.7699 7.04413 10.7664 6.57626 10.7208 6.11156Z"
                  fill="#A0A8D4"></path>
                <defs>
                  <linearGradient id="paint0_linear_1301_11732" x1="5.32935" y1="0.951339" x2="0.974074" y2="5.67277"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.58" stopColor="#A0A8D4"></stop>
                    <stop offset="0.73" stopColor="#8791C7"></stop>
                    <stop offset="0.91" stopColor="#6470B4"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1301_11732" x1="176.633" y1="465.267" x2="336.863" y2="340.876"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.58" stopColor="#A0A8D4"></stop>
                    <stop offset="0.73" stopColor="#8791C7"></stop>
                    <stop offset="0.91" stopColor="#6470B4"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_1301_11732" x1="5.37524" y1="0.754181" x2="5.37524" y2="12.8505"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#513EFF"></stop>
                    <stop offset="0.18" stopColor="#5157FF"></stop>
                    <stop offset="0.57" stopColor="#5298FF"></stop>
                    <stop offset="1" stopColor="#52E5FF"></stop>
                  </linearGradient>
                </defs>
              </svg> </span>
                <p className="text-xs text-slate-400"> ensname </p>
                <p className="text-xs text-slate-500">Not Linked</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-500 py-3 px-4"><span> <svg width="16"
                height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.935 4.71436L8.97279 7.12305C8.41313 7.56705 7.62571 7.56705 7.06605 7.12305L4.07886 4.71436"
                  stroke="#A5B4FC" strokeLinecap="round" strokeLinejoin="round"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.2725 12.8134C13.3001 12.8191 14.6666 11.1532 14.6666 9.10572V4.52682C14.6666 2.47936 13.3001 0.813477 11.2725 0.813477H4.72734C2.69978 0.813477 1.33325 2.47936 1.33325 4.52682V9.10572C1.33325 11.1532 2.69978 12.8191 4.72734 12.8134H11.2725Z"
                  stroke="#A5B4FC" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg> </span>
                <p className="text-xs text-slate-400"> Email ID </p>
                <p className="text-xs text-slate-500">Not Linked</p>
              </div>
            </section> */}
          </section>
          <section className="mt-10 flex items-center justify-center">
            <p className=" max-w-sm text-center text-slate-500 dark:text-slate-400"></p>
          </section>

          <section className="mt-8">
            <div data-orientation="horizontal">
              <div className="dark:bg-customDark-1 sticky top-0 left-0 z-10 bg-zinc-50 transition duration-700  -top-9">
                <div role="tablist" aria-orientation="horizontal" dir="ltr" className="flex flex-row justify-center"
                  aria-label="Manage your Profile" tabIndex="0" data-orientation="horizontal">
                  <button
                    type="button" role="tab" aria-selected="true" aria-controls="radix-:rv:-content-tab1"
                    data-state="active" id="radix-:rv:-trigger-tab1"
                    className="static top-0 left-0 z-[2] m-1 w-36 pb-3  undefined border-brand border-b-2 dark:text-slate-100 text-slate-700 transition duration-700"
                    tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                    <p>Collectibles</p>
                  </button><button type="button" role="tab" aria-selected="false" aria-controls="radix-:rv:-content-tab2"
                    data-state="inactive" id="radix-:rv:-trigger-tab2"
                    className="static top-0 left-0 z-[2] m-1 w-36 pb-3  undefined dark:text-slate-500 text-slate-400 border-b-2 border-transparent transition duration-700"
                    tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                    <p>Subdomains</p>
                  </button>
                </div>
                <hr className="relative -top-1 z-[1] justify-evenly border-slate-300 dark:border-slate-800" />
              </div>
              <div data-state="active" data-orientation="horizontal" role="tabpanel"
                aria-labelledby="radix-:rv:-trigger-tab1" id="radix-:rv:-content-tab1" tabIndex="0">
                <div className="mt-10 flex w-full flex-col items-center justify-center  transition duration-700 undefined"><svg
                  width="240" height="241" viewBox="0 0 240 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1546_14205)">
                    <path
                      d="M24.2936 78.0243L29.1727 76.5169C29.5261 76.4118 29.5261 75.886 29.1727 75.7808L24.2936 74.2735C24.1682 74.2384 24.077 74.1449 24.0428 74.0164L22.5723 69.027C22.4697 68.6648 21.9567 68.6648 21.8541 69.027L20.3835 74.0164C20.3493 74.1449 20.2581 74.2384 20.1327 74.2735L15.265 75.7808C14.9117 75.886 14.9117 76.4118 15.265 76.5169L20.1441 78.0243C20.2695 78.0593 20.3607 78.1528 20.3949 78.2813L21.8655 83.2824C21.9681 83.6446 22.4811 83.6446 22.5837 83.2824L24.0542 78.2813C24.077 78.1528 24.1682 78.0593 24.2936 78.0243Z"
                      fill="#94A3B8"></path>
                    <path
                      d="M182.004 36.9431L188.901 34.8123C189.401 34.6637 189.401 33.9204 188.901 33.7717L182.004 31.6409C181.827 31.5914 181.698 31.4592 181.649 31.2775L179.571 24.2244C179.426 23.7123 178.7 23.7123 178.555 24.2244L176.477 31.2775C176.428 31.4592 176.299 31.5914 176.122 31.6409L169.241 33.7717C168.741 33.9204 168.741 34.6637 169.241 34.8123L176.138 36.9431C176.315 36.9927 176.444 37.1248 176.493 37.3065L178.571 44.3762C178.717 44.8883 179.442 44.8883 179.587 44.3762L181.666 37.3065C181.698 37.1248 181.827 36.9927 182.004 36.9431Z"
                      fill="#94A3B8"></path>
                    <path
                      d="M50.4975 199.545L53.5469 198.603C53.7678 198.537 53.7678 198.209 53.5469 198.143L50.4975 197.201C50.4191 197.179 50.3621 197.121 50.3407 197.04L49.4216 193.922C49.3575 193.696 49.0369 193.696 48.9728 193.922L48.0537 197.04C48.0323 197.121 47.9753 197.179 47.8969 197.201L44.8546 198.143C44.6337 198.209 44.6337 198.537 44.8546 198.603L47.904 199.545C47.9824 199.567 48.0394 199.625 48.0608 199.706L48.9799 202.831C49.044 203.057 49.3646 203.057 49.4288 202.831L50.3479 199.706C50.3621 199.625 50.4191 199.567 50.4975 199.545Z"
                      fill="#94A3B8"></path>
                    <path
                      d="M121.572 202.538C166.262 202.538 202.492 166.307 202.492 121.458C202.492 76.6089 166.102 40.3784 121.572 40.3784C76.8828 40.3784 40.6523 76.6089 40.6523 121.458C40.6523 166.307 76.8828 202.538 121.572 202.538Z"
                      fill="#94A3B8" fillOpacity="0.2"></path>
                    <g filter="url(#filter0_bd_1546_14205)">
                      <path
                        d="M154.253 159.64L146.338 162.296C145.579 159.965 143.085 158.772 140.754 159.531C138.423 160.29 137.176 162.784 137.989 165.115L130.02 167.772C129.261 165.441 126.767 164.194 124.436 165.007C122.105 165.766 120.912 168.26 121.671 170.591L113.702 173.247C113.106 171.458 111.479 170.32 109.69 170.265C109.202 170.265 108.66 170.32 108.118 170.482C105.787 171.241 104.54 173.735 105.353 176.066L97.4381 178.723C95.1069 171.783 87.6256 168.043 80.6863 170.374C80.4695 170.428 80.3068 170.537 80.09 170.591L44.689 65.472C44.9058 65.4178 45.1227 65.3635 45.2853 65.3093C52.2246 62.9782 55.9652 55.4426 53.6341 48.5576L61.5492 45.9011C62.3081 48.2323 64.8019 49.4792 67.1331 48.666C69.4642 47.907 70.6569 45.4132 69.8979 43.0821L77.813 40.4256C78.572 42.7568 81.12 44.0037 83.397 43.1905C85.7281 42.4315 86.975 39.9377 86.1618 37.6066L94.0769 34.9501C94.8359 37.2813 97.3297 38.474 99.6608 37.715C101.992 36.956 103.185 34.4622 102.426 32.1311L110.449 29.4204C112.78 36.3597 120.262 40.0461 127.201 37.715L140.483 77.1819L162.602 142.888C155.663 145.219 151.922 152.7 154.253 159.64Z"
                        fill="url(#paint0_linear_1546_14205)" fillOpacity="0.8"></path>
                    </g>
                    <path
                      d="M143.791 143.81L95.5958 160.019C93.3731 160.778 90.9335 159.586 90.1746 157.309L60.7912 70.0261C60.0322 67.8034 61.2249 65.3638 63.5018 64.6048L111.697 48.3952C113.92 47.6362 116.359 48.8289 117.118 51.1058L146.502 138.389C147.261 140.611 146.014 143.051 143.791 143.81Z"
                      fill="#1D2129" stroke="#475569" strokeOpacity="0.4" strokeWidth="2" strokeMiterlimit="10"></path>
                    <path d="M65.4541 83.9589L121.835 64.9844" stroke="#475569" strokeOpacity="0.4" strokeWidth="2"
                      strokeMiterlimit="10" strokeLinejoin="round"></path>
                    <path
                      d="M81.29 67.9939C80.7664 68.1694 80.4842 68.7363 80.6598 69.2599C80.8354 69.7835 81.4022 70.0657 81.9258 69.8901L81.29 67.9939ZM100.196 63.764C100.719 63.5885 101.001 63.0216 100.826 62.498C100.65 61.9744 100.083 61.6922 99.5597 61.8678L100.196 63.764ZM81.9258 69.8901L100.196 63.764L99.5597 61.8678L81.29 67.9939L81.9258 69.8901Z"
                      fill="#475569" fillOpacity="0.4"></path>
                    <path d="M85.4558 143.267L141.783 124.293" stroke="#475569" strokeOpacity="0.4" strokeWidth="2"
                      strokeMiterlimit="10" strokeLinejoin="round"></path>
                    <path
                      d="M115.958 95.9898L115.95 96.003L115.943 96.0167L112.256 103.119L112.256 103.119L112.253 103.125C111.972 103.687 111.956 104.351 112.263 104.892L116.055 111.935C116.295 112.381 116.139 112.898 115.662 113.155L115.651 113.16L115.641 113.166C115.482 113.262 115.278 113.301 115.059 113.265L115.055 113.264L107.14 112.017L107.129 112.015L107.117 112.014C106.52 111.948 105.906 112.078 105.445 112.608L99.9281 118.396C99.5681 118.752 99.0123 118.782 98.6245 118.437C98.4725 118.283 98.3731 118.106 98.3394 117.906C98.3393 117.906 98.3392 117.905 98.339 117.904L97.094 110.001C97.0159 109.404 96.5882 108.823 96.048 108.587L88.8465 105.121L88.8465 105.121L88.8392 105.118C88.4115 104.92 88.211 104.365 88.4331 103.884L88.4385 103.872L88.4433 103.86C88.4863 103.752 88.6268 103.611 88.8724 103.461L96.0094 99.8386C96.0098 99.8384 96.0103 99.8381 96.0108 99.8379C96.5904 99.5475 96.9658 99.0251 97.0409 98.3691L98.124 90.4628C98.124 90.4624 98.1241 90.4619 98.1241 90.4615C98.1948 89.9713 98.6488 89.6286 99.125 89.6936C99.3831 89.7374 99.5424 89.814 99.6608 89.9324L105.299 95.5705C105.726 95.998 106.381 96.2343 107.004 96.0856L114.905 94.6244L114.905 94.6246L114.919 94.6216C115.39 94.5207 115.878 94.8651 115.946 95.3419L115.955 95.4074L115.981 95.4682C116.076 95.6897 116.044 95.8464 115.958 95.9898Z"
                      fill="url(#paint1_linear_1546_14205)" stroke="url(#paint2_linear_1546_14205)"></path>
                    <path
                      d="M107.043 144.434C106.519 144.61 106.237 145.177 106.413 145.701C106.59 146.224 107.157 146.506 107.68 146.33L107.043 144.434ZM125.896 140.204C126.419 140.028 126.701 139.461 126.525 138.937C126.349 138.414 125.782 138.132 125.258 138.308L125.896 140.204ZM107.68 146.33L125.896 140.204L125.258 138.308L107.043 144.434L107.68 146.33Z"
                      fill="#475569" fillOpacity="0.4"></path>
                    <g filter="url(#filter1_bd_1546_14205)">
                      <path
                        d="M213.291 95.4517L200.117 205.612C192.853 204.745 186.293 209.949 185.426 217.16L177.131 216.184C177.402 213.744 175.667 211.576 173.282 211.305C170.842 211.034 168.674 212.768 168.403 215.154L160.108 214.178C160.379 211.738 158.645 209.57 156.259 209.299C153.82 209.028 151.651 210.763 151.38 213.148L143.085 212.172C143.357 209.732 141.622 207.564 139.236 207.293C136.797 207.022 134.628 208.757 134.357 211.142L126.063 210.166C126.93 202.902 121.726 196.342 114.515 195.474C114.298 195.474 114.082 195.42 113.865 195.42L127.038 85.2597C127.255 85.3139 127.472 85.3139 127.689 85.3681C134.954 86.2355 141.513 81.0311 142.381 73.8208L150.675 74.7966C150.404 77.2362 152.139 79.4047 154.524 79.6758C156.91 79.9469 159.132 78.212 159.404 75.8267L167.698 76.8025C167.427 79.2421 169.162 81.4106 171.547 81.6817C173.987 81.9527 176.155 80.2179 176.426 77.8326L184.721 78.8084C184.45 81.248 186.185 83.4165 188.57 83.6875C191.01 83.9586 193.178 82.2238 193.449 79.8384L201.744 80.8143C200.822 88.0246 206.027 94.5843 213.291 95.4517Z"
                        fill="url(#paint3_linear_1546_14205)" fillOpacity="0.8"></path>
                    </g>
                    <path
                      d="M182.77 198.348L132.243 192.33C129.912 192.059 128.232 189.891 128.503 187.559L139.454 96.1024C139.725 93.7712 141.893 92.0906 144.225 92.3617L194.751 98.3793C197.082 98.6504 198.763 100.819 198.492 103.15L187.595 194.607C187.27 196.938 185.101 198.619 182.77 198.348Z"
                      fill="#1D2129" stroke="#475569" strokeOpacity="0.4" strokeWidth="2" strokeMiterlimit="10"></path>
                    <path d="M137.666 110.686L196.704 117.733" stroke="#475569" strokeOpacity="0.4" strokeWidth="2"
                      strokeMiterlimit="10" strokeLinejoin="round"></path>
                    <path
                      d="M158.817 103.079C158.269 103.014 157.771 103.405 157.706 103.954C157.641 104.502 158.033 105 158.581 105.065L158.817 103.079ZM177.718 107.342C178.267 107.407 178.764 107.015 178.829 106.467C178.895 105.918 178.503 105.421 177.955 105.356L177.718 107.342ZM158.581 105.065L177.718 107.342L177.955 105.356L158.817 103.079L158.581 105.065Z"
                      fill="#475569" fillOpacity="0.4"></path>
                    <path
                      d="M149.276 183.205C148.728 183.14 148.23 183.531 148.165 184.08C148.099 184.628 148.491 185.126 149.039 185.191L149.276 183.205ZM168.122 187.468C168.671 187.534 169.168 187.142 169.234 186.594C169.299 186.045 168.908 185.548 168.359 185.482L168.122 187.468ZM149.039 185.191L168.122 187.468L168.359 185.482L149.276 183.205L149.039 185.191Z"
                      fill="#475569" fillOpacity="0.4"></path>
                    <path d="M130.238 172.868L189.276 179.916" stroke="#475569" strokeOpacity="0.4" strokeWidth="2"
                      strokeMiterlimit="10" strokeLinejoin="round"></path>
                    <path
                      d="M178.149 143.2L178.126 143.214L178.103 143.231L171.712 148.106C171.204 148.473 170.9 149.069 170.969 149.741L171.402 157.697L171.402 157.697L171.402 157.706C171.437 158.192 171.052 158.634 170.546 158.634C170.289 158.634 170.143 158.594 169.991 158.472L169.977 158.461L169.962 158.451L163.351 153.899C162.831 153.529 162.169 153.46 161.588 153.678L161.588 153.678L161.584 153.679L154.103 156.553L154.102 156.553C153.63 156.734 153.076 156.504 152.91 156.038L152.906 156.029L152.903 156.021C152.845 155.876 152.831 155.666 152.873 155.396L155.141 147.783L155.144 147.773L155.146 147.762C155.284 147.213 155.225 146.55 154.775 146.02L149.737 139.791L149.737 139.791L149.736 139.788C149.438 139.425 149.475 138.857 149.902 138.469L149.911 138.461L149.919 138.453C150.021 138.351 150.207 138.274 150.433 138.274V138.274L150.446 138.274L158.464 138.057C159.158 138.054 159.671 137.661 160.002 137.197L160.007 137.189L160.012 137.182L164.402 130.516C164.402 130.515 164.403 130.515 164.403 130.515C164.68 130.1 165.246 129.982 165.683 130.235C165.815 130.315 165.922 130.464 166.012 130.686L168.665 138.211L168.665 138.211L168.668 138.221C168.89 138.812 169.4 139.249 169.987 139.397L177.731 141.454C178.226 141.598 178.515 142.093 178.406 142.603L178.4 142.627L178.398 142.652C178.354 143.041 178.245 143.143 178.149 143.2Z"
                      fill="url(#paint4_linear_1546_14205)" stroke="url(#paint5_linear_1546_14205)"></path>
                    <path d="M209.767 74.7426L211.99 69.1587" stroke="#64748B" strokeWidth="3" strokeMiterlimit="10"
                      strokeLinecap="round"></path>
                    <path d="M215.241 80.1097L224.511 72.8994" stroke="#64748B" strokeWidth="3" strokeMiterlimit="10"
                      strokeLinecap="round"></path>
                    <path d="M219.688 86.7781L225 85.9106" stroke="#64748B" strokeWidth="3" strokeMiterlimit="10"
                      strokeLinecap="round"></path>
                  </g>
                  <defs>
                    <filter id="filter0_bd_1546_14205" x="-155.311" y="-170.58" width="517.913" height="549.302"
                      filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImage" stdDeviation="100"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1546_14205">
                      </feComposite>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"></feColorMatrix>
                      <feOffset dy="11"></feOffset>
                      <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0">
                      </feColorMatrix>
                      <feBlend mode="normal" in2="effect1_backgroundBlur_1546_14205"
                        result="effect2_dropShadow_1546_14205"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1546_14205" result="shape">
                      </feBlend>
                    </filter>
                    <filter id="filter1_bd_1546_14205" x="-86.1353" y="-126.179" width="499.427" height="543.339"
                      filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImage" stdDeviation="100"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1546_14205">
                      </feComposite>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"></feColorMatrix>
                      <feOffset dy="11"></feOffset>
                      <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0">
                      </feColorMatrix>
                      <feBlend mode="normal" in2="effect1_backgroundBlur_1546_14205"
                        result="effect2_dropShadow_1546_14205"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1546_14205" result="shape">
                      </feBlend>
                    </filter>
                    <linearGradient id="paint0_linear_1546_14205" x1="103.645" y1="29.4204" x2="103.645" y2="178.723"
                      gradientUnits="userSpaceOnUse">
                      <stop></stop>
                      <stop offset="1" stopColor="#0A0A0B" stopOpacity="0.8"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1546_14205" x1="87.8425" y1="89.1855" x2="107.965" y2="124.183"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7C7C7C"></stop>
                      <stop offset="0.49675" stopColor="#4D4D4D" stopOpacity="0.50325"></stop>
                      <stop offset="1" stopColor="#474747" stopOpacity="0.1"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1546_14205" x1="87.8425" y1="89.1855" x2="107.965" y2="124.183"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E7E7E7"></stop>
                      <stop offset="0.49675" stopColor="#9A9A9A" stopOpacity="0.2"></stop>
                      <stop offset="1" stopColor="#DDDDDD" stopOpacity="0.64"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1546_14205" x1="163.578" y1="73.8208" x2="163.578" y2="217.16"
                      gradientUnits="userSpaceOnUse">
                      <stop></stop>
                      <stop offset="1" stopColor="#0A0A0B" stopOpacity="0.8"></stop>
                    </linearGradient>
                    <linearGradient id="paint4_linear_1546_14205" x1="149.041" y1="129.603" x2="168.324" y2="164.923"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7C7C7C"></stop>
                      <stop offset="0.49675" stopColor="#4D4D4D" stopOpacity="0.50325"></stop>
                      <stop offset="1" stopColor="#474747" stopOpacity="0.1"></stop>
                    </linearGradient>
                    <linearGradient id="paint5_linear_1546_14205" x1="149.041" y1="129.603" x2="168.324" y2="164.923"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E7E7E7"></stop>
                      <stop offset="0.49675" stopColor="#9A9A9A" stopOpacity="0.2"></stop>
                      <stop offset="1" stopColor="#DDDDDD" stopOpacity="0.64"></stop>
                    </linearGradient>
                    <clipPath id="clip0_1546_14205">
                      <rect width="240" height="240" fill="white" transform="translate(0 0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg><span
                  className="max-w-xs text-center text-base font-normal capitalize text-slate-400 dark:text-slate-500">No
                    Collections found.</span></div>
              </div>
              <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:rv:-trigger-tab2" hidden="" id="radix-:rv:-content-tab2" tabIndex="0"></div>
            </div>
          </section>

        </section>
      </section>
    </main>
  )
}

export default Profile