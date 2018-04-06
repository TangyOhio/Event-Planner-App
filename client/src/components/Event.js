import React from 'react';
import axios from 'axios';
import EventsForm from './EventsForm';

class Event extends React.Component {
  state = { event: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => this.setState({ event: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (event) => {
    axios.put(`/api/events/${this.props.match.params.id}`, { event })
      .then( res => this.setState({ event: res.data, edit: false }) );
  }

  show() {
    let { event: { title, description }} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    )
  }

  edit() {
    return <EventsForm {...this.state.event} submit={this.submit} />
  }

  render() {
    let { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
      </div>
    )
  }
}

export default Event;