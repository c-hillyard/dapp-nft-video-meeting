import React from 'react'
import Footer from '../Footer'
import Navbar from "../Navbar"
import Test from './test'

const Docs = () => {
  return (
    <div className="Landing">
      <div className="w-full min-h-screen bg-baseBlack text-white">
        <div className="max-w-screen-laptop mx-auto">
          <Navbar />
          <Test />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Docs