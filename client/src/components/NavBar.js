import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import SVG from 'react-inlinesvg';


class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu inverted position='right'>
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
      <div style={styles.navbar}>
        <Menu inverted pointing secondary>
          <Link to='/'>
            <Menu.Item name='Home'/>
              <SVG viewBox='0 0 24 23' src="client/src/images/SVG/DPL-Mark.svg">
                <img src="client/src/images/SVG/DPL-Mark.svg" />
              </SVG>
          </Link>
          <Link to='/profile'>
            <Menu.Item name='profile' />
          </Link>
          <Link to='/settings'>
            <Menu.Item name='settings' />
          </Link>
          <Link to='/eventlist'>
            <Menu.Item name='event list' />
          </Link>
          <Link to='/eventform'>
            <Menu.Item name='event form' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  navbar: {
    backgroundColor: "#53407A",
    color: "white"

  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
