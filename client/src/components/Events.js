import React, { Component, Link } from 'react';
import { Header, Card, Grid, Segment, Container, Image, Icon, Divider, Progress } from 'semantic-ui-react';
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
          <Icon name='calendar' />
            { this.eventTime(event)}
          <Divider/>
          <Progress percent={event.xp} size='tiny'>
            XP: {event.xp}
          </Progress>
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
