import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReceiveToken from './components/ReceiveToken';
import Login from './components/Login';
import Home from './components/Home';
import {
  AccessTokenContext,
  AccessTokenProvider
} from './store/AccessTokenContext';

function App() {
  // const [contextToken] = useContext(AccessTokenContext);
  // const redirectHandler = !contextToken ? (
  //   <Redirect exact from='/' to='/login' />
  // ) : (
  //   <Redirect exact from='/' to='/home' />
  // );
  return (
    <div className='App'>
      <header>
        <div id='header-content'>
          <h1>Welcome to React Spotify Player</h1>
          <AccessTokenProvider>
            <BrowserRouter>
              <Switch>
                {/* {redirectHandler} */}
                {/* <Redirect exact from='/' to='/login' />} */}
                <Redirect exact from='/' to='/login' />}
                <Route exact path='/login' component={Login} />
                <Route exact path='/receive-token' component={ReceiveToken} />
                <Route exact path='/home'>
                  <Home />
                </Route>
              </Switch>
            </BrowserRouter>
          </AccessTokenProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
