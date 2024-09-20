import { useState } from "react";
const User = () => {
  //   const [firstName, setfirstName] = useState("Harsha");
  //   const [lastName, setlastName] = useState("Mane");
  //   const [email, setEmail] = useState("harsha@gmail.com");

  const [user, setUser] = useState({
    firstName: "Saachin",
    lastName: "Mane",
    email: "Saachin@gmail.com",
  });

  function handleUpdate() {
    // setfirstName("shubham");
    // setlastName("parit");
    // setEmail("shubham@gmail.com");
    setUser({
      firstName: "Harsha",
      lastName: "Mane",
      email: "Harsha@gamil.com",
    });
  }

  return (
    <div>
      <h1>User Detailes</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>

      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default User;
