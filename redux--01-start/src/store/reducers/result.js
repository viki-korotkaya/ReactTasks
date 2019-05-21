import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // copy array, but in case of object inside array - iit is points the same object, only for removing, not changing
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updateArray = state.results.filter(res => res.id !== action.resultElId);
            return {
                ...state,
                results: updateArray
            }
    }
    return state;

};

export default reducer;