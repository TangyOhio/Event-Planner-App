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
  crudButtons = (event) => {
    const { account } = this.props
    if (account.is_admin || account.id === event.user_id) {
      return (
        <Fragment>
          <Button onClick={() => this.props.history.push(`/edit/${event.id}`)} color="green">
            Edit Event
            </Button>
          <Button onClick={() => this.deleteEvent(event.id)} color="red">
            Remove Event
            </Button>
        </Fragment>
      )
    } else return null
  }

  render() {
    const { event } = this.props
    return (
      this.crudButtons(event)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(CRUDButtons)
