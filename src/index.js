import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AccountLogin from './views/account-login'
import CreateAccount from './views/create-account'
import Subscription from './views/subscription'
import Payment from './views/payment'
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route component={AccountLogin} exact path="/account-login" />
        <Route component={CreateAccount} exact path="/" />
        <Route component={Subscription} exact path="/subscription" />
        <Route component={Payment} exact path="/payment" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
