import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updateArray = state.results.filter(res => res.id !== action.resultElId);
    return updateObject(state, {results: updateArray});
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result*2})});
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    }
    return state;

};

export default reducer;