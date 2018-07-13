import React, { Fragment } from 'react'
import { Card, Button, Grid, Image, Icon, Divider, Progress } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import RSVPButton from './RSVPButton'
import MyCalendar from './MyCalendar'
import { getEvents, removeEvent } from '../../reducers/events';

class EventList extends React.Component {

  // When the page is loaded, get all events from the database and throw it in the redux store
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEvents())
  }
  
  // The Function that deletes the event
  deleteEvent = (id) => {
    const { dispatch } = this.props
    dispatch(removeEvent(id))
  }

  // TODO Figure out what this is supposed to do
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

  // A function that returns the events laid out all pretty like and such
  displayEvents = () => {
    let { events } = this.props
    return events.map( event => {
      return(
        <Card key={event.id} color='purple'>
          <Image src={ event.event_image } />

          <Card.Content>
            <Card.Header>
              <Link to={`/events/${event.id}`}>
                {event.title}
              </Link>
            </Card.Header>

            <Card.Meta>
              <span className='date'>
                { event.date}
              </span>
            </Card.Meta>

            <Card.Description>
              {event.description}
            </Card.Description>
          </Card.Content>

          <Card.Content extra textAlign='center'>
              { this.eventTime(event)}

            <Divider/>
            
            <Progress percent={event.xp} size='tiny'>
              XP: {event.xp}
            </Progress>
          </Card.Content>

          <RSVPButton event={event} />
          <Button onClick={() => this.deleteEvent(event.id)} color='red' >
              Remove Event
              </Button>


        </Card>
      )
    })
  } 

  // The function that formats the dates to be tossed in the calendar
  formatEvents = (events) => {
    return events.map(event => {
      return{
        start: moment(`${event.date}`).format(),
        end: moment(`${event.date}`).add(1, "days").format(),
        title: event.title
      }
    })
  }

  render() {
    return (
      <Fragment>
        {this.props.events.length && <MyCalendar events={this.formatEvents(this.props.events)} />}
        <h1>Event List</h1>
        <Card.Group stackable itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps)(EventList)