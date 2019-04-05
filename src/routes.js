import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Wizard from './components/Wizard/Wizard'
import Dashboard from './components/Dashboard/Dashboard'
import StepTwo from './components/StepTwo/StepTwo'
import StepThree from './components/stepThree/StepThree'

export default (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/stepTwo' component={StepTwo} />
        <Route path='/stepThree' component={StepThree} />
    </Switch>
) 