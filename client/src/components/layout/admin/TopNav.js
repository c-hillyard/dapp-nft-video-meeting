import React from 'react'
import ellipseAddress from '../../../utils/ellipseAddress'
import MetamaskImage from '../../reuseable/MetamaskImage'
import { useHistory } from 'react-router-dom'

const TopNav = () => {
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

  const disconnectWallet = async () => {
    setWalletAddress(null)
    localStorage.setItem('walletAddress', 'null')
    history.push('/')
  }

  return (
    <div className="dark:bg-customDark-1 sticky z-10 flex justify-end border-b-2 border-slate-300 bg-zinc-50 py-1 px-10 dark:border-b-2 dark:border-[#23262F]"
      tabIndex="0" data-orientation="horizontal">
      <div role="group" dir="ltr" data-orientation="horizontal" aria-label="Navbar" className="flex ">
        <button type="button" onClick={() => disconnectWallet()} data-state="closed" role="radio" aria-checked="false" aria-label="Wallet" className="dark:hover:bg-rgbColors-7 flex items-center rounded-xl py-2 pl-3 pr-5 hover:bg-slate-100 dark:hover:bg-rgbColors-7 flex items-center rounded-xl py-2 pl-3 pr-5 hover:bg-slate-100  " id="radix-:r0:" haspopup="menu" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
          <div>
            <MetamaskImage />
          </div>
          <div>
            <div className="ml-2 mr-3 text-left text-sm text-slate-500 transition-none dark:text-slate-100">
              {ellipseAddress(walletAddress)}
              <br />
              <div className=" text-slate-400">Disconnect</div>
            </div>
          </div>
          <div className="flex items-center duration-100 ">
            <div className="p-1"><svg width="6" height="10" viewBox="0 0 6 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z"
                fill="#9CA3AF"></path>
            </svg></div>
          </div>
        </button></div>
    </div>
  )
}

export default TopNav