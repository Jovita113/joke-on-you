import React from "react";

const Joke = ({ joke, setup, delivery }) => {
  return (
    <div className="container">
        <div>
            {joke}
        </div>
        <div>
            {setup}
        </div>
        <div>
            {delivery}
        </div>
    </div>
  );
};

export default Joke;
