import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Checkbox } from 'semantic-ui-react'
import { updateEvent, addEvent } from '../../reducers/events';

class ReusableForm extends React.Component {
  defaultValues = { title: '', category: '', description: '', date: '', start_time: '', end_time: '', private_event: false, event_image: '', user_id: 0, edit: false, id: '', user_id: 0}
  state = { ...this.defaultValues }

  componentDidMount() {
    if (this.props.location.state.edit) {
      let { title, category, description, date, start_time, end_time, event_image, private_event, edit, id, user_id } = this.props.location.state
        this.setState({ 
          title: title === null ? '' : title,
          category: category === null ? '' : category,
          description: description === null ? '' : description,
          date: date === null ? '' : date,
          start_time: start_time === null ? false : start_time,
          end_time: end_time === null ? '' : end_time,
          event_image: event_image === null ? '' : event_image,
          private_event: private_event === null ? false : private_event,
          edit: edit,
          id: id,
          user_id: user_id
        })
    }
  }

  submit = (event) => {
    const { dispatch, history } = this.props
    if (this.props.location.state.edit) {
      dispatch(updateEvent(event))
      history.push(`/events/${this.props.location.state.id}`)
    } else {
      dispatch(addEvent(event))
      history.push('/profile')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { account } = this.props
    if (this.props.location.state.edit) {
      let event = { ...this.state }
      this.submit(event)
    } else {
      let event = { ...this.state, user_id: account.id }
      this.submit(event)
      this.setState({ ...this.defaultValues })
    }
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  showForm = () => {
    let { title, category, description, date, start_time, end_time, event_image, private_event } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="title"
          placeholder={this.state.title ? this.state.title : 'Title'}
          value={title}
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          id="category"
          placeholder={this.state.category ? this.state.category : 'Category'}
          value={category}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="description"
          placeholder={this.state.description ? this.state.description : 'Description of the Event'}
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
          placeholder={this.state.start_time ? this.state.start_time : 'Start Time'}
          value={start_time}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="end_time"
          placeholder={this.state.end_time ? this.state.end_time : 'End Time'}
          value={end_time}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="event_image"
          placeholder={this.state.event_image ? this.state.event_image : 'Image'}
          value={event_image}
          onChange={this.handleChange}
        />
        <br />
        <p> Is this event private? </p>
        <Checkbox
          id="private_event"
          placeholder='Name'
          checked={private_event}
          onChange={() => this.setState({ private_event: !private_event })}
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }

  render() {
    return (
      this.showForm()
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(ReusableForm)
