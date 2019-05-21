const initilState = {
    persons: []
}

const reducer = (state = initilState, action) => {
    switch ( action.type ) {
        case 'ADD_USER':
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case 'DELETE_USER':
            const updateArray = state.persons.filter(res => res.id !== action.resultElId);
            return {
                ...state,
                persons: updateArray
            }
    }
    return state;
}

export default reducer;