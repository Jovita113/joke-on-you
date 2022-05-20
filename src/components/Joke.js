import React from "react";

const Joke = ({ joke, type, setup, delivery, category }) => {
  return (
    <li>
      <div style={{color: "white"}}>{delivery || setup ? delivery&&setup : joke}</div>
      <div>{category}</div>
      <div style={{ color: "green"}}><i>Type: </i>{type}</div>
    </li>
  );
};

export default Joke;
