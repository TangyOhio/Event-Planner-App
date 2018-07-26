import React, { Component, Fragment } from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import RSVPButton from './RSVPButton'
import CRUDButtons from './CRUDButtons'

// Displays the time of the events
const eventTime = (event) => {
  const startDate = `${event.date}T${event.start_time}:00`
  const endDate = `${event.date.toString()}T${event.end_time}:00`
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={8} >
          Date: {moment(`${startDate}`).format('MM DD YYYY')}
        </Grid.Column>
        <Grid.Column width={8} >
          Time: {moment(`${startDate}`).format('h:mma')} - {moment(`${endDate}`).format('h:mma')}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

/*  Displays either register and the crud buttons, or remove rsvp,
    depending on where this component is being called
*/
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

  // configureTime = (time) => {
  //   const first = time.split("")
  //   if (first[0] === "0"){
  //     const finished = first.shift()
  //     return finished
  //   } else if ( first[0]=== "1") {
  //     return null
  //   }
  // }

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
              <span className="date">{event.date}</span>
            </Card.Meta>
  
            <Card.Description>{event.description}</Card.Description>
          </Card.Content>

          <Card.Content extra textAlign="center">
            {eventTime(event)}
          </Card.Content>

          {registerButton(event, history, rsvp, cancel)}
        </Card>
      </Fragment>
    )
  }
}

export default EventCard
