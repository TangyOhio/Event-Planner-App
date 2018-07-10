import React from 'react'
import Calendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.momentLocalizer(moment) // or globalizeLocalizer


class MyCalendar extends React.Component {
  state = { newEvents: [] }

  componentDidMount() {
    this.setState({ newEvents: this.props.events })
    console.log(this.state.newEvents)
  }
  
  showCal = () => (
    <Calendar
      events={this.state.newEvents}
      defaultDate={new Date()}
      defaultView='month'
      style={{ height: '100vh' }}
      showMultiDayTimes
    />
  )

  render() {
    console.log(this.props)
    return (
      this.showCal()
    )
  }

}

export default MyCalendar