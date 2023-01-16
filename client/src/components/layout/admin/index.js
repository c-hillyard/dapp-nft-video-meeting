import React from 'react'
import "./admin.scss"
import "./custom.scss"
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
    <div className='admin-dashboard' style={{overflowX: "hidden"}}>
      <div className="dark:bg-customDark-1 row">
        <div className='col-lg-2 col-md-4 px-0'>
          <Sidebar />
        </div>
        <div className='col-lg-10 col-md-8 px-0'>
          <div className="w-full">
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
    </div>
  )
}

export default Admin