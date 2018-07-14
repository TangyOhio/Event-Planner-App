import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { connect } from 'react-redux'
import { getEvents } from '../../reducers/events';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment)

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class MyCalendar extends React.Component {
  state = { newEvents: [] }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getEvents())
  }

  // The function that formats the dates to be tossed in the calendar
  formatEvents = (events) => {
    return events.map(event => {
      return {
        start: moment(`${event.date}`).format(),
        end: moment(`${event.date}`).add(1, "days").format(),
        title: event.title
      }
    })
  }
  
  showCal = () => (
    <BigCalendar
      events={this.formatEvents(this.props.events)}
      defaultDate={new Date()}
      views={allViews}
      defaultView='month'
      step={60}
      style={{ height: '100vh' }}
      showMultiDayTimes
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