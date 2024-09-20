import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Hrash",
      lastName: "Mane",
      email: "harsh@gmail.com",
    };
  }

  updateEmployee() {
    this.setState({
      firstName: "shubham",
      lastName: "parit",
    });
  }

  render() {
    return (
      <div>
        <h1>Employee</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <button onClick={() => this.updateEmployee()}>updateEmployee</button>
      </div>
    );
  }
}

export default Employee;
