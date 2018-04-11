import React, { Component, Link } from 'react';
import { Header, Card, Grid, Segment, Container, Image } from 'semantic-ui-react';
import axios from 'axios';

class Events extends Component {
  state = { events: [] }

  componentDidMount() {
    axios.get('/api/events')
      .then( res => this.setState({ events: res.data }) )
    console.log(this.state.events)
  }

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


  displayEvents = () => {
  return this.state.events.map( event => {
    return(

      <Card>
        <Card.Content>
          <Card.Header>
            {event.title}
            <hr />
            {event.category}
          </Card.Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Image src={ event.event_image } />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Card.Description>
            {event.description}
          </Card.Description>
          <Link to ={`/event/${event.id}`}>
            View Details
          </Link>
        </Card.Content>
        <Card.Content extra>
          { this.eventTime(event)}
        </Card.Content>
      </Card>
    )
  })
}

  render() {
    return(
      <Container>
        <Card.Group stackable itemsPerRow={3}>
          {this.displayEvents()}
        </Card.Group>
      </Container>
    );
  }
}

export default Events;
