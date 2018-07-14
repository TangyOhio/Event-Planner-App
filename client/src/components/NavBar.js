import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
// import SVG from 'react-inlinesvg';
import logo from '../images/logo_dpl-white.png';


class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu inverted="true" position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div className="main-nav">
        <Menu inverted pointing secondary>
        <Link to='/' className="logo">
          <img src={logo} width="300px" alt="" />
        </Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/settings'>Settings</Link>
        <Link to='/eventlist'>Event List</Link>
        <Link to='/eventform'>Event Form</Link>
          <Link to='/calendar'>Calendar</Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
