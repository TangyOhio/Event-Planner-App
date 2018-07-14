import React from 'react'
import axios from 'axios'
import {
 Grid,
 Button,
 Image,
 Segment
} from 'semantic-ui-react'
import RSVPButton from './RSVPButton';
import { connect } from 'react-redux'
import { removeEvent } from '../../reducers/events';


class Event extends React.Component {
  state = { event: {} }


  deleteEvent = (id) => {
    const { dispatch } = this.props
    dispatch(removeEvent(id))
    this.props.history.push('/eventlist')
  }


  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ event: res.data })
      })
  }

  render() {
    let { event } = this.state
    return (
      <Segment className='ui container' vertical>
        <Grid columns={16} divided>
          <Grid.Row>
          
            <Grid.Column width={10}>
              <Image src={event.event_image}/>
            </Grid.Column>
          
            <Grid.Column width={6}>
              <h5>{ event.date }</h5>
              <h1>{ event.title }</h1>
              <h4>{ event.category }</h4>
              
              <RSVPButton event={event} />
            </Grid.Column>
          
          </Grid.Row>
        </Grid>

        <Grid columns={16}>
          <Grid.Row>

            <Grid.Column width={10}>
              <h4>Description</h4>
              <p>
                { event.description }
              </p>
            </Grid.Column>
            
            <Grid.Column width={6}>
              <h4>Date &amp Time</h4>
              <p>
                { event.date }
              </p>
              <p>
                Time: {event.start_time} - {event.end_time}
              </p>
            </Grid.Column>

            <Button onClick={() => this.deleteEvent(event.id)} color='red' >
              Remove Event
            </Button>
          
          </Grid.Row>
        </Grid>
      </Segment>
     
    )
  }
}

export default connect()(Event)