import React, { Component } from 'react';
import { Button, Form, Segment, Header, Tab } from 'semantic-ui-react'
import SettingsForm from './SettingsForm';
import NotificationSettings from './NotificationSettings';
    
            // This code pertains to the account settings page

const panes = [
  { menuItem: 'Account Information', render: () => <Tab.Pane attached={false}>
    <SettingsForm/>
  </Tab.Pane> 
  },
  { menuItem: 'Notification Settings', render: () => <Tab.Pane attached={false}><NotificationSettings/></Tab.Pane> },
  { menuItem: 'Delete Account', render: () => <Tab.Pane attached={false}>Delete Account</Tab.Pane> },
]

class Settings extends Component {
  state = { email: ''}
  
  render() {
    return(
      <div>
        <br />
        <Header as='h1' textAlign='center'>Settings</Header>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    )
  }
}

export default Settings;