import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReceiveToken from './components/ReceiveToken';
import Login from './components/Login';
import Home from './components/Home';
import { AccessTokenProvider } from './store/AccessTokenContext';
import { PlayerSourceProvider } from './store/PlayerSourceContext';
import FavouriteAlbums from './components/FavouriteAlbums';
import FavouriteSongs from './components/FavouriteSongs';
import ShowAlbum from './components/ShowAlbum';

function App() {
  return (
    <div className='App'>
      <header>
        <div id='header-content'>
          <AccessTokenProvider>
            <BrowserRouter>
              <Switch>
                {/* {redirectHandler} */}
                {/* <Redirect exact from='/' to='/login' />} */}
                <Redirect exact from='/' to='/login' />}
                <Route exact path='/login' component={Login} />
                <Route exact path='/receive-token' component={ReceiveToken} />
                <PlayerSourceProvider>
                  <Route path='/home' component={Home} />
                </PlayerSourceProvider>
              </Switch>
            </BrowserRouter>
          </AccessTokenProvider>
        </div>
      </header>
    </div>
  );
}

export default App;

// const [contextToken] = useContext(AccessTokenContext);
// const redirectHandler = !contextToken ? (
//   <Redirect exact from='/' to='/login' />
// ) : (
//   <Redirect exact from='/' to='/home' />
// );
