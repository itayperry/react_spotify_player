import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ReceiveToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: new URLSearchParams(window.location.search.substring(1))
    };
  }

  componentDidMount() {
    console.log('hello - You are in the right place!');
    // const params = new URLSearchParams(window.location.search.substring(1));
    if (!this.state.params.get('accessToken')) {
      return;
    }
    const accessToken = this.state.params.get('accessToken');
    const expiresIn = this.state.params.get('expiresIn');
    const userId = this.state.params.get('userId');
    console.log('expiresIn: ' + expiresIn);
    console.log('userId: ' + userId);
    console.log('accessToken: ' + accessToken);
  }

  render() {
    if (!this.state.params.get('accessToken')) {
      return <Redirect to='/login' />;
    } else {
      return (
        <Redirect
          to='/home'
          to={{
            pathname: '/home',
            state: { accessToken: this.state.params.get('accessToken') }
          }}
        />
      );
    }
    console.log('we are in the render');
    return <h1>Waiting for a token.. loading</h1>;
  }
}

export default ReceiveToken;
