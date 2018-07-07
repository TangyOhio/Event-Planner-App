const SET_HEADERS = 'SET_HEADERS';

export const setHeaders = headers => {
  return { type: SET_HEADERS, headers };
};



const headers = (state = [], action) => {
  switch(action.type){
    case SET_HEADERS: 
      return action.headers;
    default: 
      return state
  }
}

export default headers;