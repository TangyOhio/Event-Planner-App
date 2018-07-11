import React from 'react'
import axios from 'axios'
import { Card, Grid, Image, Icon, Divider, Progress } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import RSVPButton from './RSVPButton'
import MyCalendar from './MyCalendar'
import moment from 'moment'

class EventList extends React.Component {
  state = { events: [] }

  // When the page is loaded, get all events from the database and throw it in state
  componentDidMount() {
    axios.get('/api/events')
      .then(res => {
        this.setState({ events: res.data })
      }).catch(err => {
        console.log(err)
      })
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
    let { events } = this.state
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
        </Card>
      )
    })
  } 

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
      <div>
        {this.state.events.length && <MyCalendar events={this.formatEvents(this.state.events)} />}
        <h1>Event List</h1>
        <Card.Group stackable itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
      </div>
    )
  }
}

export default EventList