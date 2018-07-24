import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
// import SVG from 'react-inlinesvg';
import logo from '../images/logo_dpl-white.png';


class NavBar extends Component {
  state = { menuTab: '' }

  handleItemClick = (e, { name }) => this.setState({ menuTab: name })

  underNav = () => {
    const { user, dispatch, history } = this.props;
    const { menuTab } = this.state;
    
    if (user.id) {
      return (
        <Menu pointing>
          <Link to='/profile'>
            <Menu.Item
            name='profile'
            active={menuTab === 'profile'}
            onClick={this.handleItemClick}
            />
          </Link>


          <Link to='/eventlist'>
            <Menu.Item
            name='DPL events'
            active={menuTab === 'DPL events'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/eventform'>
            <Menu.Item
            name='Create Event'
            active={menuTab === 'Create Event'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/calendar'>
            <Menu.Item
            name='My Calendar'
            active={menuTab === 'My Calendar'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Menu.Item position="right"
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu>
      );
    }
    return (
      <Menu pointing>
          <Link to='/register'>
            <Menu.Item 
            name='register'
            active={menuTab === 'register'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/login'>
            <Menu.Item 
            name='login'
            active={menuTab === 'login'}
            onClick={this.handleItemClick}
            />
          </Link>

      </Menu>
    );
  }


  render() {
    return (
      <div className="main-nav" position="bottom">
        <Link to='/' className="logo">
          <img src={logo} width="300px" alt="" />
        </Link>
        <div position="right">
        { this.underNav() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
