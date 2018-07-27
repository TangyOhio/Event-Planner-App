import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header, Segment, Image } from 'semantic-ui-react'
import './styles.css'
import MyCalendar from './events/MyCalendar'
import Typist from 'react-typist'
import '../../node_modules/react-typist/dist/Typist.css'


  // Home page for DPL Events
  class Home extends Component {
    
    render() {
    return (
      <Container className="home-page">
      <Segment basic style={{ padding: 0 }} >
        <Container>
          <Segment textAlign='center' style={{ padding: '5em 0em' }} vertical>
            <Header as='h3' style={{ fontSize: '4.5em' }}>
              <div style={{ display: 'flex', flexFlow: 'row noWrap', justifyContent: 'center' }}>
                <Typist show={true} blink={true} element='|'>Get Nerdy With Us.</Typist>
              </div>
            </Header>
              <p 
              text-color="white"
              style={{ fontSize: '2em' }}
              >
                Join us at our next event!
              </p>
            <Link to='/register'>
              <Button primary size='huge'>
                Sign Up to RSVP
              </Button>
            </Link>
          </Segment>
        <Segment textAlign="center" style={{ padding: '6em 0em' }} vertical>
          <Container>
              <Header as='h3' style={{ fontSize: '2em' }}>Upcoming Events</Header>
         <div className="cal">
              <MyCalendar
                history={this.props.history}
                />
          </div>
          <div style={{ padding: '15px' }}>
              <Button as='a' size='large' href="http://devpointlabs.com">
                Learn More
              </Button>
          </div>
                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  </Divider>
              <Header as='h3' style={{ fontFamily: 'VT323', fontSize: '2em' }}>You scrolled this far... Nerd.</Header>
              <p style={{ fontSize: '1.33em' }}>
                All the cool kids wish they could be like us.
              </p>
              <Button as='a' size='large' href="http://www.devpointlabs.com/apply">Become a Student</Button>
            </Container>
          </Segment>
        </Container>
      </Segment>
      </Container>
    )
  }
}

export default Home
