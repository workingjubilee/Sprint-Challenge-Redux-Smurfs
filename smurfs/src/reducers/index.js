import { GET_SMURFS, GET_ERROR, GET_SUCCESS, CREATE_SMURFS, CREATE_ERROR, CREATE_SUCCESS, VISIT_GARGAMEL, DELETE_SMURF, DELETE_ERROR, DELETE_SUCCESS } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  getting: false,
  list: [],
  getError: {},
  creating: false,
  createError: {},
  gargamel: false,
  gargamelList: [],
  deleting: false,
  deleteError: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS: return {
      ...state,
      getting: true
    }
    case GET_ERROR: return {
      ...state,
      getting: false,
      getError: action.payload
    }
    case GET_SUCCESS: return {
      ...state,
      getting: false,
      list: action.payload
    }
    case CREATE_SMURFS: return {
      ...state,
      creating: true
    }
    case CREATE_ERROR: return {
      ...state,
      creating: false,
      createError: action.payload
    }
    case CREATE_SUCCESS: return {
      ...state,
      creating: false,
      list: action.payload
    }
    case VISIT_GARGAMEL: return {
      ...state,
      gargamel: !state.gargamel,
      gargamelList: state.list
    }
    case DELETE_SMURF: return {
      ...state,
      deleting: true
    }
    case DELETE_ERROR: return {
      ...state,
      deleting: false,
      deleteError: action.payload
    }
    case DELETE_SUCCESS: return {
      ...state,
      deleting: false,
      list: action.payload
    }
    default: return state
  }
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
