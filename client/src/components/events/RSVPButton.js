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
        dispatch(setFlash('You Successfully Registered', 'green'))
      }).catch(err => {
        dispatch(setHeaders(err.headers))
        dispatch(setFlash('Error Registering', 'red'))
      })
  }

  render() {
    const { event } = this.props
    return(
      <Button onClick={() => this.handleRSVP(event.id)}>Register</Button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(RSVPButton)