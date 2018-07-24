import React, { Component } from 'react'
import { Header, Tab, Loader } from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'
import NotificationSettings from './NotificationSettings'
import SettingsForm from './SettingsForm'
import UserEvents from './UserEvents'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  margin: 10px 20px;
`

class Profile extends Component {
  state = { rsvps: [], loaded: false }
  
  panes = [
    { 
      menuItem: 'Account Information', render: () => <Tab.Pane attached={false} color='violet'><SettingsForm /></Tab.Pane> 
    },
    { 
      menuItem: 
        'My Events', 
        render: () => 
            <Tab.Pane attached={false} color='violet'>
              <UserEvents 
                rsvps={this.state.rsvps} 
                events={this.props.events} 
                account={this.props.account} 
              />
            </Tab.Pane> 
    },
    { 
      menuItem: 'Notification Settings', render: () => <Tab.Pane attached={false} color='violet'><NotificationSettings /></Tab.Pane> 
    },
    { 
      menuItem: 'Delete Account', render: () => <Tab.Pane attached={false} color='violet'>Delete Account</Tab.Pane> 
    },
  ]

  componentDidMount() {
    // Grab the rsvps
    axios.get('/api/rsvps')
      .then( res => {
        this.setState({ rsvps: res.data, loaded: true })
    }).catch(err => {
        alert(`There was an error: ${err}`)
    })
  }

  render() {
    if (this.state.loaded) {
      return (
        <StyledContainer>
          <Header as='h1'>Profile</Header>
          <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
        </StyledContainer>
      )
    } else return <Loader />
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    account: state.user
  }
}


export default connect(mapStateToProps)(Profile)

