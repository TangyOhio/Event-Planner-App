import React, { Fragment } from 'react'
import { Card, Header, Button, Grid, Image, Icon, Divider, Progress } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import RSVPButton from './RSVPButton'
import { getEvents, removeEvent } from '../../reducers/events';

class EventList extends React.Component {

  // When the page is loaded, get all events from the database and throw it in the redux store
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEvents())
  }
  
  // The function that deletes the event
  deleteEvent = (id) => {
    const { dispatch } = this.props
    dispatch(removeEvent(id))
  }

  // Displays the time of the events
  eventTime = (event) => {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
            <Icon name='calendar' />
            Date: {event.date}
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center' }}>
            Time: {event.start_time} - {event.end_time}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  // Conditionally renders the edit or delete button based on whether or not a user made the event or is an admin
  crudButtons = (event) => {
    const { account } = this.props
    if ( account.is_admin || account.id === event.user_id ) {
      return (
        <Fragment>
          <Button onClick={() => this.props.history.push(`/edit/${event.id}`)} color="green">
            Edit Event
          </Button>
          <Button onClick={() => this.deleteEvent(event.id)} color="red">
            Remove Event
          </Button>
        </Fragment>
      )
    } else return null
  }

  // A function that returns the events laid out all pretty like and such
  displayEvents = () => {
    let { events } = this.props
    return events.map( event => {
      return (
        <Card key={event.id} color="purple">
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
            {this.eventTime(event)}

            <Divider />

            <Progress percent={event.xp} size="tiny">
              XP: {event.xp}
            </Progress>
          </Card.Content>

          <RSVPButton event={event} />
          {this.crudButtons(event)}
        </Card>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <Header as='h1'>Event List</Header>
        <Card.Group stackable itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    events: state.events,
    account: state.user
  }
}

export default connect(mapStateToProps)(EventList)