import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Profile from './user/Profile';
import Settings from './user/Settings';
import InviteForm from './user/InviteForm';
import EventList from './events/EventList';
import EventForm from './events/EventForm';
import Event from './events/Event';
import MyCalendar from './events/MyCalendar';
import EditForm from './events/EditForm';
import Footer from './Footer';

// This will be split someday
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/eventlist' component={EventList} />
            <Route exact path='/events/:id' component={Event} />
            <Route exact path='/calendar' component={MyCalendar} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/settings' component={Settings} />
            <ProtectedRoute exact path='/eventform' component={EventForm} />
            <ProtectedRoute exact path='/edit/:id' component={EditForm} />
            <ProtectedRoute exact path='/inviteform' component={InviteForm} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
