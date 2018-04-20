import React from 'react';
import axios from 'axios';
import { 
  List, 
  Header, 
  Card, 
  Container, 
  GridColumn, 
  Grid, 
  Image,
  Button,
  Segment
} from 'semantic-ui-react';

class Event extends React.Component {
  state = { event: {} }

  componentDidMount() {
    axios.get('/api/events/10')
      .then( res => { 
        console.log(res)
        this.setState({ event: res.data }) 
      }).catch( err => {
        console.log(err)
    }) 
  }

  render() {
    let { event } = this.state;
    return (
      <Segment className='ui container' vertical>
        <Grid columns={16} divided>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42510282%2F34033487363%2F1%2Foriginal.jpg?w=600&auto=compress&rect=0%2C60%2C1920%2C960&s=c34b0b3492b026493e0604fe920a5187' width="100%" />
            </Grid.Column>
            <Grid.Column width={6}>
              <h5>{ event.date }</h5>
              <h1>{event.title}</h1>
              <h4>{event.category}</h4>
              <Button>Register</Button>
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
              <h4>Date &amp; Time</h4> 
              <p>
                { event.date }
              </p>
              <p>
                Time: {event.start_time} - {event.end_time}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
    )
  }
}

export default Event;