import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import FavCats from './FavCats';
import LoginButton from './LoginButton';
import Profile from './Profile';


class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <FavCats /> : <LoginButton />}
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
