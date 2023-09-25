import React from "react";

// function FRInput() {
//   return (
//     <div>
//       <input></input>
//     </div>
//   );
// }

const FRInput = React.forwardRef(function FRInput(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

FRInput.displayName = "FRInput";

export default FRInput;
