import React from "react";

const Props = ({ fname, lname, age, sex }) => {
  return (
    <div>
      <h1>Fname: {fname} </h1>
      <h1>Lname: {lname}</h1>
      <hr />
    </div>
  );
};

export default Props;
