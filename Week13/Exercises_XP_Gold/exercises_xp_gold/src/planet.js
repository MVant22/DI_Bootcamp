import React from 'react';

function PlanetList(){
    const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

    return(
        <div className='m-5'>
            <ul className='list-group'>
                {planets.map((planet, index) => (
                    <li key={index} className='list-group-item border-0'>
                        {planet}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlanetList