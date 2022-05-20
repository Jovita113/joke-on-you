import React from 'react';

const Joke = ({joke, type, setup, delivery}) => {
    return (
        <>
        <div style={{color: 'red'}}>
            {joke}
        </div>
        {type}
        <div>
        {setup}
        </div>
        <div>
        {delivery}
        </div>
        </>
    );
};

export default Joke;