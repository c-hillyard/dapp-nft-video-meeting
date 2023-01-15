import React from 'react'

const Storage = () => {

  return (
    <main className="no-scrollbar h-full w-full overflow-y-auto px-12 pt-9 pb-28">
      <div className="mr-28">
        <section
          className="mb-6 flex w-full flex-col h-fit rounded-2xl border-2 border-transparent bg-white p-4 transition duration-700 dark:border-2 dark:bg-zinc-900">
          <div className="mb-8 flex w-full items-center justify-between px-2"><span
            className="text-base font-medium text-slate-800 dark:text-slate-300">Storage Statistics</span></div>
          <section className="grid w-full grid-cols-4 gap-4 gap-y-8">
            <div
              className="col-span-3  align-center  flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6 transition duration-700 dark:border-2 dark:border-slate-700 ">
              <div className="my-3 mr-4 "><svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.575195" y="0.5625" width="32" height="32" rx="16" fill="url(#paint0_linear_713_4882)"></rect>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M16.7928 10.0355C16.8993 9.93997 17.0401 9.88988 17.1843 9.8963C20.2315 9.98752 22.7782 12.1996 23.2397 15.1562C23.2426 15.1738 23.2426 15.1918 23.2397 15.2095C23.2496 15.3494 23.2024 15.4874 23.1083 15.593C23.0143 15.6986 22.8812 15.7631 22.7386 15.7722L17.6189 16.1098C17.4496 16.1248 17.2817 16.0691 17.1565 15.9564C17.0312 15.8436 16.9602 15.6843 16.9609 15.5175L16.6168 10.4886V10.4057C16.623 10.2643 16.6864 10.1311 16.7928 10.0355ZM16.4417 17.4248L20.8791 17.1405L20.9093 17.1523C21.0998 17.1554 21.2813 17.2327 21.4138 17.3671C21.5463 17.5015 21.6189 17.6821 21.6157 17.869C21.4408 20.4171 19.5727 22.5461 17.0304 23.0946C14.4882 23.6431 11.882 22.4794 10.6338 20.2383C10.2667 19.5929 10.0348 18.882 9.95154 18.1474C9.91926 17.9298 9.90512 17.7099 9.90928 17.4899C9.91769 14.7805 11.8468 12.4418 14.5459 11.8688C14.8727 11.8076 15.2003 11.9707 15.3429 12.2656C15.3784 12.3191 15.4068 12.3768 15.4274 12.4374C15.478 13.2184 15.5305 13.9921 15.5827 14.7625C15.624 15.3709 15.6652 15.9773 15.7051 16.5837C15.7031 16.7265 15.7255 16.8687 15.7715 17.0042C15.8799 17.2709 16.1495 17.4401 16.4417 17.4248Z"
                  fill="white"></path>
                <defs>
                  <linearGradient id="paint0_linear_713_4882" x1="16.5752" y1="32.5625" x2="16.5193" y2="-2.93947"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF83DC"></stop>
                    <stop offset="1" stopColor="#A20877"></stop>
                  </linearGradient>
                </defs>
              </svg></div>
              <section className="flex-1 ">
                <p className="dark:text-customLight-7 text-sm font-medium text-slate-500">Total Storage</p>
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" aria-valuetext="66%" role="progressbar"
                  data-state="loading" data-value="66" data-max="100"
                  className="relative mt-2 h-4 w-full overflow-hidden rounded-full bg-slate-200 transition duration-700 dark:bg-gray-700">
                  <div data-state="loading" data-value="66" data-max="100"
                    className="transition-loading h-full bg-white bg-gradient-to-r from-[#8263DBC7] to-[#341D65] duration-500 ease-in-out "></div>
                </div>
                <p className="mt-3 text-xs font-normal text-slate-400 dark:text-slate-300">0 MB of 100 GB Used</p>
              </section>
              <div className="animate-spin-fast -mt-5 -mr-3 h-min w-min justify-center filter-none invisible"><svg width="32"
                height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="32" height="32" fill="url(#pattern0)"></rect>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1363_8786" transform="translate(-1 -1) scale(0.006)"></use>
                  </pattern>

                </defs>
              </svg></div>
            </div>
            <div className="undefined  align-center flex justify-evenly rounded-xl border-2 border-slate-200 bg-transparent px-4 py-6  transition duration-700 dark:border-2
      dark:border-slate-700">
              <div className="my-1 mr-4 "><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="url(#paint0_linear_1200_5735)"></rect>
                <path
                  d="M16 22.25C19.4518 22.25 22.25 19.4518 22.25 16C22.25 12.5482 19.4518 9.75 16 9.75C12.5482 9.75 9.75 12.5482 9.75 16C9.75 19.4518 12.5482 22.25 16 22.25ZM20.673 16C20.673 18.5808 18.5808 20.673 16 20.673C13.4192 20.673 11.327 18.5808 11.327 16C11.327 13.4192 13.4192 11.327 16 11.327C18.5808 11.327 20.673 13.4192 20.673 16ZM15.9999 18.5001C17.3806 18.5001 18.4999 17.3808 18.4999 16.0001C18.4999 14.6194 17.3806 13.5001 15.9999 13.5001C14.6192 13.5001 13.4999 14.6194 13.4999 16.0001C13.4999 17.3808 14.6192 18.5001 15.9999 18.5001Z"
                  fill="#F8FAFC" stroke="#F8FAFC" strokeWidth="0.5"></path>
                <defs>
                  <linearGradient id="paint0_linear_1200_5735" x1="16" y1="32" x2="16" y2="0"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#929DFF"></stop>
                    <stop offset="1" stopColor="#5034FF"></stop>
                  </linearGradient>
                </defs>
              </svg></div>
              <section className="flex-1 ">
                <p className="mb-1 text-4xl font-semibold text-slate-500 transition duration-700 dark:text-slate-50  text-xl">0
                </p>
                <div className="flex items-center text-xs font-medium text-slate-400">
                  <p>Recordings</p>
                  <div className="ml-1 cursor-pointer" data-state="closed"><svg width="16" height="17" viewBox="0 0 16 17"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M14.6666 8.99064C14.6666 12.6725 11.6818 15.6573 7.99992 15.6573C4.31802 15.6573 1.33325 12.6725 1.33325 8.99064C1.33325 5.30874 4.31802 2.32397 7.99992 2.32397C11.6818 2.32397 14.6666 5.30874 14.6666 8.99064ZM7.99992 8.32397C8.36811 8.32397 8.66659 8.62245 8.66659 8.99064V12.3246C8.66659 12.6928 8.36811 12.9912 7.99992 12.9912C7.63173 12.9912 7.33325 12.6928 7.33325 12.3246V8.99064C7.33325 8.62245 7.63173 8.32397 7.99992 8.32397ZM7.99992 6.99064C8.36811 6.99064 8.66659 6.69216 8.66659 6.32397C8.66659 5.95578 8.36811 5.65731 7.99992 5.65731C7.63173 5.65731 7.33325 5.95578 7.33325 6.32397C7.33325 6.69216 7.63173 6.99064 7.99992 6.99064Z"
                      fill="#475569"></path>
                  </svg></div>
                </div>
              </section>
            </div>
          </section>
        </section>
        <div className="mb-6">
          <section
            className="w-full h-fit rounded-2xl border-2 border-transparent bg-white p-4 transition duration-700 dark:border-2 dark:bg-zinc-900">
            <div className="flex w-full items-center justify-between ">
              <div
                className="dark:text-slate-100 dark:bg-rgbColors-2 bg-slate-100 text-slate-500 rounded-xl py-3 px-4 text-xs font-semibold cursor-default transition duration-700">
                Recordings</div>
              <div className="flex items-center justify-between"><button type="button"
                className="rounded-xl py-2 px-3 text-sm font-semibold hover:opacity-80  dark:text-slate-400 text-slate-500 dark:border-gray-700 border-slate-300 dark:border-2 border-2 undefined transition duration-700">Most
                Recent</button></div>
            </div>
            <div
              className="dark:border-slate-700  dark:border-b-2 border-b-2 border-slate-300 mt-9 transition duration-700 grid grid-cols-5 px-2">
              <div className="dark:text-slate-400 text-slate-600  text-xs font-semibold pb-4 transition duration-700 text-left">
                Name</div>
              <div className="dark:text-slate-400 text-slate-600  text-xs font-semibold pb-4 transition duration-700 text-left">
                Size</div>
              <div
                className="dark:text-slate-400 text-slate-600  text-xs font-semibold pb-4 transition duration-700 text-center">
                Upload date</div>
              <div
                className="dark:text-slate-400 text-slate-600  text-xs font-semibold pb-4 transition duration-700 text-center">
                Service</div>
              <div
                className="dark:text-slate-400 text-slate-600  text-xs font-semibold pb-4 transition duration-700 text-center">
                Actions</div>
            </div>
            <div className="mt-10 flex w-full flex-col items-center justify-center  transition duration-700 undefined"><svg
              width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M223.149 87.2647L226.802 86.1363C227.066 86.0576 227.066 85.6639 226.802 85.5852L223.149 84.4567C223.055 84.4305 222.987 84.3605 222.961 84.2643L221.86 80.5291C221.783 80.2579 221.399 80.2579 221.323 80.5291L220.222 84.2643C220.196 84.3605 220.128 84.4305 220.034 84.4567L216.39 85.5852C216.125 85.6639 216.125 86.0576 216.39 86.1363L220.042 87.2647C220.136 87.291 220.205 87.3609 220.23 87.4572L221.331 91.2011C221.408 91.4723 221.792 91.4723 221.869 91.2011L222.97 87.4572C222.987 87.3609 223.055 87.291 223.149 87.2647Z"
                fill="#94A3B8"></path>
              <path
                d="M22.7031 76.3967L27.8666 74.8015C28.2406 74.6902 28.2406 74.1337 27.8666 74.0224L22.7031 72.4272C22.5704 72.3901 22.4739 72.2912 22.4377 72.1551L20.8814 66.8749C20.7728 66.4916 20.2299 66.4916 20.1213 66.8749L18.565 72.1551C18.5288 72.2912 18.4323 72.3901 18.2996 72.4272L13.1482 74.0224C12.7742 74.1337 12.7742 74.6902 13.1482 74.8015L18.3117 76.3967C18.4444 76.4338 18.5409 76.5327 18.5771 76.6687L20.1334 81.9613C20.242 82.3447 20.7849 82.3447 20.8934 81.9613L22.4497 76.6687C22.4739 76.5327 22.5704 76.4338 22.7031 76.3967Z"
                fill="#94A3B8"></path>
              <path
                d="M46.0662 200.062L48.3491 199.357C48.5145 199.308 48.5145 199.062 48.3491 199.013L46.0662 198.307C46.0076 198.291 45.9649 198.247 45.9489 198.187L45.2608 195.853C45.2128 195.683 44.9728 195.683 44.9248 195.853L44.2367 198.187C44.2207 198.247 44.178 198.291 44.1194 198.307L41.8418 199.013C41.6764 199.062 41.6764 199.308 41.8418 199.357L44.1247 200.062C44.1834 200.079 44.226 200.122 44.242 200.182L44.9301 202.522C44.9781 202.692 45.2181 202.692 45.2662 202.522L45.9542 200.182C45.9649 200.122 46.0076 200.079 46.0662 200.062Z"
                fill="#94A3B8"></path>
              <path
                d="M117.72 202.064C164.143 202.064 201.778 164.428 201.778 117.84C201.778 71.2516 163.977 33.6162 117.72 33.6162C71.298 33.6162 33.6626 71.2516 33.6626 117.84C33.6626 164.428 71.298 202.064 117.72 202.064Z"
                fill="#27272A" fillOpacity="0.2"></path>
              <g filter="url(#filter0_d_1364_9366)">
                <path
                  d="M166.87 180.413H190.94C193.963 180.413 196.554 177.823 196.554 174.801V62.5659C196.554 59.5441 193.963 56.9541 190.94 56.9541H167.617"
                  fill="url(#paint0_linear_1364_9366)" fillOpacity="0.8"></path>
              </g>
              <g filter="url(#filter1_d_1364_9366)">
                <path
                  d="M71.304 180.413H47.9816C44.9583 180.413 42.3669 177.823 42.3669 174.801V62.5659C42.3669 59.5441 44.9583 56.9541 47.9816 56.9541H70.8236"
                  fill="url(#paint1_linear_1364_9366)" fillOpacity="0.8"></path>
              </g>
              <path d="M58.5925 79.4014H70.2537" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M58.5925 94.5098H70.2537" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M58.5925 110.05H70.2537" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M58.5925 125.59H70.2537" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M58.5925 155.808H70.2537" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M178.846 79.4014H167.617" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"></path>
              <path d="M178.846 94.5098H167.617" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M178.846 110.05H167.617" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M178.846 125.59H167.617" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <path d="M178.846 155.808H167.617" stroke="#1D2129" strokeWidth="2" strokeMiterlimit="10"
                strokeLinecap="round"></path>
              <g filter="url(#filter2_d_1364_9366)">
                <path
                  d="M162.002 189.91H76.4867C73.4635 189.91 70.8721 187.32 70.8721 184.298V53.9326C70.8721 50.9108 73.4635 48.3208 76.4867 48.3208H162.002C165.026 48.3208 167.617 50.9108 167.617 53.9326V184.298C167.617 187.32 165.026 189.91 162.002 189.91Z"
                  fill="url(#paint2_linear_1364_9366)" fillOpacity="0.8"></path>
              </g>
              <path
                d="M151.637 90.5564H92.035C90.7393 90.5564 89.8755 89.774 89.8755 88.6005V83.5154C89.8755 82.3419 90.7393 81.5596 92.035 81.5596H151.637C152.932 81.5596 153.796 82.3419 153.796 83.5154V88.6005C153.796 89.3829 152.932 90.5564 151.637 90.5564Z"
                fill="#1D2129"></path>
              <path
                d="M151.637 113.866H92.035C90.7393 113.866 89.8755 113.084 89.8755 111.911V106.825C89.8755 105.652 90.7393 104.87 92.035 104.87H151.637C152.932 104.87 153.796 105.652 153.796 106.825V111.911C153.796 113.084 152.932 113.866 151.637 113.866Z"
                fill="#1D2129"></path>
              <path
                d="M151.637 137.609H92.035C90.7393 137.609 89.8755 136.826 89.8755 135.653V130.568C89.8755 129.394 90.7393 128.612 92.035 128.612H151.637C152.932 128.612 153.796 129.394 153.796 130.568V135.653C153.796 136.826 152.932 137.609 151.637 137.609Z"
                fill="#1D2129"></path>
              <path
                d="M151.637 161.782H127.883C126.587 161.782 125.723 161 125.723 159.827V154.741C125.723 153.568 126.587 152.786 127.883 152.786H151.637C152.933 152.786 153.796 153.568 153.796 154.741V159.827C153.796 161 152.933 161.782 151.637 161.782Z"
                fill="#1D2129"></path>
              <path
                d="M133.919 181.676L124.337 184.631L131.969 195.918L125.75 200.123L118.118 188.836L111.806 196.628L106.353 164.735L133.919 181.676Z"
                fill="#475569"></path>
              <defs>
                <filter id="filter0_d_1364_9366" x="144.87" y="45.9541" width="73.6843" height="167.459"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"></feColorMatrix>
                  <feOffset dy="11"></feOffset>
                  <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0">
                  </feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1364_9366"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1364_9366" result="shape"></feBlend>
                </filter>
                <filter id="filter1_d_1364_9366" x="20.3669" y="45.9541" width="72.937" height="167.459"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"></feColorMatrix>
                  <feOffset dy="11"></feOffset>
                  <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0">
                  </feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1364_9366"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1364_9366" result="shape"></feBlend>
                </filter>
                <filter id="filter2_d_1364_9366" x="48.8721" y="37.3208" width="140.745" height="185.589"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"></feColorMatrix>
                  <feOffset dy="11"></feOffset>
                  <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0">
                  </feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1364_9366"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1364_9366" result="shape"></feBlend>
                </filter>
                <linearGradient id="paint0_linear_1364_9366" x1="181.712" y1="56.9541" x2="181.712" y2="180.413"
                  gradientUnits="userSpaceOnUse">
                  <stop></stop>
                  <stop offset="1" stopColor="#0A0A0B" stopOpacity="0.8"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_1364_9366" x1="56.8355" y1="56.9541" x2="56.8355" y2="180.413"
                  gradientUnits="userSpaceOnUse">
                  <stop></stop>
                  <stop offset="1" stopColor="#0A0A0B" stopOpacity="0.8"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear_1364_9366" x1="119.245" y1="48.3208" x2="119.245" y2="189.91"
                  gradientUnits="userSpaceOnUse">
                  <stop></stop>
                  <stop offset="1" stopColor="#0A0A0B" stopOpacity="0.8"></stop>
                </linearGradient>
              </defs>
            </svg><span
              className="max-w-xs text-center text-base font-normal capitalize text-slate-400 dark:text-slate-500">No files
                found. Recordings done within meetings appear here.</span></div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Storage