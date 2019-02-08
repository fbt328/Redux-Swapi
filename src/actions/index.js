// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const CHARS_FETCHING = 'CHARS_FETCHING';
export const CHARS_SUCCESS  = 'CHARS_SUCCESS';
export const CHARS_FAILURE = 'CHARS_FAILURE';

export const getChars = () => dispatch => {
    dispatch ({type: CHARS_FETCHING });
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res =>
            dispatch({type: CHARS_SUCCESS, payload: res.data.results}))
        .catch(err => dispatch({type: CHARS_FAILURE, payload: err}))
};


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
