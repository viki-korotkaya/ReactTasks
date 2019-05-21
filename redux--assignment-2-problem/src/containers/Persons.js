import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPersonAddedHandler: (name, age) => dispatch({type: 'ADD_USER', personData: {name: name, age: age}}),
        onPersonDeletedHandler: (id) => dispatch({type: 'DELETE_USER', resultElId: id})
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Persons);