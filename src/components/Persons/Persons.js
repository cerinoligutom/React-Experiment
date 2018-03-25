import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    // return <ErrorBoundary key={person.id}>
    //   <Person 
    //   click={() => this.deletePersonHandler(index)}
    //   name={person.name} 
    //   age={person.age}
    //   changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>

    return <Person
        key={person.id}
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)} />

});

export default persons;