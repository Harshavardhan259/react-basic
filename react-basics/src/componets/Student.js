// const Student = (props) =>
const Student = (props) => {
  const { name, rollNo, email } = props;

  return (
    <div>
      <h1>Students Details</h1>
      <p>Student Name: {name}</p>
      <p>Student RollNo: {rollNo}</p>
      <p>Student Email: {email} </p>
      {/* <p>Array data: {props.data}</p> */}
    </div>
  );
};

export default Student;
