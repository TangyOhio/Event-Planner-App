import React from 'react';
import axios from 'axios';

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
      <div>
        <h1>{event.title}</h1>
        <h3>{event.description}</h3>
      </div>
    )
  }
}

export default Event;