import React from 'react';
import Navigation from './components/Navigation'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Landing from './components/Landing'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PasswordForget from './components/PasswordForget';
function App() {
  return (
    <div className="App">
      <Router>
         <Navigation />
         
         <Route exact path={ROUTES.HOME} component={Home} />
         <Route path={ROUTES.SIGN_IN} component={SignIn} />
         <Route path={ROUTES.SIGN_UP} component={SignUp} />
         <Route path={ROUTES.LANDING} component={Landing} />
         <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
      </Router>
    </div>
  );
}

export default App;
