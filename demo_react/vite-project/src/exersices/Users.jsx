import PropTypes from "prop-types"; // Correct capitalization

export default function Users(props) {
  const welcome = <h1>hello {props.name}</h1>;
  const login = <h1>{props.name} please log in</h1>;
  return props.isloggedIn ? welcome : login;
}

// Define propTypes for the component
Users.propTypes = {
  // Correct property name
  name: PropTypes.string,
  isloggedIn: PropTypes.bool,
};

// Define defaultProps for the component
Users.defaultProps = {
  name: "guest",
  isloggedIn: false,
};
