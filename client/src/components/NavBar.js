import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
// import SVG from 'react-inlinesvg';
import logo from '../images/logo_dpl-white.png';


class NavBar extends Component {
  // rightNavs = () => {
  //   const { user, dispatch, history } = this.props;

  //   if (user.id) {
  //     return (
  //       <Menu.Menu inverted="true" position='right'>
  //         <Menu.Item
  //           name='Logout'
  //           onClick={() => dispatch(handleLogout(history))}
  //         />
  //       </Menu.Menu>
  //     );
  //   }
  //   return (
  //     <Menu.Menu position='right'>
  //       <Link to='/register'>
  //         <Menu.Item name='Register' />
  //       </Link>
  //       <Link to='/login'>
  //         <Menu.Item name='Login' />
  //       </Link>
  //     </Menu.Menu>
  //   );
  // }
  state = { menuTab: '' }

  handleItemClick = (e, { name }) => this.setState({ menuTab: name })

  mainNav = () => {
    <Menu pointing>
    </Menu>
  }
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


          <Link to='/EventList'>
            <Menu.Item
            name='DPL events'
            active={menuTab === 'DPL events'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/EventForm'>
            <Menu.Item
            name='Create Event'
            active={menuTab === 'Create Event'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/Calendar'>
            <Menu.Item
            name='My Calendar'
            active={menuTab === 'My Calendar'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/Settings'>
            <Menu.Item
            name='settings'
            active={menuTab === 'settings'}
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
          <Link to='/Register'>
            <Menu.Item 
            name='register'
            active={menuTab === 'register'}
            onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/Login'>
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
