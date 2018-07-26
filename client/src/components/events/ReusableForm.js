import React from 'react'
import { connect } from 'react-redux'
import { Checkbox, Form, Button, Header, Dropdown, Segment, Input, Divider } from 'semantic-ui-react'
import styled from 'styled-components'
import { updateEvent, addEvent } from '../../reducers/events'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 5em;
`

const timeOptions = [
  { key: '08:00', text: '8:00 am', value: '08:00' },
  { key: '08:30', text: '8:30 am', value: '08:30' },
  { key: '09:00', text: '9:00 am', value: '09:00' },
  { key: '09:30', text: '9:30 am', value: '09:30' },
  { key: '10:00', text: '10:00 am', value: '10:00' },
  { key: '10:30', text: '10:30 am', value: '10:30' },
  { key: '11:00', text: '11:00 am', value: '11:00' },
  { key: '11:30', text: '11:30 am', value: '11:30' },
  { key: '12:00', text: '12:00 pm', value: '12:00' },
  { key: '12:30', text: '12:30 pm', value: '12:30' },
  { key: '13:00', text: '1:00 pm', value: '13:00' },
  { key: '13:30', text: '1:30 pm', value: '13:30' },
  { key: '14:00', text: '2:00 pm', value: '14:00' },
  { key: '14:30', text: '2:30 pm', value: '14:30' },
  { key: '15:00', text: '3:00 pm', value: '15:00' },
  { key: '15:30', text: '3:30 pm', value: '15:30' },
  { key: '16:00', text: '4:00 pm', value: '16:00' },
  { key: '16:30', text: '4:30 pm', value: '16:30' },
  { key: '17:00', text: '5:00 pm', value: '17:00' },
  { key: '17:30', text: '5:30 pm', value: '17:30' },
  { key: '18:00', text: '6:00 pm', value: '18:00' },
  { key: '18:30', text: '6:30 pm', value: '18:30' },
  { key: '19:00', text: '7:00 pm', value: '19:00' },
  { key: '19:30', text: '7:30 pm', value: '19:30' },
  { key: '20:00', text: '8:00 pm', value: '20:00' },
  { key: '20:30', text: '8:30 pm', value: '20:30' },
  { key: '21:00', text: '9:00 pm', value: '21:00' },
  { key: '21:30', text: '9:30 pm', value: '21:30' },
  { key: '22:00', text: '10:00 pm', value: '22:00' },
  { key: '22:30', text: '10:30 pm', value: '22:30' },
  { key: '23:00', text: '11:00 pm', value: '23:00' },
  { key: '23:30', text: '11:30 pm', value: '23:30' },
  { key: '00:00', text: '12:00 am', value: '00:00' },
  { key: '00:30', text: '12:30 am', value: '00:30' },
  { key: '01:00', text: '1:00 am', value: '01:00' },
  { key: '01:30', text: '1:30 am', value: '01:30' },
  { key: '02:00', text: '2:00 am', value: '02:00' },
  { key: '02:30', text: '2:30 am', value: '02:30' },
  { key: '03:00', text: '3:00 am', value: '03:00' },
  { key: '03:30', text: '3:30 am', value: '03:30' },
  { key: '04:00', text: '4:00 am', value: '04:00' },
  { key: '04:30', text: '4:30 am', value: '04:30' },
  { key: '05:00', text: '5:00 am', value: '05:00' },
  { key: '05:30', text: '5:30 am', value: '05:30' },
  { key: '06:00', text: '6:00 am', value: '06:00' },
  { key: '06:30', text: '6:30 am', value: '06:30' },
  { key: '07:00', text: '7:00 am', value: '07:00' },
  { key: '07:30', text: '7:30 am', value: '07:30' },
]

class ReusableForm extends React.Component {
  defaultValues = { title: '', category: '', description: '', date: '', start_time: '', end_time: '', private_event: false, event_image: '', user_id: 0, id: '' }
  state = { ...this.defaultValues }

  componentDidMount() {
    if (this.props.location.state) {
      let { title, category, description, date, start_time, end_time, event_image, private_event, id, user_id } = this.props.location.state
      this.setState({ 
        title: title === null ? '' : title,
        category: category === null ? '' : category,
        description: description === null ? '' : description,
        date: date === null ? '' : date,
        start_time: start_time === null ? false : start_time,
        end_time: end_time === null ? '' : end_time,
        event_image: event_image === null ? '' : event_image,
        private_event: private_event === null ? false : private_event,
        id: id,
        user_id: user_id
      })
    }
  }

  submit = (event) => {
    const { dispatch, history } = this.props
    if (this.props.location.state) {
      dispatch(updateEvent(event))
      history.push(`/events/${this.props.location.state.id}`)
    } else {
      dispatch(addEvent(event))
      history.push(`/events/${this.props}`);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { account } = this.props
    if (this.props.location.state) {
      let event = { ...this.state }
      this.submit(event)
        return (
          alert("You edited the event.")
        )
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

  timeChange = (e, { value }) => this.setState({ start_time: value })

  showForm = () => {
    let { title, category, description, date, start_time, end_time, event_image, private_event } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Divider horizontal><Header as='h1'>Your Event</Header></Divider>
        <Form.Group widths='equal'>
          <Form.Field required>
            <Header as='label'>Event Title</Header>
            <Input
              id='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
              required
              autoFocus
            />
          </Form.Field>
          <Form.Field >
            <Header as='label'>Category</Header>
            <Input
              id='category'
              placeholder='Category'
              value={category}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field >
            <Header as='label'>Description</Header>
            <Input
              id='description'
              placeholder='Description of the Event'
              value={description}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Divider />
        <Form.Group widths='equal'>
          <Form.Field required >
            <Header as='label'>Date</Header>
            <Input
              required
              type='date'
              id='date'
              value={date}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required >
            <Header as='label'>Starting Time</Header>
            <Dropdown
              required
              id='start_time'
              onChange={(e, { value }) => this.setState({ start_time: value })}
              options={timeOptions}
              placeholder='Start Time'
              selection
              value={start_time}
            />
          </Form.Field>
          <Form.Field required >
            <Header as='label'>Ending Time</Header>
            <Dropdown
              required
              id='end_time'
              onChange={(e, { value }) => this.setState({ end_time: value })}
              options={timeOptions}
              placeholder='End Time'
              selection
              value={end_time}
            />
          </Form.Field>
        </Form.Group>
        <Divider />
        <Form.Field inline >
          <Header as='label'>Image</Header>
          <Input
            id='event_image'
            placeholder='An Image for your Event'
            value={event_image}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id='private_event'
            checked={private_event}
            onChange={() => this.setState({ private_event: !private_event })}
            label='This is a private event'
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

  render() {
    return (
      <StyledContainer>
        <Segment>
          {this.showForm()}
        </Segment>
      </StyledContainer>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(ReusableForm)
