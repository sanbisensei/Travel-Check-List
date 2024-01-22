import { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'black':'white'}}>name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population : {population}</p>
            <p>Area : {area}</p>
            <button onClick={() =>handleVisitedCountry(country.name.common)}>Mark  Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Visit'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}

        </div>
    );
};

export default Country;