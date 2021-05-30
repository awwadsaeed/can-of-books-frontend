import React from 'react';
import Header from './header';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login';
import LogOut from './component/LogoutButton';
import User from './component/User';
import { withAuth0 } from '@auth0/auth0-react'

class App extends React.Component {

  render() {
    console.log('app',this.props.auth0.isAuthenticated);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {!this.props.auth0.isAuthenticated?<Login/>:<LogOut/>}
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                </Route>
                <Route exact path="/profile">
                <User/>
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);