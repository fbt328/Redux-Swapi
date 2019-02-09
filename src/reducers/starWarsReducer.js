// import /* we need our action types here*/ "../actions";
import { CHARS_FETCHING } from "../actions";
import { CHARS_SUCCESS } from "../actions";
import { CHARS_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARS_FETCHING:
      return {...state, fetching: true};
    case CHARS_SUCCESS:
      return {...state, fetching: false, characters: [...state.characters, ...action.payload]};
    case CHARS_FAILURE:
      return {...state, error: action.payload };
    default:
      return state;
  }
};

// Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.