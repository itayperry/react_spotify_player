import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loginAttempt: false };
  }

  render() {
    if (this.state.loginAttempt) {
      return <Redirect to='/receive-token' />;
    }
    return (
      <div id='login-content'>
        <button>
          <a
            //onClick={this.checkForToken()}
            onClick={() => this.setState({ loginAttempt: true })}
            href='http://localhost:3001/authorize?scope=user-read-private+user-library-read+streaming+user-read-email&redirect=http://localhost:3000/receive-token'
          >
            Login to Spotify
          </a>
        </button>

        <h2>Your favourite albums:</h2>
        <div id='albums'></div>
      </div>
    );
  }
}

export default Login;
