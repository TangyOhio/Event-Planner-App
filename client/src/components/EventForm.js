import React from 'react'
import axios from 'axios'
import { setFlash } from '../reducers/flash'
import { connect } from 'react-redux'
import { setHeaders } from '../reducers/headers'
import store from './store'

class EventForm extends React.Component {
  defaultValues = { title: '', category: '', description: '', date: '', start_time: '', end_time: '', private_event: '', event_image: ''}
  state = {...this.defaultValues}

  submit = (event) => {
    const { dispatch } = this.props
    axios.post('/api/events', { event } )
      .then( res => {
        dispatch(setHeaders(res.headers))
        dispatch(setFlash('You Successfully Created an Event', 'green'))
    }).catch( err => {
      dispatch(setHeaders(err.headers))
      dispatch(setFlash('Oops Event ded', 'red'))
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    const { account } = this.props
    let event = { ...this.state, user_id: account.id  }
    this.submit(event)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e
    this.setState({ [id]: value })
  }

  render() {
    let { title, category, description, date, start_time, end_time, private_event, event_image } = this.state
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
          id="start_time"
          placeholder="Start Time"
          value={start_time}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="end_time"
          placeholder="End Time"
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

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(EventForm)