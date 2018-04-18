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
      <Segment className='ui container' style={{ padding: '8em 0em' }} vertical>
        <Grid columns={16} divided>
        <Grid.Row>
          <Grid.Column width={10}>
            <Image src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42510282%2F34033487363%2F1%2Foriginal.jpg?w=600&auto=compress&rect=0%2C60%2C1920%2C960&s=c34b0b3492b026493e0604fe920a5187' />
          </Grid.Column>
          <Grid.Column width={6}>
            { event.date}
            <h1>{event.title}</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button>Register</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div>
            <h1>{event.title}</h1>
            <h3>{event.category}</h3>
            <h3>{event.description}</h3>
            <h3>{event.event_time}</h3>
            <h3>{event.event_image}</h3>
          </div>
        </Segment>
      
    )
  }
}

export default Event;