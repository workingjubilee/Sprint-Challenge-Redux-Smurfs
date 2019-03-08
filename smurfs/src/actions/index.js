import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_ERROR = 'GET_ERROR';
export const CREATE_SMURFS = 'CREATE_SMURFS';
export const CREATE_ERROR = 'CREATE_ERROR';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const VISIT_GARGAMEL = 'VISIT_GARGAMEL';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_ERROR = 'DELETE_ERROR';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
  console.log("Fired!");
  dispatch( {type: GET_SMURFS} );
  axios.get('http://localhost:3333/smurfs/')
    .then(result => {
      dispatch( {type: GET_SUCCESS, payload: result.data} )
    })
    .catch(error => {
      dispatch( {type: GET_ERROR, payload: error} )
    });
};

export const createSmurf = data => dispatch => {
  console.log("Fired!");
  dispatch( {type: CREATE_SMURFS} );
  axios.post('http://localhost:3333/smurfs/', data)
    .then(result => {
      dispatch( {type: CREATE_SUCCESS, payload: result.data} )
    })
    .catch(error => {
      dispatch( {type: CREATE_ERROR, payload: error}    )
    });
};

export const visitGargamel = data => dispatch => {
  dispatch( {type: VISIT_GARGAMEL} );
};

export const deleteSmurf = id => dispatch => {
  dispatch( {type: DELETE_SMURF} );
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(result => {
      dispatch( {type: DELETE_SUCCESS, payload: result.data} )
    })
    .catch(error => {
      dispatch({type: DELETE_ERROR, payload: error})
    })
};


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
