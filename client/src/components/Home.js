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
      <Segment basic style={{ padding: 0 }} >
        <Container>
          <Segment textAlign='center' style={{ padding: '5em 0em' }} vertical>
            <Header as='h3' style={{ fontSize: '4.5em', background: "black", color:"green" }}>
              <div style={{ display: 'flex', flexFlow: 'row noWrap', justifyContent: 'center', boxShadow: "2px 2px 2px black" }}>
                <Typist show={true} blink={true} element='|'>Get Nerdy With Us.</Typist>
              </div>
            </Header>
              <Header as='p' style={{ padding: "40px 0px 0px 0px", fontSize: '2.5em', color:"white", textShadow: "2px 2px 2px black" }}>
                Join us at our next event!
              </Header>
            <Link to='/register'>
              <Button 
                style={{ boxShadow: "2px 2px 2px black" }}
                primary size='huge'>
                Sign Up to RSVP
              </Button>
            </Link>
          </Segment>
        <Segment textAlign="center" style={{ padding: '6em 0em' }} vertical>
          <Container>
            <Header as='h3' style={{ fontFamily: 'VT323', fontSize: '3em', background: 'black', color: 'green', boxShadow: "2px 2px 2px black" }}>
            Upcoming Events
            </Header>
              <div className="cal">
                <MyCalendar history={this.props.history}/>
              </div>
              <div style={{ padding: '15px 0px 0px 0px' }}>
              <Button 
                style={{ background: "purple", color: "white", boxShadow: "2px 2px 2px black"}}
                as='a' 
                size='large' 
                href="http://devpointlabs.com">
                Learn More About Us
              </Button>
              </div>
            <Header as='h3' style={{ fontFamily: 'VT323', fontSize: '3em', background: "black", color:"green", boxShadow: "2px 2px 2px black" }}>
              Are you ready to code?
            </Header>
              <Button 
                style={{ background: "green", color: "white", boxShadow: "2px 2px 2px black"}}
                as='a' 
                size='large' 
                href="http://www.devpointlabs.com/apply">
                Become a Student
              </Button>
            </Container>
          </Segment>
        </Container>
      </Segment>
    )
  }
}

export default Home
