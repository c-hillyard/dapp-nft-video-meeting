import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Alert from '../layout/Alert'
import NotFound from '../layout/NotFound'
import Landing from '../layout/Landing'
import AboutUs from '../layout/AboutUs'
import Product from '../layout/Product'
import Protocol from '../layout/Protocol'
import ContactUs from '../layout/ContactUs'
import Docs from '../layout/docs/index'

const Routes = () => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/protocol' component={Protocol} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/docs' component={Docs} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
