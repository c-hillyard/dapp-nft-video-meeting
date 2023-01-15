import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const ContactUs = () => {
  return (
    <div className="Landing">
      <div className="w-full min-h-screen bg-baseBlack text-white">
        <div className="max-w-screen-laptop mx-auto">
          <Navbar />
          <main>
            <div className="md:px-16 px-4 py-16 md:py-24 ">
              <div className="text-center md:mb-20 mb-14">
                <div className="text-gray-400 font-inter font-medium text-sm mb-2">Get in touch</div>
                <div
                  className="bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent md:text-6xl  font-bold font-polySans max-w-xl  mx-auto text-[28px] pb-1">
                  We'd love to help</div>
              </div>
              <div className="grid md:grid-cols-3 gap-12 grid-cols-1">
                <div className="border border-custom-5 rounded-2xl p-6 "><img alt=""
                  srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Fphone.png&amp;w=96&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Fphone.png&amp;w=256&amp;q=100 2x"
                  src="https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Fphone.png&amp;w=256&amp;q=100" width="70" height="50"
                  decoding="async" data-nimg="1" />
                  <div className="mt-8 mb-4">
                    <div className="text-gray-200 font-inter font-semibold text-2xl ">Contact Us</div>
                    <div className="text-gray-400 font-inter font-normal text-base">Schedule a meeting with our team and ask
                      anything about D-App.</div>
                  </div><button
                    className="mt-12 flex items-center justify-center border border-custom-4 hover:bg-custom-5 transition duration-300 ease-in-out  bg-custom-3 rounded-lg py-3 px-5 mt-6 font-semibold"
                    type="button"><span className="text-center font-inter text-base text-gray-300">Schedule a
                      Meeting</span></button>
                </div>
                <div className="border border-custom-5 rounded-2xl p-6 "><img alt=""
                  srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Fmsg.png&amp;w=96&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Fmsg.png&amp;w=256&amp;q=100 2x"
                  src="https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Fmsg.png&amp;w=256&amp;q=100" width="70" height="50"
                  decoding="async" data-nimg="1" />
                  <div className="mt-8 mb-4">
                    <div className="text-gray-200 font-inter font-semibold text-2xl ">Drop us an email</div>
                    <div className="text-gray-400 font-inter font-normal text-base">Don't have time to schedule a meeting?
                      Drop us an email </div>
                  </div><a href="mailto:support@huddle01.com"
                    className=" flex items-center justify-center border border-custom-4 hover:bg-custom-5 transition duration-300 ease-in-out bg-custom-3 rounded-lg py-3 px-5 w-52 font-semibold text-center font-inter text-base text-gray-300">Send
                    a message</a>
                </div>
                <div className="border border-custom-5 rounded-2xl p-6 "><img alt=""
                  srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Ffaq.png&amp;w=96&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Ffaq.png&amp;w=256&amp;q=100 2x"
                  src="https://huddle01.com/_next/image?url=%2Fimages%2FContact%2Ffaq.png&amp;w=256&amp;q=100" width="70" height="50"
                  decoding="async" data-nimg="1" />
                  <div className="mt-8 mb-4">
                    <div className="text-gray-200 font-inter font-semibold text-2xl ">Meet us on Discord</div>
                    <div className="text-gray-400 font-inter font-normal text-base">Join our discord to receive real-time
                      updates on D-App</div>
                  </div><button
                    className="mt-12 flex items-center justify-center border border-custom-4 hover:bg-custom-5 transition duration-300 ease-in-out  bg-custom-3 rounded-lg py-3 px-5 mt-6 font-semibold"
                    type="button"><span className="text-center font-inter text-base text-gray-300">Connect on
                      Discord</span></button>
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
                  <img alt="Twitter" srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FTwitter.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FTwitter.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FTwitter.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Twitter</div>
                </div>
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Discord" srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FDiscord.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FDiscord.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FDiscord.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Discord</div>
                </div>
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Linkedin" srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FLinkedin.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FLinkedin.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FLinkedin.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
                  <div className=" text-gray-400 font-inter font-medium text-lg mt-4">Linkedin</div>
                </div>
                <div className="bg-custom-2 backdrop-blur-2xl rounded-2xl flex items-center w-full justify-center flex-col cursor-pointer mx-auto py-4 md:py-8 hover:bg-custom-8 transition-all duration-300 ease-in-out" role="presentation">
                  <img alt="Substack" srcSet="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FSubstack.png&amp;w=256&amp;q=100 1x, https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FSubstack.png&amp;w=640&amp;q=100 2x" src="https://huddle01.com/_next/image?url=%2Fimages%2FSocialMedia%2FSubstack.png&amp;w=640&amp;q=100" width="65" height="50" decoding="async" data-nimg="1" className="object-contain" loading="lazy" />
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

export default ContactUs