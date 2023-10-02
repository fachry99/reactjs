import React from "react";
import PropTypes from "prop-types";

function Count({ text, count }) {
  console.log("Rendering Count");
  return (
    <div>
      {text} - {count}
    </div>
  );
}

Count.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default React.memo(Count);
