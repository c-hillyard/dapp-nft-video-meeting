import React from 'react'

const RightSidebar = () => {
  return (
    <section
      className="no-scrollbar sticky top-0 right-0 z-10 h-full w-64 flex-col overflow-y-auto overflow-x-hidden pb-8 sm:hidden lg:flex lg:w-full ">
      <section className="dark:bg-customDark-2 h-fit rounded-2xl  bg-gray-100 px-4 transition duration-700 mb-8  py-6">
        <div className="align-left px-1 py-1">
          <div className="mb-2 flex items-center">
            <div className="mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M16.6352 8.23284C16.6352 10.5825 14.7513 12.4665 12.4 12.4665C10.0495 12.4665 8.16479 10.5825 8.16479 8.23284C8.16479 5.88322 10.0495 4 12.4 4C14.7513 4 16.6352 5.88322 16.6352 8.23284ZM12.4 19.9999C8.9299 19.9999 6 19.4359 6 17.2599C6 15.0831 8.94831 14.5391 12.4 14.5391C15.8709 14.5391 18.8 15.1031 18.8 17.2791C18.8 19.4559 15.8517 19.9999 12.4 19.9999Z"
                fill="#A5B4FC"></path>
            </svg></div>
            <div className="font-500 text-base text-gray-600 dark:text-slate-200 lg:text-sm">Visit your profile</div>
          </div>
          <div className="mb-4">
            <p className="text-sm leading-5 text-gray-500 dark:text-slate-400">Link your ENS, set your preferences and much
              more!</p>
          </div>
          <div><button type="button"
            className="rounded-xl py-2 px-3 text-sm font-semibold hover:opacity-80  dark:text-slate-400 text-slate-500 dark:border-gray-700 border-slate-300 dark:border-2 border-2 w-32 transition duration-700">Visit
            Profile</button></div>
        </div>
      </section>
      <section className="dark:bg-customDark-2 h-fit rounded-2xl  bg-gray-100 px-4 transition duration-700 mb-8  py-6">
        <div className="align-left px-1 py-1">
          <div className="mb-2 flex items-center">
            <div className="mr-3"><svg width="16" height="14" viewBox="0 0 16 14" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_828_3794)">
                <path
                  d="M13.5447 1.90651C12.5249 1.43859 11.4313 1.09385 10.2879 0.896397C10.2671 0.892586 10.2463 0.90211 10.2356 0.921156C10.0949 1.1713 9.93915 1.49763 9.83006 1.75413C8.60027 1.57002 7.37679 1.57002 6.17221 1.75413C6.0631 1.49193 5.90166 1.1713 5.76038 0.921156C5.74966 0.902745 5.72886 0.893222 5.70803 0.896397C4.56527 1.09322 3.47171 1.43796 2.45129 1.90651C2.44246 1.91032 2.43488 1.91667 2.42986 1.92492C0.355594 5.02383 -0.212633 8.04657 0.0661201 11.0318C0.0673814 11.0464 0.0755799 11.0604 0.086932 11.0693C1.45547 12.0743 2.78114 12.6845 4.08219 13.0889C4.10301 13.0952 4.12507 13.0876 4.13832 13.0705C4.44608 12.6502 4.72043 12.207 4.95565 11.741C4.96953 11.7137 4.95628 11.6813 4.92791 11.6705C4.49275 11.5055 4.0784 11.3042 3.67982 11.0756C3.64829 11.0572 3.64577 11.0121 3.67477 10.9905C3.75865 10.9277 3.84255 10.8623 3.92264 10.7963C3.93713 10.7842 3.95732 10.7817 3.97435 10.7893C6.59286 11.9848 9.4277 11.9848 12.0153 10.7893C12.0323 10.781 12.0525 10.7836 12.0677 10.7956C12.1478 10.8617 12.2316 10.9277 12.3161 10.9905C12.3451 11.0121 12.3433 11.0572 12.3117 11.0756C11.9131 11.3086 11.4988 11.5055 11.063 11.6699C11.0346 11.6807 11.022 11.7137 11.0359 11.741C11.2762 12.2064 11.5505 12.6495 11.8526 13.0698C11.8652 13.0876 11.8879 13.0952 11.9087 13.0889C13.2161 12.6845 14.5417 12.0743 15.9103 11.0693C15.9223 11.0604 15.9298 11.0471 15.9311 11.0325C16.2647 7.58117 15.3723 4.58322 13.5655 1.92555C13.5611 1.91667 13.5535 1.91032 13.5447 1.90651ZM5.34668 9.21412C4.55833 9.21412 3.90876 8.49035 3.90876 7.6015C3.90876 6.71264 4.54574 5.98888 5.34668 5.98888C6.15392 5.98888 6.79721 6.719 6.78459 7.6015C6.78459 8.49035 6.14761 9.21412 5.34668 9.21412ZM10.6632 9.21412C9.87484 9.21412 9.22526 8.49035 9.22526 7.6015C9.22526 6.71264 9.86222 5.98888 10.6632 5.98888C11.4704 5.98888 12.1137 6.719 12.1011 7.6015C12.1011 8.49035 11.4704 9.21412 10.6632 9.21412Z"
                  fill="#5865F2"></path>
              </g>
              <defs>
                <clipPath id="clip0_828_3794">
                  <rect width="16" height="12.3944" fill="white" transform="translate(0 0.802795)"></rect>
                </clipPath>
              </defs>
            </svg></div>
            <div className="font-500 text-base text-gray-600 dark:text-slate-200 lg:text-sm">Reach out to us</div>
          </div>
          <div className="mb-4">
            <p className="text-sm leading-5 text-gray-500 dark:text-slate-400">Have any doubts or questions? Reach out to us
              on discord.</p>
          </div>
          <div><button type="button"
            className="rounded-xl py-2 px-3 text-sm font-semibold hover:opacity-80  dark:text-slate-400 text-slate-500 dark:border-gray-700 border-slate-300 dark:border-2 border-2 w-32 transition duration-700">Visit
            Discord</button></div>
        </div>
      </section>
      <section className="dark:bg-customDark-2 h-fit rounded-2xl  bg-gray-100 px-4 transition duration-700 undefined py-6">
        <div className="align-left px-1 py-1">
          <div className="mb-2 flex items-center">
            <div className="mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M21 2H3V4.16H21V2Z" fill="#FF6719"></path>
              <path d="M21 6.31934H3V9.19934H21V6.31934Z" fill="#FF6719"></path>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M21 11.3584H3V22.1584H3.05114L12 17.3621L21 22.1313V11.3584Z" fill="#FF6719"></path>
            </svg></div>
            <div className="font-500 text-base text-gray-600 dark:text-slate-200 lg:text-sm">Stay Up to date</div>
          </div>
          <div className="mb-4">
            <p className="text-sm leading-5 text-gray-500 dark:text-slate-400">Subscribe to our substack newsletter to stay
              updated with the product, company &amp; community news.</p>
          </div>
          <div><button type="button"
            className="rounded-xl py-2 px-3 text-sm font-semibold hover:opacity-80  dark:text-slate-400 text-slate-500 dark:border-gray-700 border-slate-300 dark:border-2 border-2 w-32 transition duration-700">Subscribe</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default RightSidebar