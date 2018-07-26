import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { connect } from 'react-redux'
import { getEvents } from '../../reducers/events';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment)

class MyCalendar extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEvents())
  }

  // The function that formats the dates to be tossed in the calendar
  formatEvents = (events) => {
    return events.map(event => {
      const startDate = `${event.date}T${event.start_time}:00`
      const endDate = `${event.date.toString()}T${event.end_time}:00`
      return {
        start: moment(`${startDate}`).format('MM DD YYYY HH:mm A'),
        end: moment(`${endDate}`).format('MM DD YYYY HH:mm A'),
        title: event.title,
        id: event.id
      }
    })
  }
  
  showCal = () => (
    <BigCalendar
      events={this.formatEvents(this.props.events)}
      defaultDate={new Date()}
      style={{ height: '100vh' }}
      defaultView={ this.props.view ? this.props.view : 'month'}
      showMultiDayTimes
      onSelectEvent={event => this.props.history.push(`/events/${event.id}`)}
    />
  )

  render() {
    if (this.props.events.length) {
      return (
        this.showCal()
      )
    } else return null
  }

}

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps)(MyCalendar)