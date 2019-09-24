import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReceiveToken from './ReceiveToken';
import Login from './Login';
import Home from './Home';
import { AccessTokenProvider } from './AccessTokenContext';

function App() {
  return (
    <div className='App'>
      <header>
        <div id='header-content'>
          <h1>Welcome to React Spotify Player</h1>
          <AccessTokenProvider>
            <BrowserRouter>
              <Switch>
                <Redirect exact from='/' to='/login' />
                <Route exact path='/login' component={Login} />
                <Route exact path='/receive-token' component={ReceiveToken} />
                <Route exact path='/home' component={Home} />
              </Switch>
            </BrowserRouter>
          </AccessTokenProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
