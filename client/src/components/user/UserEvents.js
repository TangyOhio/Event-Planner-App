import React, { Component, Fragment } from 'react'
import { Header, Card, Divider } from 'semantic-ui-react'
import EventCard from '../events/EventCard'

class UserEvents extends Component {

  // Shows the events that the user has rsvp'd for
  filterMyRSVP = () => {
    const { events, rsvps } = this.props
    return rsvps.map(rsvp => {
      return events.map(event => {
        if (rsvp.event_id === event.id) {
          return (
            <Fragment>
              <EventCard event={event} key={event.id} rsvp={rsvp} cancel={true} history={this.props.history} />
            </Fragment>
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
          <EventCard event={event} key={event.id} cancel={false} history={this.props.history} />
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
