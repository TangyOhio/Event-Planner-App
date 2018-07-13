
export const addEvent = (event) => {
  return (dispatch) => {
    axios.post('/api/events', { event })
      .then(res => {
        dispatch({ type: ADD_EVENT, event: res.data, headers: res.headers })
      })
  }
}

export const getEvents = () => {
  return (dispatch) => {
    axios.get('/api/events')
      .then(res => {
        dispatch({ type: EVENTS, events: res.data, headers: res.headers })
      })
  }
}

export const deleteEvent = (id) => {
  return (dispatch) => {
    axios.put(`/api/events/${id}`)
      .then(res => {
        dispatch({ type: DELETE_EVENT, id, headers: res.headers })
      })
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case 'EVENTS':
      return action.events
    case 'ADD_EVENT':
      return [action.event, ...state];
    case 'DELETE_EVENT':
      return [action.event]
    default:
      return state
  }
}

export default events;