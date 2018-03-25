import React from 'react';

import classes from './Person.css';

const person = (props) => {
    // const rnd = Math.random();
    // console.log('rnd:', rnd);
    // if (rnd > 0.7) {
    //     throw new Error('lol');
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

// class person extends React.Component {
//     render() {
//         return <p>My name is {this.props}</p>
//     }
// }

export default person;