import React from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import { setFlash } from '../../reducers/flash'
import { connect } from 'react-redux'
import { setHeaders } from '../../reducers/headers'


class RSVPButton extends React.Component {
  // Assigns an rsvp to a person when they click register 
  handleRSVP = (id) => {
    const { account, dispatch } = this.props
    let rsvp = { user_id: account.id, event_id: id }
    axios.post('/api/rsvps', { rsvp })
      .then(res => {
        dispatch(setHeaders(res.headers))
        return (
          alert("You successfully registered!")
        ) 
      }).catch(err => {
        dispatch(setHeaders(err.headers))
        dispatch(setFlash('Error Registering', 'red'))
      })
  }

  // Cancels the rsvp, and updates the list
  handleCancel = (id) => {
    axios.delete(`/api/rsvps/${id}`)
      .then(window.location.reload())
  }

  render() {
    const { event, account, rsvp, cancel } = this.props
    if (cancel) {
      return <Button onClick = {() => this.handleCancel(rsvp.id)} color='red'>Remove RSVP</Button>
    } else {
        if (account.id) {
          return (
            <Button onClick={() => this.handleRSVP(event.id)}>Register</Button>
          )
        } else {
          return (
            <Button onClick={() => this.props.history.push(`/register`)}>Register to RSVP</Button>
          )
        }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(RSVPButton)
