//Doesn't need any more

// import * as actionTypes from './actions/actionsTypes';
//
// const initialState = {
//     counter: 0,
//     results: []
// }
//
// const reducer = (state = initialState, action) => {
//     switch ( action.type ) {
//         case actionTypes.INCREMENT:
//             const newState = Object.assign({}, state);
//             newState.counter = state.counter + 1;
//             return newState;
//         case actionTypes.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case actionTypes.ADD:
//             return {
//                 ...state,
//                 counter: state.counter + action.val
//             }
//         case actionTypes.SUBTRACT:
//             return {
//                 ...state,
//                 counter: state.counter - action.val
//             }
//         case actionTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.concat({id: new Date(), value: state.counter})
//             }
//         case actionTypes.DELETE_RESULT:
//             // copy array, but in case of object inside array - iit is points the same object, only for removing, not changing
//             // const id = 2;
//             // const newArray = [...state.results];
//             // newArray.splice(id, 1)
//             const updateArray = state.results.filter(res => res.id !== action.resultElId);
//             return {
//                 ...state,
//                 results: updateArray
//             }
//     }
//     return state;
//
// };
//
// export default reducer;