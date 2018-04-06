import React from 'react';
import axios from 'axios';
import { List, Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';
import Event from './Event';
import { Redirect, Link } from 'react-router-dom';
// import { isAuthenticated } from '../fakeAuth';
import EventsForm from './EventsForm';
import EventsList from './EventsList';

// const EventsList = ({menuItems}) => (
//   <div id="menu">
//     <Card.Group>
//       { event.map( event => 
//           <Event {...event} />
//         )
//       }
//     </Card.Group>
//   </div>
// )

class EventsList extends React.Component {
  state = { events: [], showForm: false }

  componentDidMount() {
    axios.get('/api/events')
      .then( res => this.setState({ events: res.data }) )
  }

  show() {
    let { events } = this.state
    return(
      <ul>
        { events.map( evnt =>
        <li key={evnt.id}>
          <Link to={`/events/${evnt.id}`}>{evnt.name}</Link>
        </li>
          )}
      </ul>
    )
  }

  form() {
    return <EventsForm submit={this.submit} />
  }

  submit = (event) => {
    let {events} = this.state
    axios.post('/api/events', {event} )
      .then( res => this.setState({ events: [res.data, ...events ], showForm: false }))
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    let {showForm} = this.state
    return(
      <div>
        <h2>Events</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}

export default EventsList;