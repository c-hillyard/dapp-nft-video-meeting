import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import WalletConnectProvider from "@walletconnect/web3-provider"
import Web3 from "web3"
import Web3Modal from "web3modal"

const Navbar = () => {
  const history = useHistory()
  const [mobileNavShow, setMobileNavShow] = React.useState(false)
  const [web3, setWeb3] = React.useState(null)
  const [walletAddress, setWalletAddress] = React.useState(null)

  const providerOptions = {}

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  })

  const connectWallet = async () => {
    let provider = await web3Modal.connect()
    let _web3 = new Web3(provider)
    setWeb3(_web3)
    let accounts = await _web3.eth.getAccounts()
    setWalletAddress(accounts[0].toLowerCase())
    localStorage.setItem('walletAddress', accounts[0].toLowerCase())
    history.push('/dashboard')
  }

  return (
    <nav className="bg-rgbColors-1 w-full px-8 py-4 flex items-center justify-between border-b border-custom-3 backdrop-blur-sm z-10 sticky top-0">
      <div className="flex items-center">
        <div role="presentation" className="cursor-pointer flex items-center">
          <Link to='/'>
            <img alt="logo" src="/image/logo.png" width="130" height="28" decoding="async" data-nimg="1" />
          </Link>
        </div>
        <div className="md:flex items-center hidden ">
          <div role="presentation" className="flex items-center font-inter text-base font-medium text-gray-500 ml-5 cursor-pointer hover:bg-custom-8 py-1.5 px-4 rounded-lg transition-all duration-300 ease-in-out"><Link to='/about'>About Us</Link></div>
          <div role="presentation" className="flex items-center font-inter text-base font-medium text-gray-500 ml-5 cursor-pointer hover:bg-custom-8 py-1.5 px-4 rounded-lg transition-all duration-300 ease-in-out"><Link to='/product'>Product</Link></div>
          <div role="presentation" className="flex items-center font-inter text-base font-medium text-gray-500 ml-5 cursor-pointer hover:bg-custom-8 py-1.5 px-4 rounded-lg transition-all duration-300 ease-in-out">
            <Link to='/protocol'>Protocol<span className="ml-2 bg-rgbColors-5 py-0.5 px-2 rounded-2xl font-inter font-medium text-xs">New</span></Link>
          </div>
          <div role="presentation" className="flex items-center font-inter text-base font-medium text-gray-500 ml-5 cursor-pointer hover:bg-custom-8 py-1.5 px-4 rounded-lg transition-all duration-300 ease-in-out"><Link to='/contact'>Contact Us</Link></div>
          <div role="presentation" className="flex items-center font-inter text-base font-medium text-gray-500 ml-5 cursor-pointer hover:bg-custom-8 py-1.5 px-4 rounded-lg transition-all duration-300 ease-in-out">
            <Link to='/docs'>Docs</Link>
          </div>
        </div>
      </div>
      <div className="md:flex items-center hidden">
        <div className="text-base font-inter font-medium text-gray-100 cursor-pointer mr-5 hover:bg-custom-8 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out" role="presentation">
          <span role="presentation" className="text-gray-100 font-inter font-semibold text-sm">Start a Meeting</span>
        </div>
        <button type="button" onClick={() => connectWallet()} className="rounded-lg shadow-lg bg-gradient-to-b from-[#5C80FF] to-[#2447FD] bg-pos-0 bg-size-200 hover:bg-pos-100 py-2 px-4 cursor-pointer font-inter font-semibold flex items-center transition-all duration-300 ease-in-out">
          {/* <Link to='/dashboard'> */}
            <span className='flex items-center'>
              <span role="presentation" className="flex items-center">
                My Dashboard
                <span className="bg-rgbColors-6 mx-2 rounded-2xl py-0.5 px-2 text-custom-3 text-xs font-inter font-medium">Beta</span>
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="#FCFCFD"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path>
              </svg>
            </span>
          {/* </Link> */}
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button type="button" onClick={() => setMobileNavShow(!mobileNavShow)}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20H29M11 14H29M11 26H29" stroke="#364754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        {mobileNavShow ?
          <div className="absolute top-14 bg-rgbColors-1 h-screen w-full left-0 backdrop-blur-md transition-all duration-100 ease-in ]">
            <div role="presentation" className="flex items-center py-8 px-6 text-slate-400 font-inter font-medium text-base cursor-pointer border-b border-custom-3 last:border-none hover:bg-custom-8"><Link to='/about'>About Us</Link></div>
            <div role="presentation" className="flex items-center py-8 px-6 text-slate-400 font-inter font-medium text-base cursor-pointer border-b border-custom-3 last:border-none hover:bg-custom-8"><Link to='/product'>Product</Link></div>
            <div role="presentation" className="flex items-center py-8 px-6 text-slate-400 font-inter font-medium text-base cursor-pointer border-b border-custom-3 last:border-none hover:bg-custom-8"><Link to='/protocol'>Protocol<span className="ml-2 bg-rgbColors-5 py-0.5 px-2 rounded-2xl font-inter font-medium text-xs">New</span></Link></div>
            <div role="presentation" className="flex items-center py-8 px-6 text-slate-400 font-inter font-medium text-base cursor-pointer border-b border-custom-3 last:border-none hover:bg-custom-8"><Link to='/contact'>Contact</Link></div>
            <div role="presentation" className="flex items-center py-8 px-6 text-slate-400 font-inter font-medium text-base cursor-pointer border-b border-custom-3 last:border-none hover:bg-custom-8">
              <Link to='/docs'>Docs</Link>
            </div>
          </div>
          :
          null
        }
      </div>
    </nav>
  )
}

export default Navbar
