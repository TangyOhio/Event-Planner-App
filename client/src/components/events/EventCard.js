import React, { Component, Fragment } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import RSVPButton from './RSVPButton'
import CRUDButtons from './CRUDButtons'

// Displays the time of the events
const eventTime = (event, day) => {
  const startDate = `${event.date}T${event.start_time}:00`
  const endDate = `${event.date}T${event.end_time}:00`
    if (day) {
      return moment(startDate).format('dddd, MMM Do YYYY')
    } else {
      return `${moment(startDate).format('h:mma')} - ${moment(endDate).format('h:mma')}`
    }
}

// Displays either register and the crud buttons, or remove rsvp,
// depending on where this component is being called
const registerButton = (event, history, rsvp, cancel) => {
  if ( cancel ) {
    return <RSVPButton event={event} cancel={cancel} rsvp={rsvp} />
  } else {
    return (
      <Fragment>
        <RSVPButton event={event} cancel={cancel} />
        <CRUDButtons event={event} history={history} />
      </Fragment>
    )
  }
}

class EventCard extends Component {
  render() {
  const { event, history, rsvp, cancel } = this.props
    return (
      <Fragment>
        <Card key={event.id} >
          <Image src={event.event_image} height="200" width="400" />
  
          <Card.Content>
            <Card.Header>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </Card.Header>
  
            <Card.Meta>
              {eventTime(event, true)}
            </Card.Meta>
  
            <Card.Description>{event.description}</Card.Description>
          </Card.Content>

          <Card.Content extra textAlign="center">
            {eventTime(event, false)}
          </Card.Content>

          {registerButton(event, history, rsvp, cancel)}
        </Card>
      </Fragment>
    )
  }
}

export default EventCard
