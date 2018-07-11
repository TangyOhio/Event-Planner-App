import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class MyCalendar extends React.Component {
  state = { newEvents: [] }

  componentDidMount() {
    console.log(this.props.events)
    this.setState({ newEvents: this.props.events })
  }
  
  showCal = () => (
    <BigCalendar
      events={this.state.newEvents}
      defaultDate={new Date()}
      views={allViews}
      defaultView='month'
      step={60}
      style={{ height: '100vh' }}
      showMultiDayTimes
    />
  )

  render() {
    if (this.state.newEvents.length) {
      return (
        this.showCal()
      )
    } else return null
  }

}

export default MyCalendar