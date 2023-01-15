import React from 'react'

const Footer = () => {
  return (
    <div className="md:px-16 px-4 flex flex-col md:flex-row  pb-10 justify-between items-start gap-6 w-full md:pt-20 pt-10">
      <div>
        <img alt="footer_logo" src="/image/logo.png" width="140" height="50" decoding="async" data-nimg="1" className="cursor-pointer" loading="lazy" />
        <div className="max-w-xs mt-2 text-gray-500 text-base font-inter font-normal ">
          Copyright © 2023 D-app, Inc. All rights reserved.
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 w-full font-inter">
        <div className="md:mx-auto"><span className="text-gray-500 text-sm font-semibold ">Company</span>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">About us</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Branding Kit</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Contact Us</div>
        </div>
        <div className="md:mx-auto"><span className="text-gray-500 text-sm font-semibold ">Resources</span>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Documentation</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Blog</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Newsletter</div>
        </div>
        <div className="md:mx-auto"><span className="text-gray-500 text-sm font-semibold ">Social</span>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Twitter</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">LinkedIn</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Discord</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Hashnode</div>
        </div>
        <div className="md:mx-auto"><span className="text-gray-500 text-sm font-semibold ">Legal</span>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Terms&amp;Conditions</div>
          <div role="presentation" className="text-gray-600 text-base font-semibold mb-3 mt-4 cursor-pointer">Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}

export default Footer