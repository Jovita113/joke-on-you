import React from 'react';
import { useState, useEffect } from 'react';
import Joke from './Joke';

const Jokes = () => {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result.jokes);
                },

                (error) => {
                    setErrorMsg(error.message); 
                }
            )
    }, []);

    return (
        
        <ul>
            {data.map((joke, id) => (
                <Joke key={id} joke={joke.joke} type={joke.type} setup={joke.setup} delivery={joke.delivery}/>
                
            ))} {" "}
        </ul>
    );
}

export default Jokes;
