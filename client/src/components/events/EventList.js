import React from 'react'
import { Card, Header, Container, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import EventCard from './EventCard'
import { getEvents } from '../../reducers/events'

const StyledContainer = styled(Container)`
  margin: 2em auto;
`

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
        <EventCard event={event} key={event.id} cancel={false} history={this.props.history} />
      )
    })
  }

  // A function that will display the events that are before our current date
  displayPastEvents = () => {
    let { events } = this.props
    events.reverse
    return events.map( event => {
      if (moment(event.date).isBefore(moment()))
        return (
          <EventCard event={event} key={event.id} cancel={false} history={this.props.history} />
        )
    })
  }

  render() {
    return (
      <StyledContainer>
        <Divider horizontal><Header as='h1' style={{ textShadow:"2px 2px 4px gray" }}>Our Events</Header></Divider>
        <Card.Group itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
        <Divider horizontal><Header as='h1' style={{ textShadow:"2px 2px 4px gray" }}>Our Past Events</Header></Divider>
        <Card.Group itemsPerRow={3}>
          {this.displayPastEvents()}
        </Card.Group>

      </StyledContainer>
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
