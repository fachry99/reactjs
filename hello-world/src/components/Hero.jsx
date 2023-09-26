import PropTypes from "prop-types";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }
  return <div>{heroName}</div>;
}

Hero.propTypes = {
  heroName: PropTypes.string.isRequired,
};

export default Hero;
