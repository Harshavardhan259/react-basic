import "./App.css";
import Welcome from "./componets/Wecome";
import Greeting from "./componets/Greeting";
import {
  FirstComponent as FC,
  SecondComponent as SC,
} from "./componets/MyComponet";

import MyComponet from "./componets/MyComponet";
import HelloWorld from "./componets/HelloWorld";
import Student from "./componets/Student";
import Employee from "./componets/Employee";
import EventHandling from "./componets/EventHandling";
import ConditinalRendering from "./componets/ConditinalRendering";
import User from "./componets/User";

function App() {
  // const student = {
  //   name: "Suraj",
  //   rollNo: 24,
  //   email: "suraj@gmail.com",
  // };

  const skills = ["HTML", "CSS", "JAVASCRIPTS"];

  return (
    <div className="App">
      {/* <Welcome name="Harshavardhan" />
      <Welcome name="Ramesh" />
      <Greeting name="shubham" />
      <FC />
      <SC />
      <MyComponet /> */}

      {/* <HelloWorld /> */}

      {/* <Student
        name="Harshavardhan"
        rollNo="23"
        email="harshavardhan@gmail.com"
      />

      <Student name="Shubham" rollNo="23" email="Shubham@gmail.com" /> */}

      {/* <Student data={skills} /> */}

      {/* <Employee /> */}

      {/* <EventHandling /> */}
      {/* <ConditinalRendering /> */}

      <User />
    </div>
  );
}

export default App;
