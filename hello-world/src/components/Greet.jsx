import PropTypes from "prop-types";

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

Greet.propTypes = {
  name: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
