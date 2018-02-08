import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions';

function entries (state = {}, action) {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            // Take the entries and merge them into the state.
            return {
                ...state,
                ...action.entries
            }
        case ADD_ENTRY:
            return {
                ...state,
                ...action.entry
            }
        default:
            return state;
    }
}

export default entries