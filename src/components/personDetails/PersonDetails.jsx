import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PersonDetails = () => {

    const personData = useLoaderData();
    console.log(personData);

    return (
        <div>
            <h2>This is perosn Details component </h2>

            <h4>name: {personData.name} </h4>
            
        </div>
    );
}

export default PersonDetails;