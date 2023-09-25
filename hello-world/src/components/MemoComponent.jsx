import React from "react";

function MemoComponent({ name }) {
  console.log("Memo Component Render");
  return <div>{name}</div>;
}

export default React.memo(MemoComponent);
//React.memo is a higher order component. It's similar to React.PureComponent but for function components instead of classes.
