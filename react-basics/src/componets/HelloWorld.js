import React from "react";

const HelloWorld = () => {
  function handelClick() {
    alert("Button Click");
  }

  //   const myElement = <h1>Hello World</h1>; --JSX Code

  // React code
  //   return React.createElement("h1", null, "Hello World");

  const name = "Harsh";
  const addition = 1 + 2;

  return (
    <div>
      <h1 className="title">Titel</h1>
      <h2>Sub Titel</h2>
      <p>{name}</p>
      <p>{addition}</p>
      <button onClick={handelClick}>Click</button>
    </div>
  );
};

export default HelloWorld;
