import axios from 'axios'

const EVENTS = 'EVENTS'
const ADD_EVENT = 'ADD_EVENT'
const REMOVE_EVENT = 'REMOVE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'


export const getEvents = () => {
  return (dispatch) => {
    axios.get('/api/events')
      .then(res => {
        dispatch({ type: EVENTS, events: res.data, headers: res.headers })
      })
  }
}

export const addEvent = (event) => {
  return (dispatch) => {
    axios.post('/api/events', { event })
      .then(res => {
        dispatch({ type: ADD_EVENT, event: res.data, headers: res.headers })
      })
  }
}

export const updateEvent = (event) => {
  return (dispatch) => {
    axios.put(`/api/events/${event.id}`, { event })
      .then(res => {
        dispatch({ type: UPDATE_EVENT, event: res.data, headers: res.headers })
      })
  }
}

export const removeEvent = (id) => {
  return (dispatch) => {
    axios.delete(`/api/events/${id}`)
      .then(res => {
        dispatch({ type: REMOVE_EVENT, id, headers: res.headers })
      })
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case EVENTS:
      return action.events
    case ADD_EVENT:
      return [action.event, ...state]
    case UPDATE_EVENT:
      return state.map(event => {
        if (event.id === action.event.id)
          return action.event
        return event
      })
    case REMOVE_EVENT:
      return state.filter(e => e.id !== action.id)
    default:
      return state
  }
}

export default events