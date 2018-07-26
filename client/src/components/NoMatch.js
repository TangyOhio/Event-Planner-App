import React, { Component } from 'react';
import { Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>
        <Divider horizontal>Page Not Found</Divider>
        <Link to='/'>Go Home</Link>
      </Header>
    );
  }
}

export default NoMatch;
