import React, { Component } from 'react';
import { Form, Grid,Button } from 'semantic-ui-react';

  //this code pertains to the enable/disable buttons in notification setting tab
  

  
  class NotificationSettings extends React.Component{
    state = { active: false, emailActive: false, googleCalendarActive: false }

    handleClick = () => {
      this.setState({ active: !this.state.active })
    }

    handleEmailClick = () => {
      this.setState({ emailActive: !this.state.emailActive })
    }

    handleGoogleCalendarClick = () => {
      this.setState({ googleCalendarActive: !this.state.googleCalendarActive })
    }

    render(){
      return(
        <div>
          <Button onClick={this.handleClick}>
          {
            this.state.active === false
            ?
            "Disabled"
            :
            "Enabled"
          }
          </Button>
          Text Notifications
          <br />
          <br />
        
          <Button onClick={this.handleEmailClick}>
          {
            this.state.emailActive === false
            ?
            "Disabled"
            :
            "Enabled"
          }
          </Button>
          Email Notificions
          <br />
          <br />
          <Button onClick={this.handleGoogleCalendarClick}>
          {
            this.state.googleCalendarActive === false
            ?
            "Disabled"
            :
            "Enabled"
          }
          </Button>
          Google Calendar
      
        </div>
          
          
      )
    }
  }


export default NotificationSettings;