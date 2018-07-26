import React from 'react'
import { Card, Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventCard from './EventCard'
import { getEvents } from '../../reducers/events'
import moment from 'moment'

class EventList extends React.Component {

  // When the page is loaded, get all events from the database and throw it in the redux store
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEvents())
  }

  // A function that returns the events laid out all pretty like and such
  displayEvents = () => {
    let { events } = this.props
    return events.map( event => {
     if (moment(event.date).isAfter(moment()))
      return (
        <EventCard event={event} key={event.id} cancel={false} />
      )
    })
  }

  displayPastEvents = () => {
    let { events } = this.props
    events.reverse
    return events.map( event => {
     if (moment(event.date).isBefore(moment()))
      return (
        <EventCard event={event} key={event.id} cancel={false} />
      )
    })
  }


  render() {
    return (
      <Container>
        <Header as='h1'>Event List</Header>
        <Card.Group itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
        <Header as='h1'>See our past events</Header>
        <Card.Group itemsPerRow={3}>
          {this.displayPastEvents()}
        </Card.Group>

      </Container>
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
