import React from 'react';
import axios from 'axios';
import { List, Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
// import { isAuthenticated } from '../fakeAuth';

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

  render() {
    let { events } = this.state;
    return (
      <div>
        <h1>Event List</h1>
        <ul>
            { events.map( e =>
                <li key={e.id}>
                  <Link to={`/events/${e.id}`}>{e.title}</Link>
                </li>
              )
            }
          </ul>
        </div>
    )
  }
}

export default EventList;