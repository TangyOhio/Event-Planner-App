import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

class EventForm extends React.Component {
  defaultValues = { title: '', category: '', description: '', date: '', start_time: '', end_time: '', private_event: '', event_image: '' }
  state = {...this.defaultValues}

  submit = (event) => {
    let { events } = this.state
    axios.post('/api/events', { event } )
      .then( res => {
        console.log(res.data)
    }).catch( err => {
        console.log(err)
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    let event = { ...this.state }
    this.submit(event)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    let { title, category, description, date, start_time, end_time, private_event, event_image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          id="category"
          placeholder="Category"
          value={category}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="description"
          placeholder="Description"
          type="description"
          value={description}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="date"
          id="date"
          value={date}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="time"
          id="start_time"
          value={start_time}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="time"
          id="end_time"
          value={end_time}
          onChange={this.handleChange}
        />
        <br />
        <input 
          type="file"
          id="event_image"
          value={event_image}
          onChange={this.handleChange} 
          accept="image/*"
        />
        <br />
        <input 
          type="checkbox"
          id="private_event"
          value={private_event}
          onChange={this.handleChange} 
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }
}

export default EventForm;