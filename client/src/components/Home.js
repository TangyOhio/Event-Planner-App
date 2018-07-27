import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react'
import './styles.css'
import MyCalendar from './events/MyCalendar'
import Typist from 'react-typist'
import '../../node_modules/react-typist/dist/Typist.css'

  // Home page for DPL Events
  class Home extends Component {
    
    render() {
    return (
      <Segment basic style={{ padding: 0 }} className="wrapper">
        <Container>
          <Segment textAlign='center' style={{ padding: '5em 0em' }} vertical>
            <Header as='h3' style={{ fontSize: '5em' }}>
              <div style={{ display: 'flex', flexFlow: 'row noWrap', justifyContent: 'center' }}>
                <Typist show={true} blink={true} element='|'>Get Nerdy With Us.</Typist>
              </div>
            </Header>
              <p style={{ fontSize: '2em' }}>
                Join us at our next event!
              </p>
            <Link to='/register'>
              <Button primary size='huge'>
                Sign Up to RSVP
              </Button>
            </Link>
          </Segment>
          <Segment textAlign="center" style={{ padding: '8em 0em' }} vertical>
            <Container text>
              <Header as='h3' style={{ fontSize: '2em' }}>Upcoming Events</Header>

              <MyCalendar
                history={this.props.history}
              />
              
              <Button as='a' size='large' href="http://devpointlabs.com">
                Learn More
              </Button>
                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  </Divider>
              <Header as='h3' style={{ fontSize: '2em' }}>You scrolled this far... Nerd.</Header>
              <p style={{ fontSize: '1.33em' }}>
                All the cool kids with they could be like us.
              </p>
              <Button as='a' size='large' href="http://www.devpointlabs.com/apply">Become a Student</Button>
            </Container>
          </Segment>
        </Container>
      </Segment>
    )
  }
}

export default Home
