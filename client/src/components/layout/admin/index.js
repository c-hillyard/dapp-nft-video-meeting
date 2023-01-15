import React from 'react'
import "./admin.scss"
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Overview from './Overview'
import Meeting from './Meeting'
import Storage from './Storage'
import Collections from './Collections'
import Profile from './Profile'

const Admin = () => {
  return (
    <div className='admin-dashboard'>
      <div className="dark:bg-customDark-1 flex h-screen overflow-y-hidden bg-zinc-50 transition duration-700">
        <Sidebar />
        <div className="top-1 h-screen w-full">
          <TopNav />
          <Router basename='/dashboard'>
            <Route exact path='/' component={Overview} />
            <Route exact path='/meetings' component={Meeting} />
            <Route exact path='/storage' component={Storage} />
            <Route exact path='/collections' component={Collections} />
            <Route exact path='/profile' component={Profile} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Admin