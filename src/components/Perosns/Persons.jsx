import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Person from '../person/Person';
import '../person/person.css';

const Persons = () => {

    const personsData = useLoaderData();
    // console.log(personsData);


    return (
        <div>
            <h2>
                Number of persons {personsData.length}
            </h2>

            <div className='all-persons'>
                {
                    personsData.map(person =>
                        <Person
                            key={person.id}
                            person= {person}
                        />)
                }
            </div>

        </div>
    );
}

export default Persons;