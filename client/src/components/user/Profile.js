import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Card, Grid, Image, Button, Divider } from 'semantic-ui-react'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment'
import axios from 'axios'
import { connect } from 'react-redux'
import { getEvents } from '../../reducers/events'
import CRUDButtons from '../events/CRUDButtons';

class Profile extends Component {
  state = { rsvps: [], }

  componentDidMount() {
    // Grab the rsvps
    axios.get('/api/rsvps')
      .then( res => {
        this.setState({ rsvps: res.data })
    }).catch(err => {
        console.log(err)
    })

    // Grab the events
    this.props.dispatch(getEvents())
  }

  // Cancels the rsvp, and updates the list
  handleCancel = (id) => {
    axios.delete(`/api/rsvps/${id}`)
      .then(this.filterMyRSVP())
  }

  // A function format the time of the events
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

  // Shows the events that the user has rsvp'd for
  filterMyRSVP = () => {
    const { events } = this.props
    const { rsvps } = this.state
    return rsvps.map( rsvp => {
      return events.map( event => {
        if (rsvp.event_id === event.id) {
          return(
            <Card key={ event.id }>
              <Card.Content>
                <Card.Header>
                  { event.title }
                  <hr />
                  { event.category }
                </Card.Header>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Image src={ event.event_image } />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Card.Description>
                  { event.description }
                </Card.Description>
                <Link to ={`/events/${event.id}`}>
                  View Details
                </Link>
              </Card.Content>
              <Card.Content extra>
                { this.eventTime(event)}
              </Card.Content>
              <Button onClick={() => this.handleCancel(rsvp.id)} color='red' >
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
    return events.map( event => {
      if (event.user_id === account.id) {
        return(
          <Card key={ event.id }>
            <Card.Content>
              <Card.Header>
                { event.title }
                <hr />
                { event.category }
              </Card.Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Image src={ event.event_image } />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Card.Description>
                { event.description }
              </Card.Description>
              <Link to ={`/events/${event.id}`}>
                View Details
              </Link>
            </Card.Content>
            <Card.Content extra>
              { this.eventTime(event)}
            </Card.Content>
            <CRUDButtons event={event} history={this.props.history} />
          </Card>
        )
      } else return null
    })  
  }

  render() {
    return (
      <Segment>
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
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    account: state.user
  }
}


export default connect(mapStateToProps)(Profile)

