import React from 'react';
import './person.css'
import { Link } from 'react-router-dom';
import Persons from '../Perosns/Persons';

const Person = ({ person }) => {
    console.log(person)
    return (
        <div className='single-person'>
            <h3>
                Id: {person.id}
            </h3>
            <h4>
                Name: {person.name}
            </h4>
            <p>
                website: {person.website}
            </p>
            <Link className='button' to={`/person/${person.id}`}>
                More details
            </Link>
        </div>
    );
}

export default Person;