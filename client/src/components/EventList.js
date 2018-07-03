import React from 'react';
import axios from 'axios';
import { List, Header, Card, Container, GridColumn, Grid, Image, Icon, Divider, Progress, Button } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
// import { isAuthenticated } from '../fakeAuth';
import  Events from './Events';
import { connect } from 'react-redux';

class EventList extends React.Component {
  state = { events: [] }

  componentDidMount() {
    axios.get('/api/events')
      .then( res => {
        console.log(res)
        this.setState({ events: res.data })
    }).catch(err => {
        console.log(err)
    })
  }

  handleRSVP = (id) => {
    const { account } = this.props;
    let rsvp = { user_id: account.id, event_id: id }
    console.log(rsvp)
    axios.post('/api/rsvps', { rsvp } )
    .then( res => {
        console.log(res)
      }).catch( err => {
        console.log(err)
    })
  }

  eventTime = (event) => {
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            <Icon name='calendar' textAlign='middle' />
            Date: { event.date}
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            Time: {event.start_time} - {event.end_time}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }


  displayEvents = () => {
    return this.state.events.map( event => {
      return(
      
        <Card color="purple">
          <Image src={ event.event_image } />
          <Card.Content>
            <Card.Header>
              <Link to='/events/:id'>
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
          <Card.Content extra textAlign='centered'>
  
              { this.eventTime(event)}
            <Divider/>
            <Progress percent={event.xp} size='tiny'>
              XP: {event.xp}
            </Progress>
          </Card.Content>
          <Button onClick={() => this.handleRSVP(event.id)}>Register</Button>
        </Card>
      )
    })
} 

  render() {
    let { events } = this.state;
    return (
      <div>
        <h1>Event List</h1>
        <Card.Group stackable itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(EventList);