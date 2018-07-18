import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setFlash } from '../../reducers/flash'
import { updateEvent } from '../../reducers/events'

class EditForm extends React.Component {
  state = { title: '', category: '', description: '', date: '', start_time: '', end_time: '', private_event: '', event_image: '' }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => this.setState({ ...res.data }))
  }

  submit = (event) => {
    const { dispatch } = this.props
    dispatch(updateEvent(event))
    dispatch(setFlash('You Successfully Edited This Event', 'green'))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { account } = this.props
    let event = { ...this.state, user_id: account.id }
    this.submit(event)
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  render() {
    let { title, category, description, date, start_time, event_image, end_time, private_event } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="title"
          placeholder={title}
          value={title}
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          id="category"
          placeholder={category}
          value={category}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="description"
          placeholder={description}
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
          placeholder={start_time}
          value={start_time}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="end_time"
          placeholder={end_time}
          value={end_time}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="event_image"
          value={event_image}
          onChange={this.handleChange}
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
    account: state.user,
    events: state.events
  }
}

export default connect(mapStateToProps)(EditForm)