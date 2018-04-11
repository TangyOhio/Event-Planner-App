import React from 'react';
import axios from 'axios';
import EventsForm from './EventsForm';
import { Redirect, Link } from 'react-router-dom';

class Event extends React.Component {
  state = { events: [] }

  componentDidMount() {
    axios.get('/api/events')
      .then( res => this.setState({ events: res.data }) )
  }

  // submit = (event) => {
  //   axios.put(`/api/events/${this.props.match.params.id}`, { event })
  //     .then( res => this.setState({ event: res.data, edit: false }) );
  // }

  // show() {
  //   let { event: { title, description }} = this.state;
  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <h3>{description}</h3>
  //     </div>
  //   )
  // }

  // edit() {
  //   return <EventsForm {...this.state.event} submit={this.submit} />
  // }

  render() {
    let { events } = this.state;
    return (
      <ul>
          { events.map( e =>
              <li key={e.id}>
                <Link to={`/events/${e.id}`}>{e.title}</Link>
              </li>
            )
          }
        </ul>
    )
  }
}

export default Event;