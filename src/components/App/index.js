import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../Footer";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import PasswordChangePage from "../PasswordChange";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import AgentPage from "../Agent";
import ClientPage from "../Client";
import House from "../House";
import GoogleAddInfo from "../ProviderAddInfo";

import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import {withAuthentication} from "../../server/Session/index";

const App = () => (
  <div>
	<Router>
		<div>
      
			<Navigation />

			<Route exact path={ROUTES.LANDING} component={LandingPage} />
			<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
			<Route path={ROUTES.SIGN_IN} component={SignInPage} />
			<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
			<Route path={ROUTES.HOME} component={HomePage} />
			<Route path={ROUTES.ACCOUNT} component={AccountPage} />
			<Route path={ROUTES.ADMIN} component={AdminPage} />
			<Route path={ROUTES.HOUSE} component={House} />
			<Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
			<Route path={ROUTES.GOOGLEADDINFO} component={GoogleAddInfo} />
      
		</div>
	</Router>
  <Footer />
  </div>
  
);

export default withAuthentication(App);
