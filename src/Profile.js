import PropTypes from "prop-types";
export default function Profile({ Fullname, Bio, Proffession, myFunction, children }) {
  return (
    <div>
      <h1>{Fullname}</h1>
      <h2>{Bio}</h2>
      <h3>{Proffession}</h3>

      <button onClick={() => myFunction(Fullname)}>click me to see the truth</button>
      {children}
    </div>
  );
}

Profile.defaultProps = {
  name: "this my default name"
};

Profile.propTypes = {
  bio: PropTypes.string
};
