import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Header, Card, Grid, Image, Button, Divider } from 'semantic-ui-react'
import CRUDButtons from '../events/CRUDButtons';
import axios from 'axios'

class UserEvents extends Component {

  // Cancels the rsvp, and updates the list
  handleCancel = (id) => {
    axios.delete(`/api/rsvps/${id}`)
      .then(this.filterMyRSVP())
  }

  // A function that formats the time of the events
  eventTime = (event) => {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} >
            Date: {event.date}

          </Grid.Column>
          <Grid.Column width={8} >
            Time: {event.start_time} - {event.end_time}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  // Shows the events that the user has rsvp'd for
  filterMyRSVP = () => {
    const { events, rsvps, handleCancel } = this.props
    return rsvps.map(rsvp => {
      return events.map(event => {
        if (rsvp.event_id === event.id) {
          return (
            <Card key={event.id}>
              <Card.Content>
                <Card.Header>
                  {event.title}
                  <Divider />
                  {event.category}
                </Card.Header>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Image src={event.event_image} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Card.Description>
                  {event.description}
                </Card.Description>
                <Link to={`/events/${event.id}`}>
                  View Details
                </Link>
              </Card.Content>
              <Card.Content extra>
                {this.eventTime(event)}
              </Card.Content>
              <Button onClick={() => handleCancel(rsvp.id)} color='red' >
                Remove RSVP
              </Button>
            </Card>
          )
        } else return null
      })
    })
  }

  // Shows the events that the user created
  filterMyEvents = () => {
    const { account, events } = this.props
    events.sort
    return events.map(event => {
      if (event.user_id === account.id) {
        return (
          <Card key={event.id}>
            <Card.Content>
              <Card.Header>
                {event.title}
                <Divider />
                {event.category}
              </Card.Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image src={event.event_image} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Card.Description>
                {event.description}
              </Card.Description>
              <Link to={`/events/${event.id}`}>
                View Details
              </Link>
            </Card.Content>
            <Card.Content extra>
              {this.eventTime(event)}
            </Card.Content>
            <CRUDButtons event={event} history={this.props.history} />
          </Card>
        )
      } else return null
    })
  }
  
  render() {
    return (
      <Fragment>
        <Header as='h1' textAlign='center'>RSVPs</Header>
        <Divider />
        <Card.Group stackable itemsPerRow={3}>
          {this.filterMyRSVP()}
        </Card.Group>
        <Header as='h1' textAlign='center'>My Events</Header>
        <Divider />
        <Card.Group stackable itemsPerRow={3}>
          {this.filterMyEvents()}
        </Card.Group>
      </Fragment>
    )
  }
}

export default UserEvents
