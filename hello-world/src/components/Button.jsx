import React from "react";
import PropTypes from "prop-types";

function Button({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(Button);
