import { GET_SMURFS, GET_ERROR, GET_SUCCESS, CREATE_SMURFS, CREATE_ERROR, CREATE_SUCCESS } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {

};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS: return state
    case GET_ERROR: return state
    case GET_SUCCESS: return state
    case CREATE_SMURFS: return state
    case CREATE_ERROR: return state
    case CREATE_SUCCESS: return state
    default: return state
  };
}

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

  // You'll only need one smurf reducer for this project.
  // Feel free to export it as a default and import as rootReducer.
  // This will guard your namespacing issues.
  // There is no need for 'combineReducers' in this project.
  // Components can then read your store as, `state` and not `state.fooReducer`.
