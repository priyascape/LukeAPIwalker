import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Details = (props) => {

    const [info, setInfo] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
        .then(res => {
            console.log("##########");
            console.log(res);
            console.log("##########");
            setInfo(res.data);
        } )
        .catch(err => setError(true))

    }, [props.category, props.id]);


    return (
        <div>
            
            <h1>{info.name}</h1>
            {
                error ? 
                <>
                    <h1>These are not the droids you're looking for</h1>
                    <img src="https://www.monstersandcritics.com/wp-content/uploads/2021/04/Obi-Wan-Kenobi.jpg" alt="Obi-Wan-Kenobi"/>
                </> : 
                props.category === "people" ? 
                <>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Hair color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
                </> : props.category === "planets"?
                <>
                <h3>Climate: {info.climate}</h3>
                <h3>Terrain: {info.terrain}</h3>
                <h3>Surface Water: {info.surface_water}</h3>
                <h3>Population: {info.population}</h3>
                </> : ""
            }
        </div>
    );
};

export default Details;