import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { removeEvent } from '../../reducers/events'

class CRUDButtons extends Component {

  // The function that deletes the event
  deleteEvent = (id) => {
    const { dispatch } = this.props
    dispatch(removeEvent(id))
  }

  // Conditionally renders the edit or delete button based on whether or not a user made the event or is an admin
  crudButtons = (event, history) => {
    const { account } = this.props
    if (account.is_admin || account.id === event.user_id) {
      return (
        <Fragment>
          <Button onClick={() => history.push({
            pathname: `/eventform`,
            state: { ...event, edit: true }
          })} 
          color="yellow">
            Edit Event
          </Button>
          <Button color="gray" onClick={() => { if (window.confirm('Are you sure you want to delete this event?')) { this.deleteEvent(event.id) }; }}>
            Remove Event
          </Button>
        </Fragment>
      )
    } else return null
  }

  render() {
    const { event, history } = this.props
    return (
      this.crudButtons(event, history)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(CRUDButtons)
