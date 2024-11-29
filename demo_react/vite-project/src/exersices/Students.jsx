import PropTypes from "prop-types";

export default function Students(props) {
  return (
    <div className="student">
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>
        is {props.name} student? {props.isstudent ? "yes" : "no"}
      </p>
    </div>
  );
}

// Define propTypes for the component
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isstudent: PropTypes.bool,
};

Students.defaultProps = {
  name: "gues",
  age: 0,
  isstudent: false,
};
