import React from 'react'
import axios from 'axios'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'
import moment from 'moment'
import RSVPButton from './RSVPButton'
import { connect } from 'react-redux'
import CRUDButtons from './CRUDButtons'


class Event extends React.Component {
  state = { event: {} }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ event: res.data })
    })
  }

  // Displays the time of the events
  eventTime = (event, day) => {
    const startDate = `${event.date}T${event.start_time}:00`
    const endDate = `${event.date}T${event.end_time}:00`
    if (day) {
      return moment(startDate).format('dddd, MMM Do YYYY')
    } else {
      return `${moment(startDate).format('h:mma')} - ${moment(endDate).format('h:mma')}`
    }
  }

  render() {
    let { event } = this.state
    return (
      <Segment className="ui container" vertical>
        <Grid columns={16} divided>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image src={event.event_image} height="200" width="400" />
            </Grid.Column>

            <Grid.Column width={6}>
              <h5>{event.date}</h5>
              <h1>{event.title}</h1>
              <h4>{event.category}</h4>

              <RSVPButton event={event} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={16}>
          <Grid.Row>
            <Grid.Column width={10}>
              <h4>Description</h4>
              <p>{event.description}</p>
            </Grid.Column>

            <Grid.Column width={6}>
              <h4>Date & Time</h4>
              <Divider />
              <p>{this.eventTime(event, true)}</p>
              <p>{this.eventTime(event, false)}</p>
            </Grid.Column>

            <CRUDButtons event={event} history={this.props.history} />
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(Event)
