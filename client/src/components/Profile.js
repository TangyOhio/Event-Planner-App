import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Card, Grid, Image, Button } from 'semantic-ui-react';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import axios from 'axios';

class Profile extends Component {
  state = { events: [], rsvps: [] }

  componentDidMount() {
    axios.get('/api/rsvps')
      .then( res => {
        this.setState({ rsvps: res.data })
    }).catch(err => {
        console.log(err)
    })

    axios.get('/api/events')
      .then( res => {
        this.setState({ events: res.data })
    }).catch(err => {
        console.log(err)
    })
  }

  handleConfirm = (id) => {
    axios.delete(`/api/rsvps/${id}`)
    window.location.reload()    
  }

  eventTime = (event) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            Date: { event.date}

          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            Time: {event.start_time} - {event.end_time}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  filterEvents = () => {
    const {events, rsvps} = this.state;
    return rsvps.map( rsvp => {
      return events.map( event => {
        if (rsvp.event_id === event.id) {
          return(
            <Card key={event.id}>
              <Card.Content>
                <Card.Header>
                  {event.title}
                  <hr />
                  {event.category}
                </Card.Header>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Image src={ event.event_image } />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Card.Description>
                  {event.description}
                </Card.Description>
                <Link to ={`/events/${event.id}`}>
                  View Details
                </Link>
              </Card.Content>
              <Card.Content extra>
                { this.eventTime(event)}
              </Card.Content>
              <Button onClick={() => this.handleConfirm(rsvp.id)} color='red' >
              Remove RSVP
              </Button>
            </Card>
          )
        } else return null
      })
    })
  }

  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Profile</Header>
        <Card.Group stackable itemsPerRow={3}>
          {this.filterEvents()}
        </Card.Group>
      </Segment>
    );
  }
}

export default Profile;
